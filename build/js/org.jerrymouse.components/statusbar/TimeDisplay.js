/*
 * This file is part of the JerryMouse Framework.
 *
 * JerryMouse is free software; you can redistribute and/or modify it under the
 * terms of the GNU General Public License version 2 as published by the
 * Free Software Foundation.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 */

Ext.ns("org.jerrymouse.components.statusbar");

org.jerrymouse.components.statusbar.TimeDisplay = function (t) {
	var s = document.createElement("span");
    s.className = "ytb-text";
    var dt = new Date();
    s.innerHTML = dt.format(Ext.getDateFormat());
    
    this.onUpdate.defer(1000, this);
    
    this.el = s;
    
    org.jerrymouse.components.statusbar.TimeDisplay.superclass.constructor.call(this, s);
}

Ext.extend(org.jerrymouse.components.statusbar.TimeDisplay, Ext.Toolbar.TextItem, {
	el: null,
	dt: null,
    enable:Ext.emptyFn,
    disable:Ext.emptyFn,
    focus:Ext.emptyFn,
    onUpdate: function (obj) {
		var dt = new Date();
		this.setText(dt.format(Ext.getDateFormat())); 
    	delete dt;
    	/* Sometimes the time display seems to be "stuck" (=skipping one second)
    	 * because of micro-delays due to the "overhead" of calling this method.
    	 */ 
    	this.onUpdate.defer(999, this);
	}
});

Ext.reg('org.jerrymouse.components.statusbar.TimeDisplay', org.jerrymouse.components.statusbar.TimeDisplay)