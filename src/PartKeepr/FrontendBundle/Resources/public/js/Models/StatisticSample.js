Ext.define("PartKeepr.StatisticSample", {
	extend: "Ext.data.Model",
	fields: [
	         {	name: 'start',	type: 'date', dateFormat: 'Y-m-d H:i:s'},
	         {	name: 'parts',	type: 'int', useNull: true },
	         {	name: 'categories',	type: 'int', useNull: true }
	         ]
});
