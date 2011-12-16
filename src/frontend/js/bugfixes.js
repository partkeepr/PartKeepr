
Ext.override(Ext.data.reader.Reader,
{
	 readRecords: function(data) {
		 	var dt = this.callOverridden(arguments);
		 	
		 	//if (dt.success === false) {
		 		//Ext.Msg.alert("Error", data.message);
		 	//}
		 	
		 	
		 	return dt;
	 }

		});








Ext.view.AbstractView.override({
    /**
     * Changes the data store bound to this view and refreshes it.
     * @param {Store} store The store to bind to this view
     */
    bindStore : function(store, initial) {
        var me = this;

        if (!initial && me.store) {
            if (store !== me.store && me.store.autoDestroy) {
                me.store.destroy();
            }
            else {
                me.mun(me.store, {
                    scope: me,
                    datachanged: me.onDataChanged,
                    add: me.onAdd,
                    remove: me.onRemove,
                    update: me.onUpdate,
                    clear: me.refresh
                });
            }
            if (!store) {
                if (me.loadMask && me.loadMask.bindStore) {
                    me.loadMask.bindStore(null);
                }
                me.store = null;
            }
        }
        if (store) {
            store = Ext.data.StoreManager.lookup(store);
            me.mon(store, {
                scope: me,
                datachanged: me.onDataChanged,
                add: me.onAdd,
                remove: me.onRemove,
                update: me.onUpdate,
                clear: me.refresh
            });
            if (me.loadMask && me.loadMask.bindStore) {
                me.loadMask.bindStore(store);
            }
        }

        me.store = store;
        // Bind the store to our selection model
        me.getSelectionModel().bind(store);

        if (store && (!initial || store.getCount())) {
            me.refresh(true);
        }
    },
    onItemSelect: function(record, cnt) {
    	if (!cnt) { cnt = 0; }
    	
        var node = this.getNode(record);
        if (Ext.fly(node)) {
        	Ext.fly(node).addCls(this.selectedItemCls);
        } else {
        	if (cnt < 20) {
        		cnt++;
        		Ext.Function.defer(this.onItemSelect, 500, this, [record, cnt]);
        	}
        	
        }
    },
    onItemDeselect: function(record, cnt) {
    	if (!cnt) { cnt = 0; }
    	
        var node = this.getNode(record);
        if (Ext.fly(node)) {
        	Ext.fly(node).removeCls(this.selectedItemCls);
        } else {
        	if (cnt < 20) {
        		cnt++;
        		Ext.Function.defer(this.onItemDeselect, 500, this, [record, cnt]);
        	}
        }
    }
});

Ext.form.field.ComboBox.override({
	beforeBlur: function() {
	    var me = this;
	    me.doQueryTask.cancel();
	    
	    me.assertValue();
	},

	// private
	assertValue: function() {
	    var me = this,
	        value = me.getRawValue(),
	        rec;

	    if (me.forceSelection) {
		    if (me.multiSelect) {
		        // For multiselect, check that the current displayed value matches the current
		        // selection, if it does not then revert to the most recent selection.
		        if (value !== me.getDisplayValue()) {
		            me.setValue(me.lastSelection);
		        }
		    } else {
		        // For single-select, match the displayed value to a record and select it,
		        // if it does not match a record then revert to the most recent selection.
		        rec = me.findRecordByDisplay(value);
		        if (rec) {
		            me.select(rec);
		        } else {
		            me.setValue(me.lastSelection);
		        }
		    }
	    }
	    me.collapse();
	},
	
	
	setValue: function(value, doSelect) {
        var me = this,
            valueNotFoundText = me.valueNotFoundText,
            inputEl = me.inputEl,
            i, len, record,
            models = [],
            displayTplData = [],
            processedValue = [];

        if (me.store.loading) {
            // Called while the Store is loading. Ensure it is processed by the onLoad method.
            me.value = value;
            return me;
        }

        // This method processes multi-values, so ensure value is an array.
        value = Ext.Array.from(value);

        // Loop through values
        for (i = 0, len = value.length; i < len; i++) {
            record = value[i];
            if (!record || !record.isModel) {
                var tmpRecord = me.findRecordByValue(record);
                
                record = tmpRecord;
                
            }
            // record found, select it.
            if (record) {
                models.push(record);
                displayTplData.push(record.data);
                processedValue.push(record.get(me.valueField));
            }
            // record was not found, this could happen because
            // store is not loaded or they set a value not in the store
            else {
            	if (!me.forceSelection) {
            		displayTplData.push(value[i]);
            	} else {
                    // if valueNotFoundText is defined, display it, otherwise display nothing for this value
                    if (Ext.isDefined(valueNotFoundText)) {
                        displayTplData.push(valueNotFoundText);
                    }
            	}
                processedValue.push(value[i]);
            }
        }

        // Set the value of this field. If we are multiselecting, then that is an array.
        me.value = me.multiSelect ? processedValue : processedValue[0];
        if (!Ext.isDefined(me.value)) {
            me.value = null;
        }
        me.displayTplData = displayTplData; //store for getDisplayValue method
        me.lastSelection = me.valueModels = models;

        if (inputEl && me.emptyText && !Ext.isEmpty(value)) {
            inputEl.removeCls(me.emptyCls);
        }

        // Calculate raw value from the collection of Model data
        me.setRawValue(me.getDisplayValue());
        me.checkChange();

        if (doSelect !== false) {
            me.syncSelection();
        }
        me.applyEmptyText();

        return me;
    }

});

