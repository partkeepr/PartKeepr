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
    	
    	return cards;
    }
});