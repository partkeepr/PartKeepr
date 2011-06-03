/**
 * @class Ext.util.Sorter
 * @extends Object
 * Represents a single sorter that can be applied to a Store
 */
Ext.define('Ext.util.Sorter', {

    /**
     * @cfg {String} property The property to sort by. Required unless {@link #sorter} is provided
     */
    
    /**
     * @cfg {Function} sorterFn A specific sorter function to execute. Can be passed instead of {@link #property}
     */
    
    /**
     * @cfg {String} root Optional root property. This is mostly useful when sorting a Store, in which case we set the
     * root to 'data' to make the filter pull the {@link #property} out of the data object of each item
     */
    
    /**
     * @cfg {Function} transform A function that will be run on each value before
     * it is compared in the sorter. The function will receive a single argument,
     * the value.
     */
    
    /**
     * @cfg {String} direction The direction to sort by. Defaults to ASC
     */
    direction: "ASC",
    
    constructor: function(config) {
        var me = this;
        
        Ext.apply(me, config);
        
        //<debug>
        if (me.property == undefined && me.sorterFn == undefined) {
            Ext.Error.raise("A Sorter requires either a property or a sorter function");
        }
        //</debug>
        
        me.updateSortFunction();
    },
    
    /**
     * @private
     * Creates and returns a function which sorts an array by the given property and direction
     * @return {Function} A function which sorts by the property/direction combination provided
     */
    createSortFunction: function(sorterFn) {
        var me        = this,
            property  = me.property,
            direction = me.direction || "ASC",
            modifier  = direction.toUpperCase() == "DESC" ? -1 : 1;
        
        //create a comparison function. Takes 2 objects, returns 1 if object 1 is greater,
        //-1 if object 2 is greater or 0 if they are equal
        return function(o1, o2) {
            return modifier * sorterFn.call(me, o1, o2);
        };
    },
    
    /**
     * @private
     * Basic default sorter function that just compares the defined property of each object
     */
    defaultSorterFn: function(o1, o2) {
        var me = this,
            transform = me.transform,
            v1 = me.getRoot(o1)[me.property],
            v2 = me.getRoot(o2)[me.property];
            
        if (transform) {
            v1 = transform(v1);
            v2 = transform(v2);
        }

        return v1 > v2 ? 1 : (v1 < v2 ? -1 : 0);
    },
    
    /**
     * @private
     * Returns the root property of the given item, based on the configured {@link #root} property
     * @param {Object} item The item
     * @return {Object} The root property of the object
     */
    getRoot: function(item) {
        return this.root == undefined ? item : item[this.root];
    },
    
    // @TODO: Add docs for these three methods
    setDirection: function(direction) {
        var me = this;
        me.direction = direction;
        me.updateSortFunction();
    },
    
    toggle: function() {
        var me = this;
        me.direction = Ext.String.toggle(me.direction, "ASC", "DESC");
        me.updateSortFunction();
    },
    
    updateSortFunction: function() {
        var me = this;
        me.sort = me.createSortFunction(me.sorterFn || me.defaultSorterFn);
    }
});