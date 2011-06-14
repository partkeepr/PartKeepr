PartKeepr.Distributor = Ext.define("Distributor", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'url',	type: 'string'},
	         {	name: 'comment',	type: 'string'},
	         {	name: 'address',	type: 'string'},
	         {	name: 'email',	type: 'string'}
	         ],
	proxy: PartKeepr.getRESTProxy("Distributor"),
	getName: function () {
		return this.get("name");
	}
});