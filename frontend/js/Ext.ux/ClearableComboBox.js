Ext.define('Ext.ux.ClearableComboBox', {
	extend: "Ext.form.ComboBox",
	alias: "widget.clearcombo",
    initComponent: function() {
        this.triggerConfig = {
            tag:'span', cls:'x-form-twin-triggers', cn:[
            {tag: "img", src: Ext.BLANK_IMAGE_URL, cls: "x-form-trigger x-form-clear-trigger"},
            {tag: "img", src: Ext.BLANK_IMAGE_URL, cls: "x-form-trigger"}
        ]};
        
        this.callParent();
    },
    onTrigger1Click : function()
    {
        this.collapse();
        this.setValue('');
        this.fireEvent('cleared');
    },
    setValue : function(v){
	Ext.form.ClearableComboBox.superclass.setValue.call(this, v);
	if (this.rendered) {
		this.triggers[0][!Ext.isEmpty(v) ? 'show': 'hide']();
	}
    },
    onDestroy: function(){
        Ext.destroy(this.triggers);
        Ext.form.ClearableComboBox.superclass.onDestroy.apply(this, arguments);
    }
});
