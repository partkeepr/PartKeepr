Ext.data.JsonP.Ext_util_DelayedTask({
  "tagname": "class",
  "name": "Ext.util.DelayedTask",
  "doc": "<p>The DelayedTask class provides a convenient way to \"buffer\" the execution of a method,\nperforming setTimeout where a new timeout cancels the old timeout. When called, the\ntask will wait the specified time period before executing. If durng that time period,\nthe task is called again, the original call will be cancelled. This continues so that\nthe function is only called a single time for each iteration.</p>\n\n<p>This method is especially useful for things like detecting whether a user has finished\ntyping in a text field. An example would be performing validation on a keypress. You can\nuse this class to buffer the keypress events for a certain number of milliseconds, and\nperform only if they stop for that amount of time.</p>\n\n<h2>Usage</h2>\n\n<pre><code>var task = new Ext.util.DelayedTask(function(){\n    alert(Ext.getDom('myInputField').value.length);\n});\n\n// Wait 500ms before calling our function. If the user presses another key\n// during that 500ms, it will be cancelled and we'll wait another 500ms.\nExt.get('myInputField').on('keypress', function(){\n    task.<a href=\"#/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a>(500);\n});\n</code></pre>\n\n<p>Note that we are using a DelayedTask here to illustrate a point. The configuration\noption <code>buffer</code> for <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener/on</a> will\nalso setup a delayed task for you to buffer events.</p>\n",
  "extends": null,
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
      "name": "DelayedTask",
      "member": "Ext.util.DelayedTask",
      "doc": "<p>The parameters to this constructor serve as defaults and are not required.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>(optional) The default function to call.</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The default scope (The <code><b>this</b></code> reference) in which the\nfunction is called. If not specified, <code>this</code> will refer to the browser window.</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) The default Array of arguments.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/DelayedTask.js",
      "linenr": 1,
      "html_filename": "DelayedTask.html",
      "href": "DelayedTask.html#Ext-util-DelayedTask-method-constructor",
      "shortDoc": "<p>The parameters to this constructor serve as defaults and are not required.</p>\n"
    },
    {
      "tagname": "method",
      "name": "cancel",
      "member": "Ext.util.DelayedTask",
      "doc": "<p>Cancel the last queued timeout</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/DelayedTask.js",
      "linenr": 62,
      "html_filename": "DelayedTask.html",
      "href": "DelayedTask.html#Ext-util-DelayedTask-method-cancel",
      "shortDoc": "<p>Cancel the last queued timeout</p>\n"
    },
    {
      "tagname": "method",
      "name": "delay",
      "member": "Ext.util.DelayedTask",
      "doc": "<p>Cancels any pending timeout and queues a new one</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "delay",
          "doc": "<p>The milliseconds to delay</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "newFn",
          "doc": "<p>(optional) Overrides function passed to constructor</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "newScope",
          "doc": "<p>(optional) Overrides scope passed to constructor. Remember that if no scope\nis specified, <code>this</code> will refer to the browser window.</p>\n",
          "optional": true
        },
        {
          "type": "Array",
          "name": "newArgs",
          "doc": "<p>(optional) Overrides args passed to constructor</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/DelayedTask.js",
      "linenr": 46,
      "html_filename": "DelayedTask.html",
      "href": "DelayedTask.html#Ext-util-DelayedTask-method-delay",
      "shortDoc": "<p>Cancels any pending timeout and queues a new one</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/DelayedTask.js",
  "linenr": 1,
  "html_filename": "DelayedTask.html",
  "href": "DelayedTask.html#Ext-util-DelayedTask",
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