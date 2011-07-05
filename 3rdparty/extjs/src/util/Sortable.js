/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.util.Sortable

A mixin which allows a data component to be sorted. This is used by e.g. {@link Ext.data.Store} and {@link Ext.data.TreeStore}.

**NOTE**: This mixin is mainly for internal library use and most users should not need to use it directly. It
is more likely you will want to use one of the component classes that import this mixin, such as
{@link Ext.data.Store} or {@link Ext.data.TreeStore}.
 * @markdown
 * @docauthor Tommy Maintz <tommy@sencha.com>
 */
Ext.define("Ext.util.Sortable", {
    /**
     * @property isSortable
     * @type Boolean
     * Flag denoting that this object is sortable. Always true.
     */
    isSortable: true,
    
    /**
     * The default sort direction to use if one is not specified (defaults to "ASC")
     * @property defaultSortDirection
     * @type String
     */
    defaultSortDirection: "ASC",
    
    requires: [
        'Ext.util.Sorter'
    ],

    /**
     * The property in each item that contains the data to sort.
     * @type String
     */    
    
    /**
     * Performs initialization of this mixin. Component classes using this mixin should call this method
     * during their own initialization.
     */
    initSortable: function() {
        var me = this,
            sorters = me.sorters;
        
        /**
         * The collection of {@link Ext.util.Sorter Sorters} currently applied to this Store
         * @property sorters
         * @type Ext.util.MixedCollection
         */
        me.sorters = Ext.create('Ext.util.AbstractMixedCollection', false, function(item) {
            return item.id || item.property;
        });
        
        if (sorters) {
            me.sorters.addAll(me.decodeSorters(sorters));
        }
    },

    /**
     * <p>Sorts the data in the Store by one or more of its properties. Example usage:</p>
<pre><code>
//sort by a single field
myStore.sort('myField', 'DESC');

//sorting by multiple fields
myStore.sort([
    {
        property : 'age',
        direction: 'ASC'
    },
    {
        property : 'name',
        direction: 'DESC'
    }
]);
</code></pre>
     * <p>Internally, Store converts the passed arguments into an array of {@link Ext.util.Sorter} instances, and delegates the actual
     * sorting to its internal {@link Ext.util.MixedCollection}.</p>
     * <p>When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field, so this code:</p>
<pre><code>
store.sort('myField');
store.sort('myField');
     </code></pre>
     * <p>Is equivalent to this code, because Store handles the toggling automatically:</p>
<pre><code>
store.sort('myField', 'ASC');
store.sort('myField', 'DESC');
</code></pre>
     * @param {String|Array} sorters Either a string name of one of the fields in this Store's configured {@link Ext.data.Model Model},
     * or an Array of sorter configurations.
     * @param {String} direction The overall direction to sort the data by. Defaults to "ASC".
     */
    sort: function(sorters, direction, where, doSort) {
        var me = this,
            sorter, sorterFn,
            newSorters;
        
        if (Ext.isArray(sorters)) {
            doSort = where;
            where = direction;
            newSorters = sorters;
        }
        else if (Ext.isObject(sorters)) {
            doSort = where;
            where = direction;
            newSorters = [sorters];
        }
        else if (Ext.isString(sorters)) {
            sorter = me.sorters.get(sorters);

            if (!sorter) {
                sorter = {
                    property : sorters,
                    direction: direction
                };
                newSorters = [sorter];
            }
            else if (direction === undefined) {
                sorter.toggle();
            }
            else {
                sorter.setDirection(direction);
            }
        }
        
        if (newSorters && newSorters.length) {
            newSorters = me.decodeSorters(newSorters);
            if (Ext.isString(where)) {
                if (where === 'prepend') {
                    sorters = me.sorters.clone().items;
                    
                    me.sorters.clear();
                    me.sorters.addAll(newSorters);
                    me.sorters.addAll(sorters);
                }
                else {
                    me.sorters.addAll(newSorters);
                }
            }
            else {
                me.sorters.clear();
                me.sorters.addAll(newSorters);
            }
            
            if (doSort !== false) {
                me.onBeforeSort(newSorters);
            }
        }
        
        if (doSort !== false) {
            sorters = me.sorters.items;
            if (sorters.length) {
                //construct an amalgamated sorter function which combines all of the Sorters passed
                sorterFn = function(r1, r2) {
                    var result = sorters[0].sort(r1, r2),
                        length = sorters.length,
                        i;

                        //if we have more than one sorter, OR any additional sorter functions together
                        for (i = 1; i < length; i++) {
                            result = result || sorters[i].sort.call(this, r1, r2);
                        }

                    return result;
                };

                me.doSort(sorterFn);                
            }
        }
        
        return sorters;
    },
    
    onBeforeSort: Ext.emptyFn,
        
    /**
     * @private
     * Normalizes an array of sorter objects, ensuring that they are all Ext.util.Sorter instances
     * @param {Array} sorters The sorters array
     * @return {Array} Array of Ext.util.Sorter objects
     */
    decodeSorters: function(sorters) {
        if (!Ext.isArray(sorters)) {
            if (sorters === undefined) {
                sorters = [];
            } else {
                sorters = [sorters];
            }
        }

        var length = sorters.length,
            Sorter = Ext.util.Sorter,
            fields = this.model ? this.model.prototype.fields : null,
            field,
            config, i;

        for (i = 0; i < length; i++) {
            config = sorters[i];

            if (!(config instanceof Sorter)) {
                if (Ext.isString(config)) {
                    config = {
                        property: config
                    };
                }
                
                Ext.applyIf(config, {
                    root     : this.sortRoot,
                    direction: "ASC"
                });

                //support for 3.x style sorters where a function can be defined as 'fn'
                if (config.fn) {
                    config.sorterFn = config.fn;
                }

                //support a function to be passed as a sorter definition
                if (typeof config == 'function') {
                    config = {
                        sorterFn: config
                    };
                }

                // ensure sortType gets pushed on if necessary
                if (fields && !config.transform) {
                    field = fields.get(config.property);
                    config.transform = field ? field.sortType : undefined;
                }
                sorters[i] = Ext.create('Ext.util.Sorter', config);
            }
        }

        return sorters;
    },
    
    getSorters: function() {
        return this.sorters.items;
    }
});
