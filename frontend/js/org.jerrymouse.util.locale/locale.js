/*
 * This file is part of the JerryMouse Framework.
 *
 * JerryMouse is free software; you can redistribute and/or modify it under the
 * terms of the GNU General Public License version 2 as published by the
 * Free Software Foundation.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 */

Ext.locales = {
		de_DE: {
			"flag": "de",
			"name": "Deutsch (Deutschland)",
			"dateformat": "d.m.Y H:i:s T"
		},
		en_US: {
			"flag": "us",
			"name": "English (USA)",
			"dateformat": "n/j/Y H:i:s T"
		}
};

Ext.setLocale = function (locale) {
	Ext.jm_locale = locale;
};

Ext.getLocale = function () {
	return Ext.jm_locale;
};

Ext.getLocaleFlag = function () {
	return Ext.locales[Ext.jm_locale].flag;
};

Ext.getDateFormat = function () {
	return Ext.locales[Ext.jm_locale].dateformat;
};
