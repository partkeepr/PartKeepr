PartDB2.Unit = Ext.define("Unit", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id', type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'symbol',	type: 'string'}
	         ],
    hasMany: { model: 'SiPrefix', name: 'prefixes'},
	proxy: PartDB2.getRESTProxy("Unit"),
	getName: function () {
		return this.get("name");
	}
});