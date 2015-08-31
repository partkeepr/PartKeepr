<?php
namespace PartKeepr\PartBundle\Controller;

use Dunglas\ApiBundle\Controller\ResourceController;
use Dunglas\ApiBundle\JsonLd\Response;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\Stock\StockEntry;
use Symfony\Component\HttpFoundation\Request;

class PartController extends ResourceController
{
    /**
     * Removes stock from a part
     *
     * @RequestParam(name="quantity",description="The quantity to be removed")
     * @param Request $request The request object
     * @param int $id The id of the part to operate on
     *
     * @return Response
     */
    public function removeStockAction(Request $request, $id)
    {
        $resource = $this->getResource($request);
        $part = $this->findOrThrowNotFound($resource, $id);

        /**
         * @var $part Part
         */
        $quantity = $request->request->get("quantity");
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $stock = new StockEntry(0 - intval($quantity), $user);
        $part->addStockEntry($stock);
        $this->getDoctrine()->getManager()->persist($stock);
        $this->get("doctrine")->getManager()->flush();


        return $this->getSuccessResponse($resource, $part);
    }

    /**
     * Adds stock to a part
     *
     * @RequestParam(name="quantity",description="The quantity to be added")
     * @RequestParam(name="price",description="The price for the addition",default=null,strict=false)
     * @RequestParam(name="comment",description="The comment",default=null,strict=false)
     * @param Request $request The request object
     * @param int $id The id of the part to operate on
     *
     * @return Response
     */
    public function addStockAction(Request $request, $id)
    {
        $resource = $this->getResource($request);
        $part = $this->findOrThrowNotFound($resource, $id);

        /**
         * @var $part Part
         */
        $quantity = $request->request->get("quantity");
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $stock = new StockEntry(intval($quantity), $user);

        if ($request->request->has("price") && $request->request->get("price") !== null) {
            $stock->setPrice(floatval($request->request->get("price")));
        }

        if ($request->request->has("comment") && $request->request->get("comment") !== null) {
            $stock->setComment($request->request->get("comment"));
        }

        $part->addStockEntry($stock);
        $this->getDoctrine()->getManager()->persist($stock);
        $this->get("doctrine")->getManager()->flush();

        return $this->getSuccessResponse($resource, $part);
    }

    /**
     * Sets the stock level for a part
     *
     * @RequestParam(name="quantity",description="The quantity to be added")
     * @RequestParam(name="comment",description="The comment",default=null,strict=false)
     * @param Request $request The request object
     * @param int $id The id of the part to operate on
     * @return Response
     */
    public function setStockAction(Request $request, $id)
    {
        $resource = $this->getResource($request);
        $part = $this->findOrThrowNotFound($resource, $id);

        /**
         * @var $part Part
         */
        $quantity = $request->request->get("quantity");
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $oldQuantity = $part->getStockLevel();
        $correctionQuantity = $quantity - $oldQuantity;

        if ($correctionQuantity != 0) {

            $stock = new StockEntry($correctionQuantity, $user);

            if ($request->request->has("comment") && $request->request->get("comment") !== null) {
                $stock->setComment($request->request->get("comment"));
            }

            $part->addStockEntry($stock);
            $this->getDoctrine()->getManager()->persist($stock);
            $this->get("doctrine")->getManager()->flush();
        }

        return $this->getSuccessResponse($resource, $part);
    }
}
