PartKeepr.Manufacturer = Ext.define("Manufacturer", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'url',	type: 'string'},
	         {	name: 'comment',	type: 'string'},
	         {	name: 'address',	type: 'string'},
	         {	name: 'email',	type: 'string'}
	         ],
	hasMany: {model: 'ManufacturerICLogo', name: 'iclogos'},
	proxy: PartKeepr.getRESTProxy("Manufacturer"),
	getRecordName: function () {
		return this.get("name");
	}
});