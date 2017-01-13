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
        return;
    },
});
