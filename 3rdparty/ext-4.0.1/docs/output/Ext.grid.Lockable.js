Ext.data.JsonP.Ext_grid_Lockable({
  "tagname": "class",
  "name": "Ext.grid.Lockable",
  "doc": "<p>Lockable is a private mixin which injects lockable behavior into any\nTablePanel subclass such as GridPanel or TreePanel. TablePanel will\nautomatically inject the <a href=\"#/api/Ext.grid.Lockable\" rel=\"Ext.grid.Lockable\" class=\"docClass\">Ext.grid.Lockable</a> mixin in when one of the\nthese conditions are met:\n- The TablePanel has the lockable configuration set to true\n- One of the columns in the TablePanel has locked set to true/false</p>\n\n<p>Each TablePanel subclass <em>must</em> register an alias. It should have an array\nof configurations to copy to the 2 separate tablepanel's that will be generated\nto note what configurations should be copied. These are named normalCfgCopy and\nlockedCfgCopy respectively.</p>\n\n<p>Columns which are locked must specify a fixed width. They do <em>NOT</em> support a\nflex width.</p>\n\n<p>Configurations which are specified in this class will be available on any grid or\ntree which is using the lockable functionality.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": true,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "lockedViewConfig",
      "member": "Ext.grid.Lockable",
      "type": "Object",
      "doc": "<p>A view configuration to be applied to the\nlocked side of the grid. Any conflicting configurations between lockedViewConfig\nand viewConfig will be overwritten by the lockedViewConfig.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/Lockable.js",
      "linenr": 42,
      "html_filename": "Lockable.html",
      "href": "Lockable.html#Ext-grid-Lockable-cfg-lockedViewConfig",
      "shortDoc": "A view configuration to be applied to the\nlocked side of the grid. Any conflicting configurations between lockedViewC..."
    },
    {
      "tagname": "cfg",
      "name": "normalViewConfig",
      "member": "Ext.grid.Lockable",
      "type": "Object",
      "doc": "<p>A view configuration to be applied to the\nnormal/unlocked side of the grid. Any conflicting configurations between normalViewConfig\nand viewConfig will be overwritten by the normalViewConfig.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/Lockable.js",
      "linenr": 48,
      "html_filename": "Lockable.html",
      "href": "Lockable.html#Ext-grid-Lockable-cfg-normalViewConfig",
      "shortDoc": "A view configuration to be applied to the\nnormal/unlocked side of the grid. Any conflicting configurations between no..."
    },
    {
      "tagname": "cfg",
      "name": "subGridXType",
      "member": "Ext.grid.Lockable",
      "type": "String",
      "doc": "<p>The xtype of the subgrid to specify. If this is\nnot specified lockable will determine the subgrid xtype to create by the\nfollowing rule. Use the superclasses xtype if the superclass is NOT\ntablepanel, otherwise use the xtype itself.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/Lockable.js",
      "linenr": 35,
      "html_filename": "Lockable.html",
      "href": "Lockable.html#Ext-grid-Lockable-cfg-subGridXType",
      "shortDoc": "The xtype of the subgrid to specify. If this is\nnot specified lockable will determine the subgrid xtype to create by ..."
    },
    {
      "tagname": "cfg",
      "name": "syncRowHeight",
      "member": "Ext.grid.Lockable",
      "type": "Boolean",
      "doc": "<p>Synchronize rowHeight between the normal and\nlocked grid view. This is turned on by default. If your grid is guaranteed\nto have rows of all the same height, you should set this to false to\noptimize performance.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/Lockable.js",
      "linenr": 27,
      "html_filename": "Lockable.html",
      "href": "Lockable.html#Ext-grid-Lockable-cfg-syncRowHeight",
      "shortDoc": "Synchronize rowHeight between the normal and\nlocked grid view. This is turned on by default. If your grid is guarante..."
    }
  ],
  "method": [

  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/Lockable.js",
  "linenr": 1,
  "html_filename": "Lockable.html",
  "href": "Lockable.html#Ext-grid-Lockable",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});