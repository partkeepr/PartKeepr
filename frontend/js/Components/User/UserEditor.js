Ext.define('PartKeepr.UserEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.UserEditor',
	
	saveText: i18n("Save User"),
	model: 'PartKeepr.User',
	
	initComponent: function () {
		this.gridPanel = Ext.create("PartKeepr.UserPreferenceGrid");
		
		var container = Ext.create("Ext.form.FieldContainer", {
			fieldLabel: i18n("User Preferences"),
			labelWidth: 150,
			layout: 'fit',
			height: 200,
			items: this.gridPanel
		});
		
		this.items = [{
			xtype: 'textfield',
			name: 'username',
			fieldLabel: i18n("User")
		},{
			xtype: 'textfield',
			inputType: "password",
			name: 'password',
			fieldLabel: i18n("Password")
		}, container ];
		
		this.on("startEdit", this.onStartEdit, this);
		this.callParent();
	},
	onStartEdit: function () {
		this.gridPanel.store.getProxy().extraParams.user_id = this.record.get("id");
		this.gridPanel.store.load();
	},
	onItemSave: function () {
		this.gridPanel.syncPreferences();
		
		this.callParent();
	}
});
