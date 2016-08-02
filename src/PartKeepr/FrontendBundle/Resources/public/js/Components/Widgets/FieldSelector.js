Ext.define('PartKeepr.Components.Widgets.FieldSelector', {
    extend: 'Ext.tree.Panel',
    store: {
        folderSort: true,
        sorters: [
            {
                property: 'text',
                direction: 'ASC'
            }
        ]
    },
    useArrows: true,
    model: null,
    selModel: {
        mode: 'MULTI'
    },
    initiallyChecked: [],

    /**
     * @var {Array} Contains the models already in the field tree
     */
    visitedModels: [],

    initComponent: function () {
        this.callParent(arguments);

        var rootNode = this.getRootNode();
        rootNode.set("text", this.sourceModel.getName());
        this.treeMaker(rootNode, this.sourceModel, "");
        rootNode.expand();
    },
    /**
     * Builds the field tree recursively. Handles infinite recursions (e.g. in trees).
     *
     * @param {Ext.data.NodeInterface} The current node
     * @param {Ext.data.Model} The model
     * @param {String} The prefix. Omit if first called
     */
    treeMaker: function (node, model, prefix)
    {
        var fields = model.getFields();
        var checked;

        this.visitedModels.push(model.getName());
        for (var i = 0; i < fields.length; i++) {

            if (fields[i]["$reference"] === undefined) {
                checked = false;

                if (Ext.Array.contains(this.initiallyChecked, prefix + fields[i].name)) {
                    checked = true;
                }

                node.appendChild({
                    text: fields[i].name,
                    leaf: true,
                    checked: checked,
                    data: prefix + fields[i].name
                });
            } else {
                for (var j = 0; j < this.visitedModels.length; j++) {
                    if (this.visitedModels[j] === fields[i].reference.cls.getName()) {
                        return;
                    }
                }

                var childNode = node.appendChild({
                    text: fields[i].name,
                    expanded: true,
                    leaf: false
                });

                this.treeMaker(childNode, fields[i].reference.cls, prefix + fields[i].name + ".");
            }

        }
    }
});
