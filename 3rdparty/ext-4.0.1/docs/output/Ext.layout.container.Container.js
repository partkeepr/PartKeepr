Ext.data.JsonP.Ext_layout_container_Container({
  "tagname": "class",
  "name": "Ext.layout.container.Container",
  "doc": "<p>This class is intended to be extended or created via the <tt><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></tt>\nconfiguration property.  See <tt><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a></b></tt> for additional details.</p>\n\n",
  "extends": "Ext.layout.container.AbstractContainer",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.layout.ContainerLayout"
  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": true,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "bindToOwnerCtComponent",
      "member": "Ext.layout.container.AbstractContainer",
      "type": "Boolean",
      "doc": "<p>Flag to notify the ownerCt Component on afterLayout of a change</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
      "linenr": 24,
      "html_filename": "AbstractContainer2.html",
      "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtComponent"
    },
    {
      "tagname": "cfg",
      "name": "bindToOwnerCtContainer",
      "member": "Ext.layout.container.AbstractContainer",
      "type": "Boolean",
      "doc": "<p>Flag to notify the ownerCt Container on afterLayout of a change</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
      "linenr": 30,
      "html_filename": "AbstractContainer2.html",
      "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtContainer"
    },
    {
      "tagname": "cfg",
      "name": "itemCls",
      "member": "Ext.layout.container.AbstractContainer",
      "type": "String",
      "doc": "<p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#/api/Ext.Component--ctCls\" rel=\"Ext.Component--ctCls\" class=\"docClass\">ctCls</a> also.</p>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
      "linenr": 36,
      "html_filename": "AbstractContainer2.html",
      "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-cfg-itemCls",
      "shortDoc": "An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to t..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "getLayoutItems",
      "member": "Ext.layout.container.AbstractContainer",
      "doc": "<p>Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\nbase class), or the layout phase (onLayout).</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>of child components</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
      "linenr": 87,
      "html_filename": "AbstractContainer2.html",
      "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-getLayoutItems",
      "shortDoc": "Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\n..."
    },
    {
      "tagname": "method",
      "name": "getRenderTarget",
      "member": "Ext.layout.container.AbstractContainer",
      "doc": "<p>Returns the element into which rendering must take place. Defaults to the owner Container's <a href=\"#/api/Ext.AbstractComponent--targetEl\" rel=\"Ext.AbstractComponent--targetEl\" class=\"docClass\">Ext.AbstractComponent.targetEl</a>.</p>\n\n\n<p>May be overridden in layout managers which implement an inner element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
      "linenr": 106,
      "html_filename": "AbstractContainer2.html",
      "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-getRenderTarget",
      "shortDoc": "Returns the element into which rendering must take place. Defaults to the owner Container's Ext.AbstractComponent.tar..."
    },
    {
      "tagname": "method",
      "name": "getTarget",
      "member": "Ext.layout.container.AbstractContainer",
      "doc": "<p>Returns the owner component's resize element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractContainer.js",
      "linenr": 99,
      "html_filename": "AbstractContainer2.html",
      "href": "AbstractContainer2.html#Ext-layout-container-AbstractContainer-method-getTarget",
      "shortDoc": "<p>Returns the owner component's resize element.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Container.js",
  "linenr": 1,
  "html_filename": "Container3.html",
  "href": "Container3.html#Ext-layout-container-Container",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer"
  ],
  "subclasses": [
    "Ext.layout.container.Anchor",
    "Ext.layout.container.Border",
    "Ext.layout.container.Box",
    "Ext.layout.container.CheckboxGroup",
    "Ext.layout.container.AbstractFit",
    "Ext.layout.container.Auto"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});