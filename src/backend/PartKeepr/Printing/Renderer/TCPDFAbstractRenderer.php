<?php
namespace PartKeepr\Printing\Renderer;

use PartKeepr\Printing\RendererIfc,
    PartKeepr\Printing\RendererFactoryRegistry,
    PartKeepr\Printing\RendererNotFoundException,
    PartKeepr\Printing\SimpleRendererFactory,
	PartKeepr\Printing\PageBasicLayout\PageBasicLayout,
    PartKeepr\StorageLocation\StorageLocation
	;
	
require_once('tcpdf/tcpdf.php');

/**
 * This wrapper class can be used to remove some bugs from the 
 * TCPDF. https://sourceforge.net/p/tcpdf/bugs/773/
 * @author sven
 *
 */
class TCPDFWrapper extends \TCPDF{
	public function __construct($orientation, $unit, $format){
		parent::__construct($orientation, $unit, $format);
	}
	
	public function resetInternalMargins(){
		$this->crMargin = $this->rMargin = $this->original_rMargin;
		$this->clMargin = $this->lMargin = $this->original_lMargin;
	}
}

/**
 * This class is a abstract renderer to help somebody by creating its
 * own plugins. Use the PDFDefaultRenderer as an example.
 */
abstract class TCPDFAbstractRenderer implements RendererIfc{
	/**
	 * This contains our layout for the page to be rendered.
	 */
	protected $layout = null;
	
	/**
	 * Our internal used pdf generator.
	 */
	protected $pdf;
	
	/**
	 * This is the count of the cells we have actually rendered. You can name
	 * it a pointer to the next cell, which should be rendered. We render all
	 * columns first and then increment the row.
	 */
	protected $cellsRendered;
	
	/**
	 * This is the position of the actual cell we want to process.
	 * Top left point. 
	 */
	protected $xCellPos = 0;
	
	/**
	 * This is the position of the actual cell we want to process.
	 * Top left point. 
	 */
	protected $yCellPos = 0;
	
	/**
	 * This is an array with configuration things.
	 * @var array
	 */
	protected $configuration;
	
	/**
	 * This boolean can be set to true to not trigger an error on startup.
	 * We implement it this way, to ensure the implementer of the plugin has
	 * thought of this potential security risk.
	 * 
	 * @var unknown
	 */
	protected $doNotErrorIfTCPDFSetsCalls = false;
	
	/**
	 * Our default configuration for this label renderer.
	 * @var array
	 */
	protected $basedefaultConfiguration = array( 
			'borderGrid' => true,
			'startingCell' => 0 
			);
	
	public function __construct ( array $objects, array $configuration ) {
		foreach( $objects as $obj ){
			if ($obj instanceof \PartKeepr\Printing\PageBasicLayout\PageBasicLayout){
				$this->layout = $obj;
			}			
		}
		
		if ($this->layout === null){
			throw new \PartKeepr\Printing\Exceptions\InvalidArgumentException("Required object not passed!");
		}	
		
		$this->configuration = array_merge( $this->basedefaultConfiguration, $configuration );
		
		$this->cellsRendered = $this->configuration['startingCell'];
		
		if (K_TCPDF_CALLS_IN_HTML && !$doNotErrorIfTCPDFSetsCalls){
			trigger_error("TCPDF has set K_TCPDF_CALLS_IN_HTML to true, which is a security issue with this class since the user can modify the html text!",E_USER_ERROR);
		}
		
		$this->pdf = new TCPDFWrapper( $this->layout->getPaperPortrait() ? 'P': 'L' 
				, 'mm', $this->layout->getPaperSize() );
		
		// set document information
		$this->pdf->SetCreator(PDF_CREATOR);
		$this->pdf->SetAuthor('PartDB');
		$this->pdf->SetTitle('PartDB Labeling Document');
		$this->pdf->SetSubject('This is a priontout of for labeling or indexing');
		$this->pdf->SetKeywords('PartDB');
		
		// remove default header/footer
		$this->pdf->setPrintHeader(false);
		$this->pdf->setPrintFooter(false);
		
		// set default monospaced font
		$this->pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);
		
		//set margins
		$this->pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
		
		//set auto page breaks
		$this->pdf->SetAutoPageBreak(FALSE, PDF_MARGIN_BOTTOM);
		
		//set image scale factor
		$this->pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
		
		//set some language-dependent strings
		//$this->pdf->setLanguageArray($l);
		
		// ---------------------------------------------------------
	}	

	public function getSuggestedExtension(){
		return "pdf";
	}
	
	public function storeResult( $outFile ){
		$this->pdf->Output($outFile, 'F');
	}
	
	public function outputResult($filename){
		$this->pdf->Output($filename, 'I');
	}
	
	protected function renderBorderGrid(){
		$colYStart = $this->layout->getTopLeftYInMM();
		$colYEnd =  $this->layout->getRowCount() * $this->layout->getCellHeightInMM() + $this->layout->getTopLeftYInMM();
		
		$rowXStart = $this->layout->getTopLeftXInMM();
		$rowXEnd = $this->layout->getColumnCount() * $this->layout->getCellWidthInMM() + $this->layout->getTopLeftXInMM();
		
		for ($r=0; $r <= $this->layout->getRowCount(); $r++){
			$rowYPos = $r * $this->layout->getCellHeightInMM() + $this->layout->getTopLeftYInMM();
			$this->pdf->Line( $rowXStart, $rowYPos, $rowXEnd, $rowYPos );	
		}
		
		for ($c=0; $c <= $this->layout->getColumnCount(); $c++){
			$colXPos = $c * $this->layout->getCellWidthInMM() + $this->layout->getTopLeftXInMM();
			$this->pdf->Line( $colXPos, $colYStart, $colXPos, $colYEnd );	
		}		
	}
	
	/**
	 * Opens the cell and sets the class to the correct coordinates.
	 */
	protected function initNextCell(){
		$page = floor( $this->cellsRendered / ($this->layout->getColumnCount() * $this->layout->getRowCount()));
		$cellXCoordinate = $this->cellsRendered % $this->layout->getColumnCount();
		$cellYCoordinate = ( floor($this->cellsRendered / $this->layout->getColumnCount()) ) % $this->layout->getRowCount() ;
		
		$this->xCellPos = $cellXCoordinate * $this->layout->getCellWidthInMM() + $this->layout->getTopLeftXInMM();
		$this->yCellPos = $cellYCoordinate * $this->layout->getCellHeightInMM() + $this->layout->getTopLeftYInMM();
		
		if ($cellXCoordinate == 0 && $cellYCoordinate == 0){
			$this->pdf->AddPage();
			if ($this->configuration['borderGrid']){
				$this->renderBorderGrid();
			}
		}
		
		$this->cellsRendered++;
	}
}
