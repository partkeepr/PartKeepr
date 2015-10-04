/**
 * This card manages the config file creation.
 */
Ext.define('PartKeeprSetup.ConfigFileModeCard', {
	extend: 'Ext.form.Panel',
	
	/**
	 * Various Style Settings
	 */
	title: 'Configuration File',
	showTitle: true,
	titleCls: '',
    titleStyle: 'font-size: 2.5em;line-height: 30px;',
	cls: 'x-partkeepr-setup-basecard',
    id: 'config-mode-card',
    autoScroll: true,
    mode: null,
    
    /**
	 * Inits the component
	 */
	initComponent: function () {
		
		this.saveOption = Ext.create("Ext.form.field.Radio", {
				name: 'configfilemode',
				inputValue: 'save',
				boxLabel: 'Save',
				listeners: {
					scope: this,
					change: this.setConfigFileMode
				}
			});
		
		this.displayOption = Ext.create("Ext.form.field.Radio", {
			name: 'configfilemode',
			inputValue: 'display',
			boxLabel: 'Display',
			listeners: {
				scope: this,
				change: this.setConfigFileMode
			}
		});
		
		this.items = [{
			xtype: 'displayfield',
			value: 'PartKeepr needs a configuration file to operate. Please choose how to proceed:',
			style: 'margin-bottom: 20px;'
		},
		this.saveOption,
		{
			xtype: 'displayfield',
			value: 'Attempts to save the configuration file. The configuration file may not exist, and it must be' +
				   'writable by your web server.',
			style: 'margin-left: 17px; margin-bottom: 5px;'
		
		},
		this.displayOption,
		{
			xtype: 'displayfield',
			value: 'Displays the configuration file, so you can use copy and paste.',
			style: 'margin-left: 17px; margin-bottom: 5px;'
		}];
		
		this.callParent();
		this.on("activate", this.onActivate, this);
	},
	setConfigFileMode: function () {
		if (this.saveOption.getValue()) {
			this.mode = "save";
		}
		
		if (this.displayOption.getValue()) {
			this.mode = "display";
		}
		
		this.ownerCt.ownerCt.nextButton.setDisabled(false);
	},
	/**
	 * Gets called when the card is activated
	 */
	onActivate: function () {
		// Disable the "next" button, this needs to get enabled by the database cards
		if (this.saveOption.getValue() || this.displayOption.getValue()) {
			this.ownerCt.ownerCt.nextButton.setDisabled(false);
		} else {
			this.ownerCt.ownerCt.nextButton.setDisabled(true);
		}
		
	}
});
