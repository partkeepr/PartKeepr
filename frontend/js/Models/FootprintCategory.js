Ext.define("PartKeepr.FootprintCategory", {
	extend: "PartKeepr.AbstractCategory",
	fields: [
	         {	name: 'id',	type: 'int' },
	         {	name: 'name',	type: 'string' },
	         {  name: 'description', type: 'string' },
	         {  name: 'parent', type: 'int' }
	         ],
    proxy: PartKeepr.getRESTProxy("FootprintCategory"),
    getRecordName: function () {
    	return this.get("name");
    }
});

