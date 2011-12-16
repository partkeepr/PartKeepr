/**
 * Defines a system information record
 */
Ext.define("PartKeepr.SystemInformationRecord", {
	extend: "Ext.data.Model",
	fields: [
	         /* Defines the name of the property */
	         {	name: 'name',				type: 'string' },
	         /* Defines the value of the property */
	         {	name: 'value',				type: 'string' },
	         /* Defines the category of the property */
	         {	name: 'category',			type: 'string' }
	         ]
});