
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


Ext.override(Ext.panel.Table, {
	scrollDelta: 100
});

Ext.override(Ext.data.Connection, {
	/**
	 * Inject session header. I haven't found a better way to do
	 * it :(
	 */
	setupHeaders: function (xhr, options, data, params) {
		var session;
		
		if (!options.headers) {
			options.headers = {};
		}
		
		if (PartKeepr.getApplication() !== null) {
			session = PartKeepr.getApplication().getSession();
			if (session !== null) {
				options.headers.session = session;
			}
		}
		
		var headers = this.callOverridden(arguments);
		
		return headers;
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

/**
 * Bugfix for selection on views which aren't bound
 */
Ext.selection.Model.override({
	/**
     * @private
     * Defines if the selection model is already bound to a store.
     */
	bound: false,
	
	constructor: function (cfg) {
		/**
         * @event _bind
         * Fires as soon as a store is bound
         */
		this.addEvents("_bind");
		
		this.callOverridden(arguments);
	},
	select: function(records, keepExisting, suppressEvent) {
		// Check if we are bound to a store. If not, delay the select operation until the store is bound
		if (this.bound) {
			this.doSelect(records, keepExisting, suppressEvent);
		} else {
			this.on("_bind", function () {
				this.doSelect(records, keepExisting, suppressEvent);
			}, this, { single: true });
		}
        
    },
    bind: function(store, initial) {
		this.callOverridden(arguments);
		
		this.bound = true;
		this.fireEvent("_bind");
	}
});

/*
Ext.selection.RowModel.override({
	views: [],
	
	
});*/

Ext.tree.View.override({
	/**
     * Expands all parent nodes so the child is visible.
     * @param {Ext.data.Model} record The record to make visible
     */
	ensureVisible: function (record) {
		if (!record) { return; }
		
		if (record.parentNode) {
			record.parentNode.expand();
			this.ensureVisible(record.parentNode);
		}
	},
	/**
     * Scrolls the specified record node into view
     * @param {Ext.data.Model} record The record to scroll into view
     */
	scrollIntoView: function (record) {
		var node = this.getNode(record);

		if (node) {
			node.scrollIntoView(this.getEl());
		}
	}
});

/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @private
 * @class Ext.layout.component.field.Trigger
 * @extends Ext.layout.component.field.Field
 * Layout class for {@link Ext.form.field.Trigger} fields. Adjusts the input field size to accommodate
 * the trigger button(s).
 * @private
 */

Ext.define('Ext.layout.component.field.Trigger', {

    /* Begin Definitions */

    alias: ['layout.triggerfield'],

    extend: 'Ext.layout.component.field.Field',

    /* End Definitions */

    type: 'triggerfield',

    sizeBodyContents: function(width, height) {
        var me = this,
            owner = me.owner,
            inputEl = owner.inputEl,
            triggerWrap = owner.triggerWrap,
            triggerWidth = owner.getTriggerWidth();

        // If we or our ancestor is hidden, we can get a triggerWidth calculation
        // of 0.  We don't want to resize in this case.
        if (owner.hideTrigger || owner.readOnly || triggerWidth > 0) {
            // Decrease the field's width by the width of the triggers. Both the field and the triggerWrap
            // are floated left in CSS so they'll stack up side by side.
            me.setElementSize(inputEl, Ext.isNumber(width) ? width  : width);
    
            inputEl.dom.style.paddingRight = (triggerWidth+2)+"px";
            // Explicitly set the triggerWrap's width, to prevent wrapping
            triggerWrap.setWidth(triggerWidth);
        }
    }
});
