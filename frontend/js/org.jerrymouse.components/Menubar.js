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

Ext.ns("org.jerrymouse.components");

org.jerrymouse.components.Menubar = Ext.extend(Ext.Toolbar, {
	initComponent: function () {
		Ext.apply(this, {
			cls: 'jm-menubar',
			items: [{
				text: "$[org.jerrymouse.gui.menu.system]",
				id: 'jm-mainmenu-system',
				menu: [
				       {
				    	   text: '$[org.jerrymouse.gui.menu.system.connect]',
				    	   icon: 'resources/silkicons/connect.png',
				    	   id: 'jm-system-connect',
				    	   handler: function () {
				    	   		var o = new org.jerrymouse.gui.login.dialog();
				    	   		o.show();
				       		}
				       },{
				    	   text: '$[org.jerrymouse.gui.menu.system.disconnect]',
				    	   id: 'jm-system-disconnect',
				    	   icon: 'resources/silkicons/disconnect.png',
				    	   handler: function () {
				    	   	Ext.getCmp("jm-main-window").invalidateSession();
				       		}
				       }
				       ]
				       
			},{
				text: "PartDB",
				id: "partdb-menu",
				menu: [
				       {
				    	   text: "$[de.RaumZeitLabor.PartDB2.FootPrintManager.manage]",
				    	   handler: de.RaumZeitLabor.PartDB2.FootPrintManagerWindow.handler
				       },{
				    	   text: "$[de.RaumZeitLabor.PartDB2.StorageLocationManager.manage]",
				    	   handler: de.RaumZeitLabor.PartDB2.StorageLocationManagerWindow.handler
				       },{
				    	   text: "$[de.RaumZeitLabor.PartDB2.PartsManager.manage]",
				    	   handler: de.RaumZeitLabor.PartDB2.PartsManagerWindow.handler
				       },
				       {
				    	   text: "$[de.RaumZeitLabor.PartDB2.ManufacturerManager.manage]",
				    	   handler: de.RaumZeitLabor.PartDB2.ManufacturerManagerWindow.handler
				       }
				       
				       
				       ]
				
			},{
				text: "$[org.jerrymouse.gui.menu.help]",
				id: 'jm-mainmenu-help',
				menu: [
				       {
				    	   text: "$[org.jerrymouse.gui.menu.help.whatsthis]",
				    	   icon: 'resources/jmicons/contexthelp.png',
				    	   handler: org.jerrymouse.gui.contexthelp.handler}
				       
				       ]
			}]
		});
		org.jerrymouse.components.Menubar.superclass.initComponent.call(this);
	}
	


     
	
	
	
});

Ext.reg('org.jerrymouse.components.Menubar', org.jerrymouse.components.Menubar);