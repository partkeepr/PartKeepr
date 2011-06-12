Ext.data.JsonP.Ext_util_TaskRunner({
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
        "href": "TaskManager.html#Ext-util-TaskRunner-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": " ...",
        "static": false,
        "params": [
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The minimum precision in milliseconds supported by this TaskRunner instance\n(defaults to 10)</p>\n",
            "name": "interval"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "doc": "\n",
        "owner": "Ext.util.TaskRunner",
        "name": "TaskRunner",
        "html_filename": "TaskManager.html",
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
        "href": "TaskManager.html#Ext-util-TaskRunner-method-start",
        "shortDoc": "Starts a new task. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>A config object that supports the following properties:<ul>\n<li><code>run</code> : Function<div class=\"sub-desc\"><p>The function to execute each time the task is invoked. The\nfunction will be called at each interval and passed the <code>args</code> argument if specified, and the\ncurrent invocation count if not.</p>\n<p>If a particular scope (<code>this</code> reference) is required, be sure to specify it using the <code>scope</code> argument.</p>\n<p>Return <code>false</code> from this function to terminate the task.</p></div></li>\n<li><code>interval</code> : Number<div class=\"sub-desc\">The frequency in milliseconds with which the task\nshould be invoked.</div></li>\n<li><code>args</code> : Array<div class=\"sub-desc\">(optional) An array of arguments to be passed to the function\nspecified by <code>run</code>. If not specified, the current invocation count is passed.</div></li>\n<li><code>scope</code> : Object<div class=\"sub-desc\">(optional) The scope (<tt>this</tt> reference) in which to execute the\n<code>run</code> function. Defaults to the task config object.</div></li>\n<li><code>duration</code> : Number<div class=\"sub-desc\">(optional) The length of time in milliseconds to invoke\nthe task before stopping automatically (defaults to indefinite).</div></li>\n<li><code>repeat</code> : Number<div class=\"sub-desc\">(optional) The number of times to invoke the task before\nstopping automatically (defaults to indefinite).</div></li>\n</ul></p>\n\n\n<p>Before each invocation, <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> injects the property <code>taskRunCount</code> into the task object so\nthat calculations based on the repeat count can be performed.</p>\n\n",
            "name": "task"
          }
        ],
        "name": "start",
        "owner": "Ext.util.TaskRunner",
        "doc": "<p>Starts a new task.</p>\n",
        "linenr": 104,
        "return": {
          "type": "Object",
          "doc": "<p>The task</p>\n"
        },
        "html_filename": "TaskManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "TaskManager.html#Ext-util-TaskRunner-method-stop",
        "shortDoc": "Stops an existing running task. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The task to stop</p>\n",
            "name": "task"
          }
        ],
        "name": "stop",
        "owner": "Ext.util.TaskRunner",
        "doc": "<p>Stops an existing running task.</p>\n",
        "linenr": 137,
        "return": {
          "type": "Object",
          "doc": "<p>The task</p>\n"
        },
        "html_filename": "TaskManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "TaskManager.html#Ext-util-TaskRunner-method-stopAll",
        "shortDoc": "Stops all tasks that are currently running. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "params": [

        ],
        "name": "stopAll",
        "owner": "Ext.util.TaskRunner",
        "doc": "<p>Stops all tasks that are currently running.</p>\n",
        "linenr": 148,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "TaskManager.html"
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
  "href": "TaskManager.html#Ext-util-TaskRunner",
  "subclasses": [
    "Ext.TaskManager"
  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.util.TaskRunner",
  "doc": "<p>Provides the ability to execute one or more arbitrary tasks in a multithreaded\nmanner.  Generally, you can use the singleton <a href=\"#/api/Ext.TaskManager\" rel=\"Ext.TaskManager\" class=\"docClass\">Ext.TaskManager</a> instead, but\nif needed, you can create separate instances of TaskRunner.  Any number of\nseparate tasks can be started at any time and will run independently of each\nother. Example usage:</p>\n\n<pre><code>// Start a simple clock task that updates a div once per second\nvar updateClock = function(){\n    Ext.fly('clock').update(new Date().format('g:i:s A'));\n} \nvar task = {\n    run: updateClock,\n    interval: 1000 //1 second\n}\nvar runner = new Ext.util.TaskRunner();\nrunner.start(task);\n\n// equivalent using TaskManager\nExt.TaskManager.start({\n    run: updateClock,\n    interval: 1000\n});\n\n</code></pre>\n\n\n<p>See the <a href=\"#/api/Ext.util.TaskRunner-method-start\" rel=\"Ext.util.TaskRunner-method-start\" class=\"docClass\">start</a> method for details about how to configure a task object.</p>\n\n\n<p>Also see <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a>.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "TaskManager.html",
  "extends": null
});