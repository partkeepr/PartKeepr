Ext.data.JsonP.Ext_TaskManager({
  "tagname": "class",
  "name": "Ext.TaskManager",
  "doc": "<p>A static <a href=\"#/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a> instance that can be used to start and stop arbitrary tasks.  See\n<a href=\"#/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a> for supported methods and task config properties.</p>\n\n<pre><code>// Start a simple clock task that updates a div once per second\nvar task = {\n    run: function(){\n        Ext.fly('clock').update(new Date().format('g:i:s A'));\n    },\n    interval: 1000 //1 second\n}\nExt.TaskManager.start(task);\n</code></pre>\n\n\n<p>See the <a href=\"#/api/Ext.TaskManager-method-start\" rel=\"Ext.TaskManager-method-start\" class=\"docClass\">start</a> method for details about how to configure a task object.</p>\n\n",
  "extends": "Ext.util.TaskRunner",
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
      "name": "TaskManager",
      "member": "Ext.util.TaskRunner",
      "doc": "\n",
      "params": [
        {
          "type": "Number",
          "name": "interval",
          "doc": "<p>(optional) The minimum precision in milliseconds supported by this TaskRunner instance\n(defaults to 10)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/TaskManager.js",
      "linenr": 1,
      "html_filename": "TaskManager.html",
      "href": "TaskManager.html#Ext-util-TaskRunner-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "start",
      "member": "Ext.util.TaskRunner",
      "doc": "<p>Starts a new task.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "task",
          "doc": "<p>A config object that supports the following properties:<ul>\n<li><code>run</code> : Function<div class=\"sub-desc\"><p>The function to execute each time the task is invoked. The\nfunction will be called at each interval and passed the <code>args</code> argument if specified, and the\ncurrent invocation count if not.</p>\n<p>If a particular scope (<code>this</code> reference) is required, be sure to specify it using the <code>scope</code> argument.</p>\n<p>Return <code>false</code> from this function to terminate the task.</p></div></li>\n<li><code>interval</code> : Number<div class=\"sub-desc\">The frequency in milliseconds with which the task\nshould be invoked.</div></li>\n<li><code>args</code> : Array<div class=\"sub-desc\">(optional) An array of arguments to be passed to the function\nspecified by <code>run</code>. If not specified, the current invocation count is passed.</div></li>\n<li><code>scope</code> : Object<div class=\"sub-desc\">(optional) The scope (<tt>this</tt> reference) in which to execute the\n<code>run</code> function. Defaults to the task config object.</div></li>\n<li><code>duration</code> : Number<div class=\"sub-desc\">(optional) The length of time in milliseconds to invoke\nthe task before stopping automatically (defaults to indefinite).</div></li>\n<li><code>repeat</code> : Number<div class=\"sub-desc\">(optional) The number of times to invoke the task before\nstopping automatically (defaults to indefinite).</div></li>\n</ul></p>\n\n\n<p>Before each invocation, <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> injects the property <code>taskRunCount</code> into the task object so\nthat calculations based on the repeat count can be performed.</p>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The task</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/TaskManager.js",
      "linenr": 104,
      "html_filename": "TaskManager.html",
      "href": "TaskManager.html#Ext-util-TaskRunner-method-start",
      "shortDoc": "<p>Starts a new task.</p>\n"
    },
    {
      "tagname": "method",
      "name": "stop",
      "member": "Ext.util.TaskRunner",
      "doc": "<p>Stops an existing running task.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "task",
          "doc": "<p>The task to stop</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The task</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/TaskManager.js",
      "linenr": 137,
      "html_filename": "TaskManager.html",
      "href": "TaskManager.html#Ext-util-TaskRunner-method-stop",
      "shortDoc": "<p>Stops an existing running task.</p>\n"
    },
    {
      "tagname": "method",
      "name": "stopAll",
      "member": "Ext.util.TaskRunner",
      "doc": "<p>Stops all tasks that are currently running.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/TaskManager.js",
      "linenr": 148,
      "html_filename": "TaskManager.html",
      "href": "TaskManager.html#Ext-util-TaskRunner-method-stopAll",
      "shortDoc": "<p>Stops all tasks that are currently running.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/TaskManager.js",
  "linenr": 164,
  "html_filename": "TaskManager.html",
  "href": "TaskManager.html#Ext-TaskManager",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.util.TaskRunner"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});