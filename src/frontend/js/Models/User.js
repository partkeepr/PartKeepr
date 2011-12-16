Ext.define("PartKeepr.User", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'username',	type: 'string'},
	         {	name: 'password',	type: 'string'}
	         ],
	proxy: PartKeepr.getRESTProxy("User"),
	getRecordName: function () {
		return this.get("username");
	}
});