/**
 * Defines an abstract grid which includes the grid menu plugin. 
 * 
 */
Ext.define('PartKeepr.BaseGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.BaseGrid',

	/**
	 * Initializes the component
	 */
	initComponent: function () {
		
		/**
		 * Check if the plugins already exist (e.g. by a superclass). If yes, assume it is an array, and append
		 * the plugin to it.
		 */
		if (this.plugins) {
			this.plugins.push('gridmenu');
		} else {
			this.plugins = [ 'gridmenu' ];
		}
		
		this.callParent();
	}
});