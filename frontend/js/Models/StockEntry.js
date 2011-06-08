PartDB2.StockEntry = Ext.define("StockEntry", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'username',	type: 'string'},
	         {	name: 'datetime',	type: 'datetime'},
	         {	name: 'amount',	type: 'int'},
	         {	name: 'direction',	type: 'string'},
	         {	name: 'price',	type: 'float'}
	         ],
	proxy: PartDB2.getRESTProxy("Stock")
});