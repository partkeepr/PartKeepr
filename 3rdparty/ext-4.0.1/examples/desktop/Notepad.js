/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('MyDesktop.Notepad', {
    extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.form.field.HtmlEditor'
        //'Ext.form.field.TextArea'
    ],

    id:'notepad',

    init : function(){
        this.launcher = {
            text: 'Notepad',
            iconCls:'notepad',
            handler : this.createWindow,
            scope: this
        }
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('notepad');
        if(!win){
            win = desktop.createWindow({
                id: 'notepad',
                title:'Notepad',
                width:600,
                height:400,
                iconCls: 'notepad',
                animCollapse:false,
                border: false,
                //defaultFocus: 'notepad-editor', EXTJSIV-1300

                // IE has a bug where it will keep the iframe's background visible when the window
                // is set to visibility:hidden. Hiding the window via position offsets instead gets
                // around this bug.
                hideMode: 'offsets',

                layout: 'fit',
                items: [
                    {
                        xtype: 'htmleditor',
                        //xtype: 'textarea',
                        id: 'notepad-editor',
                        value: [
                            'Some <b>rich</b> <font color="red">text</font> goes <u>here</u><br>',
                            'Give it a try!'
                        ].join('')
                    }
                ]
            });
        }
        win.show();
        return win;
    }
});
