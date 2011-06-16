PartKeepr.Footprint = Ext.define("Footprint", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'}
	         ],
	proxy: PartKeepr.getRESTProxy("Footprint"),
	getName: function () {
		return this.get("name");
	}
});