/**
 * Toolbar button with menu that appears when hovered over.
 */
Ext.define('Docs.view.HoverMenuButton', {
    extend: 'Ext.toolbar.TextItem',
    alias: 'widget.hovermenubutton',
    componentCls: "hover-menu-button",
    requires: [
        'Docs.view.HoverMenu'
    ],

    /**
     * @cfg {Ext.data.Store} store
     * Store with menu items (required).
     */

    /**
     * @cfg {Object} menuCfg
     * Additional config options for {@link Docs.view.HoverMenu}
     */
    menuCfg: {},

    /**
     * @cfg {Boolean} showCount
     * True to show small number in button indicating the number of items in menu.
     * Defaults to false.
     */
    showCount: false,

    statics: {
        // Global list of all menus.
        // So we can hide all other menus while showing a specific one.
        menus: []
    },

    initComponent: function() {
        this.addEvents(
            /**
             * @event click
             * Fired when button clicked.
             */
            "click",
            /**
             * @event closeclick
             * Fired when close link in menu clicked.
             * @param {String} name  Name of the class and or member that was closed.
             * For example "Ext.Ajax" or "Ext.Ajax-method-request".
             */
            "closeclick"
        );

        // Append links count to button text, update it when store filtered
        if (this.showCount) {
            this.initialText = this.text;
            this.text += ' <sup>' + this.store.getCount() + '</sup>';
            this.store.on("datachanged", function() {
                this.setText(this.initialText + ' <sup>' + this.store.getCount() + '</sup>');
            }, this);
        }

        this.menu = Ext.create('Docs.view.HoverMenu', Ext.apply({
            store: this.store
        }, this.menuCfg));

        this.callParent(arguments);
    },

    onRender: function() {
        this.callParent(arguments);

        this.renderMenu();

        this.getEl().on({
            click: function() {
                this.fireEvent("click");
            },
            mouseover: function() {
                // hide other menus
                Ext.Array.forEach(Docs.view.HoverMenuButton.menus, function(menu) {
                    if (menu !== this.menu) {
                        menu.hide();
                    }
                });
                // stop pending menuhide process
                clearTimeout(this.hideTimeout);
                this.menu.show();
                // position menu right below button and show it
                var p = this.getEl().getXY();
                this.menu.getEl().setStyle({
                    left: (p[0]-10)+"px",
                    top: (p[1]+23)+"px"
                });
            },
            mouseout: this.deferHideMenu,
            scope: this
        });

        this.menu.getEl().on({
            mouseover: function() {
                clearTimeout(this.hideTimeout);
            },
            mouseout: this.deferHideMenu,
            scope: this
        });

    },

    onDestroy: function() {
        // clean up DOM
        this.menu.destroy();
        // remove from global menu list
        Ext.Array.remove(Docs.view.HoverMenuButton.menus, this.menu);

        this.callParent(arguments);
    },

    renderMenu: function() {
        this.menu.getEl().setVisibilityMode(Ext.core.Element.DISPLAY);
        this.menu.hide();

        this.menu.getEl().addListener('click', function(e) {
            if (e.getTarget(".close")) {
                this.fireEvent("closeclick", e.getTarget().rel);
            } else {
                this.menu.hide();
            }
            e.preventDefault();
        }, this);

        Docs.view.HoverMenuButton.menus.push(this.menu);
    },

    deferHideMenu: function() {
        this.hideTimeout = Ext.Function.defer(function() {
            this.menu.hide();
        }, 200, this);
    },

    /**
     * Returns the store used by menu.
     * @return {Ext.data.Store}
     */
    getStore: function() {
        return this.store;
    }

});
