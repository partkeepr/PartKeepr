Ext.define('PartKeepr.SystemNoticeButton', {
	extend: 'PartKeepr.FadingButton',
	iconCls: 'fugue-icon service-bell',
	tooltip: i18n("Unacknowledged System Notices"),

    /**
     * Initializes the component. Adds the start/stop and click fading handlers.
     *
     * @param none
     * @return nothing
     */
	initComponent: function () {
		this.callParent();
		
		this.on("show", this.startFading, this);
        this.on("hide", this.stopFading, this);
		this.on("click", this.onClick, this);
	},
    /**
     * Open the system notices when clicked.
     *
     * @param none
     * @return nothing
     */
	onClick: function () {
		PartKeepr.getApplication().openAppItem("PartKeepr.SystemNoticeEditorComponent");
	}
});
