Ext.define("PartKeepr.PartDistributor", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'part_id',			type: 'int' },
	         {	name: 'part_name',			type: 'string' },
	         {	name: 'distributor_id',			type: 'int' },
	         {	name: 'distributor_name',			type: 'string' },
	         {	name: 'price',			type: 'float' },
	         { name: 'orderNumber', type: 'string' },
	         { name: 'packagingUnit', type: 'int'}
	         ],
	belongsTo: { type: 'belongsTo', model: 'PartKeepr.Part', primaryKey: 'id', foreignKey: 'part_id'},
	belongsTo: { type: 'belongsTo', model: 'PartKeepr.Distributor', primaryKey: 'id', foreignKey: 'distributor_id'},
	proxy: PartKeepr.getRESTProxy("PartDistributor")
});