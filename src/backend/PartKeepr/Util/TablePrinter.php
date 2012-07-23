<?php
namespace PartKeepr\Util;

use Symfony\Component\Console\Output\OutputInterface;

/**
 * TablePrinter.
 *
 * Original by Antoine Durieux, ported to a proper class by Felicitus
 *
 * Source: http://adurieux.blogspot.com/2011/10/table-printer-for-symfony2-console.html
 */
class TablePrinter
{
	/**
	 * Holds an instance of the OutputInterface
	 * @var null|\Symfony\Component\Console\Output\OutputInterface
	 */
	private $output = null;

	/**
	 * The header columns as simple array
	 * @var array
	 */
	private $header = array();

	/**
	 * The body columns as nested array.
	 * @var array
	 */
	private $body = array();

	/**
	 * Creates a new instance of the table printer
	 *
	 * @param \Symfony\Component\Console\Output\OutputInterface $output The output interface to use
	 */
	public function __construct (OutputInterface $output) {
		$this->output = $output;
	}

	/**
	 * Sets the header
	 * @param string[] $header The header columns to set
	 */
	public function setHeader (array $header) {
		$this->header = $header;
	}

	/**
	 * Sets the body
	 * @param array $body A nested array of rows, e.g.
	 *
	 * setBody( array(
	 * 				array("Row1Col1", "Row1Col2"),
	 * 				array("Row2Col1", "Row2Col2")
	 * 			));
	 */
	public function setBody (array $body) {
		$this->body = $body;
	}

	/**
	 * This function performs the full print of the table
	 *
	 * @author      Antoine Durieux
	 */
	public function output ()
	{
		// ---------------------------------------------------------------------
		// 1. Find column widths to use
		// ---------------------------------------------------------------------
		$columnWidths = $this->computeColumnWidths($this->body,$this->header);

		// ---------------------------------------------------------------------
		// 2. Print header
		// ---------------------------------------------------------------------
		if(count($this->header) != 0)
		{
			$this->printConsole($this->printBlankLine($columnWidths));
			$this->printConsole($this->printLine($this->header,$columnWidths));
		}

		// ---------------------------------------------------------------------
		// 3. Print body
		// ---------------------------------------------------------------------
		$this->printConsole($this->printBlankLine($columnWidths));
		foreach($this->body as $row)
		{
			$this->printConsole($this->printLine($row,$columnWidths));
		}
		$this->printConsole($this->printBlankLine($columnWidths));
	}

	/**
	 * This function computes the sizes of the columns depending on the size of
	 * what they will contain.
	 *
	 * @author      Antoine Durieux
	 *
	 */
	private function computeColumnWidths()
	{
		// In case we have no head
		if(count($this->header) != 0)
		{
			$columnWidths = array_map('mb_strlen',$this->header);
		}
		else
		{
			$columnWidths = array_map('mb_strlen',$this->body[key($this->body)]);
		}
		foreach($this->body as $row)
		{
			foreach($row as $index => $value)
			{
				$columnWidths[$index] = max(mb_strlen($value),$columnWidths[$index]);
			}
		}

		return $columnWidths;
	}

	/**
	 * private static function printBlankLine($columnWidths)
	 *
	 * This function returns a string that corresponds to a decorating line.
	 *
	 * @author      Antoine Durieux
	 *
	 * @version     1.0
	 *
	 * @param       array       $columnWidths   The widths of the columns
	 * @return      string                      The resulting string
	 */
	private function printBlankLine($columnWidths)
	{
		$line = '+';
		foreach(array_keys($columnWidths) as $index)
		{
			$line .= str_repeat('-',$columnWidths[$index]+2).'+';
		}
		return $line;
	}

	/**
	 * This function returns a string that corresponds to a regular line of the
	 * table.
	 *
	 * @author      Antoine Durieux
	 *
	 * @version     1.0
	 *
	 * @param       array       $line           The line to be printed
	 * @param       array       $columnWidths   The widths of the columns
	 * @return      string                      The resulting string
	 */
	private function printLine($line,$columnWidths)
	{
		$string = '|';
		foreach($line as $index => $value)
		{
			$string .= ' '.$value.str_repeat(' ',$columnWidths[$index]-mb_strlen($value)).' |';
		}
		return $string;
	}

	/**
	 * This function prints a line in the console
	 *
	 * @author      Antoine Durieux
	 *
	 * @version     1.0
	 *
	 * @param       string       $string           The string to print in the console
	 */
	public function printConsole($string)
	{
		$this->output->writeln($string);
	}
}