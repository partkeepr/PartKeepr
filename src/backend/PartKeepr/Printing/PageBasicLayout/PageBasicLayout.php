<?php
namespace PartKeepr\Printing\PageBasicLayout;

use PartKeepr\Util\BaseEntity,
	PartKeepr\Util\Deserializable,
	PartKeepr\Util\Serializable;

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
 *  @Entity
 */
class PageBasicLayout extends BaseEntity implements Serializable, Deserializable {
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
	 * The numbers of columns on the page
	 * @Column(type="integer")
	 * @var integer
	 */
	private $columnCount = 1;

	/**
	 * The numbers of rows on the page
	 * @Column(type="integer")
	 * @var integer
	 */	
	private $rowCount = 1;
	
	/**
	 * The size of the entire paper
	 * 
	 * @Column(type="text")
	 */
	private $paperSize = "A4";
	
	/**
	 * Indicates the orientation of the paper or better, the orientation 
	 * of the final text.
	 * @Column(type="boolean")
	 */
	private $paperPortrait = true;
	
	/**
	 * This is the cell width in mm.
	 * @Column(type="float")
	 * @var float
	 */
	private $cellWidthInMM = 100;
	
	/**
	 * This is the cell height in mm.
	 * @Column(type="float")
	 * @var float
	 */
	private $cellHeightInMM = 100;

	/**
	 * This is the top left X position of the first cell on the
	 * sheet.
	 * @Column(type="float")
	 * @var float
	 */
	private $topLeftXInMM = 0;
	
	/**
	 * This is the top left Y position of the first cell on the
	 * sheet.
	 * @Column(type="float")
	 * @var float
	 */
	private $topLeftYInMM = 0;
	
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
	
	public function setColumnCount( $count ){
		$this->columnCount = $count;
	}
	
	public function getColumnCount(){
		return $this->columnCount;
	}	

	public function setRowCount( $count ){
		$this->rowCount = $count;
	}
	
	public function getRowCount(){
		return $this->rowCount;
	}
	
	public function setPaperSize( $size ){
		$this->paperSize = $size;
	}

	public function getPaperSize(){
		return $this->paperSize;
	}
	
	public function setPaperPortrait( $portrait ){
		$this->paperPortrait = $portrait;
	}
	
	public function getPaperPortrait(){
		return $this->paperPortrait;
	}
	
	public function setCellWidthInMM( $size ){
		$this->cellWidthInMM = $size;
	}
	
	public function getCellWidthInMM( ){
		return $this->cellWidthInMM;
	}
	
	public function setCellHeightInMM( $size ){
		$this->cellHeightInMM = $size;
	}
	
	public function getCellHeightInMM( ){
		return $this->cellHeightInMM;
	}	
	
	public function setTopLeftXInMM( $pos ){
		$this->topLeftXInMM = $pos;
	}
	
	public function getTopLeftXInMM(){
		return $this->topLeftXInMM;
	}	
	
	public function setTopLeftYInMM( $pos ){
		$this->topLeftYInMM = $pos;
	}
	
	public function getTopLeftYInMM(){
		return $this->topLeftYInMM;
	}	

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
