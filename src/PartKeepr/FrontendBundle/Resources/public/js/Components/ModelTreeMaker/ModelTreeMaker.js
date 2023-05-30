/**
 * Creates a tree of nodes for a given model
 */
Ext.define("PartKeepr.ModelTreeMaker.ModelTreeMaker", {
    /**
     * @var {Array} Contains the models already in the field tree
     */
    visitedModels: [],

    /**
     * @var {Array} Field names which should be ignored.
     */
    ignoreFields: [],

    customFieldIgnorer: Ext.emptyFn,

    constructor: function ()
    {
        this.visitedModels = [];
    },

    /**
     * Adds a field to be ignored.
     *
     * @param {String} field The field to be ignored.
     */
    addIgnoreField: function (field)
    {
        this.ignoreFields.push(field);
    },
    setCustomFieldIgnorer: function (customIgnorer)
    {
        this.customFieldIgnorer = customIgnorer;
    },
    /**
     * Builds the field tree recursively. Handles infinite recursions (e.g. in trees).
     *
     * @param {Ext.data.NodeInterface} node The current node
     * @param {Ext.data.Model} model The model
     * @param {String} prefix The prefix. Omit if first called
     * @param {Function} callback The callback, optional
     */
    make: function (node, model, prefix, callback)
    {
        var newNode,i ,j, childNode, associationAlreadyProcessed;

        if (!prefix) {
            prefix = "";
        }

        if (!callback) {
            callback = null;
        }

        var fields = model.getFields();

        this.visitedModels.push(model.getName());

        for (i = 0; i < fields.length; i++) {
            if (fields[i]["reference"] === null) {
                // Field is a scalar field
                if (this.ignoreFields.indexOf(fields[i].name) === -1 && !this.customFieldIgnorer(fields[i])) {

                    newNode = node.appendChild(Ext.create("PartKeepr.Data.ReflectionFieldTreeModel", {
                        text: fields[i].name,
                        leaf: true,
                        data: {
                            name: prefix + fields[i].name,
                            type: "field"
                        },
                        entityIndex: ""
                    }));

                    if (callback) {
                        newNode.set(callback(fields[i], newNode));
                    }
                }
            } else {
                // Field is an association; recurse into associations
                associationAlreadyProcessed = false;
                for (j = 0; j < this.visitedModels.length; j++) {
                    if (this.visitedModels[j] === fields[i].reference.cls.getName()) {
                        // The association was already processed; skip return
                        associationAlreadyProcessed = true;
                    }
                }

                if (!associationAlreadyProcessed) {
                    childNode = node.appendChild(Ext.create("PartKeepr.Data.ReflectionFieldTreeModel", {
                        text: fields[i].name,
                        data: {
                            name: prefix + fields[i].name,
                            type: "manytoone"
                        },
                        leaf: false
                    }));

                    if (callback) {
                        childNode.set(callback(fields[i], childNode));
                    }

                    this.make(childNode, fields[i].reference.cls, prefix + fields[i].name + ".", callback);
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
                    childNode = node.appendChild(Ext.create("PartKeepr.Data.ReflectionFieldTreeModel",{
                        text: associations[i].role,
                        data: {
                            name: prefix + associations[i].role,
                            type: "onetomany",
                            reference: associations[i].cls
                        },
                        leaf: false
                    }));

                    if (callback) {
                        childNode.set(callback(associations[i].cls, childNode));
                    }

                    this.make(childNode, associations[i].cls, prefix + associations[i].role+ ".", callback);
                }
            }
        }
    }
});
