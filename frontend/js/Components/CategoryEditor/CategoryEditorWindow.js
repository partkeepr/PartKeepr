Ext.define('PartDB2.CategoryEditorWindow', {
	extend: 'Ext.window.Window',
	border: false,
	width: 400,
	initComponent: function () {
		
		this.form = Ext.create("PartDB2.CategoryEditorForm");
		
		this.buttons = [{
			text: i18n("Save"),
			handler: Ext.bind(this.onSave, this)
		},{
			text: i18n("Cancel"),
			handler: Ext.bind(this.onCancel, this)
		}];
		
		this.items = this.form;

		this.addEvents("save");
		
		this.callParent();
		
		this.proxyRecord = Ext.create("PartDB2.Category");
		
		if (this.record) {
			this.proxyRecord.set("name", this.record.get("name"));
			this.proxyRecord.set("description", this.record.get("description"));
			this.proxyRecord.set("id", this.record.get("id"));
			this.proxyRecord.phantom = false;
			
			this.setTitle(i18n("Edit Category"));
		} else {
			this.proxyRecord.set("parent", this.parent);
			this.setTitle(i18n("Add Category"));
		}
		
		this.form.getForm().loadRecord(this.proxyRecord);
		
		this.on("show", Ext.bind(this.onShow, this));
		
	},
	onShow: function () {
		this.form.items.first().focus();
	},
	onSave: function () {
		this.form.getForm().updateRecord(this.proxyRecord);
		this.proxyRecord.save({
			success: Ext.bind(function (response) {
				this.fireEvent("save", response);
				this.destroy();
			}, this)
		});
	},
	onCancel: function () {
		this.destroy();
	}
});
