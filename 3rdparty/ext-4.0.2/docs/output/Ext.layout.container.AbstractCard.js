Ext.data.JsonP.Ext_layout_container_AbstractCard({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtComponent",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "name": "bindToOwnerCtComponent",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Flag to notify the ownerCt Component on afterLayout of a change</p>\n",
        "linenr": 17,
        "html_filename": "AbstractContainer.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtContainer",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "name": "bindToOwnerCtContainer",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Flag to notify the ownerCt Container on afterLayout of a change</p>\n",
        "linenr": 23,
        "html_filename": "AbstractContainer.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-cfg-deferredRender",
        "shortDoc": "True to render each contained item at the time it becomes active, false to render all contained items\nas soon as the ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "name": "deferredRender",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>True to render each contained item at the time it becomes active, false to render all contained items\nas soon as the layout is rendered (defaults to false).  If there is a significant amount of content or\na lot of heavy controls being rendered into panels that are not displayed by default, setting this to\ntrue might improve performance.</p>\n",
        "linenr": 40,
        "html_filename": "AbstractCard.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-itemCls",
        "shortDoc": "An optional extra CSS class that will be added to the container. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "name": "itemCls",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.ctCls also.</p>\n\n\n<p></p></p>\n",
        "linenr": 29,
        "html_filename": "AbstractContainer.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getActiveItem",
        "shortDoc": "Return the active (visible) component in the layout. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "params": [

        ],
        "name": "getActiveItem",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>Return the active (visible) component in the layout.</p>\n",
        "linenr": 89,
        "return": {
          "type": "Ext.Component",
          "doc": "\n"
        },
        "html_filename": "AbstractCard.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getLayoutItems",
        "shortDoc": "Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\n...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "params": [

        ],
        "name": "getLayoutItems",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\nbase class), or the layout phase (onLayout).</p>\n\n",
        "linenr": 49,
        "return": {
          "type": "Array",
          "doc": "<p>of child components</p>\n"
        },
        "html_filename": "AbstractContainer.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getNext",
        "shortDoc": "Return the active (visible) component in the layout to the next card ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "params": [

        ],
        "name": "getNext",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>Return the active (visible) component in the layout to the next card</p>\n",
        "linenr": 148,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The next component or false.</p>\n"
        },
        "html_filename": "AbstractCard.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getPrev",
        "shortDoc": "Return the active (visible) component in the layout to the previous card ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "params": [

        ],
        "name": "getPrev",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>Return the active (visible) component in the layout to the previous card</p>\n",
        "linenr": 172,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The previous component or false.</p>\n"
        },
        "html_filename": "AbstractCard.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getRenderTarget",
        "shortDoc": "Returns the element into which rendering must take place. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "params": [

        ],
        "name": "getRenderTarget",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Returns the element into which rendering must take place. Defaults to the owner Container's Ext.AbstractComponent.targetEl.</p>\n\n\n<p>May be overridden in layout managers which implement an inner element.</p>\n",
        "linenr": 68,
        "return": {
          "type": "Ext.core.Element",
          "doc": "\n"
        },
        "html_filename": "AbstractContainer.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Container.html#Ext-layout-container-Container-method-getRenderedItems",
        "shortDoc": "Returns all items that are rendered ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Container.js",
        "private": false,
        "params": [

        ],
        "name": "getRenderedItems",
        "owner": "Ext.layout.container.Container",
        "doc": "<p>Returns all items that are rendered</p>\n",
        "linenr": 53,
        "return": {
          "type": "Array",
          "doc": "<p>All matching items</p>\n"
        },
        "html_filename": "Container.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getTarget",
        "shortDoc": "Returns the owner component's resize element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "params": [

        ],
        "name": "getTarget",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Returns the owner component's resize element.</p>\n",
        "linenr": 61,
        "return": {
          "type": "Ext.core.Element",
          "doc": "\n"
        },
        "html_filename": "AbstractContainer.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Container.html#Ext-layout-container-Container-method-getVisibleItems",
        "shortDoc": "Returns all items that are both rendered and visible ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Container.js",
        "private": false,
        "params": [

        ],
        "name": "getVisibleItems",
        "owner": "Ext.layout.container.Container",
        "doc": "<p>Returns all items that are both rendered and visible</p>\n",
        "linenr": 76,
        "return": {
          "type": "Array",
          "doc": "<p>All matching items</p>\n"
        },
        "html_filename": "Container.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-next",
        "shortDoc": "Sets the active (visible) component in the layout to the next card ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "params": [

        ],
        "name": "next",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>Sets the active (visible) component in the layout to the next card</p>\n",
        "linenr": 161,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>the activated component or false when nothing activated.</p>\n"
        },
        "html_filename": "AbstractCard.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-prev",
        "shortDoc": "Sets the active (visible) component in the layout to the previous card ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "params": [

        ],
        "name": "prev",
        "owner": "Ext.layout.container.AbstractCard",
        "doc": "<p>Sets the active (visible) component in the layout to the previous card</p>\n",
        "linenr": 185,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>the activated component or false when nothing activated.</p>\n"
        },
        "html_filename": "AbstractCard.html"
      }
    ],
    "property": [

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
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container",
    "Ext.layout.container.AbstractFit",
    "Ext.layout.container.Fit"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "AbstractCard.html#Ext-layout-container-AbstractCard",
  "subclasses": [
    "Ext.layout.container.Card"
  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.layout.container.AbstractCard",
  "doc": "<p>This layout manages multiple child Components, each is fit to the Container, where only a single child Component\ncan be visible at any given time.  This layout style is most commonly used for wizards, tab implementations, etc.\nThis class is intended to be extended or created via the layout:'card' <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config,\nand should generally not need to be created directly via the new keyword.</p>\n\n<p>The CardLayout's focal method is setActiveItem.  Since only one panel is displayed at a time,\nthe only way to move from one Component to the next is by calling setActiveItem, passing the id or index of\nthe next panel to display.  The layout itself does not provide a user interface for handling this navigation,\nso that functionality must be provided by the developer.</p>\n\n<p>Containers that are configured with a card layout will have a method setActiveItem dynamically added to it.</p>\n\n<pre><code>var p = new Ext.panel.Panel({\n    fullscreen: true,\n    layout: 'card',\n    items: [{\n        html: 'Card 1'\n    },{\n        html: 'Card 2'\n    }]\n});\np.setActiveItem(1);\n</code></pre>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "AbstractCard.html",
  "extends": "Ext.layout.container.Fit"
});