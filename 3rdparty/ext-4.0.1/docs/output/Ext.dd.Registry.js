Ext.data.JsonP.Ext_dd_Registry({
  "tagname": "class",
  "name": "Ext.dd.Registry",
  "doc": "<p>Provides easy access to all drag drop components that are registered on a page.  Items can be retrieved either\ndirectly by DOM node id, or by passing in the drag drop event that occurred and looking up the event target.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "getHandle",
      "member": "Ext.dd.Registry",
      "doc": "<p>Returns the handle registered for a DOM Node by id</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "id",
          "doc": "<p>The DOM node or id to look up</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>handle The custom handle data</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/Registry.js",
      "linenr": 79,
      "html_filename": "Registry.html",
      "href": "Registry.html#Ext-dd-Registry-method-getHandle",
      "shortDoc": "<p>Returns the handle registered for a DOM Node by id</p>\n"
    },
    {
      "tagname": "method",
      "name": "getHandleFromEvent",
      "member": "Ext.dd.Registry",
      "doc": "<p>Returns the handle that is registered for the DOM node that is the target of the event</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>handle The custom handle data</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/Registry.js",
      "linenr": 91,
      "html_filename": "Registry.html",
      "href": "Registry.html#Ext-dd-Registry-method-getHandleFromEvent",
      "shortDoc": "<p>Returns the handle that is registered for the DOM node that is the target of the event</p>\n"
    },
    {
      "tagname": "method",
      "name": "getTarget",
      "member": "Ext.dd.Registry",
      "doc": "<p>Returns a custom data object that is registered for a DOM node by id</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "id",
          "doc": "<p>The DOM node or id to look up</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>data The custom data</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/Registry.js",
      "linenr": 101,
      "html_filename": "Registry.html",
      "href": "Registry.html#Ext-dd-Registry-method-getTarget",
      "shortDoc": "<p>Returns a custom data object that is registered for a DOM node by id</p>\n"
    },
    {
      "tagname": "method",
      "name": "getTargetFromEvent",
      "member": "Ext.dd.Registry",
      "doc": "<p>Returns a custom data object that is registered for the DOM node that is the target of the event</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>data The custom data</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/Registry.js",
      "linenr": 113,
      "html_filename": "Registry.html",
      "href": "Registry.html#Ext-dd-Registry-method-getTargetFromEvent",
      "shortDoc": "<p>Returns a custom data object that is registered for the DOM node that is the target of the event</p>\n"
    },
    {
      "tagname": "method",
      "name": "register",
      "member": "Ext.dd.Registry",
      "doc": "<p>Resgister a drag drop element</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "element",
          "doc": "<p>The id or DOM node to register</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "data",
          "doc": "<p>(optional) An custom data object that will be passed between the elements that are involved\nin drag drop operations.  You can populate this object with any arbitrary properties that your own code\nknows how to interpret, plus there are some specific properties known to the Registry that should be\npopulated in the data object (if applicable):</p>\n\n<pre>Value      Description<br />\n---------  ------------------------------------------<br />\nhandles    Array of DOM nodes that trigger dragging<br />\n           for the element being registered<br />\nisHandle   True if the element passed in triggers<br />\n           dragging itself, else false\n</pre>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/Registry.js",
      "linenr": 27,
      "html_filename": "Registry.html",
      "href": "Registry.html#Ext-dd-Registry-method-register",
      "shortDoc": "<p>Resgister a drag drop element</p>\n"
    },
    {
      "tagname": "method",
      "name": "unregister",
      "member": "Ext.dd.Registry",
      "doc": "<p>Unregister a drag drop element</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "element",
          "doc": "<p>The id or DOM node to unregister</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/Registry.js",
      "linenr": 61,
      "html_filename": "Registry.html",
      "href": "Registry.html#Ext-dd-Registry-method-unregister",
      "shortDoc": "<p>Unregister a drag drop element</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/Registry.js",
  "linenr": 1,
  "html_filename": "Registry.html",
  "href": "Registry.html#Ext-dd-Registry",
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