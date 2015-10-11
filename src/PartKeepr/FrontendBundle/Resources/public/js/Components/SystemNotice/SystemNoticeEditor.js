/**
 * Represents the system notice editor
 */
Ext.define('PartKeepr.SystemNoticeEditor', {
    extend: 'PartKeepr.Editor',
    alias: 'widget.SystemNoticeEditor',

    // Various style configurations
    saveText: i18n("Save System Notice"),
    defaults: {
        anchor: '100%',
        labelWidth: 110
    },
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    enableButtons: false,

    /**
     * Initializes the component
     */
    initComponent: function ()
    {

        this.acknowledgeButton = Ext.create("Ext.button.Button", {
            text: i18n("Acknowledge Notice"),
            iconCls: 'web-icon accept'
        });

        this.acknowledgeButton.on("click", this.onAcknowledgeClick, this);

        this.bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
            enableOverflow: true,
            margin: '10px',
            defaults: {minWidth: 100},
            dock: 'bottom',
            ui: 'footer',
            items: [this.acknowledgeButton]
        });

        this.dockedItems = new Array(this.bottomToolbar);

        this.items = [
            {
                xtype: 'textfield',
                readOnly: true,
                name: 'title',
                fieldLabel: i18n("Title")
            }, {
                xtype: 'textarea',
                readOnly: true,
                flex: 1,
                name: 'description',
                fieldLabel: i18n("Description")
            }, {
                xtype: 'datefield',
                readOnly: true,
                hideTrigger: true,
                name: 'date',
                fieldLabel: i18n("Date")
            }
        ];

        this.callParent();
    },
    onAcknowledgeClick: function ()
    {
        this.record.callPutAction("acknowledge", [], Ext.bind(this.onAcknowledged, this));
    },
    onAcknowledged: function ()
    {
        this.fireEvent("editorClose", this);
        this.store.load();
    }
});
