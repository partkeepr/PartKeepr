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

Ext.ns("org.jerrymouse.gui.widgets");

org.jerrymouse.gui.widgets.window = Ext.extend(Ext.Window, {
	initComponent: function () {
		org.jerrymouse.gui.widgets.window.superclass.initComponent.call(this);
	},
	onLocaleChange: function (obj) {
		obj.setTitle(obj.jm_title);
	},

	setTitle: function (title, iconCls) {
		this.jm_title = title;
		org.jerrymouse.gui.widgets.window.superclass.setTitle.call(this, Ext.replaceLocaleTags(title), iconCls);
	}
});

Ext.override(Ext.Panel, {
	setTitle: function(title, iconCls){

		title = Ext.replaceLocaleTags(title);
	    this.title = title;
	    if(this.header && this.headerAsText){
	        this.header.child('span').update(title);
	    }
	    if(iconCls){
	        this.setIconClass(iconCls);
	    }
	    this.fireEvent('titlechange', this, title);
	    return this;
	}
});

org.jerrymouse.gui.widgets.messagebox = Ext.Msg;

Ext.reg('org.jerrymouse.gui.widgets.window', org.jerrymouse.gui.widgets.window);