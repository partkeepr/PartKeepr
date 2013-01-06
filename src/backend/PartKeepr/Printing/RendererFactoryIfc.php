<?php 

namespace PartKeepr\Printing;

use PartKeepr\Printing\PageBasicLayout\PageBasicLayout;

/**
 * This interface can be used to support different
 * sets of renderer. One set of renderer is often used
 * to identify a render method like te output format or a
 * specific layout of the label.
 */
interface RendererFactoryIfc{
	/**
	 * This method will create a new concrete instance of the renderer ready to
	 * use. The returned renderer will always support the RenderingIfc which
	 * can be used to pass the data to the renderer. 
	 * 
	 * @param PrintingPageBasicLayout $layout
	 * @param array $configuration
	 * @return RenderingIfc New renderer to use for rendering.
	 */
	public function createInstance(PageBasicLayout $layout, array $configuration);
	
	/**
	 * Returns a name for the renderer which is readable to humans.
	 */
	public function getName();
	
	/**
	 * Returns the class names of the created instances.
	 */
	public function getCreatedClassname();
	
	/**
	 * Retruns the supported classes which can be passed to the renderer
	 * via passRenderingdata($data).
	 */
	public function getSupportedClassesForRendering();
}
