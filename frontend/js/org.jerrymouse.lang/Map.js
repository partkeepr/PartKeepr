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

Ext.ns("org.jerrymouse.lang");

org.jerrymouse.lang.Map = function () {
	this.data = {};
}

Ext.extend(org.jerrymouse.lang.Map, org.jerrymouse.lang.Object, {
	data: null,
	addItem: function (key, item) {
		this.data[key] = item;
	},
	getItem: function (key) {
		return this.data[key];
	},
	getClassType: function () {
		return "org.jerrymouse.lang.Map";
	},
	getData: function () {
		return this.data;
	},
	serialize: function () {
		var obj = org.jerrymouse.lang.Map.superclass.serialize.call(this);
		
		obj.data = {};
		
		for (var data in this.data) {
			obj.data[data] = this.data[data].serialize();
		}
		
		return obj;
	},
	unserialize: function (data) {
		for (var dt in data.data) {
			this.data[dt] = org.jerrymouse.lang.Object.doUnserialize(data.data[dt]);
		}
	}
	
});