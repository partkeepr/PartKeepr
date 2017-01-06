Ext.define('PartKeepr.SiUnitList', {
    extend: 'Ext.view.BoundList',
    alias: 'widget.siunitlist',
    getInnerTpl: function(displayField) {
        return '<span style="display: inline-block; width: 15px;">{' + displayField + '}</span><span style="display: inline-block; width: 40px;">{prefix}</span>(10<sup>{exponent}</span>)';
    },
    initComponent: function () {
        this.callParent(arguments);

        this.getSelectionModel().on("select", this.onItemSelect, this);

    },
    onItemSelect: function(selection, record) {
        if (record !== null) {
            this.pickerField.collapse();
        }
        console.log(record);
        return;
        // The selection change events won't fire when clicking on the selected element. Detect it here.
        var me = this,
            pickerField = me.pickerField,
            valueField = pickerField.valueField,
            selected = me.getSelectionModel().getSelection();

        console.log(valueField);
        console.log(me.getSelectionModel());
        if (!pickerField.multiSelect && selected.length) {
            selected = selected[0];
            // Not all pickerField's have a collapse API, i.e. Ext.ux.form.MultiSelect.
            console.log(selected);
            console.log(record.get(valueField));
            console.log(selected.get(valueField));

            if (selected && pickerField.isEqual(record.get(valueField), selected.get(valueField)) && pickerField.collapse) {
                console.log("FOO123");
                pickerField.collapse();
            }
        }
    },
});
