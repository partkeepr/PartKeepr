<?php 
namespace PartKeepr\Printing\Renderer;

/**
 * This is a helper class to extract a number or a percentage
 * from an argument.
 * The following string represents a percentage: 100%
 * And just the raw number will be dealt as absolute number: 100
 * 
 * Additionally in percentage mode an additional absolute offset can
 * be given: 50% - 4 =>  
 */
class PercentOrNumericHelper{
	private $percentageValue;
		
	private $absoluteValue;
	
	/**
	 * Constructs new class und use the parameter as argument.
	 * @param $toAnalyze This is our absolute numberic or percentage value
	 */
	public function __construct($toAnalyze){
		if (is_numeric($toAnalyze)){
			$this->percentageValue = 0;
			$this->absoluteValue = $toAnalyze;
		}
		else{
			$this->isAbsolute = false;		
			if (preg_match('/^\s*([+-]*[0-9]+)\s*%\s*(([+-])\s*([0-9]+))*\s*$/', $toAnalyze, $matches ) === 1 ){
				$this->percentageValue = $matches[1] / 100;
				if (count($matches)>2){
					$this->absoluteValue = $matches[2];										
				}else{
					$this->absoluteValue = 0;									
				}
			}			
			else {
				// Error in string, throw user error???
				$this->percentageValue = 0;
				$this->absoluteValue = 0;
			}
		}
	}
	
	/**
	 * Converts this value to be between minValue and maxValue.
	 * If the analyzed value is:
	 *  - percentage: The percentage represents the position between min and max
	 *  - absolute:   The absolute value will be used as is if inside bounds and will
	 *                be min if smaller or max if greater
	 */
	public function getValue( $minValue, $maxValue ){
		if ($minValue>$maxValue ){
			list($minValue,$maxValue) = array($maxValue,$minValue);
		}
			
		$value = $this->percentageValue * ($maxValue - $minValue) + $minValue + $this->absoluteValue;			
		
		$value = min( $maxValue, $value);
		return max( $minValue, $value);		
	}
	
	/**
	 * This method works like getValue, but will wrap around if the value is out of bound.
	 */
	public function getValueWrap( $minValue, $maxValue ){
		if ($minValue>$maxValue ){
			list($minValue,$maxValue) = array($maxValue,$minValue);
		}
		$distance = ($maxValue - $minValue);
		$calculatedDistance = $this->percentageValue * $distance + $this->absoluteValue;
		
		$distanceTimes = floor( $calculatedDistance / $distance );		
		$calculatedDistance -= $distanceTimes * $distance;
		
		return $minValue + $calculatedDistance;
	}
	
	/**
	 * Returns the value without any bounding. Returns either the absolute value
	 * or $range * $percentage
	 */
	public function getValueUnbound( $range ){
		return $range * $this->percentageValue + $this->absoluteValue;
	}
	
	/**
	 * Returns the percentage part of the value.
	 */
	public function getPercentageValue(){
		return $this->percentageValue;
	}
	
	/**
	 * Returns the absolute part of the value.
	 */
	public function getAbsoluteValue(){
		return $this->absoluteValue;
	}
	
}
