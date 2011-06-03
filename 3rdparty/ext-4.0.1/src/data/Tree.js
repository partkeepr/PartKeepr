/**
 * @class Ext.data.Tree
 * 
 * This class is used as a container for a series of nodes. The nodes themselves maintain
 * the relationship between parent/child. The tree itself acts as a manager. It gives functionality
 * to retrieve a node by its identifier: {@link #getNodeById}. 
 *
 * The tree also relays events from any of it's child nodes, allowing them to be handled in a 
 * centralized fashion. In general this class is not used directly, rather used internally 
 * by other parts of the framework.
 *
 * @constructor
 * @param {Node} root (optional) The root node
 */
Ext.define('Ext.data.Tree', {
    alias: 'data.tree',
    
    mixins: {
        observable: "Ext.util.Observable"
    },

    /**
     * The root node for this tree
     * @type Node
     */
    root: null,
        
    constructor: function(root) {
        var me = this;
        
        me.nodeHash = {};

        me.mixins.observable.constructor.call(me);
                        
        if (root) {
            me.setRootNode(root);
        }
    },

    /**
     * Returns the root node for this tree.
     * @return {Ext.data.NodeInterface}
     */
    getRootNode : function() {
        return this.root;
    },

    /**
     * Sets the root node for this tree.
     * @param {Ext.data.NodeInterface} node
     * @return {Ext.data.NodeInterface} The root node
     */
    setRootNode : function(node) {
        var me = this;
        
        me.root = node;
        Ext.data.NodeInterface.decorate(node);
        
        if (me.fireEvent('beforeappend', null, node) !== false) {
            node.set('root', true);
            node.updateInfo();
            
            me.relayEvents(node, [
                /**
                 * @event append
                 * Fires when a new child node is appended to a node in this tree.
                 * @param {Tree} tree The owner tree
                 * @param {Node} parent The parent node
                 * @param {Node} node The newly appended node
                 * @param {Number} index The index of the newly appended node
                 */
                "append",

                /**
                 * @event remove
                 * Fires when a child node is removed from a node in this tree.
                 * @param {Tree} tree The owner tree
                 * @param {Node} parent The parent node
                 * @param {Node} node The child node removed
                 */
                "remove",

                /**
                 * @event move
                 * Fires when a node is moved to a new location in the tree
                 * @param {Tree} tree The owner tree
                 * @param {Node} node The node moved
                 * @param {Node} oldParent The old parent of this node
                 * @param {Node} newParent The new parent of this node
                 * @param {Number} index The index it was moved to
                 */
                "move",

                /**
                 * @event insert
                 * Fires when a new child node is inserted in a node in this tree.
                 * @param {Tree} tree The owner tree
                 * @param {Node} parent The parent node
                 * @param {Node} node The child node inserted
                 * @param {Node} refNode The child node the node was inserted before
                 */
                "insert",

                /**
                 * @event beforeappend
                 * Fires before a new child is appended to a node in this tree, return false to cancel the append.
                 * @param {Tree} tree The owner tree
                 * @param {Node} parent The parent node
                 * @param {Node} node The child node to be appended
                 */
                "beforeappend",

                /**
                 * @event beforeremove
                 * Fires before a child is removed from a node in this tree, return false to cancel the remove.
                 * @param {Tree} tree The owner tree
                 * @param {Node} parent The parent node
                 * @param {Node} node The child node to be removed
                 */
                "beforeremove",

                /**
                 * @event beforemove
                 * Fires before a node is moved to a new location in the tree. Return false to cancel the move.
                 * @param {Tree} tree The owner tree
                 * @param {Node} node The node being moved
                 * @param {Node} oldParent The parent of the node
                 * @param {Node} newParent The new parent the node is moving to
                 * @param {Number} index The index it is being moved to
                 */
                "beforemove",

                /**
                 * @event beforeinsert
                 * Fires before a new child is inserted in a node in this tree, return false to cancel the insert.
                 * @param {Tree} tree The owner tree
                 * @param {Node} parent The parent node
                 * @param {Node} node The child node to be inserted
                 * @param {Node} refNode The child node the node is being inserted before
                 */
                "beforeinsert",

                 /**
                  * @event expand
                  * Fires when this node is expanded.
                  * @param {Node} this The expanding node
                  */
                 "expand",

                 /**
                  * @event collapse
                  * Fires when this node is collapsed.
                  * @param {Node} this The collapsing node
                  */
                 "collapse",

                 /**
                  * @event beforeexpand
                  * Fires before this node is expanded.
                  * @param {Node} this The expanding node
                  */
                 "beforeexpand",

                 /**
                  * @event beforecollapse
                  * Fires before this node is collapsed.
                  * @param {Node} this The collapsing node
                  */
                 "beforecollapse" ,

                 /**
                  * @event rootchange
                  * Fires whenever the root node is changed in the tree.
                  * @param {Ext.data.Model} root The new root
                  */
                 "rootchange"
            ]);
            
            node.on({
                scope: me,
                insert: me.onNodeInsert,
                append: me.onNodeAppend,
                remove: me.onNodeRemove
            });

            me.registerNode(node);        
            me.fireEvent('append', null, node);
            me.fireEvent('rootchange', node);
        }
            
        return node;
    },
    
    /**
     * Flattens all the nodes in the tree into an array.
     * @private
     * @return {Array} The flattened nodes.
     */
    flatten: function(){
        var nodes = [],
            hash = this.nodeHash,
            key;
            
        for (key in hash) {
            if (hash.hasOwnProperty(key)) {
                nodes.push(hash[key]);
            }
        }
        return nodes;
    },
    
    /**
     * Fired when a node is inserted into the root or one of it's children
     * @private
     * @param {Ext.data.NodeInterface} parent The parent node
     * @param {Ext.data.NodeInterface} node The inserted node
     */
    onNodeInsert: function(parent, node) {
        this.registerNode(node);
    },
    
    /**
     * Fired when a node is appended into the root or one of it's children
     * @private
     * @param {Ext.data.NodeInterface} parent The parent node
     * @param {Ext.data.NodeInterface} node The appended node
     */
    onNodeAppend: function(parent, node) {
        this.registerNode(node);
    },
    
    /**
     * Fired when a node is removed from the root or one of it's children
     * @private
     * @param {Ext.data.NodeInterface} parent The parent node
     * @param {Ext.data.NodeInterface} node The removed node
     */
    onNodeRemove: function(parent, node) {
        this.unregisterNode(node);
    },

    /**
     * Gets a node in this tree by its id.
     * @param {String} id
     * @return {Ext.data.NodeInterface} The match node.
     */
    getNodeById : function(id) {
        return this.nodeHash[id];
    },

    /**
     * Registers a node with the tree
     * @private
     * @param {Ext.data.NodeInterface} The node to register
     */
    registerNode : function(node) {
        this.nodeHash[node.getId() || node.internalId] = node;
    },

    /**
     * Unregisters a node with the tree
     * @private
     * @param {Ext.data.NodeInterface} The node to unregister
     */
    unregisterNode : function(node) {
        delete this.nodeHash[node.getId() || node.internalId];
    },
    
    /**
     * Sorts this tree
     * @private
     * @param {Function} sorterFn The function to use for sorting
     * @param {Boolean} recursive True to perform recursive sorting
     */
    sort: function(sorterFn, recursive) {
        this.getRootNode().sort(sorterFn, recursive);
    },
    
     /**
     * Filters this tree
     * @private
     * @param {Function} sorterFn The function to use for filtering
     * @param {Boolean} recursive True to perform recursive filtering
     */
    filter: function(filters, recursive) {
        this.getRootNode().filter(filters, recursive);
    }
});