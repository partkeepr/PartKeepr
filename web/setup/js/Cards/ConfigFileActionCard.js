/**
 * This card executes the chosen configuration file mode.
 */
Ext.define('PartKeeprSetup.ConfigFileActionCard', {
	extend: 'Ext.form.Panel',
	
	/**
	 * Various Style Settings
	 */
	title: 'Configuration File',
	showTitle: true,
	titleCls: '',
    titleStyle: 'font-size: 2.5em;line-height: 30px;',
	cls: 'x-partkeepr-setup-basecard',
    id: 'config-action-card',
    autoScroll: true,
    mode: null,
    layout: 'card',
    
    /**
	 * Inits the component
	 */
	initComponent: function () {
		this.items = [
		            this.createSaveCard(),
		            this.createDisplayCard()
		];
		
		this.callParent();
		this.on("activate", this.onActivate, this);
	},
	createSaveCard: function () {
		return Ext.create("PartKeeprSetup.ConfigSaveCard", { 
			itemId: 'card-action-save'
		});
	},
	createDisplayCard: function () {
		return Ext.create("PartKeeprSetup.ConfigDisplayCard", { 
			itemId: 'card-action-display'
		});
	},
	/**
	 * Gets called when the card is activated
	 */
	onActivate: function () {
		this.getLayout().setActiveItem('card-action-' + Ext.getCmp("config-mode-card").mode);
		this.getLayout().activeItem.fireEvent("activateCard");
		// Disable the "next" button, this needs to get enabled by the database cards
		this.ownerCt.ownerCt.nextButton.setDisabled(true);
	}
});
