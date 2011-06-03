Ext.define('FV.view.feed.List', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.feedlist',

    requires: ['Ext.toolbar.Toolbar'],

	title: 'Feeds',
	collapsible: true,
	animCollapse: true,
	margins: '5 0 5 5',
	layout: 'fit',

	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: 'dataview',
				trackOver: true,
				store: this.store,
				cls: 'feed-list',
				itemSelector: '.feed-list-item',
				overItemCls: 'feed-list-item-hover',
				tpl: '<tpl for="."><div class="feed-list-item">{name}</div></tpl>',
				listeners: {
				    selectionchange: this.onSelectionChange,
				    scope: this
				}
			}],

			dockedItems: [{
				xtype: 'toolbar',
				items: [{
					text: 'Add Feed',
					action: 'add'
				}, {
					text: 'Remove Feed',
					disabled: true,
					action: 'remove'
				}]
			}]
		});

		this.callParent(arguments);
	},
	
	onSelectionChange: function(selmodel, selection) {
        var selected = selection[0],
            button = this.down('button[action=remove]');
        if (selected) {
            button.enable();
        }
        else {
            button.disable();
        }
	}
});
