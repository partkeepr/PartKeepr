/**
 * Represents a form which is used to create multiple storage locations at once.
 * @class PartKeepr.StorageLocationMultiAddDialog
 */
Ext.define('PartKeepr.StorageLocationMultiAddDialog', {
    extend: 'Ext.form.Panel',

    // Layout settings
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    defaults: {
        border: false
    },

    bodyPadding: 5,

    /**
     * Initializes the component. Adds all form fields
     */
    initComponent: function () {

        /**
         * The prefix represents the first part of the storage location name,
         * e.g. "A" for storage locations "A0001".
         */
        this.storageLocationPrefix = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Name Prefix"),
            listeners: {
                change: {
                    fn: this.onFormChange,
                    scope: this
                }
            }
        });

        /**
         * Specifies the start of the numeric range.
         */
        this.storageLocationStart = Ext.create("Ext.form.field.Number", {
            fieldLabel: i18n("Start"),
            flex: 1,
            value: 1,
            minValue: 0,
            listeners: {
                change: {
                    fn: this.onFormChange,
                    scope: this
                }
            }
        });

        /**
         * Specifies the end of the numeric range.
         */
        this.storageLocationEnd = Ext.create("Ext.form.field.Number", {
            fieldLabel: i18n("End"),
            flex: 1,
            anchor: '100%',
            value: 10,
            minValue: 1,
            listeners: {
                change: {
                    fn: this.onFormChange,
                    scope: this
                }
            }
        });

        /**
         * Specifies if the storage locations should be prefixed with a zero (e.g. creates A0001 instead of A1).
         */
        this.storageLocationZeroPrefix = Ext.create("Ext.form.field.Checkbox", {
            boxLabel: i18n("Prefix with zeroes"),
            flex: 1,
            hideEmptyLabel: false,
            listeners: {
                change: {
                    fn: this.onFormChange,
                    scope: this
                }
            }
        });

        /**
         * Specifies the overall length of the storage location name. If you have a prefix "A" and numbers up to
         * 100, you can set the overall length to 5 to achieve "A0100", or to 6 to achieve "A00100".
         */
        this.storageLocationOverallLength = Ext.create("Ext.form.field.Number", {
            fieldLabel: i18n("Length"),
            flex: 1,
            disabled: true,
            listeners: {
                change: {
                    fn: this.onFormChange,
                    scope: this
                }
            }
        });

        /**
         * Creates a field which displays the storage locations to be created.
         */
        this.outputField = Ext.create("Ext.form.field.TextArea", {
            fieldLabel: i18n("Sample"),
            readOnly: true,
            flex: 1
        });

        this.items = [
            this.storageLocationPrefix,
            {
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    this.storageLocationStart,
                    this.storageLocationEnd
                ]
            },
            {
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    this.storageLocationZeroPrefix,
                    this.storageLocationOverallLength
                ]
            },
            this.outputField
        ];

        this.callParent();

        this.recalculateDemo();
    },
    /**
     * Called when something in the form has changed.
     */
    onFormChange: function () {
        /**
         * If the overall length is less than the prefix plus the length of the highest number, update it
         */
        if (this.storageLocationOverallLength.getValue() < this.getMinLength()) {
            this.storageLocationOverallLength.setValue(this.getMinLength());
        }

        /**
         * Make sure that the end value is bigger than the start value.
         */
        if (this.storageLocationStart.getValue() > this.storageLocationEnd.getValue()) {
            this.storageLocationEnd.setValue(this.storageLocationStart.getValue());
        }

        /**
         * Enable/Disable the length field if zero prefix is wanted
         */
        if (this.storageLocationZeroPrefix.getValue()) {
            this.storageLocationOverallLength.enable();
        } else {
            this.storageLocationOverallLength.disable();
        }

        this.recalculateDemo();
    },
    /**
     * Calculates the minimum length possible
     * @returns int The minimum length possible
     */
    getMinLength: function () {
        return strlen(this.storageLocationPrefix.getValue()) +
            strlen((this.storageLocationEnd.getValue()).toString());
    },
    /**
     * Updates the sample field
     */
    recalculateDemo: function () {
        this.outputField.setValue(implode("\n", this.getStorageLocations()));
    },
    /**
     * Returns all storage locations which are to be created
     * @returns {Array} The storage locations
     */
    getStorageLocations: function () {
        var j = [];

        for (var i = this.storageLocationStart.getValue(); i < this.storageLocationEnd.getValue() + 1; i++) {
            if (!this.storageLocationZeroPrefix.getValue()) {
                // No padding wanted
                j.push(this.storageLocationPrefix.getValue() + i);
            } else {
                var padLength = this.storageLocationOverallLength.getValue() -
                    ( strlen(this.storageLocationPrefix.getValue()) +
                    strlen(i));

                j.push(this.storageLocationPrefix.getValue() + str_repeat("0", padLength) + i);
            }

        }

        return j;
    }

});