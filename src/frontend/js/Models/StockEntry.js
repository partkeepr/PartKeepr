Ext.define("PartKeepr.StockEntry", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'username',	type: 'string'},
	         {	name: 'user_id',	type: 'int'},
	         {	name: 'dateTime',	type: 'datetime'},
	         {	name: 'stockLevel',	type: 'int'},
	         {	name: 'storageLocation_name',	type: 'string'},
	         {	name: 'direction',	type: 'string'},
	         {	name: 'part_name',	type: 'string'},
	         {	name: 'price',		type: 'float'},
	         {	name: 'comment',	type: 'string'}
	         ]
});