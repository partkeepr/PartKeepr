# Changelog

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
