/**
 * Ext.ux.menu.StoreMenu  Addon
 *
 * Inspired from the Ext.ux.menu.StoreMenu for ExtJs 3 by Marco Wienkoop
 *
 * This version is a complete rewrite and enhanced for ExtJs 4 with some of the old features removed.
 * @author Joe Kuan
 * @docauthor Joe Kuan
 * Joe Kuan <kuan.joe@gmail.com>
 *
 * #Demo and Download
 * Here are the links for the online [demo](http://joekuan.org/demos/StoreMenu_ExtJs_4/) and [github](http://github.com/JoeKuan/StoreMenu_ExtJs_4)
 * download. For usage, see [license](http://github.com/JoeKuan/StoreMenu_ExtJs_4/blob/master/License).
 *
 * #Creating &amp; Applying StoreMenu
 *
 * Suppose we define a JSON Store for a list of menus as follows:
 *
 *      @example
 *      Ext.define('Menu', {
 *          extend: 'Ext.data.Model',
 *          fields: [ 'id', 'text', 'iconCls' ]
 *      });
 *
 *     var store = Ext.create('Ext.data.Store', {
 *         model: 'Menu',
 *         proxy: {
 *             type: 'ajax',
 *             url: 'demo/menu.php',
 *             reader: {
 *                type: 'json',
 *                root: 'root'
 *             }
 *         }
 *     });
 *
 *  The *id*, *text* and *iconCls* fields are mapped to menu item config.
 *
 *  Assume the file menu.php returns the following in JSON:
 *     @example
 *     { "success": true,
 *       "root": [{
 *                  "id": 1, "text": "Menu 1"
 *                 },{
 *                  "id": 2, "text": "Menu 2", "iconCls": "calendar"
 *                 },{
 *                  "id": 3, "text": "Menu 3"
 *                 }
 *        ]
 *     }
 *
 *  To produce a simple Window with store menu inside a toolbar, here is the code
 *     @example
 *     Ext.create('Ext.window.Window', {
 *         height: 380,
 *         width: 450,
 *         title: 'Menu Store for ExtJs 4',
 *         tbar: [{
 *            menu: Ext.create('Ext.ux.menu.StoreMenu', {
 *                      store: store,
 *                      itemsHandler: function(item, evt) {
 *                           Ext.example.msg("Store Menu",
 *                                           "You click on item with id " + item.id);
 *                      }
 *                  }),
 *            // Need this for empty menu - no items option
 *            showEmptyMenu: true,
 *            text: 'Menu Demo 1'
 *         }]
 *     }).show();
 *
 * Clicking any of the menus dynamically generated will call itemsHandler. To differentiate
 * between the menus, each menu item is created with the id option which is taken from the
 * id field of the store
 *
 * #StoreMenu without *items* option
 * The menu rendering policy has been changed since ExtJs 4.2.1 so that menu is not rendered
 * if the {@link Ext.menu.Menu#cfg-items} option is empty. Subsequently, this will stop the
 * store from loading, hence no dynamic menus will be displayed. In order to force the
 * StoreMenu to render, an option, {@link Ext.button.Button#cfg-showEmptyMenu},
 * is needed to pass to the owner button in this scenario.
 *
 * #Creating Specific Menus
 * For more specific menus, StoreMenu supports object specifier through single field name, *config*.
 * Store record with *config* field is expected to contain required options for creating menu objects, such as xtype.
 * Menus like: menucheckitem, separator can be specified through this scheme.
 * Moreover, this can be mixed with normal menu item creation which the data model definition
 * includes both field name schemes. The following shows an example for creating specific menus along with default
 * menu item through the store.
 *     @example
 *     Ext.define('Menu', {
 *         extend: 'Ext.data.Model',
 *         fields: [ 'id', 'text', 'iconCls', 'config' ]
 *     });
 *
 * The server side is configured to return the following menus in JSON:
 *     @example
 *     { "root": [{ "config": { "id": "2A", "text": "Menu 2A", "xtype": "menucheckitem"} },
 *                { "config": { "xtype": "menuseparator"} },
 *                { "id": "2C", "text": "Menu 2C" }
 *               ]
 *     }
 *
 * #Creating Submenus
 * The StoreMenu also supports submenu entries (single level only). The server will need to
 * return additional fields for including submenu entries (see menuField) and id string for
 * their handlers (see smHandlers).
 * The following is what the server side should return for submenus
 *     @example
 *     { "root": [{ "id": "3A", "text": "Menu 3A",
 *                  "menu": [{  "id": "3A-1", "text": "Submenu 3A-1", "smHandler": "submenu3A1" },
 *                           {  "id": "3A-2", "text": "Submenu 3A-2", "smHandler": "submenu3A2" }
 *               ]
 *     }
 * To bind with the submenu handlers, we can create the StoreMenu as follows:
 *     @example
 *     var menu3 = Ext.create('Ext.ux.menu.StoreMenu', {
 *         store: store,
 *         smHandlers: {
 *             submenu3A1: function(item) {
 *                 Ext.example.msg("Third Menu Store", "This is submenu handler specific for menu 3A-1");
 *             },
 *             submenu3A2: function(item) {
 *                 Ext.example.msg("Third Menu Store", "This is submenu handler specific for menu 3A-2");
 *             }
 *         }
 *     });
 *
 */
Ext.define("Ext.ux.menu.StoreMenu", {
    extend: 'Ext.menu.Menu',
    alias: 'widget.storemenu',

    config: {
        /***
         * message shown next to the store menu when it is loading
         */
        loadingText: 'Loading...',
        /**
         *  offset is to use with static menus, i.e. the offset position for
         *  the dynamic menus to start. E.g. if two static menus are included inside the items
         *  option, by setting *offset* to 2 the dynamic menus start below the static
         *  menus. Also a separator is added between static and dynamic menus
         */
        offset: 0,
        /**
         *  reload the store everytime the top menu is expanded
         */
        autoReload: true,
        /**
         *  nameField is to map the field for the menu title returning from the
         *  store.
         */
        nameField: 'text',

        /**
         *
         * optional Field of the store
         */
        url: 'url',

        /**
         *  idField is to map the menu id entry from the store
         */
        idField: 'id',
        /**
         *  iconField is to map the menu icon (iconCls)
         */
        iconField: 'iconCls',
        /**
         *  itemsHandler is the general menu handler for the __first level__ menus.
         *  For submenu handler, see subMenuHandler
         */
        itemsHandler: Ext.emptyFn,
        /**
         *  configField is used for specific menu types other than
         *  menu item (default). The config field returned from the server
         *  side is expected to hold all the required options to create the
         *  specific menu
         */
        configField: 'config',
        /**
         *  the field name containing the list of submenu entries in the store
         */
        menuField: 'menu'
    },

    /***
     * @property {Object} store
     * Data store for the menus &amp; submenus entries
     */
    store: null,

    // Keep track of what menu items have been added
    storeMenus: [],

    loaded: false,
    loadMask: null,

    onMenuLoad: function ()
    {
        if (!this.loaded || this.autoReload)
        {
            this.store.load();
        }
    },

    updateMenuItems: function (loadedState, records)
    {

        for (var i = 0; i < this.storeMenus.length; i++)
        {
            this.remove(this.storeMenus[i]);
        }
        this.storeMenus = [];

        if (loadedState)
        {

            // If offset is specified, it means we have to put the
            // dynamic menus after the static menus. We put a separator
            // to separate both
            var count = 0;
            if (this.offset)
            {
                this.storeMenus.push(this.insert(this.offset, {xtype: 'menuseparator'}));
                count = 1;
            }

            Ext.each(records, function (record)
            {

                var menuSettings = {};
                var patterns = {};
                patterns.protocol = '^(http(s)?(:\/\/)){1}(www[.])?';
                patterns.domain = '([a-zA-Z0-9-_\.])+';
                patterns.params = '([.][a-zA-Z0-9(-|\/|=|?)?]+)';
                var regex = new RegExp(patterns.protocol + patterns.domain + patterns.params + "$");


                if (record.data[this.configField])
                {
                    Ext.apply(menuSettings, record.data[this.configField]);
                } else
                {
                    menuSettings = {
                        id: record.data[this.idField],
                        text: record.data[this.nameField],
                        iconCls: record.data[this.iconField],
                        handler: this.itemsHandler
                    };
                    regex.test(record.data[this.url]) ? menuSettings.url = record.data[this.url] : "";
                }

                if (record.data[this.menuField])
                {
                    menuSettings.menu = {items: []};
                    Ext.each(record.data[this.menuField], function (menuitem)
                    {
                        // Make sure the handler name is defined
                        if (menuitem.smHandler && this.smHandlers[menuitem.smHandler])
                        {
                            menuSettings.menu.items.push({
                                id: menuitem[this.idField],
                                text: menuitem[this.nameField],
                                iconCls: menuitem[this.iconField],
                                url: menuItem[this.url],
                                handler: this.smHandlers[menuitem.smHandler]
                            });
                        }
                    }, this);
                }

                this.storeMenus.push(this.insert(this.offset + count, menuSettings));
                count++;
            }, this)

        } else
        {
            this.storeMenus.push(this.insert(this.offset,
                '<span class="loading-indicator">' +
                this.loadingText + '</span>'));
        }

        this.loaded = loadedState;
    },

    onBeforeLoad: function ()
    {
        this.updateMenuItems(false);
    },

    onLoad: function (store, records)
    {
        this.updateMenuItems(true, records);
    },

    /***
     * Set a submenu handler.
     * @param handlerType {String} the id value for the handler function
     * @param handler {Function} the handler implementation - See menuitem handler for function parameters
     */
    setSubMenuHandler: function (handlerType, handler)
    {
        this.smHandlers[handlerType] = handler;
    },

    /**
     *  A utility method for changing parameters of the underlying
     *  JSON store. Values inside params object will overwrite the store's
     *  existing parameters with the same name
     *  @param {Object} params an object of parameters to be set in the store
     */
    setParams: function (params)
    {
        Ext.apply(this.store.getProxy().extraParams, params);
    },

    setStore: function (store)
    {
        this.store = store;
    },

    /**
     * @cfg smHandlers {Object} is an object holding all the submenu handler implementations.
     * Inside the object, option name is the identifier for the handler function which is the option value.
     * (See the [submenu section] (#submenu) for example)
     */
    smHandlers: {},

    initComponent: function (config)
    {
        this.callParent(arguments);

        if (!this.store)
        {
            //at least url/proxy or data need to be given in config when initiating this
            // component
            this.store = Ext.create('Ext.data.Store', {
                model: this.model,
                remoteFilter: true
            });
        }

        this.on("beforeshow", this.onMenuLoad, this);
        this.store.on('beforeload', this.onBeforeLoad, this);
        this.store.on('load', this.onLoad, this);
    }

});
