Ext.define("PartKeepr.Footprint", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',	type: 'int' 	},
	         {	name: 'name',			type: 'string'	},
	         {	name: 'description',	type: 'string'	},
		     // image_id needs to be a string because we need to be able to push TMP:<id> back
	         {	name: 'image_id',		type: 'string'	},
	         {	name: 'category',	type: 'int'	}
	         ],
	hasMany: {model: 'PartKeepr.FootprintAttachment', name: 'attachments'},
	proxy: PartKeepr.getRESTProxy("Footprint"),
	getRecordName: function () {
		return this.get("name");
	}
});
