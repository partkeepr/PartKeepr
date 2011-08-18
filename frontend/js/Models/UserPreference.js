Ext.define("PartKeepr.UserPreference", {
	extend: "Ext.data.Model",
	fields: [
	         {	name: 'key',	type: 'string'},
	         {	name: 'value'}
	        ],
	proxy: PartKeepr.getRESTProxy("UserPreference")
});