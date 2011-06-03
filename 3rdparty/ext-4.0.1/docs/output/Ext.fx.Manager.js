Ext.data.JsonP.Ext_fx_Manager({
  "tagname": "class",
  "name": "Ext.fx.Manager",
  "doc": "<p>Animation Manager which keeps track of all current animations and manages them on a frame by frame basis.</p>\n",
  "extends": null,
  "mixins": [
    "Ext.fx.Queue"
  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": true,
  "private": true,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "forceJS",
      "member": "Ext.fx.Manager",
      "type": "Boolean",
      "doc": "<p>Turn off to not use CSS3 transitions when they are available</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/fx/Manager.js",
      "linenr": 55,
      "html_filename": "Manager3.html",
      "href": "Manager3.html#Ext-fx-Manager-cfg-forceJS"
    },
    {
      "tagname": "cfg",
      "name": "interval",
      "member": "Ext.fx.Manager",
      "type": "Number",
      "doc": "<p>Default interval in miliseconds to calculate each frame.  Defaults to 16ms (~60fps)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/fx/Manager.js",
      "linenr": 50,
      "html_filename": "Manager3.html",
      "href": "Manager3.html#Ext-fx-Manager-cfg-interval"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "addAnim",
      "member": "Ext.fx.Manager",
      "doc": "<p>Add an Anim to the manager. This is done automatically when an Anim instance is created.</p>\n",
      "params": [
        {
          "type": "Ext.fx.Anim",
          "name": "anim",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/fx/Manager.js",
      "linenr": 114,
      "html_filename": "Manager3.html",
      "href": "Manager3.html#Ext-fx-Manager-method-addAnim",
      "shortDoc": "<p>Add an Anim to the manager. This is done automatically when an Anim instance is created.</p>\n"
    },
    {
      "tagname": "method",
      "name": "collectTargetData",
      "member": "Ext.fx.Manager",
      "doc": "<p>Collect target attributes for the given Anim object at the given timestamp</p>\n",
      "params": [
        {
          "type": "Ext.fx.Anim",
          "name": "anim",
          "doc": "<p>The Anim instance</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "timestamp",
          "doc": "<p>Time after the anim's start time</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "useCSS3",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/fx/Manager.js",
      "linenr": 267,
      "html_filename": "Manager3.html",
      "href": "Manager3.html#Ext-fx-Manager-method-collectTargetData",
      "shortDoc": "<p>Collect target attributes for the given Anim object at the given timestamp</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeAnim",
      "member": "Ext.fx.Manager",
      "doc": "<p>Remove an Anim from the manager. This is done automatically when an Anim ends.</p>\n",
      "params": [
        {
          "type": "Ext.fx.Anim",
          "name": "anim",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/fx/Manager.js",
      "linenr": 152,
      "html_filename": "Manager3.html",
      "href": "Manager3.html#Ext-fx-Manager-method-removeAnim",
      "shortDoc": "<p>Remove an Anim from the manager. This is done automatically when an Anim ends.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/fx/Manager.js",
  "linenr": 1,
  "html_filename": "Manager3.html",
  "href": "Manager3.html#Ext-fx-Manager",
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
    "Ext.fx.Queue"
  ]
});