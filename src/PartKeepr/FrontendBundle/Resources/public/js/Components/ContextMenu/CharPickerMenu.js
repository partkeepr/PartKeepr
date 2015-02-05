Ext.define('PartKeepr.ContextMenu.CharPicker', {
     extend: 'Ext.menu.Menu',

     alias: 'widget.charpickermenu',

    /**
     * @cfg {Boolean} hideOnClick
     * False to continue showing the menu after a date is selected.
     */
    hideOnClick : true,

    /**
     * @cfg {String} pickerId
     * An id to assign to the underlying char picker.
     */
    pickerId : null,

    /**
     * @cfg {Number} maxHeight
     * @hide
     */

    /**
     * @property {PartKeepr.picker.Char} picker
     * The {@link PartKeepr.picker.Char} instance for this char picker
     */

    /**
     * @event click
     * @hide
     */

    /**
     * @event itemclick
     * @hide
     */

    initComponent : function(){
        var me = this,
            cfg = Ext.apply({}, me.initialConfig);

        // Ensure we don't get duplicate listeners
        delete cfg.listeners;
        Ext.apply(me, {
            plain: true,
            showSeparator: false,
            items: Ext.applyIf({
                cls: Ext.baseCSSPrefix + 'menu-char-item',
                id: me.pickerId,
                xtype: 'charpicker'
            }, cfg)
        });

        me.callParent(arguments);

        me.picker = me.down('charpicker');

        /**
         * @event select
         * @alias PartKeepr.picker.Char#select
         */
        me.relayEvents(me.picker, ['select']);

        if (me.hideOnClick) {
            me.on('select', me.hidePickerOnSelect, me);
        }
    },

    /**
     * Hides picker on select if hideOnClick is true
     * @private
     */
    hidePickerOnSelect: function() {
        Ext.menu.Manager.hideAll();
    }
 });
