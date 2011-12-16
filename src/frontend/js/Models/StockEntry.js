Ext.define("PartKeepr.StockEntry", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'username',	type: 'string'},
	         {	name: 'user_id',	type: 'int'},
	         {	name: 'datetime',	type: 'datetime'},
	         {	name: 'amount',	type: 'int'},
	         {	name: 'direction',	type: 'string'},
	         {	name: 'price',	type: 'float'}
	         ],
	proxy: PartKeepr.getRESTProxy("Stock")
});