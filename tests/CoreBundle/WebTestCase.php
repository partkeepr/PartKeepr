<?php
/**
 * Created by PhpStorm.
 * User: felicitus
 * Date: 10/9/15
 * Time: 7:43 PM.
 */

namespace PartKeepr\Tests\CoreBundle;

/**
 * Special WebTestCase which forces to load the AppKernel. This is because the base getKernelClass() method
 * does wildcard matching on *Kernel.php within the app/ directory, and on some systems it might happen that
 * SetupAppKernel gets loaded first, causing unit tests to fail.
 */
class WebTestCase extends \Liip\FunctionalTestBundle\Test\WebTestCase
{
    protected static function getKernelClass()
    {
        // KERNEL_DIR is deprecated, Set the KERNEL_CLASS environment variable to the fully-qualified class name of your Kernel instead
        $dir = isset($_SERVER['KERNEL_DIR']) ? $_SERVER['KERNEL_DIR'] : self::getPhpUnitXmlDir();

        $class = 'AppKernel';
        $file = $dir.'/'.$class.'.php';
        if (!file_exists($file)) {
            return parent::getKernelClass();
        }
        require_once $file;

        return $class;
    }
}
