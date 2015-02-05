Ext.define("PartKeepr.UserPreference", {
	extend: "Ext.data.Model",
	fields: [
	         {	name: 'key',	type: 'string'},
	         {	name: 'value'},
	         {  name: 'user_id', type: 'int'}
	        ],
	proxy: PartKeepr.getRESTProxy("UserPreference")
});