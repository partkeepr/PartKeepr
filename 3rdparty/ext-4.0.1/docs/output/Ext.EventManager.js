Ext.data.JsonP.Ext_EventManager({
  "tagname": "class",
  "name": "Ext.EventManager",
  "doc": "<p>Registers event handlers that want to receive a normalized EventObject instead of the standard browser event and provides\nseveral useful events directly.\nSee <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> for more details on normalized event objects.</p>\n",
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
      "name": "addListener",
      "member": "Ext.EventManager",
      "doc": "<p>Appends an event handler to an element.  The shorthand version <a href=\"#/api/Ext.EventManager-method-on\" rel=\"Ext.EventManager-method-on\" class=\"docClass\">on</a> is equivalent.  Typically you will\nuse <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a> directly on an Element in favor of calling this version.</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "el",
          "doc": "<p>The html element or id to assign the event handler to.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to listen for.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler function the event invokes. This function is passed\nthe following parameters:<ul>\n<li>evt : EventObject<div class=\"sub-desc\">The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">EventObject</a> describing the event.</div></li>\n<li>t : Element<div class=\"sub-desc\">The <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> which was the target of the event.\nNote that this may be filtered by using the <tt>delegate</tt> option.</div></li>\n<li>o : Object<div class=\"sub-desc\">The options object from the addListener call.</div></li>\n</ul></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<b><code>this</code></b> reference) in which the handler function is executed. <b>Defaults to the Element</b>.</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration properties.\nThis may contain any of the following properties:<ul>\n<li>scope : Object<div class=\"sub-desc\">The scope (<b><code>this</code></b> reference) in which the handler function is executed. <b>Defaults to the Element</b>.</div></li>\n<li>delegate : String<div class=\"sub-desc\">A simple selector to filter the target or look for a descendant of the target</div></li>\n<li>stopEvent : Boolean<div class=\"sub-desc\">True to stop the event. That is stop propagation, and prevent the default action.</div></li>\n<li>preventDefault : Boolean<div class=\"sub-desc\">True to prevent the default action</div></li>\n<li>stopPropagation : Boolean<div class=\"sub-desc\">True to prevent event propagation</div></li>\n<li>normalized : Boolean<div class=\"sub-desc\">False to pass a browser event to the handler function instead of an Ext.EventObject</div></li>\n<li>delay : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after te event fires.</div></li>\n<li>single : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li>buffer : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li>target : Element<div class=\"sub-desc\">Only call the handler if the event was fired on the target Element, <i>not</i> if the event was bubbled up from a child node.</div></li>\n</ul><br></p>\n\n<p>See <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a> for examples of how to use these options.</p>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 284,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-addListener",
      "shortDoc": "Appends an event handler to an element.  The shorthand version on is equivalent.  Typically you will\nuse Ext.core.Ele..."
    },
    {
      "tagname": "method",
      "name": "getId",
      "member": "Ext.EventManager",
      "doc": "<p>Get the id of the element. If one has not been assigned, automatically assign it.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "element",
          "doc": "<p>The element to get the id for.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>id</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 170,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-getId",
      "shortDoc": "<p>Get the id of the element. If one has not been assigned, automatically assign it.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getKeyEvent",
      "member": "Ext.EventManager",
      "doc": "<p>Indicates which event to use for getting key presses.</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>The appropriate event name.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 827,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-getKeyEvent",
      "shortDoc": "<p>Indicates which event to use for getting key presses.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPageX",
      "member": "Ext.EventManager",
      "doc": "<p>Gets the x coordinate from the event</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "event",
          "doc": "<p>The event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The x coordinate</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 649,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-getPageX",
      "shortDoc": "<p>Gets the x coordinate from the event</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPageXY",
      "member": "Ext.EventManager",
      "doc": "<p>Gets the x &amp; ycoordinate from the event</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "event",
          "doc": "<p>The event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The x/y coordinate</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 667,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-getPageXY",
      "shortDoc": "<p>Gets the x &amp; ycoordinate from the event</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPageY",
      "member": "Ext.EventManager",
      "doc": "<p>Gets the y coordinate from the event</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "event",
          "doc": "<p>The event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The y coordinate</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 658,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-getPageY",
      "shortDoc": "<p>Gets the y coordinate from the event</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRelatedTarget",
      "member": "Ext.EventManager",
      "doc": "<p>Gets the related target from the event.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "event",
          "doc": "<p>The event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "HTMLElement",
        "doc": "<p>The related target.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 631,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-getRelatedTarget",
      "shortDoc": "<p>Gets the related target from the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getTarget",
      "member": "Ext.EventManager",
      "doc": "<p>Gets the target of the event.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "event",
          "doc": "<p>The event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "HTMLElement",
        "doc": "<p>target</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 687,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-getTarget",
      "shortDoc": "<p>Gets the target of the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "on",
      "member": "Ext.EventManager",
      "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">Ext.EventManager.addListener</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 852,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-on",
      "shortDoc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">Ext.EventManager.addListener</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "onDocumentReady",
      "member": "Ext.EventManager",
      "doc": "<p>Adds a listener to be notified when the document is ready (before onload and before images are loaded). Can be\naccessed shorthanded as Ext.onReady().</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The method the event invokes.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function executes. Defaults to the browser window.</p>\n",
          "optional": true
        },
        {
          "type": "boolean",
          "name": "options",
          "doc": "<p>(optional) Options object as passed to <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a>.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 129,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-onDocumentReady",
      "shortDoc": "Adds a listener to be notified when the document is ready (before onload and before images are loaded). Can be\naccess..."
    },
    {
      "tagname": "method",
      "name": "onWindowResize",
      "member": "Ext.EventManager",
      "doc": "<p>Adds a listener to be notified when the browser window is resized and provides resize event buffering (100 milliseconds),\npasses new viewport width and height to handlers.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The handler function the window resize event invokes.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope (<code>this</code> reference) in which the handler function executes. Defaults to the browser window.</p>\n",
          "optional": false
        },
        {
          "type": "boolean",
          "name": "options",
          "doc": "<p>Options object as passed to <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 725,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-onWindowResize",
      "shortDoc": "Adds a listener to be notified when the browser window is resized and provides resize event buffering (100 millisecon..."
    },
    {
      "tagname": "method",
      "name": "preventDefault",
      "member": "Ext.EventManager",
      "doc": "<p>Prevents the browsers default handling of the event.</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "The",
          "doc": "<p>event to prevent the default</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 609,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-preventDefault",
      "shortDoc": "<p>Prevents the browsers default handling of the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "purgeElement",
      "member": "Ext.EventManager",
      "doc": "<p>Recursively removes all previous added listeners from an element and its children. Typically you will use <a href=\"#/api/Ext.core.Element-method-purgeAllListeners\" rel=\"Ext.core.Element-method-purgeAllListeners\" class=\"docClass\">Ext.core.Element.purgeAllListeners</a>\ndirectly on an Element in favor of calling this version.</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "el",
          "doc": "<p>The id or html element from which to remove all event handlers.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>(optional) The name of the event.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 452,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-purgeElement",
      "shortDoc": "Recursively removes all previous added listeners from an element and its children. Typically you will use Ext.core.El..."
    },
    {
      "tagname": "method",
      "name": "removeAll",
      "member": "Ext.EventManager",
      "doc": "<p>Removes all event handers from an element.  Typically you will use <a href=\"#/api/Ext.core.Element-method-removeAllListeners\" rel=\"Ext.core.Element-method-removeAllListeners\" class=\"docClass\">Ext.core.Element.removeAllListeners</a>\ndirectly on an Element in favor of calling this version.</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "el",
          "doc": "<p>The id or html element from which to remove all event handlers.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 431,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-removeAll",
      "shortDoc": "Removes all event handers from an element.  Typically you will use Ext.core.Element.removeAllListeners\ndirectly on an..."
    },
    {
      "tagname": "method",
      "name": "removeListener",
      "member": "Ext.EventManager",
      "doc": "<p>Removes an event handler from an element.  The shorthand version <a href=\"#/api/Ext.EventManager-method-un\" rel=\"Ext.EventManager-method-un\" class=\"docClass\">un</a> is equivalent.  Typically\nyou will use <a href=\"#/api/Ext.core.Element-method-removeListener\" rel=\"Ext.core.Element-method-removeListener\" class=\"docClass\">Ext.core.Element.removeListener</a> directly on an Element in favor of calling this version.</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "el",
          "doc": "<p>The id or html element from which to remove the listener.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The handler function to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>If a scope (<b><code>this</code></b> reference) was specified when the listener was added,\nthen this must refer to the same object.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 371,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-removeListener",
      "shortDoc": "Removes an event handler from an element.  The shorthand version un is equivalent.  Typically\nyou will use Ext.core.E..."
    },
    {
      "tagname": "method",
      "name": "removeResizeListener",
      "member": "Ext.EventManager",
      "doc": "<p>Removes the passed window resize listener.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The method the event invokes</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope of handler</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 758,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-removeResizeListener",
      "shortDoc": "<p>Removes the passed window resize listener.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeUnloadListener",
      "member": "Ext.EventManager",
      "doc": "<p>Removes the passed window unload listener.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The method the event invokes</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope of handler</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 806,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-removeUnloadListener",
      "shortDoc": "<p>Removes the passed window unload listener.</p>\n"
    },
    {
      "tagname": "method",
      "name": "stopEvent",
      "member": "Ext.EventManager",
      "doc": "<p>Stop the event (preventDefault and stopPropagation)</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "The",
          "doc": "<p>event to stop</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 587,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-stopEvent",
      "shortDoc": "<p>Stop the event (preventDefault and stopPropagation)</p>\n"
    },
    {
      "tagname": "method",
      "name": "stopPropagation",
      "member": "Ext.EventManager",
      "doc": "<p>Cancels bubbling of the event.</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "The",
          "doc": "<p>event to stop bubbling.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 596,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-stopPropagation",
      "shortDoc": "<p>Cancels bubbling of the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.EventManager",
      "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-removeListener\" rel=\"Ext.EventManager-method-removeListener\" class=\"docClass\">Ext.EventManager.removeListener</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 859,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-EventManager-method-un",
      "shortDoc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-removeListener\" rel=\"Ext.EventManager-method-removeListener\" class=\"docClass\">Ext.EventManager.removeListener</a></p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
  "linenr": 1,
  "html_filename": "EventManager.html",
  "href": "EventManager.html#Ext-EventManager",
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