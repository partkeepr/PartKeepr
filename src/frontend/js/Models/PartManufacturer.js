Ext.define("PartKeepr.PartManufacturer", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'part_id',			type: 'int' },
	         {	name: 'part_name',			type: 'string' },
	         {	name: 'manufacturer_id',			type: 'int' },
	         {	name: 'manufacturer_name',			type: 'string' },
	         { name: 'partNumber', type: 'string' }
	         ],
	belongsTo: { type: 'belongsTo', model: 'PartKeepr.Part', primaryKey: 'id', foreignKey: 'part_id'},
	belongsTo: { type: 'belongsTo', model: 'PartKeepr.Manufacturer', primaryKey: 'id', foreignKey: 'manufacturer_id'},
	proxy: PartKeepr.getRESTProxy("PartManufacturer")
});
