/**
 * @class Ext.fx.target.CompositeElement
 * @extends Ext.fx.target.Element
 * 
 * This class represents a animation target for a {@link Ext.CompositeElement}. It allows
 * each {@link Ext.core.Element} in the group to be animated as a whole. In general this class will not be
 * created directly, the {@link Ext.CompositeElement} will be passed to the animation and
 * and the appropriate target will be created.
 */
Ext.define('Ext.fx.target.CompositeElement', {

    /* Begin Definitions */

    extend: 'Ext.fx.target.Element',

    /* End Definitions */

    isComposite: true,
    
    constructor: function(target) {
        target.id = target.id || Ext.id(null, 'ext-composite-');
        this.callParent([target]);
    },

    getAttr: function(attr, val) {
        var out = [],
            target = this.target;
        target.each(function(el) {
            out.push([el, this.getElVal(el, attr, val)]);
        }, this);
        return out;
    }
});
