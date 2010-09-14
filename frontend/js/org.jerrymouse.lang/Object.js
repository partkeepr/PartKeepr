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
org.jerrymouse.lang.Object = function () {
	
};

org.jerrymouse.lang.Object.prototype = {
		serialize: function () {
			var obj = {};
			obj.type = this.getClassType();
			return obj;
		},
		unserialize: function (data) {
			
		},
		getClassType: function () {
			return "org.jerrymouse.lang.Object";
		}
	};

org.jerrymouse.lang.Object.doUnserialize = function (data) {
	if (!data.type) {
		throw "The given data doesn't contain a type hint.";
	}
	
	var _class, ic;

	
	if (classAvailable(data.type)) {
		eval("_class = new " + data.type);
		_class.unserialize(data);
	} else {
		_class = new org.jerrymouse.lang.ArbitraryStorableObject(data.type);
		_class.unserialize(data);
	}
	
	return _class;
};

org.jerrymouse.lang.Object.ensureType = function (obj, type) {
	if (!org.jerrymouse.lang.Object.isJMObject(obj)) { throw "Passed object is not a JerryMouse object"; }
	if (obj.getClassType() != "org.jerrymouse.lang.String") { throw "Passed object is not of type "+type; }
};

org.jerrymouse.lang.Object.isJMObject = function (obj) {
	if (!obj.getClassType) { return false; }
		
	return true;
};

function classAvailable (c) {
	parts = explode(".", c);
	
	var cp = [], ok;
	for (var i=0;i<parts.length;i++) {
		cp.push(parts[i]);
		ok = true;
		eval("if (!"+implode(".", cp)+") { ok = false; }");
		
		if (!ok) { return false; }
	}
	
	return true;
}



