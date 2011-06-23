Ext.define("PartKeepr.Part", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'category',		type: 'int'},
	         {	name: 'footprint',		type: 'int'},
	         {	name: 'storageLocation',type: 'int'},
	         {	name: 'partUnit',type: 'int'},
	         {	name: 'averagePrice',type: 'float'},
	         {	name: 'name',type: 'string'},
	         {	name: 'comment',type: 'string'},
	         {	name: 'stockLevel',type: 'int'},
	         {	name: 'minStockLevel',type: 'int'},
	         
	         {	name: 'partUnitName',type: 'string'},
	         {	name: 'footprintName',	type: 'string'},
	         {	name: 'storageLocationName',type: 'string'},
	         {	name: 'categoryName',	type: 'string'},
	         {
	        	 name: 'partUnitDefault',
	        	 type: 'boolean',
	        	 convert: function (val) {
	        		 if (val === "true" || val === "1" || val === true)
	        		 { return true; }
	        		 else { return false; }
	        		 }
	         }
	         
	         ],
    belongsTo: [
                { model: 'PartKeepr.StorageLocation', primaryKey: 'id', foreignKey: 'storageLocation'},
                { model: 'PartKeepr.Footprint', primaryKey: 'id', foreignKey: 'footprint'},
                { model: 'PartKeepr.PartCategory', primaryKey: 'id', foreignKey: 'category'}
                ],
    hasMany: [
              { model: 'PartKeepr.PartDistributor', name: 'distributors'},
              { model: 'PartKeepr.PartManufacturer', name: 'manufacturers'},
              { model: 'PartKeepr.PartParameter', name: 'parameters'},
              { model: 'PartKeepr.PartAttachment', name: 'attachments'},
              ],
	proxy: PartKeepr.getRESTProxy("Part"),
	getRecordName: function () {
		return this.get("name");
	}
});