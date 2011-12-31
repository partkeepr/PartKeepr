/**
 * Represents a system notice
 */
Ext.define("PartKeepr.SystemNotice", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'date',	type: 'date', dateFormat: 'Y-m-d H:i:s'},
	         {	name: 'title',	type: 'string'},
	         {	name: 'description',	type: 'string'}
	         ],
	proxy: PartKeepr.getRESTProxy("SystemNotice"),
	getRecordName: function () {
		return this.get("title");
	}
});