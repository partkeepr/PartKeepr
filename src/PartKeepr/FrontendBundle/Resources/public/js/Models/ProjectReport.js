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
	         {	name: 'distributor_order_number',	type: 'string'},
	         {	name: 'sum_order',	type: 'float'},
	         {	name: 'sum',	type: 'float'},
	         {	name: 'projects',	type: 'string'},
	         {	name: 'remarks',	type: 'string'}
	         ],
	hasMany: [
		{ model: 'PartKeepr.Part', 	name: 'part'}
		],
	proxy: PartKeepr.getRESTProxy("ProjectReport")
});