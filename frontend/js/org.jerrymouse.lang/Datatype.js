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

org.jerrymouse.lang.Datatype = function () {
	
};

Ext.extend(org.jerrymouse.lang.Datatype, org.jerrymouse.lang.Object, {
	setValue: function (value) {
	
	},
	getValue: function () {
		
	},
	serialize: function () {
		var obj = org.jerrymouse.lang.Datatype.superclass.serialize.call(this);
		obj.data = this.getValue();
		
		return obj;
	},
	unserialize: function (obj) {
		this.setValue(obj.data);
	},
	getClassType: function () {
		return "org.jerrymouse.lang.Datatype";
	}
	
});