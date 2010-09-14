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

// @todo Replace with ComponentTracker later, see http://extjs.com/forum/showthread.php?p=306778#post306778

Ext.ns("org.jerrymouse.gui.contexthelp");

org.jerrymouse.gui.contexthelp.handler = function () {
	Ext.setContextHelp();
}

Ext.setContextHelp = function () {
	this.contextHelp = true;
	
	var layer = new Ext.Layer();
	
	var size = Ext.getCmp("jm-main-window").getSize();

	layer.setSize(size);
	layer.setStyle("cursor", "help");
	layer.on("click", function (a) {
		Ext.unsetContextHelp();
		this.remove();
		Ext.displayHelpForCoordinates(a.xy);
		
		
	}.createDelegate(layer));
	layer.show();
}

Ext.unsetContextHelp = function () {
	this.contextHelp = false;
}

Ext.isContextHelp = function () {
	return this.contextHelp;
}

Ext.displayHelpForCoordinates = function (xy) {
	var point = new Ext.lib.Point(xy[0], xy[1]);
	
	Ext.ComponentMgr.all.each( function (item) {
		if (item && item.getEl && item.getEl() && item.getEl().getRegion) {
			if (item.getEl().getRegion().contains(point)) {
				if (item.initialConfig.helpId) {
					
					if (Ext.helpTip) {
						Ext.helpTip.destroy();
					}
					
					var call = new org.jerrymouse.service.Call(
							new org.jerrymouse.lang.String("org.jerrymouse.system.help.HelpManager"), 
							new org.jerrymouse.lang.String("getHelp"));
					
					call.setParameter("helpId", new org.jerrymouse.lang.String(item.initialConfig.helpId));
					call.setLoadMessage('$[org.jerrymouse.gui.help.loading_message]');
					call.setAnonymous(true);
					call.setHandler(function (obj) {
						Ext.helpTip = new Ext.ToolTip({
							html: obj.getItem("content").toString(),
							closable: true,
							autoHide: false,
							title: obj.getItem("title").toString(),
							draggable: true,
							targetXY: xy
						});
						
						Ext.helpTip.showBy(item.getEl(), 'tl-tr');						
					});
					
					
					call.doCall();
					return false;
				}	
			}
		}
		return true;
	});
}

function str_replace(search, replace, subject) {
    // Replaces all occurrences of search in haystack with replace  
    // 
    // version: 903.421
    // discuss at: http://phpjs.org/functions/str_replace
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   bugfixed by: Anton Ongson
    // +      input by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    tweaked by: Onno Marsman
    // +      input by: Brett Zamir
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'
    // *     example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
    // *     returns 2: 'hemmo, mars'
    var s = subject;
    var ra = r instanceof Array, sa = s instanceof Array;
    var f = [].concat(search);
    var r = [].concat(replace);
    var i = (s = [].concat(s)).length;
    var j = 0;
    
    while (j = 0, i--) {
        if (s[i]) {
            while (s[i] = (s[i]+'').split(f[j]).join(ra ? r[j] || "" : r[0]), ++j in f){};
        }
    }

    return sa ? s : s[0];
}



