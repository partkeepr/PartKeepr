Ext.data.JsonP.Ext_layout_container_Absolute({
  "tagname": "class",
  "name": "Ext.layout.container.Absolute",
  "doc": "<p>This is a layout that inherits the anchoring of <b><a href=\"#/api/Ext.layout.container.Anchor\" rel=\"Ext.layout.container.Anchor\" class=\"docClass\">Ext.layout.container.Anchor</a></b> and adds the\nability for x/y positioning using the standard x and y component config options.</p>\n\n\n<p>This class is intended to be extended or created via the <tt><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></tt>\nconfiguration property.  See <tt><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a></b></tt> for additional details.</p>\n\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Absolute/Ext.layout.container.Absolute.png\" alt=\"Ext.layout.container.Absolute container layout\"></p></p>\n\n<p>Example usage:</p>\n\n\n<pre><code>Ext.create('Ext.form.Panel', {\n    title: 'Absolute Layout',\n    width: 300,\n    height: 275,\n    layout:'absolute',\n    layoutConfig: {\n        // layout-specific configs go here\n        //itemCls: 'x-abs-layout-item',\n    },\n    url:'save-form.php',\n    defaultType: 'textfield',\n    items: [{\n        x: 10,\n        y: 10,\n        xtype:'label',\n        text: 'Send To:'\n    },{\n        x: 80,\n        y: 10,\n        name: 'to',\n        anchor:'90%'  // anchor width by percentage\n    },{\n        x: 10,\n        y: 40,\n        xtype:'label',\n        text: 'Subject:'\n    },{\n        x: 80,\n        y: 40,\n        name: 'subject',\n        anchor: '90%'  // anchor width by percentage\n    },{\n        x:0,\n        y: 80,\n        xtype: 'textareafield',\n        name: 'msg',\n        anchor: '100% 100%'  // anchor width and height\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n\n",
  "extends": "Ext.layout.container.Anchor",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.layout.AbsoluteLayout"
  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "anchor",
      "member": "Ext.layout.container.Anchor",
      "type": "String",
      "doc": "<p>This configuation option is to be applied to <b>child <tt>items</tt></b> of a container managed by\nthis layout (ie. configured with <tt>layout:'anchor'</tt>).</p>\n\n\n<br/>\n\n\n\n\n<p>This value is what tells the layout how an item should be anchored to the container. <tt>items</tt>\nadded to an AnchorLayout accept an anchoring-specific config property of <b>anchor</b> which is a string\ncontaining two values: the horizontal anchor value and the vertical anchor value (for example, '100% 50%').\nThe following types of anchor values are supported:<div class=\"mdetail-params\"><ul>\n\n<li><b>Percentage</b> : Any value between 1 and 100, expressed as a percentage.<div class=\"sub-desc\">\nThe first anchor is the percentage width that the item should take up within the container, and the\nsecond is the percentage height.  For example:\n<pre><code>// two values specified\nanchor: '100% 50%' // render item complete width of the container and\n                   // 1/2 height of the container\n// one value specified\nanchor: '100%'     // the width value; the height will default to auto\n</code></pre></div></li>\n\n<li><b>Offsets</b> : Any positive or negative integer value.<div class=\"sub-desc\">\nThis is a raw adjustment where the first anchor is the offset from the right edge of the container,\nand the second is the offset from the bottom edge. For example:\n<pre><code>// two values specified\nanchor: '-50 -100' // render item the complete width of the container\n                   // minus 50 pixels and\n                   // the complete height minus 100 pixels.\n// one value specified\nanchor: '-50'      // anchor value is assumed to be the right offset value\n                   // bottom offset will default to 0\n</code></pre></div></li>\n\n<li><b>Sides</b> : Valid values are <tt>'right'</tt> (or <tt>'r'</tt>) and <tt>'bottom'</tt>\n(or <tt>'b'</tt>).<div class=\"sub-desc\">\nEither the container must have a fixed size or an anchorSize config value defined at render time in\norder for these to have any effect.</div></li>\n\n<li><b>Mixed</b> : <div class=\"sub-desc\">\nAnchor values can also be mixed as needed.  For example, to render the width offset from the container\nright edge by 50 pixels and 75% of the container's height use:\n<pre><code>anchor: '-50 75%'\n</code></pre></div></li>\n\n\n</ul></div>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Anchor.js",
      "linenr": 54,
      "html_filename": "Anchor.html",
      "href": "Anchor.html#Ext-layout-container-Anchor-cfg-anchor",
      "shortDoc": "This configuation option is to be applied to child items of a container managed by\nthis layout (ie. configured with l..."
    },
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
      "name": "defaultAnchor",
      "member": "Ext.layout.container.Anchor",
      "type": "String",
      "doc": "<p>default anchor for all child container items applied if no anchor or specific width is set on the child item.  Defaults to '100%'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Anchor.js",
      "linenr": 104,
      "html_filename": "Anchor.html",
      "href": "Anchor.html#Ext-layout-container-Anchor-cfg-defaultAnchor",
      "shortDoc": "default anchor for all child container items applied if no anchor or specific width is set on the child item.  Defaul..."
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
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Absolute.js",
  "linenr": 1,
  "html_filename": "Absolute.html",
  "href": "Absolute.html#Ext-layout-container-Absolute",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container",
    "Ext.layout.container.Anchor"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});