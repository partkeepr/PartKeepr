Ext.define("PartKeepr.Widgets.Components.OperatorComboBox", {
    extend: "Ext.form.field.ComboBox",

    xtype: 'OperatorComboBox',

    displayField: 'operator',
    emptyText: i18n("Select an operator"),
    editable: false,
    forceSelection: true,
    valueField: 'operator',
    returnObject: true,

    tpl: Ext.create('Ext.XTemplate',
        '<ul class="x-list-plain"><tpl for=".">',
        '<li role="option" class="x-boundlist-item">',
        '<span style="display: inline-block; width: 20px; text-align: center; ">{symbol}</span> <small>{description}</small>',
        '</li>',
        '</tpl></ul>'
    ),

    displayTpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
            '{symbol}',
        '</tpl>'
    ),

    initComponent: function () {
        this.callParent(arguments);
        this.setStore(Ext.create("PartKeepr.Data.store.OperatorStore"));
    }
});
