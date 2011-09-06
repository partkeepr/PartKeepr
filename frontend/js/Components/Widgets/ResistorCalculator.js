Ext.define("PartKeepr.ResistorCalculator",{
    extend:"Ext.window.Window",
    alias: 'widget.ResistorCalculator',
    
    width: 300,
    height: 300,
    layout: 'fit',
    initComponent: function () {
    	
    	//this.resistorValueField = Ext.create("Ext.form.field.Number");
    	this.resistorDisplay = Ext.create("PartKeepr.ResistorDisplay", {
    		viewBox: false
    	});
    	
    	/*this.resistorDisplay = Ext.create('Ext.draw.Component', {
    	    viewBox: false,
    	    items: [{
    	        type: 'circle',
    	        fill: '#79BB3F',
    	        radius: 100,
    	        x: 100,
    	        y: 100
    	    }]
    	});*/ 
    	
    	this.items = [ this.resistorDisplay ];
    	this.callParent();
    }
});