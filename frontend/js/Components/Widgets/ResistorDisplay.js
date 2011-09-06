Ext.define("PartKeepr.ResistorDisplay",{
    extend:"Ext.draw.Component",
    alias: 'widget.ResistorDisplay',
    
    viewBox: false,
    initComponent: function () {
    	
    	this.circle = Ext.create("Ext.draw.Sprite", {
    		type: 'circle',
            fill: '#79BB3F',
            radius: 100,
            x: 100,
            y: 100
    	});
    	
    	this.items = [ this.circle ];
    	
    	this.callParent();
    	
    	this.circle = this.surface;
    	

    }
});