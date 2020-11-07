# Changelog

## Unreleased

Bugfixes and other features:
 * Updated to the most recent Octopart API version 4 [#1150](https://github.com/partkeepr/PartKeepr/pull/1150)

## PartKeepr 1.4.0

New Features:
 * [Easy to use part parameter filter](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.4.0#Easy_Parametric_Filter)
 * [Mobile Frontend Proof of Concept](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.4.0#Mobile_Frontend_Proof_of_Concept)
 
 
Bugfixes and other features:
 * PartKeepr now displays the cause if an item can't be deleted, because it's in use somewhere else 
 * The default AJAX/XHR request timeout for the frontend has been increased from 30s to 300s [#914](https://github.com/partkeepr/PartKeepr/issues/914)
 * It's now possible to run PartKeepr in specific reverse proxy scenarios, see [the wiki](https://wiki.partkeepr.org/wiki/KB00008:PartKeepr_behind_a_reverse_proxy) for a description
 * Several performance improvements to the project reports
 * Fixed an issue where setup didn't properly write the PostgreSQL configuration to parameters.php

## PartKeepr 1.3.0

New Features:

 * [Refactored Project Reports](http://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.3.0#Refactored_Project_Reports)
 * [Distributor Price Calculation](http://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.3.0#Distributor_Price_Calculation): Ignore distributors for price calculations
 * [Column Customization](http://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.3.0#Column_Customization)
 * [Selective OctoPart Import](http://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.3.0#Selective_OctoPart_Import)
 * [Refactored User Preferences](http://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.3.0#Refactored_User_Preferences)

For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A1.3.0+is%3Aclosed)

## PartKeepr 1.2.0

New Features:

* [Advanced Part Parameters](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.2.0#Advanced_Part_Parameters): Allows the user to define part parameters
* [Generic Filtering](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.2.0#Generic_Filtering): Allows the definition of custom filters
* [OctoPart Integration](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.2.0#OctoPart_Integration): Retrieve part data from OctoPart
* [Importer](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.2.0#Importer): Import any data into PartKeepr
* [Meta Parts](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.2.0#Meta_Parts): Define Parts based on values from other parts
* [Theme Support](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.2.0#Experimental_Theme_Support): Experimental themes
* [Batch Jobs](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.2.0#Batch_Jobs): Update data based on actions
* [Project Runs](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.2.0#Project_Runs): Stores parts used for each project run
* [Project Overages](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.2.0#Project_Overages): Remove a fixed or percentual amount for project runs (e.g. wasted parts)

Bugfixes and other features:
* It's now possible to define if the internal part number must be unique [#486](https://github.com/partkeepr/PartKeepr/issues/486)
* m:n Data can now be exported, for example, distributors for a part [#435](https://github.com/partkeepr/PartKeepr/issues/435)
* Item prices are considered as not being set, allows proper statistics for "Parts without price" [#500](https://github.com/partkeepr/PartKeepr/issues/500)
* Part details are shown in the Add/Remove Stock dialog when using a barcode scanner [#727](https://github.com/partkeepr/PartKeepr/issues/727)
* Setting passwords for legacy users work again [#750](https://github.com/partkeepr/PartKeepr/issues/750)

For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A1.2.0+is%3Aclosed)

## PartKeepr 1.1.0

New Features:

* [Thumbnail Browse Mode](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.1.0#Thumbnail_Browse_Mode): Allows the user to browse parts by their images
* [Fulltext Search Configuration](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.1.0#Full_text_search_configuration): Allows the administrator to specify the fields to be searched when using the search field within the parts manager
* [Required Fields configuration](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.1.0#Required_Fields_configuration): It is now possible to configure the required fields for parts, part manufacturers and part distributors as well to enforce a certain minimum amount of distributors, manufacturers and attachments. 
* [Display of active filters for a grid](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.1.0#Display_of_active_filters_for_a_grid): Active filters for a grid are now displayed at the bottom of each grid, with the possibility to remove certain filters. This makes it more transparent if a grid is filtered and by which values. Additionally, filters can be removed manually.  
* [Barcode Scanner Configuration](https://wiki.partkeepr.org/wiki/New_and_Noteworthy/1.1.0#Barcode_Scanner_Configuration): It is now possible to configure a barcode scanner and to perform actions based on barcode scanner input.
* Added a filter to filter by the Internal Part ID [#645](https://github.com/partkeepr/PartKeepr/pull/645)

Bugfixes:
* Project names are now properly recorded when removing parts by the project report view [#686](https://github.com/partkeepr/PartKeepr/issues/686)
* Part stock levels are retained when removing parts using the project reports [#685](https://github.com/partkeepr/PartKeepr/issues/685)
* Parts are now saved properly when ticking the "Needs Review" checkbox [#693](https://github.com/partkeepr/PartKeepr/issues/693)
* "Don't ask again" Dialogs now properly remember the setting [#698](https://github.com/partkeepr/PartKeepr/issues/698)
* German umlauts are now properly displayed in the part details view [#674](https://github.com/partkeepr/PartKeepr/issues/674)

For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A1.1.0+is%3Aclosed)

## PartKeepr 1.0.0

This is the PartKeepr 1.0.0 release. Bugfixes for this version:

* Fixed an issue where dragging and dropping multiple parts only copied the first part [#663](https://github.com/partkeepr/PartKeepr/issues/663)
* Fixed an issue where setup would always revert to MySQL instead of the selected PostgreSQL driver [#659](https://github.com/partkeepr/PartKeepr/issues/659)
* Fixed an issue where stock levels would be copied to the new part if "Takeover all data" in the create part dialog was selected [#660](https://github.com/partkeepr/PartKeepr/issues/660)
* Fixed an issue where sorting by storage location name doesn't work in the parts view [#620](https://github.com/partkeepr/PartKeepr/issues/620)

For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A1.0.0+is%3Aclosed)

## PartKeepr 1.0.0-beta.1

This is a bugfix release only.

Bugfixes for this version:

* Fixed an issue where the "Price per Item" checkbox has inverted behavior [#653](https://github.com/partkeepr/PartKeepr/issues/653)
* Fixed an issue where the currency symbol is not stored when set [#652](https://github.com/partkeepr/PartKeepr/issues/652)
* Fixed a "division by zero" error when upgrading from an earlier PartKeepr version [#650](https://github.com/partkeepr/PartKeepr/issues/650)
* Fixed an issue where the xlsx format is not correctly set when exporting data [#646](https://github.com/partkeepr/PartKeepr/issues/646)
* Fixed an issue where distributor and manufacturer filters don't work [#647](https://github.com/partkeepr/PartKeepr/issues/647)

For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A1.0.0-beta.1+is%3Aclosed)

## PartKeepr 1.0.0-alpha.2

This is a bugfix release only.

For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A1.0.0-alpha2)

## PartKeepr 1.0.0-alpha.1

This is a bugfix release only.

For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A1.0.0-alpha1)

## PartKeepr 0.82

This is a bugfix release only.

For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A0.82)

## PartKeepr 0.81

This is a bugfix release only.
 
For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A0.80)

## PartKeepr 0.80

Skipped due to a packaging error

## PartKeepr 0.79

This is a security release, which fixes a security issue which is present in versions 0.75 - 0.78.


## PartKeepr 0.78

This is an emergency release for the broken 0.77 version. Bugfixes:

* Fixed error when saving a part causes oss of stock history [#551](https://github.com/partkeepr/PartKeepr/issues/551)
* Fixed security issue and setup check for accessing app/logs [#553](https://github.com/partkeepr/PartKeepr/issues/553)

For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A0.78+is%3Aclosed)

## PartKeepr 0.77

This is mainly a bugfix release. Noteworthy bugfixes:

* The HTTP Status code is now shown in exception windows for easier debugging [#549](https://github.com/partkeepr/PartKeepr/issues/549)
* Obsolete database tables from 0.1.9 are now removed [#548](https://github.com/partkeepr/PartKeepr/issues/548)
* Fixed drag'n'drop of parts [#540](https://github.com/partkeepr/PartKeepr/issues/540)
* Initial stock level value is now correctly entered in the database [#534](https://github.com/partkeepr/PartKeepr/issues/534)
* The ubuntu font is now loaded via HTTPS [#520](https://github.com/partkeepr/PartKeepr/issues/520)
* Footprint images are now shown again  [#518](https://github.com/partkeepr/PartKeepr/issues/518)

For a mostly complete list of bugfixes, please refer to [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A0.77+is%3Aclosed)

## PartKeepr 0.76

Noteworthy new features and bugfixes:

* It is now possible to search for a manufacturer's part number [#489](https://github.com/partkeepr/PartKeepr/issues/489)
* Re-added "used in projects", footprint, storage location and category name as in PartKeepr 0.1.9 [#514](https://github.com/partkeepr/PartKeepr/issues/514)
* Added APC cache support
* Setup now prompts for the authentication method to use
* Icons are now displayed properly again in Firefox [#481](https://github.com/partkeepr/PartKeepr/issues/481)

For a mostly complete list of new features and bugfixes, please refer to  [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A0.76+is%3Aclosed)

## PartKeepr 0.75

Noteworthy new features:

* Migrated to the [Symfony2](http://symfony.com/) Framework and [ExtJS6](https://www.sencha.com/products/extjs/) [#323](https://github.com/partkeepr/PartKeepr/issues/323)
* Using HTML5 Webcam capture to avoid using Flash [#384](https://github.com/partkeepr/PartKeepr/issues/384)
* Added 1024-based SI Prefixes to support MiB, KiB etc [#386](https://github.com/partkeepr/PartKeepr/issues/386)
* Storage Locations can now be managed using categories [#463](https://github.com/partkeepr/PartKeepr/issues/463)
* A new exporter has been added which allows custom export configurations [#435](https://github.com/partkeepr/PartKeepr/issues/435)
* Attachments are now displayed in the part details, so it's not necessary to open the part details [#394](https://github.com/partkeepr/PartKeepr/issues/394)

For a mostly complete list of new features and bugfixes, please refer to  [GitHub](https://github.com/partkeepr/PartKeepr/issues?q=milestone%3A0.75+is%3Aclosed)
