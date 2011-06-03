/**
 * @class Ext.app.PortalPanel
 * @extends Ext.Panel
 * A {@link Ext.Panel Panel} class used for providing drag-drop-enabled portal layouts.
 */
Ext.define('Ext.app.PortalPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.portalpanel',
    requires: [
        'Ext.layout.component.Body'
    ],

    cls: 'x-portal',
    bodyCls: 'x-portal-body',
    defaultType: 'portalcolumn',
    componentLayout: 'body',
    autoScroll: true,

    initComponent : function() {
        var me = this;

        // Implement a Container beforeLayout call from the layout to this Container
        this.layout = {
            type : 'column'
        };
        this.callParent();

        this.addEvents({
            validatedrop: true,
            beforedragover: true,
            dragover: true,
            beforedrop: true,
            drop: true
        });
        this.on('drop', this.doLayout, this);
    },

    // Set columnWidth, and set first and last column classes to allow exact CSS targeting.
    beforeLayout: function() {
        var items = this.layout.getLayoutItems(),
            len = items.length,
            i = 0,
            item;

        for (; i < len; i++) {
            item = items[i];
            item.columnWidth = 1 / len;
            item.removeCls(['x-portal-column-first', 'x-portal-column-last']);
        }
        items[0].addCls('x-portal-column-first');
        items[len - 1].addCls('x-portal-column-last');
        return this.callParent(arguments);
    },

    // private
    initEvents : function(){
        this.callParent();
        this.dd = Ext.create('Ext.app.PortalDropZone', this, this.dropConfig);
    },

    // private
    beforeDestroy : function() {
        if (this.dd) {
            this.dd.unreg();
        }
        Ext.app.PortalPanel.superclass.beforeDestroy.call(this);
    }
});
