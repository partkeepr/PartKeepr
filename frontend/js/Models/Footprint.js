PartKeepr.Footprint = Ext.define("Footprint", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'}
	         ],
	proxy: PartKeepr.getRESTProxy("Footprint"),
	getRecordName: function () {
		return this.get("name");
	}
});