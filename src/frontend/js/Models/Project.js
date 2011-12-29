/**
 * Represents a project
 */
Ext.define("PartKeepr.Project", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'description',	type: 'string'},
	         {	name: 'user_id',	type: 'int'}
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