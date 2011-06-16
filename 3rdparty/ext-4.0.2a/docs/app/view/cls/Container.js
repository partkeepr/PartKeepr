/**
 * The class documentation page. Consists of the header (class name) and tab panel.
 * TODO: Add framework version
 */
Ext.define('Docs.view.cls.Container', {
    extend: 'Ext.container.Container',
    alias: 'widget.classcontainer',
    requires: [
        'Docs.view.cls.Header',
        'Docs.view.cls.TabPanel'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        this.items = [
            Ext.create('Docs.view.cls.Header'),
            Ext.create('Docs.view.cls.TabPanel', {
                flex: 1
            })
        ];
        this.callParent(arguments);
    }
});
