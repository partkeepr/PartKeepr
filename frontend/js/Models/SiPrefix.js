PartDB2.SiPrefix = Ext.define("SiPrefix", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id', type: 'int' },
	         {	name: 'prefix',	type: 'string'},
	         {	name: 'symbol',	type: 'string'},
	         {	name: 'power',	type: 'int'}
	         ],
	proxy: PartDB2.getRESTProxy("SiPrefix")
});