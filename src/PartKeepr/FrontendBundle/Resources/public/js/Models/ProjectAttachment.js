Ext.define("PartKeepr.ProjectAttachment", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',		type: 'string' },
	         {	name: 'originalFilename',	type: 'string' },
	         {	name: 'project_id',			type: 'int' },
	         {	name: 'mimetype',			type: 'string' },
	         {	name: 'extension',			type: 'string' },
	         {	name: 'description',		type: 'string' },
	         {	name: 'size',				type: 'string' }
	         ],
	belongsTo: { type: 'belongsTo', model: 'PartKeepr.Project', primaryKey: 'id', foreignKey: 'project_id'},
	proxy: PartKeepr.getRESTProxy("ProjectAttachment")
});