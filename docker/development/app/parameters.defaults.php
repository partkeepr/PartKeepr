$container->setParameter('database_driver', 'pdo_mysql');
$container->setParameter('database_host', 'db');
$container->setParameter('database_name', 'partkeepr');
$container->setParameter('database_password', 'partkeepr');
$container->setParameter('database_port', 3306);
$container->setParameter('database_user', 'partkeepr');

$container->setParameter('partkeepr.cronjob.check', false);

$container->setParameter('partkeepr.frontend.auto_login.enabled', true);
$container->setParameter('partkeepr.frontend.auto_login.password', 'admin');
$container->setParameter('partkeepr.frontend.auto_login.username', 'admin');
