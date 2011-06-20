Ext.define("PartKeepr.PartAttachment", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'originalFilename',			type: 'string' },
	         {	name: 'mimetype',			type: 'string' },
	         {	name: 'extension',			type: 'string' },
	         {	name: 'description',		type: 'string' },
	         {	name: 'size',			type: 'string' },
	         {	name: 'tmp_id',			type: 'int' }
	         ],
	belongsTo: { type: 'belongsTo', model: 'PartKeepr.Part', primaryKey: 'id', foreignKey: 'part_id'},
	proxy: PartKeepr.getRESTProxy("PartAttachment")
});