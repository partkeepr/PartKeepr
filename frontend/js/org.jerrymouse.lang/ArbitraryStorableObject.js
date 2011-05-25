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

org.jerrymouse.lang.ArbitraryStorableObject = function (type) {
	this.type = type;
	this.revision = 1;
	this.uuid = new org.jerrymouse.lang.String();
	this.attributes = new org.jerrymouse.lang.Map();
	this.refLists = new org.jerrymouse.lang.Map();
	this.objLists = new org.jerrymouse.lang.Map();
};

Ext.extend(org.jerrymouse.lang.ArbitraryStorableObject, org.jerrymouse.lang.Object, {
	revision: null,
	uuid: null,
	attributes: null,
	refLists: null,
	objLists: null,
	unserialize: function (obj) {
		if (!obj.attributes || !obj.refLists || !obj.objLists) {
			alert("Error: "+this.type+" seems not to be a StorableObject. Maybe you forgot to implement this class?");
			return;
		}
		this.revision = obj.revision;
		this.uuid = org.jerrymouse.lang.Object.doUnserialize(obj.uuid);
		this.attributes = org.jerrymouse.lang.Object.doUnserialize(obj.attributes);
		this.refLists = org.jerrymouse.lang.Object.doUnserialize(obj.refLists);
		this.objLists = org.jerrymouse.lang.Object.doUnserialize(obj.objLists);
	},
	getClassType: function () {
		return this.type;
	},
	getUUID: function () {
		return this.uuid;
	},
	test: function () {
	}
});


