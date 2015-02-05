Ext.define("PartKeepr.PartParameter", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'part_id',			type: 'int' },
	         {	name: 'name',			type: 'string' },
	         {	name: 'description',			type: 'string' },
	         {	name: 'unit_id',			type: 'int' },
	         {	name: 'siprefix_id',		type: 'int' },
	         {  name: 'value', type: 'float' },
	         {  name: 'prefixedValue' }
	         ],
	proxy: PartKeepr.getRESTProxy("PartParameter")
});
