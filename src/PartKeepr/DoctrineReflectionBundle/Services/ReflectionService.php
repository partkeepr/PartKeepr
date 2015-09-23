<?php
namespace PartKeepr\DoctrineReflectionBundle\Services;

use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\Common\Annotations\Reader;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\Mapping\ClassMetadataInfo;
use Symfony\Component\Templating\EngineInterface;

class ReflectionService
{

    /** @var EntityManager */
    protected $em;

    protected $templateEngine;

    protected $reader;

    public function __construct(Registry $doctrine, EngineInterface $templateEngine, Reader $reader)
    {
        $this->templateEngine = $templateEngine;
        $this->em = $doctrine->getManager();
        $this->reader = $reader;
    }

    /**
     * Returns a list of all registered entities, converted to the ExtJS naming scheme (. instead of \)
     *
     * @return array
     */
    public function getEntities()
    {
        $entities = array();

        $meta = $this->em->getMetadataFactory()->getAllMetadata();

        foreach ($meta as $m) {
            /** @var ClassMetadata $m */
            $entities[] = $this->convertPHPToExtJSClassName($m->getName());
        }

        return $entities;
    }

    public function getEntity($entity)
    {
        $bIsTree = false;

        $parentClass = "PartKeepr.data.HydraModel";

        $entity = $this->convertExtJSToPHPClassName($entity);

        $cm = $this->em->getClassMetadata($entity);


        if ($cm->getReflectionClass()->isSubclassOf("PartKeepr\CategoryBundle\Entity\AbstractCategory")) {
            $parentClass = "PartKeepr.data.HydraTreeModel";
            $bIsTree = true;
        }


        $fields = $cm->getFieldNames();

        $fieldMappings = array();

        foreach ($fields as $field) {
            $currentMapping = $cm->getFieldMapping($field);

            if ($currentMapping["fieldName"] == "id") {
                $currentMapping["fieldName"] = "@id";
                $currentMapping["type"] = "string";
            }

            $fieldMappings[] = array(
                "name" => $currentMapping["fieldName"],
                "type" => $this->getExtJSFieldMapping($currentMapping["type"]),
            );
        }

        $associations = $cm->getAssociationMappings();

        $associationMappings = array();

        foreach ($associations as $association) {
            $getterPlural = false;
            $associationType = $association["type"];

            switch ($association["type"]) {
                case ClassMetadataInfo::MANY_TO_MANY:
                    $associationType = "MANY_TO_MANY";
                    $getterPlural = true;
                    break;
                case ClassMetadataInfo::MANY_TO_ONE:
                    $associationType = "MANY_TO_ONE";
                    $getterPlural = false;
                    break;
                case ClassMetadataInfo::ONE_TO_MANY:
                    $associationType = "ONE_TO_MANY";
                    $getterPlural = true;
                    break;
                case ClassMetadataInfo::ONE_TO_ONE:
                    $associationType = "ONE_TO_ONE";
                    $getterPlural = false;
                    break;
            }

            $getter = "get".ucfirst($association["fieldName"]);
            $getterField = lcfirst($cm->getReflectionClass()->getShortName()).str_replace(
                ".",
                "",
                $this->convertPHPToExtJSClassName($association["targetEntity"])
            );

            if ($getterPlural) {
                $getterField .= "s";
            }


            // The self-referencing association may not be written for trees, because ExtJS can't load all nodes
            // in one go.
            if (!($bIsTree && $association["targetEntity"] == $entity)) {
                $associationMappings[$associationType][] = array(
                    "name" => $association["fieldName"],
                    "target" => $this->convertPHPToExtJSClassName($association["targetEntity"]),
                    "getter" => $getter,
                    "getterField" => $getterField,
                );
            }
        }

        $renderParams = array(
            "fields" => $fieldMappings,
            "associations" => $associationMappings,
            "className" => $this->convertPHPToExtJSClassName($entity),
            "parentClass" => $parentClass,
        );

        $targetService = $this->reader->getClassAnnotation(
            $cm->getReflectionClass(),
            "PartKeepr\DoctrineReflectionBundle\Annotation\TargetService"
        );

        if ($targetService !== null) {
            $renderParams["uri"] = $targetService->uri;
        }

        $ignoreIds = $this->reader->getClassAnnotation(
            $cm->getReflectionClass(),
            "PartKeepr\DoctrineReflectionBundle\Annotation\IgnoreIds"
        );

        if ($ignoreIds !== null) {
            $renderParams["ignoreIds"] = true;
        } else {
            $renderParams["ignoreIds"] = false;
        }

        return $this->templateEngine->render('PartKeeprDoctrineReflectionBundle::model.js.twig', $renderParams);
    }

    protected function getExtJSFieldMapping($type)
    {
        switch ($type) {
            case "integer":
                return "int";
                break;
            case "string":
                return "string";
                break;
            case "text":
                return "string";
                break;
            case "datetime":
                return "date";
                break;
            case "boolean":
                return "boolean";
                break;
            case "float":
                return "number";
                break;
            case "decimal":
                return "number";
                break;
            case "array":
                return "array";
                break;
        }

        return "undefined";
    }

    protected function convertPHPToExtJSClassName($className)
    {
        return str_replace("\\", ".", $className);
    }

    protected function convertExtJSToPHPClassName($className)
    {
        return str_replace(".", "\\", $className);
    }
}
