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

Ext.override(Ext.menu.TextItem, {
	 // private
    onRender : function(){

        var s = document.createElement("span");
        s.className = this.itemCls;
        s.innerHTML = Ext.replaceLocaleTags(this.text);
        console.log("FOO");
        this.el = s;
        Ext.menu.TextItem.superclass.onRender.apply(this, arguments);
    }
});



Ext.override(Ext.menu.Item, {
	getTemplateArgs: function() {
    return {
        id: this.id,
        cls: this.itemCls + (this.menu ?  ' x-menu-item-arrow' : '') + (this.cls ?  ' ' + this.cls : ''),
        href: this.href || '#',
        hrefTarget: this.hrefTarget,
        icon: this.icon || Ext.BLANK_IMAGE_URL,
        iconCls: this.iconCls || '',
        text: Ext.replaceLocaleTags(this.itemText)||Ext.replaceLocaleTags(this.text)||'&#160;'
    };
},

    setText : function(text){
        this.text = text||'&#160;';
        if(this.rendered){
            this.textEl.update(Ext.replaceLocaleTags(this.text));
            this.parentMenu.layout.doAutoSize();
        }
    },
    
	onLocaleChange: function (obj) {
		obj.setText(obj.text)
	}
});