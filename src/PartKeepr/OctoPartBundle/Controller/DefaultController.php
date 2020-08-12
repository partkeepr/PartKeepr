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
        $start = 1;

        $responseData = [];

        $query = $request->query->get("q");

        if ($request->query->has("page")) {
            $start = $request->query->get("page");
        }

        $data = $this->get("partkeepr.octopart_service")->getPartyByQuery($query, $start);

        $errors = $data["errors"];
        $data = $data["data"]["search"];

        $responseData["hits"] = $data["hits"];
        $responseData["results"] = [];
        $responseData["errors"] = $errors;

        if ($data) {
            foreach ($data["results"] as $result) {
                $part = $result["part"];
                $responseItem = [];
                $responseItem["mpn"] = $part["mpn"];
                $responseItem["title"] = $part["short_description"];
                $responseItem["manufacturer"] = $part["manufacturer"]["name"];
                $responseItem["numOffers"] = count($part["sellers"]);
                $responseItem["numSpecs"] = count($part["specs"]);
                $responseItem["numDatasheets"] = count($part["document_collections"]);
                $responseItem["url"] = "https://octopart.com".$part["slug"];
                $responseItem["uid"] = $part["id"];
                $responseData["results"][] = $responseItem;
            }
        }

        return $responseData;
    }
}
