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
Ext.override(Ext.form.Field, {
	onLocaleChange: function (obj) {
		var target = Ext.DomQuery.selectNode("label[for="+obj.getId()+"]");
		
		var ls = obj.ownerCt.layout.labelSeparator;
		
		if (typeof ls == 'undefined') { ls = obj.labelSeparator; }
		
		target.innerHTML = Ext.replaceLocaleTags(obj.fieldLabel) + ls;
	}

});