<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'partkeepr.tip_of_the_day_service' shared service.

return $this->services['partkeepr.tip_of_the_day_service'] = new \PartKeepr\TipOfTheDayBundle\Services\TipOfTheDayService($this, ${($_ = isset($this->services['doctrine.orm.default_entity_manager']) ? $this->services['doctrine.orm.default_entity_manager'] : $this->load('getDoctrine_Orm_DefaultEntityManagerService.php')) && false ?: '_'}, ${($_ = isset($this->services['partkeepr.cronlogger_service']) ? $this->services['partkeepr.cronlogger_service'] : $this->load('getPartkeepr_CronloggerServiceService.php')) && false ?: '_'}, ${($_ = isset($this->services['partkeepr.remote_file_loader.factory']) ? $this->services['partkeepr.remote_file_loader.factory'] : ($this->services['partkeepr.remote_file_loader.factory'] = new \PartKeepr\RemoteFileLoader\RemoteFileLoaderFactory())) && false ?: '_'});
