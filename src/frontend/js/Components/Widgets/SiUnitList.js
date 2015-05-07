Ext.define('PartKeepr.SiUnitList', {
    extend: 'Ext.view.BoundList',
    alias: 'widget.siunitlist',
    getInnerTpl: function(displayField) {
        return '<span style="display: inline-block; width: 15px;">{' + displayField + '}</span><span style="display: inline-block; width: 40px;">{prefix}</span>(10<sup>{exponent}</span>)';
    }
});