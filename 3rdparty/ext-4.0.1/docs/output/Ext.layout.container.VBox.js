Ext.data.JsonP.Ext_layout_container_VBox({
  "tagname": "class",
  "name": "Ext.layout.container.VBox",
  "doc": "<p>A layout that arranges items vertically down a Container. This layout optionally divides available vertical\nspace between child items containing a numeric <code>flex</code> configuration.</p>\n\n\n<p>This layout may also be used to set the widths of child items by configuring it with the <a href=\"#/api/Ext.layout.container.VBox-cfg-align\" rel=\"Ext.layout.container.VBox-cfg-align\" class=\"docClass\">align</a> option.\n<p><img src=\"doc-resources/Ext.layout.container.VBox/Ext.layout.container.VBox.png\" alt=\"Ext.layout.container.VBox container layout\"></p>\nExample usage:</p>\n\n<pre><code>Ext.create('Ext.Panel', {\n    width: 500,\n    height: 400,\n    title: \"VBoxLayout Panel\",\n    layout: {                        \n        type: 'vbox',\n        align: 'center'\n    },\n    renderTo: document.body,\n    items: [{                        \n        xtype: 'panel',\n        title: 'Inner Panel One',\n        width: 250,\n        flex: 2                      \n    },{\n        xtype: 'panel',\n        title: 'Inner Panel Two',\n        width: 250,         \n        flex: 4\n    },{\n        xtype: 'panel',\n        title: 'Inner Panel Three',\n        width: '50%',           \n        flex: 4\n    }]\n});\n</code></pre>\n",
  "extends": "Ext.layout.container.Box",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.layout.VBoxLayout"
  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "align",
      "member": "Ext.layout.container.VBox",
      "type": "String",
      "doc": "<p>Controls how the child items of the container are aligned. Acceptable configuration values for this\nproperty are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>left</tt></b> : <b>Default</b><div class=\"sub-desc\">child items are aligned horizontally\nat the <b>left</b> side of the container</div></li>\n<li><b><tt>center</tt></b> : <div class=\"sub-desc\">child items are aligned horizontally at the\n<b>mid-width</b> of the container</div></li>\n<li><b><tt>stretch</tt></b> : <div class=\"sub-desc\">child items are stretched horizontally to fill\nthe width of the container</div></li>\n<li><b><tt>stretchmax</tt></b> : <div class=\"sub-desc\">child items are stretched horizontally to\nthe size of the largest item.</div></li>\n</ul></div>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/VBox.js",
      "linenr": 46,
      "html_filename": "VBox.html",
      "href": "VBox.html#Ext-layout-container-VBox-cfg-align",
      "shortDoc": "Controls how the child items of the container are aligned. Acceptable configuration values for this\nproperty are:\n\n\nl..."
    },
    {
      "tagname": "cfg",
      "name": "animate",
      "member": "Ext.layout.container.Box",
      "type": "Mixed",
      "doc": "<p>If truthy, child Component are <i>animated</i> into position whenever the Container\nis layed out. If this option is numeric, it is used as the animation duration in milliseconds.</p>\n\n\n<p>May be set as a property at any time.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
      "linenr": 25,
      "html_filename": "Box.html",
      "href": "Box.html#Ext-layout-container-Box-cfg-animate",
      "shortDoc": "If truthy, child Component are animated into position whenever the Container\nis layed out. If this option is numeric,..."
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
      "name": "clearInnerCtOnLayout",
      "member": "Ext.layout.container.Box",
      "type": "Boolean",
      "doc": "\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
      "linenr": 128,
      "html_filename": "Box.html",
      "href": "Box.html#Ext-layout-container-Box-cfg-clearInnerCtOnLayout"
    },
    {
      "tagname": "cfg",
      "name": "defaultMargins",
      "member": "Ext.layout.container.Box",
      "type": "Object",
      "doc": "<p>If the individual contained items do not have a <tt>margins</tt>\nproperty specified or margin specified via CSS, the default margins from this property will be\napplied to each item.</p>\n\n\n<br><p>This property may be specified as an object containing margins\n\n\n<p>to apply in the format:</p></p>\n\n<pre><code>{\n    top: (top margin),\n    right: (right margin),\n    bottom: (bottom margin),\n    left: (left margin)\n}</code></pre>\n\n\n<p>This property may also be specified as a string containing\nspace-separated, numeric margin values. The order of the sides associated\nwith each value matches the way CSS processes margin values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to:</p>\n\n\n<pre><code>{top:0, right:0, bottom:0, left:0}\n</code></pre>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
      "linenr": 32,
      "html_filename": "Box.html",
      "href": "Box.html#Ext-layout-container-Box-cfg-defaultMargins",
      "shortDoc": "If the individual contained items do not have a margins\nproperty specified or margin specified via CSS, the default m..."
    },
    {
      "tagname": "cfg",
      "name": "flex",
      "member": "Ext.layout.container.Box",
      "type": "Number",
      "doc": "<p>This configuration option is to be applied to <b>child <tt>items</tt></b> of the container managed\nby this layout. Each child item with a <tt>flex</tt> property will be flexed <b>horizontally</b>\naccording to each item's <b>relative</b> <tt>flex</tt> value compared to the sum of all items with\na <tt>flex</tt> value specified.  Any child items that have either a <tt>flex = 0</tt> or\n<tt>flex = undefined</tt> will not be 'flexed' (the initial size will not be changed).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
      "linenr": 102,
      "html_filename": "Box.html",
      "href": "Box.html#Ext-layout-container-Box-cfg-flex",
      "shortDoc": "This configuration option is to be applied to child items of the container managed\nby this layout. Each child item wi..."
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
    },
    {
      "tagname": "cfg",
      "name": "pack",
      "member": "Ext.layout.container.Box",
      "type": "String",
      "doc": "<p>Controls how the child items of the container are packed together. Acceptable configuration values\nfor this property are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>start</tt></b> : <b>Default</b><div class=\"sub-desc\">child items are packed together at\n<b>left</b> side of container</div></li>\n<li><b><tt>center</tt></b> : <div class=\"sub-desc\">child items are packed together at\n<b>mid-width</b> of container</div></li>\n<li><b><tt>end</tt></b> : <div class=\"sub-desc\">child items are packed together at <b>right</b>\nside of container</div></li>\n</ul></div>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
      "linenr": 89,
      "html_filename": "Box.html",
      "href": "Box.html#Ext-layout-container-Box-cfg-pack",
      "shortDoc": "Controls how the child items of the container are packed together. Acceptable configuration values\nfor this property ..."
    },
    {
      "tagname": "cfg",
      "name": "padding",
      "member": "Ext.layout.container.Box",
      "type": "String",
      "doc": "<p>Sets the padding to be applied to all child items managed by this layout.</p>\n\n\n<p>This property must be specified as a string containing\nspace-separated, numeric padding values. The order of the sides associated\nwith each value matches the way CSS processes padding values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to: <code>\"0\"</code></p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
      "linenr": 68,
      "html_filename": "Box.html",
      "href": "Box.html#Ext-layout-container-Box-cfg-padding",
      "shortDoc": "Sets the padding to be applied to all child items managed by this layout.\n\n\nThis property must be specified as a stri..."
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
    },
    {
      "tagname": "method",
      "name": "updateChildBoxes",
      "member": "Ext.layout.container.Box",
      "doc": "<p>Resizes and repositions each child component</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "boxes",
          "doc": "<p>The box measurements</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Box.js",
      "linenr": 580,
      "html_filename": "Box.html",
      "href": "Box.html#Ext-layout-container-Box-method-updateChildBoxes",
      "shortDoc": "<p>Resizes and repositions each child component</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/VBox.js",
  "linenr": 1,
  "html_filename": "VBox.html",
  "href": "VBox.html#Ext-layout-container-VBox",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container",
    "Ext.layout.container.Box"
  ],
  "subclasses": [
    "Ext.layout.container.Accordion"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});