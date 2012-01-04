/**
 * Represents a project report list
 */
Ext.define("PartKeepr.ProjectReportList", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'description',	type: 'string'},
	         {	name: 'user_id',	type: 'int'},
	         {	name: 'amount',	type: 'int', defaultValue: 1 }
	         ],
	hasMany: [
		{ model: 'PartKeepr.ProjectPart', 	name: 'parts'},
		{ model: 'PartKeepr.ProjectAttachment', name: 'attachments' }
		],
	proxy: PartKeepr.getRESTProxy("Project"),
	getRecordName: function () {
		return this.get("name");
	}
});