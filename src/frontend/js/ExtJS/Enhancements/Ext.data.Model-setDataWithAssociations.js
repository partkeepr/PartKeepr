Ext.override(Ext.data.Model, {
	/**
	 * Sets the data including associations.
	 * 
	 * @param data A plain object which represents the data. This can come from model.getData(true).
	 */
	setDataWithAssociations: function (data) {
		for (var i in data) {
			if (this.fields.containsKey(i)) {
				this.set(i, data[i]);
			}
			
			if (this.associations.containsKey(i)) {
				var store = this[i]();
				store.add(data[i]);
			}
		}
	 
	}
});