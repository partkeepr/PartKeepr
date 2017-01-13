Ext.define("PartKeepr.PartParameterComboBox", {
    extend: "Ext.form.field.ComboBox",
    xtype: 'PartParameterComboBox',
    displayField: 'name',
    valueField: 'name',
    autoSelect: false,
    allowBlank: false,
    queryMode: 'local',
    triggerAction: 'all',
    forceSelection: false,
    editable: true,
    tpl: Ext.create('Ext.XTemplate',
        '<ul class="x-list-plain"><tpl for=".">',
        '<li role="option" class="x-boundlist-item">',
        '<span style="float: left;" class="web-icon fugue-icon ',
        '<tpl if="valueType == \'numeric\'">',
        'edit-number',
        '<tpl else>',
        'layer-shape-text',
        '</tpl>',
        '"></span>{name}',
        '<tpl if="unitSymbol != null"> ({unitSymbol})</tpl>',
        '<tpl if="description != \'\'"><br/><span style="margin-left: 16px;"><small>{description}</small></span></tpl>',
        '</li>',
        '</tpl></ul>'
    ),
    triggers: {
        reload: {
            cls: "x-form-reload-trigger",
            weight: -1,
            handler: function ()
            {
                this.store.load();
            },
            scope: 'this'
        }
    },
    initComponent: function ()
    {

        this.store = Ext.create("Ext.data.Store", {
            fields: [{name: 'name'}, {name: 'description'}, {name: 'valueType'}, {name: 'unitName'},{name: 'unitSymbol'}],
            autoLoad: false,
            proxy: {
                type: 'ajax',
                url: PartKeepr.getBasePath() + "/api/parts/getPartParameterNames",
                reader: {
                    type: 'json'
                }
            }
        });

        /* Workaround to remember the value when loading */
        this.store.on("beforeload", function ()
        {
            this._oldValue = this.getValue();
        }, this);

        /* Set the old value when load is complete */
        this.store.on("load", function ()
        {
            this.setValue(this._oldValue);
        }, this);

        this.callParent();
        this.store.load();
    },
    setValue: function (val)
    {
        this._oldValue = val;
        this.callParent(arguments);
    }
});

