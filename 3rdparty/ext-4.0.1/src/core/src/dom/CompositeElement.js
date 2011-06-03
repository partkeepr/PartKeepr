/**
 * @class Ext.CompositeElement
 * @extends Ext.CompositeElementLite
 * <p>This class encapsulates a <i>collection</i> of DOM elements, providing methods to filter
 * members, or to perform collective actions upon the whole set.</p>
 * <p>Although they are not listed, this class supports all of the methods of {@link Ext.core.Element} and
 * {@link Ext.fx.Anim}. The methods from these classes will be performed on all the elements in this collection.</p>
 * <p>All methods return <i>this</i> and can be chained.</p>
 * Usage:
<pre><code>
var els = Ext.select("#some-el div.some-class", true);
// or select directly from an existing element
var el = Ext.get('some-el');
el.select('div.some-class', true);

els.setWidth(100); // all elements become 100 width
els.hide(true); // all elements fade out and hide
// or
els.setWidth(100).hide(true);
</code></pre>
 */
Ext.CompositeElement = Ext.extend(Ext.CompositeElementLite, {
    
    constructor : function(els, root){
        this.elements = [];
        this.add(els, root);
    },
    
    // private
    getElement : function(el){
        // In this case just return it, since we already have a reference to it
        return el;
    },
    
    // private
    transformElement : function(el){
        return Ext.get(el);
    }

    /**
    * Adds elements to this composite.
    * @param {String/Array} els A string CSS selector, an array of elements or an element
    * @return {CompositeElement} this
    */

    /**
     * Returns the Element object at the specified index
     * @param {Number} index
     * @return {Ext.core.Element}
     */

    /**
     * Iterates each `element` in this `composite` calling the supplied function using {@link Ext#each Ext.each}.
     * @param {Function} fn 

The function to be called with each
`element`. If the supplied function returns <tt>false</tt>,
iteration stops. This function is called with the following arguments:

- `element` : __Ext.core.Element++
    The element at the current `index` in the `composite`
    
- `composite` : __Object__ 
    This composite.

- `index` : __Number__ 
    The current index within the `composite`

     * @param {Object} scope (optional) The scope (<code>this</code> reference) in which the specified function is executed.
     * Defaults to the <code>element</code> at the current <code>index</code>
     * within the composite.
     * @return {CompositeElement} this
     * @markdown
     */
});

/**
 * Selects elements based on the passed CSS selector to enable {@link Ext.core.Element Element} methods
 * to be applied to many related elements in one statement through the returned {@link Ext.CompositeElement CompositeElement} or
 * {@link Ext.CompositeElementLite CompositeElementLite} object.
 * @param {String/Array} selector The CSS selector or an array of elements
 * @param {Boolean} unique (optional) true to create a unique Ext.core.Element for each element (defaults to a shared flyweight object)
 * @param {HTMLElement/String} root (optional) The root element of the query or id of the root
 * @return {CompositeElementLite/CompositeElement}
 * @member Ext.core.Element
 * @method select
 */
Ext.core.Element.select = function(selector, unique, root){
    var els;
    if(typeof selector == "string"){
        els = Ext.core.Element.selectorFunction(selector, root);
    }else if(selector.length !== undefined){
        els = selector;
    }else{
        //<debug>
        Ext.Error.raise({
            sourceClass: "Ext.core.Element",
            sourceMethod: "select",
            selector: selector,
            unique: unique,
            root: root,
            msg: "Invalid selector specified: " + selector
        });
        //</debug>
    }
    return (unique === true) ? new Ext.CompositeElement(els) : new Ext.CompositeElementLite(els);
};

/**
 * Selects elements based on the passed CSS selector to enable {@link Ext.core.Element Element} methods
 * to be applied to many related elements in one statement through the returned {@link Ext.CompositeElement CompositeElement} or
 * {@link Ext.CompositeElementLite CompositeElementLite} object.
 * @param {String/Array} selector The CSS selector or an array of elements
 * @param {Boolean} unique (optional) true to create a unique Ext.core.Element for each element (defaults to a shared flyweight object)
 * @param {HTMLElement/String} root (optional) The root element of the query or id of the root
 * @return {CompositeElementLite/CompositeElement}
 * @member Ext
 * @method select
 */
Ext.select = Ext.core.Element.select;