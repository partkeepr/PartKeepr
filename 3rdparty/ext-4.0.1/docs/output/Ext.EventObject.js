Ext.data.JsonP.Ext_EventObject({
  "tagname": "class",
  "name": "Ext.EventObject",
  "doc": "<p>Just as <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> wraps around a native DOM node, <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a>\nwraps the browser's native event-object normalizing cross-browser differences,\nsuch as which mouse button is clicked, keys pressed, mechanisms to stop\nevent-propagation along with a method to prevent default actions from taking place.</p>\n\n<p>For example:</p>\n\n<pre><code>function handleClick(e, t){ // e is not a standard event object, it is a <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a>\n    e.preventDefault();\n    var target = e.getTarget(); // same as t (the target HTMLElement)\n    ...\n}\n\nvar myDiv = <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>(\"myDiv\");  // get reference to an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>\nmyDiv.on(         // 'on' is shorthand for addListener\n    \"click\",      // perform an action on click of myDiv\n    handleClick   // reference to the action handler\n);\n\n// other methods to do the same:\nExt.EventManager.on(\"myDiv\", 'click', handleClick);\nExt.EventManager.addListener(\"myDiv\", 'click', handleClick);\n</code></pre>\n",
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
      "name": "getCharCode",
      "member": "Ext.EventObject",
      "doc": "<p>Gets the character code for the event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 319,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getCharCode",
      "shortDoc": "<p>Gets the character code for the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getKey",
      "member": "Ext.EventObject",
      "doc": "<p>Returns a normalized keyCode for the event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>The key code</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 327,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getKey",
      "shortDoc": "<p>Returns a normalized keyCode for the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPageX",
      "member": "Ext.EventObject",
      "doc": "<p>Gets the x coordinate of the event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>@deprecated 4.0 Replaced by <a href=\"#/api/Ext.EventObject-method-getX\" rel=\"Ext.EventObject-method-getX\" class=\"docClass\">getX</a></p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 346,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getPageX",
      "shortDoc": "<p>Gets the x coordinate of the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPageY",
      "member": "Ext.EventObject",
      "doc": "<p>Gets the y coordinate of the event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>@deprecated 4.0 Replaced by <a href=\"#/api/Ext.EventObject-method-getY\" rel=\"Ext.EventObject-method-getY\" class=\"docClass\">getY</a></p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 355,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getPageY",
      "shortDoc": "<p>Gets the y coordinate of the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPoint",
      "member": "Ext.EventObject",
      "doc": "<p>Returns a point object that consists of the object coordinates.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.util.Point",
        "doc": "<p>point</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 501,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getPoint",
      "shortDoc": "<p>Returns a point object that consists of the object coordinates.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRelatedTarget",
      "member": "Ext.EventObject",
      "doc": "<p>Gets the related target.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>(optional) A simple selector to filter the target or look for an ancestor of the target</p>\n",
          "optional": true
        },
        {
          "type": "Number/Mixed",
          "name": "maxDepth",
          "doc": "<p>(optional) The max depth to search as a number or element (defaults to 10 || document.body)</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "returnEl",
          "doc": "<p>(optional) True to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> object instead of DOM node</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLElement",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 406,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getRelatedTarget",
      "shortDoc": "<p>Gets the related target.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getTarget",
      "member": "Ext.EventObject",
      "doc": "<p>Gets the target for the event.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>(optional) A simple selector to filter the target or look for an ancestor of the target</p>\n",
          "optional": true
        },
        {
          "type": "Number/Mixed",
          "name": "maxDepth",
          "doc": "<p>(optional) The max depth to search as a number or element (defaults to 10 || document.body)</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "returnEl",
          "doc": "<p>(optional) True to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> object instead of DOM node</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLelement",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 392,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getTarget",
      "shortDoc": "<p>Gets the target for the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getWheelDelta",
      "member": "Ext.EventObject",
      "doc": "<p>Normalizes mouse wheel delta across browsers</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>The delta</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 420,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getWheelDelta",
      "shortDoc": "<p>Normalizes mouse wheel delta across browsers</p>\n"
    },
    {
      "tagname": "method",
      "name": "getX",
      "member": "Ext.EventObject",
      "doc": "<p>Gets the x coordinate of the event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 364,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getX",
      "shortDoc": "<p>Gets the x coordinate of the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getXY",
      "member": "Ext.EventObject",
      "doc": "<p>Gets the page coordinates of the event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>The xy values like [x, y]</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 380,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getXY",
      "shortDoc": "<p>Gets the page coordinates of the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getY",
      "member": "Ext.EventObject",
      "doc": "<p>Gets the y coordinate of the event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 372,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-getY",
      "shortDoc": "<p>Gets the y coordinate of the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "hasModifier",
      "member": "Ext.EventObject",
      "doc": "<p>Returns true if the control, meta, shift or alt key was pressed during this event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 510,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-hasModifier",
      "shortDoc": "<p>Returns true if the control, meta, shift or alt key was pressed during this event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "injectEvent",
      "member": "Ext.EventObject",
      "doc": "<p>Injects a DOM event using the data in this object and (optionally) a new target.\nThis is a low-level technique and not likely to be used by application code. The\ncurrently supported event types are:</p>\n\n<p><b>HTMLEvents</b></p>\n\n\n<ul>\n<li>load</li>\n<li>unload</li>\n<li>select</li>\n<li>change</li>\n<li>submit</li>\n<li>reset</li>\n<li>resize</li>\n<li>scroll</li>\n</ul>\n\n\n<p><b>MouseEvents</b></p>\n\n\n<ul>\n<li>click</li>\n<li>dblclick</li>\n<li>mousedown</li>\n<li>mouseup</li>\n<li>mouseover</li>\n<li>mousemove</li>\n<li>mouseout</li>\n</ul>\n\n\n<p><b>UIEvents</b></p>\n\n\n<ul>\n<li>focusin</li>\n<li>focusout</li>\n<li>activate</li>\n<li>focus</li>\n<li>blur</li>\n</ul>\n\n",
      "params": [
        {
          "type": "Element/HTMLElement",
          "name": "target",
          "doc": "<p>If specified, the target for the event. This\nis likely to be used when relaying a DOM event. If not specified, <a href=\"#/api/Ext.EventObject-method-getTarget\" rel=\"Ext.EventObject-method-getTarget\" class=\"docClass\">getTarget</a>\nis used to determine the target.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 518,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-injectEvent",
      "shortDoc": "Injects a DOM event using the data in this object and (optionally) a new target.\nThis is a low-level technique and no..."
    },
    {
      "tagname": "method",
      "name": "isNavKeyPress",
      "member": "Ext.EventObject",
      "doc": "<p>Checks if the key pressed was a \"navigation\" key</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the press is a navigation keypress</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 474,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-isNavKeyPress",
      "shortDoc": "<p>Checks if the key pressed was a \"navigation\" key</p>\n"
    },
    {
      "tagname": "method",
      "name": "isSpecialKey",
      "member": "Ext.EventObject",
      "doc": "<p>Checks if the key pressed was a \"special\" key</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the press is a special keypress</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 488,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-isSpecialKey",
      "shortDoc": "<p>Checks if the key pressed was a \"special\" key</p>\n"
    },
    {
      "tagname": "method",
      "name": "preventDefault",
      "member": "Ext.EventObject",
      "doc": "<p>Prevents the browsers default handling of the event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 296,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-preventDefault",
      "shortDoc": "<p>Prevents the browsers default handling of the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "stopEvent",
      "member": "Ext.EventObject",
      "doc": "<p>Stop the event (preventDefault and stopPropagation)</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 288,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-stopEvent",
      "shortDoc": "<p>Stop the event (preventDefault and stopPropagation)</p>\n"
    },
    {
      "tagname": "method",
      "name": "stopPropagation",
      "member": "Ext.EventObject",
      "doc": "<p>Cancels bubbling of the event.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 305,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-stopPropagation",
      "shortDoc": "<p>Cancels bubbling of the event.</p>\n"
    },
    {
      "tagname": "method",
      "name": "within",
      "member": "Ext.EventObject",
      "doc": "<p>Returns true if the target of this event is a child of el.  Unless the allowEl parameter is set, it will return false if if the target is el.\nExample usage:</p>\n\n<pre><code>// Handle click on any child of an element\nExt.getBody().on('click', function(e){\n    if(e.within('some-el')){\n        alert('Clicked on a child of some-el!');\n    }\n});\n\n// Handle click directly on an element, ignoring clicks on child nodes\nExt.getBody().on('click', function(e,t){\n    if((t.id == 'some-el') && !e.within(t, true)){\n        alert('Clicked directly on some-el!');\n    }\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The id, DOM element or <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> to check</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "related",
          "doc": "<p>(optional) true to test if the related target is within el instead of the target</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "allowEl",
          "doc": "<p>{optional} true to also check if the passed element is the target or related target</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 436,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-method-within",
      "shortDoc": "Returns true if the target of this event is a child of el.  Unless the allowEl parameter is set, it will return false..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "A",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 99,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-A"
    },
    {
      "tagname": "property",
      "name": "ALT",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 47,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-ALT"
    },
    {
      "tagname": "property",
      "name": "B",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 101,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-B"
    },
    {
      "tagname": "property",
      "name": "BACKSPACE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 33,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-BACKSPACE"
    },
    {
      "tagname": "property",
      "name": "C",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 103,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-C"
    },
    {
      "tagname": "property",
      "name": "CAPS_LOCK",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 51,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-CAPS_LOCK"
    },
    {
      "tagname": "property",
      "name": "CONTEXT_MENU",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 151,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-CONTEXT_MENU"
    },
    {
      "tagname": "property",
      "name": "CTRL",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 45,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-CTRL"
    },
    {
      "tagname": "property",
      "name": "D",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 105,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-D"
    },
    {
      "tagname": "property",
      "name": "DELETE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 77,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-DELETE"
    },
    {
      "tagname": "property",
      "name": "DOWN",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 71,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-DOWN"
    },
    {
      "tagname": "property",
      "name": "E",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 107,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-E"
    },
    {
      "tagname": "property",
      "name": "EIGHT",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 95,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-EIGHT"
    },
    {
      "tagname": "property",
      "name": "END",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 61,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-END"
    },
    {
      "tagname": "property",
      "name": "ENTER",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 39,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-ENTER"
    },
    {
      "tagname": "property",
      "name": "ESC",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 53,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-ESC"
    },
    {
      "tagname": "property",
      "name": "F",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 109,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F"
    },
    {
      "tagname": "property",
      "name": "F1",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 183,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F1"
    },
    {
      "tagname": "property",
      "name": "F10",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 201,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F10"
    },
    {
      "tagname": "property",
      "name": "F11",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 203,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F11"
    },
    {
      "tagname": "property",
      "name": "F12",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 205,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F12"
    },
    {
      "tagname": "property",
      "name": "F2",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 185,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F2"
    },
    {
      "tagname": "property",
      "name": "F3",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 187,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F3"
    },
    {
      "tagname": "property",
      "name": "F4",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 189,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F4"
    },
    {
      "tagname": "property",
      "name": "F5",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 191,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F5"
    },
    {
      "tagname": "property",
      "name": "F6",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 193,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F6"
    },
    {
      "tagname": "property",
      "name": "F7",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 195,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F7"
    },
    {
      "tagname": "property",
      "name": "F8",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 197,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F8"
    },
    {
      "tagname": "property",
      "name": "F9",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 199,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-F9"
    },
    {
      "tagname": "property",
      "name": "FIVE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 89,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-FIVE"
    },
    {
      "tagname": "property",
      "name": "FOUR",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 87,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-FOUR"
    },
    {
      "tagname": "property",
      "name": "G",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 111,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-G"
    },
    {
      "tagname": "property",
      "name": "H",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 113,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-H"
    },
    {
      "tagname": "property",
      "name": "HOME",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 63,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-HOME"
    },
    {
      "tagname": "property",
      "name": "I",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 115,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-I"
    },
    {
      "tagname": "property",
      "name": "INSERT",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 75,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-INSERT"
    },
    {
      "tagname": "property",
      "name": "J",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 117,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-J"
    },
    {
      "tagname": "property",
      "name": "K",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 119,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-K"
    },
    {
      "tagname": "property",
      "name": "L",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 121,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-L"
    },
    {
      "tagname": "property",
      "name": "LEFT",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 65,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-LEFT"
    },
    {
      "tagname": "property",
      "name": "M",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 123,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-M"
    },
    {
      "tagname": "property",
      "name": "N",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 125,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-N"
    },
    {
      "tagname": "property",
      "name": "NINE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 97,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NINE"
    },
    {
      "tagname": "property",
      "name": "NUM_CENTER",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 37,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_CENTER"
    },
    {
      "tagname": "property",
      "name": "NUM_DIVISION",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 181,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_DIVISION"
    },
    {
      "tagname": "property",
      "name": "NUM_EIGHT",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 169,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_EIGHT"
    },
    {
      "tagname": "property",
      "name": "NUM_FIVE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 163,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_FIVE"
    },
    {
      "tagname": "property",
      "name": "NUM_FOUR",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 161,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_FOUR"
    },
    {
      "tagname": "property",
      "name": "NUM_MINUS",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 177,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_MINUS"
    },
    {
      "tagname": "property",
      "name": "NUM_MULTIPLY",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 173,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_MULTIPLY"
    },
    {
      "tagname": "property",
      "name": "NUM_NINE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 171,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_NINE"
    },
    {
      "tagname": "property",
      "name": "NUM_ONE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 155,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_ONE"
    },
    {
      "tagname": "property",
      "name": "NUM_PERIOD",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 179,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_PERIOD"
    },
    {
      "tagname": "property",
      "name": "NUM_PLUS",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 175,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_PLUS"
    },
    {
      "tagname": "property",
      "name": "NUM_SEVEN",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 167,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_SEVEN"
    },
    {
      "tagname": "property",
      "name": "NUM_SIX",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 165,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_SIX"
    },
    {
      "tagname": "property",
      "name": "NUM_THREE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 159,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_THREE"
    },
    {
      "tagname": "property",
      "name": "NUM_TWO",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 157,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_TWO"
    },
    {
      "tagname": "property",
      "name": "NUM_ZERO",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 153,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-NUM_ZERO"
    },
    {
      "tagname": "property",
      "name": "O",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 127,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-O"
    },
    {
      "tagname": "property",
      "name": "ONE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 81,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-ONE"
    },
    {
      "tagname": "property",
      "name": "P",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 129,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-P"
    },
    {
      "tagname": "property",
      "name": "PAGE_DOWN",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 59,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-PAGE_DOWN"
    },
    {
      "tagname": "property",
      "name": "PAGE_UP",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 57,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-PAGE_UP"
    },
    {
      "tagname": "property",
      "name": "PAUSE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 49,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-PAUSE"
    },
    {
      "tagname": "property",
      "name": "PRINT_SCREEN",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 73,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-PRINT_SCREEN"
    },
    {
      "tagname": "property",
      "name": "Q",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 131,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-Q"
    },
    {
      "tagname": "property",
      "name": "R",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 133,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-R"
    },
    {
      "tagname": "property",
      "name": "RETURN",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 41,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-RETURN"
    },
    {
      "tagname": "property",
      "name": "RIGHT",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 69,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-RIGHT"
    },
    {
      "tagname": "property",
      "name": "S",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 135,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-S"
    },
    {
      "tagname": "property",
      "name": "SEVEN",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 93,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-SEVEN"
    },
    {
      "tagname": "property",
      "name": "SHIFT",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 43,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-SHIFT"
    },
    {
      "tagname": "property",
      "name": "SIX",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 91,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-SIX"
    },
    {
      "tagname": "property",
      "name": "SPACE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 55,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-SPACE"
    },
    {
      "tagname": "property",
      "name": "T",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 137,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-T"
    },
    {
      "tagname": "property",
      "name": "TAB",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 35,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-TAB"
    },
    {
      "tagname": "property",
      "name": "THREE",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 85,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-THREE"
    },
    {
      "tagname": "property",
      "name": "TWO",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 83,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-TWO"
    },
    {
      "tagname": "property",
      "name": "U",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 139,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-U"
    },
    {
      "tagname": "property",
      "name": "UP",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 67,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-UP"
    },
    {
      "tagname": "property",
      "name": "V",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 141,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-V"
    },
    {
      "tagname": "property",
      "name": "W",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 143,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-W"
    },
    {
      "tagname": "property",
      "name": "X",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 145,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-X"
    },
    {
      "tagname": "property",
      "name": "Y",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 147,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-Y"
    },
    {
      "tagname": "property",
      "name": "Z",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 149,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-Z"
    },
    {
      "tagname": "property",
      "name": "ZERO",
      "member": "Ext.EventObject",
      "type": "Number",
      "doc": "<p>Key constant</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
      "linenr": 79,
      "html_filename": "EventObject.html",
      "href": "EventObject.html#Ext-EventObject-property-ZERO"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventObject.js",
  "linenr": 1,
  "html_filename": "EventObject.html",
  "href": "EventObject.html#Ext-EventObject",
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