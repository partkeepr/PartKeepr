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
        {
            name: 'operator',
            type: 'string'
        }, {
            name: 'description',
            type: 'string'
        },
        {
            name: 'type',
            type: 'string'
        },
        {
            name: 'scalar',
            type: 'boolean'
        },
        {
            name: 'entity',
            type: 'boolean'
        }
    ],
    data: [
        {
            operator: "<",
            description: i18n("Less than"),
            type: 'scalar',
            scalar: true,
            entity: false
        },
        {
            operator: ">",
            description: i18n("Greater than"),
            type: 'scalar',
            scalar: true,
            entity: false
        },
        {
            operator: "=",
            description: i18n("Equals"),
            type: 'scalar',
            scalar: true,
            entity: true
        },
        {
            operator: ">=",
            description: i18n("Greater than or equals"),
            type: 'scalar',
            scalar: true,
            entity: false
        },
        {
            operator: "<=",
            description: i18n("Less than or equals"),
            type: 'scalar',
            scalar: true,
            entity: false
        },
        {
            operator: "!=",
            description: i18n("Not equals"),
            type: 'scalar',
            scalar: true,
            entity: true
        }, {
            operator: "in",
            description: i18n("Matches a list"),
            type: 'list',
            scalar: true,
            entity: true
        },
        {
            operator: "like",
            description: i18n("Matches a subtext with wildcards (%)"),
            type: 'scalar',
            scalar: true,
            entity: false
        }
    ]
});
