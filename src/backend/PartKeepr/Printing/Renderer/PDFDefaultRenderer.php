<?php
namespace PartKeepr\Printing\Renderer;

use PartKeepr\Part\Part,
	PartKeepr\Printing\RendererFactoryRegistry,
    PartKeepr\Printing\SimpleRendererFactory,
    PartKeepr\Printing\Exceptions\RendererNotFoundException,
	PartKeepr\Printing\PageBasicLayout\PageBasicLayout,
	PartKeepr\Printing\Renderer\TCPDFAbstractRenderer,
    PartKeepr\StorageLocation\StorageLocation
	;

/**
 * This class implements a way to render different datasets to 
 * a labeling layout. 
 */
class PDFDefaultRenderer extends TCPDFAbstractRenderer{
	/**
	 * Our default configuration for this label renderer.
	 * @var array
	 */
	private $defaultConfiguration = array( 
			'barcodeEnable' => false,
			'barcodeType' => 'C128',
			'barcodeWidth' => 30,
			'barcodeWithText' => false,
			'barcode2D' => false,
			'fontFamily' => 'times',
			'fontStyle' => '',
			'fontSize' => 12,
			'text' => '<dl><dt><b>Name:</b></dt><dd>!!name!!</dd><dt><b>Description:</b></dt><dd>!!description!!</dd><dt><b>Footprint:</b></dt><dd>!!footprintName!!</dd></dl>'
			);
	
	public function __construct (PageBasicLayout $layout, array $configuration ) {
		// Apply the personal default configuration here.
		// The base will apply the base default parameters for you.
		$configuration = array_merge( $this->defaultConfiguration, $configuration );
		parent::__construct( $layout, $configuration);		
	}	

	public function passRenderingData( $data ){
		// Here we got our data passed. We have to decide how we want
		// to render the data, so we dispatch it to our internal rendering
		// methods to make the code more clear.
		if ( is_array( $data ) ){
			if (count($data)>0){
				$elem = reset($data);
				if ($elem instanceof StorageLocation){
					$this->renderStorageLocations($data);
				} elseif ($elem instanceof Part){
					$this->renderParts($data);
				}
				else{
					throw new RendererNotFoundException("Unable to handle object type with renderer PDFLabelRenderer.",
							get_class($elem),array("StorageLocation"));
				}
			}
		}
		else{
			// If the selected object is not an array, we make an array first
			// to have only one case to handle.
			passRenderingData( array( $ata ) );
		}
	}
	
	/**
	 * This method renders an array of StorageLocations to our sheet.
	 * @param array $locations
	 */
	private function renderStorageLocations( array $locations ){
		foreach ($locations as $location){
			$this->renderCellFromLocation( $location );
		}
	}
	
	/**
	 * This method just renders the next single cell with the given location 
	 * as content.
	 */
	private function renderCellFromLocation( StorageLocation $location ){
		// Move the pointer to the next cell and initialize PDF class
		// correctly. Also draws the grid if necessary.
		$this->initNextCell();

		$padding = 3;

		$name = $location->getName();

		$this->pdf->SetCellPadding($padding);
		$this->pdf->SetFont( $this->configuration['fontFamily'], 
				$this->configuration['fontStyle'], 
				$this->configuration['fontSize']);
		$this->pdf->SetXY( $this->xCellPos,$this->yCellPos );

		// Start clipping. Every thing with StartTransform and StopTransform
		// will be clipped to the Rect. This is a cool feature if one field is
		// too long, it will not destroy the rest of your page and it is partial
		// usable.
		$this->pdf->StartTransform();		
		// Draw clipping rectangle to match html cell.
		$this->pdf->Rect($this->xCellPos, $this->yCellPos, $this->layout->getCellWidthInMM(),
				$this->layout->getCellHeightInMM(), 'CNZ');		

		$this->pdf->MultiCell( $this->layout->getCellWidthInMM(),
				$this->layout->getCellHeightInMM(), $name, '0');		

		$this->pdf->StopTransform();

		// Place a Barcode at the end
		if ($this->configuration['barcodeEnable']){
			$barcodeWidth = $this->configuration['barcodeWidth'];
			$barcodeHeight = $this->layout->getCellHeightInMM() - 5;
			
			if ($this->configuration['barcode2D']){
				$this->pdf->write2DBarcode($name, $this->configuration['barcodeType'], 
						$this->xCellPos + $this->layout->getCellWidthInMM() - $barcodeWidth - 5,
						$this->yCellPos + $this->layout->getCellHeightInMM() / 2 - $barcodeHeight / 2,
						$barcodeWidth,
						$barcodeHeight
						);
			}
			else {				
				$style = array('text'=> $this->configuration['barcodeWithText'] );
				$this->pdf->write1DBarcode($name, $this->configuration['barcodeType'], 
						$this->xCellPos + $this->layout->getCellWidthInMM() - $barcodeWidth - 5,
						$this->yCellPos + $this->layout->getCellHeightInMM() / 2 - $barcodeHeight / 2,
						$barcodeWidth,
						$barcodeHeight,
						"",
						$style
						);
			}
		}
	}
	
	/**
	 * This method renders an array of Parts to our sheet.
	 * @param array $parts
	 */
	private function renderParts( array $parts ){
		foreach ($parts as $part){
			$this->renderCellFromPart( $part );
		}
	}
	
	/**
	 * This method just renders the next single cell with a part
	 * as content.
	 */
	private function renderCellFromPart( Part $part ){
		// Move the pointer to the next cell and initialize PDF class
		// correctly. Also draws the grid if necessary.
		$this->initNextCell();
	
		$padding = 3;
		
		$dataReplacement = array(
				'!!name!!' => $part->getName(),
				'!!internalNumber!!' => $part->getInternalPartNumber(),
				'!!description!!' => $part->getDescription(),
				'!!categoryFull!!' => $part->getCategory()->getCategoryPath(),
				'!!categoryLast!!' => $part->getCategory()->getName(),
				'!!footprintName!!' => $part->getFootprint() === null ? '': $part->getFootprint()->getName()
				);
		
		$text = strtr($this->configuration['text'], $dataReplacement);
	
		$this->pdf->SetCellPadding($padding);
		$this->pdf->SetFont( $this->configuration['fontFamily'],
				$this->configuration['fontStyle'],
				$this->configuration['fontSize']);
		$this->pdf->SetXY( $this->xCellPos,$this->yCellPos );
	
		// Start clipping. Every thing with StartTransform and StopTransform
		// will be clipped to the Rect. This is a cool feature if one field is
		// too long, it will not destroy the rest of your page and it is partial
		// usable.
		$this->pdf->StartTransform();
		// Draw clipping rectangle to match html cell.
		$this->pdf->Rect($this->xCellPos, $this->yCellPos, $this->layout->getCellWidthInMM(),
				$this->layout->getCellHeightInMM(), 'CNZ');
	
		$this->pdf->WriteHTMLCell( $this->layout->getCellWidthInMM(),
				$this->layout->getCellHeightInMM(), 
				$this->xCellPos, 
				$this->yCellPos,
				$text);
	
		$this->pdf->StopTransform();
	}
}

// We have to register this class to the registry.
// Only if the class is registered, it can be found by the
// registry and you will see it in the application.
RendererFactoryRegistry::getInstance()->registerFactory(
	 new SimpleRendererFactory("Default PDF renderer",
				"PartKeepr\Printing\Renderer\PDFDefaultRenderer",
				array("PartKeepr\StorageLocation\StorageLocation",
					"PartKeepr\Part\Part") 
				)
	 );
