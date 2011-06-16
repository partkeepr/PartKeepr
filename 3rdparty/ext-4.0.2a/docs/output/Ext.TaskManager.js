Ext.data.JsonP.Ext_TaskManager({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.util.TaskRunner"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "TaskManager.html#Ext-TaskManager",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The minimum precision in milliseconds supported by this TaskRunner instance\n(defaults to 10)</p>\n",
            "name": "interval"
          }
        ],
        "href": "TaskManager.html#Ext-util-TaskRunner-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "shortDoc": " ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.util.TaskRunner",
        "doc": "\n",
        "linenr": 1,
        "html_filename": "TaskManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>A config object that supports the following properties:<ul>\n<li><code>run</code> : Function<div class=\"sub-desc\"><p>The function to execute each time the task is invoked. The\nfunction will be called at each interval and passed the <code>args</code> argument if specified, and the\ncurrent invocation count if not.</p>\n<p>If a particular scope (<code>this</code> reference) is required, be sure to specify it using the <code>scope</code> argument.</p>\n<p>Return <code>false</code> from this function to terminate the task.</p></div></li>\n<li><code>interval</code> : Number<div class=\"sub-desc\">The frequency in milliseconds with which the task\nshould be invoked.</div></li>\n<li><code>args</code> : Array<div class=\"sub-desc\">(optional) An array of arguments to be passed to the function\nspecified by <code>run</code>. If not specified, the current invocation count is passed.</div></li>\n<li><code>scope</code> : Object<div class=\"sub-desc\">(optional) The scope (<tt>this</tt> reference) in which to execute the\n<code>run</code> function. Defaults to the task config object.</div></li>\n<li><code>duration</code> : Number<div class=\"sub-desc\">(optional) The length of time in milliseconds to invoke\nthe task before stopping automatically (defaults to indefinite).</div></li>\n<li><code>repeat</code> : Number<div class=\"sub-desc\">(optional) The number of times to invoke the task before\nstopping automatically (defaults to indefinite).</div></li>\n</ul></p>\n\n\n<p>Before each invocation, <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> injects the property <code>taskRunCount</code> into the task object so\nthat calculations based on the repeat count can be performed.</p>\n\n",
            "name": "task"
          }
        ],
        "href": "TaskManager.html#Ext-util-TaskRunner-method-start",
        "return": {
          "type": "Object",
          "doc": "<p>The task</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "shortDoc": "Starts a new task. ...",
        "static": false,
        "name": "start",
        "owner": "Ext.util.TaskRunner",
        "doc": "<p>Starts a new task.</p>\n",
        "linenr": 104,
        "html_filename": "TaskManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The task to stop</p>\n",
            "name": "task"
          }
        ],
        "href": "TaskManager.html#Ext-util-TaskRunner-method-stop",
        "return": {
          "type": "Object",
          "doc": "<p>The task</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "shortDoc": "Stops an existing running task. ...",
        "static": false,
        "name": "stop",
        "owner": "Ext.util.TaskRunner",
        "doc": "<p>Stops an existing running task.</p>\n",
        "linenr": 137,
        "html_filename": "TaskManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "TaskManager.html#Ext-util-TaskRunner-method-stopAll",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "shortDoc": "Stops all tasks that are currently running. ...",
        "static": false,
        "name": "stopAll",
        "owner": "Ext.util.TaskRunner",
        "doc": "<p>Stops all tasks that are currently running.</p>\n",
        "linenr": 148,
        "html_filename": "TaskManager.html"
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
  "singleton": true,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.TaskManager",
  "doc": "<p>A static <a href=\"#/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a> instance that can be used to start and stop arbitrary tasks.  See\n<a href=\"#/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a> for supported methods and task config properties.</p>\n\n<pre><code>// Start a simple clock task that updates a div once per second\nvar task = {\n    run: function(){\n        Ext.fly('clock').update(new Date().format('g:i:s A'));\n    },\n    interval: 1000 //1 second\n}\nExt.TaskManager.start(task);\n</code></pre>\n\n\n<p>See the <a href=\"#/api/Ext.TaskManager-method-start\" rel=\"Ext.TaskManager-method-start\" class=\"docClass\">start</a> method for details about how to configure a task object.</p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 164,
  "xtypes": [

  ],
  "html_filename": "TaskManager.html",
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
  "extends": "Ext.util.TaskRunner"
});