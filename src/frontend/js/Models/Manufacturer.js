Ext.define("PartKeepr.Manufacturer", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'url',	type: 'string'},
	         {	name: 'comment',	type: 'string'},
	         {	name: 'address',	type: 'string'},
	         {	name: 'phone',	type: 'string'},
	         {	name: 'fax',	type: 'string'},
	         {	name: 'email',	type: 'string'}
	         ],
	hasMany: {model: 'PartKeepr.ManufacturerICLogo', name: 'iclogos'},
	proxy: PartKeepr.getRESTProxy("Manufacturer"),
	getRecordName: function () {
		return this.get("name");
	}
});