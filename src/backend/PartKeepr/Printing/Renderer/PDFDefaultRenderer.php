<?php
namespace PartKeepr\Printing\Renderer;

use PartKeepr\Part\Part,
    PartKeepr\Printing\Exceptions\RendererNotFoundException,
	PartKeepr\Printing\PageBasicLayout\PageBasicLayout,
	PartKeepr\Printing\RendererFactoryRegistry,
	PartKeepr\Printing\AbstractRenderer\TCPDFAbstractRenderer,
    PartKeepr\Printing\SimpleRendererFactory,
	PartKeepr\Printing\Utils\PercentOrNumericHelper,
    PartKeepr\Printing\Utils\Placeholder,
	PartKeepr\Printing\Utils\DecodeConfiguration,
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
			'barcodeType' => 'QRCODE,L',
			'textBarcode' => "!!barcodeId,%06d!!",
			'barcodeWidth' => "12",
			'barcodeHeight' => "12",
			'barcodeXPos' => "-7",
			'barcodeYPos' => "-7",
			'barcodeWithText' => false,
			'barcode2D' => true,
			'fontFamily' => 'times',
			'fontStyle' => '',
			'fontSize' => 12,
			'text' => '<span style="font-size: 11pt;"><b>!!name!!</b></span><br><span style="font-size: 8pt;">!!description!!</span>',
			'textXOffset' => 0,
			'textYOffset' => 0
			);
	
	/**
	 * @param array $objects needs at least an instance of the PageBasicLayout.
	 * @param unknown $cfgString The configuration string.
	 */
	public function __construct (array $objects, $cfgString ) {
		$configuration = DecodeConfiguration::decode($cfgString);
		
		// Apply the personal default configuration here.
		// The base will apply the base default parameters for you.
		$configuration = array_merge( $this->defaultConfiguration, $configuration );
		parent::__construct( $objects, $configuration);	
	}	

	public function passRenderingData( $data ){
		// Here we got our data passed. We have to decide how we want
		// to render the data, so we dispatch it to our internal rendering
		// methods to make the code more clear.
		if ( is_array( $data ) ){
			if (count($data)>0){
				$elem = reset($data);
				if ($elem instanceof StorageLocation || $elem instanceof Part ){
					$this->renderObjects($data);
				}else{
					throw new RendererNotFoundException("Unable to handle object type with renderer PDFLabelRenderer.",
							get_class($elem),array("StorageLocation","Part"));
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
	 * This method renders an array of Parts to our sheet.
	 * @param array $parts
	 */
	private function renderObjects( array $objects ){
		foreach ($objects as $obj){
			$this->renderCell( $obj );
		}
	}
	
	/**
	 * This method just renders the next single cell with a part
	 * as content.
	 */
	private function renderCell( $object ){
		// Move the pointer to the next cell and initialize PDF class
		// correctly. Also draws the grid if necessary.
		$this->initNextCell();
	
		$padding = 3;
		
		$dataReplacement = new Placeholder( $object, "!!", "!!" );
		
		$text = $dataReplacement->apply($this->configuration['text']);
		$barcodeId = $dataReplacement->apply($this->configuration['textBarcode'] );
		
		$this->pdf->SetCellPadding($padding);
		$this->pdf->SetFont( $this->configuration['fontFamily'],
				$this->configuration['fontStyle'],
				$this->configuration['fontSize']);
		$this->pdf->SetXY( $this->xCellPos,$this->yCellPos );
	
		if ($this->configuration['barcodeEnable']){	
			$widthParameter = new PercentOrNumericHelper($this->configuration['barcodeWidth']);
			$heightParameter = new PercentOrNumericHelper($this->configuration['barcodeHeight']);
			$xPosParameter = new PercentOrNumericHelper($this->configuration['barcodeXPos']);
			$yPosParameter = new PercentOrNumericHelper($this->configuration['barcodeYPos']);
			
			$xPos = $xPosParameter->getValueWrap(0, $this->layout->getCellWidthInMM() );
			$yPos = $yPosParameter->getValueWrap(0, $this->layout->getCellHeightInMM() );
			$width = $widthParameter->getValue(0,$this->layout->getCellWidthInMM());
			$height = $heightParameter->getValue(0,$this->layout->getCellHeightInMM());
			
			$regions = array();
			
			// Shitty workaround for a Bug in TCPDF the ower is not interested in fixing it!
			$this->pdf->resetInternalMargins();
	
			if ($this->configuration['barcode2D']){
				$this->pdf->write2DBarcode($barcodeId, $this->configuration['barcodeType'],
						$this->xCellPos + $xPos - $width / 2 ,
						$this->yCellPos + $yPos - $height / 2,
						$width,
						$height
					);
			} else {				
				$style = array('text'=> $this->configuration['barcodeWithText'] );
				$this->pdf->write1DBarcode($barcodeId, $this->configuration['barcodeType'], 
						$this->xCellPos + $xPos - $width / 2 ,
						$this->yCellPos + $yPos - $height / 2,
						$width,
						$height,
						"",
						$style
						);
			}
			
			// This region will add a "do not write text here" over our barcode This is a kind
			// of hack to make text fluently moving around :)
			$textMarginX = 7;
			$textMarginY = 7;
			
			$left = $xPos < $this->layout->getCellWidthInMM() / 2;
			$top = $yPos < $this->layout->getCellHeightInMM() / 2;
			
			// $this->pdf->writeHTML("LEFT: $left TOP: $top XPOS: $xPos YPOS: $yPos WIDTH: ".$this->layout->getCellWidthInMM()." HEIGHT: ".$this->layout->getCellHeightInMM(), true, false, true, false, '');
			if( $left  )
			{
				if( $top ){
					$regions[] = array('page' => ''
							, 'xt' => $xPos + $this->xCellPos + $textMarginX
							, 'yt' =>  0
							, 'xb' => $xPos + $this->xCellPos + $textMarginX
							, 'yb' => $yPos + $this->yCellPos + $textMarginY, 'side' => 'L');
				}else
				{
					$regions[] = array('page' => ''
							, 'xt' => $xPos + $this->xCellPos + $textMarginX
							, 'yt' => $yPos + $this->yCellPos - $textMarginY
							, 'xb' => $xPos + $this->xCellPos + $textMarginX
							, 'yb' => $this->yCellPos + $this->layout->getCellHeightInMM()
							, 'side' => 'L');
				}
			}else
			{
				if( $top ){
					$regions[] = array('page' => ''
							, 'xt' => $xPos + $this->xCellPos - $textMarginX
							, 'yt' =>  0
							, 'xb' => $xPos + $this->xCellPos - $textMarginX
							, 'yb' => $yPos + $this->yCellPos + $textMarginY, 'side' => 'R');
				}else
				{
					$regions[] = array('page' => ''
							, 'xt' => $xPos + $this->xCellPos - $width / 2 - $textMarginX
							, 'yt' => $yPos + $this->yCellPos - $height/ 2 - $textMarginY
							, 'xb' => $xPos + $this->xCellPos - $width / 2 - $textMarginX
							, 'yb' => $this->yCellPos + $this->layout->getCellHeightInMM()
							, 'side' => 'R');
				}				
			}
 			$this->pdf->setPageRegions($regions);
		}
		
		// Start clipping. Every thing with StartTransform and StopTransform
		// will be clipped to the Rect. This is a cool feature if one field is
		// too long, it will not destroy the rest of your page and it is partial
		// usable.
		$this->pdf->StartTransform();
		// Draw clipping rectangle to match html cell.
		$this->pdf->Rect($this->xCellPos, $this->yCellPos, $this->layout->getCellWidthInMM(),
				$this->layout->getCellHeightInMM(), 'CNZ');
	
		$xPosTextOffsetParameter = new PercentOrNumericHelper($this->configuration['textXOffset']);
		$yPosTextOffsetParameter = new PercentOrNumericHelper($this->configuration['textYOffset']);

		$this->pdf->WriteHTMLCell( $this->layout->getCellWidthInMM(),
				$this->layout->getCellHeightInMM(), 
				$this->xCellPos + $xPosTextOffsetParameter->getValueUnbound( $this->layout->getCellWidthInMM() ), 
				$this->yCellPos + $yPosTextOffsetParameter->getValueUnbound( $this->layout->getCellWidthInMM() ),
				$text);
	
		$this->pdf->StopTransform();
		
		$this->pdf->setPageRegions();
	}

	/**
	 * Registers this renderer class to the registry.
	 *
	 * @param RendererFactoryRegistry $registry
	 */
	public static function onRegister( RendererFactoryRegistry $registry ){
		// We have to register this class to the registry.
		// Only if the class is registered, it can be found by the
		// registry and you will see it in the application.
		$registry->registerFactory(
			 new SimpleRendererFactory("Default PDF renderer",
						"PartKeepr\Printing\Renderer\PDFDefaultRenderer",
						array("PartKeepr\StorageLocation\StorageLocation",
							"PartKeepr\Part\Part"),
						array("PartKeepr\Printing\PageBasicLayout\PageBasicLayout")
						)
			 );
	}
}
