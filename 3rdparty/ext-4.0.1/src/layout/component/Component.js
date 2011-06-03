/**
 * @class Ext.layout.component.Component
 * @extends Ext.layout.Layout
 * @private
 * <p>This class is intended to be extended or created via the <tt><b>{@link Ext.Component#componentLayout layout}</b></tt>
 * configuration property.  See <tt><b>{@link Ext.Component#componentLayout}</b></tt> for additional details.</p>
 */

Ext.define('Ext.layout.component.Component', {

    /* Begin Definitions */

    extend: 'Ext.layout.Layout',

    /* End Definitions */

    type: 'component',

    monitorChildren: true,

    initLayout : function() {
        var me = this,
            owner = me.owner,
            ownerEl = owner.el;

        if (!me.initialized) {
            if (owner.frameSize) {
                me.frameSize = owner.frameSize;
            }
            else {
                owner.frameSize = me.frameSize = {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }; 
            }
        }
        me.callParent(arguments);
    },

    beforeLayout : function(width, height, isSetSize, layoutOwner) {
        this.callParent(arguments);

        var me = this,
            owner = me.owner,
            ownerCt = owner.ownerCt,
            layout = owner.layout,
            isVisible = owner.isVisible(true),
            ownerElChild = owner.el.child,
            layoutCollection;

        /*
         * Do not layout calculatedSized components for fixedLayouts unless the ownerCt == layoutOwner
         * fixedLayouts means layouts which are never auto/auto in the sizing that comes from their ownerCt.
         * Currently 3 layouts MAY be auto/auto (Auto, Border, and Box)
         * The reason for not allowing component layouts is to stop component layouts from things such as Updater and
         * form Validation.
         */
        if (!isSetSize && !(Ext.isNumber(width) && Ext.isNumber(height)) && ownerCt && ownerCt.layout && ownerCt.layout.fixedLayout && ownerCt != layoutOwner) {
            me.doContainerLayout();
            return false;
        }

        // If an ownerCt is hidden, add my reference onto the layoutOnShow stack.  Set the needsLayout flag.
        // If the owner itself is a directly hidden floater, set the needsLayout object on that for when it is shown.
        if (!isVisible && (owner.hiddenAncestor || owner.floating)) {
            if (owner.hiddenAncestor) {
                layoutCollection = owner.hiddenAncestor.layoutOnShow;
                layoutCollection.remove(owner);
                layoutCollection.add(owner);
            }
            owner.needsLayout = {
                width: width,
                height: height,
                isSetSize: false
            };
        }

        if (isVisible && this.needsLayout(width, height)) {
            me.rawWidth = width;
            me.rawHeight = height;
            return owner.beforeComponentLayout(width, height, isSetSize, layoutOwner);
        }
        else {
            return false;
        }
    },

    /**
    * Check if the new size is different from the current size and only
    * trigger a layout if it is necessary.
    * @param {Mixed} width The new width to set.
    * @param {Mixed} height The new height to set.
    */
    needsLayout : function(width, height) {
        this.lastComponentSize = this.lastComponentSize || {
            width: -Infinity,
            height: -Infinity
        };
        return (this.childrenChanged || this.lastComponentSize.width !== width || this.lastComponentSize.height !== height);
    },

    /**
    * Set the size of any element supporting undefined, null, and values.
    * @param {Mixed} width The new width to set.
    * @param {Mixed} height The new height to set.
    */
    setElementSize: function(el, width, height) {
        if (width !== undefined && height !== undefined) {
            el.setSize(width, height);
        }
        else if (height !== undefined) {
            el.setHeight(height);
        }
        else if (width !== undefined) {
            el.setWidth(width);
        }
    },

    /**
     * Returns the owner component's resize element.
     * @return {Ext.core.Element}
     */
     getTarget : function() {
         return this.owner.el;
     },

    /**
     * <p>Returns the element into which rendering must take place. Defaults to the owner Component's encapsulating element.</p>
     * May be overridden in Component layout managers which implement an inner element.
     * @return {Ext.core.Element}
     */
    getRenderTarget : function() {
        return this.owner.el;
    },

    /**
    * Set the size of the target element.
    * @param {Mixed} width The new width to set.
    * @param {Mixed} height The new height to set.
    */
    setTargetSize : function(width, height) {
        var me = this;
        me.setElementSize(me.owner.el, width, height);

        if (me.owner.frameBody) {
            var targetInfo = me.getTargetInfo(),
                padding = targetInfo.padding,
                border = targetInfo.border,
                frameSize = me.frameSize;

            me.setElementSize(me.owner.frameBody,
                Ext.isNumber(width) ? (width - frameSize.left - frameSize.right - padding.left - padding.right - border.left - border.right) : width,
                Ext.isNumber(height) ? (height - frameSize.top - frameSize.bottom - padding.top - padding.bottom - border.top - border.bottom) : height
            );
        }

        me.autoSized = {
            width: !Ext.isNumber(width),
            height: !Ext.isNumber(height)
        };

        me.lastComponentSize = {
            width: width,
            height: height
        };
    },

    getTargetInfo : function() {
        if (!this.targetInfo) {
            var target = this.getTarget(),
                body = this.owner.getTargetEl();

            this.targetInfo = {
                padding: {
                    top: target.getPadding('t'),
                    right: target.getPadding('r'),
                    bottom: target.getPadding('b'),
                    left: target.getPadding('l')
                },
                border: {
                    top: target.getBorderWidth('t'),
                    right: target.getBorderWidth('r'),
                    bottom: target.getBorderWidth('b'),
                    left: target.getBorderWidth('l')
                },
                bodyMargin: {
                    top: body.getMargin('t'),
                    right: body.getMargin('r'),
                    bottom: body.getMargin('b'),
                    left: body.getMargin('l')
                } 
            };
        }
        return this.targetInfo;
    },

    // Start laying out UP the ownerCt's layout when flagged to do so.
    doOwnerCtLayouts: function() {
        var owner = this.owner,
            ownerCt = owner.ownerCt,
            ownerCtComponentLayout, ownerCtContainerLayout;

        if (!ownerCt) {
            return;
        }

        ownerCtComponentLayout = ownerCt.componentLayout;
        ownerCtContainerLayout = ownerCt.layout;

        if (!owner.floating && ownerCtComponentLayout && ownerCtComponentLayout.monitorChildren && !ownerCtComponentLayout.layoutBusy) {
            if (!ownerCt.suspendLayout && ownerCtContainerLayout && !ownerCtContainerLayout.layoutBusy) {
                // AutoContainer Layout and Dock with auto in some dimension
                if (ownerCtContainerLayout.bindToOwnerCtComponent === true) {
                    ownerCt.doComponentLayout();
                }
                // Box Layouts
                else if (ownerCtContainerLayout.bindToOwnerCtContainer === true) {
                    ownerCtContainerLayout.layout();
                }
            }
        }
    },

    doContainerLayout: function() {
        var me = this,
            owner = me.owner,
            ownerCt = owner.ownerCt,
            layout = owner.layout,
            ownerCtComponentLayout;

        // Run the container layout if it exists (layout for child items)
        // **Unless automatic laying out is suspended, or the layout is currently running**
        if (!owner.suspendLayout && layout && layout.isLayout && !layout.layoutBusy) {
            layout.layout();
        }

        // Tell the ownerCt that it's child has changed and can be re-layed by ignoring the lastComponentSize cache.
        if (ownerCt && ownerCt.componentLayout) {
            ownerCtComponentLayout = ownerCt.componentLayout;
            if (!owner.floating && ownerCtComponentLayout.monitorChildren && !ownerCtComponentLayout.layoutBusy) {
                ownerCtComponentLayout.childrenChanged = true;
            }
        }
    },

    afterLayout : function(width, height, isSetSize, layoutOwner) {
        this.doContainerLayout();
        this.owner.afterComponentLayout(width, height, isSetSize, layoutOwner);
    }
});
