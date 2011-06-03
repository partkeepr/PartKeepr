/**
 * @class Ext.menu.Item
 * @extends Ext.Component

 * A base class for all menu items that require menu-related functionality such as click handling,
 * sub-menus, icons, etc.
 * {@img Ext.menu.Menu/Ext.menu.Menu.png Ext.menu.Menu component}
__Example Usage:__
    Ext.create('Ext.menu.Menu', {
		width: 100,
		height: 100,
		floating: false,  // usually you want this set to True (default)
		renderTo: Ext.getBody(),  // usually rendered by it's containing component
		items: [{
		    text: 'icon item',
		    iconCls: 'add16'
		},{
			text: 'text item',
		},{                        
			text: 'plain item',
			plain: true        
		}]
	}); 

 * @xtype menuitem
 * @markdown
 * @constructor
 * @param {Object} config The config object
 */
Ext.define('Ext.menu.Item', {
    extend: 'Ext.Component',
    alias: 'widget.menuitem',
    alternateClassName: 'Ext.menu.TextItem',
    
    /**
     * @property {Boolean} activated
     * Whether or not this item is currently activated
     */

    /**
     * @cfg {String} activeCls
     * The CSS class added to the menu item when the item is activated (focused/mouseover).
     * Defaults to `Ext.baseCSSPrefix + 'menu-item-active'`.
     * @markdown
     */
    activeCls: Ext.baseCSSPrefix + 'menu-item-active',
    
    /**
     * @cfg {String} ariaRole @hide
     */
    ariaRole: 'menuitem',
    
    /**
     * @cfg {Boolean} canActivate
     * Whether or not this menu item can be activated when focused/mouseovered. Defaults to `true`.
     * @markdown
     */
    canActivate: true,
    
    /**
     * @cfg {Number} clickHideDelay
     * The delay in milliseconds to wait before hiding the menu after clicking the menu item.
     * This only has an effect when `hideOnClick: true`. Defaults to `1`.
     * @markdown
     */
    clickHideDelay: 1,
    
    /**
     * @cfg {Boolean} destroyMenu
     * Whether or not to destroy any associated sub-menu when this item is destroyed. Defaults to `true`.
     */
    destroyMenu: true,
    
    /**
     * @cfg {String} disabledCls
     * The CSS class added to the menu item when the item is disabled.
     * Defaults to `Ext.baseCSSPrefix + 'menu-item-disabled'`.
     * @markdown
     */
    disabledCls: Ext.baseCSSPrefix + 'menu-item-disabled',
    
    /**
     * @cfg {String} href
     * The href attribute to use for the underlying anchor link. Defaults to `#`.
     * @markdown
     */
     
     /**
      * @cfg {String} hrefTarget
      * The target attribute to use for the underlying anchor link. Defaults to `undefined`.
      * @markdown
      */
    
    /**
     * @cfg {Boolean} hideOnClick
     * Whether to not to hide the owning menu when this item is clicked. Defaults to `true`.
     * @markdown
     */
    hideOnClick: true,
    
    /**
     * @cfg {String} icon
     * The path to an icon to display in this item. Defaults to `Ext.BLANK_IMAGE_URL`.
     * @markdown
     */
     
    /**
     * @cfg {String} iconCls
     * A CSS class that specifies a `background-image` to use as the icon for this item. Defaults to `undefined`.
     * @markdown
     */
    
    isMenuItem: true,
    
    /**
     * @cfg {Mixed} menu
     * Either an instance of {@link Ext.menu.Menu} or a config object for an {@link Ext.menu.Menu}
     * which will act as a sub-menu to this item.
     * @markdown
     * @property {Ext.menu.Menu} menu The sub-menu associated with this item, if one was configured.
     */
    
    /**
     * @cfg {String} menuAlign
     * The default {@link Ext.core.Element#getAlignToXY Ext.Element.getAlignToXY} anchor position value for this
     * item's sub-menu relative to this item's position. Defaults to `'tl-tr?'`.
     * @markdown
     */
    menuAlign: 'tl-tr?',
    
    /**
     * @cfg {Number} menuExpandDelay
     * The delay in milliseconds before this item's sub-menu expands after this item is moused over. Defaults to `200`.
     * @markdown
     */
    menuExpandDelay: 200,
    
    /**
     * @cfg {Number} menuHideDelay
     * The delay in milliseconds before this item's sub-menu hides after this item is moused out. Defaults to `200`.
     * @markdown
     */
    menuHideDelay: 200,
    
    /**
     * @cfg {Boolean} plain
     * Whether or not this item is plain text/html with no icon or visual activation. Defaults to `false`.
     * @markdown
     */
    
    renderTpl: [
        '<tpl if="plain">',
            '{text}',
        '</tpl>',
        '<tpl if="!plain">',
            '<a class="' + Ext.baseCSSPrefix + 'menu-item-link" href="{href}" <tpl if="hrefTarget">target="{hrefTarget}"</tpl> hidefocus="true" unselectable="on">',
                '<img src="{icon}" class="' + Ext.baseCSSPrefix + 'menu-item-icon {iconCls}" />',
                '<span class="' + Ext.baseCSSPrefix + 'menu-item-text" <tpl if="menu">style="margin-right: 17px;"</tpl> >{text}</span>',
                '<tpl if="menu">',
                    '<img src="' + Ext.BLANK_IMAGE_URL + '" class="' + Ext.baseCSSPrefix + 'menu-item-arrow" />',
                '</tpl>',
            '</a>',
        '</tpl>'
    ],
    
    maskOnDisable: false,
    
    /**
     * @cfg {String} text
     * The text/html to display in this item. Defaults to `undefined`.
     * @markdown
     */
    
    activate: function() {
        var me = this;
        
        if (!me.activated && me.canActivate && me.rendered && !me.isDisabled() && me.isVisible()) {
            me.el.addCls(me.activeCls);
            me.focus();
            me.activated = true;
            me.fireEvent('activate', me);
        }
    },
    
    blur: function() {
        this.$focused = false;
        this.callParent(arguments);
    },
    
    deactivate: function() {
        var me = this;
        
        if (me.activated) {
            me.el.removeCls(me.activeCls);
            me.blur();
            me.hideMenu();
            me.activated = false;
            me.fireEvent('deactivate', me);
        }
    },
    
    deferExpandMenu: function() {
        var me = this;
        
        if (!me.menu.rendered || !me.menu.isVisible()) {
            me.parentMenu.activeChild = me.menu;
            me.menu.parentItem = me;
            me.menu.parentMenu = me.menu.ownerCt = me.parentMenu;
            me.menu.showBy(me, me.menuAlign);
        }
    },
    
    deferHideMenu: function() {
        if (this.menu.isVisible()) {
            this.menu.hide();
        }
    },
    
    deferHideParentMenus: function() {
        Ext.menu.Manager.hideAll();
    },
    
    expandMenu: function(delay) {
        var me = this;
        
        if (me.menu) {
            clearTimeout(me.hideMenuTimer);
            if (delay === 0) {
                me.deferExpandMenu();
            } else {
                me.expandMenuTimer = Ext.defer(me.deferExpandMenu, Ext.isNumber(delay) ? delay : me.menuExpandDelay, me);
            }
        }
    },
    
    focus: function() {
        this.$focused = true;
        this.callParent(arguments);
    },
    
    getRefItems: function(deep){
        var menu = this.menu,
            items;
        
        if (menu) {
            items = menu.getRefItems(deep);
            items.unshift(menu);
        }   
        return items || [];   
    },
    
    hideMenu: function(delay) {
        var me = this;
        
        if (me.menu) {
            clearTimeout(me.expandMenuTimer);
            me.hideMenuTimer = Ext.defer(me.deferHideMenu, Ext.isNumber(delay) ? delay : me.menuHideDelay, me);
        }
    },
    
    initComponent: function() {
        var me = this,
            prefix = Ext.baseCSSPrefix,
            cls = [prefix + 'menu-item'];
        
        me.addEvents(
            /**
             * @event activate
             * Fires when this item is activated
             * @param {Ext.menu.Item} item The activated item
             */
            'activate',
            
            /**
             * @event click
             * Fires when this item is clicked
             * @param {Ext.menu.Item} item The item that was clicked
             * @param {Ext.EventObject} e The underyling {@link Ext.EventObject}.
             */
            'click',
            
            /**
             * @event deactivate
             * Fires when this tiem is deactivated
             * @param {Ext.menu.Item} item The deactivated item
             */
            'deactivate'
        );
        
        if (me.plain) {
            cls.push(prefix + 'menu-item-plain');
        }
        
        if (me.cls) {
            cls.push(me.cls);
        }
        
        me.cls = cls.join(' ');
        
        if (me.menu) {
            me.menu = Ext.menu.Manager.get(me.menu);
        }
        
        me.callParent(arguments);
    },
    
    onClick: function(e) {
        var me = this;
        
        if (!me.href) {
            e.stopEvent();
        }
        
        if (me.disabled) {
            return;
        }
        
        if (me.hideOnClick) {
            me.deferHideParentMenusTimer = Ext.defer(me.deferHideParentMenus, me.clickHideDelay, me);
        }
        
        Ext.callback(me.handler, me.scope || me, [me, e]);
        me.fireEvent('click', me, e);
        
        if (!me.hideOnClick) {
            me.focus();
        }
    },
    
    onDestroy: function() {
        var me = this;
        
        clearTimeout(me.expandMenuTimer);
        clearTimeout(me.hideMenuTimer);
        clearTimeout(me.deferHideParentMenusTimer);
        
        if (me.menu) {
            delete me.menu.parentItem;
            delete me.menu.parentMenu;
            delete me.menu.ownerCt;
            if (me.destroyMenu !== false) {
                me.menu.destroy();
            }
        }
        me.callParent(arguments);
    },
    
    onRender: function(ct, pos) {
        var me = this,
            prefix = '.' + Ext.baseCSSPrefix;
        
        Ext.applyIf(me.renderData, {
            href: me.href || '#',
            hrefTarget: me.hrefTarget,
            icon: me.icon || Ext.BLANK_IMAGE_URL,
            iconCls: me.iconCls,
            menu: Ext.isDefined(me.menu),
            plain: me.plain,
            text: me.text
        });
        
        Ext.applyIf(me.renderSelectors, {
            itemEl: prefix + 'menu-item-link',
            iconEl: prefix + 'menu-item-icon',
            textEl: prefix + 'menu-item-text',
            arrowEl: prefix + 'menu-item-arrow'
        });
        
        me.callParent(arguments);
    },
    
    /**
     * Sets the {@link #click} handler of this item
     * @param {Function} fn The handler function
     * @param {Object} scope (optional) The scope of the handler function
     */
    setHandler: function(fn, scope) {
        this.handler = fn || null;
        this.scope = scope;
    },
    
    /**
     * Sets the {@link #iconCls} of this item
     * @param {String} iconCls The CSS class to set to {@link #iconCls}
     */
    setIconCls: function(iconCls) {
        var me = this;
        
        if (me.iconEl) {
            if (me.iconCls) {
                me.iconEl.removeCls(me.iconCls);
            }
            
            if (iconCls) {
                me.iconEl.addCls(iconCls);
            }
        }
        
        me.iconCls = iconCls;
    },
    
    /**
     * Sets the {@link #text} of this item
     * @param {String} text The {@link #text}
     */
    setText: function(text) {
        var me = this,
            el = me.textEl || me.el,
            newWidth;
        
        if (text && el) {
            el.update(text);
                
            if (me.textEl) {
                // Resize the menu to fit the text
                newWidth = me.textEl.getWidth() + me.iconEl.getWidth() + 25 + (me.arrowEl ? me.arrowEl.getWidth() : 0);
                if (newWidth > me.itemEl.getWidth()) {
                    me.parentMenu.setWidth(newWidth);
                }
            }
        } else if (el) {
            el.update('');
        }
        
        me.text = text;
    }
});
