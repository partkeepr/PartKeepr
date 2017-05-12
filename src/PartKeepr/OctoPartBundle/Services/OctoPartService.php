<?php

namespace PartKeepr\OctoPartBundle\Services;

use Guzzle\Http\Client;

class OctoPartService
{
    const OCTOPART_ENDPOINT = "http://octopart.com/api/v3/";

    private $apiKey;

    public function __construct($apiKey)
    {
        $this->apiKey = $apiKey;
    }

    public function getPartByUID($uid)
    {
        $client = new Client();
        $request = $client->createRequest('GET', self::OCTOPART_ENDPOINT."parts/".$uid);

        $request->getQuery()->add("apikey", $this->apiKey);
        $request->getQuery()->add("include", [
            "short_description",
            "datasheets",
            "compliance_documents",
            "descriptions",
            "imagesets",
            "specs",
            "reference_designs",
            "cad_models",
        ]);

        $request->send();

        return json_decode($request->getResponse()->getBody(), true);
    }

    public function getPartyByQuery($query, $start = 0)
    {
        $client = new Client();
        $request = $client->createRequest('GET', self::OCTOPART_ENDPOINT."parts/search");

        $request->getQuery()->add("apikey", $this->apiKey);
        $request->getQuery()->add("q", $query);
        $request->getQuery()->add("start", ($start - 1) * 20);
        $request->getQuery()->add("include", ["short_description", "specs", "datasheets"]);
        $request->getQuery()->add("limit", 20);

        $request->send();

        return json_decode($request->getResponse()->getBody(), true);
    }
}
