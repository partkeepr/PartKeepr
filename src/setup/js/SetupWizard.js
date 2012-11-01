Ext.define('PartKeeprSetup.SetupWizard', {
	extend: 'Ext.ux.Wizard',
	
	/**
	 * The wizard's window shouldn't have a close button
	 */
    closable: false,
    
    /**
     * Title. Ovbiously.
     */
    title: 'PartKeepr Setup',
    
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
    initComponent: function () {
    	this.cards = this.setupCards();
    	this.callParent();
    	
    	this.headPanel.show();
    },
    /**
     * Sets up all cards
     * @returns {Array}
     */
    setupCards: function () {
    	var cards = new Array();
    	
    	cards.push(Ext.create('Ext.ux.wizard.Card', {
            title: 'Welcome',
            showTitle: true,
            titleCls: '',
            titleStyle: 'font-size: 2.5em;line-height: 30px;',
            cls: 'x-partkeepr-setup-basecard',
            items: [{
                border: false,
                bodyStyle: 'background:none;',
                html: 'This wizard guides you through the setup of <b>PartKeepr</b>.<br/><br/>Note that you can '+
                      're-start setup any time, even if you already have an existing database. No existing data will '+
                      'be overwritten.'
            }]
        }));
    	
    	cards.push(Ext.create("PartKeeprSetup.PrerequisitesTestCard"));
    	cards.push(Ext.create("PartKeeprSetup.DatabaseParametersCard"));
    	cards.push(Ext.create("PartKeeprSetup.DatabaseConnectivityTestCard"));
    	cards.push(Ext.create("PartKeeprSetup.DatabaseSetupCard"));
    	
    	cards.push(Ext.create("PartKeeprSetup.ConfigFileModeCard"));
    	cards.push(Ext.create("PartKeeprSetup.ConfigFileActionCard"));
    	
    	cards.push(Ext.create('Ext.ux.wizard.Card', {
            title: 'Cron Setup',
            showTitle: true,
            titleCls: '',
            titleStyle: 'font-size: 2.5em;line-height: 30px;',
            cls: 'x-partkeepr-setup-basecard',
            items: [{
                border: false,
                bodyStyle: 'background:none;',
                autoScroll: true,
                html: 	"Please set up the following cronjobs:<br/><br/><code>"+
		                "0 0,12 * * * /usr/bin/php &lt;path-to-partkeepr&gt;/cronjobs/CreateStatisticSnapshot.php<br/>"+
		        		"0 0,6,12,18 * * * /usr/bin/php &lt;path-to-partkeepr&gt;/cronjobs/UpdatePartCacheData.php<br/>"+
		        		"0 0 */2 * * /usr/bin/php &lt;path-to-partkeepr&gt;/cronjobs/CheckForUpdates.php<br/>"+
		        		"0 0 */2 * * /usr/bin/php &lt;path-to-partkeepr&gt;/cronjobs/UpdateTipsOfTheDay.php<br/>"+
                		"</code><br/>If you cannot run cronjobs (e.g. you are on Windows), you can disable the "+
                		"cronjobs by adding the following line to your config.php file:<br/><br/>"+
                		'<code>Configuration::setOption("partkeepr.cronjobs.disablecheck", true);</code>'
            }]
    	}));
    	
    	cards.push(Ext.create('Ext.ux.wizard.Card', {
            title: 'Setup Complete',
            showTitle: true,
            titleCls: '',
            titleStyle: 'font-size: 2.5em;line-height: 30px;',
            cls: 'x-partkeepr-setup-basecard',
            items: [{
                border: false,
                bodyStyle: 'background:none;',
                autoScroll: true,
                html: 	"<b>PartKeepr is now set-up.</b><br/><br/>"+
                		"If possible, set your web server's document root to the <b>frontend</b> directory.<br/><br/>"+
                		"To open PartKeepr, open the 'frontend' directory using your browser.<br/><br/>"+
                		"The default username/password combination is <b>admin/admin</b>"
            }]
        }));
    	
    	return cards;
    }
});