/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * This layout manages multiple child Components, each is fit to the Container, where only a single child Component
 * can be visible at any given time.  This layout style is most commonly used for wizards, tab implementations, etc.
 * This class is intended to be extended or created via the layout:'card' {@link Ext.container.Container#layout} config,
 * and should generally not need to be created directly via the new keyword.
 *
 * The CardLayout's focal method is {@link #setActiveItem}.  Since only one panel is displayed at a time,
 * the only way to move from one Component to the next is by calling setActiveItem, passing the id or index of
 * the next panel to display.  The layout itself does not provide a user interface for handling this navigation,
 * so that functionality must be provided by the developer.
 *
 * Containers that are configured with a card layout will have a method setActiveItem dynamically added to it.
 *
 *     var p = new Ext.panel.Panel({
 *         fullscreen: true,
 *         layout: 'card',
 *         items: [{
 *             html: 'Card 1'
 *         },{
 *             html: 'Card 2'
 *         }]
 *     });
 *     p.setActiveItem(1);
 *
 */
Ext.define('Ext.layout.container.AbstractCard', {

    /* Begin Definitions */

    extend: 'Ext.layout.container.Fit',

    /* End Definitions */

    type: 'card',

    sizeAllCards: false,

    hideInactive: true,

    /**
     * @cfg {Boolean} deferredRender
     * True to render each contained item at the time it becomes active, false to render all contained items
     * as soon as the layout is rendered (defaults to false).  If there is a significant amount of content or
     * a lot of heavy controls being rendered into panels that are not displayed by default, setting this to
     * true might improve performance.
     */
    deferredRender : false,

    beforeLayout: function() {
        var me = this;
        me.activeItem = me.getActiveItem();
        if (me.activeItem && me.deferredRender) {
            me.renderItems([me.activeItem], me.getRenderTarget());
            return true;
        }
        else {
            return this.callParent(arguments);
        }
    },

    onLayout: function() {
        var me = this,
            activeItem = me.activeItem,
            items = me.getVisibleItems(),
            ln = items.length,
            targetBox = me.getTargetBox(),
            i, item;

        for (i = 0; i < ln; i++) {
            item = items[i];
            me.setItemBox(item, targetBox);
        }

        if (!me.firstActivated && activeItem) {
            if (activeItem.fireEvent('beforeactivate', activeItem) !== false) {
                activeItem.fireEvent('activate', activeItem);
            }
            me.firstActivated = true;
        }
    },

    isValidParent : function(item, target, position) {
        // Note: Card layout does not care about order within the target because only one is ever visible.
        // We only care whether the item is a direct child of the target.
        var itemEl = item.el ? item.el.dom : Ext.getDom(item);
        return (itemEl && itemEl.parentNode === (target.dom || target)) || false;
    },

    /**
     * Return the active (visible) component in the layout.
     * @returns {Ext.Component}
     */
    getActiveItem: function() {
        var me = this;
        if (!me.activeItem && me.owner) {
            me.activeItem = me.parseActiveItem(me.owner.activeItem);
        }

        if (me.activeItem && me.owner.items.indexOf(me.activeItem) != -1) {
            return me.activeItem;
        }

        return null;
    },

    // @private
    parseActiveItem: function(item) {
        if (item && item.isComponent) {
            return item;
        }
        else if (typeof item == 'number' || item === undefined) {
            return this.getLayoutItems()[item || 0];
        }
        else {
            return this.owner.getComponent(item);
        }
    },

    // @private
    configureItem: function(item, position) {
        this.callParent([item, position]);
        if (this.hideInactive && this.activeItem !== item) {
            item.hide();
        }
        else {
            item.show();
        }
    },

    onRemove: function(component) {
        if (component === this.activeItem) {
            this.activeItem = null;
            if (this.owner.items.getCount() === 0) {
                this.firstActivated = false;
            }
        }
    },

    // @private
    getAnimation: function(newCard, owner) {
        var newAnim = (newCard || {}).cardSwitchAnimation;
        if (newAnim === false) {
            return false;
        }
        return newAnim || owner.cardSwitchAnimation;
    },

    /**
     * Return the active (visible) component in the layout to the next card
     * @returns {Ext.Component} The next component or false.
     */
    getNext: function() {
        //NOTE: Removed the JSDoc for this function's arguments because it is not actually supported in 4.0. This 
        //should come back in 4.1
        var wrap = arguments[0];
        var items = this.getLayoutItems(),
            index = Ext.Array.indexOf(items, this.activeItem);
        return items[index + 1] || (wrap ? items[0] : false);
    },

    /**
     * Sets the active (visible) component in the layout to the next card
     * @return {Ext.Component} the activated component or false when nothing activated.
     */
    next: function() {
        //NOTE: Removed the JSDoc for this function's arguments because it is not actually supported in 4.0. This 
        //should come back in 4.1
        var anim = arguments[0], wrap = arguments[1];
        return this.setActiveItem(this.getNext(wrap), anim);
    },

    /**
     * Return the active (visible) component in the layout to the previous card
     * @returns {Ext.Component} The previous component or false.
     */
    getPrev: function() {
        //NOTE: Removed the JSDoc for this function's arguments because it is not actually supported in 4.0. This 
        //should come back in 4.1
        var wrap = arguments[0];
        var items = this.getLayoutItems(),
            index = Ext.Array.indexOf(items, this.activeItem);
        return items[index - 1] || (wrap ? items[items.length - 1] : false);
    },

    /**
     * Sets the active (visible) component in the layout to the previous card
     * @return {Ext.Component} the activated component or false when nothing activated.
     */
    prev: function() {
        //NOTE: Removed the JSDoc for this function's arguments because it is not actually supported in 4.0. This 
        //should come back in 4.1
        var anim = arguments[0], wrap = arguments[1];
        return this.setActiveItem(this.getPrev(wrap), anim);
    }
});

