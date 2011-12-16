Ext.define("PartKeepr.Unit", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id', type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'symbol',	type: 'string'}
	         ],
    hasMany: { model: 'PartKeepr.SiPrefix', name: 'prefixes'},
	proxy: PartKeepr.getRESTProxy("Unit"),
	getRecordName: function () {
		return this.get("name");
	}
});