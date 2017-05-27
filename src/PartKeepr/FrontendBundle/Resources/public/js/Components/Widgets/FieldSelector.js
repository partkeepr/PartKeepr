Ext.define('PartKeepr.Components.Widgets.FieldSelector', {
    extend: 'Ext.tree.Panel',
    xtype: 'modelFieldSelector',
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

    /**
     * @var {Array} Contains the nodes which are checked by default
     */
    initiallyChecked: [],

    /**
     * @var {Array} Contains the models already in the field tree
     */
    visitedModels: [],

    /**
     * @var {Boolean} True to recurse into associations, false otherwise.
     */
    recurseSubModels: true,

    /**
     * @var {Array} An array which excludes the fields listed
     */
    excludeFields: [],

    /**
     * @var {Array} An array which excludes the models listed
     */
    excludeModels: [],

    useCheckBoxes: true,

    initComponent: function ()
    {
        this.callParent(arguments);
        this.visitedModels = [];

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
    treeMaker: function (node, model, prefix, callback)
    {
        var fields = model.getFields();
        var checked;
        var newNode;
        var j, childNode;
        var skipSubModel = false, associationAlreadyProcessed;

        this.visitedModels.push(model.getName());
        for (var i = 0; i < fields.length; i++) {
            if (!fields[i]["persist"]) {
                continue;
            }

            if (fields[i]["reference"] === null) {
                checked = false;

                if (Ext.Array.contains(this.initiallyChecked, prefix + fields[i].name)) {
                    checked = true;
                }

                if (!Ext.Array.contains(this.excludeFields, prefix + fields[i].name)) {
                    newNode = {
                        text: fields[i].name,
                        leaf: true,
                        data: {
                            name: prefix + fields[i].name,
                            type: "field"
                        }
                    };

                    if (this.useCheckBoxes) {
                        newNode.checked = checked;
                    }
                    node.appendChild(newNode);
                }
            } else {
                if (this.recurseSubModels) {
                    skipSubModel = false;
                    for (j = 0; j < this.visitedModels.length; j++) {
                        if (this.visitedModels[j] === fields[i].reference.cls.getName()) {
                            skipSubModel = true;
                        }
                    }

                    for (j = 0; j < this.excludeModels.length; j++) {
                        if (this.excludeModels[j] === fields[i].reference.cls.getName()) {
                            skipSubModel = true;
                        }
                    }

                    if (skipSubModel === false) {
                        childNode = node.appendChild({
                            text: fields[i].name,
                            expanded: true,
                            data: {
                                name: prefix + fields[i].name,
                                type: "manytoone",
                                reference: fields[i].reference.cls,
                                model: fields[i].reference.cls.getName()
                            },
                            leaf: false
                        });

                        this.treeMaker(childNode, fields[i].reference.cls, prefix + fields[i].name + ".");
                    }
                }
            }

        }

        var associations = model.associations;


        for (i in associations) {
            associationAlreadyProcessed = false;
            if (typeof(associations[i].storeName) !== "undefined" && associations[i].isMany === true) {
                for (j = 0; j < this.visitedModels.length; j++) {
                    if (this.visitedModels[j] === associations[i].type) {
                        associationAlreadyProcessed = true;
                    }
                }

                if (!associationAlreadyProcessed) {
                    childNode = node.appendChild({
                        text: associations[i].role,
                        expanded: true,
                        data: {
                            name: prefix + associations[i].role,
                            type: "onetomany",
                            reference: associations[i].cls
                        },
                        leaf: false
                    });

                    if (callback !== undefined) {
                        childNode.set(callback(associations[i].cls, childNode));
                    }

                    this.treeMaker(childNode, associations[i].cls, prefix + associations[i].role + ".", callback);
                }
            }
        }
    }
});
