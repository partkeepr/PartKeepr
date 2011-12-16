Ext.define("PartKeepr.CategoryComboBox",{
    extend:"Ext.form.field.Picker",
    alias: 'widget.CategoryComboBox',
    requires:["Ext.tree.Panel"],
    selectedValue: null,
    initComponent: function(){
        var self = this;

        Ext.apply(self,{
            pickerAlign:"tl-bl?",
            editable: false
            	
        });

        self.callParent();
        
        this.createPicker();

    },
    createPicker: function(){
        var self = this;

        self.picker = new PartKeepr.CategoryTree({
            height:290,
            categoryService: 'PartCategory',
            categoryModel: 'PartKeepr.PartCategory',
            floating: true,
            focusOnToFront: false,
            shadow: false,
            ownerCt: this.ownerCt
        });

        self.picker.on({
            itemclick: Ext.bind(function(sm, record){
            	this.setValue(record.get("name"), true);
            	this.setSelectedValue(record.get("id"));
                this.collapse();
            },this),
            show: {
            	fn: Ext.bind(function(cmp) {
            		var record = this.picker.getSelectionModel().getLastSelected();
            		
            		this.picker.getView().focusRow(record);
            	}, this),
            	delay: 50
            }
        });
        
        self.picker.getView().on("render", Ext.bind(function () {
        	var record = this.picker.getSelectionModel().getLastSelected();
        	this.picker.getView().ensureVisible(record);
        	
        	this.picker.getView().focusRow(record);
        },this));
        
        return self.picker;
    },
    setSelectedValue: function (id) {
    	this.selectedValue = id;
    },
    getValue: function () {
    	return this.selectedValue;
    },
    setValue: function (val, parent) {
    	if (parent) {
    		this.callParent([val]);
    	}
    	
    	if (!this.picker) { return; }
    	
    	if (!this.picker.loaded) {
    		this.picker.on("categoriesLoaded", function () { this._setValue(val); }, this);
    	} else {
    		this._setValue(val);
    	}
    },
    _setValue: function (val) {
    	var r = this.findById(val);
    	
    	/* We have found a record. Apply it */
    	if (r !== null) {
    		this.setSelectedValue(r.get("id"));
    		this.setValue(r.get("name"), true);
    		
    		if (this.picker.getView().rendered) {
    			this._selectRecords(r);
    		} else {
    			this.picker.getView().on("render", function () { this._selectRecords(r); }, this);
    		}
    		
    	}
    },
    _selectRecords: function (r) {
    	this.picker.getView().select(r);
		this.picker.getView().ensureVisible(r);
		this.picker.getView().scrollIntoView(r);
    },
    findById: function (id) {
    	return this.picker.getRootNode().findChild("id", id, true);
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