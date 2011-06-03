/**
 * @class Ext.grid.plugin.HeaderReorderer
 * @extends Ext.util.Observable
 * @private
 */
Ext.define('Ext.grid.plugin.HeaderReorderer', {
    extend: 'Ext.util.Observable',
    requires: ['Ext.grid.header.DragZone', 'Ext.grid.header.DropZone'],
    alias: 'plugin.gridheaderreorderer',

    init: function(headerCt) {
        this.headerCt = headerCt;
        headerCt.on('render', this.onHeaderCtRender, this);
    },

    /**
     * @private
     * AbstractComponent calls destroy on all its plugins at destroy time.
     */
    destroy: function() {
        Ext.destroy(this.dragZone, this.dropZone);
    },

    onHeaderCtRender: function() {
        this.dragZone = Ext.create('Ext.grid.header.DragZone', this.headerCt);
        this.dropZone = Ext.create('Ext.grid.header.DropZone', this.headerCt);
        if (this.disabled) {
            this.dragZone.disable();
        }
    },
    
    enable: function() {
        this.disabled = false;
        if (this.dragZone) {
            this.dragZone.enable();
        }
    },
    
    disable: function() {
        this.disabled = true;
        if (this.dragZone) {
            this.dragZone.disable();
        }
    }
});