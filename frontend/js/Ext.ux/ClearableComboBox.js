Ext.form.ClearableComboBox = Ext.extend(Ext.form.ComboBox, {
    initComponent: function() {
        this.triggerConfig = {
            tag:'span', cls:'x-form-twin-triggers', cn:[
            {tag: "img", src: Ext.BLANK_IMAGE_URL, cls: "x-form-trigger x-form-clear-trigger"},
            {tag: "img", src: Ext.BLANK_IMAGE_URL, cls: "x-form-trigger"}
        ]};
        Ext.form.ClearableComboBox.superclass.initComponent.call(this);
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
    getTrigger: Ext.form.TwinTriggerField.prototype.getTrigger,
    initTrigger: Ext.form.TwinTriggerField.prototype.initTrigger,
    onTrigger2Click: Ext.form.ComboBox.prototype.onTriggerClick,
    trigger1Class: Ext.form.ComboBox.prototype.triggerClass,
    trigger2Class: Ext.form.ComboBox.prototype.triggerClass,
    afterRender: Ext.form.TwinTriggerField.prototype.afterRender,
    getTriggerWidth: Ext.form.TwinTriggerField.prototype.getTriggerWidth,
    onDestroy: function(){
        Ext.destroy(this.triggers);
        Ext.form.ClearableComboBox.superclass.onDestroy.apply(this, arguments);
    }
});
Ext.reg('clearcombo', Ext.form.ClearableComboBox);