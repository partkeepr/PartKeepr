/**
 * @class Ext.layout.component.Auto
 * @extends Ext.layout.component.Component
 * @private
 *
 * <p>The AutoLayout is the default layout manager delegated by {@link Ext.Component} to
 * render any child Elements when no <tt>{@link Ext.Component#layout layout}</tt> is configured.</p>
 */

Ext.define('Ext.layout.component.Auto', {

    /* Begin Definitions */

    alias: 'layout.autocomponent',

    extend: 'Ext.layout.component.Component',

    /* End Definitions */

    type: 'autocomponent',

    onLayout : function(width, height) {
        this.setTargetSize(width, height);
    }
});