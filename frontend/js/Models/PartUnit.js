PartDB2.PartUnit = Ext.define("PartUnit", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'shortName',	type: 'string'}
	         ],
	proxy: PartDB2.getRESTProxy("PartUnit"),
	getName: function () {
		return this.get("name");
	}
});