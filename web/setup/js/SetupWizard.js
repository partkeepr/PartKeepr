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
    width: 900,
    height: 500,

    /**
     * Initializes the component
     */
    initComponent: function ()
    {
        this.items = this.setupCards();
        this.on("submit", function () {
            var target = window.location.href.replace(/setup\/index.html$/, "");
            target = target.replace(/setup\/$/, "");
            target = target.replace(/setup$/, "");
            window.location.href = target;

        });
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
            'be overwritten.<br/><br/><strong>If you are upgrading, make sure you created a backup of your ' +
            'database and filesystem!</strong>'
        }));

        var cardNames = [
            "PartKeeprSetup.PrerequisitesTestCard",
            "PartKeeprSetup.AuthKeyCard",
            "PartKeeprSetup.ExistingConfigParserCard",
            "PartKeeprSetup.DatabaseParametersCard",
            "PartKeeprSetup.DatabaseSetupCard",
            "PartKeeprSetup.AdminUserCard",
            "PartKeeprSetup.UserSetupCard",
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
                "Please remember to setup a cronjob:<br/>"+
                '<code style="background-color: white; border: 1px solid black;">' +
                "0 0,6,12,18 * * * /usr/bin/php &lt;path-to-partkeepr&gt;/app/console partkeepr:cron:run" +
                "</code><br/>The cronjob should run at least every 12 hours. Remove any legacy PartKeepr cronjobs.<br/><br/>" +
                "If possible, set your web server's document root to the <b>web/</b> directory.<br/><br/>" +
                "PartKeepr will be opened when you click the submit button.<br/><br/>"
        }));

        return cards;
    }
});
