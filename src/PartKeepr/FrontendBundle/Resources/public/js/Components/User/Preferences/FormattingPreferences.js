/**
 * Contains the formatting preferences for various places throughout the system
 */
Ext.define('PartKeepr.FormattingPreferencesPanel', {
    extend: 'Ext.form.Panel',
    title: i18n("Formatting"),
    bodyStyle: 'background:#DBDBDB;padding: 10px;',

    buttonAlign: 'left',

    initComponent: function ()
    {

        this.createWidgets();
        this.loadDefaults();


        this.buttons = [
        {
            text: i18n("Save"),
            handler: "saveSettings",
            scope: this
        }
    ];
        this.items = [
            this.priceNumDecimalsField,
            this.useThousandSeparatorCheckbox,
            this.currencySymbolField,
            this.currencyAtEndCheckbox
        ];

        this.callParent();
    },
    saveSettings: function ()
    {
        PartKeepr.getApplication().setUserPreference("partkeepr.formatting.currency.numdecimals",
            this.priceNumDecimalsField.getValue());

        PartKeepr.getApplication().setUserPreference("partkeepr.formatting.currency.thousandsSeparator",
            this.useThousandSeparatorCheckbox.getValue());

        PartKeepr.getApplication().setUserPreference("partkeepr.formatting.currency.symbol",
            this.currencySymbolField.getValue());

        PartKeepr.getApplication().setUserPreference(
            "partkeepr.formatting.currency.currencySymbolAtEnd", this.currencyAtEndCheckbox.getValue());

    },
    /**
     * Loads the defaults for the user preferences
     *
     * @param none
     * @return nothing
     */
    loadDefaults: function ()
    {
        var numDecimals = PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.numdecimals", 2);
        this.priceNumDecimalsField.setValue(numDecimals);

        var useThousandsSeparator = PartKeepr.getApplication().getUserPreference(
            "partkeepr.formatting.currency.thousandsSeparator", true);
        this.useThousandSeparatorCheckbox.setValue(useThousandsSeparator);


        var currencyAtEnd = PartKeepr.getApplication().getUserPreference(
            "partkeepr.formatting.currency.currencySymbolAtEnd", true);
        this.currencyAtEndCheckbox.setValue(currencyAtEnd);

        var currencySymbol = PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.symbol", "€");
        this.currencySymbolField.setValue(currencySymbol);
    },
    /**
     * Creates the widgets used in this form.
     *
     * @param none
     * @return nothing
     *
     */
    createWidgets: function ()
    {
        this.priceNumDecimalsField = Ext.create("Ext.form.field.Number", {
            name: 'priceNumDecimalsField',
            fieldLabel: i18n('Decimal precision'),
            labelWidth: 120,
            columnWidth: 0.5,
            minValue: 0,
            maxValue: 4,
            allowDecimals: false
        });

        this.useThousandSeparatorCheckbox = Ext.create("Ext.form.field.Checkbox", {
            boxLabel: i18n("Separate thousands"),
            labelWidth: 120,
            hideEmptyLabel: false
        });

        this.currencySymbolField = Ext.create("Ext.form.field.Text", {
            fieldLabel: i18n("Currency Symbol"),
            labelWidth: 120,
            maxLength: 5
        });

        this.currencyAtEndCheckbox = Ext.create("Ext.form.field.Checkbox", {
            boxLabel: i18n("Currency Symbol after value"),
            labelWidth: 120,
            hideEmptyLabel: false
        });
    }
});
