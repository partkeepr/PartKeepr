PartDB2.StorageLocation = Ext.define("StorageLocation", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'}
	         ],
	proxy: PartDB2.getRESTProxy("StorageLocation"),
	getName: function () {
		return this.get("name");
	}
});