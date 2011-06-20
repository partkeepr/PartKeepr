Ext.define("PartKeepr.Part", {
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
	         {	name: 'partUnit',type: 'string'},
	         {	name: 'averagePrice',type: 'float'},
	         
	         /*
	          * The partUnitDefault would belong into an association. Unless we know how to
	          * access associations in e.g. a grid, we need to pass it as this one.
	          */
	         {
	        	 name: 'partUnitDefault',
	        	 type: 'boolean',
	        	 convert: function (val) {
	        		 if (val === "true" || val === "1" || val === true)
	        		 { return true; }
	        		 else { return false; }
	        		 }
	         },
	         {	name: 'name',type: 'string'},
	         {	name: 'comment',type: 'string'},
	         {	name: 'stockLevel',type: 'int'},
	         {	name: 'minStockLevel',type: 'int'}
	         ],
    belongsTo: [
                { model: 'PartKeepr.Manufacturer', primaryKey: 'id', foreignKey: 'manufacturer_id'},
                { model: 'PartKeepr.StorageLocation', primaryKey: 'id', foreignKey: 'storageLocation_id'},
                { model: 'PartKeepr.Footprint', primaryKey: 'id', foreignKey: 'footprint_id'},
                { model: 'PartKeepr.PartCategory', primaryKey: 'id', foreignKey: 'category_id'}
                ],
    hasMany: { model: 'PartKeepr.PartDistributor', name: 'distributors'},
	proxy: PartKeepr.getRESTProxy("Part")
});