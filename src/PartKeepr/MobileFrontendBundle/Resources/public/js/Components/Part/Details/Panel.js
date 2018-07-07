Ext.define("PartKeepr.Components.Part.Details.Panel", {
    extend: 'Ext.tab.Panel',

    xtype: 'PartDetails',

    controller: 'PartDetailsController',

    shadow: true,
    width: Ext.os.is.Phone ? "100%" : "90%",
    height: Ext.os.is.Phone ? "100%" : "90%",
    centered: true,
    modal: true,
    closable: true,

    cls: 'partDetails',

    part: null,

    activeTab: 0,
    tabBar: {
        layout: {
            pack: 'center',
            align: 'center'
        },
        docked: 'bottom',
        defaults: {
            iconAlign: 'top'
        }
    },
    defaults: {
        scrollable: true
    },
    items: [{
        xtype: 'titlebar',
        docked: 'top',
        title: '',
        items: [
            {
                align: 'right',
                text: i18n("Add Stock"),
                ui: 'action',
                handler: 'promptAddStock'
            },
            {
                align: 'right',
                text: i18n("Remove Stock"),
                ui: 'action',
                handler: 'promptRemoveStock'
            },
            {
                iconCls: 'x-fa fa-close',
                align: 'right',
                handler: 'closePanel'
            }]
    },{
        title: i18n('General Info'),
        padding: '24px',
        items: {xtype: "PartDetailsOverview"},
        cls: 'card',
        iconCls: 'x-fa fa-info-circle'
    }, {
        title: i18n("Part Parameters"),
        html: '<span class="action">Not yet implemented</span>',
        cls: 'card',
        iconCls: 'x-fa fa-list-alt',
    }, {
        title: i18n("Distributors"),
        id: 'tab3',
        html: '<span class="action">Not yet implemented</span>',
        cls: 'card',
        iconCls: 'x-fa fa-truck',
    }, {
        title: i18n("Manufacturers"),
        html: '<span class="action">Not yet implemented</span>',
        cls: 'card',
        iconCls: 'x-fa fa-building',
    }, {
        title: i18n("Attachments"),
        html: '<span class="action">Not yet implemented</span>',
        cls: 'card',
        iconCls: 'x-fa fa-paperclip'
    }],

    setPart: function (part) {
        this.part = part;

        this.down("titlebar").setTitle(part.get("name"));
        this.down("PartDetailsOverview").setPart(part);
    },
    updatePart: function () {
        console.log(this.part);
        this.setPart(this.part);
    },
    getPart: function () {
        return this.part;
    }
});