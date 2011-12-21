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
            titleStyle: 'font-size: 2.5em;',
            cls: 'x-partkeepr-setup-basecard',
            items: [{
                border: false,
                bodyStyle: 'background:none;',
                html: 'This wizard guides you through the setup of <b>PartKeepr</b>.'
            }]
        }));
    	
    	cards.push(Ext.create("PartKeeprSetup.PrequisitesTestCard"));
    	cards.push(Ext.create("PartKeeprSetup.DatabaseParametersCard"));
    	cards.push(Ext.create("PartKeeprSetup.DatabaseConnectivityTestCard"));
    	cards.push(Ext.create("PartKeeprSetup.DatabaseSetupCard"));
    	
    	cards.push(Ext.create('Ext.ux.wizard.Card', {
            title: 'Setup Complete',
            showTitle: true,
            titleCls: '',
            titleStyle: 'font-size: 2.5em;',
            cls: 'x-partkeepr-setup-basecard',
            items: [{
                border: false,
                bodyStyle: 'background:none;',
                html: "<b>PartKeepr is now set-up.</b><br/><br/><b>IMPORTANT: PLEASE COPY THE FILE config.template.php TO config.php AND ADJUST YOUR DATABASE SETTINGS!</b><br/><br/>If possible, set your web server's document root to the <b>frontend</b> directory.<br/><br/>To open PartKeepr, open the 'frontend' directory using your browser.<br/><br/>The default username/password combination is <b>admin/admin</b>"
            }]
        }));
    	
    	return cards;
    }
});