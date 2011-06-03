Ext.data.JsonP.Ext_layout_component_Body({
  "tagname": "class",
  "name": "Ext.layout.component.Body",
  "doc": "<p>Component layout for components which maintain an inner body element which must be resized to synchronize with the\nComponent size.</p>\n",
  "extends": "Ext.layout.component.Component",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": true,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "getRenderTarget",
      "member": "Ext.layout.component.Component",
      "doc": "<p>Returns the element into which rendering must take place. Defaults to the owner Component's encapsulating element.</p>\n\n\n<p>May be overridden in Component layout managers which implement an inner element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/component/Component.js",
      "linenr": 129,
      "html_filename": "Component5.html",
      "href": "Component5.html#Ext-layout-component-Component-method-getRenderTarget",
      "shortDoc": "Returns the element into which rendering must take place. Defaults to the owner Component's encapsulating element.\n\n\n..."
    },
    {
      "tagname": "method",
      "name": "getTarget",
      "member": "Ext.layout.component.Component",
      "doc": "<p>Returns the owner component's resize element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/component/Component.js",
      "linenr": 121,
      "html_filename": "Component5.html",
      "href": "Component5.html#Ext-layout-component-Component-method-getTarget",
      "shortDoc": "<p>Returns the owner component's resize element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "needsLayout",
      "member": "Ext.layout.component.Component",
      "doc": "<p>Check if the new size is different from the current size and only\ntrigger a layout if it is necessary.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "width",
          "doc": "<p>The new width to set.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "height",
          "doc": "<p>The new height to set.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/component/Component.js",
      "linenr": 90,
      "html_filename": "Component5.html",
      "href": "Component5.html#Ext-layout-component-Component-method-needsLayout",
      "shortDoc": "<p>Check if the new size is different from the current size and only\ntrigger a layout if it is necessary.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setElementSize",
      "member": "Ext.layout.component.Component",
      "doc": "<p>Set the size of any element supporting undefined, null, and values.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "width",
          "doc": "<p>The new width to set.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "height",
          "doc": "<p>The new height to set.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "height",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/component/Component.js",
      "linenr": 104,
      "html_filename": "Component5.html",
      "href": "Component5.html#Ext-layout-component-Component-method-setElementSize",
      "shortDoc": "<p>Set the size of any element supporting undefined, null, and values.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setTargetSize",
      "member": "Ext.layout.component.Component",
      "doc": "<p>Set the size of the target element.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "width",
          "doc": "<p>The new width to set.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "height",
          "doc": "<p>The new height to set.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/component/Component.js",
      "linenr": 138,
      "html_filename": "Component5.html",
      "href": "Component5.html#Ext-layout-component-Component-method-setTargetSize",
      "shortDoc": "<p>Set the size of the target element.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/Body.js",
  "linenr": 1,
  "html_filename": "Body.html",
  "href": "Body.html#Ext-layout-component-Body",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.layout.Layout",
    "Ext.layout.component.Component"
  ],
  "subclasses": [
    "Ext.layout.component.FieldSet"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});