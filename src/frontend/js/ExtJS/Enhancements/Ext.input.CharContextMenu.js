/**
 * Overrides Ext.form.field.Text so that it provides a context menu with a character picker.
 */
Ext.override(Ext.form.field.Text, {
	initComponent: function () {
		this.callOverridden(arguments);

		// Create the char selector
		this.charSelector = Ext.create("PartKeepr.ContextMenu.CharPicker", {
    		listeners: {
    			select: function (a,chr) {
    				this.setValue(this.getValue() + chr);
    			},
    			scope: this
    		}
    	});
		
		// Create the context menu
		this.menu = Ext.create('widget.menu', {
            items: [
                {
                	text: i18n("Insert special character"),
                	menu: this.charSelector
                }
                ]
        });
	},
	// Injects the event to the inputEl
	onRender: function () {
		this.callOverridden(arguments);
		
		this.inputEl.on("contextmenu", this.onItemContextMenu, this);
	},
	// Display the context menu
	onItemContextMenu: function (event, el) {
		event.stopEvent();
	    this.menu.showAt(event.getXY());
	}
});