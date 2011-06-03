/**
 * @class Ext.Shadow
 * Simple class that can provide a shadow effect for any element.  Note that the element MUST be absolutely positioned,
 * and the shadow does not provide any shimming.  This should be used only in simple cases -- for more advanced
 * functionality that can also provide the same shadow effect, see the {@link Ext.Layer} class.
 * @constructor
 * Create a new Shadow
 * @param {Object} config The config object
 */
Ext.define('Ext.Shadow', {
    requires: ['Ext.ShadowPool'],

    constructor: function(config) {
        Ext.apply(this, config);
        if (typeof this.mode != "string") {
            this.mode = this.defaultMode;
        }
        var offset = this.offset,
            adjusts = {
                h: 0
            },
            rad = Math.floor(this.offset / 2);

        switch (this.mode.toLowerCase()) {
            // all this hideous nonsense calculates the various offsets for shadows
            case "drop":
                if (Ext.supports.CSS3BoxShadow) {
                    adjusts.w = adjusts.h = -offset;
                    adjusts.l = adjusts.t = offset;
                } else {
                    adjusts.w = 0;
                    adjusts.l = adjusts.t = offset;
                    adjusts.t -= 1;
                    if (Ext.isIE) {
                        adjusts.l -= offset + rad;
                        adjusts.t -= offset + rad;
                        adjusts.w -= rad;
                        adjusts.h -= rad;
                        adjusts.t += 1;
                    }
                }
                break;
            case "sides":
                if (Ext.supports.CSS3BoxShadow) {
                    adjusts.h -= offset;
                    adjusts.t = offset;
                    adjusts.l = adjusts.w = 0;
                } else {
                    adjusts.w = (offset * 2);
                    adjusts.l = -offset;
                    adjusts.t = offset - 1;
                    if (Ext.isIE) {
                        adjusts.l -= (offset - rad);
                        adjusts.t -= offset + rad;
                        adjusts.l += 1;
                        adjusts.w -= (offset - rad) * 2;
                        adjusts.w -= rad + 1;
                        adjusts.h -= 1;
                    }
                }
                break;
            case "frame":
                if (Ext.supports.CSS3BoxShadow) {
                    adjusts.l = adjusts.w = adjusts.t = 0;
                } else {
                    adjusts.w = adjusts.h = (offset * 2);
                    adjusts.l = adjusts.t = -offset;
                    adjusts.t += 1;
                    adjusts.h -= 2;
                    if (Ext.isIE) {
                        adjusts.l -= (offset - rad);
                        adjusts.t -= (offset - rad);
                        adjusts.l += 1;
                        adjusts.w -= (offset + rad + 1);
                        adjusts.h -= (offset + rad);
                        adjusts.h += 1;
                    }
                    break;
                }
        }
        this.adjusts = adjusts;
    },

    /**
     * @cfg {String} mode
     * The shadow display mode.  Supports the following options:<div class="mdetail-params"><ul>
     * <li><b><tt>sides</tt></b> : Shadow displays on both sides and bottom only</li>
     * <li><b><tt>frame</tt></b> : Shadow displays equally on all four sides</li>
     * <li><b><tt>drop</tt></b> : Traditional bottom-right drop shadow</li>
     * </ul></div>
     */
    /**
     * @cfg {String} offset
     * The number of pixels to offset the shadow from the element (defaults to <tt>4</tt>)
     */
    offset: 4,

    // private
    defaultMode: "drop",

    /**
     * Displays the shadow under the target element
     * @param {Mixed} targetEl The id or element under which the shadow should display
     */
    show: function(target) {
        target = Ext.get(target);
        if (!this.el) {
            this.el = Ext.ShadowPool.pull();
            if (this.el.dom.nextSibling != target.dom) {
                this.el.insertBefore(target);
            }
        }
        this.el.setStyle("z-index", this.zIndex || parseInt(target.getStyle("z-index"), 10) - 1);
        if (Ext.isIE && !Ext.supports.CSS3BoxShadow) {
            this.el.dom.style.filter = "progid:DXImageTransform.Microsoft.alpha(opacity=50) progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (this.offset) + ")";
        }
        this.realign(
            target.getLeft(true),
            target.getTop(true),
            target.getWidth(),
            target.getHeight()
        );
        this.el.dom.style.display = "block";
    },

    /**
     * Returns true if the shadow is visible, else false
     */
    isVisible: function() {
        return this.el ? true: false;
    },

    /**
     * Direct alignment when values are already available. Show must be called at least once before
     * calling this method to ensure it is initialized.
     * @param {Number} left The target element left position
     * @param {Number} top The target element top position
     * @param {Number} width The target element width
     * @param {Number} height The target element height
     */
    realign: function(l, t, targetWidth, targetHeight) {
        if (!this.el) {
            return;
        }
        var adjusts = this.adjusts,
            d = this.el.dom,
            targetStyle = d.style,
            shadowWidth,
            shadowHeight,
            cn,
            sww, 
            sws, 
            shs;

        targetStyle.left = (l + adjusts.l) + "px";
        targetStyle.top = (t + adjusts.t) + "px";
        shadowWidth = Math.max(targetWidth + adjusts.w, 0);
        shadowHeight = Math.max(targetHeight + adjusts.h, 0);
        sws = shadowWidth + "px";
        shs = shadowHeight + "px";
        if (targetStyle.width != sws || targetStyle.height != shs) {
            targetStyle.width = sws;
            targetStyle.height = shs;
            if (Ext.supports.CSS3BoxShadow) {
                targetStyle.boxShadow = '0 0 ' + this.offset + 'px 0 #888';
            } else {

                // Adjust the 9 point framed element to poke out on the required sides
                if (!Ext.isIE) {
                    cn = d.childNodes;
                    sww = Math.max(0, (shadowWidth - 12)) + "px";
                    cn[0].childNodes[1].style.width = sww;
                    cn[1].childNodes[1].style.width = sww;
                    cn[2].childNodes[1].style.width = sww;
                    cn[1].style.height = Math.max(0, (shadowHeight - 12)) + "px";
                }
            }
        }
    },

    /**
     * Hides this shadow
     */
    hide: function() {
        if (this.el) {
            this.el.dom.style.display = "none";
            Ext.ShadowPool.push(this.el);
            delete this.el;
        }
    },

    /**
     * Adjust the z-index of this shadow
     * @param {Number} zindex The new z-index
     */
    setZIndex: function(z) {
        this.zIndex = z;
        if (this.el) {
            this.el.setStyle("z-index", z);
        }
    }
});