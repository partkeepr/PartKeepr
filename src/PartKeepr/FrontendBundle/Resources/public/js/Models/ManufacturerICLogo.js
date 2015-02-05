Ext.define("PartKeepr.ManufacturerICLogo", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',		type: 'string' },
	         {	name: 'originalFilename',	type: 'string' },
	         {	name: 'footprint_id',		type: 'int' },
	         {	name: 'mimetype',			type: 'string' },
	         {	name: 'extension',			type: 'string' },
	         {	name: 'description',		type: 'string' },
	         {	name: 'size',				type: 'string' }
	         ],
	belongsTo: { type: 'belongsTo', model: 'PartKeepr.Manufacturer', primaryKey: 'id', foreignKey: 'manufacturer_id'},
	proxy: PartKeepr.getRESTProxy("ManufacturerICLogo")
});