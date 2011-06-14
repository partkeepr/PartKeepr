PartKeepr.Footprint = Ext.define("Footprint", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'footprint',	type: 'string'}
	         ],
	proxy: PartKeepr.getRESTProxy("Footprint"),
	getName: function () {
		return this.get("footprint");
	}
});