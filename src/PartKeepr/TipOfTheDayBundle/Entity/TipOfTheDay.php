<?php
namespace PartKeepr\TipOfTheDayBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\PartKeepr;
use PartKeepr\Util\BaseEntity;
use PartKeepr\Util\Configuration;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a tip of the day.
 *
 * Tips are stored on the central PartKeepr server in a wiki. However, we need to know a list of all tip pages
 * because the API has a limit per day. So basically, we sync the tip names from the wiki to the local system several
 * times a day and not each time an user logs in.
 *
 * Note: If you wish to link against a tip of the day, do it by name and not by id!
 *
 * @ORM\Entity
 * @TargetService(uri="/api/tip_of_the_days")
 **/
class TipOfTheDay extends BaseEntity
{
    /**
     * @ORM\Column(type="string")
     * @Groups({"default"})
     * @var string
     */
    private $name;

    /**
     * Sets the name for this tip
     *
     * @param string $name The name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the name for this tip
     *
     * @return string The name
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Syncronizes the tip database against the master wiki.
     *
     * @throws \Exception
     */
    public static function syncTips()
    {
        if (ini_get("allow_url_fopen") == 0) {
            throw new \Exception("allow_url_fopen is disabled, but required to query the TipOfTheDay database.");
        }

        $url = Configuration::getOption("partkeepr.tipoftheday.api",
            "http://partkeepr.org/wiki/api.php?action=query&list=categorymembers&cmtitle=Category:TipOfTheDay&format=json");

        $tipsString = file_get_contents($url);


        $aPageNames = self::extractPageNames($tipsString);

        self::updateTipDatabase($aPageNames);
    }

    /**
     * Updates the tip database. Expects an array of page names.
     *
     * This method clears all page names and re-creates them. This saves
     * alot of engineering, because we don't need to match contents
     * within the database against contents in an array.
     *
     * @param array $aPageNames The page names as array. Page names are stored as string.
     */
    private static function updateTipDatabase(array $aPageNames)
    {
        $dql = "DELETE FROM PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDay";
        $query = PartKeepr::getEM()->createQuery($dql);

        $query->execute();

        foreach ($aPageNames as $pageName) {
            $tip = new TipOfTheDay();
            $tip->setName($pageName);
            PartKeepr::getEM()->persist($tip);
        }

        PartKeepr::getEM()->flush();
    }

    /**
     * Extracts the page names from the mediawiki JSON returned.
     *
     * @param string $response The encoded json string
     *
     * @return array An array with the titles of each page
     */
    private static function extractPageNames($response)
    {
        $aTipsStructure = json_decode($response, true);
        $aTips = $aTipsStructure["query"]["categorymembers"];

        $aPageNames = array();

        foreach ($aTips as $tip) {
            $aPageNames[] = $tip["title"];
        }

        return $aPageNames;
    }

}
