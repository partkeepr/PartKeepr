Ext.data.JsonP.Ext_layout_container_Table({
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
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Table2.html#Ext-layout-container-Table-cfg-columns",
        "shortDoc": "The total number of columns to create in the table for this layout. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Table.js",
        "private": false,
        "name": "columns",
        "owner": "Ext.layout.container.Table",
        "doc": "<p>The total number of columns to create in the table for this layout.  If not specified, all Components added to\nthis layout will be rendered into a single row using one column per Component.</p>\n",
        "linenr": 75,
        "html_filename": "Table2.html"
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
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Table2.html#Ext-layout-container-Table-cfg-tableAttrs",
        "shortDoc": "An object containing properties which are added to the DomHelper specification\nused to create the layout's &lt;table&...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Table.js",
        "private": false,
        "name": "tableAttrs",
        "owner": "Ext.layout.container.Table",
        "doc": "<p>An object containing properties which are added to the <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> specification\nused to create the layout's <tt>&lt;table&gt;</tt> element. Example:</p>\n\n\n<pre><code>{\n    xtype: 'panel',\n    layout: {\n        type: 'table',\n        columns: 3,\n        tableAttrs: {\n            style: {\n                width: '100%'\n            }\n        }\n    }\n}</code></pre>\n\n",
        "linenr": 96,
        "html_filename": "Table2.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Table2.html#Ext-layout-container-Table-cfg-tdAttrs",
        "shortDoc": "An object containing properties which are added to the DomHelper specification\nused to create the layout's &lt;td&gt;...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Table.js",
        "private": false,
        "name": "tdAttrs",
        "owner": "Ext.layout.container.Table",
        "doc": "<p>An object containing properties which are added to the <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> specification\nused to create the layout's <tt>&lt;td&gt;</tt> elements.\n\n",
        "linenr": 121,
        "html_filename": "Table2.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Table2.html#Ext-layout-container-Table-cfg-trAttrs",
        "shortDoc": "An object containing properties which are added to the DomHelper specification\nused to create the layout's &lt;tr&gt;...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Table.js",
        "private": false,
        "name": "trAttrs",
        "owner": "Ext.layout.container.Table",
        "doc": "<p>An object containing properties which are added to the <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> specification\nused to create the layout's <tt>&lt;tr&gt;</tt> elements.\n\n",
        "linenr": 115,
        "html_filename": "Table2.html"
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
    "Ext.layout.container.Auto"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Table2.html#Ext-layout-container-Table",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Table.js",
  "private": false,
  "alternateClassNames": [
    "Ext.layout.TableLayout"
  ],
  "name": "Ext.layout.container.Table",
  "doc": "<p>This layout allows you to easily render content into an HTML table.  The total number of columns can be\nspecified, and rowspan and colspan can be used to create complex layouts within the table.\nThis class is intended to be extended or created via the <code>layout: {type: 'table'}</code>\n<a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config, and should generally not need to be created directly via the new keyword.</p>\n\n\n<p>Note that when creating a layout via config, the layout-specific config properties must be passed in via\nthe <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> object which will then be applied internally to the layout.  In the\ncase of TableLayout, the only valid layout config properties are <a href=\"#/api/Ext.layout.container.Table-cfg-columns\" rel=\"Ext.layout.container.Table-cfg-columns\" class=\"docClass\">columns</a> and <a href=\"#/api/Ext.layout.container.Table-cfg-tableAttrs\" rel=\"Ext.layout.container.Table-cfg-tableAttrs\" class=\"docClass\">tableAttrs</a>.\nHowever, the items added to a TableLayout can supply the following table-specific config properties:</p>\n\n\n<ul>\n<li><b>rowspan</b> Applied to the table cell containing the item.</li>\n<li><b>colspan</b> Applied to the table cell containing the item.</li>\n<li><b>cellId</b> An id applied to the table cell containing the item.</li>\n<li><b>cellCls</b> A CSS class name added to the table cell containing the item.</li>\n</ul>\n\n\n<p>The basic concept of building up a TableLayout is conceptually very similar to building up a standard\nHTML table.  You simply add each panel (or \"cell\") that you want to include along with any span attributes\nspecified as the special config properties of rowspan and colspan which work exactly like their HTML counterparts.\nRather than explicitly creating and nesting rows and columns as you would in HTML, you simply specify the\ntotal column count in the layoutConfig and start adding panels in their natural order from left to right,\ntop to bottom.  The layout will automatically figure out, based on the column count, rowspans and colspans,\nhow to position each panel within the table.  Just like with HTML tables, your rowspans and colspans must add\nup correctly in your overall layout or you'll end up with missing and/or extra cells!  Example usage:</p>\n\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Table/Ext.layout.container.Table.png\" alt=\"Ext.layout.container.Table container layout\"></p></p>\n\n<pre><code>// This code will generate a layout table that is 3 columns by 2 rows\n// with some spanning included.  The basic layout will be:\n// +--------+-----------------+\n// |   A    |   B             |\n// |        |--------+--------|\n// |        |   C    |   D    |\n// +--------+--------+--------+\n    Ext.create('Ext.panel.Panel', {\n        title: 'Table Layout',\n        width: 300,\n        height: 150,\n        layout: {\n            type: 'table',\n            // The total column count must be specified here\n            columns: 3\n        },\n        defaults: {\n            // applied to each contained panel\n            bodyStyle:'padding:20px'\n        },\n        items: [{\n            html: 'Cell A content',\n            rowspan: 2\n        },{\n            html: 'Cell B content',\n            colspan: 2\n        },{\n            html: 'Cell C content',\n            cellCls: 'highlight'\n        },{\n            html: 'Cell D content'\n        }],\n        renderTo: Ext.getBody()\n    });\n</code></pre>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Table2.html",
  "extends": "Ext.layout.container.Auto"
});