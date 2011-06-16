/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.button.Button
 * @extends Ext.Component

Create simple buttons with this component. Customisations include {@link #iconAlign aligned}
{@link #iconCls icons}, {@link #menu dropdown menus}, {@link #tooltip tooltips}
and {@link #scale sizing options}. Specify a {@link #handler handler} to run code when
a user clicks the button, or use {@link #listeners listeners} for other events such as
{@link #mouseover mouseover}.

{@img Ext.button.Button/Ext.button.Button1.png Ext.button.Button component}
Example usage:

    Ext.create('Ext.Button', {
        text: 'Click me',
        renderTo: Ext.getBody(),        
        handler: function() {
            alert('You clicked the button!')
        }
    });

The {@link #handler} configuration can also be updated dynamically using the {@link #setHandler} method.
Example usage:

    Ext.create('Ext.Button', {
        text    : 'Dyanmic Handler Button',
        renderTo: Ext.getBody(),
        handler : function() {
            //this button will spit out a different number every time you click it.
            //so firstly we must check if that number is already set:
            if (this.clickCount) {
                //looks like the property is already set, so lets just add 1 to that number and alert the user
                this.clickCount++;
                alert('You have clicked the button "' + this.clickCount + '" times.\n\nTry clicking it again..');
            } else {
                //if the clickCount property is not set, we will set it and alert the user
                this.clickCount = 1;
                alert('You just clicked the button for the first time!\n\nTry pressing it again..');
            }
        }
    });

A button within a container:

    Ext.create('Ext.Container', {
        renderTo: Ext.getBody(),
        items   : [
            {
                xtype: 'button',
                text : 'My Button'
            }
        ]
    });

A useful option of Button is the {@link #scale} configuration. This configuration has three different options:
* `'small'`
* `'medium'`
* `'large'`

{@img Ext.button.Button/Ext.button.Button2.png Ext.button.Button component}
Example usage:

    Ext.create('Ext.Button', {
        renderTo: document.body,
        text    : 'Click me',
        scale   : 'large'
    });

Buttons can also be toggled. To enable this, you simple set the {@link #enableToggle} property to `true`.
{@img Ext.button.Button/Ext.button.Button3.png Ext.button.Button component}
Example usage:

    Ext.create('Ext.Button', {
        renderTo: Ext.getBody(),
        text: 'Click Me',
        enableToggle: true
    });

You can assign a menu to a button by using the {@link #menu} configuration. This standard configuration can either be a reference to a {@link Ext.menu.Menu menu}
object, a {@link Ext.menu.Menu menu} id or a {@link Ext.menu.Menu menu} config blob. When assigning a menu to a button, an arrow is automatically added to the button.
You can change the alignment of the arrow using the {@link #arrowAlign} configuration on button.
{@img Ext.button.Button/Ext.button.Button4.png Ext.button.Button component}
Example usage:

    Ext.create('Ext.Button', {
        text      : 'Menu button',
        renderTo  : Ext.getBody(),        
        arrowAlign: 'bottom',
        menu      : [
            {text: 'Item 1'},
            {text: 'Item 2'},
            {text: 'Item 3'},
            {text: 'Item 4'}
        ]
    });

Using listeners, you can easily listen to events fired by any component, using the {@link #listeners} configuration or using the {@link #addListener} method.
Button has a variety of different listeners:
* `click`
* `toggle`
* `mouseover`
* `mouseout`
* `mouseshow`
* `menuhide`
* `menutriggerover`
* `menutriggerout`

Example usage:

    Ext.create('Ext.Button', {
        text     : 'Button',
        renderTo : Ext.getBody(),
        listeners: {
            click: function() {
                //this == the button, as we are in the local scope
                this.setText('I was clicked!');
            },
            mouseover: function() {
                //set a new config which says we moused over, if not already set
                if (!this.mousedOver) {
                    this.mousedOver = true;
                    alert('You moused over a button!\n\nI wont do this again.');
                }
            }
        }
    });

 * @markdown
 * @docauthor Robert Dougan <rob@sencha.com>
 */
Ext.define('Ext.button.Button', {

    /* Begin Definitions */
    alias: 'widget.button',
    extend: 'Ext.Component',

    requires: [
        'Ext.menu.Manager',
        'Ext.util.ClickRepeater',
        'Ext.layout.component.Button',
        'Ext.util.TextMetrics',
        'Ext.util.KeyMap'
    ],

    alternateClassName: 'Ext.Button',
    /* End Definitions */

    isButton: true,
    componentLayout: 'button',

    /**
     * Read-only. True if this button is hidden
     * @type Boolean
     */
    hidden: false,

    /**
     * Read-only. True if this button is disabled
     * @type Boolean
     */
    disabled: false,

    /**
     * Read-only. True if this button is pressed (only if enableToggle = true)
     * @type Boolean
     */
    pressed: false,

    /**
     * @cfg {String} text The button text to be used as innerHTML (html tags are accepted)
     */

    /**
     * @cfg {String} icon The path to an image to display in the button (the image will be set as the background-image
     * CSS property of the button by default, so if you want a mixed icon/text button, set cls:'x-btn-text-icon')
     */

    /**
     * @cfg {Function} handler A function called when the button is clicked (can be used instead of click event).
     * The handler is passed the following parameters:<div class="mdetail-params"><ul>
     * <li><code>b</code> : Button<div class="sub-desc">This Button.</div></li>
     * <li><code>e</code> : EventObject<div class="sub-desc">The click event.</div></li>
     * </ul></div>
     */

    /**
     * @cfg {Number} minWidth The minimum width for this button (used to give a set of buttons a common width).
     * See also {@link Ext.panel.Panel}.<tt>{@link Ext.panel.Panel#minButtonWidth minButtonWidth}</tt>.
     */

    /**
     * @cfg {String/Object} tooltip The tooltip for the button - can be a string to be used as innerHTML (html tags are accepted) or QuickTips config object
     */

    /**
     * @cfg {Boolean} hidden True to start hidden (defaults to false)
     */

    /**
     * @cfg {Boolean} disabled True to start disabled (defaults to false)
     */

    /**
     * @cfg {Boolean} pressed True to start pressed (only if enableToggle = true)
     */

    /**
     * @cfg {String} toggleGroup The group this toggle button is a member of (only 1 per group can be pressed)
     */

    /**
     * @cfg {Boolean/Object} repeat True to repeat fire the click event while the mouse is down. This can also be
     * a {@link Ext.util.ClickRepeater ClickRepeater} config object (defaults to false).
     */

    /**
     * @cfg {Number} tabIndex Set a DOM tabIndex for this button (defaults to undefined)
     */

    /**
     * @cfg {Boolean} allowDepress
     * False to not allow a pressed Button to be depressed (defaults to undefined). Only valid when {@link #enableToggle} is true.
     */

    /**
     * @cfg {Boolean} enableToggle
     * True to enable pressed/not pressed toggling (defaults to false)
     */
    enableToggle: false,

    /**
     * @cfg {Function} toggleHandler
     * Function called when a Button with {@link #enableToggle} set to true is clicked. Two arguments are passed:<ul class="mdetail-params">
     * <li><b>button</b> : Ext.button.Button<div class="sub-desc">this Button object</div></li>
     * <li><b>state</b> : Boolean<div class="sub-desc">The next state of the Button, true means pressed.</div></li>
     * </ul>
     */

    /**
     * @cfg {Mixed} menu
     * Standard menu attribute consisting of a reference to a menu object, a menu id or a menu config blob (defaults to undefined).
     */

    /**
     * @cfg {String} menuAlign
     * The position to align the menu to (see {@link Ext.core.Element#alignTo} for more details, defaults to 'tl-bl?').
     */
    menuAlign: 'tl-bl?',

    /**
     * @cfg {String} overflowText If used in a {@link Ext.toolbar.Toolbar Toolbar}, the
     * text to be used if this item is shown in the overflow menu. See also
     * {@link Ext.toolbar.Item}.<code>{@link Ext.toolbar.Item#overflowText overflowText}</code>.
     */

    /**
     * @cfg {String} iconCls
     * A css class which sets a background image to be used as the icon for this button
     */

    /**
     * @cfg {String} type
     * submit, reset or button - defaults to 'button'
     */
    type: 'button',

    /**
     * @cfg {String} clickEvent
     * The DOM event that will fire the handler of the button. This can be any valid event name (dblclick, contextmenu).
     * Defaults to <tt>'click'</tt>.
     */
    clickEvent: 'click',
    
    /**
     * @cfg {Boolean} preventDefault
     * True to prevent the default action when the {@link #clickEvent} is processed. Defaults to true.
     */
    preventDefault: true,

    /**
     * @cfg {Boolean} handleMouseEvents
     * False to disable visual cues on mouseover, mouseout and mousedown (defaults to true)
     */
    handleMouseEvents: true,

    /**
     * @cfg {String} tooltipType
     * The type of tooltip to use. Either 'qtip' (default) for QuickTips or 'title' for title attribute.
     */
    tooltipType: 'qtip',

    /**
     * @cfg {String} baseCls
     * The base CSS class to add to all buttons. (Defaults to 'x-btn')
     */
    baseCls: Ext.baseCSSPrefix + 'btn',

    /**
     * @cfg {String} pressedCls
     * The CSS class to add to a button when it is in the pressed state. (Defaults to 'x-btn-pressed')
     */
    pressedCls: 'pressed',
    
    /**
     * @cfg {String} overCls
     * The CSS class to add to a button when it is in the over (hovered) state. (Defaults to 'x-btn-over')
     */
    overCls: 'over',
    
    /**
     * @cfg {String} focusCls
     * The CSS class to add to a button when it is in the focussed state. (Defaults to 'x-btn-focus')
     */
    focusCls: 'focus',
    
    /**
     * @cfg {String} menuActiveCls
     * The CSS class to add to a button when it's menu is active. (Defaults to 'x-btn-menu-active')
     */
    menuActiveCls: 'menu-active',
    
    /**
     * @cfg {Object} baseParams
     * An object literal of parameters to pass to the url when the {@link #href} property is specified.
     */
    
    /**
     * @cfg {Object} params
     * An object literal of parameters to pass to the url when the {@link #href} property is specified.
     * Any params override {@link #baseParams}. New params can be set using the {@link #setParams} method.
     */

    ariaRole: 'button',

    // inherited
    renderTpl:
        '<em class="{splitCls}">' +
            '<tpl if="href">' +
                '<a href="{href}" target="{target}"<tpl if="tabIndex"> tabIndex="{tabIndex}"</tpl> role="link">' +
                    '<span class="{baseCls}-inner">' +
                        '{text}' +
                    '</span>' +
                        '<span class="{baseCls}-icon"></span>' +
                '</a>' +
            '</tpl>' +
            '<tpl if="!href">' +
                '<button type="{type}" hidefocus="true"' +
                    // the autocomplete="off" is required to prevent Firefox from remembering
                    // the button's disabled state between page reloads.
                    '<tpl if="tabIndex"> tabIndex="{tabIndex}"</tpl> role="button" autocomplete="off">' +
                    '<span class="{baseCls}-inner" style="{innerSpanStyle}">' +
                        '{text}' +
                    '</span>' +
                    '<span class="{baseCls}-icon"></span>' +
                '</button>' +
            '</tpl>' +
        '</em>' ,

    /**
     * @cfg {String} scale
     * <p>(Optional) The size of the Button. Three values are allowed:</p>
     * <ul class="mdetail-params">
     * <li>'small'<div class="sub-desc">Results in the button element being 16px high.</div></li>
     * <li>'medium'<div class="sub-desc">Results in the button element being 24px high.</div></li>
     * <li>'large'<div class="sub-desc">Results in the button element being 32px high.</div></li>
     * </ul>
     * <p>Defaults to <b><tt>'small'</tt></b>.</p>
     */
    scale: 'small',
    
    /**
     * @private An array of allowed scales.
     */
    allowedScales: ['small', 'medium', 'large'],
    
    /**
     * @cfg {Object} scope The scope (<tt><b>this</b></tt> reference) in which the
     * <code>{@link #handler}</code> and <code>{@link #toggleHandler}</code> is
     * executed. Defaults to this Button.
     */

    /**
     * @cfg {String} iconAlign
     * <p>(Optional) The side of the Button box to render the icon. Four values are allowed:</p>
     * <ul class="mdetail-params">
     * <li>'top'<div class="sub-desc"></div></li>
     * <li>'right'<div class="sub-desc"></div></li>
     * <li>'bottom'<div class="sub-desc"></div></li>
     * <li>'left'<div class="sub-desc"></div></li>
     * </ul>
     * <p>Defaults to <b><tt>'left'</tt></b>.</p>
     */
    iconAlign: 'left',

    /**
     * @cfg {String} arrowAlign
     * <p>(Optional) The side of the Button box to render the arrow if the button has an associated {@link #menu}.
     * Two values are allowed:</p>
     * <ul class="mdetail-params">
     * <li>'right'<div class="sub-desc"></div></li>
     * <li>'bottom'<div class="sub-desc"></div></li>
     * </ul>
     * <p>Defaults to <b><tt>'right'</tt></b>.</p>
     */
    arrowAlign: 'right',

    /**
     * @cfg {String} arrowCls
     * <p>(Optional) The className used for the inner arrow element if the button has a menu.</p>
     */
    arrowCls: 'arrow',

    /**
     * @cfg {Ext.Template} template (Optional)
     * <p>A {@link Ext.Template Template} used to create the Button's DOM structure.</p>
     * Instances, or subclasses which need a different DOM structure may provide a different
     * template layout in conjunction with an implementation of {@link #getTemplateArgs}.
     * @type Ext.Template
     * @property template
     */

    /**
     * @cfg {String} cls
     * A CSS class string to apply to the button's main element.
     */

    /**
     * @property menu
     * @type Menu
     * The {@link Ext.menu.Menu Menu} object associated with this Button when configured with the {@link #menu} config option.
     */

    /**
     * @cfg {Boolean} autoWidth
     * By default, if a width is not specified the button will attempt to stretch horizontally to fit its content.
     * If the button is being managed by a width sizing layout (hbox, fit, anchor), set this to false to prevent
     * the button from doing this automatic sizing.
     * Defaults to <tt>undefined</tt>.
     */
     
    maskOnDisable: false,

    // inherit docs
    initComponent: function() {
        var me = this;
        me.callParent(arguments);

        me.addEvents(
            /**
             * @event click
             * Fires when this button is clicked
             * @param {Button} this
             * @param {EventObject} e The click event
             */
            'click',

            /**
             * @event toggle
             * Fires when the 'pressed' state of this button changes (only if enableToggle = true)
             * @param {Button} this
             * @param {Boolean} pressed
             */
            'toggle',

            /**
             * @event mouseover
             * Fires when the mouse hovers over the button
             * @param {Button} this
             * @param {Event} e The event object
             */
            'mouseover',

            /**
             * @event mouseout
             * Fires when the mouse exits the button
             * @param {Button} this
             * @param {Event} e The event object
             */
            'mouseout',

            /**
             * @event menushow
             * If this button has a menu, this event fires when it is shown
             * @param {Button} this
             * @param {Menu} menu
             */
            'menushow',

            /**
             * @event menuhide
             * If this button has a menu, this event fires when it is hidden
             * @param {Button} this
             * @param {Menu} menu
             */
            'menuhide',

            /**
             * @event menutriggerover
             * If this button has a menu, this event fires when the mouse enters the menu triggering element
             * @param {Button} this
             * @param {Menu} menu
             * @param {EventObject} e
             */
            'menutriggerover',

            /**
             * @event menutriggerout
             * If this button has a menu, this event fires when the mouse leaves the menu triggering element
             * @param {Button} this
             * @param {Menu} menu
             * @param {EventObject} e
             */
            'menutriggerout'
        );

        if (me.menu) {
            // Flag that we'll have a splitCls
            me.split = true;

            // retrieve menu by id or instantiate instance if needed
            me.menu = Ext.menu.Manager.get(me.menu);
            me.menu.ownerCt = me;
        }

        // Accept url as a synonym for href
        if (me.url) {
            me.href = me.url;
        }

        // preventDefault defaults to false for links
        if (me.href && !me.hasOwnProperty('preventDefault')) {
            me.preventDefault = false;
        }

        if (Ext.isString(me.toggleGroup)) {
            me.enableToggle = true;
        }

    },

    // private
    initAria: function() {
        this.callParent();
        var actionEl = this.getActionEl();
        if (this.menu) {
            actionEl.dom.setAttribute('aria-haspopup', true);
        }
    },

    // inherit docs
    getActionEl: function() {
        return this.btnEl;
    },

    // inherit docs
    getFocusEl: function() {
        return this.btnEl;
    },

    // private
    setButtonCls: function() {
        var me = this,
            el = me.el,
            cls = [];

        if (me.useSetClass) {
            if (!Ext.isEmpty(me.oldCls)) {
                me.removeClsWithUI(me.oldCls);
                me.removeClsWithUI(me.pressedCls);
            }
            
            // Check whether the button has an icon or not, and if it has an icon, what is th alignment
            if (me.iconCls || me.icon) {
                if (me.text) {
                    cls.push('icon-text-' + me.iconAlign);
                } else {
                    cls.push('icon');
                }
            } else if (me.text) {
                cls.push('noicon');
            }
            
            me.oldCls = cls;
            me.addClsWithUI(cls);
            me.addClsWithUI(me.pressed ? me.pressedCls : null);
        }
    },
    
    // private
    onRender: function(ct, position) {
        // classNames for the button
        var me = this,
            repeater, btn;
            
        // Apply the renderData to the template args
        Ext.applyIf(me.renderData, me.getTemplateArgs());

        // Extract the button and the button wrapping element
        Ext.applyIf(me.renderSelectors, {
            btnEl  : me.href ? 'a' : 'button',
            btnWrap: 'em',
            btnInnerEl: '.' + me.baseCls + '-inner',
            btnIconEl: '.'+ me.baseCls + '-icon'
        });
        
        if (me.scale) {
            me.ui = me.ui + '-' + me.scale;
        }

        // Render internal structure
        me.callParent(arguments);

        // If it is a split button + has a toolip for the arrow
        if (me.split && me.arrowTooltip) {
            me.arrowEl.dom[me.tooltipType] = me.arrowTooltip;
        }

        // Add listeners to the focus and blur events on the element
        me.mon(me.btnEl, {
            scope: me,
            focus: me.onFocus,
            blur : me.onBlur
        });

        // Set btn as a local variable for easy access
        btn = me.el;

        if (me.icon) {
            me.setIcon(me.icon);
        }

        if (me.iconCls) {
            me.setIconCls(me.iconCls);
        }

        if (me.tooltip) {
            me.setTooltip(me.tooltip, true);
        }

        // Add the mouse events to the button
        if (me.handleMouseEvents) {
            me.mon(btn, {
                scope: me,
                mouseover: me.onMouseOver,
                mouseout: me.onMouseOut,
                mousedown: me.onMouseDown
            });

            if (me.split) {
                me.mon(btn, {
                    mousemove: me.onMouseMove,
                    scope: me
                });
            }
        }

        // Check if the button has a menu
        if (me.menu) {
            me.mon(me.menu, {
                scope: me,
                show: me.onMenuShow,
                hide: me.onMenuHide
            });

            me.keyMap = Ext.create('Ext.util.KeyMap', me.el, {
                key: Ext.EventObject.DOWN,
                handler: me.onDownKey,
                scope: me
            });
        }

        // Check if it is a repeat button
        if (me.repeat) {
            repeater = Ext.create('Ext.util.ClickRepeater', btn, Ext.isObject(me.repeat) ? me.repeat: {});
            me.mon(repeater, 'click', me.onRepeatClick, me);
        } else {
            me.mon(btn, me.clickEvent, me.onClick, me);
        }

        // Register the button in the toggle manager
        Ext.ButtonToggleManager.register(me);
    },

    /**
     * <p>This method returns an object which provides substitution parameters for the {@link #renderTpl XTemplate} used
     * to create this Button's DOM structure.</p>
     * <p>Instances or subclasses which use a different Template to create a different DOM structure may need to provide their
     * own implementation of this method.</p>
     * <p>The default implementation which provides data for the default {@link #template} returns an Object containing the
     * following properties:</p><div class="mdetail-params"><ul>
     * <li><code>type</code> : The &lt;button&gt;'s {@link #type}</li>
     * <li><code>splitCls</code> : A CSS class to determine the presence and position of an arrow icon. (<code>'x-btn-arrow'</code> or <code>'x-btn-arrow-bottom'</code> or <code>''</code>)</li>
     * <li><code>cls</code> : A CSS class name applied to the Button's main &lt;tbody&gt; element which determines the button's scale and icon alignment.</li>
     * <li><code>text</code> : The {@link #text} to display ion the Button.</li>
     * <li><code>tabIndex</code> : The tab index within the input flow.</li>
     * </ul></div>
     * @return {Array} Substitution data for a Template.
    */
    getTemplateArgs: function() {
        var me = this,
            persistentPadding = me.getPersistentBtnPadding(),
            innerSpanStyle = '';

        // Create negative margin offsets to counteract persistent button padding if needed
        if (Math.max.apply(Math, persistentPadding) > 0) {
            innerSpanStyle = 'margin:' + Ext.Array.map(persistentPadding, function(pad) {
                return -pad + 'px';
            }).join(' ');
        }

        return {
            href     : me.getHref(),
            target   : me.target || '_blank',
            type     : me.type,
            splitCls : me.getSplitCls(),
            cls      : me.cls,
            text     : me.text || '&#160;',
            tabIndex : me.tabIndex,
            innerSpanStyle: innerSpanStyle
        };
    },

    /**
     * @private
     * If there is a configured href for this Button, returns the href with parameters appended.
     * @returns The href string with parameters appended.
     */
    getHref: function() {
        var me = this,
            params = Ext.apply({}, me.baseParams);
            
        // write baseParams first, then write any params
        params = Ext.apply(params, me.params);
        return me.href ? Ext.urlAppend(me.href, Ext.Object.toQueryString(params)) : false;
    },

    /**
     * <p><b>Only valid if the Button was originally configured with a {@link #url}</b></p>
     * <p>Sets the href of the link dynamically according to the params passed, and any {@link #baseParams} configured.</p>
     * @param {Object} params Parameters to use in the href URL.
     */
    setParams: function(params) {
        this.params = params;
        this.btnEl.dom.href = this.getHref();
    },

    getSplitCls: function() {
        var me = this;
        return me.split ? (me.baseCls + '-' + me.arrowCls) + ' ' + (me.baseCls + '-' + me.arrowCls + '-' + me.arrowAlign) : '';
    },

    // private
    afterRender: function() {
        var me = this;
        me.useSetClass = true;
        me.setButtonCls();
        me.doc = Ext.getDoc();
        this.callParent(arguments);
    },

    /**
     * Sets the CSS class that provides a background image to use as the button's icon.  This method also changes
     * the value of the {@link #iconCls} config internally.
     * @param {String} cls The CSS class providing the icon image
     * @return {Ext.button.Button} this
     */
    setIconCls: function(cls) {
        var me = this,
            btnIconEl = me.btnIconEl;
        if (btnIconEl) {
            // Remove the previous iconCls from the button
            btnIconEl.removeCls(me.iconCls);
            btnIconEl.addCls(cls || '');
            me.setButtonCls();
        }
        me.iconCls = cls;
        return me;
    },

    /**
     * Sets the tooltip for this Button.
     * @param {String/Object} tooltip. This may be:<div class="mdesc-details"><ul>
     * <li><b>String</b> : A string to be used as innerHTML (html tags are accepted) to show in a tooltip</li>
     * <li><b>Object</b> : A configuration object for {@link Ext.tip.QuickTipManager#register}.</li>
     * </ul></div>
     * @return {Ext.button.Button} this
     */
    setTooltip: function(tooltip, initial) {
        var me = this;

        if (me.rendered) {
            if (!initial) {
                me.clearTip();
            }
            if (Ext.isObject(tooltip)) {
                Ext.tip.QuickTipManager.register(Ext.apply({
                    target: me.btnEl.id
                },
                tooltip));
                me.tooltip = tooltip;
            } else {
                me.btnEl.dom.setAttribute('data-' + this.tooltipType, tooltip);
            }
        } else {
            me.tooltip = tooltip;
        }
        return me;
    },

    // private
    getRefItems: function(deep){
        var menu = this.menu,
            items;

        if (menu) {
            items = menu.getRefItems(deep);
            items.unshift(menu);
        }
        return items || [];
    },

    // private
    clearTip: function() {
        if (Ext.isObject(this.tooltip)) {
            Ext.tip.QuickTipManager.unregister(this.btnEl);
        }
    },

    // private
    beforeDestroy: function() {
        var me = this;
        if (me.rendered) {
            me.clearTip();
        }
        if (me.menu && me.destroyMenu !== false) {
            Ext.destroy(me.btnEl, me.btnInnerEl, me.menu);
        }
        Ext.destroy(me.repeater);
    },

    // private
    onDestroy: function() {
        var me = this;
        if (me.rendered) {
            me.doc.un('mouseover', me.monitorMouseOver, me);
            me.doc.un('mouseup', me.onMouseUp, me);
            delete me.doc;
            delete me.btnEl;
            delete me.btnInnerEl;
            Ext.ButtonToggleManager.unregister(me);
            
            Ext.destroy(me.keyMap);
            delete me.keyMap;
        }
        me.callParent();
    },

    /**
     * Assigns this Button's click handler
     * @param {Function} handler The function to call when the button is clicked
     * @param {Object} scope (optional) The scope (<code>this</code> reference) in which the handler function is executed.
     * Defaults to this Button.
     * @return {Ext.button.Button} this
     */
    setHandler: function(handler, scope) {
        this.handler = handler;
        this.scope = scope;
        return this;
    },

    /**
     * Sets this Button's text
     * @param {String} text The button text
     * @return {Ext.button.Button} this
     */
    setText: function(text) {
        var me = this;
        me.text = text;
        if (me.el) {
            me.btnInnerEl.update(text || '&#160;');
            me.setButtonCls();
        }
        me.doComponentLayout();
        return me;
    },

    /**
     * Sets the background image (inline style) of the button.  This method also changes
     * the value of the {@link #icon} config internally.
     * @param {String} icon The path to an image to display in the button
     * @return {Ext.button.Button} this
     */
    setIcon: function(icon) {
        var me = this,
            btnInnerEl = me.btnInnerEl;
        me.icon = icon;
        if (btnInnerEl) {
            btnInnerEl.setStyle('background-image', icon ? 'url(' + icon + ')': '');
            me.setButtonCls();
        }
        return me;
    },

    /**
     * Gets the text for this Button
     * @return {String} The button text
     */
    getText: function() {
        return this.text;
    },

    /**
     * If a state it passed, it becomes the pressed state otherwise the current state is toggled.
     * @param {Boolean} state (optional) Force a particular state
     * @param {Boolean} supressEvent (optional) True to stop events being fired when calling this method.
     * @return {Ext.button.Button} this
     */
    toggle: function(state, suppressEvent) {
        var me = this;
        state = state === undefined ? !me.pressed: !!state;
        if (state !== me.pressed) {
            if (me.rendered) {
                me[state ? 'addClsWithUI': 'removeClsWithUI'](me.pressedCls);
            }
            me.btnEl.dom.setAttribute('aria-pressed', state);
            me.pressed = state;
            if (!suppressEvent) {
                me.fireEvent('toggle', me, state);
                Ext.callback(me.toggleHandler, me.scope || me, [me, state]);
            }
        }
        return me;
    },

    /**
     * Show this button's menu (if it has one)
     */
    showMenu: function() {
        var me = this;
        if (me.rendered && me.menu) {
            if (me.tooltip) {
                Ext.tip.QuickTipManager.getQuickTip().cancelShow(me.btnEl);
            }
            if (me.menu.isVisible()) {
                me.menu.hide();
            }

            me.menu.showBy(me.el, me.menuAlign);
        }
        return me;
    },

    /**
     * Hide this button's menu (if it has one)
     */
    hideMenu: function() {
        if (this.hasVisibleMenu()) {
            this.menu.hide();
        }
        return this;
    },

    /**
     * Returns true if the button has a menu and it is visible
     * @return {Boolean}
     */
    hasVisibleMenu: function() {
        var menu = this.menu;
        return menu && menu.rendered && menu.isVisible();
    },

    // private
    onRepeatClick: function(repeat, e) {
        this.onClick(e);
    },

    // private
    onClick: function(e) {
        var me = this;
        if (me.preventDefault || (me.disabled && me.getHref()) && e) {
            e.preventDefault();
        }
        if (e.button !== 0) {
            return;
        }
        if (!me.disabled) {
            if (me.enableToggle && (me.allowDepress !== false || !me.pressed)) {
                me.toggle();
            }
            if (me.menu && !me.hasVisibleMenu() && !me.ignoreNextClick) {
                me.showMenu();
            }
            me.fireEvent('click', me, e);
            if (me.handler) {
                me.handler.call(me.scope || me, me, e);
            }
            me.onBlur();
        }
    },

    /**
     * @private mouseover handler called when a mouseover event occurs anywhere within the encapsulating element.
     * The targets are interrogated to see what is being entered from where.
     * @param e
     */
    onMouseOver: function(e) {
        var me = this;
        if (!me.disabled && !e.within(me.el, true, true)) {
            me.onMouseEnter(e);
        }
    },

    /**
     * @private mouseout handler called when a mouseout event occurs anywhere within the encapsulating element -
     * or the mouse leaves the encapsulating element.
     * The targets are interrogated to see what is being exited to where.
     * @param e
     */
    onMouseOut: function(e) {
        var me = this;
        if (!e.within(me.el, true, true)) {
            if (me.overMenuTrigger) {
                me.onMenuTriggerOut(e);
            }
            me.onMouseLeave(e);
        }
    },

    /**
     * @private mousemove handler called when the mouse moves anywhere within the encapsulating element.
     * The position is checked to determine if the mouse is entering or leaving the trigger area. Using
     * mousemove to check this is more resource intensive than we'd like, but it is necessary because
     * the trigger area does not line up exactly with sub-elements so we don't always get mouseover/out
     * events when needed. In the future we should consider making the trigger a separate element that
     * is absolutely positioned and sized over the trigger area.
     */
    onMouseMove: function(e) {
        var me = this,
            el = me.el,
            over = me.overMenuTrigger,
            overlap, btnSize;

        if (me.split) {
            if (me.arrowAlign === 'right') {
                overlap = e.getX() - el.getX();
                btnSize = el.getWidth();
            } else {
                overlap = e.getY() - el.getY();
                btnSize = el.getHeight();
            }

            if (overlap > (btnSize - me.getTriggerSize())) {
                if (!over) {
                    me.onMenuTriggerOver(e);
                }
            } else {
                if (over) {
                    me.onMenuTriggerOut(e);
                }
            }
        }
    },

    /**
     * @private Measures the size of the trigger area for menu and split buttons. Will be a width for
     * a right-aligned trigger and a height for a bottom-aligned trigger. Cached after first measurement.
     */
    getTriggerSize: function() {
        var me = this,
            size = me.triggerSize,
            side, sideFirstLetter, undef;
            
        if (size === undef) {
            side = me.arrowAlign;
            sideFirstLetter = side.charAt(0);
            size = me.triggerSize = me.el.getFrameWidth(sideFirstLetter) + me.btnWrap.getFrameWidth(sideFirstLetter) + (me.frameSize && me.frameSize[side] || 0);
        }
        return size;
    },

    /**
     * @private virtual mouseenter handler called when it is detected that the mouseout event
     * signified the mouse entering the encapsulating element.
     * @param e
     */
    onMouseEnter: function(e) {
        var me = this;
        me.addClsWithUI(me.overCls);
        me.fireEvent('mouseover', me, e);
    },

    /**
     * @private virtual mouseleave handler called when it is detected that the mouseover event
     * signified the mouse entering the encapsulating element.
     * @param e
     */
    onMouseLeave: function(e) {
        var me = this;
        me.removeClsWithUI(me.overCls);
        me.fireEvent('mouseout', me, e);
    },

    /**
     * @private virtual mouseenter handler called when it is detected that the mouseover event
     * signified the mouse entering the arrow area of the button - the <em>.
     * @param e
     */
    onMenuTriggerOver: function(e) {
        var me = this;
        me.overMenuTrigger = true;
        me.fireEvent('menutriggerover', me, me.menu, e);
    },

    /**
     * @private virtual mouseleave handler called when it is detected that the mouseout event
     * signified the mouse leaving the arrow area of the button - the <em>.
     * @param e
     */
    onMenuTriggerOut: function(e) {
        var me = this;
        delete me.overMenuTrigger;
        me.fireEvent('menutriggerout', me, me.menu, e);
    },
    
    // inherit docs
    enable : function(silent) {
        var me = this;

        me.callParent(arguments);
        
        me.removeClsWithUI('disabled');

        return me;
    },

    // inherit docs
    disable : function(silent) {
        var me = this;
        
        me.callParent(arguments);
        
        me.addClsWithUI('disabled');

        return me;
    },
    
    /**
     * Method to change the scale of the button. See {@link #scale} for allowed configurations.
     * @param {String} scale The scale to change to.
     */
    setScale: function(scale) {
        var me = this,
            ui = me.ui.replace('-' + me.scale, '');
        
        //check if it is an allowed scale
        if (!Ext.Array.contains(me.allowedScales, scale)) {
            throw('#setScale: scale must be an allowed scale (' + me.allowedScales.join(', ') + ')');
        }
        
        me.scale = scale;
        me.setUI(ui);
    },
    
    // inherit docs
    setUI: function(ui) {
        var me = this;
        
        //we need to append the scale to the UI, if not already done
        if (me.scale && !ui.match(me.scale)) {
            ui = ui + '-' + me.scale;
        }
        
        me.callParent([ui]);
        
        // Set all the state classNames, as they need to include the UI
        // me.disabledCls += ' ' + me.baseCls + '-' + me.ui + '-disabled';
    },
    
    // private
    onFocus: function(e) {
        var me = this;
        if (!me.disabled) {
            me.addClsWithUI(me.focusCls);
        }
    },

    // private
    onBlur: function(e) {
        var me = this;
        me.removeClsWithUI(me.focusCls);
    },

    // private
    onMouseDown: function(e) {
        var me = this;
        if (!me.disabled && e.button === 0) {
            me.addClsWithUI(me.pressedCls);
            me.doc.on('mouseup', me.onMouseUp, me);
        }
    },
    // private
    onMouseUp: function(e) {
        var me = this;
        if (e.button === 0) {
            if (!me.pressed) {
                me.removeClsWithUI(me.pressedCls);
            }
            me.doc.un('mouseup', me.onMouseUp, me);
        }
    },
    // private
    onMenuShow: function(e) {
        var me = this;
        me.ignoreNextClick = 0;
        me.addClsWithUI(me.menuActiveCls);
        me.fireEvent('menushow', me, me.menu);
    },

    // private
    onMenuHide: function(e) {
        var me = this;
        me.removeClsWithUI(me.menuActiveCls);
        me.ignoreNextClick = Ext.defer(me.restoreClick, 250, me);
        me.fireEvent('menuhide', me, me.menu);
    },

    // private
    restoreClick: function() {
        this.ignoreNextClick = 0;
    },

    // private
    onDownKey: function() {
        var me = this;

        if (!me.disabled) {
            if (me.menu) {
                me.showMenu();
            }
        }
    },

    /**
     * @private Some browsers (notably Safari and older Chromes on Windows) add extra "padding" inside the button
     * element that cannot be removed. This method returns the size of that padding with a one-time detection.
     * @return Array [top, right, bottom, left]
     */
    getPersistentBtnPadding: function() {
        var cls = Ext.button.Button,
            padding = cls.persistentPadding,
            btn, leftTop, btnEl, btnInnerEl;

        if (!padding) {
            padding = cls.persistentPadding = [0, 0, 0, 0]; //set early to prevent recursion

            if (!Ext.isIE) { //short-circuit IE as it sometimes gives false positive for padding
                // Create auto-size button offscreen and measure its insides
                btn = Ext.create('Ext.button.Button', {
                    renderTo: Ext.getBody(),
                    text: 'test',
                    style: 'position:absolute;top:-999px;'
                });
                btnEl = btn.btnEl;
                btnInnerEl = btn.btnInnerEl;
                btnEl.setSize(null, null); //clear any hard dimensions on the button el to see what it does naturally

                leftTop = btnInnerEl.getOffsetsTo(btnEl);
                padding[0] = leftTop[1];
                padding[1] = btnEl.getWidth() - btnInnerEl.getWidth() - leftTop[0];
                padding[2] = btnEl.getHeight() - btnInnerEl.getHeight() - leftTop[1];
                padding[3] = leftTop[0];

                btn.destroy();
            }
        }

        return padding;
    }

}, function() {
    var groups = {},
        g, i, l;

    function toggleGroup(btn, state) {
        if (state) {
            g = groups[btn.toggleGroup];
            for (i = 0, l = g.length; i < l; i++) {
                if (g[i] !== btn) {
                    g[i].toggle(false);
                }
            }
        }
    }
    // Private utility class used by Button
    Ext.ButtonToggleManager = {
        register: function(btn) {
            if (!btn.toggleGroup) {
                return;
            }
            var group = groups[btn.toggleGroup];
            if (!group) {
                group = groups[btn.toggleGroup] = [];
            }
            group.push(btn);
            btn.on('toggle', toggleGroup);
        },

        unregister: function(btn) {
            if (!btn.toggleGroup) {
                return;
            }
            var group = groups[btn.toggleGroup];
            if (group) {
                Ext.Array.remove(group, btn);
                btn.un('toggle', toggleGroup);
            }
        },

        /**
        * Gets the pressed button in the passed group or null
        * @param {String} group
        * @return Button
        */
        getPressed: function(group) {
            var g = groups[group],
                i = 0,
                len;
            if (g) {
                for (len = g.length; i < len; i++) {
                    if (g[i].pressed === true) {
                        return g[i];
                    }
                }
            }
            return null;
        }
    };
});

