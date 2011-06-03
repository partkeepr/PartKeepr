Ext.data.JsonP.Ext_menu_KeyNav({
  "tagname": "class",
  "name": "Ext.menu.KeyNav",
  "doc": "\n",
  "extends": "Ext.util.KeyNav",
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
      "name": "defaultEventAction",
      "member": "Ext.util.KeyNav",
      "type": "String",
      "doc": "<p>The method to call on the <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> after this KeyNav intercepts a key.  Valid values are\n<a href=\"#/api/Ext.EventObject-method-stopEvent\" rel=\"Ext.EventObject-method-stopEvent\" class=\"docClass\">Ext.EventObject.stopEvent</a>, <a href=\"#/api/Ext.EventObject-method-preventDefault\" rel=\"Ext.EventObject-method-preventDefault\" class=\"docClass\">Ext.EventObject.preventDefault</a> and\n<a href=\"#/api/Ext.EventObject-method-stopPropagation\" rel=\"Ext.EventObject-method-stopPropagation\" class=\"docClass\">Ext.EventObject.stopPropagation</a> (defaults to 'stopEvent')</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyNav.js",
      "linenr": 108,
      "html_filename": "KeyNav2.html",
      "href": "KeyNav2.html#Ext-util-KeyNav-cfg-defaultEventAction",
      "shortDoc": "The method to call on the Ext.EventObject after this KeyNav intercepts a key.  Valid values are\nExt.EventObject.stopE..."
    },
    {
      "tagname": "cfg",
      "name": "disabled",
      "member": "Ext.util.KeyNav",
      "type": "Boolean",
      "doc": "<p>True to disable this KeyNav instance (defaults to false)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyNav.js",
      "linenr": 102,
      "html_filename": "KeyNav2.html",
      "href": "KeyNav2.html#Ext-util-KeyNav-cfg-disabled"
    },
    {
      "tagname": "cfg",
      "name": "forceKeyDown",
      "member": "Ext.util.KeyNav",
      "type": "Boolean",
      "doc": "<p>Handle the keydown event instead of keypress (defaults to false).  KeyNav automatically does this for IE since\nIE does not propagate special keys on keypress, but setting this to true will force other browsers to also\nhandle keydown instead of keypress.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyNav.js",
      "linenr": 116,
      "html_filename": "KeyNav2.html",
      "href": "KeyNav2.html#Ext-util-KeyNav-cfg-forceKeyDown",
      "shortDoc": "Handle the keydown event instead of keypress (defaults to false).  KeyNav automatically does this for IE since\nIE doe..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "KeyNav",
      "member": "Ext.util.KeyNav",
      "doc": "\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The element to bind to</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The config</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyNav.js",
      "linenr": 1,
      "html_filename": "KeyNav2.html",
      "href": "KeyNav2.html#Ext-util-KeyNav-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.util.KeyNav",
      "doc": "<p>Destroy this KeyNav (this is the same as calling disable).</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "removeEl",
          "doc": "<p>True to remove the element associated with this KeyNav.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyNav.js",
      "linenr": 124,
      "html_filename": "KeyNav2.html",
      "href": "KeyNav2.html#Ext-util-KeyNav-method-destroy",
      "shortDoc": "<p>Destroy this KeyNav (this is the same as calling disable).</p>\n"
    },
    {
      "tagname": "method",
      "name": "disable",
      "member": "Ext.util.KeyNav",
      "doc": "<p>Disable this KeyNav</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyNav.js",
      "linenr": 141,
      "html_filename": "KeyNav2.html",
      "href": "KeyNav2.html#Ext-util-KeyNav-method-disable",
      "shortDoc": "<p>Disable this KeyNav</p>\n"
    },
    {
      "tagname": "method",
      "name": "enable",
      "member": "Ext.util.KeyNav",
      "doc": "<p>Enable this KeyNav</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyNav.js",
      "linenr": 133,
      "html_filename": "KeyNav2.html",
      "href": "KeyNav2.html#Ext-util-KeyNav-method-enable",
      "shortDoc": "<p>Enable this KeyNav</p>\n"
    },
    {
      "tagname": "method",
      "name": "getKeyEvent",
      "member": "Ext.util.KeyNav",
      "doc": "<p>Determines the event to bind to listen for keys. Depends on the <a href=\"#/api/Ext.menu.KeyNav-cfg-forceKeyDown\" rel=\"Ext.menu.KeyNav-cfg-forceKeyDown\" class=\"docClass\">forceKeyDown</a> setting,\nas well as the useKeyDown option on the EventManager.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "forceKeyDown",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The type of event to listen for.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyNav.js",
      "linenr": 158,
      "html_filename": "KeyNav2.html",
      "href": "KeyNav2.html#Ext-util-KeyNav-method-getKeyEvent",
      "shortDoc": "Determines the event to bind to listen for keys. Depends on the forceKeyDown setting,\nas well as the useKeyDown optio..."
    },
    {
      "tagname": "method",
      "name": "setDisabled",
      "member": "Ext.util.KeyNav",
      "doc": "<p>Convenience function for setting disabled/enabled by boolean.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "disabled",
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyNav.js",
      "linenr": 149,
      "html_filename": "KeyNav2.html",
      "href": "KeyNav2.html#Ext-util-KeyNav-method-setDisabled",
      "shortDoc": "<p>Convenience function for setting disabled/enabled by boolean.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/menu/KeyNav.js",
  "linenr": 1,
  "html_filename": "KeyNav.html",
  "href": "KeyNav.html#Ext-menu-KeyNav",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.util.KeyNav"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});