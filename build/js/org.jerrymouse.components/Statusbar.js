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

Ext.ns("org.jerrymouse.components");

org.jerrymouse.components.Statusbar = Ext.extend(Ext.ux.StatusBar, {
	initComponent: function () {
		Ext.apply(this, {
			defaultText: '$[org.jerrymouse.components.Statusbar.Ready]',
			defaultIconCls: 'x-status-ok',
			iconCls: 'x-status-ok',
			cls: 'x-statusbar x-status-borders',
			items: [{ text: 'bla' },
			        {xtype: 'tbseparator'},
			        { xtype: 'org.jerrymouse.components.statusbar.TimeDisplay'},
			        {xtype: 'tbseparator'},
			        { xtype: 'org.jerrymouse.components.statusbar.ConnectionButton',
			          id: 'jm-status-connectionbutton'
			        }
			        
			        ]
		});
		org.jerrymouse.components.Statusbar.superclass.initComponent.call(this);
	},
	

    afterRender : function(){
		
	 Ext.ux.StatusBar.superclass.afterRender.call(this);

        var right = this.statusAlign == 'right';
        this.currIconCls = this.iconCls || this.defaultIconCls;
        this.statusEl = new Ext.Toolbar.TextItem({
            cls: 'x-status-text ' + (this.currIconCls || ''),
            text: Ext.replaceLocaleTags(this.text) || Ext.replaceLocaleTags(this.defaultText) || ''
        });

        if(right){
            this.add('->');
            this.add(this.statusEl);
        }else{
            this.insert(0, this.statusEl);
            this.insert(1, '->');
        }
        this.doLayout();
        
    },
    setText : function(text){
        this.activeThreadId++;
        this.text = text || '';
        if(this.rendered){
            this.statusEl.update(Ext.replaceLocaleTags(this.text));
        }
        return this;
    },
	onLocaleChange: function (obj) {
		obj.setText(obj.text);
	},
	startLoad: function (message) {
		if (message != null) {
			this.showBusy({text: message, iconCls: "x-status-busy"});
		} else {
			this.showBusy();
		}
	}, 
	endLoad: function () {
		this.clearStatus({useDefaults: true});
	}
     
	
	
	
});

Ext.reg('org.jerrymouse.components.Statusbar', org.jerrymouse.components.Statusbar)