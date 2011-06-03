/**
 * @class Ext.toolbar.TextItem
 * @extends Ext.toolbar.Item
 *
 * A simple class that renders text directly into a toolbar.
 *
 * ## Example usage
 *
 * {@img Ext.toolbar.TextItem/Ext.toolbar.TextItem.png TextItem component}
 *
 *      Ext.create('Ext.panel.Panel', {
 *          title: 'Panel with TextItem',
 *          width: 300,
 *          height: 200,
 *          tbar: [
 *              {xtype: 'tbtext', text: 'Sample TextItem'}
 *          ],
 *          renderTo: Ext.getBody()
 *      });
 *
 * @constructor
 * Creates a new TextItem
 * @param {Object} text A text string, or a config object containing a <tt>text</tt> property
 * @xtype tbtext
 */
Ext.define('Ext.toolbar.TextItem', {
    extend: 'Ext.toolbar.Item',
    requires: ['Ext.XTemplate'],
    alias: 'widget.tbtext',
    alternateClassName: 'Ext.Toolbar.TextItem',
    
    /**
     * @cfg {String} text The text to be used as innerHTML (html tags are accepted)
     */
    text: '',
    
    renderTpl: '{text}',
    //
    baseCls: Ext.baseCSSPrefix + 'toolbar-text',
    
    onRender : function() {
        Ext.apply(this.renderData, {
            text: this.text
        });
        this.callParent(arguments);
    },

    /**
     * Updates this item's text, setting the text to be used as innerHTML.
     * @param {String} t The text to display (html accepted).
     */
    setText : function(t) {
        if (this.rendered) {
            this.el.update(t);
            this.ownerCt.doLayout(); // In case an empty text item (centered at zero height) receives new text.
        } else {
            this.text = t;
        }
    }
});