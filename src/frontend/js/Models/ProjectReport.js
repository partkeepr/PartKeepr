/**
 * Represents a project report
 */
Ext.define("PartKeepr.ProjectReport", {
	extend: "Ext.data.Model",
	fields: [
	         {	name: 'quantity',	type: 'int'},
	         {	name: 'storageLocation_name',	type: 'string'},
	         {	name: 'available',	type: 'int'},
	         {	name: 'missing',	type: 'int'},
	         {	name: 'sum_order',	type: 'float'}
	         ],
	hasMany: [
		{ model: 'PartKeepr.Part', 	name: 'part'}
		],
	proxy: PartKeepr.getRESTProxy("ProjectReport")
});