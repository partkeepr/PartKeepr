<?php

namespace PartKeepr\PartBundle\Controller;

use Dunglas\ApiBundle\Api\IriConverter;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\StockBundle\Entity\StockEntry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Component\HttpFoundation\Request;

class PartController extends FOSRestController
{
    /**
     * @Routing\Route("/api/parts/massRemoveStock", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @param Request $request
     *
     * @throws \Exception Thrown if parameters are formatted incorrectly
     */
    public function massRemoveStockAction(Request $request)
    {
        $removals = json_decode($request->get('removals'));

        if (!is_array($removals)) {
            throw new \Exception('removals parameter must be an array');
        }

        /**
         * @var IriConverter
         */
        $iriConverter = $this->get('api.iri_converter');

        $user = $this->get('partkeepr.userservice')->getUser();

        foreach ($removals as $removal) {
            if (!property_exists($removal, 'part')) {
                throw new \Exception('Each removal must have the part property defined');
            }

            if (!property_exists($removal, 'amount')) {
                throw new \Exception('Each removal must have the amount property defined');
            }

            /**
             * @var Part
             */
            $part = $iriConverter->getItemFromIri($removal->part);

            $stock = new StockEntry();
            $stock->setStockLevel(0 - intval($removal->amount));
            $stock->setUser($user);

            if (!property_exists($removal, 'comment')) {
                $stock->setComment($removal->comment);
            }

            $part->addStockLevel($stock);
        }

        $this->get('doctrine.orm.entity_manager')->flush();
    }
}
