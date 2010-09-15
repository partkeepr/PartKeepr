Installing NestedSet for Doctrine2
==================================

In the vendor directory of your project, use git to clone the NestedSet
extension:

    $ cd vendor
    $ git clone git://github.com/blt04/doctrine2-nestedset.git

Now add the `DoctrineExtensions\NestedSet` namespace to your class autoloader.
For example, if using Doctrine's autoloader:

    $loader = new Doctrine\Common\ClassLoader("DoctrineExtensions\\NestedSet", "vendor/doctrine2-nestedset");
    $loader->register();
