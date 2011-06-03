/**
 * @class Ext.util.Region
 * @extends Object
 *
 * Represents a rectangular region and provides a number of utility methods
 * to compare regions.
 */

Ext.define('Ext.util.Region', {

    /* Begin Definitions */

    requires: ['Ext.util.Offset'],

    statics: {
        /**
         * @static
         * @param {Mixed} el A string, DomElement or Ext.core.Element representing an element
         * on the page.
         * @returns {Ext.util.Region} region
         * Retrieves an Ext.util.Region for a particular element.
         */
        getRegion: function(el) {
            return Ext.fly(el).getPageBox(true);
        },

        /**
         * @static
         * @param {Object} o An object with top, right, bottom, left properties
         * @return {Ext.util.Region} region The region constructed based on the passed object
         */
        from: function(o) {
            return new this(o.top, o.right, o.bottom, o.left);
        }
    },

    /* End Definitions */

    /**
     * @constructor
     * @param {Number} top Top
     * @param {Number} right Right
     * @param {Number} bottom Bottom
     * @param {Number} left Left
     */
    constructor : function(t, r, b, l) {
        var me = this;
        me.y = me.top = me[1] = t;
        me.right = r;
        me.bottom = b;
        me.x = me.left = me[0] = l;
    },

    /**
     * Checks if this region completely contains the region that is passed in.
     * @param {Ext.util.Region} region
     */
    contains : function(region) {
        var me = this;
        return (region.x >= me.x &&
                region.right <= me.right &&
                region.y >= me.y &&
                region.bottom <= me.bottom);

    },

    /**
     * Checks if this region intersects the region passed in.
     * @param {Ext.util.Region} region
     * @return {Ext.util.Region/Boolean} Returns the intersected region or false if there is no intersection.
     */
    intersect : function(region) {
        var me = this,
            t = Math.max(me.y, region.y),
            r = Math.min(me.right, region.right),
            b = Math.min(me.bottom, region.bottom),
            l = Math.max(me.x, region.x);

        if (b > t && r > l) {
            return new this.self(t, r, b, l);
        }
        else {
            return false;
        }
    },

    /**
     * Returns the smallest region that contains the current AND targetRegion.
     * @param {Ext.util.Region} region
     */
    union : function(region) {
        var me = this,
            t = Math.min(me.y, region.y),
            r = Math.max(me.right, region.right),
            b = Math.max(me.bottom, region.bottom),
            l = Math.min(me.x, region.x);

        return new this.self(t, r, b, l);
    },

    /**
     * Modifies the current region to be constrained to the targetRegion.
     * @param {Ext.util.Region} targetRegion
     */
    constrainTo : function(r) {
        var me = this,
            constrain = Ext.Number.constrain;
        me.top = me.y = constrain(me.top, r.y, r.bottom);
        me.bottom = constrain(me.bottom, r.y, r.bottom);
        me.left = me.x = constrain(me.left, r.x, r.right);
        me.right = constrain(me.right, r.x, r.right);
        return me;
    },

    /**
     * Modifies the current region to be adjusted by offsets.
     * @param {Number} top top offset
     * @param {Number} right right offset
     * @param {Number} bottom bottom offset
     * @param {Number} left left offset
     */
    adjust : function(t, r, b, l) {
        var me = this;
        me.top = me.y += t;
        me.left = me.x += l;
        me.right += r;
        me.bottom += b;
        return me;
    },

    /**
     * Get the offset amount of a point outside the region
     * @param {String} axis optional
     * @param {Ext.util.Point} p the point
     * @return {Ext.util.Offset}
     */
    getOutOfBoundOffset: function(axis, p) {
        if (!Ext.isObject(axis)) {
            if (axis == 'x') {
                return this.getOutOfBoundOffsetX(p);
            } else {
                return this.getOutOfBoundOffsetY(p);
            }
        } else {
            p = axis;
            var d = Ext.create('Ext.util.Offset');
            d.x = this.getOutOfBoundOffsetX(p.x);
            d.y = this.getOutOfBoundOffsetY(p.y);
            return d;
        }

    },

    /**
     * Get the offset amount on the x-axis
     * @param {Number} p the offset
     * @return {Number}
     */
    getOutOfBoundOffsetX: function(p) {
        if (p <= this.x) {
            return this.x - p;
        } else if (p >= this.right) {
            return this.right - p;
        }

        return 0;
    },

    /**
     * Get the offset amount on the y-axis
     * @param {Number} p the offset
     * @return {Number}
     */
    getOutOfBoundOffsetY: function(p) {
        if (p <= this.y) {
            return this.y - p;
        } else if (p >= this.bottom) {
            return this.bottom - p;
        }

        return 0;
    },

    /**
     * Check whether the point / offset is out of bound
     * @param {String} axis optional
     * @param {Ext.util.Point/Number} p the point / offset
     * @return {Boolean}
     */
    isOutOfBound: function(axis, p) {
        if (!Ext.isObject(axis)) {
            if (axis == 'x') {
                return this.isOutOfBoundX(p);
            } else {
                return this.isOutOfBoundY(p);
            }
        } else {
            p = axis;
            return (this.isOutOfBoundX(p.x) || this.isOutOfBoundY(p.y));
        }
    },

    /**
     * Check whether the offset is out of bound in the x-axis
     * @param {Number} p the offset
     * @return {Boolean}
     */
    isOutOfBoundX: function(p) {
        return (p < this.x || p > this.right);
    },

    /**
     * Check whether the offset is out of bound in the y-axis
     * @param {Number} p the offset
     * @return {Boolean}
     */
    isOutOfBoundY: function(p) {
        return (p < this.y || p > this.bottom);
    },

    /*
     * Restrict a point within the region by a certain factor.
     * @param {String} axis Optional
     * @param {Ext.util.Point/Ext.util.Offset/Object} p
     * @param {Number} factor
     * @return {Ext.util.Point/Ext.util.Offset/Object/Number}
     */
    restrict: function(axis, p, factor) {
        if (Ext.isObject(axis)) {
            var newP;

            factor = p;
            p = axis;

            if (p.copy) {
                newP = p.copy();
            }
            else {
                newP = {
                    x: p.x,
                    y: p.y
                };
            }

            newP.x = this.restrictX(p.x, factor);
            newP.y = this.restrictY(p.y, factor);
            return newP;
        } else {
            if (axis == 'x') {
                return this.restrictX(p, factor);
            } else {
                return this.restrictY(p, factor);
            }
        }
    },

    /*
     * Restrict an offset within the region by a certain factor, on the x-axis
     * @param {Number} p
     * @param {Number} factor The factor, optional, defaults to 1
     * @return
     */
    restrictX : function(p, factor) {
        if (!factor) {
            factor = 1;
        }

        if (p <= this.x) {
            p -= (p - this.x) * factor;
        }
        else if (p >= this.right) {
            p -= (p - this.right) * factor;
        }
        return p;
    },

    /*
     * Restrict an offset within the region by a certain factor, on the y-axis
     * @param {Number} p
     * @param {Number} factor The factor, optional, defaults to 1
     */
    restrictY : function(p, factor) {
        if (!factor) {
            factor = 1;
        }

        if (p <= this.y) {
            p -= (p - this.y) * factor;
        }
        else if (p >= this.bottom) {
            p -= (p - this.bottom) * factor;
        }
        return p;
    },

    /*
     * Get the width / height of this region
     * @return {Object} an object with width and height properties
     */
    getSize: function() {
        return {
            width: this.right - this.x,
            height: this.bottom - this.y
        };
    },

    /**
     * Copy a new instance
     * @return {Ext.util.Region}
     */
    copy: function() {
        return new this.self(this.y, this.right, this.bottom, this.x);
    },

    /**
     * Copy the values of another Region to this Region
     * @param {Region} The region to copy from.
     * @return {Ext.util.Point} this This point
     */
    copyFrom: function(p) {
        var me = this;
        me.top = me.y = me[1] = p.y;
        me.right = p.right;
        me.bottom = p.bottom;
        me.left = me.x = me[0] = p.x;

        return this;
    },

    /**
     * Dump this to an eye-friendly string, great for debugging
     * @return {String}
     */
    toString: function() {
        return "Region[" + this.top + "," + this.right + "," + this.bottom + "," + this.left + "]";
    },


    /**
     * Translate this region by the given offset amount
     * @param {Ext.util.Offset/Object} offset Object containing the <code>x</code> and <code>y</code> properties.
     * Or the x value is using the two argument form.
     * @param {Number} The y value unless using an Offset object.
     * @return {Ext.util.Region} this This Region
     */
    translateBy: function(x, y) {
        if (arguments.length == 1) {
            y = x.y;
            x = x.x;
        }
        var me = this;
        me.top = me.y += y;
        me.right += x;
        me.bottom += y;
        me.left = me.x += x;

        return me;
    },

    /**
     * Round all the properties of this region
     * @return {Ext.util.Region} this This Region
     */
    round: function() {
        var me = this;
        me.top = me.y = Math.round(me.y);
        me.right = Math.round(me.right);
        me.bottom = Math.round(me.bottom);
        me.left = me.x = Math.round(me.x);

        return me;
    },

    /**
     * Check whether this region is equivalent to the given region
     * @param {Ext.util.Region} region The region to compare with
     * @return {Boolean}
     */
    equals: function(region) {
        return (this.top == region.top && this.right == region.right && this.bottom == region.bottom && this.left == region.left);
    }
});
