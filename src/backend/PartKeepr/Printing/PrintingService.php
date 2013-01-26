<?php
namespace PartKeepr\Printing;

use PartKeepr\Printing\PrintingJob\PrintingJob;

use PartKeepr\PartKeepr,
	PartKeepr\Printing\Exceptions\InvalidArgumentException,
	PartKeepr\Printing\Exceptions\RendererNotFoundException,
	PartKeepr\Printing\PageBasicLayout\PageBasicLayoutManager,
	PartKeepr\Printing\PDFLabelRenderer,
	PartKeepr\Printing\PrintingJobConfiguration\PrintingJobConfigurationManager,
	PartKeepr\Printing\Utils\DecodeConfiguration,
	PartKeepr\Service\Service,
	PartKeepr\StorageLocation\StorageLocation,
	PartKeepr\UploadedFile\TempUploadedFile,
	PartKeepr\User\UserManager,
	PartKeepr\Util\Configuration as PartKeeprConfiguration;

/**
 * This service is the entry point for our printing/exporting
 * service.
 */
class PrintingService extends Service {
	/**
	 * This array contains all object types which can be used to
	 * for printing. Only these object types will be accepted by the
	 * generatePrintout method to be able to restrict access to the
	 * database.
	 * The value is used to display the selection to the user.
	 */
	private $availableObjectTypes = array(
			'PartKeepr\StorageLocation\StorageLocation' => 'StorageLocation',
			'PartKeepr\Part\Part' => 'Part'
			);
	
	/**
	 * Prints the selected storage locations to a dedicated file
	 * and returns the url to this file.
	 */
	public function startExport () {
		$this->requireParameter("ids");
		$this->requireParameter("configuration");
		$this->requireParameter("objectType");
		
		$ids = explode(',',$this->getParameter("ids"));
		$configurationId = $this->getParameter("configuration");
		$objectType = $this->getParameter("objectType");
		
		$printerUser = null;
		if ($this->hasParameter("target") && $this->getParameter("target") != "") {
			$printerUser = UserManager::getInstance()->getUser($this->getParameter("target"));
		}		
		
		// check object type for valid object types for security reasons.
		// See Select query below and be aware of SQL injection!
		if ( !array_key_exists($objectType, $this->availableObjectTypes) ){
			throw new RendererNotFoundException("Object type is forbidden!", $objectType, array_keys($this->availableObjectTypes));
		}
		
		$configuration = PrintingJobConfigurationManager::getInstance()->getEntity( $configurationId );
		
		$query = PartKeepr::getEM()->createQuery("SELECT s FROM $objectType s WHERE s.id IN (?1)");
		$query->setParameter(1,$ids);
		$dataToRender = $query->getResult();
		
		$renderingObjects = array();
		if ($configuration->getPageLayout() !== null ){
			$renderingObjects[] = $configuration->getPageLayout();
		}
		
		$renderer = RendererFactoryRegistry::getInstance()->getRendererFactory( $configuration->getExportRenderer())
						->createInstance( $renderingObjects, $configuration->getRendererConfiguration() );

		$renderer->passRenderingData($dataToRender);
		
		$tempFile = tempnam("/tmp", "PWC");
		$renderer->storeResult( $tempFile );
		
		$tmpFile = new TempUploadedFile();
		$tmpFile->replace($tempFile);
		$tmpFile->setOriginalFilename("generatedFile.".$renderer->getSuggestedExtension());
		PartKeepr::getEM()->persist($tmpFile);
		PartKeepr::getEM()->flush();
		
		//Create a job if we have a valid printer target
		if ($printerUser !== null){
			$job = new PrintingJob();
			$job->setData($tmpFile);
			$job->setTarget($printerUser);
			PartKeepr::getEM()->persist($job);
			PartKeepr::getEM()->flush();
		}

		return array("fileid" => $tmpFile->getId() );
	}
	
	/**
	 * This service method will return all available renderers for
	 * the given data objecttype to render.
	 */
	public function getAvailableRenderer() {
		$objectType = $this->getParameter("objectType", null);
		
		// Fail early for this type of request!
		if ( $objectType!==null && !array_key_exists($objectType, $this->availableObjectTypes) ){
			throw new RendererNotFoundException("Object type is forbidden!", $objectType, array_keys($this->availableObjectTypes) );
		}
			
		$data = array();
		$renderers = $objectType === null 
			? RendererFactoryRegistry::getInstance()->getRendererFactory( null )
			: RendererFactoryRegistry::getInstance()->getRendererFactoryForRenderData( $objectType );
		
		foreach ( $renderers as $renderer ){
			$data[] = array("id" => $renderer->getCreatedClassname(), 
					"name" => $renderer->getName() );
		}
		
		return array("data" => $data );
	}
	
	/**
	 * Retrieve the available types which can be used with the given renderer.
	 * If no renderer parameter is passed, we will return all types which are supported in
	 * general.
	 */
	public function getAvailableTypes() {
		$rendererName = $this->getParameter("renderer", "");
		$data = array();
		
		if ($rendererName==""){		
			foreach ($this->availableObjectTypes as $type => $userType){
				$data[] = array("id" => $type
						,"name" => $userType );
			}
		}else{
			$factory = RendererFactoryRegistry::getInstance()->getRendererFactory($rendererName);
			$supportedTypes = $factory->getSupportedClassesForRendering();
			
			//var_dump($supportedTypes);
			
			foreach ($supportedTypes as $type ){
				if ( array_key_exists( $type, $this->availableObjectTypes ) ){				
					$data[] = array("id" => $type
							,"name" => $this->availableObjectTypes[$type] );
				}
			}
		}
		
		return array("data" => $data );
	}
	
	/**
	 * Retrieve the needed parameters for the renderer class.
	 */
	public function getNeededParameters(){
		$this->requireParameter("renderer");
		$rendererName = $this->getParameter("renderer", "");
		$data = array();
		
		$factory = RendererFactoryRegistry::getInstance()->getRendererFactory($rendererName);
		return array("data" => $factory->getParameterObjectTypes() );
	}
	
}