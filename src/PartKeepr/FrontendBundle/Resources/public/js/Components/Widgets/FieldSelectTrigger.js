/**
 * A part picker with an attached grid.
 */
Ext.define("PartKeepr.Components.Widgets.FieldSelectTrigger", {
    extend: "Ext.form.field.Picker",
    xtype: 'fieldSelectTrigger',
    selectedValue: null,
    editable: false,

    config: {
        baseEntity: null
    },

    /**
     * Initializes the component.
     */
    initComponent: function ()
    {
        this.callParent();
        this.createPicker();

        // Automatically expand field when focused
        this.on("focus", function ()
        {
            this.onTriggerClick();
        }, this);
    },
    createPicker: function ()
    {
        this.fireEvent("beforeSelect", this);

        this.modelFieldSelector = Ext.create({
            xtype: 'modelFieldSelector',
            border: false,
            sourceModel: this.baseEntity,
            useCheckBoxes: false,
            flex: 1
        });

        this.picker = Ext.create("Ext.panel.Panel", {
            shrinkWrapDock: 2,
            layout: 'fit',
            floating: true,
            focusOnToFront: false,
            manageHeight: false,
            height: 300,
            minWidth: 350,
            shadow: false,
            ownerCmp: this,
            items: [this.modelFieldSelector]
        });

        this.modelFieldSelector.on("select",
            function (selModel, record)
            {
                this.setValue(record.data.data.name);
                this.collapse();
            }, this);

        return this.picker;
    }
});
