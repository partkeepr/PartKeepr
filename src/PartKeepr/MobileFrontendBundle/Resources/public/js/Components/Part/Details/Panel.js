Ext.define("PartKeepr.Components.Part.Details.Panel", {
    extend: 'Ext.tab.Panel',

    xtype: 'PartDetails',

    controller: 'PartDetailsController',

    shadow: true,
    width: "90%",
    height: "90%",
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
        title: 'Favorites',
        html: 'Badges <em>(like the 4, below)</em> can be added by setting <code>badgeText</code> when creating a tab or by using <code>setBadgeText()</code> on the tab later.',
        cls: 'card',
        iconCls: 'x-fa fa-star',
        badgeText: '4'
    }, {
        title: 'Downloads',
        id: 'tab3',
        html: 'Badge labels will truncate if the text is wider than the tab.',
        badgeText: 'Overflow test',
        cls: 'card',
        iconCls: 'x-fa fa-download',
        hidden: (Ext.filterPlatform('ie10') && Ext.os.is.Phone) ? true : false
    }, {
        title: 'Settings',
        html: 'Tabbars are <code>ui:"dark"</code> by default, but also have light variants.',
        cls: 'card',
        iconCls: 'x-fa fa-gear',
        hidden: (Ext.filterPlatform('ie10') && Ext.os.is.Phone) ? true : false
    }, {
        title: 'User',
        html: '<span class="action">User tapped User</span>',
        cls: 'card',
        iconCls: 'x-fa fa-user'
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