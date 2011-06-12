Ext.data.JsonP.Ext_AbstractPlugin({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-destroy",
        "shortDoc": "The destroy method is invoked by the owning Component at the time the Component is being destroyed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "params": [

        ],
        "name": "destroy",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The destroy method is invoked by the owning Component at the time the Component is being destroyed.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin cleanup in their own implementation of this method.</p>\n\n",
        "linenr": 42,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractPlugin.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-disable",
        "shortDoc": "The base implementation just sets the plugin's disabled flag to true\n\n\nPlugin subclasses which need more complex proc...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "params": [

        ],
        "name": "disable",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>true</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n",
        "linenr": 57,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractPlugin.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-enable",
        "shortDoc": "The base implementation just sets the plugin's disabled flag to false\n\n\nPlugin subclasses which need more complex pro...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "params": [

        ],
        "name": "enable",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>false</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n",
        "linenr": 49,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractPlugin.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-init",
        "shortDoc": "The init method is invoked after initComponent has been run for the client Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "params": [
          {
            "type": "Component",
            "optional": false,
            "doc": "<p>The client Component which owns this plugin.</p>\n",
            "name": "client"
          }
        ],
        "name": "init",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The init method is invoked after initComponent has been run for the client Component.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin initialization, and set up bidirectional\nlinks between the plugin and its client Component in their own implementation of this method.</p>\n\n",
        "linenr": 33,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractPlugin.html"
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

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "AbstractPlugin.html#Ext-AbstractPlugin",
  "subclasses": [
    "Ext.grid.plugin.DragDrop",
    "Ext.tree.ViewDDPlugin"
  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.AbstractPlugin",
  "doc": "<p>The AbstractPlugin class is the base class from which user-implemented plugins should inherit.</p>\n\n\n<p>This class defines the essential API of plugins as used by Components by defining the following methods:</p>\n\n\n<ul>\n<li><code>init</code> : The plugin initialization method which the owning Component calls at Component initialization\ntime.<div class=\"sub-desc\"><p>The Component passes itself as the sole parameter.</p><p>Subclasses should set up bidirectional\nlinks between the plugin and its client Component here.</p></div></li>\n<li><code>destroy</code> : The plugin cleanup method which the owning Component calls at Component destruction time.<div class=\"sub-desc\">Use\nthis method to break links between the plugin and the Component and to free any allocated resources.</div></li>\n<li><code>enable</code> : The base implementation just sets the plugin's <code>disabled</code> flag to <code>false</code><div class=\"sub-desc\"></div></li>\n<li><code>disable</code> : The base implementation just sets the plugin's <code>disabled</code> flag to <code>true</code><div class=\"sub-desc\"></div></li>\n</ul>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "AbstractPlugin.html",
  "extends": "Object"
});