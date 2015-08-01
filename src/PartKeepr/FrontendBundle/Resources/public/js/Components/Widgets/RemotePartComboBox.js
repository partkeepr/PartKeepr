/**
 * A part picker with an attached grid.
 */
Ext.define("PartKeepr.RemotePartComboBox",{
    extend:"Ext.form.field.Picker",
    alias: 'widget.RemotePartComboBox',
    requires:["Ext.grid.Panel"],
    selectedValue: null,
    
    /**
     * Initializes the component.
     */
    initComponent: function(){
        Ext.apply(this,{
            pickerAlign:"tl-bl?",
            editable: false
        });

		/**
		 * Create the store with the default sorter "name ASC"
		 */
		this.createStore({
			 model: 'PartKeepr.PartBundle.Entity.Part',
			 groupField: 'categoryPath',
			 sorters: [{
				 property: 'name',
				 direction:'ASC'
			 }] 
		 });
		 
        this.callParent();
        this.createPicker();
		
		// @todo This is currently buggy due to EXTJSIV-5364.
		this.on("focus", function () { this.onTriggerClick();}, this);
    },
	// Creates a store. To be called from child's initComponent
	createStore: function (config) {
		Ext.Object.merge(config, {
				autoLoad: true,
				autoSync: false, // Do not change. If true, new (empty) records would be immediately commited to the database.
				remoteFilter: true,
				remoteSort: true,
				pageSize: 15});
		
		this.store = Ext.create('Ext.data.Store', config);
		
		// Workaround for bug http://www.sencha.com/forum/showthread.php?133767-Store.sync()-does-not-update-dirty-flag&p=607093#post607093
		this.store.on('write', function(store, operation) {
	        var success=operation.wasSuccessful();
	        if (success) {
	            Ext.each(operation.records, function(record){
	                if (record.dirty) {
	                    record.commit();
	                }
	            });
	        }
		});
	},
    onTrigger1Click: function () {
    	this.onTriggerClick();
    },
    createPicker: function(){
		this.partsGrid = Ext.create("PartKeepr.PartsGrid", {
            enableTopToolbar: true,
			enableEditing: false,
			store: this.store,
			region: 'center'
        });
		
		this.filter = Ext.create("PartKeepr.PartFilterPanel", {
			region: 'south',
			floatable: false,
			titleCollapse: true,
			height: 225,
			autoScroll: true,
			store: this.store,
			title: i18n("Part Filter"),
			split: true,
			collapsed: true,
			collapsible: true
		});
		
        this.picker = Ext.create("Ext.panel.Panel", {
			layout: 'border',
			floating: true,
            focusOnToFront: false,
			height:300,
			minWidth: 350,
            shadow: false,
			ownerCt: this.ownerCt,
			items: [ this.partsGrid, this.filter ]
		});

        this.picker.on({
            show: function () {
				this.partsGrid.searchField.setValue(this.getDisplayValue());
				this.partsGrid.searchField.startSearch();
            },
			scope: this
        });
		
		this.partsGrid.on("select", 
			function (selModel, record) {
				this.setSelectedValue(record.get("id"));
				this.setDisplayValue(record.get("name"));
				this.collapse();
			}, this);
        
        return self.picker;
    },
	getDisplayValue: function () {
		return this.displayValue;
	},
    setSelectedValue: function (id) {
    	this.selectedValue = id;
    },
    getValue: function () {
    	return this.selectedValue;
    },
	setDisplayValue: function (value) {
		this.setRawValue(value);
		this.displayValue = value;
	},
    setValue: function () {
		
	},
    _selectRecords: function (r) {
    	this.picker.getView().select(r);
		this.picker.getView().ensureVisible(r);
		this.picker.getView().scrollIntoView(r);
    },
    alignPicker: function() {
        // override the original method because otherwise the height of the treepanel would be always 0
        var me = this,
                picker, isAbove,
                aboveSfx = '-above';

        if (this.isExpanded) {
            picker = me.getPicker();
            if (me.matchFieldWidth) {
                // Auto the height (it will be constrained by min and max width) unless there are no records to display.
                picker.setWidth( me.bodyEl.getWidth());
            }
            if (picker.isFloating()) {
                picker.alignTo(me.inputEl, me.pickerAlign, me.pickerOffset);

                // add the {openCls}-above class if the picker was aligned above
                // the field due to hitting the bottom of the viewport
                isAbove = picker.el.getY() < me.inputEl.getY();
                me.bodyEl[isAbove ? 'addCls' : 'removeCls'](me.openCls + aboveSfx);
                picker.el[isAbove ? 'addCls' : 'removeCls'](picker.baseCls + aboveSfx);
            }
        }
    },
    getErrors: function(value) {
    	if (this.getValue() === null) {
    		return [ i18n("You need to select a category")];
    	}
    	
    	return [];
    }
});