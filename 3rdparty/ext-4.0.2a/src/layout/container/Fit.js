/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.layout.container.Fit
 * @extends Ext.layout.container.AbstractFit
 * <p>This is a base class for layouts that contain <b>a single item</b> that automatically expands to fill the layout's
 * container.  This class is intended to be extended or created via the <tt>layout:'fit'</tt> {@link Ext.container.Container#layout}
 * config, and should generally not need to be created directly via the new keyword.</p>
 * <p>FitLayout does not have any direct config options (other than inherited ones).  To fit a panel to a container
 * using FitLayout, simply set layout:'fit' on the container and add a single panel to it.  If the container has
 * multiple panels, only the first one will be displayed.  
 * {@img Ext.layout.container.Fit/Ext.layout.container.Fit.png Ext.layout.container.Fit container layout}
 * Example usage:</p>
 * <pre><code>
    Ext.create('Ext.panel.Panel', {
        title: 'Fit Layout',
        width: 300,
        height: 150,
        layout:'fit',
        items: {
            title: 'Inner Panel',
            html: 'This is the inner panel content',
            bodyPadding: 20,
            border: false
        },
        renderTo: Ext.getBody()
    });  
</code></pre>
 */
Ext.define('Ext.layout.container.Fit', {

    /* Begin Definitions */

    extend: 'Ext.layout.container.AbstractFit',
    alias: 'layout.fit',
    alternateClassName: 'Ext.layout.FitLayout',

    /* End Definitions */
   
    // @private
    onLayout : function() {
        var me = this;
        me.callParent();

        if (me.owner.items.length) {
            me.setItemBox(me.owner.items.get(0), me.getLayoutTargetSize());
        }
    },

    getTargetBox : function() {
        return this.getLayoutTargetSize();
    },

    setItemBox : function(item, box) {
        var me = this;
        if (item && box.height > 0) {
            if (!me.owner.isFixedWidth()) {
               box.width = undefined;
            }
            if (!me.owner.isFixedHeight()) {
               box.height = undefined;
            }
            me.setItemSize(item, box.width, box.height);
        }
    },

    configureItem: function(item) {

        // Card layout only controls dimensions which IT has controlled.
        // That calculation has to be determined at run time by examining the ownerCt's isFixedWidth()/isFixedHeight() methods
        item.layoutManagedHeight = 0;
        item.layoutManagedWidth = 0;

        this.callParent(arguments);
    }
});
