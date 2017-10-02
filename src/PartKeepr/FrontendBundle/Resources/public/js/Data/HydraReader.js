/**
 * JSON-LD / Hydra Reader.
 *
 * Supports in-line references.
 */
Ext.define("PartKeepr.data.HydraReader", {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.hydra',

    totalProperty: 'hydra:totalItems',

    replacements: [],
    loadedRecords: {},

    getResponseData: function (response) {
        var data = this.callParent([response]);

        if (data["@type"] == "hydra:PagedCollection" || data["@type"] == "hydra:Collection") {
            this.setRootProperty("hydra:member");
        } else {
            this.setRootProperty("");
        }
        return data;
    },

    read: function(response, readOptions) {
        var data, result, responseText;

        if (response) {
            responseText = response.responseText;
            if (responseText) {
                result = this.getResponseData(response);
                if (result && result.__$isError) {
                    return new Ext.data.ResultSet({
                        total  : 0,
                        count  : 0,
                        records: [],
                        success: false,
                        message: result.msg
                    });
                } else {
                    data = this.readRecords(result, readOptions);
                }
            } else if (responseText !== '') {
                data = this.readRecords(response, readOptions);
            }
        }

        var replacement;

        for (var i=0;i<this.replacements.length;i++) {
            replacement = this.replacements[i];

            if (typeof this.loadedRecords[replacement.id] === "object")
            {
                replacement.record[replacement.setterName](this.loadedRecords[replacement.id]);
            }
        }

        return data || this.nullResultSet;
    },
    /**
     * Loads the record associations from the data object. Supports late-tree replacements.
     *
     * @param {Ext.data.Model} record The record to load associations for.
     * @param {Object} data The raw data object.
     * @param {Object} readOptions See {@link #read}.
     *
     * @private
     */
    readAssociated: function(record, data, readOptions) {
        var roles = record.associations,
            key, role;

        for (key in roles) {
            if (roles.hasOwnProperty(key)) {
                role = roles[key];
                // The class for the other role may not have loaded yet
                if (role.cls) {
                    if (typeof data[role.role] === "string") {
                        // Association is a string, save for later
                        this.replacements.push({
                            record: record,
                            associationKey: role.role,
                            id: data[role.role],
                            setterName: role.setterName
                        });
                    } else {
                        role.read(record, data, this, readOptions);
                    }

                }
            }
        }
    },

    /**
     * Overrides the changes of the JsonReader to support referenced associations.
     * @param root
     * @param readOptions
     * @returns {Array}
     */
    extractData: function(root, readOptions) {

        var me = this,
            entityType = readOptions && readOptions.model ? Ext.data.schema.Schema.lookupEntity(readOptions.model) : me.getModel(),
            schema = entityType.schema,
            includes = schema.hasAssociations(entityType) && me.getImplicitIncludes(),
            fieldExtractorInfo = me.getFieldExtractorInfo(entityType.fieldExtractors),
            length = root.length,
            records = new Array(length),
            typeProperty = me.getTypeProperty(),
            reader, node, nodeType, record, i;

        if (!length && Ext.isObject(root)) {
            root = [root];
            length = 1;
        }

        for (i = 0; i < length; i++) {
            record = root[i];
            if (!record.isModel) {
                // If we're given a model instance in the data, just push it on
                // without doing any conversion. Otherwise, create a record.
                node = record;

                // This Reader may be configured to produce different model types based on
                // a differentiator field in the incoming data:
                // typeProperty name be a string, a function which yields the child type, or an object: {
                //     name: 'mtype',
                //     namespace: 'MyApp'
                // }
                if (typeProperty && (nodeType = me.getChildType(schema, node, typeProperty))) {

                    reader = nodeType.getProxy().getReader();

                    record = reader.extractRecord(node, readOptions, nodeType,
                        schema.hasAssociations(nodeType) && reader.getImplicitIncludes(),
                        reader.getFieldExtractorInfo(nodeType.fieldExtractors));

                } else {
                    record = me.extractRecord(node, readOptions, entityType, includes,
                        fieldExtractorInfo);
                }

                var kk = {};

                this.loadedRecords[record.getId()] = record;

                // Generally we don't want to have references to XML documents
                // or XML nodes to hang around in memory but Trees need to be able
                // to access the raw XML node data in order to process its children.
                // See https://sencha.jira.com/browse/EXTJS-15785 and
                // https://sencha.jira.com/browse/EXTJS-14286
                if (record.isModel && record.isNode) {
                    record.raw = node;
                }
            }
            if (record.onLoad) {
                record.onLoad();
            }
            records[i] = record;
        }

        return records;
    }
});