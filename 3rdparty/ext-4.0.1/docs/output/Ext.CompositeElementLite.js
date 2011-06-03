Ext.data.JsonP.Ext_CompositeElementLite({
  "tagname": "class",
  "name": "Ext.CompositeElementLite",
  "doc": "<p>This class encapsulates a <i>collection</i> of DOM elements, providing methods to filter\nmembers, or to perform collective actions upon the whole set.</p>\n\n\n<p>Although they are not listed, this class supports all of the methods of <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> and\n<a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a>. The methods from these classes will be performed on all the elements in this collection.</p>\n\n\n<p>Example:</p>\n\n<pre><code>var els = Ext.select(\"#some-el div.some-class\");\n// or select directly from an existing element\nvar el = Ext.get('some-el');\nel.select('div.some-class');\n\nels.setWidth(100); // all elements become 100 width\nels.hide(true); // all elements fade out and hide\n// or\nels.setWidth(100).hide(true);\n</code></pre>\n\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "add",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Adds elements to this Composite object.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "els",
          "doc": "<p>Either an Array of DOM elements to add, or another Composite object who's elements should be added.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "root",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "CompositeElement",
        "doc": "<p>This Composite object.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 75,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-add",
      "shortDoc": "<p>Adds elements to this Composite object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "clear",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Removes all elements.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 246,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-clear",
      "shortDoc": "<p>Removes all elements.</p>\n"
    },
    {
      "tagname": "method",
      "name": "contains",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Returns true if this composite contains the passed element</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "el",
          "doc": "<p>{Mixed} The id of an element, or an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>, or an HtmlElement to find within the composite collection.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>Boolean</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite-more.js",
      "linenr": 35,
      "html_filename": "CompositeElementLite-more.html",
      "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-contains",
      "shortDoc": "<p>Returns true if this composite contains the passed element</p>\n"
    },
    {
      "tagname": "method",
      "name": "each",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Calls the passed function for each element in this composite.</p>\n\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call. The function is passed the following parameters:<ul>\n<li><b>el</b> : Element<div class=\"sub-desc\">The current Element in the iteration.\n<b>This is the flyweight (shared) <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> instance, so if you require a\na reference to the dom node, use el.dom.</b></div></li>\n<li><b>c</b> : Composite<div class=\"sub-desc\">This Composite object.</div></li>\n<li><b>idx</b> : Number<div class=\"sub-desc\">The zero-based index in the iteration.</div></li>\n</ul></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<i>this</i> reference) in which the function is executed. (defaults to the Element)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "CompositeElement",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 145,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-each",
      "shortDoc": "<p>Calls the passed function for each element in this composite.</p>\n\n"
    },
    {
      "tagname": "method",
      "name": "fill",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Clears this Composite and adds the elements passed.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "els",
          "doc": "<p>Either an array of DOM elements, or another Composite from which to fill this Composite.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "CompositeElement",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 175,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-fill",
      "shortDoc": "<p>Clears this Composite and adds the elements passed.</p>\n"
    },
    {
      "tagname": "method",
      "name": "filter",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Filters this composite to only elements that match the passed selector.</p>\n",
      "params": [
        {
          "type": "String/Function",
          "name": "selector",
          "doc": "<p>A string CSS selector or a comparison function.\nThe comparison function will be called with the following arguments:<ul>\n<li><code>el</code> : Ext.core.Element<div class=\"sub-desc\">The current DOM element.</div></li>\n<li><code>index</code> : Number<div class=\"sub-desc\">The current index within the collection.</div></li>\n</ul></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "CompositeElement",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 187,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-filter",
      "shortDoc": "<p>Filters this composite to only elements that match the passed selector.</p>\n"
    },
    {
      "tagname": "method",
      "name": "first",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Returns the first Element</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite-more.js",
      "linenr": 19,
      "html_filename": "CompositeElementLite-more.html",
      "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-first",
      "shortDoc": "<p>Returns the first Element</p>\n"
    },
    {
      "tagname": "method",
      "name": "getCount",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Returns the number of elements in this Composite.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "<p>Number</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 68,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-getCount",
      "shortDoc": "<p>Returns the number of elements in this Composite.</p>\n"
    },
    {
      "tagname": "method",
      "name": "indexOf",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Find the index of the passed element within the composite collection.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "el",
          "doc": "<p>{Mixed} The id of an element, or an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>, or an HtmlElement to find within the composite collection.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>Number The index of the passed <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> in the composite collection, or -1 if not found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 214,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-indexOf",
      "shortDoc": "<p>Find the index of the passed element within the composite collection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "item",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Returns a flyweight Element of the dom element object at the specified index</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 115,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-item",
      "shortDoc": "<p>Returns a flyweight Element of the dom element object at the specified index</p>\n"
    },
    {
      "tagname": "method",
      "name": "last",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Returns the last Element</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite-more.js",
      "linenr": 27,
      "html_filename": "CompositeElementLite-more.html",
      "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-last",
      "shortDoc": "<p>Returns the last Element</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeElement",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Removes the specified element(s).</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The id of an element, the Element itself, the index of the element in this composite\nor an array of any of those.</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "removeDom",
          "doc": "<p>(optional) True to also remove the element from the document</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "CompositeElement",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite-more.js",
      "linenr": 44,
      "html_filename": "CompositeElementLite-more.html",
      "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-removeElement",
      "shortDoc": "<p>Removes the specified element(s).</p>\n"
    },
    {
      "tagname": "method",
      "name": "replaceElement",
      "member": "Ext.CompositeElementLite",
      "doc": "<p>Replaces the specified element with the passed element.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The id of an element, the Element itself, the index of the element in this composite\nto replace.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "replacement",
          "doc": "<p>The id of an element or the Element itself.</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "domReplace",
          "doc": "<p>(Optional) True to remove and replace the element in the document too.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "CompositeElement",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 223,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-replaceElement",
      "shortDoc": "<p>Replaces the specified element with the passed element.</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "elements",
      "member": "Ext.CompositeElementLite",
      "type": "Array",
      "doc": "<p>The Array of DOM elements which this CompositeElement encapsulates. Read-only.</p>\n\n\n<p>This will not <i>usually</i> be accessed in developers' code, but developers wishing\nto augment the capabilities of the CompositeElementLite class may use it when adding\nmethods to the class.</p>\n\n\n<p>For example to add the <code>nextAll</code> method to the class to <b>add</b> all\nfollowing siblings of selected elements, the code would be</p>\n\n\n<p><code></p>\n\n<pre>Ext.override(Ext.CompositeElementLite, {\n    nextAll: function() {\n        var els = this.elements, i, l = els.length, n, r = [], ri = -1;\n\n//      Loop through all elements in this Composite, accumulating\n//      an Array of all siblings.\n        for (i = 0; i < l; i++) {\n            for (n = els[i].nextSibling; n; n = n.nextSibling) {\n                r[++ri] = n;\n            }\n        }\n\n//      Add all found siblings to this Composite\n        return this.add(r);\n    }\n});</pre>\n\n\n<p></code></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 20,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-CompositeElementLite-property-elements",
      "shortDoc": "The Array of DOM elements which this CompositeElement encapsulates. Read-only.\n\n\nThis will not usually be accessed in..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite-more.js",
  "linenr": 1,
  "html_filename": "CompositeElementLite-more.html",
  "href": "CompositeElementLite-more.html#Ext-CompositeElementLite",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.CompositeElement"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});