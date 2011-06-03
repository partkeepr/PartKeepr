Ext.define('FV.model.Article', {
    extend: 'Ext.data.Model',
    
    fields: [
        'title', 'author', {
            name: 'pubDate',
            type: 'date'
        }, 'link', 'description', 'content'
    ]
});