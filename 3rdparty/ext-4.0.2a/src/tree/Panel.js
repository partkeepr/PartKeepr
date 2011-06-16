/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * The TreePanel provides tree-structured UI representation of tree-structured data.
 * A TreePanel must be bound to a {@link Ext.data.TreeStore}. TreePanel's support
 * multiple columns through the {@link #columns} configuration. 
 * 
 * Simple TreePanel using inline data.
 *
 * {@img Ext.tree.Panel/Ext.tree.Panel1.png Ext.tree.Panel component}
 * 
 * Code:
 *
 *     var store = Ext.create('Ext.data.TreeStore', {
 *         root: {
 *             expanded: true, 
 *             children: [
 *                 { text: "detention", leaf: true },
 *                 { text: "homework", expanded: true, children: [
 *                     { text: "book report", leaf: true },
 *                     { text: "alegrbra", leaf: true}
 *                 ] },
 *                 { text: "buy lottery tickets", leaf: true }
 *             ]
 *         }
 *     });     
 *
 *     Ext.create('Ext.tree.Panel', {
 *         title: 'Simple Tree',
 *         width: 200,
 *         height: 150,
 *         store: store,
 *         rootVisible: false,        
 *         renderTo: Ext.getBody()
 *     });
 */
Ext.define('Ext.tree.Panel', {
    extend: 'Ext.panel.Table',
    alias: 'widget.treepanel',
    alternateClassName: ['Ext.tree.TreePanel', 'Ext.TreePanel'],
    requires: ['Ext.tree.View', 'Ext.selection.TreeModel', 'Ext.tree.Column'],
    viewType: 'treeview',
    selType: 'treemodel',
    
    treeCls: Ext.baseCSSPrefix + 'tree-panel',

    deferRowRender: false,

    /**
     * @cfg {Boolean} lines False to disable tree lines. Defaults to true.
     */
    lines: true,
    
    /**
     * @cfg {Boolean} useArrows True to use Vista-style arrows in the tree. Defaults to false.
     */
    useArrows: false,
    
    /**
     * @cfg {Boolean} singleExpand True if only 1 node per branch may be expanded. Defaults to false.
     */
    singleExpand: false,
    
    ddConfig: {
        enableDrag: true,
        enableDrop: true
    },
    
    /** 
     * @cfg {Boolean} animate True to enable animated expand/collapse. Defaults to the value of {@link Ext#enableFx}.
     */
            
    /** 
     * @cfg {Boolean} rootVisible False to hide the root node. Defaults to true.
     */
    rootVisible: true,
    
    /** 
     * @cfg {Boolean} displayField The field inside the model that will be used as the node's text. Defaults to 'text'.
     */    
    displayField: 'text',

    /** 
     * @cfg {Ext.data.Model/Ext.data.NodeInterface/Object} root
     * Allows you to not specify a store on this TreePanel. This is useful for creating a simple tree with preloaded
     * data without having to specify a TreeStore and Model. A store and model will be created and root will be passed
     * to that store. For example:
     *
     *     Ext.create('Ext.tree.Panel', {
     *         title: 'Simple Tree',
     *         root: {
     *             text: "Root node",
     *             expanded: true,
     *             children: [
     *                 { text: "Child 1", leaf: true },
     *                 { text: "Child 2", leaf: true }
     *             ]
     *         },
     *         renderTo: Ext.getBody()
     *     });
     */
    root: null,
    
    // Required for the Lockable Mixin. These are the configurations which will be copied to the
    // normal and locked sub tablepanels
    normalCfgCopy: ['displayField', 'root', 'singleExpand', 'useArrows', 'lines', 'rootVisible', 'scroll'],
    lockedCfgCopy: ['displayField', 'root', 'singleExpand', 'useArrows', 'lines', 'rootVisible'],

    /**
     * @cfg {Boolean} hideHeaders True to hide the headers. Defaults to `undefined`.
     */
    
    /**
     * @cfg {Boolean} folderSort True to automatically prepend a leaf sorter to the store. Defaults to `undefined`.
     */ 
    
    constructor: function(config) {
        config = config || {};
        if (config.animate === undefined) {
            config.animate = Ext.enableFx;
        }
        this.enableAnimations = config.animate;
        delete config.animate;
        
        this.callParent([config]);
    },
    
    initComponent: function() {
        var me = this,
            cls = [me.treeCls];

        if (me.useArrows) {
            cls.push(Ext.baseCSSPrefix + 'tree-arrows');
            me.lines = false;
        }
        
        if (me.lines) {
            cls.push(Ext.baseCSSPrefix + 'tree-lines');
        } else if (!me.useArrows) {
            cls.push(Ext.baseCSSPrefix + 'tree-no-lines');
        }
        
        if (Ext.isString(me.store)) {
            me.store = Ext.StoreMgr.lookup(me.store);
        } else if (!me.store || Ext.isObject(me.store) && !me.store.isStore) {
            me.store = Ext.create('Ext.data.TreeStore', Ext.apply({}, me.store || {}, {
                root: me.root,
                fields: me.fields,
                model: me.model,
                folderSort: me.folderSort
            }));
        } else if (me.root) {
            me.store = Ext.data.StoreManager.lookup(me.store);
            me.store.setRootNode(me.root);
            if (me.folderSort !== undefined) {
                me.store.folderSort = me.folderSort;
                me.store.sort();
            }            
        }
        
        // I'm not sure if we want to this. It might be confusing
        // if (me.initialConfig.rootVisible === undefined && !me.getRootNode()) {
        //     me.rootVisible = false;
        // }
        
        me.viewConfig = Ext.applyIf(me.viewConfig || {}, {
            rootVisible: me.rootVisible,
            animate: me.enableAnimations,
            singleExpand: me.singleExpand,
            node: me.store.getRootNode(),
            hideHeaders: me.hideHeaders
        });
        
        me.mon(me.store, {
            scope: me,
            rootchange: me.onRootChange,
            clear: me.onClear
        });
    
        me.relayEvents(me.store, [
            /**
             * @event beforeload
             * Event description
             * @param {Ext.data.Store} store This Store
             * @param {Ext.data.Operation} operation The Ext.data.Operation object that will be passed to the Proxy to load the Store
             */
            'beforeload',

            /**
             * @event load
             * Fires whenever the store reads data from a remote data source.
             * @param {Ext.data.store} this
             * @param {Array} records An array of records
             * @param {Boolean} successful True if the operation was successful.
             */
            'load'   
        ]);
        
        me.store.on({
            /**
             * @event itemappend
             * Fires when a new child node is appended to a node in the tree.
             * @param {Tree} tree The owner tree
             * @param {Node} parent The parent node
             * @param {Node} node The newly appended node
             * @param {Number} index The index of the newly appended node
             */
            append: me.createRelayer('itemappend'),
            
            /**
             * @event itemremove
             * Fires when a child node is removed from a node in the tree
             * @param {Tree} tree The owner tree
             * @param {Node} parent The parent node
             * @param {Node} node The child node removed
             */
            remove: me.createRelayer('itemremove'),
            
            /**
             * @event itemmove
             * Fires when a node is moved to a new location in the tree
             * @param {Tree} tree The owner tree
             * @param {Node} node The node moved
             * @param {Node} oldParent The old parent of this node
             * @param {Node} newParent The new parent of this node
             * @param {Number} index The index it was moved to
             */
            move: me.createRelayer('itemmove'),
            
            /**
             * @event iteminsert
             * Fires when a new child node is inserted in a node in tree
             * @param {Tree} tree The owner tree
             * @param {Node} parent The parent node
             * @param {Node} node The child node inserted
             * @param {Node} refNode The child node the node was inserted before
             */
            insert: me.createRelayer('iteminsert'),
            
            /**
             * @event beforeitemappend
             * Fires before a new child is appended to a node in this tree, return false to cancel the append.
             * @param {Tree} tree The owner tree
             * @param {Node} parent The parent node
             * @param {Node} node The child node to be appended
             */
            beforeappend: me.createRelayer('beforeitemappend'),
            
            /**
             * @event beforeitemremove
             * Fires before a child is removed from a node in this tree, return false to cancel the remove.
             * @param {Tree} tree The owner tree
             * @param {Node} parent The parent node
             * @param {Node} node The child node to be removed
             */
            beforeremove: me.createRelayer('beforeitemremove'),
            
            /**
             * @event beforeitemmove
             * Fires before a node is moved to a new location in the tree. Return false to cancel the move.
             * @param {Tree} tree The owner tree
             * @param {Node} node The node being moved
             * @param {Node} oldParent The parent of the node
             * @param {Node} newParent The new parent the node is moving to
             * @param {Number} index The index it is being moved to
             */
            beforemove: me.createRelayer('beforeitemmove'),
            
            /**
             * @event beforeiteminsert
             * Fires before a new child is inserted in a node in this tree, return false to cancel the insert.
             * @param {Tree} tree The owner tree
             * @param {Node} parent The parent node
             * @param {Node} node The child node to be inserted
             * @param {Node} refNode The child node the node is being inserted before
             */
            beforeinsert: me.createRelayer('beforeiteminsert'),
             
            /**
             * @event itemexpand
             * Fires when a node is expanded.
             * @param {Node} this The expanding node
             */
            expand: me.createRelayer('itemexpand'),
             
            /**
             * @event itemcollapse
             * Fires when a node is collapsed.
             * @param {Node} this The collapsing node
             */
            collapse: me.createRelayer('itemcollapse'),
             
            /**
             * @event beforeitemexpand
             * Fires before a node is expanded.
             * @param {Node} this The expanding node
             */
            beforeexpand: me.createRelayer('beforeitemexpand'),
             
            /**
             * @event beforeitemcollapse
             * Fires before a node is collapsed.
             * @param {Node} this The collapsing node
             */
            beforecollapse: me.createRelayer('beforeitemcollapse')
        });
        
        // If the user specifies the headers collection manually then dont inject our own
        if (!me.columns) {
            if (me.initialConfig.hideHeaders === undefined) {
                me.hideHeaders = true;
            }
            me.columns = [{
                xtype    : 'treecolumn',
                text     : 'Name',
                flex     : 1,
                dataIndex: me.displayField         
            }];
        }
        
        if (me.cls) {
            cls.push(me.cls);
        }
        me.cls = cls.join(' ');
        me.callParent();
        
        me.relayEvents(me.getView(), [
            /**
             * @event checkchange
             * Fires when a node with a checkbox's checked property changes
             * @param {Ext.data.Model} node The node who's checked property was changed
             * @param {Boolean} checked The node's new checked state
             */
            'checkchange'
        ]);
            
        // If the root is not visible and there is no rootnode defined, then just lets load the store
        if (!me.getView().rootVisible && !me.getRootNode()) {
            me.setRootNode({
                expanded: true
            });
        }
    },
    
    onClear: function(){
        this.view.onClear();
    },
    
    setRootNode: function() {
        return this.store.setRootNode.apply(this.store, arguments);
    },
    
    getRootNode: function() {
        return this.store.getRootNode();
    },
    
    onRootChange: function(root) {
        this.view.setRootNode(root);
    },

    /**
     * Retrieve an array of checked records.
     * @return {Array} An array containing the checked records
     */
    getChecked: function() {
        return this.getView().getChecked();
    },
    
    isItemChecked: function(rec) {
        return rec.get('checked');
    },
        
    /**
     * Expand all nodes
     * @param {Function} callback (optional) A function to execute when the expand finishes.
     * @param {Object} scope (optional) The scope of the callback function
     */
    expandAll : function(callback, scope) {
        var root = this.getRootNode();
        if (root) {
            root.expand(true, callback, scope);
        }
    },

    /**
     * Collapse all nodes
     * @param {Function} callback (optional) A function to execute when the collapse finishes.
     * @param {Object} scope (optional) The scope of the callback function
     */
    collapseAll : function(callback, scope) {
        var root = this.getRootNode();
        if (root) {
            if (this.getView().rootVisible) {
                root.collapse(true, callback, scope);
            }
            else {
                root.collapseChildren(true, callback, scope);
            }
        }
    },

    /**
     * Expand the tree to the path of a particular node.
     * @param {String} path The path to expand. The path should include a leading separator.
     * @param {String} field (optional) The field to get the data from. Defaults to the model idProperty.
     * @param {String} separator (optional) A separator to use. Defaults to `'/'`.
     * @param {Function} callback (optional) A function to execute when the expand finishes. The callback will be called with
     * (success, lastNode) where success is if the expand was successful and lastNode is the last node that was expanded.
     * @param {Object} scope (optional) The scope of the callback function
     */
    expandPath: function(path, field, separator, callback, scope) {
        var me = this,
            current = me.getRootNode(),
            index = 1,
            view = me.getView(),
            keys,
            expander;
        
        field = field || me.getRootNode().idProperty;
        separator = separator || '/';
        
        if (Ext.isEmpty(path)) {
            Ext.callback(callback, scope || me, [false, null]);
            return;
        }
        
        keys = path.split(separator);
        if (current.get(field) != keys[1]) {
            // invalid root
            Ext.callback(callback, scope || me, [false, current]);
            return;
        }
        
        expander = function(){
            if (++index === keys.length) {
                Ext.callback(callback, scope || me, [true, current]);
                return;
            }
            var node = current.findChild(field, keys[index]);
            if (!node) {
                Ext.callback(callback, scope || me, [false, current]);
                return;
            }
            current = node;
            current.expand(false, expander);
        };
        current.expand(false, expander);
    },
    
    /**
     * Expand the tree to the path of a particular node, then selecti t.
     * @param {String} path The path to select. The path should include a leading separator.
     * @param {String} field (optional) The field to get the data from. Defaults to the model idProperty.
     * @param {String} separator (optional) A separator to use. Defaults to `'/'`.
     * @param {Function} callback (optional) A function to execute when the select finishes. The callback will be called with
     * (bSuccess, oLastNode) where bSuccess is if the select was successful and oLastNode is the last node that was expanded.
     * @param {Object} scope (optional) The scope of the callback function
     */
    selectPath: function(path, field, separator, callback, scope) {
        var me = this,
            keys,
            last;
        
        field = field || me.getRootNode().idProperty;
        separator = separator || '/';
        
        keys = path.split(separator);
        last = keys.pop();
        
        me.expandPath(keys.join(separator), field, separator, function(success, node){
            var doSuccess = false;
            if (success && node) {
                node = node.findChild(field, last);
                if (node) {
                    me.getSelectionModel().select(node);
                    Ext.callback(callback, scope || me, [true, node]);
                    doSuccess = true;
                }
            } else if (node === me.getRootNode()) {
                doSuccess = true;
            }
            Ext.callback(callback, scope || me, [doSuccess, node]);
        }, me);
    }
});

