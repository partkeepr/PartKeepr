Ext.define('PartKeepr.data.field.Array', {
    extend: 'Ext.data.field.Field',

    alias: [
        'data.field.array'
    ],

    /**
     * @property [trueRe]
     * Values matching this regular expression are considered `true`.
     */
    trueRe: /^\s*(?:true|yes|on|1)\s*$/i,

    convert: function (v) {
        return v;
    },

    getType: function() {
        return 'array';
    }
});