Ext.define('PartKeepr.TimeDisplay', {
	extend: 'Ext.Toolbar.TextItem',
	el: null,
	dt: null,
    enable:Ext.emptyFn,
    disable:Ext.emptyFn,
    focus:Ext.emptyFn,
    constructor: function () {
    	var s = document.createElement("span");
        s.className = "ytb-text";
        var dt = new Date();
        s.innerHTML = Ext.Date.format(dt, Ext.getDateFormat());
        
        Ext.defer(this.onUpdate, 240, this);
        this.el = s;
        
    	this.callParent(arguments);
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

