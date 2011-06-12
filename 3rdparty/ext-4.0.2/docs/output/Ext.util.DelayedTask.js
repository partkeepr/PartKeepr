Ext.data.JsonP.Ext_util_DelayedTask({
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
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "The parameters to this constructor serve as defaults and are not required. ...",
        "static": false,
        "params": [
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) The default function to call.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The default scope (The <code><b>this</b></code> reference) in which the\nfunction is called. If not specified, <code>this</code> will refer to the browser window.</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The default Array of arguments.</p>\n",
            "name": "args"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
        "doc": "<p>The parameters to this constructor serve as defaults and are not required.</p>\n",
        "owner": "Ext.util.DelayedTask",
        "name": "DelayedTask",
        "html_filename": "DelayedTask.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 1
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-cancel",
        "shortDoc": "Cancel the last queued timeout ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
        "private": false,
        "params": [

        ],
        "name": "cancel",
        "owner": "Ext.util.DelayedTask",
        "doc": "<p>Cancel the last queued timeout</p>\n",
        "linenr": 62,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DelayedTask.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-delay",
        "shortDoc": "Cancels any pending timeout and queues a new one ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The milliseconds to delay</p>\n",
            "name": "delay"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) Overrides function passed to constructor</p>\n",
            "name": "newFn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Overrides scope passed to constructor. Remember that if no scope\nis specified, <code>this</code> will refer to the browser window.</p>\n",
            "name": "newScope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Overrides args passed to constructor</p>\n",
            "name": "newArgs"
          }
        ],
        "name": "delay",
        "owner": "Ext.util.DelayedTask",
        "doc": "<p>Cancels any pending timeout and queues a new one</p>\n",
        "linenr": 46,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DelayedTask.html"
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
  "href": "DelayedTask.html#Ext-util-DelayedTask",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.util.DelayedTask",
  "doc": "<p>The DelayedTask class provides a convenient way to \"buffer\" the execution of a method,\nperforming setTimeout where a new timeout cancels the old timeout. When called, the\ntask will wait the specified time period before executing. If durng that time period,\nthe task is called again, the original call will be cancelled. This continues so that\nthe function is only called a single time for each iteration.</p>\n\n<p>This method is especially useful for things like detecting whether a user has finished\ntyping in a text field. An example would be performing validation on a keypress. You can\nuse this class to buffer the keypress events for a certain number of milliseconds, and\nperform only if they stop for that amount of time.</p>\n\n<h2>Usage</h2>\n\n<pre><code>var task = new Ext.util.DelayedTask(function(){\n    alert(Ext.getDom('myInputField').value.length);\n});\n\n// Wait 500ms before calling our function. If the user presses another key\n// during that 500ms, it will be cancelled and we'll wait another 500ms.\nExt.get('myInputField').on('keypress', function(){\n    task.<a href=\"#/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a>(500);\n});\n</code></pre>\n\n<p>Note that we are using a DelayedTask here to illustrate a point. The configuration\noption <code>buffer</code> for <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener/on</a> will\nalso setup a delayed task for you to buffer events.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "DelayedTask.html",
  "extends": null
});