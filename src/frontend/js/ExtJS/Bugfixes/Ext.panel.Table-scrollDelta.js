/**
 * Bugfix for Ext.panel.Table:
 * 
 * Set the scrollDelta to 100 to ensure better scrolling experience
 */
Ext.override(Ext.panel.Table, {
	scrollDelta: 100
});
