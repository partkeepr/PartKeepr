Ext.define('Docs.ClassPanel', {
    extend: 'Ext.tab.Panel',

    id: 'docTabPanel',
    renderTo: 'api-class',

    style: 'border-color: #bfbfbf;',
    plain: true,

    // Remember tab scroll position on Webkit
    listeners: {
        beforetabchange: function(tabPanel, newCard, oldCard) {
            oldCard.prevScroll = oldCard.body.getScroll()['top'];
        },
        tabchange: function(tabPanel, newCard, oldCard) {
            if (newCard.prevScroll) {
                newCard.body.scrollTo('top', newCard.prevScroll);
            }
        },
        afterrender: function() {
            Docs.App.resizeWindow();
        }
    },

    initComponent: function() {
        this.height = Ext.get('docContent').getHeight() - 55;
        this.items = Ext.create('Docs.OverviewPanel');
        this.callParent(arguments);
    }
});
