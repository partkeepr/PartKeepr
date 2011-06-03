/**
 * Class tree.
 */
Ext.define('Docs.ClassTree', {
    extend: 'Ext.tree.Panel',

    id: 'treePanelCmp',
    cls: 'iScroll',
    renderTo: 'treePanel',
    folderSort: true,
    useArrows: true,
    rootVisible: false,

    height: Ext.core.Element.getViewportHeight() - 170,
    border: false,
    bodyBorder: false,
    padding: '0 0 0 20',

    listeners: {
        itemclick: function(view, node) {
            var clsName = node.raw ? node.raw.clsName : node.data.clsName;

            if (clsName) {
                Docs.ClassLoader.load(clsName);
            } else if (!node.isLeaf()) {
                if (node.isExpanded()) {
                    node.collapse(false);
                } else {
                    node.expand(false);
                }
            }
        }
    },

    initComponent: function() {
        // Expand the main tree
        this.root.expanded = true;
        this.root.children[0].expanded = true;
        // Add links for favoriting classes
        this.addFavIcons(this.root);

        this.callParent();
    },

    addFavIcons: function(node) {
        if (node.isClass) {
            node.text += '<a rel="'+node.id+'" class="fav"></a>';
        }
        if (node.children) {
            Ext.Array.forEach(node.children, this.addFavIcons, this);
        }
    },

    /**
     * Selects class node in tree by name.
     *
     * @param {String} className
     */
    selectClass: function(className) {
        var classNode = this.getRootNode().findChildBy(function(n) {
            return className === n.raw.clsName;
        }, null, true);

        if (classNode) {
            this.getSelectionModel().select(classNode);
            classNode.bubble(function(n) {
                n.expand();
            });
        }
    }
});
