Ext.data.JsonP.Ext_layout_container_Absolute({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Anchor.html#Ext-layout-container-Anchor-cfg-anchor",
        "shortDoc": "This configuation option is to be applied to child items of a container managed by\nthis layout (ie. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Anchor.js",
        "private": false,
        "name": "anchor",
        "owner": "Ext.layout.container.Anchor",
        "doc": "<p>This configuation option is to be applied to <b>child <tt>items</tt></b> of a container managed by\nthis layout (ie. configured with <tt>layout:'anchor'</tt>).</p>\n\n\n<br/>\n\n\n\n\n<p>This value is what tells the layout how an item should be anchored to the container. <tt>items</tt>\nadded to an AnchorLayout accept an anchoring-specific config property of <b>anchor</b> which is a string\ncontaining two values: the horizontal anchor value and the vertical anchor value (for example, '100% 50%').\nThe following types of anchor values are supported:<div class=\"mdetail-params\"><ul>\n\n<li><b>Percentage</b> : Any value between 1 and 100, expressed as a percentage.<div class=\"sub-desc\">\nThe first anchor is the percentage width that the item should take up within the container, and the\nsecond is the percentage height.  For example:\n<pre><code>// two values specified\nanchor: '100% 50%' // render item complete width of the container and\n                   // 1/2 height of the container\n// one value specified\nanchor: '100%'     // the width value; the height will default to auto\n</code></pre></div></li>\n\n<li><b>Offsets</b> : Any positive or negative integer value.<div class=\"sub-desc\">\nThis is a raw adjustment where the first anchor is the offset from the right edge of the container,\nand the second is the offset from the bottom edge. For example:\n<pre><code>// two values specified\nanchor: '-50 -100' // render item the complete width of the container\n                   // minus 50 pixels and\n                   // the complete height minus 100 pixels.\n// one value specified\nanchor: '-50'      // anchor value is assumed to be the right offset value\n                   // bottom offset will default to 0\n</code></pre></div></li>\n\n<li><b>Sides</b> : Valid values are <tt>'right'</tt> (or <tt>'r'</tt>) and <tt>'bottom'</tt>\n(or <tt>'b'</tt>).<div class=\"sub-desc\">\nEither the container must have a fixed size or an anchorSize config value defined at render time in\norder for these to have any effect.</div></li>\n\n<li><b>Mixed</b> : <div class=\"sub-desc\">\nAnchor values can also be mixed as needed.  For example, to render the width offset from the container\nright edge by 50 pixels and 75% of the container's height use:\n<pre><code>anchor: '-50 75%'\n</code></pre></div></li>\n\n\n</ul></div>\n\n",
        "linenr": 54,
        "html_filename": "Anchor.html"
      },
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
        "href": "Anchor.html#Ext-layout-container-Anchor-cfg-defaultAnchor",
        "shortDoc": "Default anchor for all child container items applied if no anchor or specific width is set on the child item. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Anchor.js",
        "private": false,
        "name": "defaultAnchor",
        "owner": "Ext.layout.container.Anchor",
        "doc": "<p>Default anchor for all child <b>container</b> items applied if no anchor or specific width is set on the child item.  Defaults to '100%'.</p>\n",
        "linenr": 104,
        "html_filename": "Anchor.html"
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
    "Ext.layout.container.Container",
    "Ext.layout.container.Anchor"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Absolute.html#Ext-layout-container-Absolute",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Absolute.js",
  "private": false,
  "alternateClassNames": [
    "Ext.layout.AbsoluteLayout"
  ],
  "name": "Ext.layout.container.Absolute",
  "doc": "<p>This is a layout that inherits the anchoring of <b><a href=\"#/api/Ext.layout.container.Anchor\" rel=\"Ext.layout.container.Anchor\" class=\"docClass\">Ext.layout.container.Anchor</a></b> and adds the\nability for x/y positioning using the standard x and y component config options.</p>\n\n\n<p>This class is intended to be extended or created via the <tt><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></tt>\nconfiguration property.  See <tt><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a></b></tt> for additional details.</p>\n\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Absolute/Ext.layout.container.Absolute.png\" alt=\"Ext.layout.container.Absolute container layout\"></p></p>\n\n<p>Example usage:</p>\n\n\n<pre><code>Ext.create('Ext.form.Panel', {\n    title: 'Absolute Layout',\n    width: 300,\n    height: 275,\n    layout:'absolute',\n    layoutConfig: {\n        // layout-specific configs go here\n        //itemCls: 'x-abs-layout-item',\n    },\n    url:'save-form.php',\n    defaultType: 'textfield',\n    items: [{\n        x: 10,\n        y: 10,\n        xtype:'label',\n        text: 'Send To:'\n    },{\n        x: 80,\n        y: 10,\n        name: 'to',\n        anchor:'90%'  // anchor width by percentage\n    },{\n        x: 10,\n        y: 40,\n        xtype:'label',\n        text: 'Subject:'\n    },{\n        x: 80,\n        y: 40,\n        name: 'subject',\n        anchor: '90%'  // anchor width by percentage\n    },{\n        x:0,\n        y: 80,\n        xtype: 'textareafield',\n        name: 'msg',\n        anchor: '100% 100%'  // anchor width and height\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Absolute.html",
  "extends": "Ext.layout.container.Anchor"
});