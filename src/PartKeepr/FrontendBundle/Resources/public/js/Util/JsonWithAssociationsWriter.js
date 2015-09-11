Ext.define("PartKeepr.JsonWithAssociations", {
	extend: 'Ext.data.writer.Json',
	alias: 'writer.jsonwithassociations',

	/**
	 * @cfg {Array} associations Which associations to include.
	 */
	associations: [],
	writeRecordId: false,

	getRecordData: function(record) {
		var me = this, i, key, subStore,
		data = me.callParent(arguments);

		var storeName;
		
		Ext.apply(data, record.getAssociatedData());

		return data;
	}
});