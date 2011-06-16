/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.Component
 * @extends Ext.AbstractComponent
 * <p>Base class for all Ext components.  All subclasses of Component may participate in the automated
 * Ext component lifecycle of creation, rendering and destruction which is provided by the {@link Ext.container.Container Container} class.
 * Components may be added to a Container through the {@link Ext.container.Container#items items} config option at the time the Container is created,
 * or they may be added dynamically via the {@link Ext.container.Container#add add} method.</p>
 * <p>The Component base class has built-in support for basic hide/show and enable/disable and size control behavior.</p>
 * <p>All Components are registered with the {@link Ext.ComponentManager} on construction so that they can be referenced at any time via
 * {@link Ext#getCmp Ext.getCmp}, passing the {@link #id}.</p>
 * <p>All user-developed visual widgets that are required to participate in automated lifecycle and size management should subclass Component.</p>
 * <p>See the <a href="http://sencha.com/learn/Tutorial:Creating_new_UI_controls">Creating new UI controls</a> tutorial for details on how
 * and to either extend or augment ExtJs base classes to create custom Components.</p>
 * <p>Every component has a specific xtype, which is its Ext-specific type name, along with methods for checking the
 * xtype like {@link #getXType} and {@link #isXType}. This is the list of all valid xtypes:</p>
 * <pre>
xtype            Class
-------------    ------------------
button           {@link Ext.button.Button}
buttongroup      {@link Ext.container.ButtonGroup}
colorpalette     {@link Ext.picker.Color}
component        {@link Ext.Component}
container        {@link Ext.container.Container}
cycle            {@link Ext.button.Cycle}
dataview         {@link Ext.view.View}
datepicker       {@link Ext.picker.Date}
editor           {@link Ext.Editor}
editorgrid       {@link Ext.grid.plugin.Editing}
grid             {@link Ext.grid.Panel}
multislider      {@link Ext.slider.Multi}
panel            {@link Ext.panel.Panel}
progress         {@link Ext.ProgressBar}
slider           {@link Ext.slider.Single}
spacer           {@link Ext.toolbar.Spacer}
splitbutton      {@link Ext.button.Split}
tabpanel         {@link Ext.tab.Panel}
treepanel        {@link Ext.tree.Panel}
viewport         {@link Ext.container.Viewport}
window           {@link Ext.window.Window}

Toolbar components
---------------------------------------
paging           {@link Ext.toolbar.Paging}
toolbar          {@link Ext.toolbar.Toolbar}
tbfill           {@link Ext.toolbar.Fill}
tbitem           {@link Ext.toolbar.Item}
tbseparator      {@link Ext.toolbar.Separator}
tbspacer         {@link Ext.toolbar.Spacer}
tbtext           {@link Ext.toolbar.TextItem}

Menu components
---------------------------------------
menu             {@link Ext.menu.Menu}
menucheckitem    {@link Ext.menu.CheckItem}
menuitem         {@link Ext.menu.Item}
menuseparator    {@link Ext.menu.Separator}
menutextitem     {@link Ext.menu.Item}

Form components
---------------------------------------
form             {@link Ext.form.Panel}
checkbox         {@link Ext.form.field.Checkbox}
combo            {@link Ext.form.field.ComboBox}
datefield        {@link Ext.form.field.Date}
displayfield     {@link Ext.form.field.Display}
field            {@link Ext.form.field.Base}
fieldset         {@link Ext.form.FieldSet}
hidden           {@link Ext.form.field.Hidden}
htmleditor       {@link Ext.form.field.HtmlEditor}
label            {@link Ext.form.Label}
numberfield      {@link Ext.form.field.Number}
radio            {@link Ext.form.field.Radio}
radiogroup       {@link Ext.form.RadioGroup}
textarea         {@link Ext.form.field.TextArea}
textfield        {@link Ext.form.field.Text}
timefield        {@link Ext.form.field.Time}
trigger          {@link Ext.form.field.Trigger}

Chart components
---------------------------------------
chart            {@link Ext.chart.Chart}
barchart         {@link Ext.chart.series.Bar}
columnchart      {@link Ext.chart.series.Column}
linechart        {@link Ext.chart.series.Line}
piechart         {@link Ext.chart.series.Pie}

</pre><p>
 * It should not usually be necessary to instantiate a Component because there are provided subclasses which implement specialized Component
 * use cases which over most application needs. However it is possible to instantiate a base Component, and it will be renderable,
 * or will particpate in layouts as the child item of a Container:
{@img Ext.Component/Ext.Component.png Ext.Component component}
<pre><code>
    Ext.create('Ext.Component', {
        html: 'Hello world!',
        width: 300,
        height: 200,
        padding: 20,
        style: {
            color: '#FFFFFF',
            backgroundColor:'#000000'
        },
        renderTo: Ext.getBody()
    });
</code></pre>
 *</p>
 *<p>The Component above creates its encapsulating <code>div</code> upon render, and use the configured HTML as content. More complex
 * internal structure may be created using the {@link #renderTpl} configuration, although to display database-derived mass
 * data, it is recommended that an ExtJS data-backed Component such as a {@link Ext.view.View View}, or
 * {@link Ext.grid.Panel GridPanel}, or {@link Ext.tree.Panel TreePanel} be used.</p>
 * @constructor
 * Creates new Component.
 * @param {Ext.core.Element/String/Object} config The configuration options may be specified as either:
 * <div class="mdetail-params"><ul>
 * <li><b>an element</b> :
 * <p class="sub-desc">it is set as the internal element and its id used as the component id</p></li>
 * <li><b>a string</b> :
 * <p class="sub-desc">it is assumed to be the id of an existing element and is used as the component id</p></li>
 * <li><b>anything else</b> :
 * <p class="sub-desc">it is assumed to be a standard config object and is applied to the component</p></li>
 * </ul></div>
 */

Ext.define('Ext.Component', {

    /* Begin Definitions */

    alias: ['widget.component', 'widget.box'],

    extend: 'Ext.AbstractComponent',

    requires: [
        'Ext.util.DelayedTask'
    ],

    uses: [
        'Ext.Layer',
        'Ext.resizer.Resizer',
        'Ext.util.ComponentDragger'
    ],

    mixins: {
        floating: 'Ext.util.Floating'
    },

    statics: {
        // Collapse/expand directions
        DIRECTION_TOP: 'top',
        DIRECTION_RIGHT: 'right',
        DIRECTION_BOTTOM: 'bottom',
        DIRECTION_LEFT: 'left',

        VERTICAL_DIRECTION: /^(?:top|bottom)$/
    },

    /* End Definitions */

    /**
     * @cfg {Mixed} resizable
     * <p>Specify as <code>true</code> to apply a {@link Ext.resizer.Resizer Resizer} to this Component
     * after rendering.</p>
     * <p>May also be specified as a config object to be passed to the constructor of {@link Ext.resizer.Resizer Resizer}
     * to override any defaults. By default the Component passes its minimum and maximum size, and uses
     * <code>{@link Ext.resizer.Resizer#dynamic}: false</code></p>
     */

    /**
     * @cfg {String} resizeHandles
     * A valid {@link Ext.resizer.Resizer} handles config string (defaults to 'all').  Only applies when resizable = true.
     */
    resizeHandles: 'all',

    /**
     * @cfg {Boolean} autoScroll
     * <code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when
     * necessary, <code>false</code> to clip any overflowing content (defaults to <code>false</code>).
     */

    /**
     * @cfg {Boolean} floating
     * <p>Specify as true to float the Component outside of the document flow using CSS absolute positioning.</p>
     * <p>Components such as {@link Ext.window.Window Window}s and {@link Ext.menu.Menu Menu}s are floating
     * by default.</p>
     * <p>Floating Components that are programatically {@link Ext.Component#render rendered} will register themselves with the global
     * {@link Ext.WindowManager ZIndexManager}</p>
     * <h3 class="pa">Floating Components as child items of a Container</h3>
     * <p>A floating Component may be used as a child item of a Container. This just allows the floating Component to seek a ZIndexManager by
     * examining the ownerCt chain.</p>
     * <p>When configured as floating, Components acquire, at render time, a {@link Ext.ZIndexManager ZIndexManager} which manages a stack
     * of related floating Components. The ZIndexManager brings a single floating Component to the top of its stack when
     * the Component's {@link #toFront} method is called.</p>
     * <p>The ZIndexManager is found by traversing up the {@link #ownerCt} chain to find an ancestor which itself is floating. This is so that
     * descendant floating Components of floating <i>Containers</i> (Such as a ComboBox dropdown within a Window) can have its zIndex managed relative
     * to any siblings, but always <b>above</b> that floating ancestor Container.</p>
     * <p>If no floating ancestor is found, a floating Component registers itself with the default {@link Ext.WindowManager ZIndexManager}.</p>
     * <p>Floating components <i>do not participate in the Container's layout</i>. Because of this, they are not rendered until you explicitly
     * {@link #show} them.</p>
     * <p>After rendering, the ownerCt reference is deleted, and the {@link #floatParent} property is set to the found floating ancestor Container.
     * If no floating ancestor Container was found the {@link #floatParent} property will not be set.</p>
     */
    floating: false,

    /**
     * @cfg {Boolean} toFrontOnShow
     * <p>True to automatically call {@link #toFront} when the {@link #show} method is called
     * on an already visible, floating component (default is <code>true</code>).</p>
     */
    toFrontOnShow: true,

    /**
     * <p>Optional. Only present for {@link #floating} Components after they have been rendered.</p>
     * <p>A reference to the ZIndexManager which is managing this Component's z-index.</p>
     * <p>The {@link Ext.ZIndexManager ZIndexManager} maintains a stack of floating Component z-indices, and also provides a single modal
     * mask which is insert just beneath the topmost visible modal floating Component.</p>
     * <p>Floating Components may be {@link #toFront brought to the front} or {@link #toBack sent to the back} of the z-index stack.</p>
     * <p>This defaults to the global {@link Ext.WindowManager ZIndexManager} for floating Components that are programatically
     * {@link Ext.Component#render rendered}.</p>
     * <p>For {@link #floating} Components which are added to a Container, the ZIndexManager is acquired from the first ancestor Container found
     * which is floating, or if not found the global {@link Ext.WindowManager ZIndexManager} is used.</p>
     * <p>See {@link #floating} and {@link #floatParent}</p>
     * @property zIndexManager
     * @type Ext.ZIndexManager
     */

     /**
      * <p>Optional. Only present for {@link #floating} Components which were inserted as descendant items of floating Containers.</p>
      * <p>Floating Components that are programatically {@link Ext.Component#render rendered} will not have a <code>floatParent</code> property.</p>
      * <p>For {@link #floating} Components which are child items of a Container, the floatParent will be the floating ancestor Container which is
      * responsible for the base z-index value of all its floating descendants. It provides a {@link Ext.ZIndexManager ZIndexManager} which provides
      * z-indexing services for all its descendant floating Components.</p>
      * <p>For example, the dropdown {@link Ext.view.BoundList BoundList} of a ComboBox which is in a Window will have the Window as its
      * <code>floatParent</code></p>
      * <p>See {@link #floating} and {@link #zIndexManager}</p>
      * @property floatParent
      * @type Ext.Container
      */

    /**
     * @cfg {Mixed} draggable
     * <p>Specify as true to make a {@link #floating} Component draggable using the Component's encapsulating element as the drag handle.</p>
     * <p>This may also be specified as a config object for the {@link Ext.util.ComponentDragger ComponentDragger} which is instantiated to perform dragging.</p>
     * <p>For example to create a Component which may only be dragged around using a certain internal element as the drag handle,
     * use the delegate option:</p>
     * <code><pre>
new Ext.Component({
    constrain: true,
    floating:true,
    style: {
        backgroundColor: '#fff',
        border: '1px solid black'
    },
    html: '&lt;h1 style="cursor:move"&gt;The title&lt;/h1&gt;&lt;p&gt;The content&lt;/p&gt;',
    draggable: {
        delegate: 'h1'
    }
}).show();
</pre></code>
     */

    /**
     * @cfg {Boolean} maintainFlex
     * <p><b>Only valid when a sibling element of a {@link Ext.resizer.Splitter Splitter} within a {@link Ext.layout.container.VBox VBox} or
     * {@link Ext.layout.container.HBox HBox} layout.</b></p>
     * <p>Specifies that if an immediate sibling Splitter is moved, the Component on the <i>other</i> side is resized, and this
     * Component maintains its configured {@link Ext.layout.container.Box#flex flex} value.</p>
     */

    hideMode: 'display',
    // Deprecate 5.0
    hideParent: false,

    ariaRole: 'presentation',

    bubbleEvents: [],

    actionMode: 'el',
    monPropRe: /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate)$/,

    //renderTpl: new Ext.XTemplate(
    //    '<div id="{id}" class="{baseCls} {cls} {cmpCls}<tpl if="typeof ui !== \'undefined\'"> {uiBase}-{ui}</tpl>"<tpl if="typeof style !== \'undefined\'"> style="{style}"</tpl>></div>', {
    //        compiled: true,
    //        disableFormats: true
    //    }
    //),
    constructor: function(config) {
        config = config || {};
        if (config.initialConfig) {

            // Being initialized from an Ext.Action instance...
            if (config.isAction) {
                this.baseAction = config;
            }
            config = config.initialConfig;
            // component cloning / action set up
        }
        else if (config.tagName || config.dom || Ext.isString(config)) {
            // element object
            config = {
                applyTo: config,
                id: config.id || config
            };
        }

        this.callParent([config]);

        // If we were configured from an instance of Ext.Action, (or configured with a baseAction option),
        // register this Component as one of its items
        if (this.baseAction){
            this.baseAction.addComponent(this);
        }
    },

    initComponent: function() {
        var me = this;

        if (me.listeners) {
            me.on(me.listeners);
            delete me.listeners;
        }
        me.enableBubble(me.bubbleEvents);
        me.mons = [];
    },

    // private
    afterRender: function() {
        var me = this,
            resizable = me.resizable;

        if (me.floating) {
            me.makeFloating(me.floating);
        } else {
            me.el.setVisibilityMode(Ext.core.Element[me.hideMode.toUpperCase()]);
        }

        if (Ext.isDefined(me.autoScroll)) {
            me.setAutoScroll(me.autoScroll);
        }
        me.callParent();

        if (!(me.x && me.y) && (me.pageX || me.pageY)) {
            me.setPagePosition(me.pageX, me.pageY);
        }

        if (resizable) {
            me.initResizable(resizable);
        }

        if (me.draggable) {
            me.initDraggable();
        }

        me.initAria();
    },

    initAria: function() {
        var actionEl = this.getActionEl(),
            role = this.ariaRole;
        if (role) {
            actionEl.dom.setAttribute('role', role);
        }
    },

    /**
     * Sets the overflow on the content element of the component.
     * @param {Boolean} scroll True to allow the Component to auto scroll.
     * @return {Ext.Component} this
     */
    setAutoScroll : function(scroll){
        var me = this,
            targetEl;
        scroll = !!scroll;
        if (me.rendered) {
            targetEl = me.getTargetEl();
            targetEl.setStyle('overflow', scroll ? 'auto' : '');
            if (scroll && (Ext.isIE6 || Ext.isIE7)) {
                // The scrollable container element must be non-statically positioned or IE6/7 will make
                // positioned children stay in place rather than scrolling with the rest of the content
                targetEl.position();
            }
        }
        me.autoScroll = scroll;
        return me;
    },

    // private
    makeFloating : function(cfg){
        this.mixins.floating.constructor.call(this, cfg);
    },

    initResizable: function(resizable) {
        resizable = Ext.apply({
            target: this,
            dynamic: false,
            constrainTo: this.constrainTo,
            handles: this.resizeHandles
        }, resizable);
        resizable.target = this;
        this.resizer = Ext.create('Ext.resizer.Resizer', resizable);
    },

    getDragEl: function() {
        return this.el;
    },

    initDraggable: function() {
        var me = this,
            ddConfig = Ext.applyIf({
                el: this.getDragEl(),
                constrainTo: me.constrainTo || (me.floatParent ? me.floatParent.getTargetEl() : me.el.dom.parentNode)
            }, this.draggable);

        // Add extra configs if Component is specified to be constrained
        if (me.constrain || me.constrainDelegate) {
            ddConfig.constrain = me.constrain;
            ddConfig.constrainDelegate = me.constrainDelegate;
        }

        this.dd = Ext.create('Ext.util.ComponentDragger', this, ddConfig);
    },

    /**
     * Sets the left and top of the component.  To set the page XY position instead, use {@link #setPagePosition}.
     * This method fires the {@link #move} event.
     * @param {Number} left The new left
     * @param {Number} top The new top
     * @param {Mixed} animate If true, the Component is <i>animated</i> into its new position. You may also pass an animation configuration.
     * @return {Ext.Component} this
     */
    setPosition: function(x, y, animate) {
        var me = this,
            el = me.el,
            to = {},
            adj, adjX, adjY, xIsNumber, yIsNumber;

        if (Ext.isArray(x)) {
            animate = y;
            y = x[1];
            x = x[0];
        }
        me.x = x;
        me.y = y;

        if (!me.rendered) {
            return me;
        }

        adj = me.adjustPosition(x, y);
        adjX = adj.x;
        adjY = adj.y;
        xIsNumber = Ext.isNumber(adjX);
        yIsNumber = Ext.isNumber(adjY);

        if (xIsNumber || yIsNumber) {
            if (animate) {
                if (xIsNumber) {
                    to.left = adjX;
                }
                if (yIsNumber) {
                    to.top = adjY;
                }

                me.stopAnimation();
                me.animate(Ext.apply({
                    duration: 1000,
                    listeners: {
                        afteranimate: Ext.Function.bind(me.afterSetPosition, me, [adjX, adjY])
                    },
                    to: to
                }, animate));
            }
            else {
                if (!xIsNumber) {
                    el.setTop(adjY);
                }
                else if (!yIsNumber) {
                    el.setLeft(adjX);
                }
                else {
                    el.setLeftTop(adjX, adjY);
                }
                me.afterSetPosition(adjX, adjY);
            }
        }
        return me;
    },

    /**
     * @private Template method called after a Component has been positioned.
     */
    afterSetPosition: function(ax, ay) {
        this.onPosition(ax, ay);
        this.fireEvent('move', this, ax, ay);
    },

    showAt: function(x, y, animate) {
        // A floating Component is positioned relative to its ownerCt if any.
        if (this.floating) {
            this.setPosition(x, y, animate);
        } else {
            this.setPagePosition(x, y, animate);
        }
        this.show();
    },

    /**
     * Sets the page XY position of the component.  To set the left and top instead, use {@link #setPosition}.
     * This method fires the {@link #move} event.
     * @param {Number} x The new x position
     * @param {Number} y The new y position
     * @param {Mixed} animate If passed, the Component is <i>animated</i> into its new position. If this parameter
     * is a number, it is used as the animation duration in milliseconds.
     * @return {Ext.Component} this
     */
    setPagePosition: function(x, y, animate) {
        var me = this,
            p;

        if (Ext.isArray(x)) {
            y = x[1];
            x = x[0];
        }
        me.pageX = x;
        me.pageY = y;
        if (me.floating && me.floatParent) {
            // Floating Components being positioned in their ownerCt have to be made absolute
            p = me.floatParent.getTargetEl().getViewRegion();
            if (Ext.isNumber(x) && Ext.isNumber(p.left)) {
                x -= p.left;
            }
            if (Ext.isNumber(y) && Ext.isNumber(p.top)) {
                y -= p.top;
            }
            me.setPosition(x, y, animate);
        }
        else {
            p = me.el.translatePoints(x, y);
            me.setPosition(p.left, p.top, animate);
        }
        return me;
    },

    /**
     * Gets the current box measurements of the component's underlying element.
     * @param {Boolean} local (optional) If true the element's left and top are returned instead of page XY (defaults to false)
     * @return {Object} box An object in the format {x, y, width, height}
     */
    getBox : function(local){
        var pos = this.getPosition(local);
        var s = this.getSize();
        s.x = pos[0];
        s.y = pos[1];
        return s;
    },

    /**
     * Sets the current box measurements of the component's underlying element.
     * @param {Object} box An object in the format {x, y, width, height}
     * @return {Ext.Component} this
     */
    updateBox : function(box){
        this.setSize(box.width, box.height);
        this.setPagePosition(box.x, box.y);
        return this;
    },

    // Include margins
    getOuterSize: function() {
        var el = this.el;
        return {
            width: el.getWidth() + el.getMargin('lr'),
            height: el.getHeight() + el.getMargin('tb')
        };
    },

    // private
    adjustSize: function(w, h) {
        if (this.autoWidth) {
            w = 'auto';
        }

        if (this.autoHeight) {
            h = 'auto';
        }

        return {
            width: w,
            height: h
        };
    },

    // private
    adjustPosition: function(x, y) {

        // Floating Components being positioned in their ownerCt have to be made absolute
        if (this.floating && this.floatParent) {
            var o = this.floatParent.getTargetEl().getViewRegion();
            x += o.left;
            y += o.top;
        }

        return {
            x: x,
            y: y
        };
    },

    /**
     * Gets the current XY position of the component's underlying element.
     * @param {Boolean} local (optional) If true the element's left and top are returned instead of page XY (defaults to false)
     * @return {Array} The XY position of the element (e.g., [100, 200])
     */
    getPosition: function(local) {
        var el = this.el,
            xy;

        if (local === true) {
            return [el.getLeft(true), el.getTop(true)];
        }
        xy = this.xy || el.getXY();

        // Floating Components in an ownerCt have to have their positions made relative
        if (this.floating && this.floatParent) {
            var o = this.floatParent.getTargetEl().getViewRegion();
            xy[0] -= o.left;
            xy[1] -= o.top;
        }
        return xy;
    },

    // Todo: add in xtype prefix support
    getId: function() {
        return this.id || (this.id = (this.getXType() || 'ext-comp') + '-' + this.getAutoId());
    },

    onEnable: function() {
        var actionEl = this.getActionEl();
        actionEl.dom.removeAttribute('aria-disabled');
        actionEl.dom.disabled = false;
        this.callParent();
    },

    onDisable: function() {
        var actionEl = this.getActionEl();
        actionEl.dom.setAttribute('aria-disabled', true);
        actionEl.dom.disabled = true;
        this.callParent();
    },

    /**
     * <p>Shows this Component, rendering it first if {@link #autoRender} or {@link #floating} are <code>true</code>.</p>
     * <p>After being shown, a {@link #floating} Component (such as a {@link Ext.window.Window}), is activated it and brought to the front of
     * its {@link #zIndexManager z-index stack}.</p>
     * @param {String/Element} animateTarget Optional, and <b>only valid for {@link #floating} Components such as
     * {@link Ext.window.Window Window}s or {@link Ext.tip.ToolTip ToolTip}s, or regular Components which have been configured
     * with <code>floating: true</code>.</b> The target from which the Component should
     * animate from while opening (defaults to null with no animation)
     * @param {Function} callback (optional) A callback function to call after the Component is displayed. Only necessary if animation was specified.
     * @param {Object} scope (optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.
     * @return {Component} this
     */
    show: function(animateTarget, cb, scope) {
        if (this.rendered && this.isVisible()) {
            if (this.toFrontOnShow && this.floating) {
                this.toFront();
            }
        } else if (this.fireEvent('beforeshow', this) !== false) {
            this.hidden = false;

            // Render on first show if there is an autoRender config, or if this is a floater (Window, Menu, BoundList etc).
            if (!this.rendered && (this.autoRender || this.floating)) {
                this.doAutoRender();
            }
            if (this.rendered) {
                this.beforeShow();
                this.onShow.apply(this, arguments);

                // Notify any owning Container unless it's suspended.
                // Floating Components do not participate in layouts.
                if (this.ownerCt && !this.floating && !(this.ownerCt.suspendLayout || this.ownerCt.layout.layoutBusy)) {
                    this.ownerCt.doLayout();
                }
                this.afterShow.apply(this, arguments);
            }
        }
        return this;
    },

    beforeShow: Ext.emptyFn,

    // Private. Override in subclasses where more complex behaviour is needed.
    onShow: function() {
        var me = this;

        me.el.show();
        if (this.floating && this.constrain) {
            this.doConstrain();
        }
        me.callParent(arguments);
    },

    afterShow: function(animateTarget, cb, scope) {
        var me = this,
            fromBox,
            toBox,
            ghostPanel;

        // Default to configured animate target if none passed
        animateTarget = animateTarget || me.animateTarget;

        // Need to be able to ghost the Component
        if (!me.ghost) {
            animateTarget = null;
        }
        // If we're animating, kick of an animation of the ghost from the target to the *Element* current box
        if (animateTarget) {
            animateTarget = animateTarget.el ? animateTarget.el : Ext.get(animateTarget);
            toBox = me.el.getBox();
            fromBox = animateTarget.getBox();
            fromBox.width += 'px';
            fromBox.height += 'px';
            toBox.width += 'px';
            toBox.height += 'px';
            me.el.addCls(Ext.baseCSSPrefix + 'hide-offsets');
            ghostPanel = me.ghost();
            ghostPanel.el.stopAnimation();

            ghostPanel.el.animate({
                from: fromBox,
                to: toBox,
                listeners: {
                    afteranimate: function() {
                        delete ghostPanel.componentLayout.lastComponentSize;
                        me.unghost();
                        me.el.removeCls(Ext.baseCSSPrefix + 'hide-offsets');
                        if (me.floating) {
                            me.toFront();
                        }
                        Ext.callback(cb, scope || me);
                    }
                }
            });
        }
        else {
            if (me.floating) {
                me.toFront();
            }
            Ext.callback(cb, scope || me);
        }
        me.fireEvent('show', me);
    },

    /**
     * Hides this Component, setting it to invisible using the configured {@link #hideMode}.
     * @param {String/Element/Component} animateTarget Optional, and <b>only valid for {@link #floating} Components such as
     * {@link Ext.window.Window Window}s or {@link Ext.tip.ToolTip ToolTip}s, or regular Components which have been configured
     * with <code>floating: true</code>.</b>.
     * The target to which the Component should animate while hiding (defaults to null with no animation)
     * @param {Function} callback (optional) A callback function to call after the Component is hidden.
     * @param {Object} scope (optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.
     * @return {Ext.Component} this
     */
    hide: function() {

        // Clear the flag which is set if a floatParent was hidden while this is visible.
        // If a hide operation was subsequently called, that pending show must be hidden.
        this.showOnParentShow = false;

        if (!(this.rendered && !this.isVisible()) && this.fireEvent('beforehide', this) !== false) {
            this.hidden = true;
            if (this.rendered) {
                this.onHide.apply(this, arguments);

                // Notify any owning Container unless it's suspended.
                // Floating Components do not participate in layouts.
                if (this.ownerCt && !this.floating && !(this.ownerCt.suspendLayout || this.ownerCt.layout.layoutBusy)) {
                    this.ownerCt.doLayout();
                }
            }
        }
        return this;
    },

    // Possibly animate down to a target element.
    onHide: function(animateTarget, cb, scope) {
        var me = this,
            ghostPanel,
            toBox;

        // Default to configured animate target if none passed
        animateTarget = animateTarget || me.animateTarget;

        // Need to be able to ghost the Component
        if (!me.ghost) {
            animateTarget = null;
        }
        // If we're animating, kick off an animation of the ghost down to the target
        if (animateTarget) {
            animateTarget = animateTarget.el ? animateTarget.el : Ext.get(animateTarget);
            ghostPanel = me.ghost();
            ghostPanel.el.stopAnimation();
            toBox = animateTarget.getBox();
            toBox.width += 'px';
            toBox.height += 'px';
            ghostPanel.el.animate({
                to: toBox,
                listeners: {
                    afteranimate: function() {
                        delete ghostPanel.componentLayout.lastComponentSize;
                        ghostPanel.el.hide();
                        me.afterHide(cb, scope);
                    }
                }
            });
        }
        me.el.hide();
        if (!animateTarget) {
            me.afterHide(cb, scope);
        }
    },

    afterHide: function(cb, scope) {
        Ext.callback(cb, scope || this);
        this.fireEvent('hide', this);
    },

    /**
     * @private
     * Template method to contribute functionality at destroy time.
     */
    onDestroy: function() {
        var me = this;

        // Ensure that any ancillary components are destroyed.
        if (me.rendered) {
            Ext.destroy(
                me.proxy,
                me.resizer
            );
            // Different from AbstractComponent
            if (me.actionMode == 'container' || me.removeMode == 'container') {
                me.container.remove();
            }
        }
        delete me.focusTask;
        me.callParent();
    },

    deleteMembers: function() {
        var args = arguments,
            len = args.length,
            i = 0;
        for (; i < len; ++i) {
            delete this[args[i]];
        }
    },

    /**
     * Try to focus this component.
     * @param {Boolean} selectText (optional) If applicable, true to also select the text in this component
     * @param {Boolean/Number} delay (optional) Delay the focus this number of milliseconds (true for 10 milliseconds).
     * @return {Ext.Component} this
     */
    focus: function(selectText, delay) {
        var me = this,
                focusEl;

        if (delay) {
            if (!me.focusTask) {
                me.focusTask = Ext.create('Ext.util.DelayedTask', me.focus);
            }
            me.focusTask.delay(Ext.isNumber(delay) ? delay : 10, null, me, [selectText, false]);
            return me;
        }

        if (me.rendered && !me.isDestroyed) {
            // getFocusEl could return a Component.
            focusEl = me.getFocusEl();
            focusEl.focus();
            if (focusEl.dom && selectText === true) {
                focusEl.dom.select();
            }

            // Focusing a floating Component brings it to the front of its stack.
            // this is performed by its zIndexManager. Pass preventFocus true to avoid recursion.
            if (me.floating) {
                me.toFront(true);
            }
        }
        return me;
    },

    /**
     * @private
     * Returns the focus holder element associated with this Component. By default, this is the Component's encapsulating
     * element. Subclasses which use embedded focusable elements (such as Window and Button) should override this for use
     * by the {@link #focus} method.
     * @returns {Ext.core.Element} the focus holing element.
     */
    getFocusEl: function() {
        return this.el;
    },

    // private
    blur: function() {
        if (this.rendered) {
            this.getFocusEl().blur();
        }
        return this;
    },

    getEl: function() {
        return this.el;
    },

    // Deprecate 5.0
    getResizeEl: function() {
        return this.el;
    },

    // Deprecate 5.0
    getPositionEl: function() {
        return this.el;
    },

    // Deprecate 5.0
    getActionEl: function() {
        return this.el;
    },

    // Deprecate 5.0
    getVisibilityEl: function() {
        return this.el;
    },

    // Deprecate 5.0
    onResize: Ext.emptyFn,

    // private
    getBubbleTarget: function() {
        return this.ownerCt;
    },

    // private
    getContentTarget: function() {
        return this.el;
    },

    /**
     * Clone the current component using the original config values passed into this instance by default.
     * @param {Object} overrides A new config containing any properties to override in the cloned version.
     * An id property can be passed on this object, otherwise one will be generated to avoid duplicates.
     * @return {Ext.Component} clone The cloned copy of this component
     */
    cloneConfig: function(overrides) {
        overrides = overrides || {};
        var id = overrides.id || Ext.id();
        var cfg = Ext.applyIf(overrides, this.initialConfig);
        cfg.id = id;

        var self = Ext.getClass(this);

        // prevent dup id
        return new self(cfg);
    },

    /**
     * Gets the xtype for this component as registered with {@link Ext.ComponentManager}. For a list of all
     * available xtypes, see the {@link Ext.Component} header. Example usage:
     * <pre><code>
var t = new Ext.form.field.Text();
alert(t.getXType());  // alerts 'textfield'
</code></pre>
     * @return {String} The xtype
     */
    getXType: function() {
        return this.self.xtype;
    },

    /**
     * Find a container above this component at any level by a custom function. If the passed function returns
     * true, the container will be returned.
     * @param {Function} fn The custom function to call with the arguments (container, this component).
     * @return {Ext.container.Container} The first Container for which the custom function returns true
     */
    findParentBy: function(fn) {
        var p;

        // Iterate up the ownerCt chain until there's no ownerCt, or we find an ancestor which matches using the selector function.
        for (p = this.ownerCt; p && !fn(p, this); p = p.ownerCt);
        return p || null;
    },

    /**
     * <p>Find a container above this component at any level by xtype or class</p>
     * <p>See also the {@link Ext.Component#up up} method.</p>
     * @param {String/Class} xtype The xtype string for a component, or the class of the component directly
     * @return {Ext.container.Container} The first Container which matches the given xtype or class
     */
    findParentByType: function(xtype) {
        return Ext.isFunction(xtype) ?
            this.findParentBy(function(p) {
                return p.constructor === xtype;
            })
        :
            this.up(xtype);
    },

    /**
     * Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of
     * function call will be the scope provided or the current component. The arguments to the function
     * will be the args provided or the current component. If the function returns false at any point,
     * the bubble is stopped.
     * @param {Function} fn The function to call
     * @param {Object} scope (optional) The scope of the function (defaults to current node)
     * @param {Array} args (optional) The args to call the function with (default to passing the current component)
     * @return {Ext.Component} this
     */
    bubble: function(fn, scope, args) {
        var p = this;
        while (p) {
            if (fn.apply(scope || p, args || [p]) === false) {
                break;
            }
            p = p.ownerCt;
        }
        return this;
    },

    getProxy: function() {
        if (!this.proxy) {
            this.proxy = this.el.createProxy(Ext.baseCSSPrefix + 'proxy-el', Ext.getBody(), true);
        }
        return this.proxy;
    }

});

