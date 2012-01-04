/**
 * Represents the project editor component
 */
Ext.define('PartKeepr.SystemNoticeEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.SystemNoticeEditorComponent',
	navigationClass: 'PartKeepr.SystemNoticeGrid',
	editorClass: 'PartKeepr.SystemNoticeEditor',
	newItemText: i18n("New System Notice"),
	model: 'PartKeepr.SystemNotice',
	initComponent: function () {
		this.createStore({
			sorters: [{
				proxy: PartKeepr.getRESTProxy("SystemNotice"),
				property: 'date',
				direction:'DESC'
	          }]
		});
		
		this.callParent();
	}
});