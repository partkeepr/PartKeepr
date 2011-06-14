PartKeepr.Category = Ext.define("Category", {
	extend: "Ext.data.Model",
	fields: [
	         {	name: 'id',	type: 'int' },
	         {	name: 'name',	type: 'string' },
	         {  name: 'description', type: 'string' },
	         {  name: 'parent', type: 'int' }
	         ],
    proxy: PartKeepr.getRESTProxy("Category"),
    getName: function () {
    	return this.get("name");
    }
});

