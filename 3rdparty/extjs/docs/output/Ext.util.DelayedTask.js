Ext.data.JsonP.Ext_util_DelayedTask({
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "DelayedTask.html#Ext-util-DelayedTask",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
        "private": false,
        "shortDoc": "The parameters to this constructor serve as defaults and are not required. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.util.DelayedTask",
        "doc": "<p>The parameters to this constructor serve as defaults and are not required.</p>\n",
        "linenr": 1,
        "html_filename": "DelayedTask.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-cancel",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
        "private": false,
        "shortDoc": "Cancel the last queued timeout ...",
        "static": false,
        "name": "cancel",
        "owner": "Ext.util.DelayedTask",
        "doc": "<p>Cancel the last queued timeout</p>\n",
        "linenr": 62,
        "html_filename": "DelayedTask.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-delay",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
        "private": false,
        "shortDoc": "Cancels any pending timeout and queues a new one ...",
        "static": false,
        "name": "delay",
        "owner": "Ext.util.DelayedTask",
        "doc": "<p>Cancels any pending timeout and queues a new one</p>\n",
        "linenr": 46,
        "html_filename": "DelayedTask.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.util.DelayedTask",
  "doc": "<p>The DelayedTask class provides a convenient way to \"buffer\" the execution of a method,\nperforming setTimeout where a new timeout cancels the old timeout. When called, the\ntask will wait the specified time period before executing. If durng that time period,\nthe task is called again, the original call will be cancelled. This continues so that\nthe function is only called a single time for each iteration.</p>\n\n<p>This method is especially useful for things like detecting whether a user has finished\ntyping in a text field. An example would be performing validation on a keypress. You can\nuse this class to buffer the keypress events for a certain number of milliseconds, and\nperform only if they stop for that amount of time.</p>\n\n<h2>Usage</h2>\n\n<pre><code>var task = new Ext.util.DelayedTask(function(){\n    alert(Ext.getDom('myInputField').value.length);\n});\n\n// Wait 500ms before calling our function. If the user presses another key\n// during that 500ms, it will be cancelled and we'll wait another 500ms.\nExt.get('myInputField').on('keypress', function(){\n    task.<a href=\"#/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a>(500);\n});\n</code></pre>\n\n<p>Note that we are using a DelayedTask here to illustrate a point. The configuration\noption <code>buffer</code> for <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener/on</a> will\nalso setup a delayed task for you to buffer events.</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "DelayedTask.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": null
});