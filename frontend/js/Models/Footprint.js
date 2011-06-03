PartDB2.Footprint = Ext.define("Footprint", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'footprint',	type: 'string'},
	         ],
	proxy: PartDB2.getRESTProxy("Footprint"),
	getName: function () {
		return this.get("footprint");
	}
});