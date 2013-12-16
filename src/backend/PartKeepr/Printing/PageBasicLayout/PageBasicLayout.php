<?php
namespace PartKeepr\Printing\PageBasicLayout;

use PartKeepr\Util\BaseEntity,
	PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable,
    Doctrine\ORM\Mapping as ORM;

/**
 * This class is a layout which can be used to describe a typical page
 * which has a n*m cell table on it. Such a table is interesting for e.g. if
 * one will print labels.
 * 
 * The layout of such a page needs:
 *  - Paper size
 *  - TopLeft position on page
 *  - Width and height of the cells (every cell has the same size)
 *  - Number of cells in columns an rows.
 *  
 *  @ORM\Entity
 */
class PageBasicLayout extends BaseEntity implements Serializable, Deserializable {
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
	 * The numbers of columns on the page
	 * @ORM\Column(type="integer")
	 * @var integer
	 */
	private $columnCount = 1;

	/**
	 * The numbers of rows on the page
	 * @ORM\Column(type="integer")
	 * @var integer
	 */	
	private $rowCount = 1;
	
	/**
	 * The size of the entire paper
	 * 
	 * @ORM\Column(type="text")
	 */
	private $paperSize = "A4";
	
	/**
	 * Indicates the orientation of the paper or better, the orientation 
	 * of the final text.
	 * @ORM\Column(type="boolean")
	 */
	private $paperPortrait = true;
	
	/**
	 * This is the cell width in mm.
	 * @ORM\Column(type="float")
	 * @var float
	 */
	private $cellWidthInMM = 100;
	
	/**
	 * This is the cell height in mm.
	 * @ORM\Column(type="float")
	 * @var float
	 */
	private $cellHeightInMM = 100;

	/**
	 * This is the top left X position of the first cell on the
	 * sheet.
	 * @ORM\Column(type="float")
	 * @var float
	 */
	private $topLeftXInMM = 0;
	
	/**
	 * This is the top left Y position of the first cell on the
	 * sheet.
	 * @ORM\Column(type="float")
	 * @var float
	 */
	private $topLeftYInMM = 0;
	
	/**
	 * Sets name.
	 * @param string $name
	 */
	public function setName( $name ){
		$this->name = $name;
	}
	
	/**
	 * Retrives name.
	 * @return string
	 */
	public function getName(){
		return $this->name;
	}
	
	/**
	 * Sets the comment.
	 * @param unknown $comment
	 */
	public function setComment( $comment ){
		$this->comment = $comment;
	}
	
	/**
	 * Retrieve comment.
	 * @return unknown
	 */
	public function getComment(){
		return $this->comment;
	}
	
	/**
	 * Sets column count.
	 * @param unknown $count
	 */
	public function setColumnCount( $count ){
		$this->columnCount = $count;
	}
	
	/**
	 * Retrieve column count.
	 * @return number
	 */
	public function getColumnCount(){
		return $this->columnCount;
	}	

	/**
	 * Sets row count.
	 * @param unknown $count
	 */
	public function setRowCount( $count ){
		$this->rowCount = $count;
	}
	
	/**
	 * Retrieve row count.
	 * @return number
	 */
	public function getRowCount(){
		return $this->rowCount;
	}
	
	/**
	 * Sets paper size
	 * @param unknown $size
	 */
	public function setPaperSize( $size ){
		$this->paperSize = $size;
	}

	/**
	 * Retrieve paper size.
	 * @return string
	 */
	public function getPaperSize(){
		return $this->paperSize;
	}
	
	/**
	 * Sets Paper portrait.
	 * @param unknown $portrait
	 */
	public function setPaperPortrait( $portrait ){
		$this->paperPortrait = $portrait;
	}
	
	/**
	 * Retrieves paper portrait.
	 * @return boolean
	 */
	public function getPaperPortrait(){
		return $this->paperPortrait;
	}
	
	/**
	 * Sets cell width in mm
	 * @param unknown $size
	 */
	public function setCellWidthInMM( $size ){
		$this->cellWidthInMM = $size;
	}
	
	/**
	 * Retrieves cell width in mm.
	 * @return number
	 */
	public function getCellWidthInMM( ){
		return $this->cellWidthInMM;
	}
	
	/**
	 * Sets cell height in mm
	 * @param unknown $size
	 */
	public function setCellHeightInMM( $size ){
		$this->cellHeightInMM = $size;
	}
	
	/**
	 * retrieves cell height in mm.
	 * @return number
	 */
	public function getCellHeightInMM( ){
		return $this->cellHeightInMM;
	}	
	
	/**
	 * Sets top left position x in mm.
	 * @param unknown $pos
	 */
	public function setTopLeftXInMM( $pos ){
		$this->topLeftXInMM = $pos;
	}
	
	/**
	 * Gets top left position x in mm.
	 * @return number
	 */
	public function getTopLeftXInMM(){
		return $this->topLeftXInMM;
	}	
	
	/**
	 * Sets top left position y in mm.
	 * @param unknown $pos
	 */
	public function setTopLeftYInMM( $pos ){
		$this->topLeftYInMM = $pos;
	}

	/**
	 * Retrieves top left y position in mm.
	 * @return number
	 */
	public function getTopLeftYInMM(){
		return $this->topLeftYInMM;
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
			"columnCount" => $this->getColumnCount(),
			"rowCount" => $this->getRowCount(),
			"paperSize" => $this->getPaperSize(),
			"paperPortrait" => $this->getPaperPortrait(),
			"cellWidthInMM" => $this->getCellWidthInMM(),
			"cellHeightInMM" => $this->getCellHeightInMM(),
			"topLeftXInMM" => $this->getTopLeftXInMM(),
			"topLeftYInMM" => $this->getTopLeftYInMM()
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
				case "columnCount":
					$this->setColumnCount($value);
					break;
				case "rowCount":
					$this->setRowCount($value);
					break;	
				case "paperSize":
					$this->setPaperSize($value);
					break;
				case "paperPortrait":
					$this->setPaperPortrait($value);
					break;
				case "cellWidthInMM":
					$this->setCellWidthInMM($value);
					break;
				case "cellHeightInMM":
					$this->setCellHeightInMM($value);
					break;
				case "topLeftXInMM":
					$this->setTopLeftXInMM($value);
					break;
				case "topLeftYInMM":
					$this->setTopLeftYInMM($value);
					break;
			}
		}
	}
}
