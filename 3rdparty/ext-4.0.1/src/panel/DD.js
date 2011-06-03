// private - DD implementation for Panels
Ext.define('Ext.panel.DD', {
    extend: 'Ext.dd.DragSource',
    requires: ['Ext.panel.Proxy'],

    constructor : function(panel, cfg){
        this.panel = panel;
        this.dragData = {panel: panel};
        this.proxy = Ext.create('Ext.panel.Proxy', panel, cfg);

        this.callParent([panel.el, cfg]);

        Ext.defer(function() {
            var header = panel.header,
                el = panel.body;

            if(header){
                this.setHandleElId(header.id);
                el = header.el;
            }
            el.setStyle('cursor', 'move');
            this.scroll = false;
        }, 200, this);
    },

    showFrame: Ext.emptyFn,
    startDrag: Ext.emptyFn,
    b4StartDrag: function(x, y) {
        this.proxy.show();
    },
    b4MouseDown: function(e) {
        var x = e.getPageX(),
            y = e.getPageY();
        this.autoOffset(x, y);
    },
    onInitDrag : function(x, y){
        this.onStartDrag(x, y);
        return true;
    },
    createFrame : Ext.emptyFn,
    getDragEl : function(e){
        return this.proxy.ghost.el.dom;
    },
    endDrag : function(e){
        this.proxy.hide();
        this.panel.saveState();
    },

    autoOffset : function(x, y) {
        x -= this.startPageX;
        y -= this.startPageY;
        this.setDelta(x, y);
    }
});
