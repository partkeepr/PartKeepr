Ext.data.JsonP.Ext_layout_container_Accordion({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container",
    "Ext.layout.container.Box",
    "Ext.layout.container.VBox"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Accordion.html#Ext-layout-container-Accordion",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-activeOnTop",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Accordion.js",
        "private": false,
        "shortDoc": "Not implemented in PR4. ...",
        "static": false,
        "name": "activeOnTop",
        "owner": "Ext.layout.container.Accordion",
        "doc": "<p><b>Not implemented in PR4.</b></p>\n\n\n<p>Only valid when {@link #multi\" is <code>false</code>.</p>\n\n\n<p>True to swap the position of each panel as it is expanded so that it becomes the first item in the container,\nfalse to keep the panels in the rendered order. <b>This is NOT compatible with \"animate:true\"</b> (defaults to false).</p>\n",
        "linenr": 85,
        "html_filename": "Accordion.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "VBox.html#Ext-layout-container-VBox-cfg-align",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/VBox.js",
        "private": false,
        "shortDoc": "Controls how the child items of the container are aligned. ...",
        "static": false,
        "name": "align",
        "owner": "Ext.layout.container.VBox",
        "doc": "<p>Controls how the child items of the container are aligned. Acceptable configuration values for this\nproperty are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>left</tt></b> : <b>Default</b><div class=\"sub-desc\">child items are aligned horizontally\nat the <b>left</b> side of the container</div></li>\n<li><b><tt>center</tt></b> : <div class=\"sub-desc\">child items are aligned horizontally at the\n<b>mid-width</b> of the container</div></li>\n<li><b><tt>stretch</tt></b> : <div class=\"sub-desc\">child items are stretched horizontally to fill\nthe width of the container</div></li>\n<li><b><tt>stretchmax</tt></b> : <div class=\"sub-desc\">child items are stretched horizontally to\nthe size of the largest item.</div></li>\n</ul></div>\n\n",
        "linenr": 46,
        "html_filename": "VBox.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-animate",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Accordion.js",
        "private": false,
        "shortDoc": "True to slide the contained panels open and closed during expand/collapse using animation, false to open and\nclose di...",
        "static": false,
        "name": "animate",
        "owner": "Ext.layout.container.Accordion",
        "doc": "<p>True to slide the contained panels open and closed during expand/collapse using animation, false to open and\nclose directly with no animation (defaults to <code>true</code>). Note: The layout performs animated collapsing\nand expanding, <i>not</i> the child Panels.</p>\n",
        "linenr": 78,
        "html_filename": "Accordion.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-autoWidth",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Accordion.js",
        "private": false,
        "shortDoc": "This config is ignored in ExtJS 4.x. ...",
        "static": false,
        "name": "autoWidth",
        "owner": "Ext.layout.container.Accordion",
        "doc": "<p><b>This config is ignored in ExtJS 4.x.</b></p>\n\n\n<p>Child Panels have their width actively managed to fit within the accordion's width.</p>\n",
        "linenr": 52,
        "html_filename": "Accordion.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtComponent",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "static": false,
        "name": "bindToOwnerCtComponent",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Flag to notify the ownerCt Component on afterLayout of a change</p>\n",
        "linenr": 17,
        "html_filename": "AbstractContainer.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtContainer",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "static": false,
        "name": "bindToOwnerCtContainer",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Flag to notify the ownerCt Container on afterLayout of a change</p>\n",
        "linenr": 23,
        "html_filename": "AbstractContainer.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Box.html#Ext-layout-container-Box-cfg-clearInnerCtOnLayout",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "static": false,
        "name": "clearInnerCtOnLayout",
        "owner": "Ext.layout.container.Box",
        "doc": "\n",
        "linenr": 126,
        "html_filename": "Box.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-collapseFirst",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Accordion.js",
        "private": false,
        "shortDoc": "True to make sure the collapse/expand toggle button always renders first (to the left of) any other tools\nin the cont...",
        "static": false,
        "name": "collapseFirst",
        "owner": "Ext.layout.container.Accordion",
        "doc": "<p>True to make sure the collapse/expand toggle button always renders first (to the left of) any other tools\nin the contained Panels' title bars, false to render it last (defaults to false).</p>\n",
        "linenr": 72,
        "html_filename": "Accordion.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Box.html#Ext-layout-container-Box-cfg-defaultMargins",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "shortDoc": "If the individual contained items do not have a margins\nproperty specified or margin specified via CSS, the default m...",
        "static": false,
        "name": "defaultMargins",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>If the individual contained items do not have a <tt>margins</tt>\nproperty specified or margin specified via CSS, the default margins from this property will be\napplied to each item.</p>\n\n\n<br><p>This property may be specified as an object containing margins\n\n\n<p>to apply in the format:</p></p>\n\n<pre><code>{\n    top: (top margin),\n    right: (right margin),\n    bottom: (bottom margin),\n    left: (left margin)\n}</code></pre>\n\n\n<p>This property may also be specified as a string containing\nspace-separated, numeric margin values. The order of the sides associated\nwith each value matches the way CSS processes margin values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to:</p>\n\n\n<pre><code>{top:0, right:0, bottom:0, left:0}\n</code></pre>\n\n",
        "linenr": 32,
        "html_filename": "Box.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-fill",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Accordion.js",
        "private": false,
        "shortDoc": "True to adjust the active item's height to fill the available space in the container, false to use the\nitem's current...",
        "static": false,
        "name": "fill",
        "owner": "Ext.layout.container.Accordion",
        "doc": "<p>True to adjust the active item's height to fill the available space in the container, false to use the\nitem's current height, or auto height if not explicitly set (defaults to true).</p>\n",
        "linenr": 46,
        "html_filename": "Accordion.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Box.html#Ext-layout-container-Box-cfg-flex",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "shortDoc": "This configuration option is to be applied to child items of the container managed\nby this layout. ...",
        "static": false,
        "name": "flex",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>This configuration option is to be applied to <b>child <tt>items</tt></b> of the container managed\nby this layout. Each child item with a <tt>flex</tt> property will be flexed <b>horizontally</b>\naccording to each item's <b>relative</b> <tt>flex</tt> value compared to the sum of all items with\na <tt>flex</tt> value specified.  Any child items that have either a <tt>flex = 0</tt> or\n<tt>flex = undefined</tt> will not be 'flexed' (the initial size will not be changed).</p>\n",
        "linenr": 102,
        "html_filename": "Box.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-hideCollapseTool",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Accordion.js",
        "private": false,
        "shortDoc": "True to hide the contained Panels' collapse/expand toggle buttons, false to display them (defaults to false). ...",
        "static": false,
        "name": "hideCollapseTool",
        "owner": "Ext.layout.container.Accordion",
        "doc": "<p>True to hide the contained Panels' collapse/expand toggle buttons, false to display them (defaults to false).\nWhen set to true, <a href=\"#/api/Ext.layout.container.Accordion-cfg-titleCollapse\" rel=\"Ext.layout.container.Accordion-cfg-titleCollapse\" class=\"docClass\">titleCollapse</a> is automatically set to <code>true</code>.</p>\n",
        "linenr": 66,
        "html_filename": "Accordion.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-itemCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "An optional extra CSS class that will be added to the container. ...",
        "static": false,
        "name": "itemCls",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.ctCls also.</p>\n\n\n<p></p></p>\n",
        "linenr": 29,
        "html_filename": "AbstractContainer.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-multi",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Accordion.js",
        "private": false,
        "shortDoc": "Defaults to false. ...",
        "static": false,
        "name": "multi",
        "owner": "Ext.layout.container.Accordion",
        "doc": "<p>Defaults to <code>false</code>. Set to <code>true</code> to enable multiple accordion items to be open at once.</p>\n",
        "linenr": 93,
        "html_filename": "Accordion.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Box.html#Ext-layout-container-Box-cfg-pack",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "shortDoc": "Controls how the child items of the container are packed together. ...",
        "static": false,
        "name": "pack",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>Controls how the child items of the container are packed together. Acceptable configuration values\nfor this property are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>start</tt></b> : <b>Default</b><div class=\"sub-desc\">child items are packed together at\n<b>left</b> side of container</div></li>\n<li><b><tt>center</tt></b> : <div class=\"sub-desc\">child items are packed together at\n<b>mid-width</b> of container</div></li>\n<li><b><tt>end</tt></b> : <div class=\"sub-desc\">child items are packed together at <b>right</b>\nside of container</div></li>\n</ul></div>\n\n",
        "linenr": 89,
        "html_filename": "Box.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Box.html#Ext-layout-container-Box-cfg-padding",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "shortDoc": "Sets the padding to be applied to all child items managed by this layout. ...",
        "static": false,
        "name": "padding",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>Sets the padding to be applied to all child items managed by this layout.</p>\n\n\n<p>This property must be specified as a string containing\nspace-separated, numeric padding values. The order of the sides associated\nwith each value matches the way CSS processes padding values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to: <code>\"0\"</code></p>\n\n",
        "linenr": 68,
        "html_filename": "Box.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Accordion.html#Ext-layout-container-Accordion-cfg-titleCollapse",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Accordion.js",
        "private": false,
        "shortDoc": "Not implemented in PR2. ...",
        "static": false,
        "name": "titleCollapse",
        "owner": "Ext.layout.container.Accordion",
        "doc": "<p><b>Not implemented in PR2.</b></p>\n\n\n<p>True to allow expand/collapse of each contained panel by clicking anywhere on the title bar, false to allow\nexpand/collapse only when the toggle tool button is clicked (defaults to true).  When set to false,\n<a href=\"#/api/Ext.layout.container.Accordion-cfg-hideCollapseTool\" rel=\"Ext.layout.container.Accordion-cfg-hideCollapseTool\" class=\"docClass\">hideCollapseTool</a> should be false also.</p>\n",
        "linenr": 58,
        "html_filename": "Accordion.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getLayoutItems",
        "return": {
          "type": "Array",
          "doc": "<p>of child components</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\n...",
        "static": false,
        "name": "getLayoutItems",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\nbase class), or the layout phase (onLayout).</p>\n\n",
        "linenr": 49,
        "html_filename": "AbstractContainer.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getRenderTarget",
        "return": {
          "type": "Ext.core.Element",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Returns the element into which rendering must take place. ...",
        "static": false,
        "name": "getRenderTarget",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Returns the element into which rendering must take place. Defaults to the owner Container's Ext.AbstractComponent.targetEl.</p>\n\n\n<p>May be overridden in layout managers which implement an inner element.</p>\n",
        "linenr": 68,
        "html_filename": "AbstractContainer.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Container.html#Ext-layout-container-Container-method-getRenderedItems",
        "return": {
          "type": "Array",
          "doc": "<p>All matching items</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Container.js",
        "private": false,
        "shortDoc": "Returns all items that are rendered ...",
        "static": false,
        "name": "getRenderedItems",
        "owner": "Ext.layout.container.Container",
        "doc": "<p>Returns all items that are rendered</p>\n",
        "linenr": 53,
        "html_filename": "Container.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getTarget",
        "return": {
          "type": "Ext.core.Element",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Returns the owner component's resize element. ...",
        "static": false,
        "name": "getTarget",
        "owner": "Ext.layout.container.AbstractContainer",
        "doc": "<p>Returns the owner component's resize element.</p>\n",
        "linenr": 61,
        "html_filename": "AbstractContainer.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Container.html#Ext-layout-container-Container-method-getVisibleItems",
        "return": {
          "type": "Array",
          "doc": "<p>All matching items</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Container.js",
        "private": false,
        "shortDoc": "Returns all items that are both rendered and visible ...",
        "static": false,
        "name": "getVisibleItems",
        "owner": "Ext.layout.container.Container",
        "doc": "<p>Returns all items that are both rendered and visible</p>\n",
        "linenr": 76,
        "html_filename": "Container.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The box measurements</p>\n",
            "name": "boxes"
          }
        ],
        "href": "Box.html#Ext-layout-container-Box-method-updateChildBoxes",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "shortDoc": "Resizes and repositions each child component ...",
        "static": false,
        "name": "updateChildBoxes",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>Resizes and repositions each child component</p>\n",
        "linenr": 586,
        "html_filename": "Box.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Accordion.js",
  "private": false,
  "alternateClassNames": [
    "Ext.layout.AccordionLayout"
  ],
  "static": false,
  "name": "Ext.layout.container.Accordion",
  "doc": "<p>This is a layout that manages multiple Panels in an expandable accordion style such that only\n<b>one Panel can be expanded at any given time</b>. Each Panel has built-in support for expanding and collapsing.</p>\n\n\n<p>Note: Only Ext.Panels <b>and all subclasses of Ext.panel.Panel</b> may be used in an accordion layout Container.</p>\n\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Accordion/Ext.layout.container.Accordion.png\" alt=\"Ext.layout.container.Accordion container layout\"></p></p>\n\n<p>Example usage:</p>\n\n\n<pre><code>Ext.create('Ext.panel.Panel', {\n    title: 'Accordion Layout',\n    width: 300,\n    height: 300,\n    layout:'accordion',\n    defaults: {\n        // applied to each contained panel\n        bodyStyle: 'padding:15px'\n    },\n    layoutConfig: {\n        // layout-specific configs go here\n        titleCollapse: false,\n        animate: true,\n        activeOnTop: true\n    },\n    items: [{\n        title: 'Panel 1',\n        html: 'Panel content!'\n    },{\n        title: 'Panel 2',\n        html: 'Panel content!'\n    },{\n        title: 'Panel 3',\n        html: 'Panel content!'\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Accordion.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.layout.container.VBox"
});