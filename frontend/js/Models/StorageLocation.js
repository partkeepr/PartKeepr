Ext.define("PartKeepr.StorageLocation", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'}
	         ],
	proxy: PartKeepr.getRESTProxy("StorageLocation"),
	getRecordName: function () {
		return this.get("name");
	}
});