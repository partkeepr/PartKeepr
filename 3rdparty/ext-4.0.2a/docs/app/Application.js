/**
 * Main application definition for Docs app.
 *
 * We define our own Application class because this way we can also
 * easily define the dependencies.
 */
Ext.define('Docs.Application', {
    extend: 'Ext.app.Application',
    name: 'Docs',

    requires: [
        'Docs.Favorites',
        'Docs.History',
        'Docs.Settings'
    ],

    controllers: [
        'Classes',
        'Search'
    ],

    autoCreateViewport: true,

    launch: function() {
        Docs.App = this;
        Docs.Favorites.init();
        Docs.History.init();
        Docs.Settings.init();

        // When google analytics event tracking script present on page
        if (Docs.initEventTracking) {
            Docs.initEventTracking();
        }
    }
});
