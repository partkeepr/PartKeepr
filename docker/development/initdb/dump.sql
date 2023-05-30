
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
DROP TABLE IF EXISTS `BatchJob`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BatchJob` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `baseEntity` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_AF3CBF045E237E06` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `BatchJob` WRITE;
/*!40000 ALTER TABLE `BatchJob` DISABLE KEYS */;
/*!40000 ALTER TABLE `BatchJob` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `BatchJobQueryField`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BatchJobQueryField` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `property` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `operator` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `dynamic` tinyint(1) NOT NULL,
  `batchJob_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_6118E78CABE62C64` (`batchJob_id`),
  CONSTRAINT `FK_6118E78CABE62C64` FOREIGN KEY (`batchJob_id`) REFERENCES `BatchJob` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `BatchJobQueryField` WRITE;
/*!40000 ALTER TABLE `BatchJobQueryField` DISABLE KEYS */;
/*!40000 ALTER TABLE `BatchJobQueryField` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `BatchJobUpdateField`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BatchJobUpdateField` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `property` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `dynamic` tinyint(1) NOT NULL,
  `batchJob_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_E1ADA7DFABE62C64` (`batchJob_id`),
  CONSTRAINT `FK_E1ADA7DFABE62C64` FOREIGN KEY (`batchJob_id`) REFERENCES `BatchJob` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `BatchJobUpdateField` WRITE;
/*!40000 ALTER TABLE `BatchJobUpdateField` DISABLE KEYS */;
/*!40000 ALTER TABLE `BatchJobUpdateField` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `CachedImage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CachedImage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `originalId` int(11) NOT NULL,
  `originalType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cacheFile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `CachedImage` WRITE;
/*!40000 ALTER TABLE `CachedImage` DISABLE KEYS */;
/*!40000 ALTER TABLE `CachedImage` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `CronLogger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CronLogger` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastRunDate` datetime NOT NULL,
  `cronjob` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cronjob` (`cronjob`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `CronLogger` WRITE;
/*!40000 ALTER TABLE `CronLogger` DISABLE KEYS */;
INSERT INTO `CronLogger` VALUES (1,'2020-02-19 12:25:02','partkeepr:cron:versioncheck');
INSERT INTO `CronLogger` VALUES (2,'2020-02-19 12:25:02','partkeepr:cron:synctips');
INSERT INTO `CronLogger` VALUES (3,'2020-02-19 12:25:02','partkeepr:cron:create-statistic-snapshot');
/*!40000 ALTER TABLE `CronLogger` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `Distributor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Distributor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` longtext COLLATE utf8_unicode_ci,
  `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fax` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `comment` longtext COLLATE utf8_unicode_ci,
  `skuurl` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `enabledForReports` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_2559D8A65E237E06` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `Distributor` WRITE;
/*!40000 ALTER TABLE `Distributor` DISABLE KEYS */;
/*!40000 ALTER TABLE `Distributor` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `FOSUser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FOSUser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `username_canonical` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `confirmation_token` varchar(180) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `email_canonical` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_37EF34F492FC23A8` (`username_canonical`),
  UNIQUE KEY `UNIQ_37EF34F4C05FB297` (`confirmation_token`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `FOSUser` WRITE;
/*!40000 ALTER TABLE `FOSUser` DISABLE KEYS */;
INSERT INTO `FOSUser` VALUES (1,'admin','admin',1,'Wxcg.J15FytGq8.do8Z0FQNbrOmRzpoWW24hnCAcEbA','W+fu9VmA5h/fevafE9+VNZcw590iTu4Nd8zepUCUVElcJ3RJlwheGBajYJPvrdQktUxr0HH+DsurgSeyHBusOw==',NULL,NULL,NULL,'a:1:{i:0;s:16:\"ROLE_SUPER_ADMIN\";}','foo@bar.com','foo@bar.com');
/*!40000 ALTER TABLE `FOSUser` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `Footprint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Footprint` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_7CF324945E237E06` (`name`),
  KEY `IDX_7CF3249412469DE2` (`category_id`),
  CONSTRAINT `FK_7CF3249412469DE2` FOREIGN KEY (`category_id`) REFERENCES `FootprintCategory` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `Footprint` WRITE;
/*!40000 ALTER TABLE `Footprint` DISABLE KEYS */;
INSERT INTO `Footprint` VALUES (1,3,'CBGA-32','32-Lead Ceramic Ball Grid Array');
INSERT INTO `Footprint` VALUES (2,5,'FCBGA-576','576-Ball Ball Grid Array, Thermally Enhanced');
INSERT INTO `Footprint` VALUES (3,7,'PBGA-119','119-Ball Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (4,9,'PBGA-169','169-Ball Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (5,11,'PBGA-225','225-Ball Plastic a Ball Grid Array');
INSERT INTO `Footprint` VALUES (6,13,'PBGA-260','260-Ball Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (7,15,'PBGA-297','297-Ball Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (8,17,'PBGA-304','304-Lead Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (9,19,'PBGA-316','316-Lead Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (10,21,'PBGA-324','324-Ball Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (11,23,'PBGA-385','385-Lead Ball Grid Array');
INSERT INTO `Footprint` VALUES (12,25,'PBGA-400','400-Ball Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (13,27,'PBGA-484','484-Ball Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (14,29,'PBGA-625','625-Ball Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (15,31,'PBGA-676','676-Ball Plastic Ball Grid Array');
INSERT INTO `Footprint` VALUES (16,33,'SBGA-256','256-Ball Ball Grid Array, Thermally Enhanced');
INSERT INTO `Footprint` VALUES (17,35,'SBGA-304','304-Ball Ball Grid Array, Thermally Enhanced');
INSERT INTO `Footprint` VALUES (18,37,'SBGA-432','432-Ball Ball Grid Array, Thermally Enhanced');
INSERT INTO `Footprint` VALUES (19,39,'CerDIP-8','8-Lead Ceramic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (20,41,'CerDIP-14','14-Lead Ceramic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (21,43,'CerDIP-16','16-Lead Ceramic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (22,45,'CerDIP-18','18-Lead Ceramic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (23,47,'CerDIP-20','20-Lead Ceramic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (24,49,'CerDIP-24 Narrow','24-Lead Ceramic Dual In-Line Package - Narrow Body');
INSERT INTO `Footprint` VALUES (25,51,'CerDIP-24 Wide','24-Lead Ceramic Dual In-Line Package - Wide Body');
INSERT INTO `Footprint` VALUES (26,53,'CerDIP-28','28-Lead Ceramic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (27,55,'CerDIP-40','40-Lead Ceramic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (28,57,'PDIP-8','8-Lead Plastic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (29,59,'PDIP-14','14-Lead Plastic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (30,61,'PDIP-16','16-Lead Plastic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (31,63,'PDIP-18','18-Lead Plastic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (32,65,'PDIP-20','20-Lead Plastic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (33,67,'PDIP-24','24-Lead Plastic Dual In-Line Package');
INSERT INTO `Footprint` VALUES (34,69,'PDIP-28 Narrow','28-Lead Plastic Dual In-Line Package, Narrow Body');
INSERT INTO `Footprint` VALUES (35,71,'PDIP-28 Wide','28-Lead Plastic Dual In-Line Package, Wide Body');
INSERT INTO `Footprint` VALUES (36,NULL,'SOIC-N-EP-8','8-Lead Standard Small Outline Package, with Expose Pad');
/*!40000 ALTER TABLE `Footprint` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `FootprintAttachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FootprintAttachment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `footprint_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `originalname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mimetype` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `extension` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_7B7388A151364C98` (`footprint_id`),
  CONSTRAINT `FK_7B7388A151364C98` FOREIGN KEY (`footprint_id`) REFERENCES `Footprint` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `FootprintAttachment` WRITE;
/*!40000 ALTER TABLE `FootprintAttachment` DISABLE KEYS */;
/*!40000 ALTER TABLE `FootprintAttachment` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `FootprintCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FootprintCategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) DEFAULT NULL,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `lvl` int(11) NOT NULL,
  `root` int(11) DEFAULT NULL,
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `categoryPath` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `IDX_C026BA6A727ACA70` (`parent_id`),
  KEY `IDX_C026BA6ADA439252` (`lft`),
  KEY `IDX_C026BA6AD5E02D69` (`rgt`),
  CONSTRAINT `FK_C026BA6A727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `FootprintCategory` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `FootprintCategory` WRITE;
/*!40000 ALTER TABLE `FootprintCategory` DISABLE KEYS */;
INSERT INTO `FootprintCategory` VALUES (1,NULL,1,142,0,1,'Root Category',NULL,'Root Category');
INSERT INTO `FootprintCategory` VALUES (2,1,2,5,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (3,2,3,4,2,1,'CBGA',NULL,'Root Category ➤ BGA ➤ CBGA');
INSERT INTO `FootprintCategory` VALUES (4,1,6,9,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (5,4,7,8,2,1,'FCBGA',NULL,'Root Category ➤ BGA ➤ FCBGA');
INSERT INTO `FootprintCategory` VALUES (6,1,10,13,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (7,6,11,12,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (8,1,14,17,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (9,8,15,16,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (10,1,18,21,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (11,10,19,20,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (12,1,22,25,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (13,12,23,24,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (14,1,26,29,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (15,14,27,28,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (16,1,30,33,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (17,16,31,32,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (18,1,34,37,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (19,18,35,36,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (20,1,38,41,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (21,20,39,40,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (22,1,42,45,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (23,22,43,44,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (24,1,46,49,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (25,24,47,48,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (26,1,50,53,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (27,26,51,52,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (28,1,54,57,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (29,28,55,56,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (30,1,58,61,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (31,30,59,60,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (32,1,62,65,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (33,32,63,64,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (34,1,66,69,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (35,34,67,68,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (36,1,70,73,1,1,'BGA',NULL,'Root Category ➤ BGA');
INSERT INTO `FootprintCategory` VALUES (37,36,71,72,2,1,'PBGA',NULL,'Root Category ➤ BGA ➤ PBGA');
INSERT INTO `FootprintCategory` VALUES (38,1,74,77,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (39,38,75,76,2,1,'CERDIP',NULL,'Root Category ➤ DIP ➤ CERDIP');
INSERT INTO `FootprintCategory` VALUES (40,1,78,81,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (41,40,79,80,2,1,'CERDIP',NULL,'Root Category ➤ DIP ➤ CERDIP');
INSERT INTO `FootprintCategory` VALUES (42,1,82,85,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (43,42,83,84,2,1,'CERDIP',NULL,'Root Category ➤ DIP ➤ CERDIP');
INSERT INTO `FootprintCategory` VALUES (44,1,86,89,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (45,44,87,88,2,1,'CERDIP',NULL,'Root Category ➤ DIP ➤ CERDIP');
INSERT INTO `FootprintCategory` VALUES (46,1,90,93,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (47,46,91,92,2,1,'CERDIP',NULL,'Root Category ➤ DIP ➤ CERDIP');
INSERT INTO `FootprintCategory` VALUES (48,1,94,97,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (49,48,95,96,2,1,'CERDIP',NULL,'Root Category ➤ DIP ➤ CERDIP');
INSERT INTO `FootprintCategory` VALUES (50,1,98,101,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (51,50,99,100,2,1,'CERDIP',NULL,'Root Category ➤ DIP ➤ CERDIP');
INSERT INTO `FootprintCategory` VALUES (52,1,102,105,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (53,52,103,104,2,1,'CERDIP',NULL,'Root Category ➤ DIP ➤ CERDIP');
INSERT INTO `FootprintCategory` VALUES (54,1,106,109,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (55,54,107,108,2,1,'CERDIP',NULL,'Root Category ➤ DIP ➤ CERDIP');
INSERT INTO `FootprintCategory` VALUES (56,1,110,113,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (57,56,111,112,2,1,'PDIP',NULL,'Root Category ➤ DIP ➤ PDIP');
INSERT INTO `FootprintCategory` VALUES (58,1,114,117,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (59,58,115,116,2,1,'PDIP',NULL,'Root Category ➤ DIP ➤ PDIP');
INSERT INTO `FootprintCategory` VALUES (60,1,118,121,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (61,60,119,120,2,1,'PDIP',NULL,'Root Category ➤ DIP ➤ PDIP');
INSERT INTO `FootprintCategory` VALUES (62,1,122,125,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (63,62,123,124,2,1,'PDIP',NULL,'Root Category ➤ DIP ➤ PDIP');
INSERT INTO `FootprintCategory` VALUES (64,1,126,129,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (65,64,127,128,2,1,'PDIP',NULL,'Root Category ➤ DIP ➤ PDIP');
INSERT INTO `FootprintCategory` VALUES (66,1,130,133,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (67,66,131,132,2,1,'PDIP',NULL,'Root Category ➤ DIP ➤ PDIP');
INSERT INTO `FootprintCategory` VALUES (68,1,134,137,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (69,68,135,136,2,1,'PDIP',NULL,'Root Category ➤ DIP ➤ PDIP');
INSERT INTO `FootprintCategory` VALUES (70,1,138,141,1,1,'DIP',NULL,'Root Category ➤ DIP');
INSERT INTO `FootprintCategory` VALUES (71,70,139,140,2,1,'PDIP',NULL,'Root Category ➤ DIP ➤ PDIP');
/*!40000 ALTER TABLE `FootprintCategory` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `FootprintImage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FootprintImage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `footprint_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `originalname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mimetype` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `extension` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_3B22699151364C98` (`footprint_id`),
  CONSTRAINT `FK_3B22699151364C98` FOREIGN KEY (`footprint_id`) REFERENCES `Footprint` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `FootprintImage` WRITE;
/*!40000 ALTER TABLE `FootprintImage` DISABLE KEYS */;
INSERT INTO `FootprintImage` VALUES (1,1,'footprint','1b614228-517c-11ea-abf0-df07e0119f97','CBGA-32.png','image/png',23365,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (2,2,'footprint','1b63770a-517c-11ea-8454-92064e7639f6','FCBGA-576.png','image/png',47861,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (3,3,'footprint','1b63b0e4-517c-11ea-ba68-6d0f91f0c135','PBGA-119.png','image/png',32537,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (4,4,'footprint','1b63f96e-517c-11ea-a0fc-b0836905e28f','PBGA-169.png','image/png',36699,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (5,5,'footprint','1b643582-517c-11ea-8288-44c7cc4082be','PBGA-225.png','image/png',39366,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (6,6,'footprint','1b64666a-517c-11ea-8276-fcf401bad075','PBGA-260.png','image/png',61202,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (7,7,'footprint','1b64a288-517c-11ea-a103-2bac72df83f2','PBGA-297.png','image/png',68013,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (8,8,'footprint','1b64dc76-517c-11ea-b2f0-af292bdaf294','PBGA-304.png','image/png',55833,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (9,9,'footprint','1b6511be-517c-11ea-aeab-598288f4b9f9','PBGA-316.png','image/png',55996,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (10,10,'footprint','1b654a30-517c-11ea-b389-0f42afcb7306','PBGA-324.png','image/png',44882,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (11,11,'footprint','1b657c1c-517c-11ea-a9a8-e6c551e2818e','PBGA-385.png','image/png',35146,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (12,12,'footprint','1b65aa84-517c-11ea-9953-bc48badc789c','PBGA-400.png','image/png',67933,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (13,13,'footprint','1b65e1ca-517c-11ea-8c40-59fab99a84a0','PBGA-484.png','image/png',49851,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (14,14,'footprint','1b6613c0-517c-11ea-972d-39c41375f445','PBGA-625.png','image/png',65307,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (15,15,'footprint','1b664250-517c-11ea-a3d9-b47a1a2242cb','PBGA-676.png','image/png',54708,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (16,16,'footprint','1b667838-517c-11ea-8977-5b5865ff9ca0','SBGA-256.png','image/png',48636,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (17,17,'footprint','1b66adb2-517c-11ea-b7b4-7f7c94b28d87','SBGA-304.png','image/png',51944,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (18,18,'footprint','1b66e21e-517c-11ea-9c1a-577cc2ece8dc','SBGA-432.png','image/png',63247,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (19,19,'footprint','1b6718ce-517c-11ea-921d-b45648294db9','CERDIP-8.png','image/png',13544,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (20,20,'footprint','1b6747f4-517c-11ea-a1b9-49ea24d34e37','CERDIP-14.png','image/png',14226,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (21,21,'footprint','1b677332-517c-11ea-b3a5-47f1c7fba789','CERDIP-16.png','image/png',14576,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (22,22,'footprint','1b679a60-517c-11ea-897c-a85add34303b','CERDIP-18.png','image/png',9831,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (23,23,'footprint','1b67c3e6-517c-11ea-9e32-235fc3df1155','CERDIP-20.png','image/png',10209,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (24,24,'footprint','1b67ecae-517c-11ea-b082-45d96b9cd05a','CERDIP-24-N.png','image/png',11582,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (25,25,'footprint','1b68118e-517c-11ea-bcfb-4eb5975ac9db','CERDIP-24-W.png','image/png',12407,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (26,26,'footprint','1b683754-517c-11ea-a0c9-4f8614fa4e5a','CERDIP-28.png','image/png',12233,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (27,27,'footprint','1b686152-517c-11ea-92dd-891364b6b3ac','CERDIP-40.png','image/png',12421,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (28,28,'footprint','1b688eac-517c-11ea-b074-23df72f58f66','PDIP-8.png','image/png',13537,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (29,29,'footprint','1b68b9fe-517c-11ea-a238-f95b4fe0544c','PDIP-14.png','image/png',13779,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (30,30,'footprint','1b68e078-517c-11ea-8f25-38997cd97702','PDIP-16.png','image/png',18305,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (31,31,'footprint','1b6908c8-517c-11ea-8831-71c365f054e0','PDIP-18.png','image/png',14893,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (32,32,'footprint','1b692e98-517c-11ea-af51-9c818fee0248','PDIP-20.png','image/png',14429,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (33,33,'footprint','1b6954f4-517c-11ea-9de4-ae9526322ddf','PDIP-24.png','image/png',14647,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (34,34,'footprint','1b697b28-517c-11ea-a5f1-27bc161d3dd2','PDIP-28-N.png','image/png',18703,'png',NULL,'2020-02-17 11:53:26');
INSERT INTO `FootprintImage` VALUES (35,35,'footprint','1b69a47c-517c-11ea-8c9d-2b8a8acd34e3','PDIP-28-W.png','image/png',15728,'png',NULL,'2020-02-17 11:53:26');
/*!40000 ALTER TABLE `FootprintImage` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `GridPreset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GridPreset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `configuration` longtext COLLATE utf8_unicode_ci NOT NULL,
  `gridDefault` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_grid_unique` (`grid`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `GridPreset` WRITE;
/*!40000 ALTER TABLE `GridPreset` DISABLE KEYS */;
/*!40000 ALTER TABLE `GridPreset` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `ImportPreset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ImportPreset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `baseEntity` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `configuration` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_entity_unique` (`baseEntity`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ImportPreset` WRITE;
/*!40000 ALTER TABLE `ImportPreset` DISABLE KEYS */;
/*!40000 ALTER TABLE `ImportPreset` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `Manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Manufacturer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` longtext COLLATE utf8_unicode_ci,
  `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `comment` longtext COLLATE utf8_unicode_ci,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fax` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_253B3D245E237E06` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=286 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `Manufacturer` WRITE;
/*!40000 ALTER TABLE `Manufacturer` DISABLE KEYS */;
INSERT INTO `Manufacturer` VALUES (1,'Integrated Circuit Designs',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (2,'ACTEL',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (3,'ALTINC',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (4,'Aeroflex',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (5,'Agilent Technologies',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (6,'AKM Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (7,'Alesis Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (8,'ALi (Acer Laboratories Inc.)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (9,'Allayer Communications',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (10,'Allegro Microsystems',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (11,'Alliance Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (12,'Alpha Industries',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (13,'Alpha Microelectronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (14,'Altera',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (15,'Advanced Micro Devices (AMD)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (16,'American Microsystems, Inc. (AMI)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (17,'Amic Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (18,'Amphus',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (19,'Anachip Corp.',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (20,'ANADIGICs',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (21,'Analog Devices',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (22,'Analog Systems',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (23,'Anchor Chips',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (24,'Apex Microtechnology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (25,'ARK Logic',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (26,'ASD',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (27,'Astec Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (28,'ATC (Analog Technologie)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (29,'ATecoM',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (30,'ATI Technologies',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (31,'Atmel',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (32,'AT&T',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (33,'AudioCodes',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (34,'Aura Vision',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (35,'Aureal',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (36,'Austin Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (37,'Avance Logic',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (38,'Bel Fuse',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (39,'Benchmarq Microelectronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (40,'BI Technologies',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (41,'Bowmar/White',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (42,'Brightflash',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (43,'Broadcom',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (44,'Brooktree(now Rockwell)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (45,'Burr Brown',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (46,'California Micro Devices',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (47,'Calogic',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (48,'Catalyst Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (49,'Centon Electronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (50,'Ceramate Technical',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (51,'Cherry Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (52,'Chipcon AS',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (53,'Chips',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (54,'Chrontel',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (55,'Cirrus Logic',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (56,'ComCore Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (57,'Conexant',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (58,'Cosmo Electronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (59,'Chrystal',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (60,'Cygnal',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (61,'Cypress Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (62,'Cyrix Corporation',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (63,'Daewoo Electronics Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (64,'Dallas Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (65,'Davicom Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (66,'Data Delay Devices',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (67,'Diamond Technologies',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (68,'DIOTEC',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (69,'DTC Data Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (70,'DVDO',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (71,'EG&G',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (72,'Elan Microelectronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (73,'ELANTEC',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (74,'Electronic Arrays',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (75,'Elite Flash Storage Technology Inc. (EFST)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (76,'EM Microelectronik - Marin',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (77,'Enhanced Memory Systems',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (78,'Ensoniq Corp',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (79,'EON Silicon Devices',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (80,'Epson',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (81,'Ericsson',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (82,'ESS Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (83,'Electronic Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (84,'EXAR',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (85,'Excel Semiconductor Inc.',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (86,'Fairschild',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (87,'Freescale Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (88,'Fujitsu',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (89,'Galileo Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (90,'Galvantech',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (91,'GEC Plessey',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (92,'Gennum',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (93,'General Electric (Harris)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (94,'General Instruments',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (95,'G-Link Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (96,'Goal Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (97,'Goldstar',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (98,'Gould',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (99,'Greenwich Instruments',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (100,'General Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (101,'Harris Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (102,'VEB',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (103,'Hitachi Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (104,'Holtek',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (105,'Hewlett Packard',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (106,'Hualon',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (107,'Hynix Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (108,'Hyundai',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (109,'IC Design',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (110,'Integrated Circuit Systems (ICS)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (111,'IC - Haus',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (112,'ICSI (Integrated Circuit Solution Inc.)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (113,'I-Cube',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (114,'IC Works',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (115,'Integrated Device Technology (IDT)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (116,'IGS Technologies',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (117,'IMPALA Linear',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (118,'IMP',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (119,'Infineon',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (120,'INMOS',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (121,'Intel',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (122,'Intersil',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (123,'International Rectifier',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (124,'Information Storage Devices',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (125,'ISSI (Integrated Silicon Solution, Inc.)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (126,'Integrated Technology Express',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (127,'ITT Semiconductor (Micronas Intermetall)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (128,'IXYS',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (129,'Korea Electronics (KEC)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (130,'Kota Microcircuits',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (131,'Lattice Semiconductor Corp.',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (132,'Lansdale Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (133,'Level One Communications',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (134,'LG Semicon (Lucky Goldstar Electronic Co.)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (135,'Linear Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (136,'Linfinity Microelectronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (137,'Lite-On',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (138,'Lucent Technologies (AT&T Microelectronics)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (139,'Macronix International',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (140,'Marvell Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (141,'Matsushita Panasonic',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (142,'Maxim Dallas',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (143,'Media Vision',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (144,'Microchip (Arizona Michrochip Technology)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (145,'Matra MHS',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (146,'Micrel Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (147,'Micronas',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (148,'Micronix Integrated Systems',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (149,'Micron Technology, Inc.',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (150,'Microsemi',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (151,'Mini-Circuits',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (152,'Mitel Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (153,'Mitsubishi Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (154,'Micro Linear',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (155,'MMI (Monolithic Memories, Inc.)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (156,'Mosaic Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (157,'Mosel Vitelic',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (158,'MOS Technologies',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (159,'Mostek',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (160,'MoSys',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (161,'Motorola',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (162,'Microtune',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (163,'M-Systems',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (164,'Murata Manufacturing',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (165,'MWave (IBM)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (166,'Myson Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (167,'NEC Electronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (168,'NexFlash Technologies',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (169,'New Japan Radio',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (170,'National Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (171,'NVidia Corporation',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (172,'Oak Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (173,'Oki Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (174,'Opti',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (175,'Orbit Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (176,'Oren Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (177,'Performance Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (178,'Pericom Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (179,'PhaseLink Laboratories',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (180,'Philips Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (181,'PLX Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (182,'PMC- Sierra',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (183,'Precision Monolithics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (184,'Princeton Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (185,'PowerSmart',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (186,'QuickLogic',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (187,'Qlogic',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (188,'Quality Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (189,'Rabbit Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (190,'Ramtron International Co.',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (191,'Raytheon Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (192,'RCA Solid State',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (193,'Realtek Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (194,'Rectron',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (195,'Rendition',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (196,'Renesas Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (197,'Rockwell',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (198,'Rohm Corp.',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (199,'S3',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (200,'Sage',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (201,'Saifun Semiconductors Ltd.',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (202,'Sames',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (203,'Samsung',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (204,'Sanken',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (205,'Sanyo',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (206,'Scenix',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (207,'Samsung Electronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (208,'SEEQ Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (209,'Seiko Instruments',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (210,'Semtech',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (211,'SGS-Ates',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (212,'SGS-Thomson Microelectonics ST-M)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (213,'Sharp Microelectronics (USA)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (214,'Shindengen',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (215,'Siemens Microelectronics, Inc.',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (216,'Sierra',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (217,'Sigma Tel',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (218,'Signetics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (219,'Silicon Laboratories',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (220,'Silicon Magic',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (221,'Simtec Corp.',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (222,'Siliconix',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (223,'Siliconians',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (224,'Sipex',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (225,'Silicon Integrated Systems',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (226,'SMC',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (227,'Standard Microsystems',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (228,'Sony Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (229,'Space Electronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (230,'Spectek',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (231,'Signal Processing Technologies',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (232,'Solid State Scientific',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (233,'Silicon Storage Technology (SST)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (234,'STMicroelectronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (235,'SUMMIT Microelectronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (236,'Synergy Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (237,'Synertek',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (238,'Taiwan Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (239,'TDK Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (240,'Teccor Electronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (241,'TelCom Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (242,'Teledyne',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (243,'Telefunken',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (244,'Teltone',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (245,'Thomson-CSF',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (246,'Texas Instruments',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (247,'Toko Amerika',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (248,'Toshiba (US)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (249,'Trident',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (250,'TriQuint Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (251,'Triscend',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (252,'Tseng Labs',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (253,'Tundra',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (254,'Turbo IC',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (255,'Ubicom',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (256,'United Microelectronics Corp (UMC)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (257,'Unitrode',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (258,'USAR Systems',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (259,'United Technologies Microelectronics Center (UTMC)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (260,'Utron',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (261,'V3 Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (262,'Vadem',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (263,'Vanguard International Semiconductor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (264,'Vantis',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (265,'Via Technologies',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (266,'Virata',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (267,'Vishay',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (268,'Vision Tech',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (269,'Vitelic',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (270,'VLSI Technology',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (271,'Volterra',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (272,'VTC',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (273,'Waferscale Integration (WSI)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (274,'Western Digital',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (275,'Weitek',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (276,'Winbond',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (277,'Wofson Microelectronics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (278,'Xwmics',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (279,'Xicor',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (280,'Xilinx',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (281,'Yamaha',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (282,'Zetex Semiconductors',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (283,'Zilog',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (284,'ZMD (Zentrum Mikroelektronik Dresden)',NULL,NULL,NULL,NULL,NULL,NULL);
INSERT INTO `Manufacturer` VALUES (285,'Zoran',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Manufacturer` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `ManufacturerICLogo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ManufacturerICLogo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manufacturer_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `originalname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mimetype` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `extension` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_3F1EF213A23B42D` (`manufacturer_id`),
  CONSTRAINT `FK_3F1EF213A23B42D` FOREIGN KEY (`manufacturer_id`) REFERENCES `Manufacturer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=347 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ManufacturerICLogo` WRITE;
/*!40000 ALTER TABLE `ManufacturerICLogo` DISABLE KEYS */;
INSERT INTO `ManufacturerICLogo` VALUES (1,1,'iclogo','1bf234c2-517c-11ea-b35d-fce0933e9505','acer.png','image/png',2195,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (2,2,'iclogo','1bf2ae16-517c-11ea-97d9-6f9707d791fa','actel.png','image/png',5003,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (3,3,'iclogo','1bf2cacc-517c-11ea-9c25-20eb09bb4805','advldev.png','image/png',1835,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (4,4,'iclogo','1bf2e55c-517c-11ea-8e4a-d5b5d8376133','aeroflex1.png','image/png',9649,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (5,4,'iclogo','1bf2f3a8-517c-11ea-9fc3-e855a641c013','aeroflex2.png','image/png',4562,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (6,5,'iclogo','1bf3125c-517c-11ea-8ad6-7584dd4872e3','agilent.png','image/png',5264,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (7,6,'iclogo','1bf32e22-517c-11ea-ae4b-31942bf0a604','akm.png','image/png',2204,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (8,7,'iclogo','1bf34a60-517c-11ea-a1a2-bf3e0c5eb129','alesis.png','image/png',1475,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (9,8,'iclogo','1bf36504-517c-11ea-b942-de884c035401','ali1.png','image/png',2462,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (10,8,'iclogo','1bf37062-517c-11ea-a769-94c5b8b16606','ali2.png','image/png',1784,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (11,9,'iclogo','1bf38a84-517c-11ea-b777-febc878c93b9','allayer.png','image/png',1869,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (12,10,'iclogo','1bf3a4f6-517c-11ea-9354-9dfe667f3ffb','allegro.png','image/png',1475,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (13,11,'iclogo','1bf3bf68-517c-11ea-94ca-3bee1054a469','alliance.png','image/png',1949,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (14,12,'iclogo','1bf3d9d0-517c-11ea-96c3-2f286e2c43a0','alphaind.png','image/png',1403,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (15,13,'iclogo','1bf3f334-517c-11ea-af41-fdd860f3be55','alphamic.png','image/png',2989,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (16,13,'iclogo','1bf3fe4c-517c-11ea-a72b-0068adddb063','alpha.png','image/png',1534,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (17,14,'iclogo','1bf418f0-517c-11ea-ad16-02b4db63573c','altera.png','image/png',4064,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (18,15,'iclogo','1bf4342a-517c-11ea-9979-9b3ed7ceef28','amd.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (19,16,'iclogo','1bf44e10-517c-11ea-b3ce-a5475ba9f143','ami1.png','image/png',2399,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (20,16,'iclogo','1bf458b0-517c-11ea-ac44-fcd1f1523dfe','ami2.png','image/png',1706,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (21,17,'iclogo','1bf46fda-517c-11ea-bdf4-c5c1170ce7c9','amic.png','image/png',2228,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (22,18,'iclogo','1bf48808-517c-11ea-9b81-8d820fae5bbd','ampus.png','image/png',6150,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (23,19,'iclogo','1bf4a270-517c-11ea-86c5-542d43a8d1ec','anachip.png','image/png',3549,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (24,20,'iclogo','1bf4bc60-517c-11ea-8c03-fab80f6570c4','anadigic.png','image/png',5147,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (25,21,'iclogo','1bf4d650-517c-11ea-b630-b2bc58c88656','analog1.png','image/png',1262,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (26,21,'iclogo','1bf4e19a-517c-11ea-842a-b91a0a77f6cd','analog.png','image/png',1403,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (27,22,'iclogo','1bf4fa68-517c-11ea-a4a0-a9084394413c','anasys.png','image/png',3309,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (28,23,'iclogo','1bf512fa-517c-11ea-bffc-0c69b625faa2','anchorch.png','image/png',1475,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (29,24,'iclogo','1bf52cc2-517c-11ea-b02c-919367aa0ba2','apex1.png','image/png',2627,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (30,24,'iclogo','1bf53834-517c-11ea-8391-de106a74aba7','apex.png','image/png',3974,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (31,25,'iclogo','1bf54f40-517c-11ea-8d3c-f7c4839de3bb','ark.png','image/png',2089,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (32,26,'iclogo','1bf5670a-517c-11ea-b2df-82cfd5ece312','asd.png','image/png',5024,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (33,27,'iclogo','1bf5856e-517c-11ea-a6ab-95387f5ec787','astec.png','image/png',3369,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (34,28,'iclogo','1bf5a198-517c-11ea-9a5b-421f9569f655','atc.png','image/png',8660,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (35,29,'iclogo','1bf5bd4a-517c-11ea-8fee-4e86d0972f53','atecom.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (36,30,'iclogo','1bf5d6a4-517c-11ea-a217-1842bb5bd149','ati.png','image/png',2630,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (37,31,'iclogo','1bf5f116-517c-11ea-aad9-d71f69b54477','atmel.png','image/png',2843,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (38,32,'iclogo','1bf609a8-517c-11ea-85c8-138b50f5d7b5','att.png','image/png',2816,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (39,33,'iclogo','1bf621b8-517c-11ea-bfd4-f2c4d3a50749','audiocod.png','image/png',2429,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (40,34,'iclogo','1bf63c0c-517c-11ea-8cf1-c65671cbf54d','auravis.png','image/png',2281,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (41,35,'iclogo','1bf6576e-517c-11ea-bd4f-717aa432e8e7','aureal.png','image/png',2109,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (42,36,'iclogo','1bf670b4-517c-11ea-b4c9-1b53837dd170','austin.png','image/png',2464,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (43,37,'iclogo','1bf688ec-517c-11ea-9657-24b12d0441e7','averlog.png','image/png',1552,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (44,38,'iclogo','1bf6a02a-517c-11ea-85e6-0377c723dd77','belfuse.png','image/png',2204,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (45,39,'iclogo','1bf6b86c-517c-11ea-8f7e-019a2d142c32','benchmrq.png','image/png',1370,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (46,40,'iclogo','1bf6ceec-517c-11ea-ba79-6d72a2c4f46d','bi.png','image/png',2008,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (47,41,'iclogo','1bf6e512-517c-11ea-b0bc-6d136df08bae','bowmar_white.png','image/png',4652,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (48,42,'iclogo','1bf70092-517c-11ea-9e22-bbd284f7649d','bright.png','image/png',6839,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (49,43,'iclogo','1bf71cf8-517c-11ea-9d0a-3c376ae135a1','broadcom.png','image/png',6056,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (50,44,'iclogo','1bf73832-517c-11ea-97cb-b942028e671a','brooktre.png','image/png',1364,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (51,45,'iclogo','1bf75362-517c-11ea-bc6f-80f3acb4a325','burrbrwn.png','image/png',3563,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (52,46,'iclogo','1bf76e24-517c-11ea-854f-87b093c998fa','calmicro.png','image/png',2109,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (53,47,'iclogo','1bf78738-517c-11ea-81ff-41ad2951bde7','calogic.png','image/png',3367,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (54,48,'iclogo','1bf79e8a-517c-11ea-bffe-b984ab8fdb7f','catalys1.png','image/png',1922,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (55,48,'iclogo','1bf7a7d6-517c-11ea-ab45-005d289b56bb','catalyst.png','image/png',2228,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (56,49,'iclogo','1bf7c1bc-517c-11ea-b821-59ea3b1ac07a','ccube.png','image/png',1309,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (57,50,'iclogo','1bf7d9e0-517c-11ea-809d-d3f3ae05ccb5','ceramate1.png','image/png',2917,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (58,50,'iclogo','1bf7e3e0-517c-11ea-8642-b964a9e4a334','ceramate2.png','image/png',2917,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (59,51,'iclogo','1bf7f9d4-517c-11ea-ba22-63cef6e34ab7','cherry.png','image/png',2507,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (60,52,'iclogo','1bf80ed8-517c-11ea-b815-7ed2d2d5d78d','chipcon1.png','image/png',8655,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (61,52,'iclogo','1bf818d8-517c-11ea-b5b9-d2874e1b0ff8','chipcon2.png','image/png',2923,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (62,53,'iclogo','1bf82ea4-517c-11ea-aa02-39e47783e38a','chips.png','image/png',2864,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (63,54,'iclogo','1bf84394-517c-11ea-b098-e8e85c3d4206','chrontel.png','image/png',1476,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (64,55,'iclogo','1bf85b7c-517c-11ea-b616-47df838cf0dc','cirrus.png','image/png',3218,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (65,56,'iclogo','1bf87472-517c-11ea-b4fb-6fe8a64387ec','comcore.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (66,57,'iclogo','1bf88d18-517c-11ea-bcff-e2bf3e4e7649','conexant.png','image/png',2051,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (67,58,'iclogo','1bf8a44c-517c-11ea-977e-4d78192c3092','cosmo.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (68,59,'iclogo','1bf8bab8-517c-11ea-ab3e-4b8a8705546f','crystal.png','image/png',3605,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (69,60,'iclogo','1bf8d30e-517c-11ea-abba-3238b2c0ea75','cygnal.png','image/png',2135,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (70,61,'iclogo','1bf8ea60-517c-11ea-8c30-e6807cbb2737','cypres1.png','image/png',2504,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (71,61,'iclogo','1bf8f334-517c-11ea-a2e0-d749c5031ab2','cypress.png','image/png',4275,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (72,62,'iclogo','1bf90d9c-517c-11ea-a112-69c5a0aa197c','cyrix.png','image/png',2204,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (73,63,'iclogo','1bf92890-517c-11ea-97d1-5da2675827f1','daewoo.png','image/png',1907,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (74,64,'iclogo','1bf94186-517c-11ea-86dc-26d3edd8f145','dallas1.png','image/png',1469,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (75,64,'iclogo','1bf94ca8-517c-11ea-9806-96823e02d5ed','dallas2.png','image/png',1309,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (76,64,'iclogo','1bf957c0-517c-11ea-b634-55cc3b2db562','dallas3.png','image/png',1869,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (77,65,'iclogo','1bf97336-517c-11ea-9c7e-80afc2c87a7e','davicom.png','image/png',4589,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (78,66,'iclogo','1bf98c5e-517c-11ea-abff-9a621015476e','ddd.png','image/png',3235,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (79,67,'iclogo','1bf9a662-517c-11ea-acf5-db688dccdf07','diamond.png','image/png',2504,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (80,68,'iclogo','1bf9c14c-517c-11ea-808e-c282bbc876ad','diotec.png','image/png',1454,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (81,69,'iclogo','1bf9dbaa-517c-11ea-b367-dd80173d488e','dtc1.png','image/png',2513,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (82,69,'iclogo','1bf9e712-517c-11ea-85ea-a6558bee54c0','dtc2.png','image/png',1670,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (83,70,'iclogo','1bfa01d4-517c-11ea-823b-03d239269963','dvdo.png','image/png',2357,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (84,71,'iclogo','1bfa1c14-517c-11ea-b4dc-9e4265231d64','egg.png','image/png',1628,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (85,72,'iclogo','1bfa330c-517c-11ea-8724-27b7465727ee','elan.png','image/png',13826,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (86,73,'iclogo','1bfa50b2-517c-11ea-83be-8f0b837351cd','elantec1.png','image/png',1400,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (87,73,'iclogo','1bfa5a26-517c-11ea-81a9-d5d926ac5e69','elantec.png','image/png',3274,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (88,74,'iclogo','1bfa7524-517c-11ea-b662-f101388794c0','elec_arrays.png','image/png',5602,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (89,75,'iclogo','1bfa902c-517c-11ea-b316-3cd0b135afd8','elite[1].png','image/png',8285,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (90,76,'iclogo','1bfaab8e-517c-11ea-b19b-57bae656542c','emmicro.png','image/png',3599,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (91,77,'iclogo','1bfac6a0-517c-11ea-a1c3-79047a53283d','enhmemsy.png','image/png',1403,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (92,78,'iclogo','1bfae0ea-517c-11ea-9632-584ec84a88e7','ensoniq.png','image/png',3557,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (93,79,'iclogo','1bfafcec-517c-11ea-ac52-746bcccd59d4','eon.png','image/png',5393,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (94,80,'iclogo','1bfb15a6-517c-11ea-902d-29e6ae671f9a','epson1.png','image/png',2349,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (95,80,'iclogo','1bfb1fc4-517c-11ea-8341-8ef9a22eefca','epson2.png','image/png',2405,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (96,81,'iclogo','1bfb345a-517c-11ea-ad1f-fed1829ccd5f','ericsson.png','image/png',4184,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (97,82,'iclogo','1bfb4a58-517c-11ea-ae94-4395a635356d','ess.png','image/png',3030,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (98,83,'iclogo','1bfb63da-517c-11ea-8083-9c1de13bafdf','etc.png','image/png',2189,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (99,84,'iclogo','1bfb7c30-517c-11ea-bf37-f1c1e1ea7e18','exar.png','image/png',2771,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (100,85,'iclogo','1bfb968e-517c-11ea-86dd-eaf0052b7e7b','excelsemi1.png','image/png',7632,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (101,85,'iclogo','1bfba174-517c-11ea-952a-b55ebce4fb74','excelsemi2.png','image/png',2339,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (102,85,'iclogo','1bfbacaa-517c-11ea-be29-1685ece46cba','exel.png','image/png',2771,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (103,86,'iclogo','1bfbc5fa-517c-11ea-959d-5c319a41f521','fairchil.png','image/png',1552,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (104,87,'iclogo','1bfbe0c6-517c-11ea-98db-05cfd383483e','freescale.png','image/png',3840,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (105,88,'iclogo','1bfbfbce-517c-11ea-9060-c6c9b647d7b4','fujielec.png','image/png',5048,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (106,88,'iclogo','1bfc0858-517c-11ea-95c2-055b6cb1116b','fujitsu2.png','image/png',1860,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (107,89,'iclogo','1bfc2360-517c-11ea-9be3-0f8b4bdcec36','galileo.png','image/png',3779,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (108,90,'iclogo','1bfc39f4-517c-11ea-a0d7-2359c3171477','galvant.png','image/png',2669,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (109,91,'iclogo','1bfc548e-517c-11ea-9c95-c21253387d8e','gecples.png','image/png',2312,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (110,92,'iclogo','1bfc6f00-517c-11ea-afe0-b59f0d9790ee','gennum.png','image/png',2614,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (111,93,'iclogo','1bfc86a2-517c-11ea-85f3-9287d9be2d26','ge.png','image/png',2321,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (112,94,'iclogo','1bfc9caa-517c-11ea-91c4-e5566819f23c','gi1.png','image/png',1385,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (113,94,'iclogo','1bfca5ec-517c-11ea-9727-250bd1d8d03d','gi.png','image/png',1691,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (114,95,'iclogo','1bfcbbe0-517c-11ea-98e6-b54f366c4785','glink.png','image/png',1706,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (115,96,'iclogo','1bfcd15c-517c-11ea-8bbc-89e6e97c734b','goal1.png','image/png',9092,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (116,96,'iclogo','1bfcdb8e-517c-11ea-83df-1bdb667d3784','goal2.png','image/png',9649,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (117,97,'iclogo','1bfcf29a-517c-11ea-8dca-ce6803b0fa42','goldstar1.png','image/png',2923,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (118,97,'iclogo','1bfcfba0-517c-11ea-9eb7-175b577ae714','goldstar2.png','image/png',11387,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (119,98,'iclogo','1bfd13ba-517c-11ea-bf22-05493d42da08','gould.png','image/png',1549,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (120,99,'iclogo','1bfd2a9e-517c-11ea-b1b6-046b268735a8','greenwich.png','image/png',9761,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (121,100,'iclogo','1bfd4326-517c-11ea-99d4-d12f48b5586f','gsemi.png','image/png',1704,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (122,101,'iclogo','1bfd5dc0-517c-11ea-b2c3-c45a7273a70f','harris1.png','image/png',1549,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (123,101,'iclogo','1bfd69dc-517c-11ea-bd3b-940b5a317d89','harris2.png','image/png',1874,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (124,102,'iclogo','1bfd8264-517c-11ea-a5f5-e8b2a83b95d8','hfo.png','image/png',1958,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (125,103,'iclogo','1bfd9a6a-517c-11ea-acbc-5ab4fbe5088e','hitachi.png','image/png',2611,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (126,104,'iclogo','1bfdb572-517c-11ea-8e51-4a6a710fcb37','holtek.png','image/png',2160,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (127,105,'iclogo','1bfdce2c-517c-11ea-ac3d-ae0eb8a2a8fb','hp.png','image/png',2464,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (128,106,'iclogo','1bfde70e-517c-11ea-9a54-5d0b880141fd','hualon.png','image/png',2864,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (129,107,'iclogo','1bfdff6e-517c-11ea-8f96-52e6914ab4e4','hynix.png','image/png',8444,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (130,108,'iclogo','1bfe17ba-517c-11ea-bb15-5f7d54a0717c','hyundai2.png','image/png',2269,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (131,109,'iclogo','1bfe2d72-517c-11ea-8a2a-f6dafbea652a','icdesign.png','image/png',3014,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (132,110,'iclogo','1bfe41d6-517c-11ea-a559-ed0946b2e069','icd.png','image/png',1641,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (133,110,'iclogo','1bfe4a14-517c-11ea-9d6e-07c45d9e3672','ics.png','image/png',2042,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (134,111,'iclogo','1bfe6044-517c-11ea-833e-8bcdac840021','ichaus1.png','image/png',3370,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (135,111,'iclogo','1bfe694a-517c-11ea-af58-e981d014fd42','ichaus.png','image/png',1552,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (136,112,'iclogo','1bfe80e2-517c-11ea-ae64-49d37c814c9a','icsi.png','image/png',4049,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (137,113,'iclogo','1bfe9618-517c-11ea-b4eb-0cee245bf283','icube.png','image/png',1629,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (138,114,'iclogo','1bfeaba8-517c-11ea-af8d-a4e5813116a6','icworks.png','image/png',1874,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (139,115,'iclogo','1bfec21e-517c-11ea-8bc8-30480dc1dea6','idt1.png','image/png',3995,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (140,115,'iclogo','1bfecb6a-517c-11ea-b72b-e176777267ee','idt.png','image/png',1553,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (141,116,'iclogo','1bfee122-517c-11ea-8530-17141168bd55','igstech.png','image/png',3832,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (142,117,'iclogo','1bfef7ca-517c-11ea-ad5a-3ae067957707','impala.png','image/png',1628,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (143,118,'iclogo','1bff0fda-517c-11ea-a958-35ac08edcac1','imp.png','image/png',2175,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (144,119,'iclogo','1bff2790-517c-11ea-abe0-f4d953ce7c7e','infineon.png','image/png',4511,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (145,120,'iclogo','1bff3de8-517c-11ea-a1ff-ed0fad37fd43','inmos.png','image/png',3365,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (146,121,'iclogo','1bff52d8-517c-11ea-a777-acdbbfd4fa57','intel2.png','image/png',2010,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (147,122,'iclogo','1bff66e2-517c-11ea-947e-cdba52b90f3d','intresil4.png','image/png',2614,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (148,122,'iclogo','1bff6ebc-517c-11ea-8c01-ce54dfb0c7c2','intrsil1.png','image/png',1874,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (149,122,'iclogo','1bff76e6-517c-11ea-8bbf-709275240ff8','intrsil2.png','image/png',2520,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (150,122,'iclogo','1bff829e-517c-11ea-9baa-7e486e7dab62','intrsil3.png','image/png',3295,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (151,123,'iclogo','1bff9d7e-517c-11ea-a26b-0e60ade8fd3e','ir.png','image/png',2729,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (152,124,'iclogo','1bffb642-517c-11ea-b506-d2fe916b8b2c','isd.png','image/png',2554,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (153,125,'iclogo','1bffd28a-517c-11ea-ac6d-22001c97b5e5','issi.png','image/png',3030,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (154,126,'iclogo','1bffec52-517c-11ea-a9cf-401e56c6e1b7','ite.png','image/png',3302,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (155,127,'iclogo','1c000570-517c-11ea-ab6c-acb5469a8586','itt.png','image/png',2483,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (156,128,'iclogo','1c001f74-517c-11ea-b90e-5fc501a2e044','ixys.png','image/png',3575,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (157,129,'iclogo','1c003842-517c-11ea-9465-d28775ef9c48','kec.png','image/png',2567,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (158,130,'iclogo','1c004e9a-517c-11ea-af88-922808e4b75b','kota.png','image/png',1552,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (159,131,'iclogo','1c006506-517c-11ea-afb6-4c51e1e4a5c3','lattice1.png','image/png',1768,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (160,131,'iclogo','1c006e66-517c-11ea-8e08-5462bf3c1594','lattice2.png','image/png',1519,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (161,131,'iclogo','1c007726-517c-11ea-ba4d-bdd30d05962b','lattice3.png','image/png',1216,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (162,132,'iclogo','1c008efa-517c-11ea-a6eb-51e332125040','lds1.png','image/png',2136,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (163,132,'iclogo','1c0099b8-517c-11ea-a9fd-4bbf82cc2483','lds.png','image/png',1959,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (164,133,'iclogo','1c00b024-517c-11ea-a9ea-f6612c38b00e','levone.png','image/png',4189,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (165,134,'iclogo','1c00c9ba-517c-11ea-839a-063da728a1c3','lgs1.png','image/png',2417,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (166,134,'iclogo','1c00d374-517c-11ea-85c2-7d6d32b4f3c3','lgs.png','image/png',737,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (167,135,'iclogo','1c00eda0-517c-11ea-afde-79daf9208531','linear.png','image/png',2486,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (168,136,'iclogo','1c0106b4-517c-11ea-a202-fd908f7f22ee','linfin.png','image/png',4844,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (169,137,'iclogo','1c012162-517c-11ea-9a81-e995a332bc37','liteon.png','image/png',2388,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (170,138,'iclogo','1c013b3e-517c-11ea-80a4-2aa3478966ea','lucent.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (171,139,'iclogo','1c015416-517c-11ea-bca4-909d0dbe703b','macronix.png','image/png',2324,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (172,140,'iclogo','1c016d48-517c-11ea-a239-810b41df7b97','marvell.png','image/png',3131,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (173,141,'iclogo','1c018724-517c-11ea-b67a-0ca1cc0f28c1','matsush1.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (174,141,'iclogo','1c019250-517c-11ea-b94a-353b6456b126','matsushi.png','image/png',2029,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (175,142,'iclogo','1c01a998-517c-11ea-973d-b0655018261d','maxim.png','image/png',2690,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (176,143,'iclogo','1c01c068-517c-11ea-81e5-c24385c6515f','mediavi1.png','image/png',2189,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (177,143,'iclogo','1c01ca0e-517c-11ea-a5ac-f473ef1d085b','mediavi2.png','image/png',2487,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (178,144,'iclogo','1c01e386-517c-11ea-a622-c15bf4a48054','me.png','image/png',2411,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (179,144,'iclogo','1c01ef3e-517c-11ea-b1f1-76021c9e2dd9','microchp.png','image/png',2814,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (180,145,'iclogo','1c0208e8-517c-11ea-aaf0-32487cc4aeea','mhs2.png','image/png',2036,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (181,145,'iclogo','1c021414-517c-11ea-b3ed-c28eb6079886','mhs.png','image/png',1870,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (182,146,'iclogo','1c0229cc-517c-11ea-b83a-000b93a70a0e','micrel1.png','image/png',9695,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (183,146,'iclogo','1c0234bc-517c-11ea-8eb0-93e625e49c31','micrel2.png','image/png',9695,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (184,147,'iclogo','1c024a4c-517c-11ea-9c27-906076b4ba39','micronas.png','image/png',1871,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (185,148,'iclogo','1c026216-517c-11ea-9e86-40aa7b23bf2e','micronix.png','image/png',1856,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (186,149,'iclogo','1c027666-517c-11ea-b195-686cbbfc8dce','micron.png','image/png',1763,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (187,150,'iclogo','1c028d4a-517c-11ea-b9df-b3fdbcea5d82','microsemi1.png','image/png',3714,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (188,150,'iclogo','1c0298f8-517c-11ea-b218-c45dd384deef','microsemi2.png','image/png',11992,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (189,151,'iclogo','1c02b180-517c-11ea-bdb2-d2d6eb049447','minicirc.png','image/png',1391,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (190,152,'iclogo','1c02c904-517c-11ea-b67d-afeb389800ab','mitel.png','image/png',2819,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (191,153,'iclogo','1c02e196-517c-11ea-b32a-0ae758ede01b','mitsubis.png','image/png',2311,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (192,154,'iclogo','1c02f94c-517c-11ea-8d31-a90b54774436','mlinear.png','image/png',3377,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (193,155,'iclogo','1c030f4a-517c-11ea-89a3-5ff18e28f89a','mmi.png','image/png',2692,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (194,156,'iclogo','1c03264c-517c-11ea-b62e-63ded48d45e3','mosaic.png','image/png',2959,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (195,157,'iclogo','1c033e3e-517c-11ea-aa6e-295a944e6492','moselvit.png','image/png',2504,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (196,158,'iclogo','1c0355e0-517c-11ea-bf4c-e717b3328fb1','mos.png','image/png',2857,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (197,159,'iclogo','1c036f08-517c-11ea-bf43-999f653af02d','mostek1.png','image/png',7502,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (198,159,'iclogo','1c0379ee-517c-11ea-9b02-3bf48e6eaab9','mostek2.png','image/png',7502,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (199,159,'iclogo','1c0384f2-517c-11ea-9290-32805a3430f6','mostek3.png','image/png',2514,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (200,160,'iclogo','1c039b7c-517c-11ea-8d53-f043c2deb6ca','mosys.png','image/png',2321,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (201,161,'iclogo','1c03b2e2-517c-11ea-8ebb-01be54fdbdf9','motorol1.png','image/png',999,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (202,161,'iclogo','1c03bcd8-517c-11ea-afe8-cbb3c5e03c13','motorol2.png','image/png',2417,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (203,162,'iclogo','1c03d2ea-517c-11ea-a34d-a66320bbd0af','mpd.png','image/png',2663,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (204,163,'iclogo','1c03e974-517c-11ea-b074-f60a7a398d3e','msystem.png','image/png',1670,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (205,164,'iclogo','1c040260-517c-11ea-ac03-3aaf5dc1627d','murata1.png','image/png',4874,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (206,164,'iclogo','1c040bd4-517c-11ea-8b18-9d21b1cecec6','murata.png','image/png',4777,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (207,165,'iclogo','1c042146-517c-11ea-b728-f1af7f5823da','mwave.png','image/png',3370,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (208,166,'iclogo','1c0438b6-517c-11ea-91a4-40317701bdee','myson.png','image/png',1932,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (209,167,'iclogo','1c044d56-517c-11ea-a73f-6124c8db30ce','nec1.png','image/png',3166,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (210,167,'iclogo','1c045530-517c-11ea-9a1e-ace96cd68b31','nec2.png','image/png',3071,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (211,168,'iclogo','1c04685e-517c-11ea-9361-24d3d2ad1761','nexflash.png','image/png',7789,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (212,169,'iclogo','1c047f6a-517c-11ea-9622-6860561ff933','njr.png','image/png',3419,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (213,170,'iclogo','1c0494e6-517c-11ea-b11c-1b21d20160c4','ns1.png','image/png',1959,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (214,170,'iclogo','1c049cac-517c-11ea-86c4-0ceab8233d46','ns2.png','image/png',1952,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (215,171,'iclogo','1c04b0ac-517c-11ea-8c67-ada0612fed55','nvidia.png','image/png',1874,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (216,172,'iclogo','1c04cab0-517c-11ea-83b5-0023cd1d89c8','oak.png','image/png',2614,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (217,173,'iclogo','1c04e3ce-517c-11ea-8375-63787777febe','oki1.png','image/png',2267,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (218,173,'iclogo','1c04ed42-517c-11ea-ac34-8000feba210b','oki.png','image/png',2546,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (219,174,'iclogo','1c050340-517c-11ea-9946-f582cab0e1bd','opti.png','image/png',1684,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (220,175,'iclogo','1c051e84-517c-11ea-96c8-fafd2105d748','orbit.png','image/png',3347,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (221,176,'iclogo','1c053680-517c-11ea-a6f3-277c109d8a6f','oren.png','image/png',3497,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (222,177,'iclogo','1c054ec2-517c-11ea-844f-270877ad5696','perform.png','image/png',3284,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (223,178,'iclogo','1c05665a-517c-11ea-99b3-4acaf5fc9854','pericom.png','image/png',2311,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (224,179,'iclogo','1c057bcc-517c-11ea-8089-435334dd563a','phaslink.png','image/png',2669,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (225,180,'iclogo','1c0590c6-517c-11ea-926f-34b94eaf1902','philips.png','image/png',8690,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (226,181,'iclogo','1c05a80e-517c-11ea-9e30-e33221f6f0a4','plx.png','image/png',4749,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (227,182,'iclogo','1c05bff6-517c-11ea-b120-39c4b7530228','pmc.png','image/png',3497,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (228,183,'iclogo','1c05d7c0-517c-11ea-a6a3-af0f81d6cf9d','pmi.png','image/png',3807,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (229,184,'iclogo','1c05ef3a-517c-11ea-b73d-ce3eff1ee86c','ptc.png','image/png',2669,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (230,185,'iclogo','1c06063c-517c-11ea-97fb-feea529c5c72','pwrsmart.png','image/png',1389,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (231,186,'iclogo','1c061b18-517c-11ea-9647-186c8c43a9e3','qlogic.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (232,187,'iclogo','1c0630c6-517c-11ea-877b-80a4cb92e8fa','qualcomm.png','image/png',3326,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (233,188,'iclogo','1c0645ca-517c-11ea-bb75-12f5658e276e','quality.png','image/png',1309,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (234,189,'iclogo','1c065b6e-517c-11ea-bc6c-7cd93ce04c43','rabbit.png','image/png',2857,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (235,190,'iclogo','1c06719e-517c-11ea-aaf4-07313e0e9c74','ramtron.png','image/png',1573,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (236,191,'iclogo','1c06874c-517c-11ea-8e1d-51547328f4b5','raytheon.png','image/png',4303,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (237,192,'iclogo','1c06a3b2-517c-11ea-8d4d-ff6d78a6c2e9','rca.png','image/png',1860,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (238,193,'iclogo','1c06bb40-517c-11ea-880a-53bee4296b25','realtek.png','image/png',2993,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (239,194,'iclogo','1c06d580-517c-11ea-9336-9871318f8422','rectron.png','image/png',1691,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (240,195,'iclogo','1c06f146-517c-11ea-9989-c14fad4bd6ea','rendit.png','image/png',1370,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (241,196,'iclogo','1c070bcc-517c-11ea-9689-b9afafa26e25','renesas.png','image/png',8761,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (242,197,'iclogo','1c0727ec-517c-11ea-b133-74f25d1b7d8d','rockwell.png','image/png',1704,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (243,198,'iclogo','1c0742f4-517c-11ea-b4ae-338cc7624971','rohm.png','image/png',2693,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (244,199,'iclogo','1c075c30-517c-11ea-926d-226fdf1e4639','s3.png','image/png',2189,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (245,200,'iclogo','1c0775da-517c-11ea-8d9a-29d435e9092d','sage.png','image/png',2735,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (246,201,'iclogo','1c078ed0-517c-11ea-88fb-6e511e646f63','saifun.png','image/png',19242,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (247,202,'iclogo','1c07af82-517c-11ea-948c-6ccadf955d15','sames.png','image/png',2614,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (248,203,'iclogo','1c07c77e-517c-11ea-a083-dfd6889ff8d5','samsung.png','image/png',1841,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (249,204,'iclogo','1c07e43e-517c-11ea-967c-e9d1e43965c3','sanken1.png','image/png',2214,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (250,204,'iclogo','1c07f208-517c-11ea-9630-334688b21f8f','sanken.png','image/png',5309,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (251,205,'iclogo','1c080eaa-517c-11ea-875b-710ef452ec7f','sanyo1.png','image/png',2228,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (252,205,'iclogo','1c081c10-517c-11ea-b8b9-97487d91ea85','sanyo.png','image/png',2455,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (253,206,'iclogo','1c0836be-517c-11ea-b122-c02317eaf2d9','scenix.png','image/png',1869,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (254,207,'iclogo','1c085144-517c-11ea-8ddf-f9b7adf9fc7e','sec1.png','image/png',9392,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (255,207,'iclogo','1c085ffe-517c-11ea-9148-a7a7b72cd1a6','sec.png','image/png',2051,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (256,208,'iclogo','1c087aca-517c-11ea-a535-ad0400d0785f','seeq.png','image/png',2903,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (257,209,'iclogo','1c08969a-517c-11ea-bb99-7ed8fdf78efc','seikoi.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (258,209,'iclogo','1c08a3a6-517c-11ea-aeda-fba30c92bc5f','semelab.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (259,210,'iclogo','1c08beea-517c-11ea-a35c-96ffa9a7c509','semtech.png','image/png',1431,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (260,211,'iclogo','1c08da4c-517c-11ea-97b3-72424c0951d6','sgs1.png','image/png',2339,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (261,212,'iclogo','1c08f63a-517c-11ea-9d3b-cd6fccb9b34a','sgs2.png','image/png',1874,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (262,213,'iclogo','1c090ee0-517c-11ea-bc50-298cbcc2f07b','sharp.png','image/png',2258,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (263,214,'iclogo','1c0926e6-517c-11ea-95c9-a0e63e26801b','shindgen.png','image/png',1629,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (264,215,'iclogo','1c09407c-517c-11ea-bdbf-1b48dfbc3f82','siemens1.png','image/png',1216,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (265,215,'iclogo','1c094b26-517c-11ea-831c-1cef32a858b2','siemens2.png','image/png',2916,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (266,216,'iclogo','1c096688-517c-11ea-85cc-db64fd8bb257','sierra.png','image/png',2321,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (267,217,'iclogo','1c09821c-517c-11ea-9a06-fa89108cd973','sigmatel.png','image/png',1790,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (268,218,'iclogo','1c0999c8-517c-11ea-918f-19ee711c3d38','signetic.png','image/png',1519,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (269,219,'iclogo','1c09b37c-517c-11ea-bce2-fd88b95ea8bd','siliconlabs.png','image/png',5540,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (270,220,'iclogo','1c09d122-517c-11ea-8b37-a171745dc985','siliconm.png','image/png',3817,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (271,221,'iclogo','1c09eb1c-517c-11ea-bdf1-4f38bf8dad38','silicons.png','image/png',2320,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (272,221,'iclogo','1c09f774-517c-11ea-a2d6-864f6a53237f','simtek.png','image/png',1874,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (273,222,'iclogo','1c0a13f8-517c-11ea-b0fa-062e3cc44d2d','siliconx.png','image/png',2464,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (274,223,'iclogo','1c0a316c-517c-11ea-a4df-1f96e88298ce','silnans.png','image/png',1549,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (275,224,'iclogo','1c0a4d3c-517c-11ea-9f5b-1ba9d886caa5','sipex.png','image/png',4029,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (276,225,'iclogo','1c0a6786-517c-11ea-aab3-05026ba5c269','sis.png','image/png',3608,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (277,226,'iclogo','1c0a7ffa-517c-11ea-a1b7-295a2785bec3','smc1.png','image/png',1763,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (278,227,'iclogo','1c0a99a4-517c-11ea-ac2e-8c558d1fddea','smsc1.png','image/png',1781,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (279,227,'iclogo','1c0aa6ce-517c-11ea-b54b-c444098d7c8d','smsc.png','image/png',2117,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (280,228,'iclogo','1c0ac1fe-517c-11ea-9536-9bb2fd9a5b86','sony.png','image/png',2476,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (281,229,'iclogo','1c0adbee-517c-11ea-8f89-3c7e51df0277','space.png','image/png',3377,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (282,230,'iclogo','1c0af7f0-517c-11ea-be3d-536311ad51f8','spectek.png','image/png',2228,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (283,231,'iclogo','1c0b1014-517c-11ea-8c86-726446ba6ae5','spt.png','image/png',3419,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (284,232,'iclogo','1c0b2a90-517c-11ea-a19a-02d8b32b0ba5','sss.png','image/png',1871,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (285,233,'iclogo','1c0b4462-517c-11ea-b9ed-8388174dcc63','sst.png','image/png',3072,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (286,234,'iclogo','1c0b5d26-517c-11ea-bf6e-a401d8af9e02','st.png','image/png',1604,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (287,235,'iclogo','1c0b764e-517c-11ea-990d-ce7023a3a859','summit.png','image/png',11440,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (288,236,'iclogo','1c0b8f3a-517c-11ea-92f5-84d33ae2e347','synergy.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (289,237,'iclogo','1c0ba5ba-517c-11ea-9743-08386f480818','synertek.png','image/png',1789,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (290,238,'iclogo','1c0bbb9a-517c-11ea-8d66-18505514406d','taiwsemi.png','image/png',1475,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (291,239,'iclogo','1c0bd166-517c-11ea-b3a6-c95270af6d2f','tdk.png','image/png',3687,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (292,240,'iclogo','1c0be782-517c-11ea-b0ff-90e7b45462fe','teccor.png','image/png',1869,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (293,241,'iclogo','1c0bfda8-517c-11ea-979f-15d592d8c158','telcom.png','image/png',2555,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (294,242,'iclogo','1c0c132e-517c-11ea-82b4-078c8c95c31e','teledyne.png','image/png',1904,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (295,243,'iclogo','1c0c2904-517c-11ea-82fa-0cff1324b488','telefunk.png','image/png',2715,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (296,244,'iclogo','1c0c3eda-517c-11ea-acce-7c4dc69776ca','teltone.png','image/png',4303,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (297,245,'iclogo','1c0c58b6-517c-11ea-b5fb-3013ce098a99','thomscsf.png','image/png',1874,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (298,246,'iclogo','1c0c7436-517c-11ea-9716-302dada7716a','ti1.png','image/png',1869,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (299,246,'iclogo','1c0c80f2-517c-11ea-ac66-4d136cec08f3','ti.png','image/png',1789,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (300,247,'iclogo','1c0c9cd6-517c-11ea-ac88-58d0882c88f3','toko.png','image/png',1907,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (301,248,'iclogo','1c0cb86a-517c-11ea-9d76-08d6f88fcb34','toshiba1.png','image/png',1922,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (302,248,'iclogo','1c0cc5bc-517c-11ea-900e-275f9183e6b9','toshiba2.png','image/png',1309,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (303,248,'iclogo','1c0cd2e6-517c-11ea-846e-6e6327a714c5','toshiba3.png','image/png',2269,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (304,249,'iclogo','1c0cedd0-517c-11ea-9fb7-9e85f317ef6d','trident.png','image/png',1414,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (305,250,'iclogo','1c0d0612-517c-11ea-a19d-3e7f543af34f','triquint.png','image/png',2294,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (306,251,'iclogo','1c0d214c-517c-11ea-9be2-102ad0c00d51','triscend.png','image/png',4521,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (307,252,'iclogo','1c0d3cf4-517c-11ea-b115-cb72f949089e','tseng.png','image/png',1466,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (308,253,'iclogo','1c0d5824-517c-11ea-aa67-b349aac71caa','tundra.png','image/png',1709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (309,254,'iclogo','1c0d7160-517c-11ea-b55e-7accfc5c477c','turbo_ic.png','image/png',7784,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (310,255,'iclogo','1c0d8dee-517c-11ea-9088-e015423b4ad5','ubicom.png','image/png',2047,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (311,256,'iclogo','1c0da928-517c-11ea-99b1-2dfc4d90ec87','umc.png','image/png',3032,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (312,257,'iclogo','1c0dc516-517c-11ea-80bb-a9a9739b779a','unitrode.png','image/png',1309,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (313,258,'iclogo','1c0de0c8-517c-11ea-ac5c-8bddf99acce6','usar1.png','image/png',2771,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (314,258,'iclogo','1c0def00-517c-11ea-ad70-0d7666847c17','usar.png','image/png',2793,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (315,259,'iclogo','1c0e0b20-517c-11ea-b2f6-ee77d3ffaf3f','utmc.png','image/png',2047,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (316,260,'iclogo','1c0e2678-517c-11ea-bbf4-2b8cc2e082b5','utron.png','image/png',2047,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (317,261,'iclogo','1c0e423e-517c-11ea-b759-9409a88533d7','v3.png','image/png',3248,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (318,262,'iclogo','1c0e5e04-517c-11ea-8a0f-376eea0bee6c','vadem.png','image/png',1874,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (319,263,'iclogo','1c0e7876-517c-11ea-a914-badcea1efc0f','vanguard.png','image/png',1454,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (320,264,'iclogo','1c0e94c8-517c-11ea-bf66-41221a342775','vantis.png','image/png',1475,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (321,265,'iclogo','1c0eaeea-517c-11ea-8d38-cac7c9477d88','via.png','image/png',1922,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (322,266,'iclogo','1c0ec8d0-517c-11ea-ac07-98cada6476cc','virata.png','image/png',3764,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (323,267,'iclogo','1c0ee0b8-517c-11ea-a7ff-8e2f79414576','vishay.png','image/png',4410,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (324,268,'iclogo','1c0ef7ba-517c-11ea-86ed-4f740cd530ed','vistech.png','image/png',1942,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (325,269,'iclogo','1c0f0e3a-517c-11ea-b3c5-85841275bc70','vitelic.png','image/png',1691,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (326,270,'iclogo','1c0f2762-517c-11ea-b2b7-52fadbb768d8','vlsi.png','image/png',1874,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (327,271,'iclogo','1c0f3e32-517c-11ea-acf7-4dcdd4aa1ac1','volterra.png','image/png',2029,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (328,272,'iclogo','1c0f555c-517c-11ea-a6bc-e7f695ee407b','vtc.png','image/png',2223,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (329,273,'iclogo','1c0f6bbe-517c-11ea-8a9a-4fb4583341b6','wafscale.png','image/png',2985,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (330,274,'iclogo','1c0f8004-517c-11ea-8c05-b43d04e5e3f1','wdc1.png','image/png',1784,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (331,274,'iclogo','1c0f88ba-517c-11ea-ad37-90dc024ad52f','wdc2.png','image/png',1403,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (332,275,'iclogo','1c0f9fc6-517c-11ea-a913-9af8c6316c4c','weitek.png','image/png',1468,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (333,276,'iclogo','1c0fb8e4-517c-11ea-8aee-7fce4cfceb26','winbond.png','image/png',5402,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (334,277,'iclogo','1c0fd2fc-517c-11ea-a208-3de00791a5d1','wolf.png','image/png',2343,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (335,278,'iclogo','1c0febc0-517c-11ea-bc93-3a920704ed1f','xemics.png','image/png',2029,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (336,279,'iclogo','1c1006a0-517c-11ea-a8c5-3cb725704fee','xicor1.png','image/png',1259,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (337,279,'iclogo','1c101294-517c-11ea-821f-7b98c1f341b8','xicor.png','image/png',3389,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (338,280,'iclogo','1c102e32-517c-11ea-a464-12216c5183b7','xilinx.png','image/png',4186,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (339,281,'iclogo','1c104908-517c-11ea-afe2-e2328b8d09e3','yamaha.png','image/png',1779,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (340,282,'iclogo','1c106168-517c-11ea-ab1c-f405d22f0595','zetex.png','image/png',1255,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (341,283,'iclogo','1c107658-517c-11ea-831c-70746e0710f8','zilog1.png','image/png',1958,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (342,283,'iclogo','1c108080-517c-11ea-b6d9-664ee50fe109','zilog2.png','image/png',2204,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (343,283,'iclogo','1c108a4e-517c-11ea-a62d-706a26744fcc','zilog3.png','image/png',2614,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (344,283,'iclogo','1c109430-517c-11ea-a624-80b2229a137f','zilog4.png','image/png',2405,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (345,284,'iclogo','1c10aa60-517c-11ea-8ac5-71d1750e8d1c','zmda.png','image/png',3709,'png',NULL,'2020-02-17 11:53:27');
INSERT INTO `ManufacturerICLogo` VALUES (346,285,'iclogo','1c10c18a-517c-11ea-a781-aaffe43be5d4','zoran.png','image/png',2784,'png',NULL,'2020-02-17 11:53:27');
/*!40000 ALTER TABLE `ManufacturerICLogo` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `MetaPartParameterCriteria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MetaPartParameterCriteria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_id` int(11) DEFAULT NULL,
  `unit_id` int(11) DEFAULT NULL,
  `partParameterName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `operator` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` double DEFAULT NULL,
  `normalizedValue` double DEFAULT NULL,
  `stringValue` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `valueType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `siPrefix_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_6EE1D3924CE34BEC` (`part_id`),
  KEY `IDX_6EE1D39219187357` (`siPrefix_id`),
  KEY `IDX_6EE1D392F8BD700D` (`unit_id`),
  CONSTRAINT `FK_6EE1D39219187357` FOREIGN KEY (`siPrefix_id`) REFERENCES `SiPrefix` (`id`),
  CONSTRAINT `FK_6EE1D3924CE34BEC` FOREIGN KEY (`part_id`) REFERENCES `Part` (`id`),
  CONSTRAINT `FK_6EE1D392F8BD700D` FOREIGN KEY (`unit_id`) REFERENCES `Unit` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `MetaPartParameterCriteria` WRITE;
/*!40000 ALTER TABLE `MetaPartParameterCriteria` DISABLE KEYS */;
/*!40000 ALTER TABLE `MetaPartParameterCriteria` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `Part`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Part` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `footprint_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `comment` longtext COLLATE utf8_unicode_ci NOT NULL,
  `stockLevel` int(11) NOT NULL,
  `minStockLevel` int(11) NOT NULL,
  `averagePrice` decimal(13,4) NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `needsReview` tinyint(1) NOT NULL,
  `partCondition` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `productionRemarks` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createDate` datetime DEFAULT NULL,
  `internalPartNumber` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `removals` tinyint(1) NOT NULL,
  `lowStock` tinyint(1) NOT NULL,
  `metaPart` tinyint(1) NOT NULL DEFAULT '0',
  `partUnit_id` int(11) DEFAULT NULL,
  `storageLocation_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_E93DDFF812469DE2` (`category_id`),
  KEY `IDX_E93DDFF851364C98` (`footprint_id`),
  KEY `IDX_E93DDFF8F7A36E87` (`partUnit_id`),
  KEY `IDX_E93DDFF873CD58AF` (`storageLocation_id`),
  CONSTRAINT `FK_E93DDFF812469DE2` FOREIGN KEY (`category_id`) REFERENCES `PartCategory` (`id`),
  CONSTRAINT `FK_E93DDFF851364C98` FOREIGN KEY (`footprint_id`) REFERENCES `Footprint` (`id`),
  CONSTRAINT `FK_E93DDFF873CD58AF` FOREIGN KEY (`storageLocation_id`) REFERENCES `StorageLocation` (`id`),
  CONSTRAINT `FK_E93DDFF8F7A36E87` FOREIGN KEY (`partUnit_id`) REFERENCES `PartUnit` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `Part` WRITE;
/*!40000 ALTER TABLE `Part` DISABLE KEYS */;
/*!40000 ALTER TABLE `Part` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `PartAttachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PartAttachment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `originalname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mimetype` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `extension` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created` datetime NOT NULL,
  `isImage` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_76D73D864CE34BEC` (`part_id`),
  CONSTRAINT `FK_76D73D864CE34BEC` FOREIGN KEY (`part_id`) REFERENCES `Part` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `PartAttachment` WRITE;
/*!40000 ALTER TABLE `PartAttachment` DISABLE KEYS */;
/*!40000 ALTER TABLE `PartAttachment` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `PartCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PartCategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) DEFAULT NULL,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `lvl` int(11) NOT NULL,
  `root` int(11) DEFAULT NULL,
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `categoryPath` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `IDX_131FB619727ACA70` (`parent_id`),
  KEY `IDX_131FB619DA439252` (`lft`),
  KEY `IDX_131FB619D5E02D69` (`rgt`),
  CONSTRAINT `FK_131FB619727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `PartCategory` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `PartCategory` WRITE;
/*!40000 ALTER TABLE `PartCategory` DISABLE KEYS */;
INSERT INTO `PartCategory` VALUES (1,NULL,1,2,0,1,'Root Category',NULL,'Root Category');
/*!40000 ALTER TABLE `PartCategory` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `PartDistributor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PartDistributor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_id` int(11) DEFAULT NULL,
  `distributor_id` int(11) DEFAULT NULL,
  `orderNumber` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `packagingUnit` int(11) NOT NULL,
  `price` decimal(13,4) DEFAULT NULL,
  `currency` varchar(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sku` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ignoreForReports` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_FBA293844CE34BEC` (`part_id`),
  KEY `IDX_FBA293842D863A58` (`distributor_id`),
  CONSTRAINT `FK_FBA293842D863A58` FOREIGN KEY (`distributor_id`) REFERENCES `Distributor` (`id`),
  CONSTRAINT `FK_FBA293844CE34BEC` FOREIGN KEY (`part_id`) REFERENCES `Part` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `PartDistributor` WRITE;
/*!40000 ALTER TABLE `PartDistributor` DISABLE KEYS */;
/*!40000 ALTER TABLE `PartDistributor` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `PartKeeprUser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PartKeeprUser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provider_id` int(11) DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `admin` tinyint(1) NOT NULL,
  `legacy` tinyint(1) NOT NULL,
  `lastSeen` datetime DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  `protected` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_provider` (`username`,`provider_id`),
  KEY `IDX_7572D706A53A8AA` (`provider_id`),
  CONSTRAINT `FK_7572D706A53A8AA` FOREIGN KEY (`provider_id`) REFERENCES `UserProvider` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `PartKeeprUser` WRITE;
/*!40000 ALTER TABLE `PartKeeprUser` DISABLE KEYS */;
INSERT INTO `PartKeeprUser` VALUES (1,1,'admin',NULL,NULL,0,0,NULL,1,0);
/*!40000 ALTER TABLE `PartKeeprUser` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `PartManufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PartManufacturer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_id` int(11) DEFAULT NULL,
  `manufacturer_id` int(11) DEFAULT NULL,
  `partNumber` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_F085878B4CE34BEC` (`part_id`),
  KEY `IDX_F085878BA23B42D` (`manufacturer_id`),
  CONSTRAINT `FK_F085878B4CE34BEC` FOREIGN KEY (`part_id`) REFERENCES `Part` (`id`),
  CONSTRAINT `FK_F085878BA23B42D` FOREIGN KEY (`manufacturer_id`) REFERENCES `Manufacturer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `PartManufacturer` WRITE;
/*!40000 ALTER TABLE `PartManufacturer` DISABLE KEYS */;
/*!40000 ALTER TABLE `PartManufacturer` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `PartParameter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PartParameter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_id` int(11) DEFAULT NULL,
  `unit_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` double DEFAULT NULL,
  `normalizedValue` double DEFAULT NULL,
  `maximumValue` double DEFAULT NULL,
  `normalizedMaxValue` double DEFAULT NULL,
  `minimumValue` double DEFAULT NULL,
  `normalizedMinValue` double DEFAULT NULL,
  `stringValue` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `valueType` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `siPrefix_id` int(11) DEFAULT NULL,
  `minSiPrefix_id` int(11) DEFAULT NULL,
  `maxSiPrefix_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_A28A98594CE34BEC` (`part_id`),
  KEY `IDX_A28A9859F8BD700D` (`unit_id`),
  KEY `IDX_A28A985919187357` (`siPrefix_id`),
  KEY `IDX_A28A9859569AA479` (`minSiPrefix_id`),
  KEY `IDX_A28A9859EFBC3F08` (`maxSiPrefix_id`),
  CONSTRAINT `FK_A28A985919187357` FOREIGN KEY (`siPrefix_id`) REFERENCES `SiPrefix` (`id`),
  CONSTRAINT `FK_A28A98594CE34BEC` FOREIGN KEY (`part_id`) REFERENCES `Part` (`id`),
  CONSTRAINT `FK_A28A9859569AA479` FOREIGN KEY (`minSiPrefix_id`) REFERENCES `SiPrefix` (`id`),
  CONSTRAINT `FK_A28A9859EFBC3F08` FOREIGN KEY (`maxSiPrefix_id`) REFERENCES `SiPrefix` (`id`),
  CONSTRAINT `FK_A28A9859F8BD700D` FOREIGN KEY (`unit_id`) REFERENCES `Unit` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `PartParameter` WRITE;
/*!40000 ALTER TABLE `PartParameter` DISABLE KEYS */;
/*!40000 ALTER TABLE `PartParameter` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `PartUnit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PartUnit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `shortName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_default` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `PartUnit` WRITE;
/*!40000 ALTER TABLE `PartUnit` DISABLE KEYS */;
INSERT INTO `PartUnit` VALUES (1,'Pieces','pcs',1);
/*!40000 ALTER TABLE `PartUnit` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `Project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_E00EE972A76ED395` (`user_id`),
  CONSTRAINT `FK_E00EE972A76ED395` FOREIGN KEY (`user_id`) REFERENCES `PartKeeprUser` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `Project` WRITE;
/*!40000 ALTER TABLE `Project` DISABLE KEYS */;
/*!40000 ALTER TABLE `Project` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `ProjectAttachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ProjectAttachment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `originalname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mimetype` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `extension` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_44010C5B166D1F9C` (`project_id`),
  CONSTRAINT `FK_44010C5B166D1F9C` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ProjectAttachment` WRITE;
/*!40000 ALTER TABLE `ProjectAttachment` DISABLE KEYS */;
/*!40000 ALTER TABLE `ProjectAttachment` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `ProjectPart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ProjectPart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_id` int(11) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `remarks` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `overageType` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `overage` int(11) NOT NULL DEFAULT '0',
  `lotNumber` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_B0B193364CE34BEC` (`part_id`),
  KEY `IDX_B0B19336166D1F9C` (`project_id`),
  CONSTRAINT `FK_B0B19336166D1F9C` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`),
  CONSTRAINT `FK_B0B193364CE34BEC` FOREIGN KEY (`part_id`) REFERENCES `Part` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ProjectPart` WRITE;
/*!40000 ALTER TABLE `ProjectPart` DISABLE KEYS */;
/*!40000 ALTER TABLE `ProjectPart` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `ProjectRun`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ProjectRun` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) DEFAULT NULL,
  `runDateTime` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_574A3B5C166D1F9C` (`project_id`),
  CONSTRAINT `FK_574A3B5C166D1F9C` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ProjectRun` WRITE;
/*!40000 ALTER TABLE `ProjectRun` DISABLE KEYS */;
/*!40000 ALTER TABLE `ProjectRun` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `ProjectRunPart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ProjectRunPart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `lotNumber` longtext COLLATE utf8_unicode_ci NOT NULL,
  `projectRun_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_BF41064B1A221EF0` (`projectRun_id`),
  KEY `IDX_BF41064B4CE34BEC` (`part_id`),
  CONSTRAINT `FK_BF41064B1A221EF0` FOREIGN KEY (`projectRun_id`) REFERENCES `ProjectRun` (`id`),
  CONSTRAINT `FK_BF41064B4CE34BEC` FOREIGN KEY (`part_id`) REFERENCES `Part` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ProjectRunPart` WRITE;
/*!40000 ALTER TABLE `ProjectRunPart` DISABLE KEYS */;
/*!40000 ALTER TABLE `ProjectRunPart` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `Report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createDateTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `Report` WRITE;
/*!40000 ALTER TABLE `Report` DISABLE KEYS */;
/*!40000 ALTER TABLE `Report` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `ReportPart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ReportPart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) DEFAULT NULL,
  `part_id` int(11) DEFAULT NULL,
  `distributor_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_1BF0BD554BD2A4C0` (`report_id`),
  KEY `IDX_1BF0BD554CE34BEC` (`part_id`),
  KEY `IDX_1BF0BD552D863A58` (`distributor_id`),
  CONSTRAINT `FK_1BF0BD552D863A58` FOREIGN KEY (`distributor_id`) REFERENCES `Distributor` (`id`),
  CONSTRAINT `FK_1BF0BD554BD2A4C0` FOREIGN KEY (`report_id`) REFERENCES `Report` (`id`),
  CONSTRAINT `FK_1BF0BD554CE34BEC` FOREIGN KEY (`part_id`) REFERENCES `Part` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ReportPart` WRITE;
/*!40000 ALTER TABLE `ReportPart` DISABLE KEYS */;
/*!40000 ALTER TABLE `ReportPart` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `ReportProject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ReportProject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_83B0909B4BD2A4C0` (`report_id`),
  KEY `IDX_83B0909B166D1F9C` (`project_id`),
  CONSTRAINT `FK_83B0909B166D1F9C` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`),
  CONSTRAINT `FK_83B0909B4BD2A4C0` FOREIGN KEY (`report_id`) REFERENCES `Report` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ReportProject` WRITE;
/*!40000 ALTER TABLE `ReportProject` DISABLE KEYS */;
/*!40000 ALTER TABLE `ReportProject` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `SchemaVersions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SchemaVersions` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `SchemaVersions` WRITE;
/*!40000 ALTER TABLE `SchemaVersions` DISABLE KEYS */;
INSERT INTO `SchemaVersions` VALUES ('20150608120000');
INSERT INTO `SchemaVersions` VALUES ('20150708120022');
INSERT INTO `SchemaVersions` VALUES ('20150724174030');
INSERT INTO `SchemaVersions` VALUES ('20151001180120');
INSERT INTO `SchemaVersions` VALUES ('20151002183125');
INSERT INTO `SchemaVersions` VALUES ('20151031163951');
INSERT INTO `SchemaVersions` VALUES ('20151208162723');
INSERT INTO `SchemaVersions` VALUES ('20160103145302');
INSERT INTO `SchemaVersions` VALUES ('20170108122512');
INSERT INTO `SchemaVersions` VALUES ('20170108143802');
INSERT INTO `SchemaVersions` VALUES ('20170113203042');
INSERT INTO `SchemaVersions` VALUES ('20170601175559');
/*!40000 ALTER TABLE `SchemaVersions` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `SiPrefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SiPrefix` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prefix` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `symbol` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `exponent` int(11) NOT NULL,
  `base` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `SiPrefix` WRITE;
/*!40000 ALTER TABLE `SiPrefix` DISABLE KEYS */;
INSERT INTO `SiPrefix` VALUES (1,'yotta','Y',24,10);
INSERT INTO `SiPrefix` VALUES (2,'zetta','Z',21,10);
INSERT INTO `SiPrefix` VALUES (3,'exa','E',18,10);
INSERT INTO `SiPrefix` VALUES (4,'peta','P',15,10);
INSERT INTO `SiPrefix` VALUES (5,'tera','T',12,10);
INSERT INTO `SiPrefix` VALUES (6,'giga','G',9,10);
INSERT INTO `SiPrefix` VALUES (7,'mega','M',6,10);
INSERT INTO `SiPrefix` VALUES (8,'kilo','k',3,10);
INSERT INTO `SiPrefix` VALUES (9,'hecto','h',2,10);
INSERT INTO `SiPrefix` VALUES (10,'deca','da',1,10);
INSERT INTO `SiPrefix` VALUES (11,'-','',0,10);
INSERT INTO `SiPrefix` VALUES (12,'deci','d',-1,10);
INSERT INTO `SiPrefix` VALUES (13,'centi','c',-2,10);
INSERT INTO `SiPrefix` VALUES (14,'milli','m',-3,10);
INSERT INTO `SiPrefix` VALUES (15,'micro','μ',-6,10);
INSERT INTO `SiPrefix` VALUES (16,'nano','n',-9,10);
INSERT INTO `SiPrefix` VALUES (17,'pico','p',-12,10);
INSERT INTO `SiPrefix` VALUES (18,'femto','f',-15,10);
INSERT INTO `SiPrefix` VALUES (19,'atto','a',-18,10);
INSERT INTO `SiPrefix` VALUES (20,'zepto','z',-21,10);
INSERT INTO `SiPrefix` VALUES (21,'yocto','y',-24,10);
INSERT INTO `SiPrefix` VALUES (22,'kibi','Ki',1,1024);
INSERT INTO `SiPrefix` VALUES (23,'mebi','Mi',2,1024);
INSERT INTO `SiPrefix` VALUES (24,'gibi','Gi',3,1024);
INSERT INTO `SiPrefix` VALUES (25,'tebi','Ti',4,1024);
INSERT INTO `SiPrefix` VALUES (26,'pebi','Pi',5,1024);
INSERT INTO `SiPrefix` VALUES (27,'exbi','Ei',6,1024);
INSERT INTO `SiPrefix` VALUES (28,'zebi','Zi',7,1024);
INSERT INTO `SiPrefix` VALUES (29,'yobi','Yi',8,1024);
/*!40000 ALTER TABLE `SiPrefix` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `StatisticSnapshot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StatisticSnapshot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dateTime` datetime NOT NULL,
  `parts` int(11) NOT NULL,
  `categories` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `StatisticSnapshot` WRITE;
/*!40000 ALTER TABLE `StatisticSnapshot` DISABLE KEYS */;
INSERT INTO `StatisticSnapshot` VALUES (1,'2020-02-17 11:53:56',0,1);
INSERT INTO `StatisticSnapshot` VALUES (2,'2020-02-18 08:54:12',0,1);
INSERT INTO `StatisticSnapshot` VALUES (3,'2020-02-19 12:25:02',0,1);
/*!40000 ALTER TABLE `StatisticSnapshot` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `StatisticSnapshotUnit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StatisticSnapshotUnit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stockLevel` int(11) NOT NULL,
  `statisticSnapshot_id` int(11) DEFAULT NULL,
  `partUnit_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_368BD669A16DD05F` (`statisticSnapshot_id`),
  KEY `IDX_368BD669F7A36E87` (`partUnit_id`),
  CONSTRAINT `FK_368BD669A16DD05F` FOREIGN KEY (`statisticSnapshot_id`) REFERENCES `StatisticSnapshot` (`id`),
  CONSTRAINT `FK_368BD669F7A36E87` FOREIGN KEY (`partUnit_id`) REFERENCES `PartUnit` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `StatisticSnapshotUnit` WRITE;
/*!40000 ALTER TABLE `StatisticSnapshotUnit` DISABLE KEYS */;
INSERT INTO `StatisticSnapshotUnit` VALUES (1,0,1,1);
INSERT INTO `StatisticSnapshotUnit` VALUES (2,0,2,1);
INSERT INTO `StatisticSnapshotUnit` VALUES (3,0,3,1);
/*!40000 ALTER TABLE `StatisticSnapshotUnit` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `StockEntry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StockEntry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `part_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `stockLevel` int(11) NOT NULL,
  `price` decimal(13,4) DEFAULT NULL,
  `dateTime` datetime NOT NULL,
  `correction` tinyint(1) NOT NULL,
  `comment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_E182997B4CE34BEC` (`part_id`),
  KEY `IDX_E182997BA76ED395` (`user_id`),
  CONSTRAINT `FK_E182997B4CE34BEC` FOREIGN KEY (`part_id`) REFERENCES `Part` (`id`),
  CONSTRAINT `FK_E182997BA76ED395` FOREIGN KEY (`user_id`) REFERENCES `PartKeeprUser` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `StockEntry` WRITE;
/*!40000 ALTER TABLE `StockEntry` DISABLE KEYS */;
/*!40000 ALTER TABLE `StockEntry` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `StorageLocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StorageLocation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_2C59071C5E237E06` (`name`),
  KEY `IDX_2C59071C12469DE2` (`category_id`),
  CONSTRAINT `FK_2C59071C12469DE2` FOREIGN KEY (`category_id`) REFERENCES `StorageLocationCategory` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `StorageLocation` WRITE;
/*!40000 ALTER TABLE `StorageLocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `StorageLocation` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `StorageLocationCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StorageLocationCategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) DEFAULT NULL,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `lvl` int(11) NOT NULL,
  `root` int(11) DEFAULT NULL,
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `categoryPath` longtext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `IDX_3E39FA47727ACA70` (`parent_id`),
  KEY `IDX_3E39FA47DA439252` (`lft`),
  KEY `IDX_3E39FA47D5E02D69` (`rgt`),
  CONSTRAINT `FK_3E39FA47727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `StorageLocationCategory` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `StorageLocationCategory` WRITE;
/*!40000 ALTER TABLE `StorageLocationCategory` DISABLE KEYS */;
INSERT INTO `StorageLocationCategory` VALUES (1,NULL,1,2,0,1,'Root Category',NULL,'Root Category');
/*!40000 ALTER TABLE `StorageLocationCategory` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `StorageLocationImage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StorageLocationImage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `originalname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mimetype` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `extension` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created` datetime NOT NULL,
  `storageLocation_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_666717F073CD58AF` (`storageLocation_id`),
  CONSTRAINT `FK_666717F073CD58AF` FOREIGN KEY (`storageLocation_id`) REFERENCES `StorageLocation` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `StorageLocationImage` WRITE;
/*!40000 ALTER TABLE `StorageLocationImage` DISABLE KEYS */;
/*!40000 ALTER TABLE `StorageLocationImage` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `SystemNotice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SystemNotice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `acknowledged` tinyint(1) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `SystemNotice` WRITE;
/*!40000 ALTER TABLE `SystemNotice` DISABLE KEYS */;
/*!40000 ALTER TABLE `SystemNotice` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `SystemPreference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SystemPreference` (
  `preferenceKey` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `preferenceValue` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`preferenceKey`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `SystemPreference` WRITE;
/*!40000 ALTER TABLE `SystemPreference` DISABLE KEYS */;
/*!40000 ALTER TABLE `SystemPreference` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `TempImage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TempImage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `originalname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mimetype` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `extension` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `TempImage` WRITE;
/*!40000 ALTER TABLE `TempImage` DISABLE KEYS */;
/*!40000 ALTER TABLE `TempImage` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `TempUploadedFile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TempUploadedFile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `originalname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mimetype` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `extension` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `TempUploadedFile` WRITE;
/*!40000 ALTER TABLE `TempUploadedFile` DISABLE KEYS */;
/*!40000 ALTER TABLE `TempUploadedFile` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `TipOfTheDay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TipOfTheDay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `TipOfTheDay` WRITE;
/*!40000 ALTER TABLE `TipOfTheDay` DISABLE KEYS */;
/*!40000 ALTER TABLE `TipOfTheDay` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `TipOfTheDayHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TipOfTheDayHistory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_3177BC2A76ED395` (`user_id`),
  CONSTRAINT `FK_3177BC2A76ED395` FOREIGN KEY (`user_id`) REFERENCES `PartKeeprUser` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `TipOfTheDayHistory` WRITE;
/*!40000 ALTER TABLE `TipOfTheDayHistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `TipOfTheDayHistory` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `Unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Unit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `symbol` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `Unit` WRITE;
/*!40000 ALTER TABLE `Unit` DISABLE KEYS */;
INSERT INTO `Unit` VALUES (1,'Meter','m');
INSERT INTO `Unit` VALUES (2,'Gram','g');
INSERT INTO `Unit` VALUES (3,'Second','s');
INSERT INTO `Unit` VALUES (4,'Kelvin','K');
INSERT INTO `Unit` VALUES (5,'Mol','mol');
INSERT INTO `Unit` VALUES (6,'Candela','cd');
INSERT INTO `Unit` VALUES (7,'Ampere','A');
INSERT INTO `Unit` VALUES (8,'Ohm','Ω');
INSERT INTO `Unit` VALUES (9,'Volt','V');
INSERT INTO `Unit` VALUES (10,'Hertz','Hz');
INSERT INTO `Unit` VALUES (11,'Newton','N');
INSERT INTO `Unit` VALUES (12,'Pascal','Pa');
INSERT INTO `Unit` VALUES (13,'Joule','J');
INSERT INTO `Unit` VALUES (14,'Watt','W');
INSERT INTO `Unit` VALUES (15,'Coulomb','C');
INSERT INTO `Unit` VALUES (16,'Farad','F');
INSERT INTO `Unit` VALUES (17,'Siemens','S');
INSERT INTO `Unit` VALUES (18,'Weber','Wb');
INSERT INTO `Unit` VALUES (19,'Tesla','T');
INSERT INTO `Unit` VALUES (20,'Henry','H');
INSERT INTO `Unit` VALUES (21,'Celsius','°C');
INSERT INTO `Unit` VALUES (22,'Lumen','lm');
INSERT INTO `Unit` VALUES (23,'Lux','lx');
INSERT INTO `Unit` VALUES (24,'Becquerel','Bq');
INSERT INTO `Unit` VALUES (25,'Gray','Gy');
INSERT INTO `Unit` VALUES (26,'Sievert','Sv');
INSERT INTO `Unit` VALUES (27,'Katal','kat');
INSERT INTO `Unit` VALUES (28,'Ampere Hour','Ah');
/*!40000 ALTER TABLE `Unit` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `UnitSiPrefixes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UnitSiPrefixes` (
  `unit_id` int(11) NOT NULL,
  `siprefix_id` int(11) NOT NULL,
  PRIMARY KEY (`unit_id`,`siprefix_id`),
  KEY `IDX_72356740F8BD700D` (`unit_id`),
  KEY `IDX_723567409BE9F1F4` (`siprefix_id`),
  CONSTRAINT `FK_723567409BE9F1F4` FOREIGN KEY (`siprefix_id`) REFERENCES `SiPrefix` (`id`),
  CONSTRAINT `FK_72356740F8BD700D` FOREIGN KEY (`unit_id`) REFERENCES `Unit` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `UnitSiPrefixes` WRITE;
/*!40000 ALTER TABLE `UnitSiPrefixes` DISABLE KEYS */;
INSERT INTO `UnitSiPrefixes` VALUES (1,8);
INSERT INTO `UnitSiPrefixes` VALUES (1,11);
INSERT INTO `UnitSiPrefixes` VALUES (1,12);
INSERT INTO `UnitSiPrefixes` VALUES (1,13);
INSERT INTO `UnitSiPrefixes` VALUES (1,14);
INSERT INTO `UnitSiPrefixes` VALUES (1,15);
INSERT INTO `UnitSiPrefixes` VALUES (1,16);
INSERT INTO `UnitSiPrefixes` VALUES (2,8);
INSERT INTO `UnitSiPrefixes` VALUES (2,11);
INSERT INTO `UnitSiPrefixes` VALUES (2,14);
INSERT INTO `UnitSiPrefixes` VALUES (3,11);
INSERT INTO `UnitSiPrefixes` VALUES (3,14);
INSERT INTO `UnitSiPrefixes` VALUES (4,11);
INSERT INTO `UnitSiPrefixes` VALUES (5,11);
INSERT INTO `UnitSiPrefixes` VALUES (6,14);
INSERT INTO `UnitSiPrefixes` VALUES (7,8);
INSERT INTO `UnitSiPrefixes` VALUES (7,11);
INSERT INTO `UnitSiPrefixes` VALUES (7,14);
INSERT INTO `UnitSiPrefixes` VALUES (7,15);
INSERT INTO `UnitSiPrefixes` VALUES (7,16);
INSERT INTO `UnitSiPrefixes` VALUES (7,17);
INSERT INTO `UnitSiPrefixes` VALUES (8,5);
INSERT INTO `UnitSiPrefixes` VALUES (8,6);
INSERT INTO `UnitSiPrefixes` VALUES (8,8);
INSERT INTO `UnitSiPrefixes` VALUES (8,11);
INSERT INTO `UnitSiPrefixes` VALUES (8,14);
INSERT INTO `UnitSiPrefixes` VALUES (8,15);
INSERT INTO `UnitSiPrefixes` VALUES (9,8);
INSERT INTO `UnitSiPrefixes` VALUES (9,11);
INSERT INTO `UnitSiPrefixes` VALUES (9,14);
INSERT INTO `UnitSiPrefixes` VALUES (10,5);
INSERT INTO `UnitSiPrefixes` VALUES (10,6);
INSERT INTO `UnitSiPrefixes` VALUES (10,8);
INSERT INTO `UnitSiPrefixes` VALUES (10,11);
INSERT INTO `UnitSiPrefixes` VALUES (10,14);
INSERT INTO `UnitSiPrefixes` VALUES (11,8);
INSERT INTO `UnitSiPrefixes` VALUES (11,11);
INSERT INTO `UnitSiPrefixes` VALUES (12,8);
INSERT INTO `UnitSiPrefixes` VALUES (12,11);
INSERT INTO `UnitSiPrefixes` VALUES (12,14);
INSERT INTO `UnitSiPrefixes` VALUES (13,8);
INSERT INTO `UnitSiPrefixes` VALUES (13,11);
INSERT INTO `UnitSiPrefixes` VALUES (13,14);
INSERT INTO `UnitSiPrefixes` VALUES (13,15);
INSERT INTO `UnitSiPrefixes` VALUES (14,6);
INSERT INTO `UnitSiPrefixes` VALUES (14,7);
INSERT INTO `UnitSiPrefixes` VALUES (14,8);
INSERT INTO `UnitSiPrefixes` VALUES (14,11);
INSERT INTO `UnitSiPrefixes` VALUES (14,14);
INSERT INTO `UnitSiPrefixes` VALUES (14,15);
INSERT INTO `UnitSiPrefixes` VALUES (15,8);
INSERT INTO `UnitSiPrefixes` VALUES (15,11);
INSERT INTO `UnitSiPrefixes` VALUES (16,11);
INSERT INTO `UnitSiPrefixes` VALUES (16,14);
INSERT INTO `UnitSiPrefixes` VALUES (16,15);
INSERT INTO `UnitSiPrefixes` VALUES (16,16);
INSERT INTO `UnitSiPrefixes` VALUES (16,17);
INSERT INTO `UnitSiPrefixes` VALUES (17,11);
INSERT INTO `UnitSiPrefixes` VALUES (17,14);
INSERT INTO `UnitSiPrefixes` VALUES (18,11);
INSERT INTO `UnitSiPrefixes` VALUES (19,11);
INSERT INTO `UnitSiPrefixes` VALUES (20,11);
INSERT INTO `UnitSiPrefixes` VALUES (20,14);
INSERT INTO `UnitSiPrefixes` VALUES (20,15);
INSERT INTO `UnitSiPrefixes` VALUES (21,11);
INSERT INTO `UnitSiPrefixes` VALUES (22,11);
INSERT INTO `UnitSiPrefixes` VALUES (23,11);
INSERT INTO `UnitSiPrefixes` VALUES (24,11);
INSERT INTO `UnitSiPrefixes` VALUES (25,11);
INSERT INTO `UnitSiPrefixes` VALUES (26,11);
INSERT INTO `UnitSiPrefixes` VALUES (26,14);
INSERT INTO `UnitSiPrefixes` VALUES (26,15);
INSERT INTO `UnitSiPrefixes` VALUES (27,11);
INSERT INTO `UnitSiPrefixes` VALUES (28,8);
INSERT INTO `UnitSiPrefixes` VALUES (28,11);
INSERT INTO `UnitSiPrefixes` VALUES (28,14);
/*!40000 ALTER TABLE `UnitSiPrefixes` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `UserPreference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserPreference` (
  `user_id` int(11) NOT NULL,
  `preferenceKey` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `preferenceValue` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`preferenceKey`,`user_id`),
  KEY `IDX_922CE7A2A76ED395` (`user_id`),
  CONSTRAINT `FK_922CE7A2A76ED395` FOREIGN KEY (`user_id`) REFERENCES `PartKeeprUser` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `UserPreference` WRITE;
/*!40000 ALTER TABLE `UserPreference` DISABLE KEYS */;
INSERT INTO `UserPreference` VALUES (1,'partkeepr.tipoftheday.showtips','s:4:\"true\";');
/*!40000 ALTER TABLE `UserPreference` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `UserProvider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserProvider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `editable` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `type` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `UserProvider` WRITE;
/*!40000 ALTER TABLE `UserProvider` DISABLE KEYS */;
INSERT INTO `UserProvider` VALUES (1,'Builtin',1);
/*!40000 ALTER TABLE `UserProvider` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

