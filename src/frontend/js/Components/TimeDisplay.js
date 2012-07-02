Ext.define('PartKeepr.TimeDisplay', {
	extend: 'Ext.Toolbar.TextItem',
	el: null,
	dt: null,
    enable:Ext.emptyFn,
    disable:Ext.emptyFn,
    focus:Ext.emptyFn,
    beforeRender: function () {
        this.callParent();
        Ext.defer(this.onUpdate, 240, this);
    },
    onUpdate: function (obj) {
		var dt = new Date();
		this.setText(Ext.Date.format(dt, Ext.getDateFormat())); 
    	delete dt;
    	/* Sometimes the time display seems to be "stuck" (=skipping one second)
    	 * because of micro-delays due to the "overhead" of calling this method.
    	 */
    	Ext.defer(this.onUpdate, 240, this);
	}
});

