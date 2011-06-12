Ext.data.JsonP.Ext_layout_container_Card({
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
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Card.html#Ext-layout-container-Card-method-setActiveItem",
        "shortDoc": "Makes the given card active. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Card.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component/Number/String",
            "optional": false,
            "doc": "<p>The component, component <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a>,\n<a href=\"#/api/Ext.Component-cfg-itemId\" rel=\"Ext.Component-cfg-itemId\" class=\"docClass\">itemId</a>, or index of component.</p>\n",
            "name": "newCard"
          }
        ],
        "name": "setActiveItem",
        "owner": "Ext.layout.container.Card",
        "doc": "<p>Makes the given card active.</p>\n\n<pre><code>var card1 = Ext.create('Ext.panel.Panel', {itemId: 'card-1'});\nvar card2 = Ext.create('Ext.panel.Panel', {itemId: 'card-2'});\nvar panel = Ext.create('Ext.panel.Panel', {\n    layout: 'card',\n    activeItem: 0,\n    items: [card1, card2]\n});\n// These are all equivalent\npanel.getLayout().setActiveItem(card2);\npanel.getLayout().setActiveItem('card-2');\npanel.getLayout().setActiveItem(1);\n</code></pre>\n",
        "linenr": 93,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>the activated component or false when nothing activated.\nFalse is returned also when trying to activate an already active card.</p>\n"
        },
        "html_filename": "Card.html"
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
    "Ext.layout.container.Fit",
    "Ext.layout.container.AbstractCard"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Card.html#Ext-layout-container-Card",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Card.js",
  "private": false,
  "alternateClassNames": [
    "Ext.layout.CardLayout"
  ],
  "name": "Ext.layout.container.Card",
  "doc": "<p>This layout manages multiple child Components, each fitted to the Container, where only a single child Component can be\nvisible at any given time.  This layout style is most commonly used for wizards, tab implementations, etc.\nThis class is intended to be extended or created via the layout:'card' <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config,\nand should generally not need to be created directly via the new keyword.</p>\n\n<p>The CardLayout's focal method is <a href=\"#/api/Ext.layout.container.Card-method-setActiveItem\" rel=\"Ext.layout.container.Card-method-setActiveItem\" class=\"docClass\">setActiveItem</a>.  Since only one panel is displayed at a time,\nthe only way to move from one Component to the next is by calling setActiveItem, passing the id or index of\nthe next panel to display.  The layout itself does not provide a user interface for handling this navigation,\nso that functionality must be provided by the developer.</p>\n\n<p>In the following example, a simplistic wizard setup is demonstrated.  A button bar is added\nto the footer of the containing panel to provide navigation buttons.  The buttons will be handled by a\ncommon navigation routine.  Note that other uses of a CardLayout (like a tab control) would require a\ncompletely different implementation.  For serious implementations, a better approach would be to extend\nCardLayout to provide the custom functionality needed.</p>\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Card/Ext.layout.container.Card.png\" alt=\"Ext.layout.container.Card container layout\"></p></p>\n\n<p>Example usage:</p>\n\n<pre><code>var navigate = function(panel, direction){\n    // This routine could contain business logic required to manage the navigation steps.\n    // It would call setActiveItem as needed, manage navigation button state, handle any\n    // branching logic that might be required, handle alternate actions like cancellation\n    // or finalization, etc.  A complete wizard implementation could get pretty\n    // sophisticated depending on the complexity required, and should probably be\n    // done as a subclass of CardLayout in a real-world implementation.\n    var layout = panel.getLayout();\n    layout[direction]();\n    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());\n    Ext.getCmp('move-next').setDisabled(!layout.getNext());\n};\n\nExt.create('Ext.panel.Panel', {\n    title: 'Example Wizard',\n    width: 300,\n    height: 200,\n    layout: 'card',\n    activeItem: 0, // make sure the active item is set on the container config!\n    bodyStyle: 'padding:15px',\n    defaults: {\n        // applied to each contained panel\n        border: false\n    },\n    // just an example of one possible navigation scheme, using buttons\n    bbar: [\n        {\n            id: 'move-prev',\n            text: 'Back',\n            handler: function(btn) {\n                navigate(btn.up(\"panel\"), \"prev\");\n            },\n            disabled: true\n        },\n        '-&gt;', // greedy spacer so that the buttons are aligned to each side\n        {\n            id: 'move-next',\n            text: 'Next',\n            handler: function(btn) {\n                navigate(btn.up(\"panel\"), \"next\");\n            }\n        }\n    ],\n    // the panels (or \"cards\") within the layout\n    items: [{\n        id: 'card-0',\n        html: '&lt;h1&gt;Welcome to the Wizard!&lt;/h1&gt;&lt;p&gt;Step 1 of 3&lt;/p&gt;'\n    },{\n        id: 'card-1',\n        html: '&lt;p&gt;Step 2 of 3&lt;/p&gt;'\n    },{\n        id: 'card-2',\n        html: '&lt;h1&gt;Congratulations!&lt;/h1&gt;&lt;p&gt;Step 3 of 3 - Complete&lt;/p&gt;'\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Card.html",
  "extends": "Ext.layout.container.AbstractCard"
});