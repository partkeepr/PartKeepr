Ext.data.JsonP.Ext_CompositeElementLite({
  "allMixins": [

  ],
  "deprecated": null,
  "xtype": null,
  "docauthor": null,
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-add",
        "shortDoc": "Adds elements to this Composite object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Either an Array of DOM elements to add, or another Composite object who's elements should be added.</p>\n",
            "name": "els"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "root"
          }
        ],
        "name": "add",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Adds elements to this Composite object.</p>\n",
        "linenr": 75,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>This Composite object.</p>\n"
        },
        "html_filename": "CompositeElementLite.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-clear",
        "shortDoc": "Removes all elements. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "params": [

        ],
        "name": "clear",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Removes all elements.</p>\n",
        "linenr": 246,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "CompositeElementLite.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-contains",
        "shortDoc": "Returns true if this composite contains the passed element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{Mixed} The id of an element, or an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>, or an HtmlElement to find within the composite collection.</p>\n",
            "name": "el"
          }
        ],
        "name": "contains",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Returns true if this composite contains the passed element</p>\n",
        "linenr": 35,
        "return": {
          "type": "void",
          "doc": "<p>Boolean</p>\n"
        },
        "html_filename": "CompositeElementLite-more.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-each",
        "shortDoc": "Calls the passed function for each element in this composite. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call. The function is passed the following parameters:<ul>\n<li><b>el</b> : Element<div class=\"sub-desc\">The current Element in the iteration.\n<b>This is the flyweight (shared) <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> instance, so if you require a\na reference to the dom node, use el.dom.</b></div></li>\n<li><b>c</b> : Composite<div class=\"sub-desc\">This Composite object.</div></li>\n<li><b>idx</b> : Number<div class=\"sub-desc\">The zero-based index in the iteration.</div></li>\n</ul></p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<i>this</i> reference) in which the function is executed. (defaults to the Element)</p>\n",
            "name": "scope"
          }
        ],
        "name": "each",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Calls the passed function for each element in this composite.</p>\n\n",
        "linenr": 145,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "CompositeElementLite.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-fill",
        "shortDoc": "Clears this Composite and adds the elements passed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Either an array of DOM elements, or another Composite from which to fill this Composite.</p>\n",
            "name": "els"
          }
        ],
        "name": "fill",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Clears this Composite and adds the elements passed.</p>\n",
        "linenr": 175,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "CompositeElementLite.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-filter",
        "shortDoc": "Filters this composite to only elements that match the passed selector. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "params": [
          {
            "type": "String/Function",
            "optional": false,
            "doc": "<p>A string CSS selector or a comparison function.\nThe comparison function will be called with the following arguments:<ul>\n<li><code>el</code> : Ext.core.Element<div class=\"sub-desc\">The current DOM element.</div></li>\n<li><code>index</code> : Number<div class=\"sub-desc\">The current index within the collection.</div></li>\n</ul></p>\n",
            "name": "selector"
          }
        ],
        "name": "filter",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Filters this composite to only elements that match the passed selector.</p>\n",
        "linenr": 187,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "CompositeElementLite.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-first",
        "shortDoc": "Returns the first Element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "params": [

        ],
        "name": "first",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Returns the first Element</p>\n",
        "linenr": 19,
        "return": {
          "type": "Ext.core.Element",
          "doc": "\n"
        },
        "html_filename": "CompositeElementLite-more.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-getCount",
        "shortDoc": "Returns the number of elements in this Composite. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "params": [

        ],
        "name": "getCount",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Returns the number of elements in this Composite.</p>\n",
        "linenr": 68,
        "return": {
          "type": "void",
          "doc": "<p>Number</p>\n"
        },
        "html_filename": "CompositeElementLite.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-indexOf",
        "shortDoc": "Find the index of the passed element within the composite collection. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{Mixed} The id of an element, or an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>, or an HtmlElement to find within the composite collection.</p>\n",
            "name": "el"
          }
        ],
        "name": "indexOf",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Find the index of the passed element within the composite collection.</p>\n",
        "linenr": 214,
        "return": {
          "type": "void",
          "doc": "<p>Number The index of the passed <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> in the composite collection, or -1 if not found.</p>\n"
        },
        "html_filename": "CompositeElementLite.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-item",
        "shortDoc": "Returns a flyweight Element of the dom element object at the specified index ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "index"
          }
        ],
        "name": "item",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Returns a flyweight Element of the dom element object at the specified index</p>\n",
        "linenr": 115,
        "return": {
          "type": "Ext.core.Element",
          "doc": "\n"
        },
        "html_filename": "CompositeElementLite.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-last",
        "shortDoc": "Returns the last Element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "params": [

        ],
        "name": "last",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Returns the last Element</p>\n",
        "linenr": 27,
        "return": {
          "type": "Ext.core.Element",
          "doc": "\n"
        },
        "html_filename": "CompositeElementLite-more.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-removeElement",
        "shortDoc": "Removes the specified element(s). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The id of an element, the Element itself, the index of the element in this composite\nor an array of any of those.</p>\n",
            "name": "el"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to also remove the element from the document</p>\n",
            "name": "removeDom"
          }
        ],
        "name": "removeElement",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Removes the specified element(s).</p>\n",
        "linenr": 44,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "CompositeElementLite-more.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-replaceElement",
        "shortDoc": "Replaces the specified element with the passed element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The id of an element, the Element itself, the index of the element in this composite\nto replace.</p>\n",
            "name": "el"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The id of an element or the Element itself.</p>\n",
            "name": "replacement"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to remove and replace the element in the document too.</p>\n",
            "name": "domReplace"
          }
        ],
        "name": "replaceElement",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>Replaces the specified element with the passed element.</p>\n",
        "linenr": 223,
        "return": {
          "type": "CompositeElement",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "CompositeElementLite.html"
      }
    ],
    "property": [
      {
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-property-elements",
        "shortDoc": "The Array of DOM elements which this CompositeElement encapsulates. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "name": "elements",
        "owner": "Ext.CompositeElementLite",
        "doc": "<p>The Array of DOM elements which this CompositeElement encapsulates. Read-only.</p>\n\n\n<p>This will not <i>usually</i> be accessed in developers' code, but developers wishing\nto augment the capabilities of the CompositeElementLite class may use it when adding\nmethods to the class.</p>\n\n\n<p>For example to add the <code>nextAll</code> method to the class to <b>add</b> all\nfollowing siblings of selected elements, the code would be</p>\n\n\n<p><code></p>\n\n<pre>Ext.override(Ext.CompositeElementLite, {\n    nextAll: function() {\n        var els = this.elements, i, l = els.length, n, r = [], ri = -1;\n\n//      Loop through all elements in this Composite, accumulating\n//      an Array of all siblings.\n        for (i = 0; i < l; i++) {\n            for (n = els[i].nextSibling; n; n = n.nextSibling) {\n                r[++ri] = n;\n            }\n        }\n\n//      Add all found siblings to this Composite\n        return this.add(r);\n    }\n});</pre>\n\n\n<p></code></p>\n",
        "linenr": 20,
        "html_filename": "CompositeElementLite.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "CompositeElementLite-more.html#Ext-CompositeElementLite",
  "subclasses": [
    "Ext.CompositeElement"
  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.CompositeElementLite",
  "doc": "<p>This class encapsulates a <i>collection</i> of DOM elements, providing methods to filter\nmembers, or to perform collective actions upon the whole set.</p>\n\n\n<p>Although they are not listed, this class supports all of the methods of <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> and\n<a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a>. The methods from these classes will be performed on all the elements in this collection.</p>\n\n\n<p>Example:</p>\n\n<pre><code>var els = Ext.select(\"#some-el div.some-class\");\n// or select directly from an existing element\nvar el = Ext.get('some-el');\nel.select('div.some-class');\n\nels.setWidth(100); // all elements become 100 width\nels.hide(true); // all elements fade out and hide\n// or\nels.setWidth(100).hide(true);\n</code></pre>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "CompositeElementLite-more.html",
  "extends": null
});