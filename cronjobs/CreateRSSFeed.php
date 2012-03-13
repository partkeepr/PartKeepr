<?php
namespace de\RaumZeitLabor\PartKeepr\Cronjobs;

include(__DIR__."/../src/backend/de/RaumZeitLabor/PartKeepr/PartKeepr.php");

use de\RaumZeitLabor\PartKeepr\PartKeepr;
use de\RaumZeitLabor\PartKeepr\Util\Configuration;

PartKeepr::initialize();

$dql = PartKeepr::getEM()->createQuery("SELECT p FROM de\RaumZeitLabor\PartKeepr\Part\Part p ORDER BY p.createDate DESC");
$dql->setMaxResults(40);

$parts = $dql->getResult();

$rssDOM = new \DOMDocument("1.0", "UTF-8");
$rssElement = $rssDOM->createElement("rss");
$rssElement->setAttribute("version", "2.0");
$rssDOM->appendChild($rssElement);

$channel = $rssDOM->createElement("channel");

$rssElement->appendChild($channel);
$pTitle = $rssDOM->createElement('title', 'PartKeepr RSS Feed');
$pLink = $rssDOM->createElement('link', 'http://www.partkeepr.org');
$pDescription = $rssDOM->createElement('description', 'PartKeepr new part feed');
$pLang  = $rssDOM->createElement('language', 'en');

// Here we simply append all the nodes we just created to the channel node
$channel->appendChild($pTitle);
$channel->appendChild($pDescription);
$channel->appendChild($pLink);
$channel->appendChild($pLang);

foreach ($parts as $part) {
	$item = $rssDOM->createElement("item");
	
	$title = $rssDOM->createElement("title");
	$titleContent = $rssDOM->createTextNode($part->getName());
	$title->appendChild($titleContent);
	
	$description = $rssDOM->createElement("description");
	$descriptionContent = $rssDOM->createTextNode($part->getComment());
	$description->appendChild($descriptionContent);
	
	$category = $rssDOM->createElement("partkeepr:category");
	$categoryContent = $rssDOM->createTextNode($part->getCategoryPath());
	$category->appendChild($categoryContent);

	$pubDate = $rssDOM->createElement("pubDate", $part->getCreateDate()->format(DATE_RFC822));
	
	$item->appendChild($title);
	$item->appendChild($description);
	$item->appendChild($category);
	$item->appendChild($pubDate);
	
	$channel->appendChild($item);
	
}

$rssDOM->save(Configuration::getOption("partkeepr.files.path")."/feed.rss");

