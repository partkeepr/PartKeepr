/**
 * This class represents a field which can handle a number (value) bound to a specific SI prefix.
 * 
 * Internally, we use an object as value. Example:
 * 
 * {
 *     value: 10 		// The base value, in our case 10
 *     symbol: "n" 		// The symbol for display
 *     power: -9    	// The power
 *     siprefix_id: 5	// The ID of the siprefix record  
 * }
 * 
 */
Ext.define("PartKeepr.SiUnitField",{
    extend:"Ext.form.field.Picker",
    alias: 'widget.SiUnitField',
    
    siPrefix: null,
    
    /**
     * @cfg {RegExp} stripCharsRe @hide
     */
    /**
     * @cfg {RegExp} maskRe @hide
     */

    /**
     * @cfg {Boolean} allowDecimals False to disallow decimal values (defaults to true)
     */
    allowDecimals : true,

    /**
     * @cfg {String} decimalSeparator Character(s) to allow as the decimal separator (defaults to '.')
     */
    decimalSeparator : '.',

    /**
     * @cfg {Number} decimalPrecision The maximum precision to display after the decimal separator (defaults to 2)
     */
    decimalPrecision : 2,

    /**
     * @cfg {Number} minValue The minimum allowed value (defaults to Number.NEGATIVE_INFINITY). Will be used by
     * the field's validation logic.
     */
    minValue: Number.NEGATIVE_INFINITY,

    /**
     * @cfg {Number} maxValue The maximum allowed value (defaults to Number.MAX_VALUE). Will be used by
     * the field's validation logic.
     */
    maxValue: Number.MAX_VALUE,

    /**
     * @cfg {String} minText Error text to display if the minimum value validation fails (defaults to 'The minimum
     * value for this field is {minValue}')
     */
    minText : 'The minimum value for this field is {0}',

    /**
     * @cfg {String} maxText Error text to display if the maximum value validation fails (defaults to 'The maximum
     * value for this field is {maxValue}')
     */
    maxText : 'The maximum value for this field is {0}',

    /**
     * @cfg {String} nanText Error text to display if the value is not a valid number.  For example, this can happen
     * if a valid character like '.' or '-' is left in the field with no number (defaults to '{value} is not a valid number')
     */
    nanText : '{0} is not a valid number',

    /**
     * @cfg {String} negativeText Error text to display if the value is negative and {@link #minValue} is set to
     * <tt>0</tt>. This is used instead of the {@link #minText} in that circumstance only.
     */
    negativeText : 'The value cannot be negative',

    /**
     * @cfg {String} baseChars The base set of characters to evaluate as valid numbers (defaults to '0123456789').
     */
    baseChars : '0123456789',

    /**
     * @cfg {Boolean} autoStripChars True to automatically strip not allowed characters from the field. Defaults to <tt>false</tt>
     */
    autoStripChars: false,

    initComponent: function() {
        var me = this,
            allowed;

        me.callParent();

        me.setMinValue(me.minValue);
        me.setMaxValue(me.maxValue);

        // Build regexes for masking and stripping based on the configured options
        if (me.disableKeyFilter !== true) {
            allowed = me.baseChars + '';
            
            var store = PartKeepr.getApplication().getSiPrefixStore();
        	
        	for (var i=0;i<store.count();i++) {
        		allowed += store.getAt(i).get("symbol");
        	}
        	
        	/**
        	 * Fix because the µ-symbol on your keyboard is not greek "Mu" as defined by the Si standard. We wish that
        	 * the user still can enter "µ", which automatically gets converted to "Mu".
        	 */
        	allowed += "µ";
        	
            if (me.allowDecimals) {
                allowed += me.decimalSeparator;
            }
            if (me.minValue < 0) {
                allowed += '-';
            }
            allowed = Ext.String.escapeRegex(allowed);
            me.maskRe = new RegExp('[' + allowed + ']');
            if (me.autoStripChars) {
                me.stripCharsRe = new RegExp('[^' + allowed + ']', 'gi');
            }
        }
    },
    onTriggerClick: function () {
    	this.expand();
    	
    	var node = this.picker.getNode(this.siPrefix);
    	
    	if (node) {
    		this.picker.highlightItem(node);
        	this.picker.listEl.scrollChildIntoView(node, false);	
    	}
    },
    getStore: function () {
    	if (this.store) {
    		return this.store;
    	}
    	
    	return PartKeepr.getApplication().getSiPrefixStore();
    },
    setStore: function (store) {
    	if (this.picker) {
    		this.picker.bindStore(store);
    	} else {
    		this.store = store;
    	}
    },
    createPicker: function() {
    	var siprefixtpl = new Ext.XTemplate(
    		    '<tpl for=".">',
    		        '<div class="thumb-wrap">',
    		          '{symbol} {prefix}',
    		        '</div>',
    		    '</tpl>');
    	
    	var tmp = Ext.create('PartKeepr.SiUnitList', {
    	    store: this.getStore(),
    	    singleSelect: true,
    	    ownerCt: this.ownerCt,
            renderTo: document.body,
            //width: 200,
            //height:200,
            floating: true,
            maxHeight: 300,
            shadow: 'sides',
            focusOnToFront: false,
            hidden: true,
            focusOnShow: true,
            displayField: 'symbol',
            isteners: {
                scope: this,
                itemclick: this.onSelect
            }
    	});
    	
    	this.mon(tmp, {
             itemclick: this.onSelect,
             scope: this
         });
        return tmp;
    },
    onSelect: function (t, rec) {
    	var val = this.getValue();
    	
    	val.symbol = rec.get("symbol");
    	val.power = rec.get("power");
    	val.siprefix_id = rec.get("id");
    	
    	//this.siUnit = rec;
    	this.setValue(val);
    	this.collapse();
    },
    /**
     * Runs all of Number's validations and returns an array of any errors. Note that this first
     * runs Text's validations, so the returned array is an amalgamation of all field errors.
     * The additional validations run test that the value is a number, and that it is within the
     * configured min and max values.
     * @param {Mixed} value The value to get errors for (defaults to the current field value)
     * @return {Array} All validation errors for this field
     */
    getErrors: function(value) {
        var me = this,
            errors = me.callParent(arguments),
            format = Ext.String.format,
            num, retVal;

        retVal = Ext.isDefined(value) ? value : this.processRawValue(this.getRawValue());
        
        value = retVal.value;
        
        if (value.length < 1) { // if it's blank and textfield didn't flag it then it's valid
             return errors;
        }

        value = String(value).replace(me.decimalSeparator, '.');

        if(isNaN(value)){
            errors.push(format(me.nanText, value));
        }

        num = me.parseValue(value);

        if (me.minValue === 0 && num < 0) {
            errors.push(this.negativeText);
        }
        else if (num < me.minValue) {
            errors.push(format(me.minText, me.minValue));
        }

        if (num > me.maxValue) {
            errors.push(format(me.maxText, me.maxValue));
        }


        return errors;
    },
    rawToValue: function(rawValue) {
    	var processValue;
    	
    	if (Ext.isObject(rawValue)) {
    		processValue = rawValue.value;
    	} else {
    		processValue = rawValue;
    	}
    	
    	return this.fixPrecision(this.parseValue(processValue)) || processValue || null;
    },

    valueToRaw: function(value) {
        var me = this,
            decimalSeparator = me.decimalSeparator;
        value = me.parseValue(value);
        value = me.fixPrecision(value);
        value = Ext.isNumber(value) ? value : parseFloat(String(value).replace(decimalSeparator, '.'));
        value = isNaN(value) ? '' : String(value).replace('.', decimalSeparator);
        
        if (Ext.isObject(this.siPrefix) && this.siPrefix.get("symbol") !== "") {
        	return value + " "+this.siPrefix.get("symbol");
        } else {
        	return value;
        }
        
    },

    onChange: function() {
        var me = this,
            value = me.getValue(),
            valueIsNull = value === null;
        
        me.callParent(arguments);
    },
    getValue: function () {
    	var v = this.callParent(arguments);
    	
    	if (this.siPrefix) {
    		return {
        		value: v,
        		symbol: this.siPrefix.get("symbol"),
        		power: this.siPrefix.get("power"),
        		siprefix_id: this.siPrefix.get("id")
        		};
    	} else {
    		return {
    			value: v,
    			symbol: "",
    			power: 1,
    			siprefix_id: null
    		};
    	}
    },
    /**
     * Replaces any existing {@link #minValue} with the new value.
     * @param {Number} value The minimum value
     */
    setMinValue : function(value) {
        this.minValue = Ext.Number.from(value, Number.NEGATIVE_INFINITY);
    },

    /**
     * Replaces any existing {@link #maxValue} with the new value.
     * @param {Number} value The maximum value
     */
    setMaxValue: function(value) {
        this.maxValue = Ext.Number.from(value, Number.MAX_VALUE);
    },

    // private
    parseValue : function(value) {
        value = parseFloat(String(value).replace(this.decimalSeparator, '.'));
        return isNaN(value) ? null : value;
    },

    /**
     * @private
     *
     */
    fixPrecision : function(value) {
        var me = this,
            nan = isNaN(value),
            precision = me.decimalPrecision;

        if (nan || !value) {
            return nan ? '' : value;
        } else if (!me.allowDecimals || precision <= 0) {
            precision = 0;
        }

        return parseFloat(Ext.Number.toFixed(parseFloat(value), precision));
    },

    beforeBlur : function() {
        var me = this,
            v = me.parseValue(me.getRawValue());

        if (!Ext.isEmpty(v)) {
            me.setValue(v);
        }
    },
    findSiPrefix: function (value) {
    	var store = PartKeepr.getApplication().getSiPrefixStore();
    	var symbol;
    	
    	for (var i=0;i<store.count();i++) {
    		
    		symbol = store.getAt(i).get("symbol");
    		
    		if (symbol !== "") {
    			if (strpos(value, symbol) !== false) {
        			return store.getAt(i);
        		}	
    		} else {
    			emptyPrefix = store.getAt(i);
    		}
    		
    	}
    	
    	if (emptyPrefix) {
    		return emptyPrefix;
    	} else {
    		return null;
    	}
    },
    setValue: function (v) {
    	if (Ext.isObject(v)) {
    		this.siPrefix = PartKeepr.getApplication().getSiPrefixStore().getById(v.siprefix_id);
    	
    		return this.callParent([v.value]);
    	} else {
    		return v;
    	}
    },
    processRawValue: function (value) {
    	var prefix;
    	
    	value = PartKeepr.getApplication().convertMicroToMu(value);
    	
        var siPrefix = this.findSiPrefix(value);

        this.siPrefix = siPrefix;
        
        if (siPrefix !== null) {
        	value = str_replace(siPrefix.get("symbol"), "", value);
        	return { value: value, symbol: siPrefix.get("symbol"), power: siPrefix.get("power"), siprefix_id: siPrefix.get("id") };
        } else {
        	return { value: value, symbol: "", power: 0, siprefix_id: null };
        }
    }
});