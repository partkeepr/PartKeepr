<?php 
namespace PartKeepr\Printing\PrintingJobConfiguration;

use PartKeepr\Printing\PageBasicLayout\PageBasicLayout;

use PartKeepr\Util\BaseEntity,
	PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
    Doctrine\ORM\Mapping as ORM;


/**
 * This is a configuration for a specific job to export.
 * Such a job is bound to a specific type to export and
 * holds all additional configuration options to execute
 * the job correctly.
 * 
 * @ORM\Entity
 */
class PrintingJobConfiguration extends BaseEntity implements Serializable, Deserializable {
	/**
	 * The name of this layout.
	 * @ORM\Column(type="text")
	 */
	private $name;
	
	/**
	 * The comment for this layout.
	 * @ORM\Column(type="text")
	 */
	private $comment;
	
	/**
	 * This holds the object type this configuration is used for.
	 * @ORM\Column(type="text")
	 */
	private $objectType;
	
	/**
	 * The classname of the export renderer.
	 * @ORM\Column(type="text")
	 */
	private $exportRenderer;
	
	/**
	 * This is the layout to use if we are in printing mode.
	 * @ORM\ManyToOne(targetEntity="PartKeepr\Printing\PageBasicLayout\PageBasicLayout")
	 */
	private $pageLayout;
	
	/**
	 * This field holds additional renderer configuration data. This configuration
	 * is very renderer specific and can be used to parametrize the output more.
	 *  
	 * @ORM\Column(type="text")
	 */
	private $rendererConfiguration;
	
	/**
	 * Sets the name.
	 */
	public function setName( $name ){
		$this->name = $name;
	}
	
	/**
	 * Retrieves the name
	 */
	public function getName(){
		return $this->name;
	}
	
	/**
	 * Sets comment.
	 */
	public function setComment( $comment ){
		$this->comment = $comment;
	}

	/**
	 * Rerieve comment.
	 */
	public function getComment(){
		return $this->comment;
	}
	
	/**
	 * Sets object type.
	 */
	public function setObjectType( $type ){
		$this->objectType = $type;
	}

	/**
	 * Retrieve object type.
	 */
	public function getObjectType(  ){
		return $this->objectType;
	}
	
	/**
	 * Sets the export renderer to use for this job.
	 */
	public function setExportRenderer( $rendererName ){
		$this->exportRenderer = $rendererName;
	}

	/**
	 * Retrieve the export renderer.
	 */
	public function getExportRenderer(){
		return $this->exportRenderer;
	}
	
	/**
	 * Sets the page layout.
	 */
	public function setPageLayout( $layout ){
		$this->pageLayout = $layout;
	}

	/**
	 * Retrieves page layout.
	 */
	public function getPageLayout(){
		return $this->pageLayout;
	}
	
	/**
	 * Set render configuration.
	 */
	public function setRendererConfiguration( $cfg ){
		$this->rendererConfiguration = $cfg;
	}
	
	/**
	 * Retrieve render configuration.
	 */
	public function getRendererConfiguration(){
		return $this->rendererConfiguration;
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Util\Serializable::serialize()
	 */
	public function serialize () {
		return array(
				"id" => $this->getId(),
				"name" => $this->getName(),
				"comment" => $this->getComment(),
				"objectType" => $this->getObjectType(),
				"exportRenderer" => $this->getExportRenderer(),
				"pageLayout" => is_object( $this->getPageLayout() ) ? $this->getPageLayout()->getId(): null,
				"rendererConfiguration" => $this->getRendererConfiguration()
		);
	}
	
	/**
	 * (non-PHPdoc)
	 * @see \PartKeepr\Util\Deserializable::deserialize()
	 */
	public function deserialize (array $parameters) {
		foreach ($parameters as $key => $value) {
			switch ($key) {
				case "name":
					$this->setName( $value);
					break;
				case "comment":
					$this->setComment($value);
					break;
				case "objectType":
					$this->setObjectType($value);
					break;
				case "exportRenderer":
					$this->setExportRenderer($value);
					break;
				case "pageLayout":
					if ($value === 0) {
						$this->setPageLayout(null);
					} else {
						try {
							$this->setPageLayout( PageBasicLayout::loadById($value) );
						} catch (\Exception $e) {
							$this->setPageLayout(null);
						}	
					}
					break;
				case "rendererConfiguration":
					$this->setRendererConfiguration($value);
					break;
			}
		}
	}
}
