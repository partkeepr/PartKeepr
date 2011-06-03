/**
 * @class Ext.grid.CellEditor
 * @extends Ext.Editor
 * Internal utility class that provides default configuration for cell editing.
 * @ignore
 */
Ext.define('Ext.grid.CellEditor', {
    extend: 'Ext.Editor',
    constructor: function(config) {
        if (config.field) {
            config.field.monitorTab = false;
        }
        config.autoSize = {
            width: 'boundEl'
        };
        this.callParent(arguments);
    },
    
    /**
     * @private
     * Hide the grid cell when editor is shown.
     */
    onShow: function() {
        var first = this.boundEl.first();
        if (first) {
            first.hide();
        }
        this.callParent(arguments);
    },
    
    /**
     * @private
     * Show grid cell when editor is hidden.
     */
    onHide: function() {
        var first = this.boundEl.first();
        if (first) {
            first.show();
        }
        this.callParent(arguments);
    },
    
    /**
     * @private
     * Fix checkbox blur when it is clicked.
     */
    afterRender: function() {
        this.callParent(arguments);
        var field = this.field;
        if (field.isXType('checkboxfield')) {
            field.mon(field.inputEl, 'mousedown', this.onCheckBoxMouseDown, this);
            field.mon(field.inputEl, 'click', this.onCheckBoxClick, this);
        }
    },
    
    /**
     * @private
     * Because when checkbox is clicked it loses focus  completeEdit is bypassed.
     */
    onCheckBoxMouseDown: function() {
        this.completeEdit = Ext.emptyFn;
    },
    
    /**
     * @private
     * Restore checkbox focus and completeEdit method.
     */
    onCheckBoxClick: function() {
        delete this.completeEdit;
        this.field.focus(false, 10);
    },
    
    alignment: "tl-tl",
    hideEl : false,
    cls: Ext.baseCSSPrefix + "small-editor " + Ext.baseCSSPrefix + "grid-editor",
    shim: false,
    shadow: false
});