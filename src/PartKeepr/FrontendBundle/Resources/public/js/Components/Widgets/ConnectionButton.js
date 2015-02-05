Ext.define('PartKeepr.ConnectionButton', {
	extend: 'Ext.Button',
	connectedIcon: 'resources/silkicons/connect.png',
	disconnectedIcon: 'resources/silkicons/disconnect.png',
	cls: 'x-btn-icon',
	icon: 'resources/silkicons/disconnect.png',
	//tooltip: i18n("Disconnected"),
	setConnected: function () {
		this.setIcon(this.connectedIcon);
		//this.setTooltip(i18n("Connected"));
	},
	setDisconnected: function () {
		this.setIcon(this.disconnectedIcon);
		//this.setTooltip(i18n("Disconnected"));
	}
});

