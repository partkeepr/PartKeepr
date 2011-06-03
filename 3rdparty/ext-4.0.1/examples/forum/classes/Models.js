Ext.define('ForumBrowser.Forum', {
    extend: 'Ext.data.Model',
    fields: ['id', 'text']
});

Ext.define('ForumBrowser.Topic', {
    extend: 'Ext.data.Model',
    idProperty: 'threadid',
    fields: ['title', 'forumtitle', 'forumid', 'author', {
        name: 'replycount',
        type: 'int'
    }, {
        name: 'lastpost',
        mapping: 'lastpost',
        type: 'date',
        dateFormat: 'timestamp'
    }, 'lastposter', 'excerpt']
});
