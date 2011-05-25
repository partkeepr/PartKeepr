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

Ext.ns("org.jerrymouse.components.statusbar");

org.jerrymouse.components.statusbar.ConnectionButton = Ext.extend(Ext.Button, {
	connectedIcon: 'resources/silkicons/connect.png',
	disconnectedIcon: 'resources/silkicons/disconnect.png',
	initComponent: function () {
		Ext.apply(this, {
				cls: 'x-btn-icon',
				icon: 'resources/silkicons/disconnect.png',
				tooltip: '$[org.jerrymouse.gui.connectionbutton.notconnected]'
		});

		org.jerrymouse.components.statusbar.ConnectionButton.superclass.initComponent.call(this);
	},
	setConnected: function () {
		var btnEl = this.getEl().child(this.buttonSelector);
		
		btnEl.dom[this.tooltipType] = '$[org.jerrymouse.gui.connectionbutton.connected]';
		btnEl.setStyle('background-image', 'url(' +this.connectedIcon+')');
	},
	setDisconnected: function () {
		var btnEl = this.getEl().child(this.buttonSelector);
		
		btnEl.dom[this.tooltipType] = '$[org.jerrymouse.gui.connectionbutton.notconnected]';

		btnEl.setStyle('background-image', 'url(' +this.disconnectedIcon+')');
	}
});

Ext.reg('org.jerrymouse.components.statusbar.ConnectionButton', org.jerrymouse.components.statusbar.ConnectionButton);