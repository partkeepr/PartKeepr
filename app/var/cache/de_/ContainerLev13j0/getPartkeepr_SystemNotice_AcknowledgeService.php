<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'partkeepr.system_notice.acknowledge' shared service.

return $this->services['partkeepr.system_notice.acknowledge'] = new \PartKeepr\CoreBundle\Action\SystemNoticeAcknowledgeAction(${($_ = isset($this->services['doctrine.orm.default_entity_manager']) ? $this->services['doctrine.orm.default_entity_manager'] : $this->load('getDoctrine_Orm_DefaultEntityManagerService.php')) && false ?: '_'});
