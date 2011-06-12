Ext.data.JsonP.Ext_layout_container_Box({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Box.html#Ext-layout-container-Box-cfg-animate",
        "shortDoc": "If truthy, child Component are animated into position whenever the Container\nis layed out. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "name": "animate",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>If truthy, child Component are <i>animated</i> into position whenever the Container\nis layed out. If this option is numeric, it is used as the animation duration in milliseconds.</p>\n\n\n<p>May be set as a property at any time.</p>\n\n",
        "linenr": 25,
        "html_filename": "Box.html"
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
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Box.html#Ext-layout-container-Box-cfg-clearInnerCtOnLayout",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "name": "clearInnerCtOnLayout",
        "owner": "Ext.layout.container.Box",
        "doc": "\n",
        "linenr": 126,
        "html_filename": "Box.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Box.html#Ext-layout-container-Box-cfg-defaultMargins",
        "shortDoc": "If the individual contained items do not have a margins\nproperty specified or margin specified via CSS, the default m...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "name": "defaultMargins",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>If the individual contained items do not have a <tt>margins</tt>\nproperty specified or margin specified via CSS, the default margins from this property will be\napplied to each item.</p>\n\n\n<br><p>This property may be specified as an object containing margins\n\n\n<p>to apply in the format:</p></p>\n\n<pre><code>{\n    top: (top margin),\n    right: (right margin),\n    bottom: (bottom margin),\n    left: (left margin)\n}</code></pre>\n\n\n<p>This property may also be specified as a string containing\nspace-separated, numeric margin values. The order of the sides associated\nwith each value matches the way CSS processes margin values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to:</p>\n\n\n<pre><code>{top:0, right:0, bottom:0, left:0}\n</code></pre>\n\n",
        "linenr": 32,
        "html_filename": "Box.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Box.html#Ext-layout-container-Box-cfg-flex",
        "shortDoc": "This configuration option is to be applied to child items of the container managed\nby this layout. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "name": "flex",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>This configuration option is to be applied to <b>child <tt>items</tt></b> of the container managed\nby this layout. Each child item with a <tt>flex</tt> property will be flexed <b>horizontally</b>\naccording to each item's <b>relative</b> <tt>flex</tt> value compared to the sum of all items with\na <tt>flex</tt> value specified.  Any child items that have either a <tt>flex = 0</tt> or\n<tt>flex = undefined</tt> will not be 'flexed' (the initial size will not be changed).</p>\n",
        "linenr": 102,
        "html_filename": "Box.html"
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
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Box.html#Ext-layout-container-Box-cfg-pack",
        "shortDoc": "Controls how the child items of the container are packed together. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "name": "pack",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>Controls how the child items of the container are packed together. Acceptable configuration values\nfor this property are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>start</tt></b> : <b>Default</b><div class=\"sub-desc\">child items are packed together at\n<b>left</b> side of container</div></li>\n<li><b><tt>center</tt></b> : <div class=\"sub-desc\">child items are packed together at\n<b>mid-width</b> of container</div></li>\n<li><b><tt>end</tt></b> : <div class=\"sub-desc\">child items are packed together at <b>right</b>\nside of container</div></li>\n</ul></div>\n\n",
        "linenr": 89,
        "html_filename": "Box.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Box.html#Ext-layout-container-Box-cfg-padding",
        "shortDoc": "Sets the padding to be applied to all child items managed by this layout. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "name": "padding",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>Sets the padding to be applied to all child items managed by this layout.</p>\n\n\n<p>This property must be specified as a string containing\nspace-separated, numeric padding values. The order of the sides associated\nwith each value matches the way CSS processes padding values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to: <code>\"0\"</code></p>\n\n",
        "linenr": 68,
        "html_filename": "Box.html"
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
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Box.html#Ext-layout-container-Box-method-updateChildBoxes",
        "shortDoc": "Resizes and repositions each child component ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The box measurements</p>\n",
            "name": "boxes"
          }
        ],
        "name": "updateChildBoxes",
        "owner": "Ext.layout.container.Box",
        "doc": "<p>Resizes and repositions each child component</p>\n",
        "linenr": 581,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Box.html"
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
  "href": "Box.html#Ext-layout-container-Box",
  "subclasses": [
    "Ext.layout.container.VBox",
    "Ext.layout.container.HBox"
  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
  "private": false,
  "alternateClassNames": [
    "Ext.layout.BoxLayout"
  ],
  "name": "Ext.layout.container.Box",
  "doc": "<p>Base Class for HBoxLayout and VBoxLayout Classes. Generally it should not need to be used directly.</p>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Box.html",
  "extends": "Ext.layout.container.Container"
});