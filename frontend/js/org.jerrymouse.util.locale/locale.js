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

Ext.setLocale = function (locale) {
	Ext.jm_locale = locale;
	
	Ext.ComponentMgr.all.each( function (item) {
		if (item.onLocaleChange) {
			item.onLocaleChange(item);
		}
	});
};

Ext.getLocale = function () {
	return Ext.jm_locale;
};

Ext.getLocaleFlag = function () {
	return locales[Ext.jm_locale].flag;
};

Ext.getDateFormat = function () {
	return locales[Ext.jm_locale].dateformat;
};

Ext.replaceLocaleTags = function (string) {
	var regexp = /\$\[(.+?)\]/g;
	var workingCopy = string;
	
	/*while (result = regexp.exec(string)) {
		if (locales[Ext.jm_locale][result[1]]) {
			workingCopy = Ext.replaceString(result[0], locales[Ext.jm_locale][result[1]], workingCopy);
		}
	}*/
	
	return workingCopy;
};

Ext.replaceString = function (search, replace, subject) {
    return subject.split(search).join(replace);
};