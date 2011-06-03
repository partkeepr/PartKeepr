Ext.data.JsonP.Ext_form_action_StandardSubmit({
  "tagname": "class",
  "name": "Ext.form.action.StandardSubmit",
  "doc": "<p>A class which handles submission of data from <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Form</a>s using a standard\n<tt>&lt;form&gt;</tt> element submit. It does not handle the response from the submit.</p>\n\n\n<p>If validation of the form fields fails, the Form's <a href=\"#/api/Ext.form.Basic--afterAction\" rel=\"Ext.form.Basic--afterAction\" class=\"docClass\">Ext.form.Basic.afterAction</a> method\nwill be called. Otherwise, afterAction will not be called.</p>\n\n\n<p>Instances of this class are only created by a <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Form</a> when\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submit</a>ting, when the form's <a href=\"#/api/Ext.form.Basic-cfg-standardSubmit\" rel=\"Ext.form.Basic-cfg-standardSubmit\" class=\"docClass\">Ext.form.Basic.standardSubmit</a>\nconfig option is <tt>true</tt>.</p>\n\n",
  "extends": "Ext.form.action.Submit",
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
      "name": "clientValidation",
      "member": "Ext.form.action.Submit",
      "type": "boolean",
      "doc": "<p>Determines whether a Form's fields are validated\nin a final call to <a href=\"#/api/Ext.form.Basic-method-isValid\" rel=\"Ext.form.Basic-method-isValid\" class=\"docClass\">isValid</a> prior to submission.\nPass <tt>false</tt> in the Form's submit options to prevent this. Defaults to true.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Submit.js",
      "linenr": 64,
      "html_filename": "Submit.html",
      "href": "Submit.html#Ext-form-action-Submit-cfg-clientValidation",
      "shortDoc": "Determines whether a Form's fields are validated\nin a final call to isValid prior to submission.\nPass false in the Fo..."
    },
    {
      "tagname": "cfg",
      "name": "failure",
      "member": "Ext.form.action.Action",
      "type": "Function",
      "doc": "<p>The function to call when a failure packet was received, or when an\nerror ocurred in the Ajax communication.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : Ext.form.Basic<div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : Ext.form.action.Action<div class=\"sub-desc\">The Action class. If an Ajax\nerror ocurred, the failure type will be in <a href=\"#/api/Ext.form.action.StandardSubmit-property-failureType\" rel=\"Ext.form.action.StandardSubmit-property-failureType\" class=\"docClass\">failureType</a>. The <a href=\"#/api/Ext.form.action.StandardSubmit-property-result\" rel=\"Ext.form.action.StandardSubmit-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 70,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-failure",
      "shortDoc": "The function to call when a failure packet was received, or when an\nerror ocurred in the Ajax communication.\nThe func..."
    },
    {
      "tagname": "cfg",
      "name": "form",
      "member": "Ext.form.action.Action",
      "type": "Ext.form.Basic",
      "doc": "<p>The <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">BasicForm</a> instance that\nis invoking this Action. Required.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 20,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-form"
    },
    {
      "tagname": "cfg",
      "name": "headers",
      "member": "Ext.form.action.Action",
      "type": "Object",
      "doc": "<p>Extra headers to be sent in the AJAX request for submit and load actions. See\n<a href=\"#/api/Ext.data.Connection--headers\" rel=\"Ext.data.Connection--headers\" class=\"docClass\">Ext.data.Connection.headers</a>.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 49,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-headers"
    },
    {
      "tagname": "cfg",
      "name": "method",
      "member": "Ext.form.action.Action",
      "type": "String",
      "doc": "<p>The HTTP method to use to access the requested URL. Defaults to the\n<a href=\"#/api/Ext.form.Basic-cfg-method\" rel=\"Ext.form.Basic-cfg-method\" class=\"docClass\">BasicForm's method</a>, or 'POST' if not specified.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 37,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-method"
    },
    {
      "tagname": "cfg",
      "name": "params",
      "member": "Ext.form.action.Action",
      "type": "Object/String",
      "doc": "<p>Extra parameter values to pass. These are added to the Form's\n<a href=\"#/api/Ext.form.Basic-cfg-baseParams\" rel=\"Ext.form.Basic-cfg-baseParams\" class=\"docClass\">Ext.form.Basic.baseParams</a> and passed to the specified URL along with the Form's\ninput fields.</p>\n\n\n<p>Parameters are encoded as standard HTTP parameters using <a href=\"#/api/Ext-method-urlEncode\" rel=\"Ext-method-urlEncode\" class=\"docClass\">Ext.Object.toQueryString</a>.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 42,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-params",
      "shortDoc": "Extra parameter values to pass. These are added to the Form's\nExt.form.Basic.baseParams and passed to the specified U..."
    },
    {
      "tagname": "cfg",
      "name": "reset",
      "member": "Ext.form.action.Action",
      "type": "Boolean",
      "doc": "<p>When set to <tt><b>true</b></tt>, causes the Form to be\n<a href=\"#/api/Ext.form.Basic-method-reset\" rel=\"Ext.form.Basic-method-reset\" class=\"docClass\">reset</a> on Action success. If specified, this happens\nbefore the <a href=\"#/api/Ext.form.action.StandardSubmit-cfg-success\" rel=\"Ext.form.action.StandardSubmit-cfg-success\" class=\"docClass\">success</a> callback is called and before the Form's\n<a href=\"#/api/Ext.form.Basic-event-actioncomplete\" rel=\"Ext.form.Basic-event-actioncomplete\" class=\"docClass\">actioncomplete</a> event fires.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 30,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-reset",
      "shortDoc": "When set to true, causes the Form to be\nreset on Action success. If specified, this happens\nbefore the success callba..."
    },
    {
      "tagname": "cfg",
      "name": "scope",
      "member": "Ext.form.action.Action",
      "type": "Object",
      "doc": "<p>The scope in which to call the configured <tt>success</tt> and <tt>failure</tt>\ncallback functions (the <tt>this</tt> reference for the callback functions).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 81,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-scope",
      "shortDoc": "The scope in which to call the configured success and failure\ncallback functions (the this reference for the callback..."
    },
    {
      "tagname": "cfg",
      "name": "submitEmptyText",
      "member": "Ext.form.action.Action",
      "type": "Boolean",
      "doc": "<p>If set to <tt>true</tt>, the emptyText value will be sent with the form\nwhen it is submitted. Defaults to <tt>true</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 96,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-submitEmptyText"
    },
    {
      "tagname": "cfg",
      "name": "success",
      "member": "Ext.form.action.Action",
      "type": "Function",
      "doc": "<p>The function to call when a valid success return packet is received.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : Ext.form.Basic<div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : Ext.form.action.Action<div class=\"sub-desc\">The Action class. The <a href=\"#/api/Ext.form.action.StandardSubmit-property-result\" rel=\"Ext.form.action.StandardSubmit-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 61,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-success",
      "shortDoc": "The function to call when a valid success return packet is received.\nThe function is passed the following parameters:..."
    },
    {
      "tagname": "cfg",
      "name": "target",
      "member": "Ext.form.action.StandardSubmit",
      "type": "String",
      "doc": "<p>Optional <tt>target</tt> attribute to be used for the form when submitting. If not specified,\nthe target will be the current window/frame.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/StandardSubmit.js",
      "linenr": 16,
      "html_filename": "StandardSubmit.html",
      "href": "StandardSubmit.html#Ext-form-action-StandardSubmit-cfg-target",
      "shortDoc": "Optional target attribute to be used for the form when submitting. If not specified,\nthe target will be the current w..."
    },
    {
      "tagname": "cfg",
      "name": "timeout",
      "member": "Ext.form.action.Action",
      "type": "Number",
      "doc": "<p>The number of seconds to wait for a server response before\nfailing with the <a href=\"#/api/Ext.form.action.StandardSubmit-property-failureType\" rel=\"Ext.form.action.StandardSubmit-property-failureType\" class=\"docClass\">failureType</a> as <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>. If not specified,\ndefaults to the configured <tt><a href=\"#/api/Ext.form.Basic-cfg-timeout\" rel=\"Ext.form.Basic-cfg-timeout\" class=\"docClass\">timeout</a></tt> of the\n<a href=\"#/api/Ext.form.action.StandardSubmit-cfg-form\" rel=\"Ext.form.action.StandardSubmit-cfg-form\" class=\"docClass\">form</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 54,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-timeout",
      "shortDoc": "The number of seconds to wait for a server response before\nfailing with the failureType as Ext.form.action.Action.CON..."
    },
    {
      "tagname": "cfg",
      "name": "url",
      "member": "Ext.form.action.Action",
      "type": "String",
      "doc": "<p>The URL that the Action is to invoke. Will default to the <a href=\"#/api/Ext.form.Basic-cfg-url\" rel=\"Ext.form.Basic-cfg-url\" class=\"docClass\">url</a>\nconfigured on the <a href=\"#/api/Ext.form.action.StandardSubmit-cfg-form\" rel=\"Ext.form.action.StandardSubmit-cfg-form\" class=\"docClass\">form</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 25,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-url"
    },
    {
      "tagname": "cfg",
      "name": "waitMsg",
      "member": "Ext.form.action.Action",
      "type": "String",
      "doc": "<p>The message to be displayed by a call to <a href=\"#/api/Ext.window.MessageBox-method-wait\" rel=\"Ext.window.MessageBox-method-wait\" class=\"docClass\">Ext.window.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 86,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-waitMsg"
    },
    {
      "tagname": "cfg",
      "name": "waitTitle",
      "member": "Ext.form.action.Action",
      "type": "String",
      "doc": "<p>The title to be displayed by a call to <a href=\"#/api/Ext.window.MessageBox-method-wait\" rel=\"Ext.window.MessageBox-method-wait\" class=\"docClass\">Ext.window.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 91,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-cfg-waitTitle"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "StandardSubmit",
      "member": "Ext.form.action.Action",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The configuration for this instance.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 1,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "callOverridden",
      "member": "Ext.Base",
      "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-property-override\" rel=\"Ext.Base-property-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
      "params": [
        {
          "type": "Array/Arguments",
          "name": "args",
          "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>Returns the result after calling the overridden method</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 279,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-method-callOverridden",
      "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo..."
    },
    {
      "tagname": "method",
      "name": "getName",
      "member": "Ext.Base",
      "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>className</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 652,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-method-getName",
      "shortDoc": "Get the current class' name in string format.\n\nExt.define('My.cool.Class', {\n    constructor: function() {\n        al..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "CLIENT_INVALID",
      "member": "Ext.form.action.Action",
      "type": "String",
      "doc": "<p>Failure type returned when client side validation of the Form fails\nthus aborting a submit action. Client side validation is performed unless\n<a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a> is explicitly set to <tt>false</tt>.</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 271,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-property-CLIENT_INVALID",
      "shortDoc": "Failure type returned when client side validation of the Form fails\nthus aborting a submit action. Client side valida..."
    },
    {
      "tagname": "property",
      "name": "CONNECT_FAILURE",
      "member": "Ext.form.action.Action",
      "type": "String",
      "doc": "<p>Failure type returned when a communication error happens when attempting\nto send a request to the remote server. The <a href=\"#/api/Ext.form.action.StandardSubmit-property-response\" rel=\"Ext.form.action.StandardSubmit-property-response\" class=\"docClass\">response</a> may be examined to\nprovide further information.</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 292,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-property-CONNECT_FAILURE",
      "shortDoc": "Failure type returned when a communication error happens when attempting\nto send a request to the remote server. The ..."
    },
    {
      "tagname": "property",
      "name": "LOAD_FAILURE",
      "member": "Ext.form.action.Action",
      "type": "String",
      "doc": "<p>Failure type returned when the response's <tt>success</tt>\nproperty is set to <tt>false</tt>, or no field values are returned in the response's\n<tt>data</tt> property.</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 302,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-property-LOAD_FAILURE",
      "shortDoc": "Failure type returned when the response's success\nproperty is set to false, or no field values are returned in the re..."
    },
    {
      "tagname": "property",
      "name": "SERVER_INVALID",
      "member": "Ext.form.action.Action",
      "type": "String",
      "doc": "<p>Failure type returned when server side processing fails and the <a href=\"#/api/Ext.form.action.StandardSubmit-property-result\" rel=\"Ext.form.action.StandardSubmit-property-result\" class=\"docClass\">result</a>'s\n<tt>success</tt> property is set to <tt>false</tt>.</p>\n\n\n<p>In the case of a form submission, field-specific error messages may be returned in the\n<a href=\"#/api/Ext.form.action.StandardSubmit-property-result\" rel=\"Ext.form.action.StandardSubmit-property-result\" class=\"docClass\">result</a>'s <tt>errors</tt> property.</p>\n\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 281,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-property-SERVER_INVALID",
      "shortDoc": "Failure type returned when server side processing fails and the result's\nsuccess property is set to false.\n\n\nIn the c..."
    },
    {
      "tagname": "property",
      "name": "addStatics",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 399,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-addStatics",
      "shortDoc": "Add / override static properties of this class.\n\nExt.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics(..."
    },
    {
      "tagname": "property",
      "name": "borrow",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 492,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-borrow",
      "shortDoc": "Borrow another class' members to the prototype of this class.\n\nExt.define('Bank', {\n    money: '$$$',\n    printMoney:..."
    },
    {
      "tagname": "property",
      "name": "create",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 340,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-create",
      "shortDoc": "Create a new instance of this Class.\n\nExt.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfi..."
    },
    {
      "tagname": "property",
      "name": "createAlias",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 670,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-createAlias",
      "shortDoc": "Create aliases for existing prototype methods. Example:\n\nExt.define('My.cool.Class', {\n    method1: function() { ... ..."
    },
    {
      "tagname": "property",
      "name": "failureType",
      "member": "Ext.form.action.Action",
      "type": "String",
      "doc": "<p>The type of failure detected will be one of these: <a href=\"#/api/Ext.form.action.Action-property-CLIENT_INVALID\" rel=\"Ext.form.action.Action-property-CLIENT_INVALID\" class=\"docClass\">Ext.form.action.Action.CLIENT_INVALID</a>,\n<a href=\"#/api/Ext.form.action.Action-property-SERVER_INVALID\" rel=\"Ext.form.action.Action-property-SERVER_INVALID\" class=\"docClass\">Ext.form.action.Action.SERVER_INVALID</a>, <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>, or\n<a href=\"#/api/Ext.form.action.Action-property-LOAD_FAILURE\" rel=\"Ext.form.action.Action-property-LOAD_FAILURE\" class=\"docClass\">Ext.form.action.Action.LOAD_FAILURE</a>.  Usage:</p>\n\n<pre><code>var fp = new Ext.form.Panel({\n...\nbuttons: [{\n    text: 'Save',\n    formBind: true,\n    handler: function(){\n        if(fp.getForm().isValid()){\n            fp.getForm().submit({\n                url: 'form-submit.php',\n                waitMsg: 'Submitting your data...',\n                success: function(form, action){\n                    // server responded with success = true\n                    var result = action.<a href=\"#/api/Ext.form.action.StandardSubmit-property-result\" rel=\"Ext.form.action.StandardSubmit-property-result\" class=\"docClass\">result</a>;\n                },\n                failure: function(form, action){\n                    if (action.<a href=\"#/api/Ext.form.action.StandardSubmit-property-failureType\" rel=\"Ext.form.action.StandardSubmit-property-failureType\" class=\"docClass\">failureType</a> === <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>) {\n                        Ext.Msg.alert('Error',\n                            'Status:'+action.<a href=\"#/api/Ext.form.action.StandardSubmit-property-response\" rel=\"Ext.form.action.StandardSubmit-property-response\" class=\"docClass\">response</a>.status+': '+\n                            action.<a href=\"#/api/Ext.form.action.StandardSubmit-property-response\" rel=\"Ext.form.action.StandardSubmit-property-response\" class=\"docClass\">response</a>.statusText);\n                    }\n                    if (action.failureType === <a href=\"#/api/Ext.form.action.Action-property-SERVER_INVALID\" rel=\"Ext.form.action.Action-property-SERVER_INVALID\" class=\"docClass\">Ext.form.action.Action.SERVER_INVALID</a>){\n                        // server responded with success = false\n                        Ext.Msg.alert('Invalid', action.<a href=\"#/api/Ext.form.action.StandardSubmit-property-result\" rel=\"Ext.form.action.StandardSubmit-property-result\" class=\"docClass\">result</a>.errormsg);\n                    }\n                }\n            });\n        }\n    }\n},{\n    text: 'Reset',\n    handler: function(){\n        fp.getForm().reset();\n    }\n}]\n</code></pre>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 108,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-property-failureType",
      "shortDoc": "The type of failure detected will be one of these: Ext.form.action.Action.CLIENT_INVALID,\nExt.form.action.Action.SERV..."
    },
    {
      "tagname": "property",
      "name": "implement",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 428,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-implement",
      "shortDoc": "Add methods / properties to the prototype of this class.\n\nExt.define('My.awesome.Cat', {\n    constructor: function() ..."
    },
    {
      "tagname": "property",
      "name": "override",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 536,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-override",
      "shortDoc": "Override prototype members of this class. Overridden methods can be invoked via\nExt.Base.callOverridden\n\nExt.define('..."
    },
    {
      "tagname": "property",
      "name": "response",
      "member": "Ext.form.action.Action",
      "type": "Object",
      "doc": "<p>The raw XMLHttpRequest object used to perform the action.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 152,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-property-response"
    },
    {
      "tagname": "property",
      "name": "result",
      "member": "Ext.form.action.Action",
      "type": "Object",
      "doc": "<p>The decoded response object containing a boolean <tt>success</tt> property and\nother, action-specific properties.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 158,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-property-result"
    },
    {
      "tagname": "property",
      "name": "run",
      "member": "Ext.form.action.Action",
      "type": "Object",
      "doc": "<p>Invokes this action using the current configuration.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 179,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-property-run"
    },
    {
      "tagname": "property",
      "name": "type",
      "member": "Ext.form.action.Action",
      "type": "String",
      "doc": "<p>The type of action this Action instance performs.\nCurrently only \"submit\" and \"load\" are supported.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/Action.js",
      "linenr": 101,
      "html_filename": "Action2.html",
      "href": "Action2.html#Ext-form-action-Action-property-type"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/action/StandardSubmit.js",
  "linenr": 1,
  "html_filename": "StandardSubmit.html",
  "href": "StandardSubmit.html#Ext-form-action-StandardSubmit",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.Base",
    "Ext.form.action.Action",
    "Ext.form.action.Submit"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});