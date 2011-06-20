Ext.define("PartKeepr.PartCategory", {
	extend: "PartKeepr.AbstractCategory",
	fields: [
	         {	name: 'id',	type: 'int' },
	         {	name: 'name',	type: 'string' },
	         {  name: 'description', type: 'string' },
	         {  name: 'parent', type: 'int' }
	         ],
    proxy: PartKeepr.getRESTProxy("PartCategory"),
    getRecordName: function () {
    	return this.get("name");
    }
});

