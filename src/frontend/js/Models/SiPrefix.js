Ext.define("PartKeepr.SiPrefix", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id', type: 'int' },
	         {	name: 'prefix',	type: 'string'},
	         {	name: 'symbol',	type: 'string'},
	         {	name: 'power',	type: 'int'}
	         ],
	proxy: PartKeepr.getRESTProxy("SiPrefix")
});