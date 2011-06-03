Ext.require('Ext.tab.*');

Ext.onReady(function(){
    // basic tabs 1, built from existing content
    var tabs = Ext.createWidget('tabpanel', {
        renderTo: 'tabs1',
        width: 450,
        activeTab: 0,
        tabPosition: 'bottom',
        defaults :{
            bodyPadding: 10
        },
        items: [{
            contentEl:'script', 
            title: 'Short Text',
            closable: true
        },{
            contentEl:'markup', 
            title: 'Long Text'
        }]
    });
    
    // second tabs built from JS
    var tabs2 = Ext.createWidget('tabpanel', {
        renderTo: document.body,
        activeTab: 0,
        width: 600,
        height: 250,
        tabPosition: 'bottom',
        plain: true,
        defaults :{
            autoScroll: true,
            bodyPadding: 10
        },
        items: [{
                title: 'Normal Tab',
                html: "My content was added during construction."
            },{
                title: 'Ajax Tab 1',
                loader: {
                    url: 'ajax1.htm',
                    contentType: 'html',
                    loadMask: true
                },
                listeners: {
                    activate: function(tab) {
                        tab.loader.load();
                    }
                }
            },{
                title: 'Ajax Tab 2',
                loader: {
                    url: 'ajax2.htm',
                    contentType: 'html',
                    autoLoad: true,
                    params: 'foo=123&bar=abc'
                }
            },{
                title: 'Event Tab',
                listeners: {
                    activate: function(tab){
                        alert(tab.title + ' was activated.');
                    }
                },
                html: "I am tab 4's content. I also have an event listener attached."
            },{
                title: 'Disabled Tab',
                disabled: true,
                html: "Can't see me cause I'm disabled"
            }
        ]
    });
});