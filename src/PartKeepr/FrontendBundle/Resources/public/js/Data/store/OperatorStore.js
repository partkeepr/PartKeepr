/**
 * Stores all supported query operators
 */
Ext.define("PartKeepr.Data.store.OperatorStore", {
    extend: "Ext.data.Store",

    /**
     * The store ID to use
     */
    storeId: 'OperatorStore',

    fields: [
        /**
         * The operator to use for Ext.util.Filter
         */
        {

            name: 'operator',
            type: 'string'
        },
        /**
         * The symbol to display to the user
         */
        {
            name: 'symbol',
            type: 'string'
        },
        /**
         * The description, so that the user knows what the operator does
         */
        {
            name: 'description',
            type: 'string'
        },
        /**
         * The operator type. May be "scalar" or "list"
         */
        {
            name: 'type',
            type: 'string'
        },
        /**
         * Defines if the operator can be used for scalar comparisons
         */
        {
            name: 'scalar',
            type: 'boolean'
        },
        /**
         * Defines if the operator can be used for entity comparisons
         */
        {
            name: 'entity',
            type: 'boolean'
        },
        /**
         * Defines if the operator can be used for string values
         */
        {
            name: 'string',
            type: 'boolean'
        },
        /**
         * Defines if the operator can be used for numeric values
         */
        {
            name: 'numeric',
            type: 'boolean'
        }
    ],
    data: [
        {
            operator: "<",
            symbol: "<",
            description: i18n("Less than"),
            type: 'scalar',
            scalar: true,
            string: false,
            numeric: true,
            entity: false
        },
        {
            operator: ">",
            symbol: ">",
            description: i18n("Greater than"),
            type: 'scalar',
            scalar: true,
            string: false,
            numeric: true,
            entity: false
        },
        {
            operator: "=",
            symbol: "=",
            description: i18n("Equals"),
            type: 'scalar',
            scalar: true,
            string: true,
            numeric: true,
            entity: true
        },
        {
            operator: ">=",
            symbol: "≥",
            description: i18n("Greater than or equals"),
            type: 'scalar',
            scalar: true,
            string: false,
            numeric: true,
            entity: false
        },
        {
            operator: "<=",
            symbol: "≤",
            description: i18n("Less than or equals"),
            type: 'scalar',
            scalar: true,
            string: false,
            numeric: true,
            entity: false
        },
        {
            operator: "!=",
            symbol: "≠",
            description: i18n("Not equals"),
            type: 'scalar',
            scalar: true,
            string: true,
            numeric: true,
            entity: true
        }, {
            operator: "in",
            symbol: "IN",
            description: i18n("Matches a list"),
            type: 'list',
            scalar: true,
            string: true,
            numeric: true,
            entity: true
        },
        {
            operator: "like",
            symbol: "%%",
            description: i18n("Matches a subtext with wildcards (%)"),
            type: 'scalar',
            scalar: true,
            string: true,
            numeric: false,
            entity: false
        }
    ]
});
