/**
 * @class Ext.menu.CheckItem
 * @extends Ext.menu.Item

A menu item that contains a togglable checkbox by default, but that can also be a part of a radio group.
{@img Ext.menu.CheckItem/Ext.menu.CheckItem.png Ext.menu.CheckItem component}
__Example Usage__    
    Ext.create('Ext.menu.Menu', {
		width: 100,
		height: 110,
		floating: false,  // usually you want this set to True (default)
		renderTo: Ext.getBody(),  // usually rendered by it's containing component
		items: [{
		    xtype: 'menucheckitem',
		    text: 'select all'
		},{
		    xtype: 'menucheckitem',
			text: 'select specific',
		},{
            iconCls: 'add16',
		    text: 'icon item' 
		},{
		    text: 'regular item'
		}]
	}); 
	
 * @xtype menucheckitem
 * @markdown
 * @constructor
 * @param {Object} config The config object
 */

Ext.define('Ext.menu.CheckItem', {
    extend: 'Ext.menu.Item',
    alias: 'widget.menucheckitem',

    /**
     * @cfg {String} checkedCls
     * The CSS class used by {@link #cls} to show the checked state.
     * Defaults to `Ext.baseCSSPrefix + 'menu-item-checked'`.
     * @markdown
     */
    checkedCls: Ext.baseCSSPrefix + 'menu-item-checked',
    /**
     * @cfg {String} uncheckedCls
     * The CSS class used by {@link #cls} to show the unchecked state.
     * Defaults to `Ext.baseCSSPrefix + 'menu-item-unchecked'`.
     * @markdown
     */
    uncheckedCls: Ext.baseCSSPrefix + 'menu-item-unchecked',
    /**
     * @cfg {String} groupCls
     * The CSS class applied to this item's icon image to denote being a part of a radio group.
     * Defaults to `Ext.baseCSSClass + 'menu-group-icon'`.
     * Any specified {@link #iconCls} overrides this.
     * @markdown
     */
    groupCls: Ext.baseCSSPrefix + 'menu-group-icon',

    /**
     * @cfg {Boolean} hideOnClick
     * Whether to not to hide the owning menu when this item is clicked.
     * Defaults to `false` for checkbox items, and to `true` for radio group items.
     * @markdown
     */
    hideOnClick: false,

    afterRender: function() {
        var me = this;
        this.callParent();
        me.checked = !me.checked;
        me.setChecked(!me.checked, true);
    },

    initComponent: function() {
        var me = this;
        me.addEvents(
            /**
             * @event beforecheckchange
             * Fires before a change event. Return false to cancel.
             * @param {Ext.menu.CheckItem} this
             * @param {Boolean} checked
             */
            'beforecheckchange',

            /**
             * @event checkchange
             * Fires after a change event.
             * @param {Ext.menu.CheckItem} this
             * @param {Boolean} checked
             */
            'checkchange'
        );

        me.callParent(arguments);

        Ext.menu.Manager.registerCheckable(me);

        if (me.group) {
            if (!me.iconCls) {
                me.iconCls = me.groupCls;
            }
            if (me.initialConfig.hideOnClick !== false) {
                me.hideOnClick = true;
            }
        }
    },

    /**
     * Disables just the checkbox functionality of this menu Item. If this menu item has a submenu, that submenu
     * will still be accessible
     */
    disableCheckChange: function() {
        var me = this;

        me.iconEl.addCls(me.disabledCls);
        me.checkChangeDisabled = true;
    },

    /**
     * Reenables the checkbox functionality of this menu item after having been disabled by {@link #disableCheckChange}
     */
    enableCheckChange: function() {
        var me = this;

        me.iconEl.removeCls(me.disabledCls);
        me.checkChangeDisabled = false;
    },

    onClick: function(e) {
        var me = this;
        if(!me.disabled && !me.checkChangeDisabled && !(me.checked && me.group)) {
            me.setChecked(!me.checked);
        }
        this.callParent([e]);
    },

    onDestroy: function() {
        Ext.menu.Manager.unregisterCheckable(this);
        this.callParent(arguments);
    },

    /**
     * Sets the checked state of the item
     * @param {Boolean} checked True to check, false to uncheck
     * @param {Boolean} suppressEvents (optional) True to prevent firing the checkchange events. Defaults to `false`.
     * @markdown
     */
    setChecked: function(checked, suppressEvents) {
        var me = this;
        if (me.checked !== checked && (suppressEvents || me.fireEvent('beforecheckchange', me, checked) !== false)) {
            if (me.el) {
                me.el[checked  ? 'addCls' : 'removeCls'](me.checkedCls)[!checked ? 'addCls' : 'removeCls'](me.uncheckedCls);
            }
            me.checked = checked;
            Ext.menu.Manager.onCheckChange(me, checked);
            if (!suppressEvents) {
                Ext.callback(me.checkHandler, me.scope, [me, checked]);
                me.fireEvent('checkchange', me, checked);
            }
        }
    }
});
