<?php
@include_once 'Doctrine/Common/ClassLoader.php';

if (!class_exists("\\Doctrine\\Common\ClassLoader")) {
	echo json_encode(array("error" => true, "errormessage" => "Doctrine needs to be installed and in the PHP include_path. You can install doctrine on most unix systems using 'pear channel-discover pear.doctrine-project.org && pear install pear.doctrine-project.org/DoctrineORM'"));
	exit;
}

echo json_encode(array("error" => false));
exit;
