Ext.define('PartKeepr.BatchJobGrid', {
    extend: 'PartKeepr.EditorGrid',
    alias: 'widget.BatchJobGrid',
    columns: [
        {header: i18n("Batch Job"), dataIndex: 'name', flex: 1}
    ],
    addButtonText: i18n("Add Batch Job"),
    addButtonIconCls: 'fugue-icon task--plus',
    deleteButtonText: i18n("Delete Batch Job"),
    deleteButtonIconCls: 'fugue-icon task--minus',
    automaticPageSize: true,
    initComponent: function ()
    {
        this.callParent();

        this.executeBatchJob = Ext.create("Ext.button.Button", {
            iconCls: 'fugue-icon task--arrow',
            tooltip: i18n("Execute Batch Job"),
            handler: this.onExecuteBatchJob,
            disabled: true,
            scope: this
        });
        this.topToolbar.insert(2, {xtype: 'tbseparator'});
        this.topToolbar.insert(3, this.executeBatchJob);
    },
    /**
     * Called when an item was selected. Enables/disables the delete button.
     */
    _updateDeleteButton: function ()
    {
        this.callParent(arguments);

        /* Right now, we support delete on a single record only */
        if (this.getSelectionModel().getCount() == 1) {
            this.executeBatchJob.enable();
        } else {
            this.executeBatchJob.disable();
        }
    },
    onExecuteBatchJob: function ()
    {
        var selection = this.getSelectionModel().getSelection();

        var j = Ext.create("PartKeepr.Components.BatchJob.BatchJobExecutionWindow", {
            batchJob: selection[0]
        });
        j.show();
    }
});
