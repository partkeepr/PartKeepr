<?php
namespace PartKeepr\Printing;

/**
 * The rendering interface is used to pass data to a renderer and
 * retrieve the rendered results afterwards. How the data is rendered
 * and which data can be processed is implementation specific.
 */
interface RendererIfc{
	/**
	 * Passes the data which should be rendered. The supported
	 * data differs from renderer to renderer and is documented
	 * in the concrete implementations.
	 * 
	 * @param unknown $data Data to pass to the renderer.
	 */
	public function passRenderingData( $data );
	
	/**
	 * Returns the suggestion of the file extension to use.
	 */
	public function getSuggestedExtension();
	
	/**
	 * Store the created result to the given filename. Filename
	 * can also be treated as a directory if needed.
	 * @param filename Filename to store the final file.
	 */
	public function storeResult( $filename );
}