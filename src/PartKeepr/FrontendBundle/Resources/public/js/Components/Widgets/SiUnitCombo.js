Ext.define("PartKeepr.Components.Widgets.SiUnitCombo", {
    extend: "Ext.form.field.ComboBox",
    xtype: 'SiUnitCombo',

    forceSelection: true,
    singleSelect: true,
    editable: true,
    typeAhead: true,

    queryMode: 'local',
    displayField: 'symbol',
    valueField: 'symbol',

    defaultListConfig: {
        loadingHeight: 70,
        minWidth: 150,
        maxHeight: 300,
        shadow: 'sides'
    },

    createPicker: function ()
    {
        var me = this,
            picker,
            pickerCfg = Ext.apply({
                xtype: 'siunitlist',
                id: me.pickerId,
                pickerField: me,
                selectionModel: me.pickerSelectionModel,
                floating: true,
                hidden: true,
                store: me.getPickerStore(),
                displayField: me.displayField,
                preserveScrollOnRefresh: true,
                pageSize: me.pageSize,
                tpl: me.tpl
            }, me.listConfig, me.defaultListConfig);

        picker = me.picker = Ext.widget(pickerCfg);
        if (me.pageSize) {
            picker.pagingToolbar.on('beforechange', me.onPageChange, me);
        }

        // We limit the height of the picker to fit in the space above
        // or below this field unless the picker has its own ideas about that.
        if (!picker.initialConfig.maxHeight) {
            picker.on({
                beforeshow: me.onBeforePickerShow,
                scope: me
            });
        }
        picker.getSelectionModel().on({
            beforeselect: me.onBeforeSelect,
            beforedeselect: me.onBeforeDeselect,
            focuschange: me.onFocusChange,
            scope: me
        });

        picker.getNavigationModel().navigateOnSpace = false;

        return picker;
    }
});
