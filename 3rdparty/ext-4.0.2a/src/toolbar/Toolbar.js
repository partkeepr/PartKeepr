/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.toolbar.Toolbar
 * @extends Ext.container.Container

Basic Toolbar class. Although the {@link Ext.container.Container#defaultType defaultType} for Toolbar is {@link Ext.button.Button button}, Toolbar 
elements (child items for the Toolbar container) may be virtually any type of Component. Toolbar elements can be created explicitly via their 
constructors, or implicitly via their xtypes, and can be {@link #add}ed dynamically.

__Some items have shortcut strings for creation:__

| Shortcut | xtype         | Class                         | Description                                        |
|:---------|:--------------|:------------------------------|:---------------------------------------------------|
| `->`     | `tbspacer`    | {@link Ext.toolbar.Fill}      | begin using the right-justified button container   |
| `-`      | `tbseparator` | {@link Ext.toolbar.Separator} | add a vertical separator bar between toolbar items |
| ` `      | `tbspacer`    | {@link Ext.toolbar.Spacer}    | add horiztonal space between elements              |

{@img Ext.toolbar.Toolbar/Ext.toolbar.Toolbar1.png Toolbar component}
Example usage:

    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width   : 500,
        items: [
            {
                // xtype: 'button', // default for Toolbars
                text: 'Button'
            },
            {
                xtype: 'splitbutton',
                text : 'Split Button'
            },
            // begin using the right-justified button container
            '->', // same as {xtype: 'tbfill'}, // Ext.toolbar.Fill
            {
                xtype    : 'textfield',
                name     : 'field1',
                emptyText: 'enter search term'
            },
            // add a vertical separator bar between toolbar items
            '-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
            'text 1', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
            {xtype: 'tbspacer'},// same as ' ' to create Ext.toolbar.Spacer
            'text 2',
            {xtype: 'tbspacer', width: 50}, // add a 50px space
            'text 3'
        ]
    });

Toolbars have {@link #enable} and {@link #disable} methods which when called, will enable/disable all items within your toolbar.

{@img Ext.toolbar.Toolbar/Ext.toolbar.Toolbar2.png Toolbar component}
Example usage:

    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width   : 400,
        items: [
            {
                text: 'Button'
            },
            {
                xtype: 'splitbutton',
                text : 'Split Button'
            },
            '->',
            {
                xtype    : 'textfield',
                name     : 'field1',
                emptyText: 'enter search term'
            }
        ]
    });

{@img Ext.toolbar.Toolbar/Ext.toolbar.Toolbar3.png Toolbar component}
Example usage:
    
    var enableBtn = Ext.create('Ext.button.Button', {
        text    : 'Enable All Items',
        disabled: true,
        scope   : this,
        handler : function() {
            //disable the enable button and enable the disable button
            enableBtn.disable();
            disableBtn.enable();
            
            //enable the toolbar
            toolbar.enable();
        }
    });
    
    var disableBtn = Ext.create('Ext.button.Button', {
        text    : 'Disable All Items',
        scope   : this,
        handler : function() {
            //enable the enable button and disable button
            disableBtn.disable();
            enableBtn.enable();
            
            //disable the toolbar
            toolbar.disable();
        }
    });
    
    var toolbar = Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width   : 400,
        margin  : '5 0 0 0',
        items   : [enableBtn, disableBtn]
    });

Adding items to and removing items from a toolbar is as simple as calling the {@link #add} and {@link #remove} methods. There is also a {@link #removeAll} method 
which remove all items within the toolbar.

{@img Ext.toolbar.Toolbar/Ext.toolbar.Toolbar4.png Toolbar component}
Example usage:

    var toolbar = Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width   : 700,
        items: [
            {
                text: 'Example Button'
            }
        ]
    });
    
    var addedItems = [];
    
    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width   : 700,
        margin  : '5 0 0 0',
        items   : [
            {
                text   : 'Add a button',
                scope  : this,
                handler: function() {
                    var text = prompt('Please enter the text for your button:');
                    addedItems.push(toolbar.add({
                        text: text
                    }));
                }
            },
            {
                text   : 'Add a text item',
                scope  : this,
                handler: function() {
                    var text = prompt('Please enter the text for your item:');
                    addedItems.push(toolbar.add(text));
                }
            },
            {
                text   : 'Add a toolbar seperator',
                scope  : this,
                handler: function() {
                    addedItems.push(toolbar.add('-'));
                }
            },
            {
                text   : 'Add a toolbar spacer',
                scope  : this,
                handler: function() {
                    addedItems.push(toolbar.add('->'));
                }
            },
            '->',
            {
                text   : 'Remove last inserted item',
                scope  : this,
                handler: function() {
                    if (addedItems.length) {
                        toolbar.remove(addedItems.pop());
                    } else if (toolbar.items.length) {
                        toolbar.remove(toolbar.items.last());
                    } else {
                        alert('No items in the toolbar');
                    }
                }
            },
            {
                text   : 'Remove all items',
                scope  : this,
                handler: function() {
                    toolbar.removeAll();
                }
            }
        ]
    });

 * @constructor
 * Creates a new Toolbar
 * @param {Object/Array} config A config object or an array of buttons to <code>{@link #add}</code>
 * @docauthor Robert Dougan <rob@sencha.com>
 * @markdown
 */
Ext.define('Ext.toolbar.Toolbar', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.toolbar.Fill',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'Ext.FocusManager'
    ],
    uses: [
        'Ext.toolbar.Separator'
    ],
    alias: 'widget.toolbar',
    alternateClassName: 'Ext.Toolbar',
    
    isToolbar: true,
    baseCls  : Ext.baseCSSPrefix + 'toolbar',
    ariaRole : 'toolbar',
    
    defaultType: 'button',
    
    /**
     * @cfg {Boolean} vertical
     * Set to `true` to make the toolbar vertical. The layout will become a `vbox`.
     * (defaults to `false`)
     */
    vertical: false,

    /**
     * @cfg {String/Object} layout
     * This class assigns a default layout (<code>layout:'<b>hbox</b>'</code>).
     * Developers <i>may</i> override this configuration option if another layout
     * is required (the constructor must be passed a configuration object in this
     * case instead of an array).
     * See {@link Ext.container.Container#layout} for additional information.
     */

    /**
     * @cfg {Boolean} enableOverflow
     * Defaults to false. Configure <code>true</code> to make the toolbar provide a button
     * which activates a dropdown Menu to show items which overflow the Toolbar's width.
     */
    enableOverflow: false,
    
    // private
    trackMenus: true,
    
    itemCls: Ext.baseCSSPrefix + 'toolbar-item',
    
    initComponent: function() {
        var me = this,
            keys;

        // check for simplified (old-style) overflow config:
        if (!me.layout && me.enableOverflow) {
            me.layout = { overflowHandler: 'Menu' };
        }
        
        if (me.dock === 'right' || me.dock === 'left') {
            me.vertical = true;
        }

        me.layout = Ext.applyIf(Ext.isString(me.layout) ? {
            type: me.layout
        } : me.layout || {}, {
            type: me.vertical ? 'vbox' : 'hbox',
            align: me.vertical ? 'stretchmax' : 'middle',
            clearInnerCtOnLayout: true
        });
        
        if (me.vertical) {
            me.addClsWithUI('vertical');
        }
        
        // @TODO: remove this hack and implement a more general solution
        if (me.ui === 'footer') {
            me.ignoreBorderManagement = true;
        }
        
        me.callParent();

        /**
         * @event overflowchange
         * Fires after the overflow state has changed.
         * @param {Object} c The Container
         * @param {Boolean} lastOverflow overflow state
         */
        me.addEvents('overflowchange');
        
        // Subscribe to Ext.FocusManager for key navigation
        keys = me.vertical ? ['up', 'down'] : ['left', 'right'];
        Ext.FocusManager.subscribe(me, {
            keys: keys
        });
    },

    /**
     * <p>Adds element(s) to the toolbar -- this function takes a variable number of
     * arguments of mixed type and adds them to the toolbar.</p>
     * <br><p><b>Note</b>: See the notes within {@link Ext.container.Container#add}.</p>
     * @param {Mixed} arg1 The following types of arguments are all valid:<br />
     * <ul>
     * <li>{@link Ext.button.Button} config: A valid button config object (equivalent to {@link #addButton})</li>
     * <li>HtmlElement: Any standard HTML element (equivalent to {@link #addElement})</li>
     * <li>Field: Any form field (equivalent to {@link #addField})</li>
     * <li>Item: Any subclass of {@link Ext.toolbar.Item} (equivalent to {@link #addItem})</li>
     * <li>String: Any generic string (gets wrapped in a {@link Ext.toolbar.TextItem}, equivalent to {@link #addText}).
     * Note that there are a few special strings that are treated differently as explained next.</li>
     * <li>'-': Creates a separator element (equivalent to {@link #addSeparator})</li>
     * <li>' ': Creates a spacer element (equivalent to {@link #addSpacer})</li>
     * <li>'->': Creates a fill element (equivalent to {@link #addFill})</li>
     * </ul>
     * @param {Mixed} arg2
     * @param {Mixed} etc.
     * @method add
     */

    // private
    lookupComponent: function(c) {
        if (Ext.isString(c)) {
            var shortcut = Ext.toolbar.Toolbar.shortcuts[c];
            if (shortcut) {
                c = {
                    xtype: shortcut
                };
            } else {
                c = {
                    xtype: 'tbtext',
                    text: c
                };
            }
            this.applyDefaults(c);
        }
        return this.callParent(arguments);
    },

    // private
    applyDefaults: function(c) {
        if (!Ext.isString(c)) {
            c = this.callParent(arguments);
            var d = this.internalDefaults;
            if (c.events) {
                Ext.applyIf(c.initialConfig, d);
                Ext.apply(c, d);
            } else {
                Ext.applyIf(c, d);
            }
        }
        return c;
    },

    // private
    trackMenu: function(item, remove) {
        if (this.trackMenus && item.menu) {
            var method = remove ? 'mun' : 'mon',
                me = this;

            me[method](item, 'menutriggerover', me.onButtonTriggerOver, me);
            me[method](item, 'menushow', me.onButtonMenuShow, me);
            me[method](item, 'menuhide', me.onButtonMenuHide, me);
        }
    },

    // private
    constructButton: function(item) {
        return item.events ? item : this.createComponent(item, item.split ? 'splitbutton' : this.defaultType);
    },

    // private
    onBeforeAdd: function(component) {
        if (component.is('field') || (component.is('button') && this.ui != 'footer')) {
            component.ui = component.ui + '-toolbar';
        }
        
        // Any separators needs to know if is vertical or not
        if (component instanceof Ext.toolbar.Separator) {
            component.setUI((this.vertical) ? 'vertical' : 'horizontal');
        }
        
        this.callParent(arguments);
    },

    // private
    onAdd: function(component) {
        this.callParent(arguments);

        this.trackMenu(component);
        if (this.disabled) {
            component.disable();
        }
    },

    // private
    onRemove: function(c) {
        this.callParent(arguments);
        this.trackMenu(c, true);
    },

    // private
    onButtonTriggerOver: function(btn){
        if (this.activeMenuBtn && this.activeMenuBtn != btn) {
            this.activeMenuBtn.hideMenu();
            btn.showMenu();
            this.activeMenuBtn = btn;
        }
    },

    // private
    onButtonMenuShow: function(btn) {
        this.activeMenuBtn = btn;
    },

    // private
    onButtonMenuHide: function(btn) {
        delete this.activeMenuBtn;
    }
}, function() {
    this.shortcuts = {
        '-' : 'tbseparator',
        ' ' : 'tbspacer',
        '->': 'tbfill'
    };
});
