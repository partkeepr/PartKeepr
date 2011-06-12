Ext.data.JsonP.Ext_layout_container_Border({
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
        "href": "Border.html#Ext-layout-container-Border-method-getPlaceholder",
        "shortDoc": "Return the placeholder Component to which the passed child Panel of the layout will collapse. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Border.js",
        "private": false,
        "params": [
          {
            "type": "Panel",
            "optional": false,
            "doc": "<p>The child Panel of the layout for which to return the <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a>.</p>\n",
            "name": "panel"
          }
        ],
        "name": "getPlaceholder",
        "owner": "Ext.layout.container.Border",
        "doc": "<p>Return the <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a> Component to which the passed child Panel of the layout will collapse.\nBy default, this will be a <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">Header</a> component (Docked to the appropriate border). See <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a>.\nconfig to customize this.</p>\n\n\n<p><b>Note that this will be a fully instantiated Component, but will only be <i>rendered</i> when the Panel is first collapsed.</b></p>\n\n",
        "linenr": 505,
        "return": {
          "type": "Component",
          "doc": "<p>The Panel's <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a> unless the <a href=\"#/api/Ext.panel.Panel-cfg-collapseMode\" rel=\"Ext.panel.Panel-cfg-collapseMode\" class=\"docClass\">collapseMode</a> is\n<code>'header'</code>, in which case <i>undefined</i> is returned.</p>\n"
        },
        "html_filename": "Border.html"
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
    "Ext.layout.container.Container"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Border.html#Ext-layout-container-Border",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Border.js",
  "private": false,
  "alternateClassNames": [
    "Ext.layout.BorderLayout"
  ],
  "name": "Ext.layout.container.Border",
  "doc": "<p>This is a multi-pane, application-oriented UI layout style that supports multiple\nnested panels, automatic bars between regions and built-in\n<a href=\"#/api/Ext.panel.Panel-cfg-collapsible\" rel=\"Ext.panel.Panel-cfg-collapsible\" class=\"docClass\">expanding and collapsing</a> of regions.</p>\n\n\n<p>This class is intended to be extended or created via the <code>layout:'border'</code>\n<a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config, and should generally not need to be created directly\nvia the new keyword.</p>\n\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Border/Ext.layout.container.Border.png\" alt=\"Ext.layout.container.Border container layout\"></p></p>\n\n<p>Example usage:</p>\n\n\n<pre><code>     Ext.create('Ext.panel.Panel', {\n        width: 500,\n        height: 400,\n        title: 'Border Layout',\n        layout: 'border',\n        items: [{\n            title: 'South Region is resizable',\n            region: 'south',     // position for region\n            xtype: 'panel',\n            height: 100,\n            split: true,         // enable resizing\n            margins: '0 5 5 5'\n        },{\n            // xtype: 'panel' implied by default\n            title: 'West Region is collapsible',\n            region:'west',\n            xtype: 'panel',\n            margins: '5 0 0 5',\n            width: 200,\n            collapsible: true,   // make collapsible\n            id: 'west-region-container',\n            layout: 'fit'\n        },{\n            title: 'Center Region',\n            region: 'center',     // center region is required, no width/height specified\n            xtype: 'panel',\n            layout: 'fit',\n            margins: '5 5 0 0'\n        }],\n        renderTo: Ext.getBody()\n    });\n</code></pre>\n\n\n<p><b><u>Notes</u></b>:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>Any Container using the Border layout <b>must</b> have a child item with <code>region:'center'</code>.\nThe child item in the center region will always be resized to fill the remaining space not used by\nthe other regions in the layout.</li>\n<li>Any child items with a region of <code>west</code> or <code>east</code> may be configured with either\nan initial <code>width</code>, or a <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">Ext.layout.container.Box.flex</a> value, or an initial percentage width <b>string</b> (Which is simply divided by 100 and used as a flex value). The 'center' region has a flex value of <code>1</code>.</li>\n<li>Any child items with a region of <code>north</code> or <code>south</code> may be configured with either\nan initial <code>height</code>, or a <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">Ext.layout.container.Box.flex</a> value, or an initial percentage height <b>string</b> (Which is simply divided by 100 and used as a flex value). The 'center' region has a flex value of <code>1</code>.</li>\n<li>The regions of a BorderLayout are <b>fixed at render time</b> and thereafter, its child Components may not be removed or added</b>.To add/remove\nComponents within a BorderLayout, have them wrapped by an additional Container which is directly\nmanaged by the BorderLayout.  If the region is to be collapsible, the Container used directly\nby the BorderLayout manager should be a Panel.  In the following example a Container (an Ext.panel.Panel)\nis added to the west region:\n<pre><code>wrc = <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>('west-region-container');\nwrc.<a href=\"#/api/Ext.container.Container-method-removeAll\" rel=\"Ext.container.Container-method-removeAll\" class=\"docClass\">removeAll</a>();\nwrc.<a href=\"#/api/Ext.container.Container-event-add\" rel=\"Ext.container.Container-event-add\" class=\"docClass\">add</a>({\n    title: 'Added Panel',\n    html: 'Some content'\n});\n</code></pre>\n</li>\n<li><b>There is no BorderLayout.Region class in ExtJS 4.0+</b></li>\n</ul></div>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Border.html",
  "extends": "Ext.layout.container.Container"
});