<?php
namespace PartKeepr\Image;

/**
 * Interface for any image which needs to be rendered.
 */
interface RenderableImage {
	/**
	 * Returns the full image filename including path.
	 * This is the image where all scale operations take place on.
	 * 
	 * @param none
	 * @return string The full image filename including path.
	 */
	public function getFilename ();
}