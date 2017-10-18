Ext.define("PartKeepr.PresetCombobox", {
    extend: "Ext.form.field.ComboBox",

    xtype: 'presetcombo',

    config: {
        /**
         * The model to use
         * @var string
         */
        model: null,

        /**
         * The name of the field which contains the serialized configuration
         * @var string
         */
        configurationField: "configuration",

        /**
         * Additional fields to set. Contains a list of objects
         * which are defined like this:
         *
         * { fieldName: "baseEntity", value: "myvalue" }
         * @var array
         */
        additionalFields: [],

        /**
         * Defines the name of the preset name field
         * @var string
         */
        nameField: "name",

        /**
         * Preset for a blank configuration
         * @var object
         */
        blankConfiguration: {},

        /**
         * Defines if the configuration should be serialized or not
         * @var bool
         */
        serializeConfiguration: true,

        /**
         * Defines if the mark as default feature should be available
         */
        allowMarkAsDefault: false,

        /**
         * Defines which property defines if the preset is the default
         */
        markedAsDefaultProperty: null

    },

    returnObject: true,
    editable: false,
    emptyText: i18n("No preset selected"),
    forceSelection: true,
    allowBlank: true,
    valueField: '@id',

    triggers: {
        save: {
            cls: "x-form-trigger-save",
            weight: 1,
            tooltip: i18n("Save Preset"),
            handler: 'onSavePreset',
            scope: 'this'
        },
        add: {
            cls: "x-form-trigger-add",
            weight: 2,
            handler: 'onAddPreset',
            tooltip: i18n("Create blank preset"),
            scope: 'this'
        },
        delete: {
            cls: "x-form-trigger-delete",
            weight: 3,
            handler: 'onDeletePreset',
            scope: 'this',
            tooltip: i18n("Delete selected preset"),
            hidden: true
        },
        default: {
            cls: "x-form-trigger-markdefault",
            weight: 4,
            handler: 'onMarkPresetAsDefault',
            scope: 'this',
            tooltip: i18n("Mark selected preset as default"),
            hidden: true
        }
    },

    listeners: {
        change: 'onSelectionChange',
        scope: 'this'
    },

    /**
     * @event selectPreset
     * Fires after a preset has been selected
     * @param {String} The configuration which was selected
     */

    initComponent: function ()
    {
        console.log(this.markedAsDefaultProperty);
        if (this.allowMarkAsDefault) {
            this.tpl = Ext.create('Ext.XTemplate',
            '<ul class="x-list-plain"><tpl for=".">',
            '<li role="option" class="x-boundlist-item">',
            '<tpl if="'+this.markedAsDefaultProperty+' == 1">',
            '<span class="web-icon fugue-icon flag"></span>',
            '<tpl else>',
            '<span style="width: 16px; height: 16px; display: inline-block;"></span>',
            '</tpl> ',
            '{'+this.displayField+'}',
            '</li>',
            '</tpl></ul>'
        );
        }

        if (this.getModel() === null) {
            Ext.raise("The configuration property 'model' is not configured, but is required.");
        }

        if (this.getConfigurationField() === null) {
            Ext.raise("The configuration property 'configurationField' is not configured, but is required.");
        }

        this.store = Ext.create("Ext.data.Store", {
            model: this.model,
            autoLoad: true
        });

        this.on("select", this.onPresetSelect, this);

        this.callParent(arguments);
    },
    /**
     * Event handler to handle a preset selection. Fires the "selectPreset" event.
     */
    onPresetSelect: function ()
    {
        var configuration;
        if (this.serializeConfiguration) {
            // @todo check if the json string is correct and if it is not, display an error
            configuration = Ext.decode(this.getSelection().get(this.configurationField), true);
        } else {
            configuration = this.getSelection().get(this.configurationField);
        }
        this.fireEvent("selectPreset", configuration);
    },
    /**
     * Event handler to ask the user for the preset name, then calls onPresetNameEntered.
     */
    onSavePreset: function ()
    {
        var presetName;

        if (this.getSelectedRecord() !== null) {
            presetName = this.getSelectedRecord().get(this.nameField);
        } else {
            presetName = "New Preset";
        }

        Ext.Msg.prompt(i18n("Save Preset"), i18n("Preset Name"), this.onPresetNameEntered, this, false, presetName);
    },
    /**
     * Event handler to save the preset. Checks if a valid name was given, then calls savePreset on success.
     *
     * @param {String} buttonId The button ID which was clicked
     * @param {String} value The preset name
     */
    onPresetNameEntered: function (buttonId, value)
    {
        if (buttonId === "ok") {
            this.savePreset(value);
            // The previous method where save was only allowed if the preset name doesn't exist was removed. Unclear
            // why this was added in the first place.
        }
    },
    /**
     * Saves a preset with a given name
     * @param {String} presetName The preset name
     */
    savePreset: function (presetName)
    {
        var presetRecord = this.getSelectedRecord();

        if (presetRecord === null) {
            presetRecord = Ext.create(this.model);
        } else {
            if (presetName !== presetRecord.get(this.nameField)) {
                presetRecord = Ext.create(this.model);
            }
        }

        if (this.serializeConfiguration) {
            presetRecord.set(this.configurationField, Ext.encode(this.configuration));
        } else {
            presetRecord.set(this.configurationField, this.configuration);
        }
        presetRecord.set(this.nameField, presetName);

        var additionalField;

        for (var i = 0; i < this.additionalFields.length; i++) {
            additionalField = this.additionalFields[i];

            presetRecord.set(additionalField.fieldName, additionalField.value);
        }

        presetRecord.save({
            success: this.onAfterSave,
            scope: this
        });

    },
    /**
     * Handler to reload the store and select the newly added preset
     * @param {Ext.data.Model} presetRecord The preset to select
     */
    onAfterSave: function (presetRecord)
    {
        this.getStore().reload({
            scope: this,
            callback: function ()
            {
                this.select(presetRecord);
            }
        });
    },
    /**
     * Handler to confirm deletion. Calls deletePreset
     */
    onDeletePreset: function ()
    {
        Ext.Msg.confirm(
            i18n("Confirm preset deletion"),
            i18n("Are you sure to delete the preset?"),
            this.deletePreset,
            this);
    },
    /**
     * Deletes the currently selected preset if the yes button was clicked
     * @param {String} buttonId The selected button
     */
    deletePreset: function (buttonId)
    {
        if (buttonId === "yes") {
            var presetRecord = this.getSelectedRecord();
            presetRecord.erase();
            this.setSelection(null);
            this.setValue(null);
            this.fireEvent("selectPreset", this.blankConfiguration);
        }
    },
    /**
     * Creates a blank preset. Sets the selection to null and fires
     * selectPreset with blankConfiguration.
     */
    onAddPreset: function ()
    {
        this.setSelection(null);
        this.setValue(null);
        this.fireEvent("selectPreset", this.blankConfiguration);
    },
    /**
     * Sets the configuration for the preset
     */
    setConfiguration: function (configuration)
    {
        this.configuration = configuration;
    },
    /**
     * Sets the additional fields to use when creating or saving a record
     */
    setAdditionalFields: function (additionalFields)
    {
        this.additionalFields = additionalFields;
    },
    onMarkPresetAsDefault: function () {
        this.fireEvent("markAsDefault", this.getSelectedRecord());
    },
    /**
     * Handler to show/hide the delete button
     */
    onSelectionChange: function ()
    {
        if (this.getSelectedRecord() !== null) {
            this.triggers.delete.show();

            if (this.allowMarkAsDefault) {
                this.triggers.default.show();
            }
        } else {
            this.triggers.delete.hide();
            this.triggers.default.hide();
        }
    }
});
