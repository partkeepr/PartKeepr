/**
 * Represents an exception window.
 */
Ext.define('PartKeepr.ExceptionWindow', {
    extend: 'Ext.window.Window',
    resizable: true,
    closeAction: 'hide',
    layout: 'fit',
    width: 500,
    autoHeight: true,
    maxHeight: 800,
    constrain: true,
    cls: Ext.baseCSSPrefix + 'message-box',

    initComponent: function ()
    {
        this.iconComponent = Ext.create('Ext.Component', {
            baseCls: Ext.baseCSSPrefix + 'message-box-icon' + " " + Ext.baseCSSPrefix + 'message-box-error'
        });

        this.messageDiv = Ext.create('Ext.Component', {
            autoEl: {tag: 'div'},
            cls: 'ext-mb-text',
            height: 20
        });

        this.detailDiv = Ext.create('Ext.Component', {
            flex: 1,
            autoEl: {tag: 'div'},
            cls: 'ext-mb-text',
            style: 'margin-top: 20px;overflow: auto;'
        });

        this.backtraceDetails = Ext.create('Ext.tree.Panel', {
            rootVisible: false
        });

        this.requestDetails = Ext.create('Ext.form.field.TextArea', {
            fieldLabel: i18n("Request"),
            height: 65,
            minHeight: 65,
            readOnly: true
        });

        this.responseDetails = Ext.create('Ext.form.field.TextArea', {
            fieldLabel: i18n("Response"),
            height: 65,
            minHeight: 65,
            readOnly: true
        });

        this.basicTab = Ext.create("Ext.panel.Panel", {
            style: 'padding: 10px;',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            title: i18n("Basic"),
            items: [
                this.iconComponent,
                {
                    border: false,
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    items: [this.messageDiv, this.detailDiv]
                }
            ]
        });

        this.detailTab = Ext.create("Ext.form.Panel", {
            style: 'padding: 10px;',
            height: 300,
            width: 500,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            title: i18n("Detail"),
            items: [
                this.requestDetails,
                this.responseDetails,
                {
                    xtype: 'fieldcontainer',
                    layout: "fit",
                    fieldLabel: i18n("Backtrace"),
                    flex: 1,
                    minHeight: 65,
                    readOnly: true,
                    items: this.backtraceDetails
                }
            ]

        });

        this.fullReport = Ext.create("Ext.form.field.TextArea", {
            readOnly: true,
            height: 300
        });

        this.backtraceTab = Ext.create("Ext.panel.Panel", {
            style: 'padding: 10px',
            layout: 'fit',
            anchor: '100% 100%',
            title: i18n("Full Report"),
            items: [this.fullReport]
        });

        this.topContainer = Ext.create("Ext.tab.Panel", {
            layout: "fit",
            items: [this.basicTab, this.detailTab, this.backtraceTab]
        });

        this.items = this.topContainer;

        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                defaults: {minWidth: 80},
                layout: {
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button', text: 'OK', handler: Ext.bind(function ()
                    {
                        this.hide();
                    }, this)
                    }
                ]
            }
        ];

        this.callParent();

    },
    /**
     * Private. Updates the exception dialog with the exception data.
     *
     * @see showException
     *
     * @param {PartKeepr.data.HydraException} exception The exception data
     * @param {Object} response The response data
     */
    _showException: function (exception, response)
    {
        var separator = "==================================";

        this.messageDiv.update('<strong>' + exception.getTitle() + '</strong>');
        this.setTitle(exception.getTitle());

        var fullDetails = exception.getTitle();

        if (exception.getDescription()) {
            fullDetails += "\n\n" + i18n("Details") + "\n" + separator + "\n";
            fullDetails += exception.getDescription();

            this.detailDiv.update(exception.getDescription());
        } else {
            this.detailDiv.update("");
        }


        if (exception.getTrace()) {
            var traceData = this.convertTraceToTree(exception.getTrace());

            var store = Ext.create("Ext.data.TreeStore", {
                root: traceData
            });

            this.backtraceDetails.setStore(store);
        }

        if (!response.request) {
            response.request = {};
        }

        var requestData;

        if (response.request && response.request.options && response.request.options.method && response.request.options.url) {
            requestData = response.request.options.method + " " + response.request.options.url;
        } else {
            requestData = "";
        }

        if (response.request.jsonData) {
            requestData += "\n\n" + response.request.jsonData;
        }

        fullDetails += "\n\n" + i18n("Request") + "\n" + separator + "\n";
        fullDetails += requestData;

        this.requestDetails.setValue(nl2br(requestData));

        fullDetails += "\n\n" + i18n("Response Status Code") + "\n" + separator + "\n";
        fullDetails += response.status;

        fullDetails += "\n\n" + i18n("Response") + "\n" + separator + "\n";
        fullDetails += response.responseText;

        this.responseDetails.setValue(nl2br(response.responseText));

        fullDetails += "\n\n" + i18n("Server Configuration") + "\n" + separator + "\n";

        for (var j in window.parameters) {
            fullDetails += j + ": " + window.parameters[j] + "\n";
        }

        this.fullReport.setValue(fullDetails);

        this.show();
        this.topContainer.layout.setActiveItem(0);

        var keyMap = this.getKeyMap();
        keyMap.on(Ext.event.Event.ENTER, function ()
        {
            this.hide();
        }, this);
    },
    /**
     * Recursively converts a trace to an ExtJS tree
     *
     * @param {Object} node The current node to process
     * @param {String} prefixText A text to prefix the data with. If undefined, uses the type of the given node
     * @return {Object} An object comptable with {Ext.data.NodeInterface}
     */
    convertTraceToTree: function (node, prefixText)
    {
        if (!Ext.isDefined(prefixText)) {
            prefixText = typeof node;
        }

        var treeNode = {
            text: prefixText
        };


        if (Ext.isArray(node)) {
            treeNode.children = [];
            for (var j = 0; j < node.length; j++) {
                treeNode.children.push(this.convertTraceToTree(node[j], j));
            }

            if (treeNode.children.length === 0) {
                treeNode.leaf = true;
            }
            return treeNode;
        }

        if (Ext.isObject(node)) {
            treeNode.children = [];

            for (var property in node) {
                treeNode.children.push(this.convertTraceToTree(node[property], property));
            }

            if (treeNode.children.length === 0) {
                treeNode.leaf = true;
            }

            return treeNode;
        }

        treeNode.text += ": " + node;
        treeNode.leaf = true;

        return treeNode;
    },
    statics: {
        /**
         * Displays the exception window.
         *
         * @param {PartKeepr.data.HydraException} exception The exception object
         * @param {Object}                        response The response object
         */
        showException: function (response)
        {
            if (!PartKeepr.ExceptionWindow.activeInstance) {
                PartKeepr.ExceptionWindow.activeInstance = new PartKeepr.ExceptionWindow();
            }

            try {
                var data = Ext.decode(response.responseText);

                var exception = Ext.create("PartKeepr.data.HydraException", data);

                PartKeepr.ExceptionWindow.activeInstance._showException(exception, response);
            } catch (ex) {
                var exception = Ext.create("PartKeepr.data.HydraException", {
                    title: i18n("Critical Error"),
                    description: i18n("The server returned a response which we were not able to interpret.")
                });

                PartKeepr.ExceptionWindow.activeInstance._showException(exception, response);
            }
        }
    }
});
