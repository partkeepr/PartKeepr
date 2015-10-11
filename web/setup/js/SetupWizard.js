Ext.define('PartKeeprSetup.SetupWizard', {
    extend: 'Ext.ux.BreadCrumbWizard',

    /**
     * The wizard's window shouldn't have a close button
     */
    closable: false,

    /**
     * Some style settings for the individual cards
     */
    cardPanelConfig: {
        defaults: {
            baseCls: 'x-small-editor',
            bodyStyle: 'padding:10px 15px 5px 10px;background-color:#F6F6F6;',
            border: false
        },
        layout: 'card'
    },

    /**
     * Configure the header
     */
    includeHeaderPanel: true,
    headConfig: {
        headerPosition: 'bottom',
        position: 'top',
        cls: "x-setup-header",
        height: 120,
        stepText: ''
    },

    /**
     * The width and height of the window, in pixels
     */
    width: 800,
    height: 500,

    /**
     * Initializes the component
     */
    initComponent: function ()
    {
        this.items = this.setupCards();
        this.callParent();
    },
    /**
     * Sets up all cards
     * @returns {Array}
     */
    setupCards: function ()
    {
        var cards = new Array();

        cards.push(Ext.create('Ext.form.Panel', {
            breadCrumbTitle: 'Welcome',
            padding: 20,
            border: false,
            bodyStyle: 'background: none;',
            html: 'This wizard guides you through the setup of <b>PartKeepr</b>.<br/><br/>Note that you can ' +
            're-start setup any time, even if you already have an existing database. No existing data will ' +
            'be overwritten.'
        }));

        var cardNames = [
            "PartKeeprSetup.PrerequisitesTestCard",
            "PartKeeprSetup.AuthKeyCard",
            "PartKeeprSetup.ExistingConfigParserCard",
            "PartKeeprSetup.DatabaseParametersCard",
            "PartKeeprSetup.DatabaseConnectivityTestCard",
            "PartKeeprSetup.AdminUserCard",
            "PartKeeprSetup.DatabaseSetupCard",
        ];

        for (var card = 0; card < cardNames.length; card++) {
            cards.push(Ext.create(cardNames[card], {
                setupConfig: this.setupConfig
            }));
        }

        cards.push(Ext.create('Ext.form.Panel', {
            breadCrumbTitle: 'Setup Complete',
            padding: 20,
            border: false,
            bodyStyle: 'background: none;',
            html: "<b>PartKeepr is now set-up.</b><br/><br/>" +
            "If possible, set your web server's document root to the <b>web/</b> directory.<br/><br/>" +
            "To open PartKeepr, open the <b>web</b> directory using your browser.<br/><br/>"
        }));

        return cards;
    }
});
