<?php 
namespace PartKeepr\Printing\PrintingJobConfiguration;

use PartKeepr\Printing\PageBasicLayout\PageBasicLayout;

use PartKeepr\Util\BaseEntity,
	PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable;

/**
 * This is a configuration for a specific job to export.
 * Such a job is bound to a specific type to export and
 * holds all additional configuration options to execute
 * the job correctly.
 * 
 * @Entity
 */
class PrintingJobConfiguration extends BaseEntity implements Serializable, Deserializable {
	/**
	 * The name of this layout.
	 * @Column(type="text") 
	 */
	private $name;
	
	/**
	 * The comment for this layout.
	 * @Column(type="text")
	 */
	private $comment;
	
	/**
	 * This holds the object type this configuration is used for.
	 * @Column(type="text") 
	 */
	private $objectType;
	
	/**
	 * The classname of the export renderer.
	 * @Column(type="text") 
	 */
	private $exportRenderer;
	
	/**
	 * This is the layout to use if we are in printing mode.
	 * @ManyToOne(targetEntity="PartKeepr\Printing\PageBasicLayout\PageBasicLayout")
	 */
	private $pageLayout;
	
	/**
	 * This field holds additional renderer configuration data. This configuration
	 * is very renderer specific and can be used to parametrize the output more.
	 *  
	 * @Column(type="text") 
	 */
	private $rendererConfiguration;
	
	public function setName( $name ){
		$this->name = $name;
	}
	
	public function getName(){
		return $this->name;
	}
	
	public function setComment( $comment ){
		$this->comment = $comment;
	}
	
	public function getComment(){
		return $this->comment;
	}
	
	public function setObjectType( $type ){
		$this->objectType = $type;
	}
	
	public function getObjectType(  ){
		return $this->objectType;
	}
	
	public function setExportRenderer( $rendererName ){
		$this->exportRenderer = $rendererName;
	}
	
	public function getExportRenderer(){
		return $this->exportRenderer;
	}
	
	public function setPageLayout( $layout ){
		$this->pageLayout = $layout;
	}
	
	public function getPageLayout(){
		return $this->pageLayout;
	}
	
	public function setRendererConfiguration( $cfg ){
		$this->rendererConfiguration = $cfg;
	}
	
	public function getRendererConfiguration(){
		return $this->rendererConfiguration;
	}
	
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
