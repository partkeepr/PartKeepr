Ext.define('PartKeepr.PartMeasurementUnitGrid', {
    extend: 'PartKeepr.EditorGrid',
    alias: 'widget.PartMeasurementUnitGrid',
    columns: [
        {header: i18n("Part Measurement Unit"), dataIndex: 'name', flex: 1},
        {
            header: i18n("Default"), dataIndex: 'default', width: 60, renderer: function (val)
        {
            if (val === true) {
                return "✓";
            } else {
                return "";
            }
        }
        }
    ],
    addButtonText: i18n("Add Part Measurement Unit"),
    addButtonIcon: "bundles/brainbitsfugueicons/icons/fugue/16/ruler--plus.png",
    addButtonIconCls: '',
    deleteButtonText: i18n("Delete Part Measurement Unit"),
    deleteButtonIcon: "bundles/brainbitsfugueicons/icons/fugue/16/ruler--minus.png",
    deleteButtonIconCls: '',
    defaultButtonIcon: "bundles/brainbitsfugueicons/icons/fugue/16/ruler--pencil.png",
    automaticPageSize: true,
    initComponent: function ()
    {
        this.callParent();

        this.defaultButton = Ext.create("Ext.button.Button", {
            icon: this.defaultButtonIcon,
            tooltip: i18n('Mark Part Measurement Unit as Default'),
            disabled: true,
            handler: this.onDefaultClick,
            scope: this
        });

        this.getSelectionModel().on("deselect",
            Ext.bind(function (rsm, r, i)
            {
                this.defaultButton.disable();
            }, this));

        this.getSelectionModel().on("select",
            Ext.bind(function (rsm, r, i)
            {
                this.defaultButton.enable();
            }, this));
        this.topToolbar.insert(2, {xtype: 'tbseparator'});
        this.topToolbar.insert(3, this.defaultButton);
    },
    onDefaultClick: function ()
    {
        var r = this.getSelectionModel().getLastSelected();

        r.callPutAction("setDefault", {}, this.onDefaultHandler.bind(this));
    },
    onDefaultHandler: function ()
    {
        this.store.load();
    }
});
