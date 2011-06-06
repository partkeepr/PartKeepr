PartDB2.Part = Ext.define("Part", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'category_id',	type: 'int'},
	         {	name: 'categoryName',	type: 'string'},
	         {	name: 'footprint_id',	type: 'int'},
	         {	name: 'footprintName',	type: 'string'},
	         {	name: 'manufacturer_id',type: 'int'},
	         {	name: 'storageLocation_id',type: 'int'},
	         {	name: 'storageLocationName',type: 'string'},
	         {	name: 'name',type: 'string'},
	         {	name: 'comment',type: 'string'},
	         {	name: 'stockLevel',type: 'int'},
	         {	name: 'minStockLevel',type: 'int'}
	         ],
    belongsTo: [
                { model: 'Manufacturer', primaryKey: 'id', foreignKey: 'manufacturer_id'},
                { model: 'StorageLocation', primaryKey: 'id', foreignKey: 'storageLocation_id'},
                { model: 'Footprint', primaryKey: 'id', foreignKey: 'footprint_id'},
                { model: 'Category', primaryKey: 'id', foreignKey: 'category_id'}
                ],
    hasMany: { model: 'PartDistributor', name: 'distributors'},
	proxy: PartDB2.getRESTProxy("Part"),
	getName: function () {
		return this.get("name");
	}
});