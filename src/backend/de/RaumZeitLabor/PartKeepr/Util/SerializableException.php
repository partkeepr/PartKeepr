<?php
namespace de\RaumZeitLabor\PartKeepr\Util;

class SerializableException extends \Exception {
	protected $detailMessage = "No detail message has been entered.";
	
	/* @todo: stub */
	public function getDetail () {
		return $this->detailMessage;
	}
	
	public function setDetail ($message) {
		$this->detailMessage = $message;
	}
	
	public function serialize () {
		return array(
			"message" => $this->getMessage(),
			"detail" => $this->getDetail(),
			"exception" => get_class($this),
			"code" => $this->getCode()
			//"backtrace" => $this->getFormattedTrace()
		);
	}
	
	public function getFormattedTrace () {
		$items = $this->getTrace();
		
		$message = "";
		
		$args = array();
		
		foreach ($items as $id => $item) {
			foreach ($item["args"] as $itemData) {
				switch (gettype($itemData)) {
					case "object":
						if (method_exists($itemData, "__toString")) {
							$args[] = get_class($itemData) . "(".$itemData->__toString().")";
						} else {
							$args[] = get_class($itemData);
						}
                        break;
					case "array":
						$args[] = "array";
						break;
					default:
						$args[] = $itemData;
						break;
				}
			}
			
			$message .= $item["file"].":".$item["line"]."\n";
			$message .= $item["function"] ."(".implode(",", $args).")"."\n\n";
		}
		
		return $message;
	}
	
}
?>