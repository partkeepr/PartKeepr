Ext.define('FV.view.feed.Add', {
	extend: 'Ext.window.Window',

	alias: 'widget.feedwindow',

    requires: ['Ext.form.Panel', 'Ext.form.field.ComboBox'],

	defaultFeeds: [
		['http://rss.cnn.com/rss/edition.rss', 'CNN Top Stories'],
		['http://sports.espn.go.com/espn/rss/news', 'ESPN Top News'],
		['http://news.google.com/news?ned=us&topic=t&output=rss', 'Sci/Tech - Google News'],
		['http://rss.news.yahoo.com/rss/software', 'Yahoo Software News']
	],

	height: 129,
	width: 400,
	title: 'Add Feed',
	closeAction: 'hide',
	iconCls: 'rss',
	layout: 'fit',

	initComponent: function() {
		Ext.apply(this, {
			buttons: [{
				text: 'Add feed',
				action: 'create'
			}, {
				text: 'Cancel',
				scope: this,
				handler: this.close
			}],

			items: [{
				xtype: 'form',
				bodyStyle: 'padding: 10px;',
				items: [{
					itemId: 'feed',
					anchor: '0',
					fieldLabel: 'Enter the URL of the feed to add',
					labelAlign: 'top',
					msgTarget: 'under',
					xtype: 'combo',
					store: this.defaultFeeds,
					getInnerTpl: function() {
						return '<div class="feed-picker-url">{field1}</div><div class="feed-picker-title">{field2}</div>';
					}
				}]
			}]
		});

		this.callParent(arguments);
	}
});
