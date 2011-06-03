PartDB2.ManufacturerICLogo = Ext.define("ManufacturerICLogo", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'manufacturer_id',			type: 'int' },
	         { name: 'type', type: 'string' },
	         { name: 'tmp_id', type: 'int' }
	         ],
	belongsTo: { type: 'belongsTo', model: 'Manufacturer', primaryKey: 'id', foreignKey: 'manufacturer_id'},
	proxy: PartDB2.getRESTProxy("ManufacturerICLogo")
});