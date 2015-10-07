/**
 * Provides a simple panel where tests can be displayed including their status.
 */
Ext.define('PartKeeprSetup.TestResultPanel', {
    extend: 'Ext.grid.Panel',

    hideHeaders: true,

    store: {
        fields: [
            {
                name: 'name',
                type: 'string'
            }, {
                name: 'success',
                type: 'boolean'

            }, {
                name: 'message',
                type: 'string'
            }, {
                name: 'errors',
                type: 'string'
            }, {
                name: 'waiting',
                type: 'boolean'
            }
        ]
    },
    columns: [
        {
            flex: 1,
            dataIndex: 'name'
        }, {
            width: 30,
            dataIndex: 'success',
            renderer: function (val, metaData, record)
            {
                if (record.get("waiting")) {
                    return '<span title="Waiting" style="vertical-align: top;" class="web-icon cog"></span>';
                }

                if (val) {
                    return '<span title="OK" style="vertical-align: top;" class="web-icon accept"></span>';
                } else {
                    return '<span title="Error" style="vertical-align: top;" class="web-icon cancel"></span>';
                }
            }
        }, {
            flex: 2,
            dataIndex: 'message'
        }, {
            flex: 0.5,
            xtype: 'widgetcolumn',
            dataIndex: 'success',
            widget: {
                hidden: true,
                xtype: 'button',
                defaultBindProperty: "hidden",
                text: "Show details",
                handler: function (widgetColumn)
                {
                    var record = widgetColumn.getWidgetRecord();
                    Ext.Msg.alert("Error Details", record.get("errors"));
                }
            }
        }
    ],
    /**
     * Initializes the component.
     */
    initComponent: function ()
    {
        this.callParent();
    },

    /**
     * Clears the result output panel.
     */
    clear: function ()
    {

        this.store.removeAll();
    },

    outputTestMessage: function (test)
    {
        this.store.add({
            name: test.message,
            success: true,
            waiting: true
        });
    },
    /**
     * Appends the specific test to the output panel,
     * and fires the error event if an error occured.
     *
     * @param test    PartKeeprSetup.AbstractTest
     */
    appendTestResult: function (test)
    {
        var rec = this.store.findRecord("name", test.message);

        if (rec !== null) {
            rec.set("success", test.success);
            rec.set("message", test.resultMessage);
            rec.set("errors", test.errors.join("<br/>"));
            rec.set("waiting", false);
        }

        rec.commit();

        if (!test.success) {
            this.fireEvent("test-error");
        }
    }
});
