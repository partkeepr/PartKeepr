Ext.define('PartKeepr.BatchJobEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.BatchJobEditorComponent',
	navigationClass: 'PartKeepr.BatchJobGrid',
	editorClass: 'PartKeepr.BatchJobEditor',
	newItemText: i18n("New Batch Job"),
	model: 'PartKeepr.BatchJobBundle.Entity.BatchJob',
	initComponent: function () {
		this.createStore({
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	},
    statics: {
        iconCls: 'fugue-icon task',
        title: i18n('Batch Jobs'),
        closable: true,
        menuPath: [{text: i18n("Edit")}]
    }
});
