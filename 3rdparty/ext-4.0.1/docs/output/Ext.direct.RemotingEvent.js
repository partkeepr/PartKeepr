Ext.data.JsonP.Ext_direct_RemotingEvent({
  "tagname": "class",
  "name": "Ext.direct.RemotingEvent",
  "doc": "<p>An event that is fired when data is received from a\n<a href=\"#/api/Ext.direct.RemotingProvider\" rel=\"Ext.direct.RemotingProvider\" class=\"docClass\">Ext.direct.RemotingProvider</a>. Contains a method to the\nrelated transaction for the direct request, see <a href=\"#/api/Ext.direct.RemotingEvent-method-getTransaction\" rel=\"Ext.direct.RemotingEvent-method-getTransaction\" class=\"docClass\">getTransaction</a></p>\n",
  "extends": "Ext.direct.Event",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "RemotingEvent",
      "member": "Ext.direct.Event",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The config object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/Event.js",
      "linenr": 1,
      "html_filename": "Event.html",
      "href": "Event.html#Ext-direct-Event-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "getData",
      "member": "Ext.direct.Event",
      "doc": "<p>Return the raw data for this event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>The data from the event</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/Event.js",
      "linenr": 27,
      "html_filename": "Event.html",
      "href": "Event.html#Ext-direct-Event-method-getData",
      "shortDoc": "<p>Return the raw data for this event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getTransaction",
      "member": "Ext.direct.RemotingEvent",
      "doc": "<p>Get the transaction associated with this event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.direct.Transaction",
        "doc": "<p>The transaction</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingEvent.js",
      "linenr": 18,
      "html_filename": "RemotingEvent.html",
      "href": "RemotingEvent.html#Ext-direct-RemotingEvent-method-getTransaction",
      "shortDoc": "<p>Get the transaction associated with this event.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingEvent.js",
  "linenr": 1,
  "html_filename": "RemotingEvent.html",
  "href": "RemotingEvent.html#Ext-direct-RemotingEvent",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.direct.Event"
  ],
  "subclasses": [
    "Ext.direct.ExceptionEvent"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});