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

org.jerrymouse.gui.widgets.MainWindow = Ext.extend(Ext.Viewport, {
	id: 'jm-main-window',
	session: null,
	initComponent: function () {
		Ext.apply(this, {
			layout: 'border',
			items: [{
				region: 'north',
				height: 21,
				border: false,
				items: [{
				xtype: 'org.jerrymouse.components.Menubar',
				id: 'jm-menubar',
				border: false,
				autoHeight: true}
				],
				margins: '5 5 0 5'
			},{
				region: 'center',
				id: 'jm-main-view',
				layout: 'border',
				items: [{
					region: 'west',
					width: 300,
					hidden: true,
					xtype: 'tabpanel',
					split: true,
					minWidth: 100,
					title: 'West',
					id: 'jm-main-view-west',
					margins: '5 0 5 5'
				},{
					region: 'center',
					title: 'Center',
					xtype: 'tabpanel',
					hidden: true,
					minWidth: 100,
					id: 'jm-main-view-center',
					margins: '5 0 5 0'
				},{
					region: 'east',
					title: 'East',
					split: true,
					xtype: 'tabpanel',
					id: 'jm-main-view-east',
					hidden: true,
					minWidth: 100,
					width: 200,
					margins: '5 5 5 0'
				}],
				
				margins: '0 5 0 5'
			},{
				region: 'south',
				xtype: 'org.jerrymouse.components.Statusbar',
				id: 'jm-statusbar',
				margins: '0 5 5 5'
			}]
		});
		org.jerrymouse.gui.widgets.MainWindow.superclass.initComponent.call(this);
	},
	setSession: function (sess) {
		this.session = sess;
		/*Ext.getCmp("jm-main-view-east").show();
		Ext.getCmp("jm-main-view-west").show();
		Ext.getCmp("jm-main-view-center").show();
		Ext.getCmp("jm-main-view").doLayout();
		Ext.getCmp("jm-status-connectionbutton").setConnected();
		
		var navigator = new org.jerrymouse.system.views.Navigator();*/
		
		//this.addView(navigator, "west");
		
		
		//var explorer = new org.jerrymouse.system.views.ObjectExplorer();
		//this.addView(explorer, "west");
		//explorer.activateView();
		
		de.RaumZeitLabor.PartDB2.PartsManagerWindow.handler();
		//de.RaumZeitLabor.PartDB2.FootPrintManagerWindow.handler();
		
	
	},
	invalidateSession: function () {
		/*Ext.getCmp("jm-main-view-east").hide();
		Ext.getCmp("jm-main-view-west").hide();
		Ext.getCmp("jm-main-view-center").hide();
		Ext.getCmp("jm-status-connectionbutton").setDisconnected();*/
		this.session = null;
	},
	getSession: function () {
		return this.session;
	},
	addView: function (view, pane) {
		Ext.getCmp("jm-main-view-"+pane).add(view);
		view.containerCmp = Ext.getCmp("jm-main-view-"+pane);
		Ext.getCmp("jm-main-window").doLayout();
		
	}
	
	
	
	
	
});