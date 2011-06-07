PartDB2.PartUnit = Ext.define("PartUnit", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'shortName',	type: 'string'},
	         {	name: 'default',	type: 'bool'}
	         ],
	proxy: PartDB2.getRESTProxy("PartUnit"),
	getName: function () {
		return this.get("name");
	}
});