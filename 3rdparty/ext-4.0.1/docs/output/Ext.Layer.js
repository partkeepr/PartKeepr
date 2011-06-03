Ext.data.JsonP.Ext_Layer({
  "tagname": "class",
  "name": "Ext.Layer",
  "doc": "<p>An extended <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> object that supports a shadow and shim, constrain to viewport and\nautomatic maintaining of shadow/shim positions.</p>\n",
  "extends": "Ext.core.Element",
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
    {
      "tagname": "cfg",
      "name": "cls",
      "member": "Ext.Layer",
      "type": "String",
      "doc": "<p>CSS class to add to the element</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-cfg-cls"
    },
    {
      "tagname": "cfg",
      "name": "constrain",
      "member": "Ext.Layer",
      "type": "Boolean",
      "doc": "<p>False to disable constrain to viewport (defaults to true)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-cfg-constrain"
    },
    {
      "tagname": "cfg",
      "name": "dh",
      "member": "Ext.Layer",
      "type": "Object",
      "doc": "<p>DomHelper object config to create element with (defaults to {tag: 'div', cls: 'x-layer'}).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-cfg-dh"
    },
    {
      "tagname": "cfg",
      "name": "hideMode",
      "member": "Ext.Layer",
      "type": "String",
      "doc": "<p>A String which specifies how this Layer will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-cfg-hideMode",
      "shortDoc": "A String which specifies how this Layer will be hidden.\nValues may be\n'display' : The Component will be hidden using ..."
    },
    {
      "tagname": "cfg",
      "name": "shadow",
      "member": "Ext.Layer",
      "type": "String/Boolean",
      "doc": "<p>True to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the\nshadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. False to disable the shadow. (defaults to false)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-cfg-shadow",
      "shortDoc": "True to automatically create an Ext.Shadow, or a string indicating the\nshadow's display Ext.Shadow.mode. False to dis..."
    },
    {
      "tagname": "cfg",
      "name": "shadowOffset",
      "member": "Ext.Layer",
      "type": "Number",
      "doc": "<p>Number of pixels to offset the shadow (defaults to 4)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-cfg-shadowOffset"
    },
    {
      "tagname": "cfg",
      "name": "shim",
      "member": "Ext.Layer",
      "type": "Boolean",
      "doc": "<p>False to disable the iframe shim in browsers which need one (defaults to true)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-cfg-shim"
    },
    {
      "tagname": "cfg",
      "name": "useDisplay",
      "member": "Ext.Layer",
      "type": "Boolean",
      "doc": "<p>Defaults to use css offsets to hide the Layer. Specify <tt>true</tt>\nto use css style <tt>'display:none;'</tt> to hide the Layer.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-cfg-useDisplay"
    },
    {
      "tagname": "cfg",
      "name": "visibilityCls",
      "member": "Ext.Layer",
      "type": "String",
      "doc": "<p>The CSS class name to add in order to hide this Layer if this layer\nis configured with <code><a href=\"#/api/Ext.Layer-cfg-hideMode\" rel=\"Ext.Layer-cfg-hideMode\" class=\"docClass\">hideMode</a>: 'asclass'</code></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-cfg-visibilityCls"
    },
    {
      "tagname": "cfg",
      "name": "zindex",
      "member": "Ext.Layer",
      "type": "Number",
      "doc": "<p>Starting z-index (defaults to 11000)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-cfg-zindex"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Layer",
      "member": "Ext.Layer",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>An object with config options.</p>\n",
          "optional": false
        },
        {
          "type": "String/HTMLElement",
          "name": "existingEl",
          "doc": "<p>(optional) Uses an existing DOM element. If the element is not found it creates it.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 1,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "addCls",
      "member": "Ext.core.Element",
      "doc": "<p>Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "className",
          "doc": "<p>The CSS classes to add separated by space, or an array of classes</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 64,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-addCls",
      "shortDoc": "<p>Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addClsOnClick",
      "member": "Ext.core.Element",
      "doc": "<p>Sets up event handlers to add and remove a css class when the mouse is down and then up on this element (a click effect)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "className",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 885,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-addClsOnClick",
      "shortDoc": "Sets up event handlers to add and remove a css class when the mouse is down and then up on this element (a click effe..."
    },
    {
      "tagname": "method",
      "name": "addClsOnFocus",
      "member": "Ext.core.Element",
      "doc": "<p>Sets up event handlers to add and remove a css class when this element has the focus</p>\n",
      "params": [
        {
          "type": "String",
          "name": "className",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 868,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-addClsOnFocus",
      "shortDoc": "<p>Sets up event handlers to add and remove a css class when this element has the focus</p>\n"
    },
    {
      "tagname": "method",
      "name": "addClsOnOver",
      "member": "Ext.core.Element",
      "doc": "<p>Sets up event handlers to add and remove a css class when the mouse is over this element</p>\n",
      "params": [
        {
          "type": "String",
          "name": "className",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 850,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-addClsOnOver",
      "shortDoc": "<p>Sets up event handlers to add and remove a css class when the mouse is over this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "addKeyListener",
      "member": "Ext.core.Element",
      "doc": "<p>Convenience method for constructing a KeyMap</p>\n",
      "params": [
        {
          "type": "Number/Array/Object/String",
          "name": "key",
          "doc": "<p>Either a string with the keys to listen for, the numeric key code, array of key codes or an object with the following options:\n<code>{key: (number or array), shift: (true/false), ctrl: (true/false), alt: (true/false)}</code></p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the specified function is executed. Defaults to this Element.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.util.KeyMap",
        "doc": "<p>The KeyMap created</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.keys.js",
      "linenr": 5,
      "html_filename": "Element.keys.html",
      "href": "Element.keys.html#Ext-core-Element-method-addKeyListener",
      "shortDoc": "<p>Convenience method for constructing a KeyMap</p>\n"
    },
    {
      "tagname": "method",
      "name": "addKeyMap",
      "member": "Ext.core.Element",
      "doc": "<p>Creates a KeyMap for this element</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The KeyMap config. See <a href=\"#/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a> for more details</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.KeyMap",
        "doc": "<p>The KeyMap created</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.keys.js",
      "linenr": 34,
      "html_filename": "Element.keys.html",
      "href": "Element.keys.html#Ext-core-Element-method-addKeyMap",
      "shortDoc": "<p>Creates a KeyMap for this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "addListener",
      "member": "Ext.core.Element",
      "doc": "<p>Appends an event handler to this element.  The shorthand version <a href=\"#/api/Ext.Layer-method-on\" rel=\"Ext.Layer-method-on\" class=\"docClass\">on</a> is equivalent.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of event to handle.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The handler function the event invokes. This function is passed\nthe following parameters:<ul>\n<li><b>evt</b> : EventObject<div class=\"sub-desc\">The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">EventObject</a> describing the event.</div></li>\n<li><b>el</b> : HtmlElement<div class=\"sub-desc\">The DOM element which was the target of the event.\nNote that this may be filtered by using the <tt>delegate</tt> option.</div></li>\n<li><b>o</b> : Object<div class=\"sub-desc\">The options object from the addListener call.</div></li>\n</ul></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to this Element.</b>.</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration properties.\nThis may contain any of the following properties:<ul>\n<li><b>scope</b> Object : <div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to this Element.</b></div></li>\n<li><b>delegate</b> String: <div class=\"sub-desc\">A simple selector to filter the target or look for a descendant of the target. See below for additional details.</div></li>\n<li><b>stopEvent</b> Boolean: <div class=\"sub-desc\">True to stop the event. That is stop propagation, and prevent the default action.</div></li>\n<li><b>preventDefault</b> Boolean: <div class=\"sub-desc\">True to prevent the default action</div></li>\n<li><b>stopPropagation</b> Boolean: <div class=\"sub-desc\">True to prevent event propagation</div></li>\n<li><b>normalized</b> Boolean: <div class=\"sub-desc\">False to pass a browser event to the handler function instead of an Ext.EventObject</div></li>\n<li><b>target</b> Ext.core.Element: <div class=\"sub-desc\">Only call the handler if the event was fired on the target Element, <i>not</i> if the event was bubbled up from a child node.</div></li>\n<li><b>delay</b> Number: <div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> Boolean: <div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> Number: <div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nIn the following examples, the shorthand form <a href=\"#/api/Ext.Layer-method-on\" rel=\"Ext.Layer-method-on\" class=\"docClass\">on</a> is used rather than the more verbose\naddListener.  The two are equivalent.  Using the options argument, it is possible to combine different\ntypes of listeners:<br>\n<br>\nA delayed, one-time listener that auto stops the event and adds a custom argument (forumId) to the\noptions object. The options object is available as the third parameter in the handler function.<div style=\"margin: 5px 20px 20px;\">\nCode:\n<pre><code>el.on('click', this.onClick, this, {\n    single: true,\n    delay: 100,\n    stopEvent : true,\n    forumId: 4\n});</code></pre></p>\n\n\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple handlers.</p>\n\n\n<p>\nCode:\n<pre><code>el.on({\n    'click' : {\n        fn: this.onClick,\n        scope: this,\n        delay: 100\n    },\n    'mouseover' : {\n        fn: this.onMouseOver,\n        scope: this\n    },\n    'mouseout' : {\n        fn: this.onMouseOut,\n        scope: this\n    }\n});</code></pre>\n<p>\nOr a shorthand syntax:<br>\nCode:\n<pre><code></p>\nel.on({\n    'click' : this.onClick,\n    'mouseover' : this.onMouseOver,\n    'mouseout' : this.onMouseOut,\n    scope: this\n});\n</code></pre></p>\n\n\n<p><b>delegate</b></p>\n\n\n<p>This is a configuration option that you can pass along when registering a handler for\nan event to assist with event delegation. Event delegation is a technique that is used to\nreduce memory consumption and prevent exposure to memory-leaks. By registering an event\nfor a container element as opposed to each element within a container. By setting this\nconfiguration option to a simple selector, the target element will be filtered to look for\na descendant of the target.\nFor example:\n<pre><code>// using this markup:\n&lt;div id='elId'>\n    &lt;p id='p1'>paragraph one&lt;/p>\n    &lt;p id='p2' class='clickable'>paragraph two&lt;/p>\n    &lt;p id='p3'>paragraph three&lt;/p>\n&lt;/div>\n// utilize event delegation to registering just one handler on the container element:\nel = Ext.get('elId');\nel.on(\n    'click',\n    function(e,t) {\n        // handle click\n        console.info(t.id); // 'p2'\n    },\n    this,\n    {\n        // filter the target element to be a descendant with the class 'clickable'\n        delegate: '.clickable'\n    }\n);\n</code></pre></p>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 450,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-addListener",
      "shortDoc": "<p>Appends an event handler to this element.  The shorthand version <a href=\"#/api/Ext.Layer-method-on\" rel=\"Ext.Layer-method-on\" class=\"docClass\">on</a> is equivalent.</p>\n"
    },
    {
      "tagname": "method",
      "name": "adjustWidth",
      "member": "Ext.core.Element",
      "doc": "<p>TODO: Look at this</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "width",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 38,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-adjustWidth",
      "shortDoc": "<p>TODO: Look at this</p>\n"
    },
    {
      "tagname": "method",
      "name": "alignTo",
      "member": "Ext.core.Element",
      "doc": "<p>Aligns this element with another element relative to the specified anchor points. If the other element is the\ndocument it aligns it to the viewport.\nThe position parameter is optional, and can be specified in any one of the following formats:</p>\n\n<ul>\n  <li><b>Blank</b>: Defaults to aligning the element's top-left corner to the target's bottom-left corner (\"tl-bl\").</li>\n  <li><b>One anchor (deprecated)</b>: The passed anchor position is used as the target element's anchor point.\n      The element being aligned will position its top-left corner (tl) to that point.  <i>This method has been\n      deprecated in favor of the newer two anchor syntax below</i>.</li>\n  <li><b>Two anchors</b>: If two values from the table below are passed separated by a dash, the first value is used as the\n      element's anchor point, and the second value is used as the target's anchor point.</li>\n</ul>\n\n\n<p>In addition to the anchor points, the position parameter also supports the \"?\" character.  If \"?\" is passed at the end of\nthe position string, the element will attempt to align as specified, but the position will be adjusted to constrain to\nthe viewport if necessary.  Note that the element being aligned might be swapped to align to a different position than\nthat specified in order to enforce the viewport constraints.\nFollowing are all of the supported anchor positions:</p>\n\n<pre>Value  Description\n-----  -----------------------------\ntl     The top left corner (default)\nt      The center of the top edge\ntr     The top right corner\nl      The center of the left edge\nc      In the center of the element\nr      The center of the right edge\nbl     The bottom left corner\nb      The center of the bottom edge\nbr     The bottom right corner\n</pre>\n\n\n<p>Example Usage:</p>\n\n<pre><code>// align el to other-el using the default positioning (\"tl-bl\", non-constrained)\nel.alignTo(\"other-el\");\n\n// align the top left corner of el with the top right corner of other-el (constrained to viewport)\nel.alignTo(\"other-el\", \"tr?\");\n\n// align the bottom right corner of el with the center left edge of other-el\nel.alignTo(\"other-el\", \"br-l?\");\n\n// align the center of el with the bottom left corner of other-el and\n// adjust the x position by -6 pixels (and the y position by 0)\nel.alignTo(\"other-el\", \"c-bl\", [-6, 0]);\n</code></pre>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "element",
          "doc": "<p>The element to align to.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "position",
          "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to.</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "offsets",
          "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
          "optional": true
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
      "linenr": 246,
      "html_filename": "Element.alignment.html",
      "href": "Element.alignment.html#Ext-core-Element-method-alignTo",
      "shortDoc": "Aligns this element with another element relative to the specified anchor points. If the other element is the\ndocumen..."
    },
    {
      "tagname": "method",
      "name": "anchorTo",
      "member": "Ext.core.Element",
      "doc": "<p>Anchors an element to another element and realigns it when the window is resized.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "element",
          "doc": "<p>The element to align to.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "position",
          "doc": "<p>The position to align to.</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "offsets",
          "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
          "optional": true
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) True for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        },
        {
          "type": "Boolean/Number",
          "name": "monitorScroll",
          "doc": "<p>(optional) True to monitor body scroll and reposition. If this parameter\nis a number, it is used as the buffer delay (defaults to 50ms).</p>\n",
          "optional": true
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>The function to call after the animation finishes</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
      "linenr": 47,
      "html_filename": "Element.alignment.html",
      "href": "Element.alignment.html#Ext-core-Element-method-anchorTo",
      "shortDoc": "<p>Anchors an element to another element and realigns it when the window is resized.</p>\n"
    },
    {
      "tagname": "method",
      "name": "appendChild",
      "member": "Ext.core.Element",
      "doc": "<p>Appends the passed element(s) to this element</p>\n",
      "params": [
        {
          "type": "String/HTMLElement/Array/Element/CompositeElement",
          "name": "el",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 5,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-appendChild",
      "shortDoc": "<p>Appends the passed element(s) to this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "appendTo",
      "member": "Ext.core.Element",
      "doc": "<p>Appends this element to the passed element</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The new parent element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 14,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-appendTo",
      "shortDoc": "<p>Appends this element to the passed element</p>\n"
    },
    {
      "tagname": "method",
      "name": "applyStyles",
      "member": "Ext.core.Element",
      "doc": "<p>More flexible version of <a href=\"#/api/Ext.Layer-method-setStyle\" rel=\"Ext.Layer-method-setStyle\" class=\"docClass\">setStyle</a> for setting style properties.</p>\n",
      "params": [
        {
          "type": "String/Object/Function",
          "name": "styles",
          "doc": "<p>A style specification string, e.g. \"width:100px\", or object in the form {width:\"100px\"}, or\na function which returns such a specification.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 696,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-applyStyles",
      "shortDoc": "<p>More flexible version of <a href=\"#/api/Ext.Layer-method-setStyle\" rel=\"Ext.Layer-method-setStyle\" class=\"docClass\">setStyle</a> for setting style properties.</p>\n"
    },
    {
      "tagname": "method",
      "name": "blur",
      "member": "Ext.core.Element",
      "doc": "<p>Tries to blur the element. Any exceptions are caught and ignored.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 429,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-blur",
      "shortDoc": "<p>Tries to blur the element. Any exceptions are caught and ignored.</p>\n"
    },
    {
      "tagname": "method",
      "name": "boxWrap",
      "member": "Ext.core.Element",
      "doc": "<p>Wraps the specified element with a special 9 element markup/CSS block that renders by default as\na gray container with a gradient background, rounded corners and a 4-way shadow.</p>\n\n\n<p>This special markup is used throughout <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> when box wrapping elements (<a href=\"#/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a>,\n<a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a> when <tt><a href=\"#/api/Ext.panel.Panel-cfg-frame\" rel=\"Ext.panel.Panel-cfg-frame\" class=\"docClass\">frame=true</a></tt>, <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>).  The markup\nis of this form:</p>\n\n\n<pre><code>    Ext.core.Element.boxMarkup =\n    &#39;&lt;div class=\"{0}-tl\">&lt;div class=\"{0}-tr\">&lt;div class=\"{0}-tc\">&lt;/div>&lt;/div>&lt;/div>\n     &lt;div class=\"{0}-ml\">&lt;div class=\"{0}-mr\">&lt;div class=\"{0}-mc\">&lt;/div>&lt;/div>&lt;/div>\n     &lt;div class=\"{0}-bl\">&lt;div class=\"{0}-br\">&lt;div class=\"{0}-bc\">&lt;/div>&lt;/div>&lt;/div>&#39;;\n</code></pre>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>    // Basic box wrap\n    Ext.get(\"foo\").boxWrap();\n\n    // You can also add a custom class and use CSS inheritance rules to customize the box look.\n    // 'x-box-blue' is a built-in alternative -- look at the related CSS definitions as an example\n    // for how to create a custom box wrap style.\n    Ext.get(\"foo\").boxWrap().addCls(\"x-box-blue\");\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "class",
          "doc": "<p>(optional) A base CSS class to apply to the containing wrapper element\n(defaults to <tt>'x-box'</tt>). Note that there are a number of CSS rules that are dependent on\nthis name to make the overall effect work, so if you supply an alternate base class, make sure you\nalso supply all of the necessary rules.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The outermost wrapping element of the created box structure.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 728,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-boxWrap",
      "shortDoc": "Wraps the specified element with a special 9 element markup/CSS block that renders by default as\na gray container wit..."
    },
    {
      "tagname": "method",
      "name": "center",
      "member": "Ext.core.Element",
      "doc": "<p>Centers the Element in either the viewport, or another Element.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "centerIn",
          "doc": "<p>(optional) The element in which to center the element.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
      "linenr": 375,
      "html_filename": "Element.alignment.html",
      "href": "Element.alignment.html#Ext-core-Element-method-center",
      "shortDoc": "<p>Centers the Element in either the viewport, or another Element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "child",
      "member": "Ext.core.Element",
      "doc": "<p>Selects a single <em>direct</em> child based on the passed CSS selector (the selector should not contain an id).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>The CSS selector</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "returnDom",
          "doc": "<p>(optional) True to return the DOM node instead of <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLElement/Ext.core.Element",
        "doc": "<p>The child <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (or DOM node if returnDom = true)</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 87,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-child",
      "shortDoc": "<p>Selects a single <em>direct</em> child based on the passed CSS selector (the selector should not contain an id).</p>\n"
    },
    {
      "tagname": "method",
      "name": "clean",
      "member": "Ext.core.Element",
      "doc": "<p>Removes Empty, or whitespace filled text nodes. Combines adjacent text nodes.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "forceReclean",
          "doc": "<p>(optional) By default the element\nkeeps track if it has been cleaned already so\nyou can call this over and over. However, if you update the element and\nneed to force a reclean, you can pass true.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
      "linenr": 78,
      "html_filename": "Element-more.html",
      "href": "Element-more.html#Ext-core-Element-method-clean",
      "shortDoc": "<p>Removes Empty, or whitespace filled text nodes. Combines adjacent text nodes.</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearListeners",
      "member": "Ext.core.Element",
      "doc": "<p>Removes all previous added listeners from this element</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 756,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-clearListeners",
      "shortDoc": "<p>Removes all previous added listeners from this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearOpacity",
      "member": "Ext.core.Element",
      "doc": "<p>Clears any opacity settings from this element. Required in some cases for IE.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 377,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-clearOpacity",
      "shortDoc": "<p>Clears any opacity settings from this element. Required in some cases for IE.</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearPositioning",
      "member": "Ext.core.Element",
      "doc": "<p>Clear positioning back to the default when the document was loaded</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>(optional) The value to use for the left,right,top,bottom, defaults to '' (empty string). You could use 'auto'.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 220,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-clearPositioning",
      "shortDoc": "<p>Clear positioning back to the default when the document was loaded</p>\n"
    },
    {
      "tagname": "method",
      "name": "clip",
      "member": "Ext.core.Element",
      "doc": "<p>Store the current overflow setting and clip overflow on the element - use <tt><a href=\"#/api/Ext.Layer-method-unclip\" rel=\"Ext.Layer-method-unclip\" class=\"docClass\">unclip</a></tt> to remove</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 630,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-clip",
      "shortDoc": "<p>Store the current overflow setting and clip overflow on the element - use <tt><a href=\"#/api/Ext.Layer-method-unclip\" rel=\"Ext.Layer-method-unclip\" class=\"docClass\">unclip</a></tt> to remove</p>\n"
    },
    {
      "tagname": "method",
      "name": "contains",
      "member": "Ext.core.Element",
      "doc": "<p>Returns true if this element is an ancestor of the passed element</p>\n",
      "params": [
        {
          "type": "HTMLElement/String",
          "name": "el",
          "doc": "<p>The element to check</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this element is an ancestor of el, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 664,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-contains",
      "shortDoc": "<p>Returns true if this element is an ancestor of the passed element</p>\n"
    },
    {
      "tagname": "method",
      "name": "createChild",
      "member": "Ext.core.Element",
      "doc": "<p>Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child element.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>DomHelper element config object.  If no tag is specified (e.g., {tag:'input'}) then a div will be\nautomatically generated with the specified attributes.</p>\n",
          "optional": false
        },
        {
          "type": "HTMLElement",
          "name": "insertBefore",
          "doc": "<p>(optional) a child element of this element</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "returnDom",
          "doc": "<p>(optional) true to return the dom node instead of creating an Element</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The new child element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 137,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-createChild",
      "shortDoc": "Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child e..."
    },
    {
      "tagname": "method",
      "name": "createProxy",
      "member": "Ext.core.Element",
      "doc": "<p>Creates a proxy element of this element</p>\n",
      "params": [
        {
          "type": "String/Object",
          "name": "config",
          "doc": "<p>The class name of the proxy element or a DomHelper config object</p>\n",
          "optional": false
        },
        {
          "type": "String/HTMLElement",
          "name": "renderTo",
          "doc": "<p>(optional) The element or element id to render the proxy to (defaults to document.body)</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "matchBox",
          "doc": "<p>(optional) True to align and size the proxy to this element now (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The new proxy element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
      "linenr": 231,
      "html_filename": "Element-more.html",
      "href": "Element-more.html#Ext-core-Element-method-createProxy",
      "shortDoc": "<p>Creates a proxy element of this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "createShim",
      "member": "Ext.core.Element",
      "doc": "<p>Creates an iframe shim for this element to keep selects and other windowed objects from\nshowing through.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The new shim element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
      "linenr": 166,
      "html_filename": "Element.fx-more.html",
      "href": "Element.fx-more.html#Ext-core-Element-method-createShim",
      "shortDoc": "<p>Creates an iframe shim for this element to keep selects and other windowed objects from\nshowing through.</p>\n"
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.core.Element",
      "doc": "<p>Removes this element's dom reference.  Note that event and cache removal is handled at <a href=\"#/api/Ext-method-removeNode\" rel=\"Ext-method-removeNode\" class=\"docClass\">Ext.removeNode</a>.\nAlias to <a href=\"#/api/Ext.Layer-method-remove\" rel=\"Ext.Layer-method-remove\" class=\"docClass\">remove</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 764,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-destroy",
      "shortDoc": "<p>Removes this element's dom reference.  Note that event and cache removal is handled at <a href=\"#/api/Ext-method-removeNode\" rel=\"Ext-method-removeNode\" class=\"docClass\">Ext.removeNode</a>.\nAlias to <a href=\"#/api/Ext.Layer-method-remove\" rel=\"Ext.Layer-method-remove\" class=\"docClass\">remove</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "down",
      "member": "Ext.core.Element",
      "doc": "<p>Selects a single child at any depth below this element based on the passed CSS selector (the selector should not contain an id).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>The CSS selector</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "returnDom",
          "doc": "<p>(optional) True to return the DOM node instead of <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLElement/Ext.core.Element",
        "doc": "<p>The child <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (or DOM node if returnDom = true)</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 76,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-down",
      "shortDoc": "Selects a single child at any depth below this element based on the passed CSS selector (the selector should not cont..."
    },
    {
      "tagname": "method",
      "name": "enableDisplayMode",
      "member": "Ext.core.Element",
      "doc": "<p>Convenience method for setVisibilityMode(Element.DISPLAY)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "display",
          "doc": "<p>(optional) What to set display to when visible</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
      "linenr": 45,
      "html_filename": "Element.fx-more.html",
      "href": "Element.fx-more.html#Ext-core-Element-method-enableDisplayMode",
      "shortDoc": "<p>Convenience method for setVisibilityMode(Element.DISPLAY)</p>\n"
    },
    {
      "tagname": "method",
      "name": "fadeIn",
      "member": "Ext.core.Element",
      "doc": "<p>Fade an element in (from transparent to opaque).  The ending opacity can be specified\nusing the <tt><a href=\"#/api/Ext.Layer--endOpacity\" rel=\"Ext.Layer--endOpacity\" class=\"docClass\">endOpacity</a></tt> config option.\nUsage:</p>\n\n<pre><code>// default: fade in from opacity 0 to 100%\nel.fadeIn();\n\n// custom: fade in from opacity 0 to 75% over 2 seconds\nel.fadeIn({ endOpacity: .75, duration: 2});\n\n// common config options shown with default values\nel.fadeIn({\n    endOpacity: 1, //can be any value between 0 and 1 (e.g. .5)\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 773,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-fadeIn",
      "shortDoc": "Fade an element in (from transparent to opaque).  The ending opacity can be specified\nusing the endOpacity config opt..."
    },
    {
      "tagname": "method",
      "name": "fadeOut",
      "member": "Ext.core.Element",
      "doc": "<p>Fade an element out (from opaque to transparent).  The ending opacity can be specified\nusing the <tt><a href=\"#/api/Ext.Layer--endOpacity\" rel=\"Ext.Layer--endOpacity\" class=\"docClass\">endOpacity</a></tt> config option.  Note that IE may require\n<tt><a href=\"#/api/Ext.Layer-cfg-useDisplay\" rel=\"Ext.Layer-cfg-useDisplay\" class=\"docClass\">useDisplay</a>:true</tt> in order to redisplay correctly.\nUsage:</p>\n\n<pre><code>// default: fade out from the element's current opacity to 0\nel.fadeOut();\n\n// custom: fade out from the element's current opacity to 25% over 2 seconds\nel.fadeOut({ endOpacity: .25, duration: 2});\n\n// common config options shown with default values\nel.fadeOut({\n    endOpacity: 0, //can be any value between 0 and 1 (e.g. .5)\n    easing: 'easeOut',\n    duration: 500,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 801,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-fadeOut",
      "shortDoc": "Fade an element out (from opaque to transparent).  The ending opacity can be specified\nusing the endOpacity config op..."
    },
    {
      "tagname": "method",
      "name": "findParent",
      "member": "Ext.core.Element",
      "doc": "<p>Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>The simple selector to test</p>\n",
          "optional": false
        },
        {
          "type": "Number/Mixed",
          "name": "maxDepth",
          "doc": "<p>(optional) The max depth to search as a number or element (defaults to 50 || document.body)</p>\n",
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
        "doc": "<p>The matching DOM node (or null if no match was found)</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 5,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-findParent",
      "shortDoc": "Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:fi..."
    },
    {
      "tagname": "method",
      "name": "findParentNode",
      "member": "Ext.core.Element",
      "doc": "<p>Looks at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>The simple selector to test</p>\n",
          "optional": false
        },
        {
          "type": "Number/Mixed",
          "name": "maxDepth",
          "doc": "<p>(optional) The max depth to</p>\n\n<pre><code>        search as a number or element (defaults to 10 || document.body)\n</code></pre>\n",
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
        "doc": "<p>The matching DOM node (or null if no match was found)</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 33,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-findParentNode",
      "shortDoc": "<p>Looks at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)</p>\n"
    },
    {
      "tagname": "method",
      "name": "first",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the first child, skipping text nodes</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>(optional) Find the next sibling that matches the passed simple selector</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "returnDom",
          "doc": "<p>(optional) True to return a raw dom node instead of an Ext.core.Element</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element/HTMLElement",
        "doc": "<p>The first child or null</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 135,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-first",
      "shortDoc": "<p>Gets the first child, skipping text nodes</p>\n"
    },
    {
      "tagname": "method",
      "name": "fly",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the globally shared flyweight Element, with the passed node as the active element. Do not store a reference to this element -\nthe dom node can be overwritten by other code. Shorthand of <a href=\"#/api/Ext.core.Element-method-fly\" rel=\"Ext.core.Element-method-fly\" class=\"docClass\">Ext.core.Element.fly</a></p>\n\n\n<p>Use this to make one-time references to DOM elements which are not going to be accessed again either by\napplication code, or by Ext's classes. If accessing an element which will be processed regularly, then <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>\nwill be more appropriate to take advantage of the caching provided by the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> class.</p>\n\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "el",
          "doc": "<p>The dom node or id</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "named",
          "doc": "<p>(optional) Allows for creation of named reusable flyweights to prevent conflicts\n(e.g. internally <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> uses \"_global\")</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Element",
        "doc": "<p>The shared Element object (or null if no matching element was found)</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 953,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-fly",
      "shortDoc": "Gets the globally shared flyweight Element, with the passed node as the active element. Do not store a reference to t..."
    },
    {
      "tagname": "method",
      "name": "focus",
      "member": "Ext.core.Element",
      "doc": "<p>Tries to focus the element. Any exceptions are caught and ignored.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "defer",
          "doc": "<p>(optional) Milliseconds to defer the focus</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "dom",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 409,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-focus",
      "shortDoc": "<p>Tries to focus the element. Any exceptions are caught and ignored.</p>\n"
    },
    {
      "tagname": "method",
      "name": "frame",
      "member": "Ext.core.Element",
      "doc": "<p>Shows a ripple of exploding, attenuating borders to draw attention to an Element.\nUsage:</p>\n\n<pre><code>// default: a single light blue ripple\nel.frame();\n\n// custom: 3 red ripples lasting 3 seconds total\nel.frame(\"#ff0000\", 3, { duration: 3 });\n\n// common config options shown with default values\nel.frame(\"#C3DAF9\", 1, {\n    duration: 1 //duration of each individual ripple.\n    // Note: Easing is not configurable and will be ignored if included\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "color",
          "doc": "<p>(optional) The color of the border.  Should be a 6 char hex color without the leading # (defaults to light blue: 'C3DAF9').</p>\n",
          "optional": true
        },
        {
          "type": "Number",
          "name": "count",
          "doc": "<p>(optional) The number of ripples to display (defaults to 1)</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 510,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-frame",
      "shortDoc": "Shows a ripple of exploding, attenuating borders to draw attention to an Element.\nUsage:\n\n// default: a single light ..."
    },
    {
      "tagname": "method",
      "name": "fromPoint",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the top Element that is located at the passed coordinates</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "x",
          "doc": "<p>The x coordinate</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "x",
          "doc": "<p>The y coordinate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The found Element</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
      "linenr": 165,
      "html_filename": "Element.static.html",
      "href": "Element.static.html#Ext-core-Element-method-fromPoint",
      "shortDoc": "<p>Returns the top Element that is located at the passed coordinates</p>\n"
    },
    {
      "tagname": "method",
      "name": "get",
      "member": "Ext.core.Element",
      "doc": "<p>Retrieves <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> objects.</p>\n\n<p><b>This method does not retrieve <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a>s.</b> This method\nretrieves <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> objects which encapsulate DOM elements. To retrieve a Component by\nits ID, use <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n\n<p>Uses simple caching to consistently return the same object. Automatically fixes if an\nobject was recreated with the same id via AJAX or DOM.</p>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The id of the node, a DOM Node or an existing Element.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Element",
        "doc": "<p>The Element object (or null if no matching element was found)</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 781,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-get",
      "shortDoc": "Retrieves Ext.core.Element objects.\n\nThis method does not retrieve Components. This method\nretrieves Ext.core.Element..."
    },
    {
      "tagname": "method",
      "name": "getActiveElement",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the active element in the DOM. If the browser supports activeElement\non the document, this is returned. If not, the focus is tracked and the active\nelement is maintained internally.</p>\n",
      "params": [

      ],
      "return": {
        "type": "HTMLElement",
        "doc": "<p>The active (focused) element in the document.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static-more.js",
      "linenr": 59,
      "html_filename": "Element.static-more.html",
      "href": "Element.static-more.html#Ext-core-Element-method-getActiveElement",
      "shortDoc": "Returns the active element in the DOM. If the browser supports activeElement\non the document, this is returned. If no..."
    },
    {
      "tagname": "method",
      "name": "getAlignToXY",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the x,y coordinates to align this element with another element. See <a href=\"#/api/Ext.Layer-method-alignTo\" rel=\"Ext.Layer-method-alignTo\" class=\"docClass\">alignTo</a> for more info on the\nsupported position values.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "element",
          "doc": "<p>The element to align to.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "position",
          "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to.</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "offsets",
          "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>[x, y]</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
      "linenr": 138,
      "html_filename": "Element.alignment.html",
      "href": "Element.alignment.html#Ext-core-Element-method-getAlignToXY",
      "shortDoc": "Gets the x,y coordinates to align this element with another element. See alignTo for more info on the\nsupported posit..."
    },
    {
      "tagname": "method",
      "name": "getAnchorXY",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the x,y coordinates specified by the anchor position on the element.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "anchor",
          "doc": "<p>(optional) The specified anchor position (defaults to \"c\").  See <a href=\"#/api/Ext.Layer-method-alignTo\" rel=\"Ext.Layer-method-alignTo\" class=\"docClass\">alignTo</a>\nfor details on supported anchor positions.</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "local",
          "doc": "<p>(optional) True to get the local (element top/left-relative) anchor position instead\nof page coordinates</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "size",
          "doc": "<p>(optional) An object containing the size to use for calculating anchor position\n{width: (target width), height: (target height)} (defaults to the element's current size)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>[x, y] An array containing the element's x and y coordinates</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
      "linenr": 5,
      "html_filename": "Element.alignment.html",
      "href": "Element.alignment.html#Ext-core-Element-method-getAnchorXY",
      "shortDoc": "<p>Gets the x,y coordinates specified by the anchor position on the element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getAttribute",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the value of an attribute from the element's underlying DOM node.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The attribute name</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "namespace",
          "doc": "<p>(optional) The namespace in which to look for the attribute</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The attribute value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 684,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-getAttribute",
      "shortDoc": "<p>Returns the value of an attribute from the element's underlying DOM node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getAttributeNS",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the value of a namespaced attribute from the element's underlying DOM node.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "namespace",
          "doc": "<p>The namespace in which to look for the attribute</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The attribute name</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The attribute value\n@deprecated</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 673,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-getAttributeNS",
      "shortDoc": "<p>Returns the value of a namespaced attribute from the element's underlying DOM node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getBorderWidth",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the width of the border(s) for the specified side(s)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "side",
          "doc": "<p>Can be t, l, r, b or any combination of those to add multiple values. For example,\npassing <tt>'lr'</tt> would get the border <b><u>l</u></b>eft width + the border <b><u>r</u></b>ight width.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The width of the sides passed added together</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 610,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getBorderWidth",
      "shortDoc": "<p>Gets the width of the border(s) for the specified side(s)</p>\n"
    },
    {
      "tagname": "method",
      "name": "getBottom",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the bottom Y coordinate of the element (element Y position + element height)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "local",
          "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 186,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getBottom",
      "shortDoc": "<p>Gets the bottom Y coordinate of the element (element Y position + element height)</p>\n"
    },
    {
      "tagname": "method",
      "name": "getBox",
      "member": "Ext.core.Element",
      "doc": "<p>Return an object defining the area of this Element which can be passed to <a href=\"#/api/Ext.Layer-method-setBox\" rel=\"Ext.Layer-method-setBox\" class=\"docClass\">setBox</a> to\nset another Element's size/location to match this element.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "contentBox",
          "doc": "<p>(optional) If true a box for the content of the element is returned.</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "local",
          "doc": "<p>(optional) If true the element's left and top are returned instead of page x/y.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>box An object in the format</p>\n\n<pre><code>{\n    x: &lt;Element's X position>,\n    y: &lt;Element's Y position>,\n    width: &lt;Element's width>,\n    height: &lt;Element's height>,\n    bottom: &lt;Element's lower bound>,\n    right: &lt;Element's rightmost bound>\n}\n</code></pre>\n\n\n<p>The returned object may also be addressed as an Array where index 0 contains the X position\nand index 1 contains the Y position. So the result may also be used for <a href=\"#/api/Ext.Layer-method-setXY\" rel=\"Ext.Layer-method-setXY\" class=\"docClass\">setXY</a></p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 327,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getBox",
      "shortDoc": "Return an object defining the area of this Element which can be passed to setBox to\nset another Element's size/locati..."
    },
    {
      "tagname": "method",
      "name": "getCenterXY",
      "member": "Ext.core.Element",
      "doc": "<p>Calculates the x, y to center this element on the screen</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>The x, y values [x, y]</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
      "linenr": 367,
      "html_filename": "Element.alignment.html",
      "href": "Element.alignment.html#Ext-core-Element-method-getCenterXY",
      "shortDoc": "<p>Calculates the x, y to center this element on the screen</p>\n"
    },
    {
      "tagname": "method",
      "name": "getColor",
      "member": "Ext.core.Element",
      "doc": "<p>Return the CSS color for the specified CSS attribute. rgb, 3 digit (like #fff) and valid values\nare convert to standard 6 digit hex color.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "attr",
          "doc": "<p>The css attribute</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "defaultValue",
          "doc": "<p>The default value to use when a valid color isn't found</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "prefix",
          "doc": "<p>(optional) defaults to #. Use an empty string when working with\ncolor anims.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 267,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getColor",
      "shortDoc": "Return the CSS color for the specified CSS attribute. rgb, 3 digit (like #fff) and valid values\nare convert to standa..."
    },
    {
      "tagname": "method",
      "name": "getComputedHeight",
      "member": "Ext.core.Element",
      "doc": "<p>Returns either the offsetHeight or the height of this element based on CSS height adjusted by padding or borders\nwhen needed to simulate offsetHeight when offsets aren't available. This may not work on display:none elements\nif a height has not been set using CSS.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 803,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getComputedHeight",
      "shortDoc": "Returns either the offsetHeight or the height of this element based on CSS height adjusted by padding or borders\nwhen..."
    },
    {
      "tagname": "method",
      "name": "getComputedWidth",
      "member": "Ext.core.Element",
      "doc": "<p>Returns either the offsetWidth or the width of this element based on CSS width adjusted by padding or borders\nwhen needed to simulate offsetWidth when offsets aren't available. This may not work on display:none elements\nif a width has not been set using CSS.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 821,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getComputedWidth",
      "shortDoc": "Returns either the offsetWidth or the width of this element based on CSS width adjusted by padding or borders\nwhen ne..."
    },
    {
      "tagname": "method",
      "name": "getConstrainVector",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the <code>[X, Y]</code> vector by which this element must be translated to make a best attempt\nto constrain within the passed constraint. Returns <code>false</code> is this element does not need to be moved.</p>\n\n\n<p>Priority is given to constraining the top and left within the constraint.</p>\n\n\n<p>The constraint may either be an existing element into which this element is to be constrained, or\nan <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this element is to be constrained.</p>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "constrainTo",
          "doc": "<p>{Mixed} The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this element is to be constrained.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "proposedPosition",
          "doc": "<p>{Array} A proposed <code>[X, Y]</code> position to test for validity and to produce a vector for instead\nof using this Element's current position;</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p><b>If</b> this element <i>needs</i> to be translated, an <code>[X, Y]</code>\nvector by which this element must be translated. Otherwise, <code>false</code>.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
      "linenr": 313,
      "html_filename": "Element.alignment.html",
      "href": "Element.alignment.html#Ext-core-Element-method-getConstrainVector",
      "shortDoc": "Returns the [X, Y] vector by which this element must be translated to make a best attempt\nto constrain within the pas..."
    },
    {
      "tagname": "method",
      "name": "getDocumentHeight",
      "member": "Ext.core.Element",
      "doc": "<p>Retrieves the document height</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>documentHeight</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
      "linenr": 103,
      "html_filename": "Element.static.html",
      "href": "Element.static.html#Ext-core-Element-method-getDocumentHeight",
      "shortDoc": "<p>Retrieves the document height</p>\n"
    },
    {
      "tagname": "method",
      "name": "getDocumentWidth",
      "member": "Ext.core.Element",
      "doc": "<p>Retrieves the document width</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>documentWidth</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
      "linenr": 112,
      "html_filename": "Element.static.html",
      "href": "Element.static.html#Ext-core-Element-method-getDocumentWidth",
      "shortDoc": "<p>Retrieves the document width</p>\n"
    },
    {
      "tagname": "method",
      "name": "getFrameWidth",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the sum width of the padding and borders for the passed \"sides\". See getBorderWidth()</p>\n\n<pre><code>     for more information about the sides.\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "sides",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "onlyContentBox",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 840,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getFrameWidth",
      "shortDoc": "Returns the sum width of the padding and borders for the passed \"sides\". See getBorderWidth()\n\n     for more informat..."
    },
    {
      "tagname": "method",
      "name": "getHeight",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the offset height of the element</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "contentHeight",
          "doc": "<p>(optional) true to get the height minus borders and padding</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "preciseHeight",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The element's height</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 426,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getHeight",
      "shortDoc": "<p>Returns the offset height of the element</p>\n"
    },
    {
      "tagname": "method",
      "name": "getLeft",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the left X coordinate</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "local",
          "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 158,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getLeft",
      "shortDoc": "<p>Gets the left X coordinate</p>\n"
    },
    {
      "tagname": "method",
      "name": "getLoader",
      "member": "Ext.core.Element",
      "doc": "<p>Gets this element's <a href=\"#/api/Ext.ElementLoader\" rel=\"Ext.ElementLoader\" class=\"docClass\">ElementLoader</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.ElementLoader",
        "doc": "<p>The loader</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
      "linenr": 131,
      "html_filename": "Element-more.html",
      "href": "Element-more.html#Ext-core-Element-method-getLoader",
      "shortDoc": "<p>Gets this element's <a href=\"#/api/Ext.ElementLoader\" rel=\"Ext.ElementLoader\" class=\"docClass\">ElementLoader</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "getMargin",
      "member": "Ext.core.Element",
      "doc": "<p>Returns an object with properties top, left, right and bottom representing the margins of this element unless sides is passed,\nthen it returns the calculated width of the sides (see getPadding)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "sides",
          "doc": "<p>(optional) Any combination of l, r, t, b to get the sum of those sides</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object/Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 1037,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getMargin",
      "shortDoc": "Returns an object with properties top, left, right and bottom representing the margins of this element unless sides i..."
    },
    {
      "tagname": "method",
      "name": "getOffsetsTo",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the offsets of this element from the passed element. Both element must be part of the DOM tree and not have display:none to have page coordinates.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "element",
          "doc": "<p>The element to get the offsets from.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The XY page offsets (e.g. [100, -200])</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 42,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getOffsetsTo",
      "shortDoc": "Returns the offsets of this element from the passed element. Both element must be part of the DOM tree and not have d..."
    },
    {
      "tagname": "method",
      "name": "getOrientation",
      "member": "Ext.core.Element",
      "doc": "<p>Retrieves the current orientation of the window. This is calculated by\ndeterming if the height is greater than the width.</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>Orientation of window: 'portrait' or 'landscape'</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
      "linenr": 151,
      "html_filename": "Element.static.html",
      "href": "Element.static.html#Ext-core-Element-method-getOrientation",
      "shortDoc": "Retrieves the current orientation of the window. This is calculated by\ndeterming if the height is greater than the wi..."
    },
    {
      "tagname": "method",
      "name": "getPadding",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the width of the padding(s) for the specified side(s)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "side",
          "doc": "<p>Can be t, l, r, b or any combination of those to add multiple values. For example,\npassing <tt>'lr'</tt> would get the padding <b><u>l</u></b>eft + the padding <b><u>r</u></b>ight.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The padding of the sides passed added together</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 620,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getPadding",
      "shortDoc": "<p>Gets the width of the padding(s) for the specified side(s)</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPageBox",
      "member": "Ext.core.Element",
      "doc": "<p>Return an object defining the area of this Element which can be passed to <a href=\"#/api/Ext.Layer-method-setBox\" rel=\"Ext.Layer-method-setBox\" class=\"docClass\">setBox</a> to\nset another Element's size/location to match this element.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "asRegion",
          "doc": "<p>(optional) If true an <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> will be returned</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>box An object in the format</p>\n\n<pre><code>{\n    x: &lt;Element's X position>,\n    y: &lt;Element's Y position>,\n    width: &lt;Element's width>,\n    height: &lt;Element's height>,\n    bottom: &lt;Element's lower bound>,\n    right: &lt;Element's rightmost bound>\n}\n</code></pre>\n\n\n<p>The returned object may also be addressed as an Array where index 0 contains the X position\nand index 1 contains the Y position. So the result may also be used for <a href=\"#/api/Ext.Layer-method-setXY\" rel=\"Ext.Layer-method-setXY\" class=\"docClass\">setXY</a></p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 474,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getPageBox",
      "shortDoc": "Return an object defining the area of this Element which can be passed to setBox to\nset another Element's size/locati..."
    },
    {
      "tagname": "method",
      "name": "getPositioning",
      "member": "Ext.core.Element",
      "doc": "<p>Gets an object with all CSS positioning properties. Useful along with setPostioning to get\nsnapshot before performing an update and then restoring the element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 238,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getPositioning",
      "shortDoc": "Gets an object with all CSS positioning properties. Useful along with setPostioning to get\nsnapshot before performing..."
    },
    {
      "tagname": "method",
      "name": "getRegion",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the region of this element.\nThe element must be part of the DOM tree to have a region (display:none or elements not appended return false).</p>\n",
      "params": [

      ],
      "return": {
        "type": "Region",
        "doc": "<p>A <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> containing \"top, left, bottom, right\" member data.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 437,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getRegion",
      "shortDoc": "Returns the region of this element.\nThe element must be part of the DOM tree to have a region (display:none or elemen..."
    },
    {
      "tagname": "method",
      "name": "getRight",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the right X coordinate of the element (element X position + element width)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "local",
          "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 167,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getRight",
      "shortDoc": "<p>Gets the right X coordinate of the element (element X position + element width)</p>\n"
    },
    {
      "tagname": "method",
      "name": "getScroll",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the current scroll position of the element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object containing the scroll position in the format {left: (scrollLeft), top: (scrollTop)}</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.scroll.js",
      "linenr": 14,
      "html_filename": "Element.scroll.html",
      "href": "Element.scroll.html#Ext-core-Element-method-getScroll",
      "shortDoc": "<p>Returns the current scroll position of the element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getSize",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the size of the element.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "contentSize",
          "doc": "<p>(optional) true to get the width/size minus borders and padding</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 1000,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getSize",
      "shortDoc": "<p>Returns the size of the element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getStyle",
      "member": "Ext.core.Element",
      "doc": "<p>Normalizes currentStyle and computedStyle.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "property",
          "doc": "<p>The style property whose value is returned.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The current value of the style property for this element.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 207,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getStyle",
      "shortDoc": "<p>Normalizes currentStyle and computedStyle.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getStyleSize",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the dimensions of the element available to lay content out in.<p>\n\ngetStyleSize utilizes prefers style sizing if present, otherwise it chooses the larger of offsetHeight/clientHeight and offsetWidth/clientWidth.\nTo obtain the size excluding scrollbars, use getViewSize\n\nSizing of the document body is handled at the adapter level which handles special cases for IE and strict modes, etc.\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 958,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getStyleSize",
      "shortDoc": "Returns the dimensions of the element available to lay content out in.\n\ngetStyleSize utilizes prefers style sizing if..."
    },
    {
      "tagname": "method",
      "name": "getStyles",
      "member": "Ext.core.Element",
      "doc": "<p>Returns an object with properties matching the styles requested.\nFor example, el.getStyles('color', 'font-size', 'width') might return\n{'color': '#FFFFFF', 'font-size': '13px', 'width': '100px'}.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "style1",
          "doc": "<p>A style name</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "style2",
          "doc": "<p>A style name</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "etc",
          "doc": "<p>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The style object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 707,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getStyles",
      "shortDoc": "Returns an object with properties matching the styles requested.\nFor example, el.getStyles('color', 'font-size', 'wid..."
    },
    {
      "tagname": "method",
      "name": "getTextWidth",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the width in pixels of the passed text, or the width of the text in this Element. getTextWidth</p>\n",
      "params": [
        {
          "type": "String",
          "name": "text",
          "doc": "<p>The text to measure. Defaults to the innerHTML of the element.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "min",
          "doc": "<p>(Optional) The minumum value to return.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "max",
          "doc": "<p>(Optional) The maximum value to return.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The text width in pixels.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
      "linenr": 138,
      "html_filename": "TextMetrics.html",
      "href": "TextMetrics.html#Ext-core-Element-method-getTextWidth",
      "shortDoc": "<p>Returns the width in pixels of the passed text, or the width of the text in this Element. getTextWidth</p>\n"
    },
    {
      "tagname": "method",
      "name": "getTop",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the top Y coordinate</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "local",
          "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 177,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getTop",
      "shortDoc": "<p>Gets the top Y coordinate</p>\n"
    },
    {
      "tagname": "method",
      "name": "getValue",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the value of the \"value\" attribute</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "asNumber",
          "doc": "<p>true to parse the value as a number</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String/Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 440,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-getValue",
      "shortDoc": "<p>Returns the value of the \"value\" attribute</p>\n"
    },
    {
      "tagname": "method",
      "name": "getViewRegion",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the <b>content</b> region of this element. That is the region within the borders and padding.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Region",
        "doc": "<p>A <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> containing \"top, left, bottom, right\" member data.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 446,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getViewRegion",
      "shortDoc": "<p>Returns the <b>content</b> region of this element. That is the region within the borders and padding.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getViewSize",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the dimensions of the element available to lay content out in.<p>\n<p>If the element (or any ancestor element) has CSS style <code>display : none</code>, the dimensions will be zero.</p>\nexample:\n<pre><code>        var vpSize = Ext.getBody().getViewSize();\n\n        // all Windows created afterwards will have a default value of 90% height and 95% width\n        Ext.Window.override({\n            width: vpSize.width * 0.9,\n            height: vpSize.height * 0.95\n        });\n        // To handle window resizing you would have to hook onto onWindowResize.\n</code></pre>\n\ngetViewSize utilizes clientHeight/clientWidth which excludes sizing of scrollbars.\nTo obtain the size including scrollbars, use getStyleSize\n\nSizing of the document body is handled at the adapter level which handles special cases for IE and strict modes, etc.\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 904,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getViewSize",
      "shortDoc": "Returns the dimensions of the element available to lay content out in.\nIf the element (or any ancestor element) has C..."
    },
    {
      "tagname": "method",
      "name": "getViewportHeight",
      "member": "Ext.core.Element",
      "doc": "<p>Retrieves the viewport height of the window.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>viewportHeight</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
      "linenr": 121,
      "html_filename": "Element.static.html",
      "href": "Element.static.html#Ext-core-Element-method-getViewportHeight",
      "shortDoc": "<p>Retrieves the viewport height of the window.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getViewportWidth",
      "member": "Ext.core.Element",
      "doc": "<p>Retrieves the viewport width of the window.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>viewportWidth</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
      "linenr": 130,
      "html_filename": "Element.static.html",
      "href": "Element.static.html#Ext-core-Element-method-getViewportWidth",
      "shortDoc": "<p>Retrieves the viewport width of the window.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getWidth",
      "member": "Ext.core.Element",
      "doc": "<p>Returns the offset width of the element</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "contentWidth",
          "doc": "<p>(optional) true to get the width minus borders and padding</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "preciseWidth",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The element's width</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 474,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-getWidth",
      "shortDoc": "<p>Returns the offset width of the element</p>\n"
    },
    {
      "tagname": "method",
      "name": "getX",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the current X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>The X position of the element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 18,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getX",
      "shortDoc": "Gets the current X position of the element based on page coordinates.  Element must be part of the DOM tree to have p..."
    },
    {
      "tagname": "method",
      "name": "getXY",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the current position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>The XY position of the element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 34,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getXY",
      "shortDoc": "Gets the current position of the element based on page coordinates.  Element must be part of the DOM tree to have pag..."
    },
    {
      "tagname": "method",
      "name": "getY",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the current Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>The Y position of the element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 26,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-getY",
      "shortDoc": "Gets the current Y position of the element based on page coordinates.  Element must be part of the DOM tree to have p..."
    },
    {
      "tagname": "method",
      "name": "ghost",
      "member": "Ext.core.Element",
      "doc": "<p>Slides the element while fading it out of view.  An anchor point can be optionally passed to set the\nending point of the effect.\nUsage:</p>\n\n<pre><code>// default: slide the element downward while fading out\nel.ghost();\n\n// custom: slide the element out to the right with a 2-second duration\nel.ghost('r', { duration: 2 });\n\n// common config options shown with default values\nel.ghost('b', {\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "anchor",
          "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to bottom: 'b')</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 590,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-ghost",
      "shortDoc": "Slides the element while fading it out of view.  An anchor point can be optionally passed to set the\nending point of ..."
    },
    {
      "tagname": "method",
      "name": "hasCls",
      "member": "Ext.core.Element",
      "doc": "<p>Checks if the specified CSS class exists on this element's DOM node.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "className",
          "doc": "<p>The CSS class to check for</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the class exists, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 168,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-hasCls",
      "shortDoc": "<p>Checks if the specified CSS class exists on this element's DOM node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "hide",
      "member": "Ext.core.Element",
      "doc": "<p>Hide this element - Uses display mode to determine whether to use \"display\" or \"visibility\". See <a href=\"#/api/Ext.Layer-method-setVisible\" rel=\"Ext.Layer-method-setVisible\" class=\"docClass\">setVisible</a>.</p>\n",
      "params": [
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 245,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-method-hide",
      "shortDoc": "<p>Hide this element - Uses display mode to determine whether to use \"display\" or \"visibility\". See <a href=\"#/api/Ext.Layer-method-setVisible\" rel=\"Ext.Layer-method-setVisible\" class=\"docClass\">setVisible</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "highlight",
      "member": "Ext.core.Element",
      "doc": "<p>Highlights the Element by setting a color (applies to the background-color by default, but can be\nchanged using the \"attr\" config option) and then fading back to the original color. If no original\ncolor is available, you should provide the \"endColor\" config option which will be cleared after the animation.\nUsage:</p>\n\n<pre><code>// default: highlight background to yellow\nel.highlight();\n\n// custom: highlight foreground text to blue for 2 seconds\nel.highlight(\"0000ff\", { attr: 'color', duration: 2 });\n\n// common config options shown with default values\nel.highlight(\"ffff9c\", {\n    attr: \"backgroundColor\", //can be any valid CSS property (attribute) that supports a color value\n    endColor: (current color) or \"ffffff\",\n    easing: 'easeIn',\n    duration: 1000\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "color",
          "doc": "<p>(optional) The highlight color. Should be a 6 char hex color without the leading # (defaults to yellow: 'ffff9c')</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 676,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-highlight",
      "shortDoc": "Highlights the Element by setting a color (applies to the background-color by default, but can be\nchanged using the \"..."
    },
    {
      "tagname": "method",
      "name": "hover",
      "member": "Ext.core.Element",
      "doc": "<p>Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "overFn",
          "doc": "<p>The function to call when the mouse enters the Element.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "outFn",
          "doc": "<p>The function to call when the mouse leaves the Element.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the functions are executed. Defaults to the Element's DOM element.</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Options for the listener. See <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">the &lt;tt&gt;options&lt;/tt&gt; parameter</a>.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 649,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-hover",
      "shortDoc": "<p>Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "initDD",
      "member": "Ext.core.Element",
      "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DD\" rel=\"Ext.dd.DD\" class=\"docClass\">Ext.dd.DD</a> drag drop object for this element.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "group",
          "doc": "<p>The group the DD object is member of</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The DD config object</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "overrides",
          "doc": "<p>An object containing methods to override/implement on the DD object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.dd.DD",
        "doc": "<p>The DD object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.dd.js",
      "linenr": 5,
      "html_filename": "Element.dd.html",
      "href": "Element.dd.html#Ext-core-Element-method-initDD",
      "shortDoc": "<p>Initializes a <a href=\"#/api/Ext.dd.DD\" rel=\"Ext.dd.DD\" class=\"docClass\">Ext.dd.DD</a> drag drop object for this element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "initDDProxy",
      "member": "Ext.core.Element",
      "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DDProxy\" rel=\"Ext.dd.DDProxy\" class=\"docClass\">Ext.dd.DDProxy</a> object for this element.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "group",
          "doc": "<p>The group the DDProxy object is member of</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The DDProxy config object</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "overrides",
          "doc": "<p>An object containing methods to override/implement on the DDProxy object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.dd.DDProxy",
        "doc": "<p>The DDProxy object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.dd.js",
      "linenr": 17,
      "html_filename": "Element.dd.html",
      "href": "Element.dd.html#Ext-core-Element-method-initDDProxy",
      "shortDoc": "<p>Initializes a <a href=\"#/api/Ext.dd.DDProxy\" rel=\"Ext.dd.DDProxy\" class=\"docClass\">Ext.dd.DDProxy</a> object for this element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "initDDTarget",
      "member": "Ext.core.Element",
      "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DDTarget\" rel=\"Ext.dd.DDTarget\" class=\"docClass\">Ext.dd.DDTarget</a> object for this element.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "group",
          "doc": "<p>The group the DDTarget object is member of</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The DDTarget config object</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "overrides",
          "doc": "<p>An object containing methods to override/implement on the DDTarget object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.dd.DDTarget",
        "doc": "<p>The DDTarget object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.dd.js",
      "linenr": 29,
      "html_filename": "Element.dd.html",
      "href": "Element.dd.html#Ext-core-Element-method-initDDTarget",
      "shortDoc": "<p>Initializes a <a href=\"#/api/Ext.dd.DDTarget\" rel=\"Ext.dd.DDTarget\" class=\"docClass\">Ext.dd.DDTarget</a> object for this element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "insertAfter",
      "member": "Ext.core.Element",
      "doc": "<p>Inserts this element after the passed element in the DOM</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The element to insert after</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 35,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-insertAfter",
      "shortDoc": "<p>Inserts this element after the passed element in the DOM</p>\n"
    },
    {
      "tagname": "method",
      "name": "insertBefore",
      "member": "Ext.core.Element",
      "doc": "<p>Inserts this element before the passed element in the DOM</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The element before which this element will be inserted</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 24,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-insertBefore",
      "shortDoc": "<p>Inserts this element before the passed element in the DOM</p>\n"
    },
    {
      "tagname": "method",
      "name": "insertFirst",
      "member": "Ext.core.Element",
      "doc": "<p>Inserts (or creates) an element (or DomHelper config) as the first child of this element</p>\n",
      "params": [
        {
          "type": "Mixed/Object",
          "name": "el",
          "doc": "<p>The id or element to insert or a DomHelper config to create and insert</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "returnDom",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The new child</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 46,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-insertFirst",
      "shortDoc": "<p>Inserts (or creates) an element (or DomHelper config) as the first child of this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "insertHtml",
      "member": "Ext.core.Element",
      "doc": "<p>Inserts an html fragment into this element</p>\n",
      "params": [
        {
          "type": "String",
          "name": "where",
          "doc": "<p>Where to insert the html in relation to this element - beforeBegin, afterBegin, beforeEnd, afterEnd.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "html",
          "doc": "<p>The HTML fragment</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "returnEl",
          "doc": "<p>(optional) True to return an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLElement/Ext.core.Element",
        "doc": "<p>The inserted node (or nearest related if more than 1 inserted)</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 169,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-insertHtml",
      "shortDoc": "<p>Inserts an html fragment into this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "insertSibling",
      "member": "Ext.core.Element",
      "doc": "<p>Inserts (or creates) the passed element (or DomHelper config) as a sibling of this element</p>\n",
      "params": [
        {
          "type": "Mixed/Object/Array",
          "name": "el",
          "doc": "<p>The id, element to insert or a DomHelper config to create and insert <em>or</em> an array of any of those.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "where",
          "doc": "<p>(optional) 'before' or 'after' defaults to before</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "returnDom",
          "doc": "<p>(optional) True to return the .;ll;l,raw DOM element instead of Ext.core.Element</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The inserted Element. If an array is passed, the last inserted element is returned.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 63,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-insertSibling",
      "shortDoc": "<p>Inserts (or creates) the passed element (or DomHelper config) as a sibling of this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "is",
      "member": "Ext.core.Element",
      "doc": "<p>Returns true if this element matches the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>The simple selector to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this element matches the selector, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 400,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-is",
      "shortDoc": "<p>Returns true if this element matches the passed simple selector (e.g. div.some-class or span:first-child)</p>\n"
    },
    {
      "tagname": "method",
      "name": "isBorderBox",
      "member": "Ext.core.Element",
      "doc": "<p>Tests various css rules/browsers to determine if this element uses a border box</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 628,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-isBorderBox",
      "shortDoc": "<p>Tests various css rules/browsers to determine if this element uses a border box</p>\n"
    },
    {
      "tagname": "method",
      "name": "isDisplayed",
      "member": "Ext.core.Element",
      "doc": "<p>Returns true if display is not \"none\"</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
      "linenr": 37,
      "html_filename": "Element.fx-more.html",
      "href": "Element.fx-more.html#Ext-core-Element-method-isDisplayed",
      "shortDoc": "<p>Returns true if display is not \"none\"</p>\n"
    },
    {
      "tagname": "method",
      "name": "isMasked",
      "member": "Ext.core.Element",
      "doc": "<p>Returns true if this element is masked. Also re-centers any displayed message within the mask.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
      "linenr": 148,
      "html_filename": "Element.fx-more.html",
      "href": "Element.fx-more.html#Ext-core-Element-method-isMasked",
      "shortDoc": "<p>Returns true if this element is masked. Also re-centers any displayed message within the mask.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isScrollable",
      "member": "Ext.core.Element",
      "doc": "<p>Returns true if this element is scrollable.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.scroll.js",
      "linenr": 5,
      "html_filename": "Element.scroll.html",
      "href": "Element.scroll.html#Ext-core-Element-method-isScrollable",
      "shortDoc": "<p>Returns true if this element is scrollable.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isVisible",
      "member": "Ext.core.Element",
      "doc": "<p>Checks whether the element is currently visible using both visibility and display properties.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the element is currently visible, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 83,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-method-isVisible",
      "shortDoc": "<p>Checks whether the element is currently visible using both visibility and display properties.</p>\n"
    },
    {
      "tagname": "method",
      "name": "last",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the last child, skipping text nodes</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>(optional) Find the previous sibling that matches the passed simple selector</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "returnDom",
          "doc": "<p>(optional) True to return a raw dom node instead of an Ext.core.Element</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element/HTMLElement",
        "doc": "<p>The last child or null</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 145,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-last",
      "shortDoc": "<p>Gets the last child, skipping text nodes</p>\n"
    },
    {
      "tagname": "method",
      "name": "load",
      "member": "Ext.core.Element",
      "doc": "<p>Direct access to the <a href=\"#/api/Ext.ElementLoader\" rel=\"Ext.ElementLoader\" class=\"docClass\">Ext.ElementLoader</a> <a href=\"#/api/Ext.ElementLoader-method-load\" rel=\"Ext.ElementLoader-method-load\" class=\"docClass\">Ext.ElementLoader.load</a> method. The method takes the same object\nparameter as <a href=\"#/api/Ext.ElementLoader-method-load\" rel=\"Ext.ElementLoader-method-load\" class=\"docClass\">Ext.ElementLoader.load</a></p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
      "linenr": 121,
      "html_filename": "Element-more.html",
      "href": "Element-more.html#Ext-core-Element-method-load",
      "shortDoc": "Direct access to the Ext.ElementLoader Ext.ElementLoader.load method. The method takes the same object\nparameter as E..."
    },
    {
      "tagname": "method",
      "name": "mask",
      "member": "Ext.core.Element",
      "doc": "<p>Puts a mask over this element to disable user interaction. Requires core.css.\nThis method can only be applied to elements which accept child nodes.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "msg",
          "doc": "<p>(optional) A message to display in the mask</p>\n",
          "optional": true
        },
        {
          "type": "String",
          "name": "msgCls",
          "doc": "<p>(optional) A css class to apply to the msg element</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Element",
        "doc": "<p>The mask element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
      "linenr": 60,
      "html_filename": "Element.fx-more.html",
      "href": "Element.fx-more.html#Ext-core-Element-method-mask",
      "shortDoc": "Puts a mask over this element to disable user interaction. Requires core.css.\nThis method can only be applied to elem..."
    },
    {
      "tagname": "method",
      "name": "monitorMouseLeave",
      "member": "Ext.core.Element",
      "doc": "<p>Monitors this Element for the mouse leaving. Calls the function after the specified delay only if\nthe mouse was not moved back into the Element within the delay. If the mouse <i>was</i> moved\nback in, the function is not called.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "delay",
          "doc": "<p>The delay <b>in milliseconds</b> to wait for possible mouse re-entry before calling the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The function to call if the mouse remains outside of this Element for the specified time.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope (<code>this</code> reference) in which the handler function executes. Defaults to this Element.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The listeners object which was added to this element so that monitoring can be stopped. Example usage:</pre><code>\n// Hide the menu if the mouse moves out for 250ms or more\nthis.mouseLeaveMonitor = this.menuEl.monitorMouseLeave(250, this.hideMenu, this);</p>\n\n<p>...\n// Remove mouseleave monitor on menu destroy\nthis.menuEl.un(this.mouseLeaveMonitor);\n</code></pre></p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
      "linenr": 7,
      "html_filename": "Element-more.html",
      "href": "Element-more.html#Ext-core-Element-method-monitorMouseLeave",
      "shortDoc": "Monitors this Element for the mouse leaving. Calls the function after the specified delay only if\nthe mouse was not m..."
    },
    {
      "tagname": "method",
      "name": "move",
      "member": "Ext.core.Element",
      "doc": "<p>Move this element relative to its current position.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "direction",
          "doc": "<p>Possible values are: \"l\" (or \"left\"), \"r\" (or \"right\"), \"t\" (or \"top\", or \"up\"), \"b\" (or \"bottom\", or \"down\").</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "distance",
          "doc": "<p>How far to move the element in pixels</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 390,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-move",
      "shortDoc": "<p>Move this element relative to its current position.</p>\n"
    },
    {
      "tagname": "method",
      "name": "moveTo",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "x",
          "doc": "<p>X value for new position (coordinates are page-based)</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "y",
          "doc": "<p>Y value for new position (coordinates are page-based)</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 146,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-moveTo",
      "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must b..."
    },
    {
      "tagname": "method",
      "name": "next",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the next sibling, skipping text nodes</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>(optional) Find the next sibling that matches the passed simple selector</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "returnDom",
          "doc": "<p>(optional) True to return a raw dom node instead of an Ext.core.Element</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element/HTMLElement",
        "doc": "<p>The next sibling or null</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 114,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-next",
      "shortDoc": "<p>Gets the next sibling, skipping text nodes</p>\n"
    },
    {
      "tagname": "method",
      "name": "normalize",
      "member": "Ext.core.Element",
      "doc": "<p>Normalizes CSS property keys from dash delimited to camel case JavaScript Syntax.\nFor example:</p>\n\n<ul>\n <li>border-width -> borderWidth</li>\n <li>padding-top -> paddingTop</li>\n</ul>\n\n",
      "params": [
        {
          "type": "String",
          "name": "prop",
          "doc": "<p>The property to normalize</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The normalized string</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
      "linenr": 85,
      "html_filename": "Element.static.html",
      "href": "Element.static.html#Ext-core-Element-method-normalize",
      "shortDoc": "Normalizes CSS property keys from dash delimited to camel case JavaScript Syntax.\nFor example:\n\n\n border-width -> bor..."
    },
    {
      "tagname": "method",
      "name": "on",
      "member": "Ext.core.Element",
      "doc": "<p>Appends an event handler (shorthand for <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a>).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of event to handle.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The handler function the event invokes.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing standard <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> options</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 733,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-on",
      "shortDoc": "<p>Appends an event handler (shorthand for <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a>).</p>\n"
    },
    {
      "tagname": "method",
      "name": "parent",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the parent node for this element, optionally chaining up trying to match a selector</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>(optional) Find a parent node that matches the passed simple selector</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "returnDom",
          "doc": "<p>(optional) True to return a raw dom node instead of an Ext.core.Element</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element/HTMLElement",
        "doc": "<p>The parent node or null</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 104,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-parent",
      "shortDoc": "<p>Gets the parent node for this element, optionally chaining up trying to match a selector</p>\n"
    },
    {
      "tagname": "method",
      "name": "parseBox",
      "member": "Ext.core.Element",
      "doc": "<p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n",
      "params": [
        {
          "type": "Number|String",
          "name": "box",
          "doc": "<p>The encoded margins</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object with margin sizes for top, right, bottom and left</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
      "linenr": 18,
      "html_filename": "Element.static.html",
      "href": "Element.static.html#Ext-core-Element-method-parseBox",
      "shortDoc": "Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, ..."
    },
    {
      "tagname": "method",
      "name": "parseStyles",
      "member": "Ext.core.Element",
      "doc": "<p>Converts a CSS string into an object with a property for each style.</p>\n\n<p>\nThe sample code below would return an object with 2 properties, one\nfor background-color and one for color.</p>\n\n\n<pre><code>var css = 'background-color: red;color: blue; ';\nconsole.log(Ext.core.Element.parseStyles(css));\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "styles",
          "doc": "<p>A CSS string</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>styles</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
      "linenr": 176,
      "html_filename": "Element.static.html",
      "href": "Element.static.html#Ext-core-Element-method-parseStyles",
      "shortDoc": "Converts a CSS string into an object with a property for each style.\n\n\nThe sample code below would return an object w..."
    },
    {
      "tagname": "method",
      "name": "pause",
      "member": "Ext.core.Element",
      "doc": "<p>@deprecated 4.0\nCreates a pause before any subsequent queued effects begin.  If there are\nno effects queued after the pause it will have no effect.\nUsage:</p>\n\n<pre><code>el.pause(1);\n</code></pre>\n\n",
      "params": [
        {
          "type": "Number",
          "name": "seconds",
          "doc": "<p>The length of time to pause (in seconds)</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 754,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-pause",
      "shortDoc": "@deprecated 4.0\nCreates a pause before any subsequent queued effects begin.  If there are\nno effects queued after the..."
    },
    {
      "tagname": "method",
      "name": "position",
      "member": "Ext.core.Element",
      "doc": "<p>Initializes positioning on this element. If a desired position is not passed, it will make the\nthe element positioned relative IF it is not already positioned.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "pos",
          "doc": "<p>(optional) Positioning to use \"relative\", \"absolute\" or \"fixed\"</p>\n",
          "optional": true
        },
        {
          "type": "Number",
          "name": "zIndex",
          "doc": "<p>(optional) The zIndex to apply</p>\n",
          "optional": true
        },
        {
          "type": "Number",
          "name": "x",
          "doc": "<p>(optional) Set the page X position</p>\n",
          "optional": true
        },
        {
          "type": "Number",
          "name": "y",
          "doc": "<p>(optional) Set the page Y position</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 196,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-position",
      "shortDoc": "Initializes positioning on this element. If a desired position is not passed, it will make the\nthe element positioned..."
    },
    {
      "tagname": "method",
      "name": "prev",
      "member": "Ext.core.Element",
      "doc": "<p>Gets the previous sibling, skipping text nodes</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>(optional) Find the previous sibling that matches the passed simple selector</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "returnDom",
          "doc": "<p>(optional) True to return a raw dom node instead of an Ext.core.Element</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element/HTMLElement",
        "doc": "<p>The previous sibling or null</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 124,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-prev",
      "shortDoc": "<p>Gets the previous sibling, skipping text nodes</p>\n"
    },
    {
      "tagname": "method",
      "name": "puff",
      "member": "Ext.core.Element",
      "doc": "<p>Fades the element out while slowly expanding it in all directions.  When the effect is completed, the\nelement will be hidden (visibility = 'hidden') but block elements will still take up space in the document.\nUsage:</p>\n\n<pre><code>// default\nel.puff();\n\n// common config options shown with default values\nel.puff({\n    easing: 'easeOut',\n    duration: 500,\n    useDisplay: false\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 360,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-puff",
      "shortDoc": "Fades the element out while slowly expanding it in all directions.  When the effect is completed, the\nelement will be..."
    },
    {
      "tagname": "method",
      "name": "purgeAllListeners",
      "member": "Ext.core.Element",
      "doc": "<p>Recursively removes all previous added listeners from this element and its children</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 590,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-purgeAllListeners",
      "shortDoc": "<p>Recursively removes all previous added listeners from this element and its children</p>\n"
    },
    {
      "tagname": "method",
      "name": "query",
      "member": "Ext.core.Element",
      "doc": "<p>Selects child nodes based on the passed CSS selector (the selector should not contain an id).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>The CSS selector</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>An array of the matched nodes</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 67,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-query",
      "shortDoc": "<p>Selects child nodes based on the passed CSS selector (the selector should not contain an id).</p>\n"
    },
    {
      "tagname": "method",
      "name": "radioCls",
      "member": "Ext.core.Element",
      "doc": "<p>Adds one or more CSS classes to this element and removes the same class(es) from all siblings.</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "className",
          "doc": "<p>The CSS class to add, or an array of classes</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 135,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-radioCls",
      "shortDoc": "<p>Adds one or more CSS classes to this element and removes the same class(es) from all siblings.</p>\n"
    },
    {
      "tagname": "method",
      "name": "relayEvent",
      "member": "Ext.core.Element",
      "doc": "<p>Create an event handler on this element such that when the event fires and is handled by this element,\nit will be relayed to another object (i.e., fired again as if it originated from that object instead).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event to relay</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "object",
          "doc": "<p>Any object that extends <a href=\"#/api/Ext.util.Observable\" rel=\"Ext.util.Observable\" class=\"docClass\">Ext.util.Observable</a> that will provide the context\nfor firing the relayed event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
      "linenr": 65,
      "html_filename": "Element-more.html",
      "href": "Element-more.html#Ext-core-Element-method-relayEvent",
      "shortDoc": "Create an event handler on this element such that when the event fires and is handled by this element,\nit will be rel..."
    },
    {
      "tagname": "method",
      "name": "remove",
      "member": "Ext.core.Element",
      "doc": "<p>Removes this element's dom reference.  Note that event and cache removal is handled at <a href=\"#/api/Ext-method-removeNode\" rel=\"Ext-method-removeNode\" class=\"docClass\">Ext.removeNode</a></p>\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 636,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-remove",
      "shortDoc": "<p>Removes this element's dom reference.  Note that event and cache removal is handled at <a href=\"#/api/Ext-method-removeNode\" rel=\"Ext-method-removeNode\" class=\"docClass\">Ext.removeNode</a></p>\n\n"
    },
    {
      "tagname": "method",
      "name": "removeAllListeners",
      "member": "Ext.core.Element",
      "doc": "<p>Removes all previous added listeners from this element</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 581,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-removeAllListeners",
      "shortDoc": "<p>Removes all previous added listeners from this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeAnchor",
      "member": "Ext.core.Element",
      "doc": "<p>Remove any anchor to this element. See <a href=\"#/api/Ext.Layer-method-anchorTo\" rel=\"Ext.Layer-method-anchorTo\" class=\"docClass\">anchorTo</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.alignment.js",
      "linenr": 85,
      "html_filename": "Element.alignment.html",
      "href": "Element.alignment.html#Ext-core-Element-method-removeAnchor",
      "shortDoc": "<p>Remove any anchor to this element. See <a href=\"#/api/Ext.Layer-method-anchorTo\" rel=\"Ext.Layer-method-anchorTo\" class=\"docClass\">anchorTo</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeCls",
      "member": "Ext.core.Element",
      "doc": "<p>Removes one or more CSS classes from the element.</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "className",
          "doc": "<p>The CSS classes to remove separated by space, or an array of classes</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 104,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-removeCls",
      "shortDoc": "<p>Removes one or more CSS classes from the element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeListener",
      "member": "Ext.core.Element",
      "doc": "<p>Removes an event handler from this element.  The shorthand version <a href=\"#/api/Ext.Layer-method-un\" rel=\"Ext.Layer-method-un\" class=\"docClass\">un</a> is equivalent.\n<b>Note</b>: if a <i>scope</i> was explicitly specified when <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">adding</a> the\nlistener, the same scope must be specified here.\nExample:</p>\n\n<pre><code>el.removeListener('click', this.handlerFn);\n// or\nel.un('click', this.handlerFn);\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event from which to remove the handler.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The handler function to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 560,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-removeListener",
      "shortDoc": "Removes an event handler from this element.  The shorthand version un is equivalent.\nNote: if a scope was explicitly ..."
    },
    {
      "tagname": "method",
      "name": "repaint",
      "member": "Ext.core.Element",
      "doc": "<p>Forces the browser to repaint this element</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 1009,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-repaint",
      "shortDoc": "<p>Forces the browser to repaint this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "replace",
      "member": "Ext.core.Element",
      "doc": "<p>Replaces the passed element with this element</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The element to replace</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 103,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-replace",
      "shortDoc": "<p>Replaces the passed element with this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "replaceCls",
      "member": "Ext.core.Element",
      "doc": "<p>Replaces a CSS class on the element with another.  If the old name does not exist, the new name will simply be added.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "oldClassName",
          "doc": "<p>The CSS class to replace</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "newClassName",
          "doc": "<p>The replacement CSS class</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 193,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-replaceCls",
      "shortDoc": "<p>Replaces a CSS class on the element with another.  If the old name does not exist, the new name will simply be added.</p>\n"
    },
    {
      "tagname": "method",
      "name": "replaceWith",
      "member": "Ext.core.Element",
      "doc": "<p>Replaces this element with the passed element</p>\n",
      "params": [
        {
          "type": "Mixed/Object",
          "name": "el",
          "doc": "<p>The new element or a DomHelper config of an element to create</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 115,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-replaceWith",
      "shortDoc": "<p>Replaces this element with the passed element</p>\n"
    },
    {
      "tagname": "method",
      "name": "scale",
      "member": "Ext.core.Element",
      "doc": "<p>@deprecated 4.0\nAnimates the transition of an element's dimensions from a starting height/width\nto an ending height/width.  This method is a convenience implementation of <a href=\"#/api/shift\" rel=\"shift\" class=\"docClass\">shift</a>.\nUsage:</p>\n\n<pre><code>// change height and width to 100x100 pixels\nel.scale(100, 100);\n\n// common config options shown with default values.  The height and width will default to\n// the element&#39;s existing values if passed as null.\nel.scale(\n    [element&#39;s width],\n    [element&#39;s height], {\n        easing: 'easeOut',\n        duration: .35\n    }\n);\n</code></pre>\n\n",
      "params": [
        {
          "type": "Number",
          "name": "width",
          "doc": "<p>The new width (pass undefined to keep the original width)</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "height",
          "doc": "<p>The new height (pass undefined to keep the original height)</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 832,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-scale",
      "shortDoc": "@deprecated 4.0\nAnimates the transition of an element's dimensions from a starting height/width\nto an ending height/w..."
    },
    {
      "tagname": "method",
      "name": "scroll",
      "member": "Ext.core.Element",
      "doc": "<p>Scrolls this element the specified direction. Does bounds checking to make sure the scroll is\nwithin this element's scrollable range.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "direction",
          "doc": "<p>Possible values are: \"l\" (or \"left\"), \"r\" (or \"right\"), \"t\" (or \"top\", or \"up\"), \"b\" (or \"bottom\", or \"down\").</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "distance",
          "doc": "<p>How far to scroll the element in pixels</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>Returns true if a scroll was triggered or false if the element\nwas scrolled as far as it could go.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.scroll.js",
      "linenr": 128,
      "html_filename": "Element.scroll.html",
      "href": "Element.scroll.html#Ext-core-Element-method-scroll",
      "shortDoc": "Scrolls this element the specified direction. Does bounds checking to make sure the scroll is\nwithin this element's s..."
    },
    {
      "tagname": "method",
      "name": "scrollIntoView",
      "member": "Ext.core.Element",
      "doc": "<p>Scrolls this element into view within the passed container.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "container",
          "doc": "<p>(optional) The container element to scroll (defaults to document.body).  Should be a\nstring (id), dom node, or Ext.core.Element.</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "hscroll",
          "doc": "<p>(optional) False to disable horizontal scroll (defaults to true)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.scroll.js",
      "linenr": 80,
      "html_filename": "Element.scroll.html",
      "href": "Element.scroll.html#Ext-core-Element-method-scrollIntoView",
      "shortDoc": "<p>Scrolls this element into view within the passed container.</p>\n"
    },
    {
      "tagname": "method",
      "name": "scrollTo",
      "member": "Ext.core.Element",
      "doc": "<p>Scrolls this element the specified scroll point. It does NOT do bounds checking so if you scroll to a weird value it will try to do it. For auto bounds checking, use scroll().</p>\n",
      "params": [
        {
          "type": "String",
          "name": "side",
          "doc": "<p>Either \"left\" for scrollLeft values or \"top\" for scrollTop values.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "value",
          "doc": "<p>The new scroll value</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.scroll.js",
      "linenr": 49,
      "html_filename": "Element.scroll.html",
      "href": "Element.scroll.html#Ext-core-Element-method-scrollTo",
      "shortDoc": "Scrolls this element the specified scroll point. It does NOT do bounds checking so if you scroll to a weird value it ..."
    },
    {
      "tagname": "method",
      "name": "select",
      "member": "Ext.core.Element",
      "doc": "<p>Creates a <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">Ext.CompositeElement</a> for child nodes based on the passed CSS selector (the selector should not contain an id).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>The CSS selector</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "CompositeElement/CompositeElement",
        "doc": "<p>The composite element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 58,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-select",
      "shortDoc": "Creates a Ext.CompositeElement for child nodes based on the passed CSS selector (the selector should not contain an i..."
    },
    {
      "tagname": "method",
      "name": "serializeForm",
      "member": "Ext.core.Element",
      "doc": "<p>Serializes a DOM form into a url encoded string</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "form",
          "doc": "<p>The form</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The url encoded form</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static-more.js",
      "linenr": 239,
      "html_filename": "Element.static-more.html",
      "href": "Element.static-more.html#Ext-core-Element-method-serializeForm",
      "shortDoc": "<p>Serializes a DOM form into a url encoded string</p>\n"
    },
    {
      "tagname": "method",
      "name": "set",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the passed attributes as attributes of this element (a style attribute can be a string, object or function)</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The object with the attributes</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "useSet",
          "doc": "<p>(optional) false to override the default setAttribute to use expandos.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 107,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-set",
      "shortDoc": "<p>Sets the passed attributes as attributes of this element (a style attribute can be a string, object or function)</p>\n"
    },
    {
      "tagname": "method",
      "name": "setBottom",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the element's CSS bottom style.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "bottom",
          "doc": "<p>The bottom CSS property value</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 103,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setBottom",
      "shortDoc": "<p>Sets the element's CSS bottom style.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setBounds",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the element's position and size in one shot. If animation is true then width, height, x and y will be animated concurrently.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "x",
          "doc": "<p>X value for new position (coordinates are page-based)</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "y",
          "doc": "<p>Y value for new position (coordinates are page-based)</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "width",
          "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels)</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n</ul></div></p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "height",
          "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels)</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 518,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setBounds",
      "shortDoc": "Sets the element's position and size in one shot. If animation is true then width, height, x and y will be animated c..."
    },
    {
      "tagname": "method",
      "name": "setBox",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the element's box. Use getBox() on another element to get a box obj. If animate is true then width, height, x and y will be animated concurrently.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "box",
          "doc": "<p>The box to fill {x, y, width, height}</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "adjust",
          "doc": "<p>(optional) Whether to adjust for box-model issues automatically</p>\n",
          "optional": true
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 308,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setBox",
      "shortDoc": "Sets the element's box. Use getBox() on another element to get a box obj. If animate is true then width, height, x an..."
    },
    {
      "tagname": "method",
      "name": "setDisplayed",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the CSS display property. Uses originalDisplay if the specified value is a boolean true.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>Boolean value to display the element using its default display, or a string to set the display directly.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 220,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-method-setDisplayed",
      "shortDoc": "<p>Sets the CSS display property. Uses originalDisplay if the specified value is a boolean true.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setHeight",
      "member": "Ext.core.Element",
      "doc": "<p>Set the height of this Element.</p>\n\n<pre><code>// change the height to 200px and animate with default configuration\nExt.fly('elementId').setHeight(200, true);\n\n// change the height to 150px and animate with a custom configuration\nExt.fly('elId').setHeight(150, {\n    duration : .5, // animation will have a duration of .5 seconds\n    // will change the content to \"finished\"\n    callback: function(){ this.<a href=\"#/api/Ext.Layer-method-update\" rel=\"Ext.Layer-method-update\" class=\"docClass\">update</a>(\"finished\"); }\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "height",
          "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels.)</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 571,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-setHeight",
      "shortDoc": "Set the height of this Element.\n\n// change the height to 200px and animate with default configuration\nExt.fly('elemen..."
    },
    {
      "tagname": "method",
      "name": "setLeft",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the element's left position directly using CSS style (instead of <a href=\"#/api/Ext.Layer-method-setX\" rel=\"Ext.Layer-method-setX\" class=\"docClass\">setX</a>).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "left",
          "doc": "<p>The left CSS property value</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 73,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setLeft",
      "shortDoc": "<p>Sets the element's left position directly using CSS style (instead of <a href=\"#/api/Ext.Layer-method-setX\" rel=\"Ext.Layer-method-setX\" class=\"docClass\">setX</a>).</p>\n"
    },
    {
      "tagname": "method",
      "name": "setLeftTop",
      "member": "Ext.core.Element",
      "doc": "<p>Quick set left and top adding default units</p>\n",
      "params": [
        {
          "type": "String",
          "name": "left",
          "doc": "<p>The left CSS property value</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "top",
          "doc": "<p>The top CSS property value</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 423,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setLeftTop",
      "shortDoc": "<p>Quick set left and top adding default units</p>\n"
    },
    {
      "tagname": "method",
      "name": "setLocation",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "x",
          "doc": "<p>X value for new position (coordinates are page-based)</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "y",
          "doc": "<p>Y value for new position (coordinates are page-based)</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 134,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setLocation",
      "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must b..."
    },
    {
      "tagname": "method",
      "name": "setOpacity",
      "member": "Ext.core.Element",
      "doc": "<p>Set the opacity of the element</p>\n",
      "params": [
        {
          "type": "Float",
          "name": "opacity",
          "doc": "<p>The new opacity. 0 = transparent, .5 = 50% visibile, 1 = fully visible, etc</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) a standard Element animation config object or <tt>true</tt> for\nthe default animation (<tt>{duration: .35, easing: 'easeIn'}</tt>)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 328,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-setOpacity",
      "shortDoc": "<p>Set the opacity of the element</p>\n"
    },
    {
      "tagname": "method",
      "name": "setPositioning",
      "member": "Ext.core.Element",
      "doc": "<p>Set positioning with an object returned by getPositioning().</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "posCfg",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 256,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setPositioning",
      "shortDoc": "<p>Set positioning with an object returned by getPositioning().</p>\n"
    },
    {
      "tagname": "method",
      "name": "setRegion",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the element's position and size the specified region. If animation is true then width, height, x and y will be animated concurrently.</p>\n",
      "params": [
        {
          "type": "Ext.util.Region",
          "name": "region",
          "doc": "<p>The region to fill</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 554,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setRegion",
      "shortDoc": "Sets the element's position and size the specified region. If animation is true then width, height, x and y will be a..."
    },
    {
      "tagname": "method",
      "name": "setRight",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the element's CSS right style.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "right",
          "doc": "<p>The right CSS property value</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 93,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setRight",
      "shortDoc": "<p>Sets the element's CSS right style.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setSize",
      "member": "Ext.core.Element",
      "doc": "<p>Set the size of this Element. If animation is true, both width and height will be animated concurrently.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "width",
          "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n</ul></div></p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "height",
          "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 763,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-setSize",
      "shortDoc": "<p>Set the size of this Element. If animation is true, both width and height will be animated concurrently.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setStyle",
      "member": "Ext.core.Element",
      "doc": "<p>Wrapper for setting style properties, also takes single object parameter of multiple styles.</p>\n",
      "params": [
        {
          "type": "String/Object",
          "name": "property",
          "doc": "<p>The style property to be set, or an object of multiple styles.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "value",
          "doc": "<p>(optional) The value to apply to the given property, or null if an object was passed.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 295,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-setStyle",
      "shortDoc": "<p>Wrapper for setting style properties, also takes single object parameter of multiple styles.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setTop",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the element's top position directly using CSS style (instead of <a href=\"#/api/Ext.Layer-method-setY\" rel=\"Ext.Layer-method-setY\" class=\"docClass\">setY</a>).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "top",
          "doc": "<p>The top CSS property value</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 83,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setTop",
      "shortDoc": "<p>Sets the element's top position directly using CSS style (instead of <a href=\"#/api/Ext.Layer-method-setY\" rel=\"Ext.Layer-method-setY\" class=\"docClass\">setY</a>).</p>\n"
    },
    {
      "tagname": "method",
      "name": "setVisibilityMode",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the element's visibility mode. When setVisible() is called it\nwill use this to determine whether to set the visibility or the display property.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "visMode",
          "doc": "<p>Ext.core.Element.VISIBILITY or Ext.core.Element.DISPLAY</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 72,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-method-setVisibilityMode",
      "shortDoc": "Sets the element's visibility mode. When setVisible() is called it\nwill use this to determine whether to set the visi..."
    },
    {
      "tagname": "method",
      "name": "setVisible",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the visibility of the element (see details). If the visibilityMode is set to Element.DISPLAY, it will use\nthe display property to hide the element, otherwise it uses visibility. The default is to hide and show using the visibility property.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "visible",
          "doc": "<p>Whether the element is visible</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 104,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-method-setVisible",
      "shortDoc": "Sets the visibility of the element (see details). If the visibilityMode is set to Element.DISPLAY, it will use\nthe di..."
    },
    {
      "tagname": "method",
      "name": "setWidth",
      "member": "Ext.core.Element",
      "doc": "<p>Set the width of this Element.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "width",
          "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n</ul></div></p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 543,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-setWidth",
      "shortDoc": "<p>Set the width of this Element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setX",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "The",
          "doc": "<p>X position of the element</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 53,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setX",
      "shortDoc": "Sets the X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coor..."
    },
    {
      "tagname": "method",
      "name": "setXY",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "pos",
          "doc": "<p>Contains X &amp; Y [x, y] values for new position (coordinates are page-based)</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 113,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setXY",
      "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must b..."
    },
    {
      "tagname": "method",
      "name": "setY",
      "member": "Ext.core.Element",
      "doc": "<p>Sets the Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "The",
          "doc": "<p>Y position of the element</p>\n",
          "optional": false
        },
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 63,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-setY",
      "shortDoc": "Sets the Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coor..."
    },
    {
      "tagname": "method",
      "name": "setZIndex",
      "member": "Ext.Layer",
      "doc": "<p>Sets the z-index of this layer and adjusts any shadow and shim z-indexes. The layer z-index is automatically\nincremented depending upon the presence of a shim or a shadow in so that it always shows above those two associated elements.</p>\n\n\n<p>Any shim, will be assigned the passed z-index. A shadow will be assigned the next highet z-index, and the Layer's\nelement will receive the highest  z-index.\n\n",
      "params": [
        {
          "type": "Number",
          "name": "zindex",
          "doc": "<p>The new z-index to set</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "this",
        "doc": "<p>The Layer</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
      "linenr": 447,
      "html_filename": "Layer.html",
      "href": "Layer.html#Ext-Layer-method-setZIndex",
      "shortDoc": "Sets the z-index of this layer and adjusts any shadow and shim z-indexes. The layer z-index is automatically\nincremen..."
    },
    {
      "tagname": "method",
      "name": "shift",
      "member": "Ext.core.Element",
      "doc": "<p>@deprecated 4.0\nAnimates the transition of any combination of an element's dimensions, xy position and/or opacity.\nAny of these properties not specified in the config object will not be changed.  This effect\nrequires that at least one new dimension, position or opacity setting must be passed in on\nthe config object in order for the function to have any effect.\nUsage:</p>\n\n<pre><code>// slide the element horizontally to x position 200 while changing the height and opacity\nel.shift({ x: 200, height: 50, opacity: .8 });\n\n// common config options shown with default values.\nel.shift({\n    width: [element&#39;s width],\n    height: [element&#39;s height],\n    x: [element&#39;s x position],\n    y: [element&#39;s y position],\n    opacity: [element&#39;s opacity],\n    easing: 'easeOut',\n    duration: .35\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>Object literal with any of the Fx config options</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 864,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-shift",
      "shortDoc": "@deprecated 4.0\nAnimates the transition of any combination of an element's dimensions, xy position and/or opacity.\nAn..."
    },
    {
      "tagname": "method",
      "name": "show",
      "member": "Ext.core.Element",
      "doc": "<p>Show this element - Uses display mode to determine whether to use \"display\" or \"visibility\". See <a href=\"#/api/Ext.Layer-method-setVisible\" rel=\"Ext.Layer-method-setVisible\" class=\"docClass\">setVisible</a>.</p>\n",
      "params": [
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 260,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-method-show",
      "shortDoc": "<p>Show this element - Uses display mode to determine whether to use \"display\" or \"visibility\". See <a href=\"#/api/Ext.Layer-method-setVisible\" rel=\"Ext.Layer-method-setVisible\" class=\"docClass\">setVisible</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "slideIn",
      "member": "Ext.core.Element",
      "doc": "<p>Slides the element into view.  An anchor point can be optionally passed to set the point of\norigin for the slide effect.  This function automatically handles wrapping the element with\na fixed-size container if needed.  See the Fx class overview for valid anchor point options.\nUsage:</p>\n\n<pre><code>// default: slide the element in from the top\nel.slideIn();\n\n// custom: slide the element in from the right with a 2-second duration\nel.slideIn('r', { duration: 2 });\n\n// common config options shown with default values\nel.slideIn('t', {\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "anchor",
          "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to top: 't')</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "slideOut",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 81,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-slideIn",
      "shortDoc": "Slides the element into view.  An anchor point can be optionally passed to set the point of\norigin for the slide effe..."
    },
    {
      "tagname": "method",
      "name": "slideOut",
      "member": "Ext.core.Element",
      "doc": "<p>Slides the element out of view.  An anchor point can be optionally passed to set the end point\nfor the slide effect.  When the effect is completed, the element will be hidden (visibility =\n'hidden') but block elements will still take up space in the document.  The element must be removed\nfrom the DOM using the 'remove' config option if desired.  This function automatically handles\nwrapping the element with a fixed-size container if needed.  See the Fx class overview for valid anchor point options.\nUsage:</p>\n\n<pre><code>// default: slide the element out to the top\nel.slideOut();\n\n// custom: slide the element out to the right with a 2-second duration\nel.slideOut('r', { duration: 2 });\n\n// common config options shown with default values\nel.slideOut('t', {\n    easing: 'easeOut',\n    duration: 500,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "anchor",
          "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to top: 't')</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 330,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-slideOut",
      "shortDoc": "Slides the element out of view.  An anchor point can be optionally passed to set the end point\nfor the slide effect. ..."
    },
    {
      "tagname": "method",
      "name": "swallowEvent",
      "member": "Ext.core.Element",
      "doc": "<p>Stops the specified event(s) from bubbling and optionally prevents the default action</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "eventName",
          "doc": "<p>an event / array of events to stop from bubbling</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "preventDefault",
          "doc": "<p>(optional) true to prevent the default action too</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element-more.js",
      "linenr": 40,
      "html_filename": "Element-more.html",
      "href": "Element-more.html#Ext-core-Element-method-swallowEvent",
      "shortDoc": "<p>Stops the specified event(s) from bubbling and optionally prevents the default action</p>\n"
    },
    {
      "tagname": "method",
      "name": "switchOff",
      "member": "Ext.core.Element",
      "doc": "<p>Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television).\nWhen the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will still\ntake up space in the document. The element must be removed from the DOM using the 'remove' config option if desired.\nUsage:</p>\n\n<pre><code>// default\nel.switchOff();\n\n// all config options shown with default values\nel.switchOff({\n    easing: 'easeIn',\n    duration: .3,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.anim.js",
      "linenr": 429,
      "html_filename": "Element.anim.html",
      "href": "Element.anim.html#Ext-core-Element-method-switchOff",
      "shortDoc": "Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television).\nWhe..."
    },
    {
      "tagname": "method",
      "name": "toggle",
      "member": "Ext.core.Element",
      "doc": "<p>Toggles the element's visibility or display, depending on visibility mode.</p>\n",
      "params": [
        {
          "type": "Boolean/Object",
          "name": "animate",
          "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 209,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-method-toggle",
      "shortDoc": "<p>Toggles the element's visibility or display, depending on visibility mode.</p>\n"
    },
    {
      "tagname": "method",
      "name": "toggleCls",
      "member": "Ext.core.Element",
      "doc": "<p>Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "className",
          "doc": "<p>The CSS class to toggle</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 153,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-toggleCls",
      "shortDoc": "<p>Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it).</p>\n"
    },
    {
      "tagname": "method",
      "name": "translatePoints",
      "member": "Ext.core.Element",
      "doc": "<p>Translates the passed page coordinates into left/top css values for this element</p>\n",
      "params": [
        {
          "type": "Number/Array",
          "name": "x",
          "doc": "<p>The page x or an array containing [x, y]</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "y",
          "doc": "<p>(optional) The page y, required if x is not an array</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object with left and top properties. e.g. {left: (value), top: (value)}</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.position.js",
      "linenr": 277,
      "html_filename": "Element.position.html",
      "href": "Element.position.html#Ext-core-Element-method-translatePoints",
      "shortDoc": "<p>Translates the passed page coordinates into left/top css values for this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.core.Element",
      "doc": "<p>Removes an event handler from this element (see <a href=\"#/api/Ext.Layer-method-removeListener\" rel=\"Ext.Layer-method-removeListener\" class=\"docClass\">removeListener</a> for additional notes).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event from which to remove the handler.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The handler function to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 744,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-un",
      "shortDoc": "<p>Removes an event handler from this element (see <a href=\"#/api/Ext.Layer-method-removeListener\" rel=\"Ext.Layer-method-removeListener\" class=\"docClass\">removeListener</a> for additional notes).</p>\n"
    },
    {
      "tagname": "method",
      "name": "unclip",
      "member": "Ext.core.Element",
      "doc": "<p>Return clipping (overflow) to original clipping before <tt><a href=\"#/api/Ext.Layer-method-clip\" rel=\"Ext.Layer-method-clip\" class=\"docClass\">clip</a></tt> was called</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 652,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-unclip",
      "shortDoc": "<p>Return clipping (overflow) to original clipping before <tt><a href=\"#/api/Ext.Layer-method-clip\" rel=\"Ext.Layer-method-clip\" class=\"docClass\">clip</a></tt> was called</p>\n"
    },
    {
      "tagname": "method",
      "name": "unitizeBox",
      "member": "Ext.core.Element",
      "doc": "<p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n",
      "params": [
        {
          "type": "Number|String",
          "name": "box",
          "doc": "<p>The encoded margins</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "units",
          "doc": "<p>The type of units to add</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>An string with unitized (px if units is not specified) metrics for top, right, bottom and left</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.static.js",
      "linenr": 61,
      "html_filename": "Element.static.html",
      "href": "Element.static.html#Ext-core-Element-method-unitizeBox",
      "shortDoc": "Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, ..."
    },
    {
      "tagname": "method",
      "name": "unmask",
      "member": "Ext.core.Element",
      "doc": "<p>Removes a previously applied mask.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx-more.js",
      "linenr": 123,
      "html_filename": "Element.fx-more.html",
      "href": "Element.fx-more.html#Ext-core-Element-method-unmask",
      "shortDoc": "<p>Removes a previously applied mask.</p>\n"
    },
    {
      "tagname": "method",
      "name": "unselectable",
      "member": "Ext.core.Element",
      "doc": "<p>Disables text selection for this element (normalized across browsers)</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.style.js",
      "linenr": 1022,
      "html_filename": "Element.style.html",
      "href": "Element.style.html#Ext-core-Element-method-unselectable",
      "shortDoc": "<p>Disables text selection for this element (normalized across browsers)</p>\n"
    },
    {
      "tagname": "method",
      "name": "up",
      "member": "Ext.core.Element",
      "doc": "<p>Walks up the dom looking for a parent node that matches the passed simple selector (e.g. div.some-class or span:first-child).\nThis is a shortcut for findParentNode() that always returns an Ext.core.Element.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "selector",
          "doc": "<p>The simple selector to test</p>\n",
          "optional": false
        },
        {
          "type": "Number/Mixed",
          "name": "maxDepth",
          "doc": "<p>(optional) The max depth to</p>\n\n<pre><code>        search as a number or element (defaults to 10 || document.body)\n</code></pre>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The matching DOM node (or null if no match was found)</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.traversal.js",
      "linenr": 46,
      "html_filename": "Element.traversal.html",
      "href": "Element.traversal.html#Ext-core-Element-method-up",
      "shortDoc": "Walks up the dom looking for a parent node that matches the passed simple selector (e.g. div.some-class or span:first..."
    },
    {
      "tagname": "method",
      "name": "update",
      "member": "Ext.core.Element",
      "doc": "<p>Update the innerHTML of this element</p>\n",
      "params": [
        {
          "type": "String",
          "name": "html",
          "doc": "<p>The new HTML</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 714,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-method-update",
      "shortDoc": "<p>Update the innerHTML of this element</p>\n"
    },
    {
      "tagname": "method",
      "name": "wrap",
      "member": "Ext.core.Element",
      "doc": "<p>Creates and wraps this element with another element</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>(optional) DomHelper element config object for the wrapper element or null for an empty div</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "returnDom",
          "doc": "<p>(optional) True to return the raw DOM element instead of Ext.core.Element</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLElement/Element",
        "doc": "<p>The newly created wrapper element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.insertion.js",
      "linenr": 155,
      "html_filename": "Element.insertion.html",
      "href": "Element.insertion.html#Ext-core-Element-method-wrap",
      "shortDoc": "<p>Creates and wraps this element with another element</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "DISPLAY",
      "member": "Ext.core.Element",
      "type": "Number",
      "doc": "<p>Visibility mode constant for use with <a href=\"#/api/Ext.Layer-method-setVisibilityMode\" rel=\"Ext.Layer-method-setVisibilityMode\" class=\"docClass\">setVisibilityMode</a>. Use display to hide element</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 10,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-property-DISPLAY"
    },
    {
      "tagname": "property",
      "name": "OFFSETS",
      "member": "Ext.core.Element",
      "type": "Number",
      "doc": "<p>Visibility mode constant for use with <a href=\"#/api/Ext.Layer-method-setVisibilityMode\" rel=\"Ext.Layer-method-setVisibilityMode\" class=\"docClass\">setVisibilityMode</a>. Use offsets (x and y positioning offscreen)\nto hide element.</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 17,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-property-OFFSETS"
    },
    {
      "tagname": "property",
      "name": "VISIBILITY",
      "member": "Ext.core.Element",
      "type": "Number",
      "doc": "<p>Visibility mode constant for use with <a href=\"#/api/Ext.Layer-method-setVisibilityMode\" rel=\"Ext.Layer-method-setVisibilityMode\" class=\"docClass\">setVisibilityMode</a>. Use visibility to hide element</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 4,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-property-VISIBILITY"
    },
    {
      "tagname": "property",
      "name": "autoBoxAdjust",
      "member": "Ext.core.Element",
      "type": "Boolean",
      "doc": "<p>true to automatically adjust width and height settings for box-model issues (default to true)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 772,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-property-autoBoxAdjust"
    },
    {
      "tagname": "property",
      "name": "defaultUnit",
      "member": "Ext.core.Element",
      "type": "String",
      "doc": "<p>The default unit to append to CSS values where a unit isn't provided (defaults to px).</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 394,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-property-defaultUnit"
    },
    {
      "tagname": "property",
      "name": "dom",
      "member": "Ext.core.Element",
      "type": "HTMLElement",
      "doc": "<p>The DOM element</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 89,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-property-dom"
    },
    {
      "tagname": "property",
      "name": "id",
      "member": "Ext.core.Element",
      "type": "String",
      "doc": "<p>The DOM element ID</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 95,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-property-id"
    },
    {
      "tagname": "property",
      "name": "originalDisplay",
      "member": "Ext.core.Element",
      "type": "String",
      "doc": "<p>The element's default display mode  (defaults to \"\")</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 65,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-property-originalDisplay"
    },
    {
      "tagname": "property",
      "name": "visibilityCls",
      "member": "Ext.core.Element",
      "type": "String",
      "doc": "<p>Defaults to 'x-hide-nosize'</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.fx.js",
      "linenr": 28,
      "html_filename": "Element.fx.html",
      "href": "Element.fx.html#Ext-core-Element-property-visibilityCls"
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "DOMActivate",
      "member": "Ext.core.Element",
      "doc": "<p>Where supported. Fires when an element is activated, for instance, through a mouse click or a keypress.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 335,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-DOMActivate",
      "shortDoc": "<p>Where supported. Fires when an element is activated, for instance, through a mouse click or a keypress.</p>\n"
    },
    {
      "tagname": "event",
      "name": "DOMAttrModified",
      "member": "Ext.core.Element",
      "doc": "<p>Where supported. Fires when an attribute has been modified.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 379,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-DOMAttrModified",
      "shortDoc": "<p>Where supported. Fires when an attribute has been modified.</p>\n"
    },
    {
      "tagname": "event",
      "name": "DOMCharacterDataModified",
      "member": "Ext.core.Element",
      "doc": "<p>Where supported. Fires when the character data has been modified.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 386,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-DOMCharacterDataModified",
      "shortDoc": "<p>Where supported. Fires when the character data has been modified.</p>\n"
    },
    {
      "tagname": "event",
      "name": "DOMFocusIn",
      "member": "Ext.core.Element",
      "doc": "<p>Where supported. Similar to HTML focus event, but can be applied to any focusable element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 321,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-DOMFocusIn",
      "shortDoc": "<p>Where supported. Similar to HTML focus event, but can be applied to any focusable element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "DOMFocusOut",
      "member": "Ext.core.Element",
      "doc": "<p>Where supported. Similar to HTML blur event, but can be applied to any focusable element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 328,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-DOMFocusOut",
      "shortDoc": "<p>Where supported. Similar to HTML blur event, but can be applied to any focusable element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "DOMNodeInserted",
      "member": "Ext.core.Element",
      "doc": "<p>Where supported. Fires when a node has been added as a child of another node.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 351,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-DOMNodeInserted",
      "shortDoc": "<p>Where supported. Fires when a node has been added as a child of another node.</p>\n"
    },
    {
      "tagname": "event",
      "name": "DOMNodeInsertedIntoDocument",
      "member": "Ext.core.Element",
      "doc": "<p>Where supported. Fires when a node is being inserted into a document.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 372,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-DOMNodeInsertedIntoDocument",
      "shortDoc": "<p>Where supported. Fires when a node is being inserted into a document.</p>\n"
    },
    {
      "tagname": "event",
      "name": "DOMNodeRemoved",
      "member": "Ext.core.Element",
      "doc": "<p>Where supported. Fires when a descendant node of the element is removed.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 358,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-DOMNodeRemoved",
      "shortDoc": "<p>Where supported. Fires when a descendant node of the element is removed.</p>\n"
    },
    {
      "tagname": "event",
      "name": "DOMNodeRemovedFromDocument",
      "member": "Ext.core.Element",
      "doc": "<p>Where supported. Fires when a node is being removed from a document.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 365,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-DOMNodeRemovedFromDocument",
      "shortDoc": "<p>Where supported. Fires when a node is being removed from a document.</p>\n"
    },
    {
      "tagname": "event",
      "name": "DOMSubtreeModified",
      "member": "Ext.core.Element",
      "doc": "<p>Where supported. Fires when the subtree is modified.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 344,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-DOMSubtreeModified",
      "shortDoc": "<p>Where supported. Fires when the subtree is modified.</p>\n"
    },
    {
      "tagname": "event",
      "name": "abort",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when an object/image is stopped from loading before completely loaded.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 247,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-abort",
      "shortDoc": "<p>Fires when an object/image is stopped from loading before completely loaded.</p>\n"
    },
    {
      "tagname": "event",
      "name": "blur",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when an element loses focus either via the pointing device or by tabbing navigation.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 312,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-blur",
      "shortDoc": "<p>Fires when an element loses focus either via the pointing device or by tabbing navigation.</p>\n"
    },
    {
      "tagname": "event",
      "name": "change",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a control loses the input focus and its value has been modified since gaining focus.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 284,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-change",
      "shortDoc": "<p>Fires when a control loses the input focus and its value has been modified since gaining focus.</p>\n"
    },
    {
      "tagname": "event",
      "name": "click",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a mouse click is detected within the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 137,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-click",
      "shortDoc": "<p>Fires when a mouse click is detected within the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "contextmenu",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a right click is detected within the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 144,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-contextmenu",
      "shortDoc": "<p>Fires when a right click is detected within the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "dblclick",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a mouse double click is detected within the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 151,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-dblclick",
      "shortDoc": "<p>Fires when a mouse double click is detected within the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "error",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when an object/image/frame cannot be loaded properly.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 254,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-error",
      "shortDoc": "<p>Fires when an object/image/frame cannot be loaded properly.</p>\n"
    },
    {
      "tagname": "event",
      "name": "focus",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when an element receives focus either via the pointing device or by tab navigation.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 305,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-focus",
      "shortDoc": "<p>Fires when an element receives focus either via the pointing device or by tab navigation.</p>\n"
    },
    {
      "tagname": "event",
      "name": "keydown",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a keydown is detected within the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 216,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-keydown",
      "shortDoc": "<p>Fires when a keydown is detected within the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "keypress",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a keypress is detected within the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 209,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-keypress",
      "shortDoc": "<p>Fires when a keypress is detected within the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "keyup",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a keyup is detected within the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 223,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-keyup",
      "shortDoc": "<p>Fires when a keyup is detected within the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "load",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when the user agent finishes loading all content within the element. Only supported by window, frames, objects and images.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 233,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-load",
      "shortDoc": "Fires when the user agent finishes loading all content within the element. Only supported by window, frames, objects ..."
    },
    {
      "tagname": "event",
      "name": "mousedown",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a mousedown is detected within the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 158,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-mousedown",
      "shortDoc": "<p>Fires when a mousedown is detected within the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "mouseenter",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when the mouse enters the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 193,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-mouseenter",
      "shortDoc": "<p>Fires when the mouse enters the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "mouseleave",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when the mouse leaves the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 200,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-mouseleave",
      "shortDoc": "<p>Fires when the mouse leaves the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "mousemove",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a mousemove is detected with the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 179,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-mousemove",
      "shortDoc": "<p>Fires when a mousemove is detected with the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "mouseout",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a mouseout is detected with the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 186,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-mouseout",
      "shortDoc": "<p>Fires when a mouseout is detected with the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "mouseover",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a mouseover is detected within the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 172,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-mouseover",
      "shortDoc": "<p>Fires when a mouseover is detected within the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "mouseup",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a mouseup is detected within the element.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 165,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-mouseup",
      "shortDoc": "<p>Fires when a mouseup is detected within the element.</p>\n"
    },
    {
      "tagname": "event",
      "name": "reset",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a form is reset.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 298,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-reset",
      "shortDoc": "<p>Fires when a form is reset.</p>\n"
    },
    {
      "tagname": "event",
      "name": "resize",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a document view is resized.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 261,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-resize",
      "shortDoc": "<p>Fires when a document view is resized.</p>\n"
    },
    {
      "tagname": "event",
      "name": "scroll",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a document view is scrolled.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 268,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-scroll",
      "shortDoc": "<p>Fires when a document view is scrolled.</p>\n"
    },
    {
      "tagname": "event",
      "name": "select",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a user selects some text in a text field, including input and textarea.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 277,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-select",
      "shortDoc": "<p>Fires when a user selects some text in a text field, including input and textarea.</p>\n"
    },
    {
      "tagname": "event",
      "name": "submit",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when a form is submitted.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 291,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-submit",
      "shortDoc": "<p>Fires when a form is submitted.</p>\n"
    },
    {
      "tagname": "event",
      "name": "unload",
      "member": "Ext.core.Element",
      "doc": "<p>Fires when the user agent removes all content from a window or frame. For elements, it fires when the target element or any of its content has been removed.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "t",
          "doc": "<p>The target of the event.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 240,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-core-Element-event-unload",
      "shortDoc": "Fires when the user agent removes all content from a window or frame. For elements, it fires when the target element ..."
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Layer.js",
  "linenr": 1,
  "html_filename": "Layer.html",
  "href": "Layer.html#Ext-Layer",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.core.Element"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});