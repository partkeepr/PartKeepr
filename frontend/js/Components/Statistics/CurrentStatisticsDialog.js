Ext.define('PartDB2.CurrentStatisticsDialog', {
	extend: 'Ext.window.Window',
	width: 400,
	height: 200,
	title: i18n("Current Statistics"),
	bodyStyle: {
		padding: "5px"
	},
	/**
	 * Initializes the component and adds a template
	 */
	initComponent: function () {
		/**
		 * Create the template
		 */
		this.tpl = new Ext.XTemplate(
				'<h1>'+i18n("Current Statistics")+'</h1>',
				'<table>',
				'<tr>',
					'<td style="width: 100px;" class="o">'+i18n("Different Parts")+':</td>',
					'<td style="width: 300px;" class="o">{partCount}</td>',
				'</tr>',
				'<tr>',
					'<td class="e">'+i18n("Categories")+':</td>',
					'<td class="e">{categoryCount}</td>',
				'</tr>',
				'</table>',
				'<h1>'+i18n("Counts per Unit")+'</h1>',
				'<table>',
				'<tpl for="units">',
					'<tr>',
						'<td style="width: 100px;" class="{[xindex % 2 === 0 ? "e" : "o"]}">{name}</td>',
						'<td style="width: 300px;" class="{[xindex % 2 === 0 ? "e" : "o"]}">{stockLevel}</td>',
					'</tr>',
				'</tpl>',
				'</table>');
		
		this.tbButtons = [{
			text: i18n("Refresh"),
			handler: this.loadStats,
			scope: this
		},{
			text: i18n("Close"),
			handler: this.close,
			scope: this
		}];
		
		this.dockedItems = [{
			xtype: 'toolbar',
			dock: 'bottom',
			ui: 'footer',
			items: this.tbButtons
		}];
		
		this.callParent();
		
		this.loadStats();
	},
	loadStats: function () {
		var call = new PartDB2.ServiceCall(
    			"Statistic", 
    			"getCurrentStats");
		
		call.setHandler(Ext.bind(this.onStatsLoaded, this));
		call.doCall();
	},
	onStatsLoaded: function (data) {
		this.tpl.overwrite(this.getTargetEl(), data);
	}
});