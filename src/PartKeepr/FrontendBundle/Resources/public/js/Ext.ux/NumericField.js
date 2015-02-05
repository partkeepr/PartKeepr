/**
 * @author: Frédéric Thomas
 * Date: 22/03/12
 * Time: 16:37
 */
Ext.define('Ext.ux.NumericField', {
    extend: 'Ext.form.field.Number',
    alias: ['widget.currencyField'],
    config: {
        thousandSeparator: ' ',
        currencyAtEnd: true,
        currencySign: '€'
    },

    listeners: {
        /**
         * When this component get the focus, change the Currency
         * representation to a Float one for edition.
         *
         * @param me
         * @param eOpts
         */
        focus: function (me, eOpts) {
            me.inputEl.dom.value = this.getValue();
        }
    },

    /**
     * Converts a Float value into a currency formated value ready to display .
     *
     * @param {Object} value
     * @return {Object} The converted value.
     */
    valueToCurrency: function (value) {
        var format = Ext.util.Format;
        format.currencyPrecision = this.decimalPrecision;
        format.thousandSeparator = this.thousandSeparator;
        format.currencySign = this.currencySign;
        format.currencyAtEnd = this.currencyAtEnd;
        return format.currency(value);
    },
    /**
     * Converts a mixed-type value to a raw representation suitable for displaying in the field. This allows controlling
     * how value objects passed to {@link #setValue} are shown to the user, including localization.
     *
     * See {@link #rawToValue} for the opposite conversion.
     *
     * This implementation converts the raw value to a value formated as currency.
     *
     * @param {Object} value The mixed-type value to convert to the raw representation.
     * @return {Object} The converted raw value.
     */
    valueToRaw: function (value) {
        return this.valueToCurrency(value);
    },

    /**
     * Performs any necessary manipulation of a raw String value to prepare it for conversion and/or
     * {@link #validate validation}. Overrided to apply the {@link #parseValue}
     * to the raw value.
     *
     * @param {String} value The unprocessed string value
     * @return {String} The processed string value
     */
    processRawValue: function (value) {
    	value = this.callParent(arguments);
    	
    	if (isNaN(value) || value === null || value === "") {
    		return value;
    	}

        return this.parseValue(value);
    },
    /**
     * Runs all of Number's validations and returns an array of any errors. Note that this first runs Text's
     * validations, so the returned array is an amalgamation of all field errors. The additional validations run test
     * that the value is a number, and that it is within the configured min and max values.
     * @param {Object} [value] The value to get errors for (defaults to the current field value)
     * @return {String[]} All validation errors for this field
     */
    getErrors: function(value) {
        var me = this,
            errors = [], // This is a hack because of the strange class layout...
            format = Ext.String.format,
            num;

        value = Ext.isDefined(value) ? value : this.processRawValue(this.getRawValue());

        if (value.length < 1) { // if it's blank and textfield didn't flag it then it's valid
             return errors;
        }

        value = this.parseValue(value);

        if(isNaN(value)){
            errors.push(format(me.nanText, value));
        }

        if (me.minValue === 0 && value < 0) {
            errors.push(this.negativeText);
        }
        else if (value < me.minValue) {
            errors.push(format(me.minText, me.minValue));
        }

        if (value > me.maxValue) {
            errors.push(format(me.maxText, me.maxValue));
        }


        return errors;
    },
    /**
     * Overrided to remove thousand separator.
     *
     * @param value
     */
    parseValue: function (value) {
        value = String(value).replace(this.thousandSeparator, "");
    	value = String(value).replace(this.currencySign, "");
        value = parseFloat(String(value).replace(this.decimalSeparator, '.'));
        return isNaN(value) ? null : value;
    }
});