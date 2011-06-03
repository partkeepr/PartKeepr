Ext.data.JsonP.Ext_layout_container_Accordion({
  "tagname": "class",
  "name": "Ext.layout.container.Accordion",
  "doc": "<p>This is a layout that manages multiple Panels in an expandable accordion style such that only\n<b>one Panel can be expanded at any given time</b>. Each Panel has built-in support for expanding and collapsing.</p>\n\n\n<p>Note: Only Ext.Panels <b>and all subclasses of Ext.panel.Panel</b> may be used in an accordion layout Container.</p>\n\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Accordion/Ext.layout.container.Accordion.png\" alt=\"Ext.layout.container.Accordion container layout\"></p></p>\n\n<p>Example usage:</p>\n\n\n<pre><code>Ext.create('Ext.panel.Panel', {\n    title: 'Accordion Layout',\n    width: 300,\n    height: 300,\n    layout:'accordion',\n    defaults: {\n        // applied to each contained panel\n        bodyStyle: 'padding:15px'\n    },\n    layoutConfig: {\n        // layout-specific configs go here\n        titleCollapse: false,\n        animate: true,\n        activeOnTop: true\n    },\n    items: [{\n        title: 'Panel 1',\n        html: 'Panel content!'\n    },{\n        title: 'Panel 2',\n        html: 'Panel content!'\n    },{\n        title: 'Panel 3',\n        html: 'Panel content!'\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n\n",
  "extends": "Ext.layout.container.VBox",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.layout.AccordionLayout"
  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "activeOnTop",
      "member": "Ext.layout.container.Accordion",
      "type": "Boolean",
      "doc": "<p><b>Not implemented in PR4.</b></p>\n\n\n<p>Only valid when {@link #multi\" is <code>false</code>.</p>\n\n\n<p>True to swap the position of each panel as it is expanded so that it becomes the first item in the container,\nfalse to keep the panels in the rendered order. <b>This is NOT compatible with \"animate:true\"</b> (defaults to false).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
      "linenr": 85,
      "html_filename": "Accordion.html",
      "href": "Accordion.html#Ext-layout-container-Accordion-cfg-activeOnTop",
      "shortDoc": "Not implemented in PR4.\n\n\nOnly valid when {@link #multi\" is false.\n\n\nTrue to swap the position of each panel as it is..."
    },
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
      "member": "Ext.layout.container.Accordion",
      "type": "Boolean",
      "doc": "<p>True to slide the contained panels open and closed during expand/collapse using animation, false to open and\nclose directly with no animation (defaults to <code>true</code>). Note: The layout performs animated collapsing\nand expanding, <i>not</i> the child Panels.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
      "linenr": 78,
      "html_filename": "Accordion.html",
      "href": "Accordion.html#Ext-layout-container-Accordion-cfg-animate",
      "shortDoc": "True to slide the contained panels open and closed during expand/collapse using animation, false to open and\nclose di..."
    },
    {
      "tagname": "cfg",
      "name": "autoWidth",
      "member": "Ext.layout.container.Accordion",
      "type": "Boolean",
      "doc": "<p><b>This config is ignored in ExtJS 4.x.</b></p>\n\n\n<p>Child Panels have their width actively managed to fit within the accordion's width.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
      "linenr": 52,
      "html_filename": "Accordion.html",
      "href": "Accordion.html#Ext-layout-container-Accordion-cfg-autoWidth",
      "shortDoc": "This config is ignored in ExtJS 4.x.\n\n\nChild Panels have their width actively managed to fit within the accordion's w..."
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
      "name": "collapseFirst",
      "member": "Ext.layout.container.Accordion",
      "type": "Boolean",
      "doc": "<p>True to make sure the collapse/expand toggle button always renders first (to the left of) any other tools\nin the contained Panels' title bars, false to render it last (defaults to false).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
      "linenr": 72,
      "html_filename": "Accordion.html",
      "href": "Accordion.html#Ext-layout-container-Accordion-cfg-collapseFirst",
      "shortDoc": "True to make sure the collapse/expand toggle button always renders first (to the left of) any other tools\nin the cont..."
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
      "name": "fill",
      "member": "Ext.layout.container.Accordion",
      "type": "Boolean",
      "doc": "<p>True to adjust the active item's height to fill the available space in the container, false to use the\nitem's current height, or auto height if not explicitly set (defaults to true).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
      "linenr": 46,
      "html_filename": "Accordion.html",
      "href": "Accordion.html#Ext-layout-container-Accordion-cfg-fill",
      "shortDoc": "True to adjust the active item's height to fill the available space in the container, false to use the\nitem's current..."
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
      "name": "hideCollapseTool",
      "member": "Ext.layout.container.Accordion",
      "type": "Boolean",
      "doc": "<p>True to hide the contained Panels' collapse/expand toggle buttons, false to display them (defaults to false).\nWhen set to true, <a href=\"#/api/Ext.layout.container.Accordion-cfg-titleCollapse\" rel=\"Ext.layout.container.Accordion-cfg-titleCollapse\" class=\"docClass\">titleCollapse</a> is automatically set to <code>true</code>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
      "linenr": 66,
      "html_filename": "Accordion.html",
      "href": "Accordion.html#Ext-layout-container-Accordion-cfg-hideCollapseTool",
      "shortDoc": "True to hide the contained Panels' collapse/expand toggle buttons, false to display them (defaults to false).\nWhen se..."
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
      "name": "multi",
      "member": "Ext.layout.container.Accordion",
      "type": "Boolean",
      "doc": "<p>Defaults to <code>false</code>. Set to <code>true</code> to enable multiple accordion items to be open at once.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
      "linenr": 93,
      "html_filename": "Accordion.html",
      "href": "Accordion.html#Ext-layout-container-Accordion-cfg-multi"
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
    },
    {
      "tagname": "cfg",
      "name": "titleCollapse",
      "member": "Ext.layout.container.Accordion",
      "type": "Boolean",
      "doc": "<p><b>Not implemented in PR2.</b></p>\n\n\n<p>True to allow expand/collapse of each contained panel by clicking anywhere on the title bar, false to allow\nexpand/collapse only when the toggle tool button is clicked (defaults to true).  When set to false,\n<a href=\"#/api/Ext.layout.container.Accordion-cfg-hideCollapseTool\" rel=\"Ext.layout.container.Accordion-cfg-hideCollapseTool\" class=\"docClass\">hideCollapseTool</a> should be false also.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
      "linenr": 58,
      "html_filename": "Accordion.html",
      "href": "Accordion.html#Ext-layout-container-Accordion-cfg-titleCollapse",
      "shortDoc": "Not implemented in PR2.\n\n\nTrue to allow expand/collapse of each contained panel by clicking anywhere on the title bar..."
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
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/container/Accordion.js",
  "linenr": 1,
  "html_filename": "Accordion.html",
  "href": "Accordion.html#Ext-layout-container-Accordion",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container",
    "Ext.layout.container.Box",
    "Ext.layout.container.VBox"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});