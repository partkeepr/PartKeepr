PartKeepr.FootprintAttachment = Ext.define("FootprintAttachment", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',		type: 'int' },
	         {	name: 'originalFilename',	type: 'string' },
	         {	name: 'footprint_id',		type: 'int' },
	         {	name: 'mimetype',			type: 'string' },
	         {	name: 'extension',			type: 'string' },
	         {	name: 'description',		type: 'string' },
	         {	name: 'size',				type: 'string' },
	         {	name: 'tmp_id',				type: 'int' }
	         ],
	belongsTo: { type: 'belongsTo', model: 'Footprint', primaryKey: 'id', foreignKey: 'footprint_id'},
	proxy: PartKeepr.getRESTProxy("FootprintAttachment")
});