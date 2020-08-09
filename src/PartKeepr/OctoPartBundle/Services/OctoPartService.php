<?php

namespace PartKeepr\OctoPartBundle\Services;

use Guzzle\Http\Client;
use Predis\Client as PredisClient;

class OctoPartService
{
    const OCTOPART_ENDPOINT = "https://octopart.com/api/v4/endpoint";

    const OCTOPART_FIELDS = <<<'EOD'
          hits
      
          manufacturer_agg {
            company {
              id
              name
            }
            count
          }
      
          results {
            part {
              id
              mpn
              slug
              short_description
              counts
              manufacturer {
                name
              }
              best_datasheet {
                name
                url
                credit_string
                credit_url
                page_count
                mime_type
              }
              best_image {
                  url
              }
              specs {
                attribute {
                  name
                  group
                }
                display_value
              }
              document_collections {
                name
                documents {
                  name
                  url
                  credit_string
                  credit_url
                }
              }
              descriptions {
                credit_string
                text
              }
              cad {
                add_to_library_url
              }
              reference_designs {
                  name
                  url
              }
              sellers {
                company {
                  homepage_url
                  is_verified
                  name
                  slug
                }
                is_authorized
                is_broker
                is_rfq
                offers {
                  click_url
                  inventory_level
                  moq
                  packaging
                  prices {
                    conversion_rate
                    converted_currency
                    converted_price
                    currency
                    price
                    quantity
                  }
                  sku
                  updated
                }
              }
            }
          }
EOD;

    const OCTOPART_PARTQUERY = 'query MyPartSearch($id: String!, $country: String = "DE", $currency: String = "EUR") { parts(ids: [$id]) {' . self::OCTOPART_FIELDS . '}}';

    const OCTOPART_QUERY = 'query MyPartSearch($q: String!, $filters: Map, $limit: Int!, $start: Int, $country: String = "DE", $currency: String = "EUR") { search(q: $q, filters: $filters, limit: $limit, start: $start, country: $country, currency: $currency) {' . self::OCTOPART_FIELDS . '}}';

    private $apiKey;
    private $limit = "3";

    public function __construct($apiKey)
    {
        $this->apiKey = $apiKey;
    }

    public function getPartByUID($uid)
    {
        try {
            $redisclient = new PredisClient();
            $part = $redisclient->get($uid);
            if ($part) {
                return json_decode( $part, true );
            }
        }
        finally {}

        $request = $client->createRequest('POST', self::OCTOPART_ENDPOINT);
        $request->setHeader('Content-Type', 'application/json');
        $request->getQuery()->add("token", $this->apiKey);
        
        $graphql = array(
            "query" => self::OCTOPART_PARTQUERY,
            "operationName" => "MyPartSearch",
            "variables" => [
                "id" => $uid
            ]
        );

        $request->setBody(json_encode($graphql));
        $request->send();

        $body = $request->getResponse()->getBody();

        $data = json_decode($body, true);

        return $data["data"]["parts"];
    }

    public function getPartyByQuery($q, $start = 1)
    {
        $client = new Client();

        $request = $client->createRequest('POST', self::OCTOPART_ENDPOINT);
        $request->setHeader('Content-Type', 'application/json');
        $request->getQuery()->add("token", $this->apiKey);
        
        $graphql = array(
            "query" => self::OCTOPART_QUERY,
            "operationName" => "MyPartSearch",
            "variables" => [
                "q" => $q,
                "limit" => $this->limit,
                "start" => ($start - 1) * 3
            ]
        );

        $request->setBody(json_encode($graphql));
        $request->send();

        $body = $request->getResponse()->getBody();

        $parts = json_decode($body, true);

        // work around the low number of allowed accesses to octopart's api
        try {
            $redisclient = new PredisClient();
            $results = $parts["data"]["search"]["results"];
            foreach ($results as $result) {
                $id = $result["part"]["id"];
                $redisclient->set($id, json_encode($result["part"]));
            }
        }
        finally {}

        return $parts;
    }
}
