Ext.define("PartKeepr.StatisticSample", {
	extend: "Ext.data.Model",
	fields: [
	         {	name: 'start',	type: 'date'},
	         {	name: 'parts',	type: 'int', useNull: true },
	         {	name: 'categories',	type: 'int', useNull: true }
	         ]
});