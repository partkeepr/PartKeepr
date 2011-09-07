Ext.define("PartKeepr.StorageLocation", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
		     // image_id needs to be a string because we need to be able to push TMP:<id> back
	         {	name: 'image_id',		type: 'string'	}
			],
	proxy: PartKeepr.getRESTProxy("StorageLocation"),
	getRecordName: function () {
		return this.get("name");
	}
});