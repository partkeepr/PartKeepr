Ext.define("PartKeepr.JsonWithAssociations", {
	extend: 'Ext.data.writer.Json',
	alias: 'writer.jsonwithassociations',

	/**
	 * @cfg {Array} associations Which associations to include.
	 */
	associations: [],

	getRecordData: function(record) {
		var me = this, i, key, subStore,
		data = me.callParent(arguments);

		for (i=0;i<me.associations.length;i++) {
			key = me.associations[i];
			data[key] = []; 
			subStore = record[record.associations.getByKey(key).storeName];
			subStore.each(function (subRecord) {
				data[key].push(ReConsole.writer.JsonWithAssociations.superclass.getRecordData.call(this, subRecord));
			}, me);
		}

		return data;
	}
});