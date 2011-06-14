PartKeepr.StorageLocation = Ext.define("StorageLocation", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'}
	         ],
	proxy: PartKeepr.getRESTProxy("StorageLocation"),
	getName: function () {
		return this.get("name");
	}
});