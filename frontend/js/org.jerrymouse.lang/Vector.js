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

org.jerrymouse.lang.Vector = function () {
	this.data = [];
};

Ext.extend(org.jerrymouse.lang.Vector, org.jerrymouse.lang.Object, {
	data: null,
	addItem: function (item) {
		this.data.push(item);
	},
	getItem: function (key) {
		return this.data[key];
	},
	getClassType: function () {
		return "org.jerrymouse.lang.Vector";
	},
	serialize: function () {
		var obj = org.jerrymouse.lang.Vector.superclass.serialize.call(this);
		
		obj.data = [];
		
		for (var i = 0; i<this.data.length;i++) {
			obj.data[i] = this.data[i].serialize();
		}
		
		return obj;
	},
	unserialize: function (data) {
		for (var i=0;i<data.length;i++) {
			this.data.push(org.jerrymouse.lang.Object.doUnserialize(data.data[dt]));
		}
	}
	
});