Ext.data.JsonP.Ext_layout_container_Anchor({
  "tagname": "class",
  "name": "Ext.layout.container.Anchor",
  "doc": "<p>This is a layout that enables anchoring of contained elements relative to the container's dimensions.\nIf the container is resized, all anchored items are automatically rerendered according to their\n<b><tt><a href=\"#/api/Ext.layout.container.Anchor-cfg-anchor\" rel=\"Ext.layout.container.Anchor-cfg-anchor\" class=\"docClass\">anchor</a></tt></b> rules.</p>\n\n<p>This class is intended to be extended or created via the layout: 'anchor' <a href=\"#/api/Ext.layout.container.AbstractContainer--layout\" rel=\"Ext.layout.container.AbstractContainer--layout\" class=\"docClass\">Ext.layout.container.AbstractContainer.layout</a>\nconfig, and should generally not need to be created directly via the new keyword.</p></p>\n\n<p>AnchorLayout does not have any direct config options (other than inherited ones). By default,\nAnchorLayout will calculate anchor measurements based on the size of the container itself. However, the\ncontainer using the AnchorLayout can supply an anchoring-specific config property of <b>anchorSize</b>.\nIf anchorSize is specifed, the layout will use it as a virtual container for the purposes of calculating\nanchor measurements based on it instead, allowing the container to be sized independently of the anchoring\nlogic if necessary.</p>\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Anchor/Ext.layout.container.Anchor.png\" alt=\"Ext.layout.container.Anchor container layout\"></p></p>\n\n<p>For example:</p>\n\n<pre><code>Ext.create('Ext.Panel', {\n    width: 500,\n    height: 400,\n    title: \"AnchorLayout Panel\",\n    layout: 'anchor',\n    renderTo: Ext.getBody(),\n    items: [{\n        xtype: 'panel',\n        title: '75% Width and 20% Height',\n        anchor: '75% 20%'\n    },{\n        xtype: 'panel',\n        title: 'Offset -300 Width &amp; -200 Height',\n        anchor: '-300 -200'     \n    },{\n        xtype: 'panel',\n        title: 'Mixed Offset and Percent',\n        anchor: '-250 20%'\n    }]\n});\n</code></pre>\n",
  "extends": "Ext.layout.container.Container",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.layout.AnchorLayout"
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
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Anchor.js",
  "linenr": 1,
  "html_filename": "Anchor.html",
  "href": "Anchor.html#Ext-layout-container-Anchor",
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
    "Ext.layout.container.Absolute"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});