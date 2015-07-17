Ext.define("PartKeepr.TipOfTheDay", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id', type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'url',	type: 'string'},
	         {  name: 'read', type: 'boolean' }
	         ],
});