Ext.define('PartKeepr.CategoryTreePreferencesPanel', {
	extend: 'Ext.form.FormPanel',
	title: i18n("Category Tree"),
	bodyStyle: 'background:#DBDBDB;padding: 10px;',
	initComponent: function () {
		this.showDescriptionsCheckbox = Ext.create("Ext.form.field.Checkbox", {
			boxLabel: i18n("Show category descriptions"),
			handler: Ext.bind(this.showDescriptionsHandler, this)
		});

		if (PartKeepr.getApplication().getUserPreference("partkeepr.categorytree.showdescriptions") === false) {
			this.showDescriptionsCheckbox.setValue(false);
		} else {
			this.showDescriptionsCheckbox.setValue(true);
		}

		this.items = [ this.showDescriptionsCheckbox ];

		this.callParent();
	},
	/**
	 * Handler when the "show descriptions" checkbox is clicked.
	 */
	showDescriptionsHandler: function (checkbox, checked) {
		PartKeepr.getApplication().setUserPreference("partkeepr.categorytree.showdescriptions", checked);
	}
});

