Ext.define('PartKeepr.PartMeasurementUnitEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.PartMeasurementUnitEditorComponent',
	navigationClass: 'PartKeepr.PartMeasurementUnitGrid',
	editorClass: 'PartKeepr.PartMeasurementUnitEditor',
	newItemText: i18n("New Part Measurement Unit"),
	deleteMessage: i18n("Do you really wish to delete the part measurement unit'%s'?"),
	deleteTitle: i18n("Delete Part Measurement Unit"),
	model: 'PartKeepr.PartBundle.Entity.PartMeasurementUnit',
	initComponent: function () {
		this.createStore({
			sorters: [{
				property: 'name',
				direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});