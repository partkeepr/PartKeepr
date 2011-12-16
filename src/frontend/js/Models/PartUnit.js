Ext.define("PartKeepr.PartUnit", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'shortName',	type: 'string'},
	         {	name: 'default',	type: 'bool'}
	         ],
	proxy: PartKeepr.getRESTProxy("PartUnit"),
	getRecordName: function () {
		return this.get("name");
	}
});