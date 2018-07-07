Ext.define("PartKeepr.Components.Part.PartPanel", {
    extend: "Ext.panel.Panel",

    xtype: 'PartPanel',

    controller: 'PartController',

    title: 'Parts List',
    iconCls: 'partkeeprLogo',
    tools: [{
        showAnimation: {
            type: 'slide',
            direction: 'down'

        },
        xtype: 'textfield',
        itemId: 'searchField',
        hidden: true,
        placeHolder: 'Search',
        listeners: {
            action: 'search',
            clearicontap: 'resetSearch'
        }
    }, {
        type: 'search',
        handler: 'revealSearchField'
    }, {
        type: 'refresh',
        handler: 'reload'
    }, {type: 'menu'}],
    items: [{xtype: 'PartGrid'}],
    layout: 'fit',
    fullscreen: true
});