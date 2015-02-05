/**
 * Licensed under GNU LESSER GENERAL PUBLIC LICENSE Version 3
 *
 * @author Thorsten Suckow-Homberg <ts@siteartwork.de>
 * @url http://www.siteartwork.de/cardlayout
 */

/**
 * @class Ext.ux.layout.CardLayout
 * @extends Ext.layout.CardLayout
 *
 * A specific {@link Ext.layout.CardLayout} that only sets the active item
 * if the 'beforehide'-method of the card to hide did not return false (in this case,
 * components usually won't be hidden).
 * The original implementation of {@link Ext.layout.CardLayout} does not take
 * the return value of the 'beforehide'-method into account.
 *
 * @constructor
 * @param {Object} config The config object
 */
Ext.define('Ext.ux.wizard.CardLayout', {
	
	extend: 'Ext.layout.container.Card',

    /**
     * Sets the active (visible) item in the layout.
     *
     * If the currently visible item is still visible after calling the 'hide()
     * method on it, this implementation assumes that the 'beforehide'-event returned
     * false, thus not the item was not allowed to be hidden. The active item will then
     * equal to the item that was active, before this method was called.
     *
     * @param {String/Number} item The string component id or numeric index of the item to activate
     */
    setActiveItem : function(item){
        item = this.container.getComponent(item);
        if(this.activeItem != item){
            if(this.activeItem){
                this.activeItem.hide();
            }
            // check if the beforehide method allowed to
            // hide the current item
            if (this.activeItem && !this.activeItem.hidden) {
                return;
            }
            var layout = item.doLayout && (this.layoutOnCardChange || !item.rendered);
            this.activeItem = item;
            item.show();
            this.layout();
            if(layout){
                item.doLayout();
            }
        }
    }

});