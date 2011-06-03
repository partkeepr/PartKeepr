Ext.data.JsonP.Ext_layout_container_AbstractFit({
  "tagname": "class",
  "name": "Ext.layout.container.AbstractFit",
  "doc": "<p>This is a base class for layouts that contain <b>a single item</b> that automatically expands to fill the layout's\ncontainer.  This class is intended to be extended or created via the <tt>layout:'fit'</tt> <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a>\nconfig, and should generally not need to be created directly via the new keyword.</p>\n\n\n<p>FitLayout does not have any direct config options (other than inherited ones).  To fit a panel to a container\nusing FitLayout, simply set layout:'fit' on the container and add a single panel to it.  If the container has\nmultiple panels, only the first one will be displayed.  Example usage:</p>\n\n\n<pre><code>var p = new Ext.panel.Panel({\n    title: 'Fit Layout',\n    layout:'fit',\n    items: {\n        title: 'Inner Panel',\n        html: '&lt;p&gt;This is the inner panel content&lt;/p&gt;',\n        border: false\n    }\n});\n</code></pre>\n\n",
  "extends": "Ext.layout.container.Container",
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
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractFit.js",
  "linenr": 1,
  "html_filename": "AbstractFit.html",
  "href": "AbstractFit.html#Ext-layout-container-AbstractFit",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container"
  ],
  "subclasses": [
    "Ext.layout.container.Fit"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});