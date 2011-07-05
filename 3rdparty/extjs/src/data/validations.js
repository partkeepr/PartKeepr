/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @author Ed Spencer
 * @class Ext.data.validations
 * @extends Object
 * 
 * <p>This singleton contains a set of validation functions that can be used to validate any type
 * of data. They are most often used in {@link Ext.data.Model Models}, where they are automatically
 * set up and executed.</p>
 */
Ext.define('Ext.data.validations', {
    singleton: true,
    
    /**
     * The default error message used when a presence validation fails
     * @property presenceMessage
     * @type String
     */
    presenceMessage: 'must be present',
    
    /**
     * The default error message used when a length validation fails
     * @property lengthMessage
     * @type String
     */
    lengthMessage: 'is the wrong length',
    
    /**
     * The default error message used when a format validation fails
     * @property formatMessage
     * @type Boolean
     */
    formatMessage: 'is the wrong format',
    
    /**
     * The default error message used when an inclusion validation fails
     * @property inclusionMessage
     * @type String
     */
    inclusionMessage: 'is not included in the list of acceptable values',
    
    /**
     * The default error message used when an exclusion validation fails
     * @property exclusionMessage
     * @type String
     */
    exclusionMessage: 'is not an acceptable value',
    
    /**
     * Validates that the given value is present
     * @param {Object} config Optional config object
     * @param {Mixed} value The value to validate
     * @return {Boolean} True if validation passed
     */
    presence: function(config, value) {
        if (value === undefined) {
            value = config;
        }
        
        return !!value;
    },
    
    /**
     * Returns true if the given value is between the configured min and max values
     * @param {Object} config Optional config object
     * @param {String} value The value to validate
     * @return {Boolean} True if the value passes validation
     */
    length: function(config, value) {
        if (value === undefined) {
            return false;
        }
        
        var length = value.length,
            min    = config.min,
            max    = config.max;
        
        if ((min && length < min) || (max && length > max)) {
            return false;
        } else {
            return true;
        }
    },
    
    /**
     * Returns true if the given value passes validation against the configured {@link #matcher} regex
     * @param {Object} config Optional config object
     * @param {String} value The value to validate
     * @return {Boolean} True if the value passes the format validation
     */
    format: function(config, value) {
        return !!(config.matcher && config.matcher.test(value));
    },
    
    /**
     * Validates that the given value is present in the configured {@link #list}
     * @param {String} value The value to validate
     * @return {Boolean} True if the value is present in the list
     */
    inclusion: function(config, value) {
        return config.list && Ext.Array.indexOf(config.list,value) != -1;
    },
    
    /**
     * Validates that the given value is present in the configured {@link #list}
     * @param {Object} config Optional config object
     * @param {String} value The value to validate
     * @return {Boolean} True if the value is not present in the list
     */
    exclusion: function(config, value) {
        return config.list && Ext.Array.indexOf(config.list,value) == -1;
    }
});
