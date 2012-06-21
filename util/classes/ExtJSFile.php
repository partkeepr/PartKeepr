<?php

class ExtJSFile {
	/**
	 * The source code
	 * @var string
	 */
	private $source;
	
	/**
	 * Holds the class name
	 * @var string
	 */
	private $className;
	
	/**
	 * Holds all classes this class requires
	 * @var array
	 */
	private $requires = array();
	
	/**
	 * Holds the filename
	 * @var string
	 */
	private $filename;
	
	/**
	 * Holds all classes which have a dependency to this class
	 * @var array
	 */
	private $childs = array();
	
	/**
	 * Constructs a new ExtJSFile class.
	 * 
	 * @param string $file The source file
	 */
	public function __construct ($file) {
		$file = str_replace("//", "/", $file);

		$this->source = file_get_contents($file);
		
		if ($this->parseExtendDirective() != "") {
			$this->requires[] = $this->parseExtendDirective();	
		}
		 
		$this->className = $this->parseClassName();
		
		if ($this->requiresPartKeeprBase()) {
			$this->requires[] = "PartKeepr";
		}
		
		$this->filename = $file;
		
	}
	
	/**
	 * Adds a child which depends to this class
	 * @param ExtJSFile $child
	 */
	public function addChild (ExtJSFile $child) {
		$this->childs[] = $child;
	}
	
	/**
	 * Returns the class names of all requirements for this class
	 * @return array An array with the requirement class names
	 */
	public function getRequires () {
		return $this->requires;
	}
	
	/**
	 * Returns the class name for this class
	 * @return string The class name
	 */
	public function getClassName () {
		if ($this->className == "") {
			return "FILE--".$this->getFilename();
		} else {
			return $this->className;
		}
	}
	
	public function getFilename () {
		return $this->filename;
	}
	
	/**
	 * Parses the source and returns the "extend" directive.
	 * 
	 * @return string The extend class name
	 */
	private function parseExtendDirective () {
		$pattern = "/extend\s*:\s*[\"|'](.*)[\"|']/";
		
		preg_match($pattern, $this->source, $results);
		
		// Remove the first element, which contains the RegExp
		unset($results[0]);
		
		return array_pop($results);
	}
	
	/**
	 * Parses the source and returns the class name.
	 * 
	 * @return string The class name
	 */
	private function parseClassName () {
		$pattern = "/Ext.define\\([\"|'](.*)[\"|']/";
	
		preg_match($pattern, $this->source, $results);

		// Remove the first element, which contains the RegExp
		unset($results[0]);
	
		return array_pop($results);
	}
	
	/**
	 * Checks if the class needs the base PartKeepr class. 
	 * @return boolean True if the class needs the base PartKeepr class, false otherwise
	 */
	private function requiresPartKeeprBase () {
		if (strpos($this->source, "PartKeepr.getRESTProxy") !== false) {
			return true;
		}
		
		return false;
	}
	
	/**
	 * Returns the JSB entries for this class and all sub classes
	 * @return string The JSB string with this class and all child classes
	 */
	public function getJSB () {
		
		$aData = array($this->getJSBEntry());
		
		foreach ($this->childs as $child) {
			$aData[] = $child->getJSB();
		}
		
		return implode(",\n", $aData);
	}
	
	/**
	 * Returns the JSB Entry for the class
	 */
	private function getJSBEntry () {
		$template = '{"path": "[PATH]","name": "[NAME]"}';

		$path = dirname($this->filename);
		$name = basename($this->filename);
	
	
		$template = str_replace("[PATH]", $path."/", $template);
		$template = str_replace("[NAME]", $name, $template);
	
		return $template;
	}
	
}
