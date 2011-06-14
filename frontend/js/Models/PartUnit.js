PartKeepr.PartUnit = Ext.define("PartUnit", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'shortName',	type: 'string'},
	         {	name: 'default',	type: 'bool'}
	         ],
	proxy: PartKeepr.getRESTProxy("PartUnit"),
	getName: function () {
		return this.get("name");
	}
});