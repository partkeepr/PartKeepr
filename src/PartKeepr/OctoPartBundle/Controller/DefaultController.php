<?php

namespace PartKeepr\OctoPartBundle\Controller;

use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends FOSRestController
{
    /**
     * @Routing\Route("/api/octopart/get/{id}", defaults={"method" = "GET","_format" = "json"})
     * @Routing\Method({"GET"})
     *
     * @param $id string the Part UID
     *
     * @View()
     *
     * @return \stdClass
     */
    public function indexAction($id)
    {
        $data = $this->get("partkeepr.octopart_service")->getPartByUID($id);

        return $data;
    }

    /**
     * @Routing\Route("/api/octopart/query/", defaults={"method" = "GET","_format" = "json"})
     * @Routing\Method({"GET"})
     *
     * @param Request $request
     *
     * @View()
     *
     * @return array
     */
    public function getPartsByQueryAction(Request $request)
    {
        $start = 0;

        $responseData = [];

        $query = $request->query->get("q");

        if ($request->query->has("page")) {
            $start = $request->query->get("page");
        }

        $data = $this->get("partkeepr.octopart_service")->getPartyByQuery($query, $start);

        $responseData["hits"] = $data["hits"];
        $responseData["results"] = [];

        foreach ($data["results"] as $result) {
            $responseItem = [];
            $responseItem["mpn"] = $result["item"]["mpn"];
            $responseItem["title"] = $result["snippet"];
            $responseItem["manufacturer"] = $result["item"]["manufacturer"]["name"];
            $responseItem["numOffers"] = count($result["item"]["offers"]);
            $responseItem["numSpecs"] = count($result["item"]["specs"]);
            $responseItem["numDatasheets"] = count($result["item"]["datasheets"]);
            $responseItem["url"] = $result["item"]["octopart_url"];
            $responseItem["uid"] = $result["item"]["uid"];
            $responseData["results"][] = $responseItem;
        }

        return $responseData;
    }
}
