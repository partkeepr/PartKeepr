org.jerrymouse.gui.widgets.searchField = Ext.extend(Ext.form.TwinTriggerField, {
    initComponent : function(){
		this.addEvents('startSearch', 'resetSearch');
		org.jerrymouse.gui.widgets.searchField.superclass.initComponent.call(this);
		
	    this.on('specialkey', function(f, e){
	        if(e.getKey() == e.ENTER){
	            this.onTrigger2Click();
	        }
	    }, this);
	    
	    
	},
	
	validationEvent:false,
	validateOnBlur:false,
	trigger1Class:'x-form-clear-trigger',
	trigger2Class:'x-form-search-trigger',
	hideTrigger1:true,
	width:140,
	hasSearch : false,
	paramName : 'query',
	
	onTrigger1Click : function(){
		this.fireEvent("resetSearch");
		this.el.dom.value = '';
		this.triggers[0].hide();
	},
	
	onTrigger2Click : function(){
		this.fireEvent("startSearch", this.getRawValue());
		this.triggers[0].show();
	}
});

Ext.reg('org.jerrymouse.gui.widgets.searchField', org.jerrymouse.gui.widgets.searchField);