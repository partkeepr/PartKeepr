Ext.data.JsonP.Ext_layout_container_AbstractCard({
  "tagname": "class",
  "name": "Ext.layout.container.AbstractCard",
  "doc": "<p>This layout manages multiple child Components, each is fit to the Container, where only a single child Component\ncan be visible at any given time.  This layout style is most commonly used for wizards, tab implementations, etc.\nThis class is intended to be extended or created via the layout:'card' <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config,\nand should generally not need to be created directly via the new keyword.</p>\n\n\n<p>The CardLayout's focal method is <a href=\"#/api/Ext.layout.container.AbstractCard--setActiveItem\" rel=\"Ext.layout.container.AbstractCard--setActiveItem\" class=\"docClass\">setActiveItem</a>.  Since only one panel is displayed at a time,\nthe only way to move from one Component to the next is by calling setActiveItem, passing the id or index of\nthe next panel to display.  The layout itself does not provide a user interface for handling this navigation,\nso that functionality must be provided by the developer.</p>\n\n\n<p>Containers that are configured with a card layout will have a method setActiveItem dynamically added to it.\n<pre><code>      var p = new Ext.panel.Panel({\n          fullscreen: true,\n          layout: 'card',\n          items: [{\n              html: 'Card 1'\n          },{\n              html: 'Card 2'\n          }]\n      });\n      p.setActiveItem(1);\n   </code></pre>\n</p>\n\n",
  "extends": "Ext.layout.container.Fit",
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
      "name": "deferredRender",
      "member": "Ext.layout.container.AbstractCard",
      "type": "Boolean",
      "doc": "<p>True to render each contained item at the time it becomes active, false to render all contained items\nas soon as the layout is rendered (defaults to false).  If there is a significant amount of content or\na lot of heavy controls being rendered into panels that are not displayed by default, setting this to\ntrue might improve performance.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
      "linenr": 42,
      "html_filename": "AbstractCard.html",
      "href": "AbstractCard.html#Ext-layout-container-AbstractCard-cfg-deferredRender",
      "shortDoc": "True to render each contained item at the time it becomes active, false to render all contained items\nas soon as the ..."
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
      "name": "getActiveItem",
      "member": "Ext.layout.container.AbstractCard",
      "doc": "<p>Return the active (visible) component in the layout.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.Component",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
      "linenr": 91,
      "html_filename": "AbstractCard.html",
      "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getActiveItem",
      "shortDoc": "<p>Return the active (visible) component in the layout.</p>\n"
    },
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
      "name": "getNext",
      "member": "Ext.layout.container.AbstractCard",
      "doc": "<p>Return the active (visible) component in the layout to the next card</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "wrap",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
      "linenr": 150,
      "html_filename": "AbstractCard.html",
      "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getNext",
      "shortDoc": "<p>Return the active (visible) component in the layout to the next card</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPrev",
      "member": "Ext.layout.container.AbstractCard",
      "doc": "<p>Return the active (visible) component in the layout to the previous card</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "wrap",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
      "linenr": 173,
      "html_filename": "AbstractCard.html",
      "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getPrev",
      "shortDoc": "<p>Return the active (visible) component in the layout to the previous card</p>\n"
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
    },
    {
      "tagname": "method",
      "name": "next",
      "member": "Ext.layout.container.AbstractCard",
      "doc": "<p>Sets the active (visible) component in the layout to the next card</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "anim",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "wrap",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
      "linenr": 163,
      "html_filename": "AbstractCard.html",
      "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-next",
      "shortDoc": "<p>Sets the active (visible) component in the layout to the next card</p>\n"
    },
    {
      "tagname": "method",
      "name": "prev",
      "member": "Ext.layout.container.AbstractCard",
      "doc": "<p>Sets the active (visible) component in the layout to the previous card</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "anim",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "wrap",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
      "linenr": 186,
      "html_filename": "AbstractCard.html",
      "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-prev",
      "shortDoc": "<p>Sets the active (visible) component in the layout to the previous card</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/container/AbstractCard.js",
  "linenr": 1,
  "html_filename": "AbstractCard.html",
  "href": "AbstractCard.html#Ext-layout-container-AbstractCard",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container",
    "Ext.layout.container.AbstractFit",
    "Ext.layout.container.Fit"
  ],
  "subclasses": [
    "Ext.layout.container.Card"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});