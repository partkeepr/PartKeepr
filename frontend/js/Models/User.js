PartKeepr.User = Ext.define("User", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'username',	type: 'string'}
	         ],
	proxy: PartKeepr.getRESTProxy("User"),
	getName: function () {
		return this.get("username");
	}
});