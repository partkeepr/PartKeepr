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

Ext.ns("org.jerrymouse.gui.widgets.form");

org.jerrymouse.gui.widgets.form.textfield = Ext.extend(Ext.form.TextField, {
	initComponent: function () {
		org.jerrymouse.gui.widgets.form.textfield.superclass.initComponent.call(this);
	},
	onLocaleChange: function (obj) {
		obj.setText(obj.jm_text);
	},

	setText: function (text) {
		this.jm_text = text;
		org.jerrymouse.gui.widgets.button.superclass.setText.call(this, Ext.replaceLocaleTags(text));
	},
	onRender : function(ct, position){
		org.jerrymouse.gui.widgets.toolbar.button.superclass.onRender.call(this, ct, position);
		this.setText(this.text);
	}

});

Ext.reg('org.jerrymouse.gui.widgets.button', org.jerrymouse.gui.widgets.button);