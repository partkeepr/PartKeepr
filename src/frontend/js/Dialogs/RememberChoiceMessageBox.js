Ext.define('PartKeepr.RememberChoiceMessageBox', {
    extend: 'Ext.window.MessageBox',
   
    escButtonAction: null,
    
    initComponent: function () {
    	this.callParent();
    	
    	this.rememberChoiceCheckbox = Ext.create("Ext.form.field.Checkbox", {
    		margin: {
    			top: "10px"
    		},
    		boxLabel: i18n("Don't ask again")
    	});
    	
    	this.topContainer.add(this.rememberChoiceCheckbox);
    },
    onEsc: function() {
    	
    	if (this.escButtonAction !== null) {
    		var btnIdx;
    		
    		switch (this.escButtonAction) {
    			case "ok": btnIdx = 0; break;
    			case "yes": btnIdx = 1; break;
    			case "no": btnIdx = 2; break;
    			case "cancel": btnIdx = 3; break; 
    			default: btnIdx = 3; break;
    		}

    		this.btnCallback(this.msgButtons[btnIdx]);
    	} else {
    		this.callParent();
    	}
    }
});