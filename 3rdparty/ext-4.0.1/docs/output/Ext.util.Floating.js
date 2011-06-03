Ext.data.JsonP.Ext_util_Floating({
  "tagname": "class",
  "name": "Ext.util.Floating",
  "doc": "<p>A mixin to add floating capability to a Component</p>\n",
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
    {
      "tagname": "cfg",
      "name": "focusOnToFront",
      "member": "Ext.util.Floating",
      "type": "Boolean",
      "doc": "<p>Specifies whether the floated component should be automatically <a href=\"#/api/Ext.util.Floating--focus\" rel=\"Ext.util.Floating--focus\" class=\"docClass\">focused</a> when it is\n<a href=\"#/api/Ext.util.Floating-method-toFront\" rel=\"Ext.util.Floating-method-toFront\" class=\"docClass\">brought to the front</a>. Defaults to true.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 9,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-cfg-focusOnToFront",
      "shortDoc": "Specifies whether the floated component should be automatically focused when it is\nbrought to the front. Defaults to ..."
    },
    {
      "tagname": "cfg",
      "name": "shadow",
      "member": "Ext.util.Floating",
      "type": "String/Boolean",
      "doc": "<p>Specifies whether the floating component should be given a shadow. Set to\n<tt>true</tt> to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the\nshadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. Set to <tt>false</tt> to disable the shadow.\n(Defaults to <tt>'sides'</tt>.)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 16,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-cfg-shadow",
      "shortDoc": "Specifies whether the floating component should be given a shadow. Set to\ntrue to automatically create an Ext.Shadow,..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "alignTo",
      "member": "Ext.util.Floating",
      "doc": "<p>Aligns this floating Component to the specified element</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "element",
          "doc": "<p>The element or <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> to align to. If passing a component, it must\nbe a omponent instance. If a string id is passed, it will be used as an element id.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "position",
          "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to (see <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">Ext.core.Element.alignTo</a> for more details).</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "offsets",
          "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 171,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-alignTo",
      "shortDoc": "<p>Aligns this floating Component to the specified element</p>\n"
    },
    {
      "tagname": "method",
      "name": "center",
      "member": "Ext.util.Floating",
      "doc": "<p>Center this Component in its container.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 249,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-center",
      "shortDoc": "<p>Center this Component in its container.</p>\n"
    },
    {
      "tagname": "method",
      "name": "doConstrain",
      "member": "Ext.util.Floating",
      "doc": "<p>Moves this floating Component into a constrain region.</p>\n\n\n<p>By default, this Component is constrained to be within the container it was added to, or the element\nit was rendered to.</p>\n\n\n<p>An alternative constraint may be passed.</p>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "constrainTo",
          "doc": "<p>Optional. The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this Component is to be constrained.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 133,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-doConstrain",
      "shortDoc": "Moves this floating Component into a constrain region.\n\n\nBy default, this Component is constrained to be within the c..."
    },
    {
      "tagname": "method",
      "name": "setActive",
      "member": "Ext.util.Floating",
      "doc": "<p>This method is called internally by <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">Ext.ZIndexManager</a> to signal that a floating\nComponent has either been moved to the top of its zIndex stack, or pushed from the top of its zIndex stack.</p>\n\n\n<p>If a <i>Window</i> is superceded by another Window, deactivating it hides its shadow.</p>\n\n\n<p>This method also fires the <a href=\"#/api/Ext.util.Floating--activate\" rel=\"Ext.util.Floating--activate\" class=\"docClass\">activate</a> or <a href=\"#/api/Ext.util.Floating--deactivate\" rel=\"Ext.util.Floating--deactivate\" class=\"docClass\">deactivate</a> event depending on which action occurred.</p>\n\n",
      "params": [
        {
          "type": "Boolean",
          "name": "active",
          "doc": "<p>True to activate the Component, false to deactivate it (defaults to false)</p>\n",
          "optional": false
        },
        {
          "type": "Component",
          "name": "newActive",
          "doc": "<p>The newly active Component which is taking over topmost zIndex position.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 216,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-setActive",
      "shortDoc": "This method is called internally by Ext.ZIndexManager to signal that a floating\nComponent has either been moved to th..."
    },
    {
      "tagname": "method",
      "name": "toBack",
      "member": "Ext.util.Floating",
      "doc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n",
      "params": [

      ],
      "return": {
        "type": "Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 240,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-toBack",
      "shortDoc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n"
    },
    {
      "tagname": "method",
      "name": "toFront",
      "member": "Ext.util.Floating",
      "doc": "<p>Brings this floating Component to the front of any other visible, floating Components managed by the same <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<p>If this Component is modal, inserts the modal mask just below this Component in the z-index stack.</p>\n\n",
      "params": [
        {
          "type": "Boolean",
          "name": "preventFocus",
          "doc": "<p>(optional) Specify <code>true</code> to prevent the Component from being focused.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Component",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
      "linenr": 188,
      "html_filename": "Floating.html",
      "href": "Floating.html#Ext-util-Floating-method-toFront",
      "shortDoc": "Brings this floating Component to the front of any other visible, floating Components managed by the same ZIndexManag..."
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Floating.js",
  "linenr": 1,
  "html_filename": "Floating.html",
  "href": "Floating.html#Ext-util-Floating",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [
    "Ext.Component"
  ],
  "allMixins": [

  ]
});