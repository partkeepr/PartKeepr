/**
 * Model for a book
 */
Ext.define('Books.model.Book', {
    extend: 'Ext.data.Model',
    requires: ['Books.model.Review', 'Ext.data.HasManyAssociation', 'Ext.data.BelongsToAssociation'],

    fields: [
        'id',
        'name',
        'author',
        'detail',
        'price',
        'image'
    ],

    hasMany: {model: 'Books.model.Review', name: 'reviews'}
});
