Ext.define('PartKeeprSetup.SetupWizard', {
	extend: 'Ext.ux.Wizard',
	
	width: 850,
	height: 800,
    closable: false,
    name: 'FOO',
    title: 'PartKeepr Setup',
    cardPanelConfig: {
        defaults: {
            baseCls: 'x-small-editor',
            bodyStyle: 'padding:10px 15px 5px 10px;background-color:#F6F6F6;',
            border: false
        },
        layout: 'card'
    },
    
    // no headConfig suplied no header will be shown.
    headConfig: {
        // title: 'Simple Wizard Head title Example',
        headerPosition: 'bottom',
        position: 'top',         // or bottom
       	cls: "x-setup-header",
        stepText: "<center>Step {0} of {1}: {2}</center>"
    },

    width: 800, height: 500,
    closable: false,

    includeHeaderPanel: true,
    
    initComponent: function () {
    	this.cards = this.setupCards();
    	this.callParent();
    	
    	this.headPanel.show();
    },
    
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
    	/*
    	Ext.create('Ext.ux.wizard.Card', {
    		deferredRender: true,
            title: 'Checking prequisites',
            showTitle: true,
            titleCls: '',
            autoScroll: true,
            titleStyle: 'font-size: 2.5em;',
            cls: 'x-partkeepr-setup-basecard',
            items: [{
                border: false,
                bodyStyle: 'background:none;margin-bottom: 2px;',
                html: 'Setup now checks if your server is capable of running PartKeepr.'
            }, this.testResultPanel, this.retestPrequisitesButton ],
            listeners: {
            	activate: function () {
            		this.nextButton.setDisabled(true);
            		
            		this.testResultPanel.clear();
            		
            		
            	},
            	scope: this
            }
        }));*/
    	
    	return cards;
    }
});