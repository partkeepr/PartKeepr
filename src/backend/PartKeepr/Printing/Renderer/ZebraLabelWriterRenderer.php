<?php
namespace PartKeepr\Printing\Renderer;

use PartKeepr\Part\Part,
    PartKeepr\Printing\PageBasicLayout\PageBasicLayout,
    PartKeepr\Printing\RendererFactoryRegistry,
    PartKeepr\Printing\RendererIfc,
    PartKeepr\Printing\SimpleRendererFactory,
    PartKeepr\Printing\Exceptions\RendererNotFoundException,
    PartKeepr\Printing\Utils\DecodeConfiguration,
    PartKeepr\Printing\Utils\Placeholder,
    PartKeepr\StorageLocation\StorageLocation
    ;

/**
 * This class implements a printing renderer which renders the data
 * to the ZPL printing language. The idea behind is to create a template using
 * the Designer software provided by Zebra, print it to a file and then use this
 * file as a template here.
 */
class ZebraLabelWriterRenderer implements RendererIfc{
    /**
     * Our default configuration for this label renderer.
     * @var array
     */
    private $defaultConfiguration = array( 
            'part' => array( 'template' => 
<<<'EOD'
CT~~CD,~CC^~CT~
^XA~TA000~JSN^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR3,3~SD8^JUS^LRN^CI0^XZ
^XA
^MMT
^PW320
^LL0176
^LS0
^FT16,44^A0N,34,33^FH\^FD<<name>>^FS
^FT16,76^A0N,23,24^FH\^FD<<description>>^FS
^BY3,3,33^FT49,146^BCN,,Y,N
^FD>;<<id>>^FS
^PQ1,0,1,Y^XZ
EOD
 				)
            );
    
    /**
     * The rendered data up to now.
     */
    protected $out = "";
    
    /**
     * This is the current active configuration.
     * @var unknown
     */
    protected $configuration;
    
    /**
     * This is the configuration passed to this class.
     * @var unknown
     */
    protected $configurationIn;
    
    /**
     * @param array $obj dummy, not needed.
     * @param unknown $cfgString The configuration string.
     */
    public function __construct (array $obj, $cfgString ) {
    	$configuration = DecodeConfiguration::decode($cfgString);
        $this->configurationIn = $configuration;
    }    

    /**
     * (non-PHPdoc)
     * @see \PartKeepr\Printing\RendererIfc::passRenderingData()
     */
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
                    throw new RendererNotFoundException("Unable to handle object type with this renderer.",
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
     * This method renders an array of Parts to our sheet.
     * @param array $parts
     */
    private function renderParts( array $parts ){
    	$this->configuration = array_merge( $this->defaultConfiguration['part'], $this->configurationIn );
    	
        foreach ($parts as $part){
            $this->renderSinglePart( $part );
        }
    }
    

    /**
     * Just renders a single part to the output.
     * 
     * @param Part $part
     */
    private function renderSinglePart( Part $part ){
    	$dataReplacement = new Placeholder( $part, "<<", ">>");
		$this->out .= $dataReplacement->apply($this->configuration['template']) . "\n";
    }
    
    /**
     * (non-PHPdoc)
     * @see \PartKeepr\Printing\RendererIfc::getSuggestedExtension()
     */
    public function getSuggestedExtension(){
    	return "zpl";
    }
    
    /**
     * (non-PHPdoc)
     * @see \PartKeepr\Printing\RendererIfc::storeResult()
     */
    public function storeResult( $outFile ){
    	$file = fopen($outFile,'w');
    	fwrite( $file, $this->out );
    	fclose( $file );
    }
    
    /**
     * 
     * @param unknown $filename
     * @return string
     */
    public function outputResult($filename){
    	return $this->out;
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
			new SimpleRendererFactory("Zebra Label Renderer",
					"PartKeepr\Printing\Renderer\ZebraLabelWriterRenderer",
					array("PartKeepr\Part\Part"),
					array()
			)
	);
    }
}

