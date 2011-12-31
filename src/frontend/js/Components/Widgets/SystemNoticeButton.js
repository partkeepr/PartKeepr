Ext.define('PartKeepr.SystemNoticeButton', {
	extend: 'PartKeepr.FadingButton',
	icon: 'resources/fugue-icons/icons/service-bell.png',
	tooltip: i18n("Unacknowledged System Notices"),
	initComponent: function () {
		this.callParent();
		
		this.on("render", this.startFading, this);
		this.on("click", this.onClick, this);
	},
	onClick: function () {
		PartKeepr.getApplication().menuBar.showSystemNotices();
	}
});