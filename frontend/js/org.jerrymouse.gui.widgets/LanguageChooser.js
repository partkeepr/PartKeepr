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

org.jerrymouse.gui.widgets.LanguageChooser = Ext.extend(Ext.Button, {
	text: "",
	menu: null,
	iconCls: 'remove_image',
	initComponent: function () {
		org.jerrymouse.gui.widgets.LanguageChooser.superclass.initComponent(this);

		var menu = new Ext.menu.Menu({
			defaultAlign: 'tr-br'	
		});
		
		for (var j in locales) {
			menu.add({
				icon: "resources/flags/"+locales[j].flag+".png",
				text: locales[j].name,
				value: j,
				handler: this.onMenuItemClick,
				hideDelay: 0
			});
		}
		
		Ext.apply(this, {
			icon: "resources/flags/"+Ext.getLocaleFlag()+".png",
			menu: menu
		});
	},
	onLocaleChange: function (item) {
		var btnEl = item.getEl().child(item.buttonSelector);
		
		btnEl.setStyle("background-image", "url(resources/flags/"+Ext.getLocaleFlag()+".png)");			
	},
	onMenuItemClick: function (item) {
		
		Ext.setLocale(item.value);
	}


});

Ext.reg('org.jerrymouse.gui.widgets.LanguageChooser', org.jerrymouse.gui.widgets.LanguageChooser);