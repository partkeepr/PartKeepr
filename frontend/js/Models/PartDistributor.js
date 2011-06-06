PartDB2.PartDistributor = Ext.define("PartDistributor", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'part_id',			type: 'int' },
	         {	name: 'part_name',			type: 'string' },
	         {	name: 'distributor_id',			type: 'int' },
	         {	name: 'distributor_name',			type: 'string' },
	         { name: 'orderNumber', type: 'string' },
	         { name: 'packagingUnit', type: 'int'}
	         ],
	belongsTo: { type: 'belongsTo', model: 'Part', primaryKey: 'id', foreignKey: 'part_id'},
	belongsTo: { type: 'belongsTo', model: 'Distributor', primaryKey: 'id', foreignKey: 'distributor_id'},
	proxy: PartDB2.getRESTProxy("PartDistributor")
});