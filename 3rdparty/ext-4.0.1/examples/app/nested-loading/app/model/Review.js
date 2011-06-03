/**
 * Model for a books review.
 */
Ext.define('Books.model.Review', {
    extend: 'Ext.data.Model',

    fields: [
        'product_id',
        'author',
        'rating',
        'date',
        'title',
        'comment'
    ],
    belongsTo: 'Books.model.Book'
});
