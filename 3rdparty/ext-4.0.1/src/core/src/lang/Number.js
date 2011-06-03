/**
 * @class Ext.Number
 *
 * A collection of useful static methods to deal with numbers
 * @singleton
 */

(function() {

var isToFixedBroken = (0.9).toFixed() !== '1';

Ext.Number = {
    /**
     * Checks whether or not the current number is within a desired range.  If the number is already within the
     * range it is returned, otherwise the min or max value is returned depending on which side of the range is
     * exceeded. Note that this method returns the constrained value but does not change the current number.
     * @param {Number} number The number to check
     * @param {Number} min The minimum number in the range
     * @param {Number} max The maximum number in the range
     * @return {Number} The constrained value if outside the range, otherwise the current value
     */
    constrain: function(number, min, max) {
        number = parseFloat(number);

        if (!isNaN(min)) {
            number = Math.max(number, min);
        }
        if (!isNaN(max)) {
            number = Math.min(number, max);
        }
        return number;
    },

    /**
     * Formats a number using fixed-point notation
     * @param {Number} value The number to format
     * @param {Number} precision The number of digits to show after the decimal point
     */
    toFixed: function(value, precision) {
        if (isToFixedBroken) {
            precision = precision || 0;
            var pow = Math.pow(10, precision);
            return (Math.round(value * pow) / pow).toFixed(precision);
        }

        return value.toFixed(precision);
    },

    /**
     * Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if
     * it is not.

Ext.Number.from('1.23', 1); // returns 1.23
Ext.Number.from('abc', 1); // returns 1

     * @param {Mixed} value
     * @param {Number} defaultValue The value to return if the original value is non-numeric
     * @return {Number} value, if numeric, defaultValue otherwise
     */
    from: function(value, defaultValue) {
        if (isFinite(value)) {
            value = parseFloat(value);
        }

        return !isNaN(value) ? value : defaultValue;
    }
};

})();

/**
 * This method is deprecated, please use {@link Ext.Number#from Ext.Number.from} instead
 *
 * @deprecated 4.0.0 Replaced by Ext.Number.from
 * @member Ext
 * @method num
 */
Ext.num = function() {
    return Ext.Number.from.apply(this, arguments);
};