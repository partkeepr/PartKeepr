/**
 * @class Ext.Layer
 * @extends Ext.core.Element
 * An extended {@link Ext.core.Element} object that supports a shadow and shim, constrain to viewport and
 * automatic maintaining of shadow/shim positions.
 * @cfg {Boolean} shim False to disable the iframe shim in browsers which need one (defaults to true)
 * @cfg {String/Boolean} shadow True to automatically create an {@link Ext.Shadow}, or a string indicating the
 * shadow's display {@link Ext.Shadow#mode}. False to disable the shadow. (defaults to false)
 * @cfg {Object} dh DomHelper object config to create element with (defaults to {tag: 'div', cls: 'x-layer'}).
 * @cfg {Boolean} constrain False to disable constrain to viewport (defaults to true)
 * @cfg {String} cls CSS class to add to the element
 * @cfg {Number} zindex Starting z-index (defaults to 11000)
 * @cfg {Number} shadowOffset Number of pixels to offset the shadow (defaults to 4)
 * @cfg {Boolean} useDisplay
 * Defaults to use css offsets to hide the Layer. Specify <tt>true</tt>
 * to use css style <tt>'display:none;'</tt> to hide the Layer.
 * @cfg {String} visibilityCls The CSS class name to add in order to hide this Layer if this layer
 * is configured with <code>{@link #hideMode}: 'asclass'</code>
 * @cfg {String} hideMode
 * A String which specifies how this Layer will be hidden.
 * Values may be<div class="mdetail-params"><ul>
 * <li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>
 * <li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>
 * <li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This
 * is useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results
 * in a Component having zero dimensions.</li></ul></div>
 * @constructor
 * @param {Object} config An object with config options.
 * @param {String/HTMLElement} existingEl (optional) Uses an existing DOM element. If the element is not found it creates it.
 */
Ext.define('Ext.Layer', {
    uses: ['Ext.Shadow'],

    // shims are shared among layer to keep from having 100 iframes
    statics: {
        shims: []
    },

    extend: 'Ext.core.Element',

    constructor: function(config, existingEl) {
        config = config || {};
        var me = this,
            dh = Ext.core.DomHelper,
            cp = config.parentEl,
            pel = cp ? Ext.getDom(cp) : document.body,
        hm = config.hideMode;

        if (existingEl) {
            me.dom = Ext.getDom(existingEl);
        }
        if (!me.dom) {
            me.dom = dh.append(pel, config.dh || {
                tag: 'div',
                cls: Ext.baseCSSPrefix + 'layer'
            });
        } else {
            me.addCls(Ext.baseCSSPrefix + 'layer');
            if (!me.dom.parentNode) {
                pel.appendChild(me.dom);
            }
        }

        if (config.cls) {
            me.addCls(config.cls);
        }
        me.constrain = config.constrain !== false;

        // Allow Components to pass their hide mode down to the Layer if they are floating.
        // Otherwise, allow useDisplay to override the default hiding method which is visibility.
        // TODO: Have ExtJS's Element implement visibilityMode by using classes as in Mobile.
        if (hm) {
            me.setVisibilityMode(Ext.core.Element[hm.toUpperCase()]);
            if (me.visibilityMode == Ext.core.Element.ASCLASS) {
                me.visibilityCls = config.visibilityCls;
            }
        } else if (config.useDisplay) {
            me.setVisibilityMode(Ext.core.Element.DISPLAY);
        } else {
            me.setVisibilityMode(Ext.core.Element.VISIBILITY);
        }

        if (config.id) {
            me.id = me.dom.id = config.id;
        } else {
            me.id = Ext.id(me.dom);
        }
        me.position('absolute');
        if (config.shadow) {
            me.shadowOffset = config.shadowOffset || 4;
            me.shadow = Ext.create('Ext.Shadow', {
                offset: me.shadowOffset,
                mode: config.shadow
            });
            me.disableShadow();
        } else {
            me.shadowOffset = 0;
        }
        me.useShim = config.shim !== false && Ext.useShims;
        if (config.hidden === true) {
            me.hide();
        } else {
            this.show();
        }
    },

    getZIndex: function() {
        return parseInt((this.getShim() || this).getStyle('z-index'), 10);
    },

    getShim: function() {
        var me = this,
            shim, pn;

        if (!me.useShim) {
            return null;
        }
        if (!me.shim) {
            shim = me.self.shims.shift();
            if (!shim) {
                shim = me.createShim();
                shim.enableDisplayMode('block');
                shim.hide();
            }
            pn = me.dom.parentNode;
            if (shim.dom.parentNode != pn) {
                pn.insertBefore(shim.dom, me.dom);
            }
            me.shim = shim;
        }
        return me.shim;
    },

    hideShim: function() {
        if (this.shim) {
            this.shim.setDisplayed(false);
            this.self.shims.push(this.shim);
            delete this.shim;
        }
    },

    disableShadow: function() {
        if (this.shadow) {
            this.shadowDisabled = true;
            this.shadow.hide();
            this.lastShadowOffset = this.shadowOffset;
            this.shadowOffset = 0;
        }
    },

    enableShadow: function(show) {
        if (this.shadow) {
            this.shadowDisabled = false;
            this.shadowOffset = this.lastShadowOffset;
            delete this.lastShadowOffset;
            if (show) {
                this.sync(true);
            }
        }
    },

    /**
     * @private
     * <p>Synchronize this Layer's associated elements, the shadow, and possibly the shim.</p>
     * <p>This code can execute repeatedly in milliseconds,
     * eg: dragging a Component configured liveDrag: true, or which has no ghost method
     * so code size was sacrificed for efficiency (e.g. no getBox/setBox, no XY calls)</p>
     * @param {Boolean} doShow Pass true to ensure that the shadow is shown.
     */
    sync: function(doShow) {
        var me = this,
            shadow = me.shadow,
            shadowPos, shimStyle, shadowSize;

        if (!this.updating && this.isVisible() && (shadow || this.useShim)) {
            var shim = this.getShim(),
                l = this.getLeft(true),
                t = this.getTop(true),
                w = this.getWidth(),
                h = this.getHeight(),
                shimIndex;

            if (shadow && !this.shadowDisabled) {
                if (doShow && !shadow.isVisible()) {
                    shadow.show(this);
                } else {
                    shadow.realign(l, t, w, h);
                }
                if (shim) {
                    // TODO: Determine how the shims zIndex is above the layer zIndex at this point
                    shimIndex = shim.getStyle('z-index');
                    if (shimIndex > me.zindex) {
                        me.shim.setStyle('z-index', me.zindex - 2);
                    }
                    shim.show();
                    // fit the shim behind the shadow, so it is shimmed too
                    if (shadow.isVisible()) {
                        shadowPos = shadow.el.getXY();
                        shimStyle = shim.dom.style;
                        shadowSize = shadow.el.getSize();
                        shimStyle.left = (shadowPos[0]) + 'px';
                        shimStyle.top = (shadowPos[1]) + 'px';
                        shimStyle.width = (shadowSize.width) + 'px';
                        shimStyle.height = (shadowSize.height) + 'px';
                    } else {
                        shim.setSize(w, h);
                        shim.setLeftTop(l, t);
                    }
                }
            } else if (shim) {
                // TODO: Determine how the shims zIndex is above the layer zIndex at this point
                shimIndex = shim.getStyle('z-index');
                if (shimIndex > me.zindex) {
                    me.shim.setStyle('z-index', me.zindex - 2);
                }
                shim.show();
                shim.setSize(w, h);
                shim.setLeftTop(l, t);
            }
        }
        return this;
    },

    remove: function() {
        this.hideUnders();
        this.callParent();
    },

    // private
    beginUpdate: function() {
        this.updating = true;
    },

    // private
    endUpdate: function() {
        this.updating = false;
        this.sync(true);
    },

    // private
    hideUnders: function() {
        if (this.shadow) {
            this.shadow.hide();
        }
        this.hideShim();
    },

    // private
    constrainXY: function() {
        if (this.constrain) {
            var vw = Ext.core.Element.getViewWidth(),
                vh = Ext.core.Element.getViewHeight(),
                s = Ext.getDoc().getScroll(),
                xy = this.getXY(),
                x = xy[0],
                y = xy[1],
                so = this.shadowOffset,
                w = this.dom.offsetWidth + so,
                h = this.dom.offsetHeight + so,
                moved = false; // only move it if it needs it
            // first validate right/bottom
            if ((x + w) > vw + s.left) {
                x = vw - w - so;
                moved = true;
            }
            if ((y + h) > vh + s.top) {
                y = vh - h - so;
                moved = true;
            }
            // then make sure top/left isn't negative
            if (x < s.left) {
                x = s.left;
                moved = true;
            }
            if (y < s.top) {
                y = s.top;
                moved = true;
            }
            if (moved) {
                Ext.Layer.superclass.setXY.call(this, [x, y]);
                this.sync();
            }
        }
        return this;
    },

    getConstrainOffset: function() {
        return this.shadowOffset;
    },

    // overridden Element method
    setVisible: function(visible, animate, duration, callback, easing) {
        var me = this,
            cb;

        // post operation processing
        cb = function() {
            if (visible) {
                me.sync(true);
            }
            if (callback) {
                callback();
            }
        };

        // Hide shadow and shim if hiding
        if (!visible) {
            this.hideUnders(true);
        }
        this.callParent([visible, animate, duration, callback, easing]);
        if (!animate) {
            cb();
        }
        return this;
    },

    // private
    beforeFx: function() {
        this.beforeAction();
        return this.callParent(arguments);
    },

    // private
    afterFx: function() {
        this.callParent(arguments);
        this.sync(this.isVisible());
    },

    // private
    beforeAction: function() {
        if (!this.updating && this.shadow) {
            this.shadow.hide();
        }
    },

    // overridden Element method
    setLeft: function(left) {
        this.callParent(arguments);
        return this.sync();
    },

    setTop: function(top) {
        this.callParent(arguments);
        return this.sync();
    },

    setLeftTop: function(left, top) {
        this.callParent(arguments);
        return this.sync();
    },

    setXY: function(xy, animate, duration, callback, easing) {

        // Callback will restore shadow state and call the passed callback
        callback = this.createCB(callback);

        this.fixDisplay();
        this.beforeAction();
        this.callParent([xy, animate, duration, callback, easing]);
        if (!animate) {
            callback();
        }
        return this;
    },

    // private
    createCB: function(callback) {
        var me = this,
            showShadow = me.shadow && me.shadow.isVisible();

        return function() {
            me.constrainXY();
            me.sync(showShadow);
            if (callback) {
                callback();
            }
        };
    },

    // overridden Element method
    setX: function(x, animate, duration, callback, easing) {
        this.setXY([x, this.getY()], animate, duration, callback, easing);
        return this;
    },

    // overridden Element method
    setY: function(y, animate, duration, callback, easing) {
        this.setXY([this.getX(), y], animate, duration, callback, easing);
        return this;
    },

    // overridden Element method
    setSize: function(w, h, animate, duration, callback, easing) {
        // Callback will restore shadow state and call the passed callback
        callback = this.createCB(callback);

        this.beforeAction();
        this.callParent([w, h, animate, duration, callback, easing]);
        if (!animate) {
            callback();
        }
        return this;
    },

    // overridden Element method
    setWidth: function(w, animate, duration, callback, easing) {
        // Callback will restore shadow state and call the passed callback
        callback = this.createCB(callback);

        this.beforeAction();
        this.callParent([w, animate, duration, callback, easing]);
        if (!animate) {
            callback();
        }
        return this;
    },

    // overridden Element method
    setHeight: function(h, animate, duration, callback, easing) {
        // Callback will restore shadow state and call the passed callback
        callback = this.createCB(callback);

        this.beforeAction();
        this.callParent([h, animate, duration, callback, easing]);
        if (!animate) {
            callback();
        }
        return this;
    },

    // overridden Element method
    setBounds: function(x, y, width, height, animate, duration, callback, easing) {
        // Callback will restore shadow state and call the passed callback
        callback = this.createCB(callback);

        this.beforeAction();
        if (!animate) {
            Ext.Layer.superclass.setXY.call(this, [x, y]);
            Ext.Layer.superclass.setSize.call(this, width, height);
            callback();
        } else {
            this.callParent([x, y, width, height, animate, duration, callback, easing]);
        }
        return this;
    },

    /**
     * <p>Sets the z-index of this layer and adjusts any shadow and shim z-indexes. The layer z-index is automatically
     * incremented depending upon the presence of a shim or a shadow in so that it always shows above those two associated elements.</p>
     * <p>Any shim, will be assigned the passed z-index. A shadow will be assigned the next highet z-index, and the Layer's
     * element will receive the highest  z-index.
     * @param {Number} zindex The new z-index to set
     * @return {this} The Layer
     */
    setZIndex: function(zindex) {
        this.zindex = zindex;
        if (this.getShim()) {
            this.shim.setStyle('z-index', zindex++);
        }
        if (this.shadow) {
            this.shadow.setZIndex(zindex++);
        }
        this.setStyle('z-index', zindex);
        return this;
    }
});
