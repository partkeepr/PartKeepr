<?php

namespace PartKeepr\SystemPreferenceBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use PartKeepr\DoctrineReflectionBundle\Annotation\IgnoreIds;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

// ToDo: fix this - move this Route annotation to the correct place
// "partkeepr.system_preference.get_preferences"         # Controller
/**
* @Route(
*     name="PartKeeprSystemPreferenceGet",
*     path="/system_preferences",
*     defaults={"_api_resource_class"=SystemPreference::class, "_api_collection_operation_name"="get_preferences"}
* )
* @Method("GET")
**/

// ToDo: fix this - move this Route annotation to the correct place
// "partkeepr.system_preference.set_preference"         # Controller
/**
* @Route(
*     name="PartKeeprSystemPreferenceSet",
*     path="/system_preferences",
*     defaults={"_api_resource_class"=SystemPreference::class, "_api_collection_operation_name"="set_preference"}
* )
* @Method("POST")
**/
// ToDo: fix this - move this Route annotation to the correct place
// "partkeepr.system_preference.set_preference"         # Controller
/**
 * @Route(
 *     name="PartKeeprSystemPreferenceSet",
 *     path="/system_preferences",
 *     defaults={"_api_resource_class"=SystemPreference::class, "_api_collection_operation_name"="set_preference"}
 * )
 * @Method("PUT")
 **/

// ToDo: fix this - move this Route annotation to the correct place
// "partkeepr.system_preference.delete_preference"         # Controller
/**
* @Route(
*     name="PartKeeprSystemPreferenceDelete",
*     path="/system_preferences",
*     defaults={"_api_resource_class"=SystemPreference::class, "_api_item_operation_name"="delete_preference"}
* )
* @Method("DELETE")
**/

/**
 * Represents a system preference entry.
 *
 * System preferences are a simple key => value mechanism, where the developer can
 * specify the key and value himself.
 *
 * Note that values are stored internally as serialized PHP values to keep their type.
 *
 * @ApiResource(
 *     attributes={
 *          "normalization_context"={"groups"={"default"}},
 *          "denormalization_context"={"groups"={"default"}} 
 *     },
 *     collectionOperations={
 *       "get_preferences"={"route_name"="PartKeeprSystemPreferenceGet"},
 *       "set_preference"={"route_name"="PartKeeprSystemPreferenceSet"}
 *     },
 *     itemOperations={
 *         "swagger"= {
 *          "method"="GET",
 *          },
 *         "delete_preference"={"route_name"="PartKeeprSystemPreferenceDelete"}
 *     }
 * )
 * @ORM\Entity
 * @TargetService(uri="/api/system_preferences")
 * @IgnoreIds()
 **/
class SystemPreference
{
    /**
     * Defines the key of the system preference.
     *
     * @ORM\Column(type="string",length=255)
     * @ORM\Id()
     *
     * @Groups({"default"})
     *
     * @var string
     */
    private $preferenceKey;

    /**
     * Defines the value. Note that the value is internally stored as a serialized string.
     *
     * @ORM\Column(type="text")
     *
     * @Groups({"default"})
     *
     * @var mixed
     */
    private $preferenceValue;

    /**
     * Returns the key of this entry.
     *
     * @return string
     */
    public function getPreferenceKey()
    {
        return $this->preferenceKey;
    }

    /**
     * Sets the key for this user preference.
     *
     * @param string $key The key name
     */
    public function setPreferenceKey($key)
    {
        $this->preferenceKey = $key;
    }

    /**
     * Returns the value for this entry.
     *
     * @return mixed The value
     */
    public function getPreferenceValue()
    {
        return unserialize($this->preferenceValue);
    }

    /**
     * Sets the value for this entry.
     *
     * @param mixed $value
     */
    public function setPreferenceValue($value)
    {
        $this->preferenceValue = serialize($value);
    }
}
