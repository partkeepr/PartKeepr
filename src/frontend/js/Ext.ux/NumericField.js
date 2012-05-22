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
        return this.parseValue(this.callParent(arguments));
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