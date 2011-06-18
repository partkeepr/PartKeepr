PartKeepr.Footprint = Ext.define("Footprint", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',	type: 'int' 	},
	         {	name: 'name',			type: 'string'	},
	         {	name: 'description',	type: 'string'	},
	         {	name: 'image_id',		type: 'string'	}
		     // image_id needs to be a string because we need to be able to push TMP:<id> back
	         ],
	hasMany: {model: 'FootprintAttachment', name: 'attachments'},
	proxy: PartKeepr.getRESTProxy("Footprint"),
	getRecordName: function () {
		return this.get("name");
	}
});