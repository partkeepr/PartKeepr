<?php
namespace PartKeepr\DoctrineReflectionBundle\Services;

use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\ClassMetadata;
use Symfony\Component\Templating\EngineInterface;

class ReflectionService {

    /** @var EntityManager */
    protected $em;

    protected $templateEngine;

    public function __construct (Registry $doctrine, EngineInterface $templateEngine) {
        $this->templateEngine = $templateEngine;
        $this->em = $doctrine->getManager();
    }

    /**
     * Returns a list of all registered entities, converted to the ExtJS naming scheme (. instead of \)
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
    $entity = $this->convertExtJSToPHPClassName($entity);

    $cm = $this->em->getClassMetadata($entity);

    $fields = $cm->getFieldNames();

    $mappings = array();

    foreach ($fields as $field) {
        $currentMapping = $cm->getFieldMapping($field);

        $mappings[] = array(
            "name" => $currentMapping["fieldName"],
            "type" => $this->getExtJSFieldMapping($currentMapping["type"]),
        );
    }

    $renderParams = array(
        "fields" => $mappings,
        "className" => $this->convertPHPToExtJSClassName($entity),
    );

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