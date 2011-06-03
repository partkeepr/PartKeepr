/**
 * @class Ext.layout.container.HBox
 * @extends Ext.layout.container.Box
 * <p>A layout that arranges items horizontally across a Container. This layout optionally divides available horizontal
 * space between child items containing a numeric <code>flex</code> configuration.</p>
 * This layout may also be used to set the heights of child items by configuring it with the {@link #align} option.
 * {@img Ext.layout.container.HBox/Ext.layout.container.HBox.png Ext.layout.container.HBox container layout}
 * Example usage:
    Ext.create('Ext.Panel', {
        width: 500,
        height: 300,
        title: "HBoxLayout Panel",
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        renderTo: document.body,
        items: [{
            xtype: 'panel',
            title: 'Inner Panel One',
            flex: 2
        },{
            xtype: 'panel',
            title: 'Inner Panel Two',
            flex: 1
        },{
            xtype: 'panel',
            title: 'Inner Panel Three',
            flex: 1
        }]
    });
 */
Ext.define('Ext.layout.container.HBox', {

    /* Begin Definitions */

    alias: ['layout.hbox'],
    extend: 'Ext.layout.container.Box',
    alternateClassName: 'Ext.layout.HBoxLayout',
    
    /* End Definitions */

    /**
     * @cfg {String} align
     * Controls how the child items of the container are aligned. Acceptable configuration values for this
     * property are:
     * <div class="mdetail-params"><ul>
     * <li><b><tt>top</tt></b> : <b>Default</b><div class="sub-desc">child items are aligned vertically
     * at the <b>top</b> of the container</div></li>
     * <li><b><tt>middle</tt></b> : <div class="sub-desc">child items are aligned vertically in the
     * <b>middle</b> of the container</div></li>
     * <li><b><tt>stretch</tt></b> : <div class="sub-desc">child items are stretched vertically to fill
     * the height of the container</div></li>
     * <li><b><tt>stretchmax</tt></b> : <div class="sub-desc">child items are stretched vertically to
     * the height of the largest item.</div></li>
     * </ul></div>
     */
    align: 'top', // top, middle, stretch, strechmax

    //@private
    alignCenteringString: 'middle',

    type : 'hbox',

    direction: 'horizontal',

    // When creating an argument list to setSize, use this order
    parallelSizeIndex: 0,
    perpendicularSizeIndex: 1,

    parallelPrefix: 'width',
    parallelPrefixCap: 'Width',
    parallelLT: 'l',
    parallelRB: 'r',
    parallelBefore: 'left',
    parallelBeforeCap: 'Left',
    parallelAfter: 'right',
    parallelPosition: 'x',

    perpendicularPrefix: 'height',
    perpendicularPrefixCap: 'Height',
    perpendicularLT: 't',
    perpendicularRB: 'b',
    perpendicularLeftTop: 'top',
    perpendicularRightBottom: 'bottom',
    perpendicularPosition: 'y'
});