Ext.data.JsonP.Ext_EventManager({
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
        "href": "EventManager.html#Ext-EventManager-method-addListener",
        "shortDoc": "Appends an event handler to an element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "String/HTMLElement",
            "optional": false,
            "doc": "<p>The html element or id to assign the event handler to.</p>\n",
            "name": "el"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler function the event invokes. This function is passed\nthe following parameters:<ul>\n<li>evt : EventObject<div class=\"sub-desc\">The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">EventObject</a> describing the event.</div></li>\n<li>t : Element<div class=\"sub-desc\">The <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> which was the target of the event.\nNote that this may be filtered by using the <tt>delegate</tt> option.</div></li>\n<li>o : Object<div class=\"sub-desc\">The options object from the addListener call.</div></li>\n</ul></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<b><code>this</code></b> reference) in which the handler function is executed. <b>Defaults to the Element</b>.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration properties.\nThis may contain any of the following properties:<ul>\n<li>scope : Object<div class=\"sub-desc\">The scope (<b><code>this</code></b> reference) in which the handler function is executed. <b>Defaults to the Element</b>.</div></li>\n<li>delegate : String<div class=\"sub-desc\">A simple selector to filter the target or look for a descendant of the target</div></li>\n<li>stopEvent : Boolean<div class=\"sub-desc\">True to stop the event. That is stop propagation, and prevent the default action.</div></li>\n<li>preventDefault : Boolean<div class=\"sub-desc\">True to prevent the default action</div></li>\n<li>stopPropagation : Boolean<div class=\"sub-desc\">True to prevent event propagation</div></li>\n<li>normalized : Boolean<div class=\"sub-desc\">False to pass a browser event to the handler function instead of an Ext.EventObject</div></li>\n<li>delay : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after te event fires.</div></li>\n<li>single : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li>buffer : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li>target : Element<div class=\"sub-desc\">Only call the handler if the event was fired on the target Element, <i>not</i> if the event was bubbled up from a child node.</div></li>\n</ul><br></p>\n\n<p>See <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a> for examples of how to use these options.</p>\n\n",
            "name": "options"
          }
        ],
        "name": "addListener",
        "owner": "Ext.EventManager",
        "doc": "<p>Appends an event handler to an element.  The shorthand version <a href=\"#/api/Ext.EventManager-method-on\" rel=\"Ext.EventManager-method-on\" class=\"docClass\">on</a> is equivalent.  Typically you will\nuse <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a> directly on an Element in favor of calling this version.</p>\n",
        "linenr": 284,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-getId",
        "shortDoc": "Get the id of the element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to get the id for.</p>\n",
            "name": "element"
          }
        ],
        "name": "getId",
        "owner": "Ext.EventManager",
        "doc": "<p>Get the id of the element. If one has not been assigned, automatically assign it.</p>\n",
        "linenr": 170,
        "return": {
          "type": "String",
          "doc": "<p>id</p>\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-getKeyEvent",
        "shortDoc": "Indicates which event to use for getting key presses. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [

        ],
        "name": "getKeyEvent",
        "owner": "Ext.EventManager",
        "doc": "<p>Indicates which event to use for getting key presses.</p>\n",
        "linenr": 834,
        "return": {
          "type": "String",
          "doc": "<p>The appropriate event name.</p>\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-getPageX",
        "shortDoc": "Gets the x coordinate from the event ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "event"
          }
        ],
        "name": "getPageX",
        "owner": "Ext.EventManager",
        "doc": "<p>Gets the x coordinate from the event</p>\n",
        "linenr": 656,
        "return": {
          "type": "Number",
          "doc": "<p>The x coordinate</p>\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-getPageXY",
        "shortDoc": "Gets the x &amp; ycoordinate from the event ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "event"
          }
        ],
        "name": "getPageXY",
        "owner": "Ext.EventManager",
        "doc": "<p>Gets the x &amp; ycoordinate from the event</p>\n",
        "linenr": 674,
        "return": {
          "type": "Array",
          "doc": "<p>The x/y coordinate</p>\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-getPageY",
        "shortDoc": "Gets the y coordinate from the event ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "event"
          }
        ],
        "name": "getPageY",
        "owner": "Ext.EventManager",
        "doc": "<p>Gets the y coordinate from the event</p>\n",
        "linenr": 665,
        "return": {
          "type": "Number",
          "doc": "<p>The y coordinate</p>\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-getRelatedTarget",
        "shortDoc": "Gets the related target from the event. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "event"
          }
        ],
        "name": "getRelatedTarget",
        "owner": "Ext.EventManager",
        "doc": "<p>Gets the related target from the event.</p>\n",
        "linenr": 638,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>The related target.</p>\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-getTarget",
        "shortDoc": "Gets the target of the event. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "event"
          }
        ],
        "name": "getTarget",
        "owner": "Ext.EventManager",
        "doc": "<p>Gets the target of the event.</p>\n",
        "linenr": 694,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>target</p>\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-on",
        "shortDoc": "Alias for Ext.EventManager.addListener ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [

        ],
        "name": "on",
        "owner": "Ext.EventManager",
        "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">Ext.EventManager.addListener</a></p>\n",
        "linenr": 859,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-onDocumentReady",
        "shortDoc": "Adds a listener to be notified when the document is ready (before onload and before images are loaded). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function executes. Defaults to the browser window.</p>\n",
            "name": "scope"
          },
          {
            "type": "boolean",
            "optional": true,
            "doc": "<p>(optional) Options object as passed to <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a>.</p>\n",
            "name": "options"
          }
        ],
        "name": "onDocumentReady",
        "owner": "Ext.EventManager",
        "doc": "<p>Adds a listener to be notified when the document is ready (before onload and before images are loaded). Can be\naccessed shorthanded as Ext.onReady().</p>\n",
        "linenr": 129,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-onWindowResize",
        "shortDoc": "Adds a listener to be notified when the browser window is resized and provides resize event buffering (100 millisecon...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler function the window resize event invokes.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope (<code>this</code> reference) in which the handler function executes. Defaults to the browser window.</p>\n",
            "name": "scope"
          },
          {
            "type": "boolean",
            "optional": false,
            "doc": "<p>Options object as passed to <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a></p>\n",
            "name": "options"
          }
        ],
        "name": "onWindowResize",
        "owner": "Ext.EventManager",
        "doc": "<p>Adds a listener to be notified when the browser window is resized and provides resize event buffering (100 milliseconds),\npasses new viewport width and height to handlers.</p>\n",
        "linenr": 732,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-preventDefault",
        "shortDoc": "Prevents the browsers default handling of the event. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>event to prevent the default</p>\n",
            "name": "The"
          }
        ],
        "name": "preventDefault",
        "owner": "Ext.EventManager",
        "doc": "<p>Prevents the browsers default handling of the event.</p>\n",
        "linenr": 616,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-purgeElement",
        "shortDoc": "Recursively removes all previous added listeners from an element and its children. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "String/HTMLElement",
            "optional": false,
            "doc": "<p>The id or html element from which to remove all event handlers.</p>\n",
            "name": "el"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The name of the event.</p>\n",
            "name": "eventName"
          }
        ],
        "name": "purgeElement",
        "owner": "Ext.EventManager",
        "doc": "<p>Recursively removes all previous added listeners from an element and its children. Typically you will use <a href=\"#/api/Ext.core.Element-method-purgeAllListeners\" rel=\"Ext.core.Element-method-purgeAllListeners\" class=\"docClass\">Ext.core.Element.purgeAllListeners</a>\ndirectly on an Element in favor of calling this version.</p>\n",
        "linenr": 452,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-removeAll",
        "shortDoc": "Removes all event handers from an element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "String/HTMLElement",
            "optional": false,
            "doc": "<p>The id or html element from which to remove all event handlers.</p>\n",
            "name": "el"
          }
        ],
        "name": "removeAll",
        "owner": "Ext.EventManager",
        "doc": "<p>Removes all event handers from an element.  Typically you will use <a href=\"#/api/Ext.core.Element-method-removeAllListeners\" rel=\"Ext.core.Element-method-removeAllListeners\" class=\"docClass\">Ext.core.Element.removeAllListeners</a>\ndirectly on an Element in favor of calling this version.</p>\n",
        "linenr": 431,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-removeListener",
        "shortDoc": "Removes an event handler from an element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "String/HTMLElement",
            "optional": false,
            "doc": "<p>The id or html element from which to remove the listener.</p>\n",
            "name": "el"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler function to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>If a scope (<b><code>this</code></b> reference) was specified when the listener was added,\nthen this must refer to the same object.</p>\n",
            "name": "scope"
          }
        ],
        "name": "removeListener",
        "owner": "Ext.EventManager",
        "doc": "<p>Removes an event handler from an element.  The shorthand version <a href=\"#/api/Ext.EventManager-method-un\" rel=\"Ext.EventManager-method-un\" class=\"docClass\">un</a> is equivalent.  Typically\nyou will use <a href=\"#/api/Ext.core.Element-method-removeListener\" rel=\"Ext.core.Element-method-removeListener\" class=\"docClass\">Ext.core.Element.removeListener</a> directly on an Element in favor of calling this version.</p>\n",
        "linenr": 371,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-removeResizeListener",
        "shortDoc": "Removes the passed window resize listener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope of handler</p>\n",
            "name": "scope"
          }
        ],
        "name": "removeResizeListener",
        "owner": "Ext.EventManager",
        "doc": "<p>Removes the passed window resize listener.</p>\n",
        "linenr": 765,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-removeUnloadListener",
        "shortDoc": "Removes the passed window unload listener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope of handler</p>\n",
            "name": "scope"
          }
        ],
        "name": "removeUnloadListener",
        "owner": "Ext.EventManager",
        "doc": "<p>Removes the passed window unload listener.</p>\n",
        "linenr": 813,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-stopEvent",
        "shortDoc": "Stop the event (preventDefault and stopPropagation) ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>event to stop</p>\n",
            "name": "The"
          }
        ],
        "name": "stopEvent",
        "owner": "Ext.EventManager",
        "doc": "<p>Stop the event (preventDefault and stopPropagation)</p>\n",
        "linenr": 594,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-stopPropagation",
        "shortDoc": "Cancels bubbling of the event. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>event to stop bubbling.</p>\n",
            "name": "The"
          }
        ],
        "name": "stopPropagation",
        "owner": "Ext.EventManager",
        "doc": "<p>Cancels bubbling of the event.</p>\n",
        "linenr": 603,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "EventManager.html#Ext-EventManager-method-un",
        "shortDoc": "Alias for Ext.EventManager.removeListener ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "params": [

        ],
        "name": "un",
        "owner": "Ext.EventManager",
        "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-removeListener\" rel=\"Ext.EventManager-method-removeListener\" class=\"docClass\">Ext.EventManager.removeListener</a></p>\n",
        "linenr": 866,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "EventManager.html"
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
  "singleton": true,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "EventManager.html#Ext-EventManager",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.EventManager",
  "doc": "<p>Registers event handlers that want to receive a normalized EventObject instead of the standard browser event and provides\nseveral useful events directly.\nSee <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> for more details on normalized event objects.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "EventManager.html",
  "extends": null
});