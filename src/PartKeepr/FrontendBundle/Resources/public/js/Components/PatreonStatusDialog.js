Ext.define("PartKeepr.Components.PatreonStatusDialog", {
    extend: "Ext.window.Window",

    title: i18n("Patreon Status"),
    width: 400,
    height: 400,

    items: [{
        xtype: 'component',
        html: i18n("<h1>PartKeepr needs your support</h1>") +
        i18n("<p>We need you to support development, so we can create new cool features, user interface improvements and regular releases!</p>") +
        i18n("<p>Every cent helps to keep development alive!</p>") +
        i18n('<a href="https://www.patreon.com/partkeepr" target="_blank" class="patreonButton"></a>')

    }]


});