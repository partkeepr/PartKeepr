Ext.define("PartKeepr.PrintingType", {
	extend: "Ext.data.Model",
	fields: [
	         {	name: 'id',	type: 'string'},
	         {	name: 'name',	type: 'string'}
	         ],
	getRecordName: function () {
		return this.get("name");
	}
});