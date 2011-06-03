/**
 * @class Ext.toolbar.Spacer
 * @extends Ext.toolbar.Item
 * A simple element that adds extra horizontal space between items in a toolbar.
 * By default a 2px wide space is added via css specification:
 *
 *     .x-toolbar .x-toolbar-spacer {
 *         width:2px;
 *     }
 *
 * ## Example
 *
 * {@img Ext.toolbar.Spacer/Ext.toolbar.Spacer.png Toolbar Spacer}
 *
 *     Ext.create('Ext.panel.Panel', {
 *         title: 'Toolbar Spacer Example',
 *         width: 300,
 *         height: 200,
 *         tbar : [
 *             'Item 1',
 *             {xtype: 'tbspacer'}, // or ' '
 *             'Item 2',
 *             // space width is also configurable via javascript
 *             {xtype: 'tbspacer', width: 50}, // add a 50px space
 *             'Item 3'
 *         ],
 *         renderTo: Ext.getBody()
 *     });   
 *
 * @constructor
 * Creates a new Spacer
 * @xtype tbspacer
 */
Ext.define('Ext.toolbar.Spacer', {
    extend: 'Ext.Component',
    alias: 'widget.tbspacer',
    alternateClassName: 'Ext.Toolbar.Spacer',
    baseCls: Ext.baseCSSPrefix + 'toolbar-spacer',
    focusable: false
});