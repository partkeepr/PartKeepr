Ext.data.JsonP.Ext_form_Basic({
  "tagname": "class",
  "name": "Ext.form.Basic",
  "doc": "<p>Provides input field management, validation, submission, and form loading services for the collection\nof <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Field</a> instances within a <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>. It is recommended\nthat you use a <a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a> as the form container, as that has logic to automatically\nhook up an instance of <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a> (plus other conveniences related to field configuration.)</p>\n\n<h1>Form Actions</h1>\n\n<p>The Basic class delegates the handling of form loads and submits to instances of <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a>.\nSee the various Action implementations for specific details of each one's functionality, as well as the\ndocumentation for <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">doAction</a> which details the configuration options that can be specified in\neach action call.</p>\n\n<p>The default submit Action is <a href=\"#/api/Ext.form.action.Submit\" rel=\"Ext.form.action.Submit\" class=\"docClass\">Ext.form.action.Submit</a>, which uses an Ajax request to submit the\nform's values to a configured URL. To enable normal browser submission of an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> form, use the\n<a href=\"#/api/Ext.form.Basic-cfg-standardSubmit\" rel=\"Ext.form.Basic-cfg-standardSubmit\" class=\"docClass\">standardSubmit</a> config option.</p>\n\n<p>Note: File uploads are not performed using normal 'Ajax' techniques; see the description for\n<a href=\"#/api/Ext.form.Basic-method-hasUpload\" rel=\"Ext.form.Basic-method-hasUpload\" class=\"docClass\">hasUpload</a> for details.</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>Ext.create('Ext.form.Panel', {\n    title: 'Basic Form',\n    renderTo: Ext.getBody(),\n    bodyPadding: 5,\n    width: 350,\n\n    // Any configuration items here will be automatically passed along to\n    // the <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a> instance when it gets created.\n\n    // The form will submit an AJAX request to this URL when submitted\n    url: 'save-form.php',\n\n    items: [{\n        fieldLabel: 'Field',\n        name: 'theField'\n    }],\n\n    buttons: [{\n        text: 'Submit',\n        handler: function() {\n            // The getForm() method returns the <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a> instance:\n            var form = this.up('form').getForm();\n            if (form.isValid()) {\n                // Submit the Ajax request and handle the response\n                form.submit({\n                    success: function(form, action) {\n                       Ext.Msg.alert('Success', action.result.msg);\n                    },\n                    failure: function(form, action) {\n                        Ext.Msg.alert('Failed', action.result.msg);\n                    }\n                });\n            }\n        }\n    }]\n});\n</code></pre>\n",
  "extends": "Ext.util.Observable",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.form.BasicForm"
  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "api",
      "member": "Ext.form.Basic",
      "type": "Object",
      "doc": "<p>(Optional) If specified, load and submit actions will be handled\nwith <a href=\"#/api/Ext.form.action.DirectLoad\" rel=\"Ext.form.action.DirectLoad\" class=\"docClass\">Ext.form.action.DirectLoad</a> and <a href=\"#/api/Ext.form.action.DirectLoad\" rel=\"Ext.form.action.DirectLoad\" class=\"docClass\">Ext.form.action.DirectLoad</a>.\nMethods which have been imported by <a href=\"#/api/Ext.direct.Manager\" rel=\"Ext.direct.Manager\" class=\"docClass\">Ext.direct.Manager</a> can be specified here to load and submit\nforms.\nSuch as the following:</p>\n\n<pre><code>api: {\n    load: App.ss.MyProfile.load,\n    submit: App.ss.MyProfile.submit\n}\n</code></pre>\n\n\n<p>Load actions can use <code><a href=\"#/api/Ext.form.Basic-cfg-paramOrder\" rel=\"Ext.form.Basic-cfg-paramOrder\" class=\"docClass\">paramOrder</a></code> or <code><a href=\"#/api/Ext.form.Basic-cfg-paramsAsHash\" rel=\"Ext.form.Basic-cfg-paramsAsHash\" class=\"docClass\">paramsAsHash</a></code>\nto customize how the load method is invoked.\nSubmit actions will always use a standard form submit. The <tt>formHandler</tt> configuration must\nbe set on the associated server-side method which has been imported by <a href=\"#/api/Ext.direct.Manager\" rel=\"Ext.direct.Manager\" class=\"docClass\">Ext.direct.Manager</a>.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 201,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-api",
      "shortDoc": "(Optional) If specified, load and submit actions will be handled\nwith Ext.form.action.DirectLoad and Ext.form.action...."
    },
    {
      "tagname": "cfg",
      "name": "baseParams",
      "member": "Ext.form.Basic",
      "type": "Object",
      "doc": "<p>Parameters to pass with all requests. e.g. baseParams: {id: '123', foo: 'bar'}.</p>\n\n\n<p>Parameters are encoded as standard HTTP parameters using <a href=\"#/api/Ext-method-urlEncode\" rel=\"Ext-method-urlEncode\" class=\"docClass\">Ext.Object.toQueryString</a>.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 190,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-baseParams",
      "shortDoc": "Parameters to pass with all requests. e.g. baseParams: {id: '123', foo: 'bar'}.\n\n\nParameters are encoded as standard ..."
    },
    {
      "tagname": "cfg",
      "name": "errorReader",
      "member": "Ext.form.Basic",
      "type": "Ext.data.reader.Reader",
      "doc": "<p>An Ext.data.DataReader (e.g. <a href=\"#/api/Ext.data.reader.Xml\" rel=\"Ext.data.reader.Xml\" class=\"docClass\">Ext.data.reader.Xml</a>) to be used to\nread field error messages returned from 'submit' actions. This is optional\nas there is built-in support for processing JSON responses.</p>\n\n\n<p>The Records which provide messages for the invalid Fields must use the\nField name (or id) as the Record ID, and must contain a field called 'msg'\nwhich contains the error message.</p>\n\n\n<p>The errorReader does not have to be a full-blown implementation of a\nReader. It simply needs to implement a <tt>read(xhr)</tt> function\nwhich returns an Array of Records in an object with the following\nstructure:</p>\n\n\n<pre><code>{\n    records: recordArray\n}\n</code></pre>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 166,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-errorReader",
      "shortDoc": "An Ext.data.DataReader (e.g. Ext.data.reader.Xml) to be used to\nread field error messages returned from 'submit' acti..."
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "method",
      "member": "Ext.form.Basic",
      "type": "String",
      "doc": "<p>The request method to use (GET or POST) for form actions if one isn't supplied in the action options.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 156,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-method"
    },
    {
      "tagname": "cfg",
      "name": "paramOrder",
      "member": "Ext.form.Basic",
      "type": "Array/String",
      "doc": "<p>A list of params to be executed server side.\nDefaults to <tt>undefined</tt>. Only used for the <code><a href=\"#/api/Ext.form.Basic-cfg-api\" rel=\"Ext.form.Basic-cfg-api\" class=\"docClass\">api</a></code>\n<code>load</code> configuration.</p>\n\n\n<p>Specify the params in the order in which they must be executed on the\nserver-side as either (1) an Array of String values, or (2) a String of params\ndelimited by either whitespace, comma, or pipe. For example,\nany of the following would be acceptable:</p>\n\n\n<pre><code>paramOrder: ['param1','param2','param3']\nparamOrder: 'param1 param2 param3'\nparamOrder: 'param1,param2,param3'\nparamOrder: 'param1|param2|param'\n     </code></pre>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 218,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-paramOrder",
      "shortDoc": "A list of params to be executed server side.\nDefaults to undefined. Only used for the api\nload configuration.\n\n\nSpeci..."
    },
    {
      "tagname": "cfg",
      "name": "paramsAsHash",
      "member": "Ext.form.Basic",
      "type": "Boolean",
      "doc": "<p>Only used for the <code><a href=\"#/api/Ext.form.Basic-cfg-api\" rel=\"Ext.form.Basic-cfg-api\" class=\"docClass\">api</a></code>\n<code>load</code> configuration. If <tt>true</tt>, parameters will be sent as a\nsingle hash collection of named arguments (defaults to <tt>false</tt>). Providing a\n<tt><a href=\"#/api/Ext.form.Basic-cfg-paramOrder\" rel=\"Ext.form.Basic-cfg-paramOrder\" class=\"docClass\">paramOrder</a></tt> nullifies this configuration.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 233,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-paramsAsHash",
      "shortDoc": "Only used for the api\nload configuration. If true, parameters will be sent as a\nsingle hash collection of named argum..."
    },
    {
      "tagname": "cfg",
      "name": "reader",
      "member": "Ext.form.Basic",
      "type": "Ext.data.reader.Reader",
      "doc": "<p>An Ext.data.DataReader (e.g. <a href=\"#/api/Ext.data.reader.Xml\" rel=\"Ext.data.reader.Xml\" class=\"docClass\">Ext.data.reader.Xml</a>) to be used to read\ndata when executing 'load' actions. This is optional as there is built-in\nsupport for processing JSON responses.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 160,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-reader",
      "shortDoc": "An Ext.data.DataReader (e.g. Ext.data.reader.Xml) to be used to read\ndata when executing 'load' actions. This is opti..."
    },
    {
      "tagname": "cfg",
      "name": "standardSubmit",
      "member": "Ext.form.Basic",
      "type": "Boolean",
      "doc": "<p>If set to <tt>true</tt>, a standard HTML form submit is used instead\nof a XHR (Ajax) style form submission. Defaults to <tt>false</tt>. All of\nthe field values, plus any additional params configured via <a href=\"#/api/Ext.form.Basic-cfg-baseParams\" rel=\"Ext.form.Basic-cfg-baseParams\" class=\"docClass\">baseParams</a>\nand/or the <code>options</code> to <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submit</a>, will be included in the\nvalues submitted in the form.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 253,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-standardSubmit",
      "shortDoc": "If set to true, a standard HTML form submit is used instead\nof a XHR (Ajax) style form submission. Defaults to false...."
    },
    {
      "tagname": "cfg",
      "name": "timeout",
      "member": "Ext.form.Basic",
      "type": "Number",
      "doc": "<p>Timeout for form actions in seconds (default is 30 seconds).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 196,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-timeout"
    },
    {
      "tagname": "cfg",
      "name": "trackResetOnLoad",
      "member": "Ext.form.Basic",
      "type": "Boolean",
      "doc": "<p>If set to <tt>true</tt>, <a href=\"#/api/Ext.form.Basic-method-reset\" rel=\"Ext.form.Basic-method-reset\" class=\"docClass\">reset</a>() resets to the last loaded\nor <a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>() data instead of when the form was first created.  Defaults to <tt>false</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 247,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-trackResetOnLoad",
      "shortDoc": "If set to true, reset() resets to the last loaded\nor setValues() data instead of when the form was first created.  De..."
    },
    {
      "tagname": "cfg",
      "name": "url",
      "member": "Ext.form.Basic",
      "type": "String",
      "doc": "<p>The URL to use for form actions if one isn't supplied in the\n<a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">doAction</a> options.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 184,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-url"
    },
    {
      "tagname": "cfg",
      "name": "waitMsgTarget",
      "member": "Ext.form.Basic",
      "type": "Mixed",
      "doc": "<p>By default wait messages are displayed with Ext.MessageBox.wait. You can target a specific\nelement by passing it or its id or mask the form itself by passing in true. Defaults to <tt>undefined</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 262,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-waitMsgTarget",
      "shortDoc": "By default wait messages are displayed with Ext.MessageBox.wait. You can target a specific\nelement by passing it or i..."
    },
    {
      "tagname": "cfg",
      "name": "waitTitle",
      "member": "Ext.form.Basic",
      "type": "String",
      "doc": "<p>The default title to show for the waiting message box (defaults to <tt>'Please Wait...'</tt>)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 241,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-cfg-waitTitle"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Basic",
      "member": "Ext.form.Basic",
      "doc": "\n",
      "params": [
        {
          "type": "Ext.container.Container",
          "name": "owner",
          "doc": "<p>The component that is the container for the form, usually a <a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Configuration options. These are normally specified in the config to the\n<a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a> constructor, which passes them along to the BasicForm automatically.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 1,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "addEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
      "params": [
        {
          "type": "Object/String",
          "name": "o",
          "doc": "<p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "",
          "doc": "<p>[additional] Optional additional event names if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 452,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addEvents",
      "shortDoc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Appends an event handler to this object.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to listen for. May also be an object who's property names are event names. See</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The method the event invokes.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n<li><b>element</b> : String<div class=\"sub-desc\"><b>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</b>\nThe name of a Component property which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which\nwill exist only after the Component is rendered. For example, to add a click listener to a Panel's body:\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></p>\n\n\n<p>When added in this way, the options available are the options applicable to <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a></p>\n\n\n<p></div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myPanel.on('hide', this.handleClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple events. For example:\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>.\n<p>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 271,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addListener",
      "shortDoc": "<p>Appends an event handler to this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addManagedListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component\nis destroyed.\n\n",
      "params": [
        {
          "type": "Observable/Element",
          "name": "item",
          "doc": "<p>The item to which to add a listener/listeners.</p>\n",
          "optional": false
        },
        {
          "type": "Object/String",
          "name": "ename",
          "doc": "<p>The event name, or an object containing event name properties.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "opt",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 155,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
      "shortDoc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component\nis destroyed.\n\n"
    },
    {
      "tagname": "method",
      "name": "applyIfToFields",
      "member": "Ext.form.Basic",
      "doc": "<p>Calls <a href=\"#/api/Ext-method-applyIf\" rel=\"Ext-method-applyIf\" class=\"docClass\">Ext.applyIf</a> for all field in this form with the passed object.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "obj",
          "doc": "<p>The object to be applied</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 883,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-applyIfToFields",
      "shortDoc": "<p>Calls <a href=\"#/api/Ext-method-applyIf\" rel=\"Ext-method-applyIf\" class=\"docClass\">Ext.applyIf</a> for all field in this form with the passed object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "applyToFields",
      "member": "Ext.form.Basic",
      "doc": "<p>Calls <a href=\"#/api/Ext-method-apply\" rel=\"Ext-method-apply\" class=\"docClass\">Ext.apply</a> for all fields in this form with the passed object.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "obj",
          "doc": "<p>The object to be applied</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 871,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-applyToFields",
      "shortDoc": "<p>Calls <a href=\"#/api/Ext-method-apply\" rel=\"Ext-method-apply\" class=\"docClass\">Ext.apply</a> for all fields in this form with the passed object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "capture",
      "member": "Ext.util.Observable",
      "doc": "<p>Starts capture on the specified Observable. All events will be passed\nto the supplied function with the event name + standard signature of the event\n<b>before</b> the event is fired. If the supplied function returns false,\nthe event will not fire.</p>\n",
      "params": [
        {
          "type": "Observable",
          "name": "o",
          "doc": "<p>The Observable to capture events from.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call when an event is fired.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Observable firing the event.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 55,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-capture",
      "shortDoc": "Starts capture on the specified Observable. All events will be passed\nto the supplied function with the event name + ..."
    },
    {
      "tagname": "method",
      "name": "checkDirty",
      "member": "Ext.form.Basic",
      "doc": "<p>Check whether the dirty state of the entire form has changed since it was last checked, and\nif so fire the <a href=\"#/api/Ext.form.Basic-event-dirtychange\" rel=\"Ext.form.Basic-event-dirtychange\" class=\"docClass\">dirtychange</a> event. This is automatically invoked\nwhen an individual field's dirty state changes.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 421,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-checkDirty",
      "shortDoc": "Check whether the dirty state of the entire form has changed since it was last checked, and\nif so fire the dirtychang..."
    },
    {
      "tagname": "method",
      "name": "checkValidity",
      "member": "Ext.form.Basic",
      "doc": "<p>Check whether the validity of the entire form has changed since it was last checked, and\nif so fire the <a href=\"#/api/Ext.form.Basic-event-validitychange\" rel=\"Ext.form.Basic-event-validitychange\" class=\"docClass\">validitychange</a> event. This is automatically invoked\nwhen an individual field's validity changes.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 376,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-checkValidity",
      "shortDoc": "Check whether the validity of the entire form has changed since it was last checked, and\nif so fire the validitychang..."
    },
    {
      "tagname": "method",
      "name": "clearInvalid",
      "member": "Ext.form.Basic",
      "doc": "<p>Clears all invalid field messages in this form.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 843,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-clearInvalid",
      "shortDoc": "<p>Clears all invalid field messages in this form.</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearListeners",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 383,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-clearListeners",
      "shortDoc": "<p>Removes all listeners for this object including the managed listeners</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearManagedListeners",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes all managed listeners for this object.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 412,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
      "shortDoc": "<p>Removes all managed listeners for this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.form.Basic",
      "doc": "<p>Destroys this object.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 273,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-destroy",
      "shortDoc": "<p>Destroys this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "doAction",
      "member": "Ext.form.Basic",
      "doc": "<p>Performs a predefined action (an implementation of <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a>)\nto perform application-specific processing.</p>\n",
      "params": [
        {
          "type": "String/Ext.form.action.Action",
          "name": "action",
          "doc": "<p>The name of the predefined action type,\nor instance of <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a> to perform.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) The options to pass to the <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a>\nthat will get created, if the <tt>action</tt> argument is a String.</p>\n\n<p>All of the config options listed below are supported by both the\n<a href=\"#/api/Ext.form.action.Submit\" rel=\"Ext.form.action.Submit\" class=\"docClass\">submit</a> and <a href=\"#/api/Ext.form.action.Load\" rel=\"Ext.form.action.Load\" class=\"docClass\">load</a>\nactions unless otherwise noted (custom actions could also accept\nother config options):</p>\n\n\n<ul>\n\n<li><b>url</b> : String<div class=\"sub-desc\">The url for the action (defaults\nto the form's <a href=\"#/api/Ext.form.Basic-cfg-url\" rel=\"Ext.form.Basic-cfg-url\" class=\"docClass\">url</a>.)</div></li>\n\n<li><b>method</b> : String<div class=\"sub-desc\">The form method to use (defaults\nto the form's method, or POST if not defined)</div></li>\n\n<li><b>params</b> : String/Object<div class=\"sub-desc\"><p>The params to pass\n(defaults to the form's baseParams, or none if not defined)</p>\n<p>Parameters are encoded as standard HTTP parameters using <a href=\"#/api/Ext-method-urlEncode\" rel=\"Ext-method-urlEncode\" class=\"docClass\">Ext.Object.toQueryString</a>.</p></div></li>\n\n<li><b>headers</b> : Object<div class=\"sub-desc\">Request headers to set for the action.</div></li>\n\n<li><b>success</b> : Function<div class=\"sub-desc\">The callback that will\nbe invoked after a successful response (see top of\n<a href=\"#/api/Ext.form.action.Submit\" rel=\"Ext.form.action.Submit\" class=\"docClass\">submit</a> and <a href=\"#/api/Ext.form.action.Load\" rel=\"Ext.form.action.Load\" class=\"docClass\">load</a>\nfor a description of what constitutes a successful response).\nThe function is passed the following parameters:<ul>\n<li><tt>form</tt> : The <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a> that requested the action.</li>\n<li><tt>action</tt> : The <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Action</a> object which performed the operation.\n<div class=\"sub-desc\">The action object contains these properties of interest:<ul>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-response\" rel=\"Ext.form.action.Action-property-response\" class=\"docClass\">response</a></tt></li>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-result\" rel=\"Ext.form.action.Action-property-result\" class=\"docClass\">result</a></tt> : interrogate for custom postprocessing</li>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-type\" rel=\"Ext.form.action.Action-property-type\" class=\"docClass\">type</a></tt></li>\n</ul></div></li></ul></div></li>\n\n<li><b>failure</b> : Function<div class=\"sub-desc\">The callback that will be invoked after a\nfailed transaction attempt. The function is passed the following parameters:<ul>\n<li><tt>form</tt> : The <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a> that requested the action.</li>\n<li><tt>action</tt> : The <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Action</a> object which performed the operation.\n<div class=\"sub-desc\">The action object contains these properties of interest:<ul>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-failureType\" rel=\"Ext.form.action.Action-property-failureType\" class=\"docClass\">failureType</a></tt></li>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-response\" rel=\"Ext.form.action.Action-property-response\" class=\"docClass\">response</a></tt></li>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-result\" rel=\"Ext.form.action.Action-property-result\" class=\"docClass\">result</a></tt> : interrogate for custom postprocessing</li>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-type\" rel=\"Ext.form.action.Action-property-type\" class=\"docClass\">type</a></tt></li>\n</ul></div></li></ul></div></li>\n\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope in which to call the\ncallback functions (The <tt>this</tt> reference for the callback functions).</div></li>\n\n<li><b>clientValidation</b> : Boolean<div class=\"sub-desc\">Submit Action only.\nDetermines whether a Form's fields are validated in a final call to\n<a href=\"#/api/Ext.form.Basic-method-isValid\" rel=\"Ext.form.Basic-method-isValid\" class=\"docClass\">isValid</a> prior to submission. Set to <tt>false</tt>\nto prevent this. If undefined, pre-submission field validation is performed.</div></li></ul>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 462,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-doAction",
      "shortDoc": "<p>Performs a predefined action (an implementation of <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a>)\nto perform application-specific processing.</p>\n"
    },
    {
      "tagname": "method",
      "name": "enableBubble",
      "member": "Ext.util.Observable",
      "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default\nimplementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n//  Add functionality to Field&#39;s initComponent to enable the change event to bubble\ninitComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n    this.enableBubble('change');\n}),\n\n//  We know that we want Field&#39;s events to bubble directly to the FormPanel.\ngetBubbleTarget : function() {\n    if (!this.formPanel) {\n        this.formPanel = this.findParentByType('form');\n    }\n    return this.formPanel;\n}\n});\n\nvar myForm = new Ext.formPanel({\ntitle: 'User Details',\nitems: [{\n    ...\n}],\nlisteners: {\n    change: function() {\n        // Title goes red if form has been modified.\n        myForm.header.setStyle('color', 'red');\n    }\n}\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "String/Array",
          "name": "events",
          "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 554,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-enableBubble",
      "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present...."
    },
    {
      "tagname": "method",
      "name": "findField",
      "member": "Ext.form.Basic",
      "doc": "<p>Find a specific <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a> in this form by id or name.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The value to search for (specify either a <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a> or\n<a href=\"#/api/Ext.form.field.Field-method-getName\" rel=\"Ext.form.field.Field-method-getName\" class=\"docClass\">name or hiddenName</a>).</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>Ext.form.field.Field The first matching field, or <tt>null</tt> if none was found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 695,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-findField",
      "shortDoc": "<p>Find a specific <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a> in this form by id or name.</p>\n"
    },
    {
      "tagname": "method",
      "name": "fireEvent",
      "member": "Ext.util.Observable",
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.form.Basic-method-enableBubble\" rel=\"Ext.form.Basic-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to fire.</p>\n",
          "optional": false
        },
        {
          "type": "Object...",
          "name": "args",
          "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 232,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-fireEvent",
      "shortDoc": "Fires the specified event with the passed parameters (minus the event name).\n\n\nAn event may be set to bubble up an Ob..."
    },
    {
      "tagname": "method",
      "name": "getFieldValues",
      "member": "Ext.form.Basic",
      "doc": "<p>Retrieves the fields in the form as a set of key/value pairs, using their\n<a href=\"#/api/Ext.form.field.Field-method-getModelData\" rel=\"Ext.form.field.Field-method-getModelData\" class=\"docClass\">getModelData()</a> method to collect the values.\nIf multiple fields return values under the same name those values will be combined into an Array.\nThis is similar to <a href=\"#/api/Ext.form.Basic-method-getValues\" rel=\"Ext.form.Basic-method-getValues\" class=\"docClass\">getValues</a> except that this method collects type-specific data values\n(e.g. Date objects for date fields) while getValues returns only String values for submission.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "dirtyOnly",
          "doc": "<p>(optional) If true, only fields that are dirty will be included in the result.\nDefaults to false.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 829,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-getFieldValues",
      "shortDoc": "Retrieves the fields in the form as a set of key/value pairs, using their\ngetModelData() method to collect the values..."
    },
    {
      "tagname": "method",
      "name": "getFields",
      "member": "Ext.form.Basic",
      "doc": "<p>Return all the <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a> components in the owner container.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.util.MixedCollection",
        "doc": "<p>Collection of the Field objects</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 322,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-getFields",
      "shortDoc": "<p>Return all the <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a> components in the owner container.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRecord",
      "member": "Ext.form.Basic",
      "doc": "<p>Returns the last <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance that was loaded via <a href=\"#/api/Ext.form.Basic-method-loadRecord\" rel=\"Ext.form.Basic-method-loadRecord\" class=\"docClass\">loadRecord</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.data.Model",
        "doc": "<p>The record</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 625,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-getRecord",
      "shortDoc": "<p>Returns the last <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance that was loaded via <a href=\"#/api/Ext.form.Basic-method-loadRecord\" rel=\"Ext.form.Basic-method-loadRecord\" class=\"docClass\">loadRecord</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "getValues",
      "member": "Ext.form.Basic",
      "doc": "<p>Retrieves the fields in the form as a set of key/value pairs, using their\n<a href=\"#/api/Ext.form.field.Field-method-getSubmitData\" rel=\"Ext.form.field.Field-method-getSubmitData\" class=\"docClass\">getSubmitData()</a> method to collect the values.\nIf multiple fields return values under the same name those values will be combined into an Array.\nThis is similar to <a href=\"#/api/Ext.form.Basic-method-getFieldValues\" rel=\"Ext.form.Basic-method-getFieldValues\" class=\"docClass\">getFieldValues</a> except that this method collects only String values for\nsubmission, while getFieldValues collects type-specific data values (e.g. Date objects for date fields.)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "asString",
          "doc": "<p>(optional) If true, will return the key/value collection as a single\nURL-encoded param string. Defaults to false.</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "dirtyOnly",
          "doc": "<p>(optional) If true, only fields that are dirty will be included in the result.\nDefaults to false.</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "includeEmptyText",
          "doc": "<p>(optional) If true, the configured emptyText of empty fields will be used.\nDefaults to false.</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "useDataValues",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String/Object",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 779,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-getValues",
      "shortDoc": "Retrieves the fields in the form as a set of key/value pairs, using their\ngetSubmitData() method to collect the value..."
    },
    {
      "tagname": "method",
      "name": "hasInvalidField",
      "member": "Ext.form.Basic",
      "doc": "<p>Returns true if the form contains any invalid fields. No fields will be marked as invalid\nas a result of calling this; to trigger marking of fields use <a href=\"#/api/Ext.form.Basic-method-isValid\" rel=\"Ext.form.Basic-method-isValid\" class=\"docClass\">isValid</a> instead.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 344,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-hasInvalidField",
      "shortDoc": "Returns true if the form contains any invalid fields. No fields will be marked as invalid\nas a result of calling this..."
    },
    {
      "tagname": "method",
      "name": "hasListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to check for</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the event is being listened for, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 480,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-hasListener",
      "shortDoc": "<p>Checks to see if this object has any listeners for a specified event</p>\n"
    },
    {
      "tagname": "method",
      "name": "hasUpload",
      "member": "Ext.form.Basic",
      "doc": "<p>Returns true if the form contains a file upload field. This is used to determine the\nmethod for submitting the form: File uploads are not performed using normal 'Ajax' techniques,\nthat is they are <b>not</b> performed using XMLHttpRequests. Instead a hidden <tt>&lt;form></tt>\nelement containing all the fields is created temporarily and submitted with its\n<a href=\"http://www.w3.org/TR/REC-html40/present/frames.html#adef-target\">target</a> set to refer\nto a dynamically generated, hidden <tt>&lt;iframe></tt> which is inserted into the document\nbut removed after the return data has been gathered.</p>\n\n\n<p>The server response is parsed by the browser to create the document for the IFRAME. If the\nserver is using JSON to send the return object, then the\n<a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17\">Content-Type</a> header\nmust be set to \"text/html\" in order to tell the browser to insert the text unchanged into the document body.</p>\n\n\n<p>Characters which are significant to an HTML parser must be sent as HTML entities, so encode\n\"&lt;\" as \"&amp;lt;\", \"&amp;\" as \"&amp;amp;\" etc.</p>\n\n\n<p>The response text is retrieved from the document, and a fake XMLHttpRequest object\nis created containing a <tt>responseText</tt> property in order to conform to the\nrequirements of event handlers and callbacks.</p>\n\n\n<p>Be aware that file upload packets are sent with the content type <a href=\"http://www.faqs.org/rfcs/rfc2388.html\">multipart/form</a>\nand some server technologies (notably JEE) may require some custom processing in order to\nretrieve parameter names and parameter values from the packet content.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "<p>Boolean</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 434,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-hasUpload",
      "shortDoc": "Returns true if the form contains a file upload field. This is used to determine the\nmethod for submitting the form: ..."
    },
    {
      "tagname": "method",
      "name": "isDirty",
      "member": "Ext.form.Basic",
      "doc": "<p>Returns true if any fields in this form have changed from their original values.</p>\n\n\n<p>Note that if this BasicForm was configured with <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> then the\nFields' <em>original values</em> are updated when the values are loaded by <a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>\nor <a href=\"#/api/Ext.form.Basic-method-loadRecord\" rel=\"Ext.form.Basic-method-loadRecord\" class=\"docClass\">loadRecord</a>.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "<p>Boolean</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 408,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-isDirty",
      "shortDoc": "Returns true if any fields in this form have changed from their original values.\n\n\nNote that if this BasicForm was co..."
    },
    {
      "tagname": "method",
      "name": "isValid",
      "member": "Ext.form.Basic",
      "doc": "<p>Returns true if client-side validation on the form is successful. Any invalid fields will be\nmarked as invalid. If you only want to determine overall form validity without marking anything,\nuse <a href=\"#/api/Ext.form.Basic-method-hasInvalidField\" rel=\"Ext.form.Basic-method-hasInvalidField\" class=\"docClass\">hasInvalidField</a> instead.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "<p>Boolean</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 359,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-isValid",
      "shortDoc": "Returns true if client-side validation on the form is successful. Any invalid fields will be\nmarked as invalid. If yo..."
    },
    {
      "tagname": "method",
      "name": "load",
      "member": "Ext.form.Basic",
      "doc": "<p>Shortcut to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">do</a> a <a href=\"#/api/Ext.form.action.Load\" rel=\"Ext.form.action.Load\" class=\"docClass\">load action</a>.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>The options to pass to the action (see <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">doAction</a> for details)</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 579,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-load",
      "shortDoc": "<p>Shortcut to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">do</a> a <a href=\"#/api/Ext.form.action.Load\" rel=\"Ext.form.action.Load\" class=\"docClass\">load action</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "loadRecord",
      "member": "Ext.form.Basic",
      "doc": "<p>Loads an <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> into this form by calling <a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a> with the\n<a href=\"#/api/Ext.data.Model--data\" rel=\"Ext.data.Model--data\" class=\"docClass\">record data</a>.\nSee also <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>.</p>\n",
      "params": [
        {
          "type": "Ext.data.Model",
          "name": "record",
          "doc": "<p>The record to load</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 613,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-loadRecord",
      "shortDoc": "<p>Loads an <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> into this form by calling <a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a> with the\n<a href=\"#/api/Ext.data.Model--data\" rel=\"Ext.data.Model--data\" class=\"docClass\">record data</a>.\nSee also <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "markInvalid",
      "member": "Ext.form.Basic",
      "doc": "<p>Mark fields in this form invalid in bulk.</p>\n",
      "params": [
        {
          "type": "Array/Object",
          "name": "errors",
          "doc": "<p>Either an array in the form <code>[{id:'fieldId', msg:'The message'}, ...]</code>,\nan object hash of <code>{id: msg, id2: msg2}</code>, or a <a href=\"#/api/Ext.data.Errors\" rel=\"Ext.data.Errors\" class=\"docClass\">Ext.data.Errors</a> object.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 708,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-markInvalid",
      "shortDoc": "<p>Mark fields in this form invalid in bulk.</p>\n"
    },
    {
      "tagname": "method",
      "name": "observe",
      "member": "Ext.util.Observable",
      "doc": "<p>Sets observability on the passed class constructor.</p>\n\n<p>This makes any event fired on any instance of the passed class also fire a single event through\nthe <strong>class</strong> allowing for central handling of events on many instances at once.</p>\n\n<p>Usage:</p>\n\n<pre><code>Ext.util.Observable.observe(Ext.data.Connection);\nExt.data.Connection.on('beforerequest', function(con, options) {\n    console.log('Ajax request made to ' + options.url);\n});\n</code></pre>\n",
      "params": [
        {
          "type": "Function",
          "name": "c",
          "doc": "<p>The class constructor to make observable.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "listeners",
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 69,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-observe",
      "shortDoc": "Sets observability on the passed class constructor.\n\nThis makes any event fired on any instance of the passed class a..."
    },
    {
      "tagname": "method",
      "name": "on",
      "member": "Ext.util.Observable",
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event to listen for</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The method the event invokes</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 616,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-on",
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "relayEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code><b>this</b></code>.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "origin",
          "doc": "<p>The Observable whose events this object is to relay.</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "events",
          "doc": "<p>Array of event names to relay.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "prefix",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 520,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-relayEvents",
      "shortDoc": "<p>Relays selected events from the specified Observable as if the events were fired by <code><b>this</b></code>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "releaseCapture",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes <b>all</b> added captures from the Observable.</p>\n",
      "params": [
        {
          "type": "Observable",
          "name": "o",
          "doc": "<p>The Observable to release</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 46,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-releaseCapture",
      "shortDoc": "<p>Removes <b>all</b> added captures from the Observable.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event the handler was associated with.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 352,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-removeListener",
      "shortDoc": "<p>Removes an event handler.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeManagedListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.Basic--mon\" rel=\"Ext.form.Basic--mon\" class=\"docClass\">mon</a> method.</p>\n",
      "params": [
        {
          "type": "Observable|Element",
          "name": "item",
          "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
          "optional": false
        },
        {
          "type": "Object|String",
          "name": "ename",
          "doc": "<p>The event name, or an object containing event name properties.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 196,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.Basic--mon\" rel=\"Ext.form.Basic--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "reset",
      "member": "Ext.form.Basic",
      "doc": "<p>Resets all fields in this form.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 857,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-reset",
      "shortDoc": "<p>Resets all fields in this form.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.form.Basic-method-suspendEvents\" rel=\"Ext.form.Basic-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 502,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
      "shortDoc": "Resume firing events. (see suspendEvents)\nIf events were suspended using the queueSuspended parameter, then all\nevent..."
    },
    {
      "tagname": "method",
      "name": "setValues",
      "member": "Ext.form.Basic",
      "doc": "<p>Set values for fields in this form in bulk.</p>\n",
      "params": [
        {
          "type": "Array/Object",
          "name": "values",
          "doc": "<p>Either an array in the form:</p>\n\n<pre><code>[{id:'clientName', value:'Fred. Olsen Lines'},\n {id:'portOfLoading', value:'FXT'},\n {id:'portOfDischarge', value:'OSL'} ]</code></pre>\n\n\n<p>or an object hash of the form:</p>\n\n<pre><code>{\n    clientName: 'Fred. Olsen Lines',\n    portOfLoading: 'FXT',\n    portOfDischarge: 'OSL'\n}</code></pre>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 740,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-setValues",
      "shortDoc": "<p>Set values for fields in this form in bulk.</p>\n"
    },
    {
      "tagname": "method",
      "name": "submit",
      "member": "Ext.form.Basic",
      "doc": "<p>Shortcut to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">do</a> a <a href=\"#/api/Ext.form.action.Submit\" rel=\"Ext.form.action.Submit\" class=\"docClass\">submit action</a>. This will use the\n<a href=\"#/api/Ext.form.action.Submit\" rel=\"Ext.form.action.Submit\" class=\"docClass\">AJAX submit action</a> by default. If the <a href=\"#/api/Ext.form.Basic--standardsubmit\" rel=\"Ext.form.Basic--standardsubmit\" class=\"docClass\">standardsubmit</a> config is\nenabled it will use a standard form element to submit, or if the <a href=\"#/api/Ext.form.Basic-cfg-api\" rel=\"Ext.form.Basic-cfg-api\" class=\"docClass\">api</a> config is present it will\nuse the <a href=\"#/api/Ext.form.action.DirectLoad\" rel=\"Ext.form.action.DirectLoad\" class=\"docClass\">Ext.direct.Direct submit action</a>.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>The options to pass to the action (see <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">doAction</a> for details).<br></p>\n\n<p>The following code:</p>\n\n\n<pre><code>myFormPanel.getForm().submit({\n    clientValidation: true,\n    url: 'updateConsignment.php',\n    params: {\n        newStatus: 'delivered'\n    },\n    success: function(form, action) {\n       Ext.Msg.alert('Success', action.result.msg);\n    },\n    failure: function(form, action) {\n        switch (action.failureType) {\n            case Ext.form.action.Action.CLIENT_INVALID:\n                Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');\n                break;\n            case Ext.form.action.Action.CONNECT_FAILURE:\n                Ext.Msg.alert('Failure', 'Ajax communication failed');\n                break;\n            case Ext.form.action.Action.SERVER_INVALID:\n               Ext.Msg.alert('Failure', action.result.msg);\n       }\n    }\n});\n</code></pre>\n\n\n<p>would process the following server response for a successful submission:</p>\n\n<pre><code>{\n    \"success\":true, // note this is Boolean, not string\n    \"msg\":\"Consignment updated\"\n}\n</code></pre>\n\n\n<p>and the following server response for a failed submission:</p>\n\n<pre><code>{\n    \"success\":false, // note this is Boolean, not string\n    \"msg\":\"You do not have permission to perform this operation\"\n}\n</code></pre>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 531,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-submit",
      "shortDoc": "Shortcut to do a submit action. This will use the\nAJAX submit action by default. If the standardsubmit config is\nenab..."
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.form.Basic-method-resumeEvents\" rel=\"Ext.form.Basic-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.form.Basic-method-resumeEvents\" rel=\"Ext.form.Basic-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 490,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.form.Basic-method-resumeEvents\" rel=\"Ext.form.Basic-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.form.Basic-method-removeListener\" rel=\"Ext.form.Basic-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event the handler was associated with.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 608,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-un",
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.form.Basic-method-removeListener\" rel=\"Ext.form.Basic-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "updateRecord",
      "member": "Ext.form.Basic",
      "doc": "<p>Persists the values in this form into the passed <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object in a beginEdit/endEdit block.</p>\n",
      "params": [
        {
          "type": "Ext.data.Record",
          "name": "record",
          "doc": "<p>The record to edit</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.form.Basic",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 588,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-method-updateRecord",
      "shortDoc": "<p>Persists the values in this form into the passed <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object in a beginEdit/endEdit block.</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "owner",
      "member": "Ext.form.Basic",
      "type": "Ext.container.Container",
      "doc": "<p>The container component to which this BasicForm is attached.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 84,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-property-owner"
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "actioncomplete",
      "member": "Ext.form.Basic",
      "doc": "<p>Fires when an action is completed.</p>\n",
      "params": [
        {
          "type": "Ext.form.Basic",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.form.action.Action",
          "name": "action",
          "doc": "<p>The <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a> that completed</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 122,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-event-actioncomplete",
      "shortDoc": "<p>Fires when an action is completed.</p>\n"
    },
    {
      "tagname": "event",
      "name": "actionfailed",
      "member": "Ext.form.Basic",
      "doc": "<p>Fires when an action fails.</p>\n",
      "params": [
        {
          "type": "Ext.form.Basic",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.form.action.Action",
          "name": "action",
          "doc": "<p>The <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a> that failed</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 115,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-event-actionfailed",
      "shortDoc": "<p>Fires when an action fails.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforeaction",
      "member": "Ext.form.Basic",
      "doc": "<p>Fires before any action is performed. Return false to cancel the action.</p>\n",
      "params": [
        {
          "type": "Ext.form.Basic",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.form.action.Action",
          "name": "action",
          "doc": "<p>The <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a> to be performed</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 108,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-event-beforeaction",
      "shortDoc": "<p>Fires before any action is performed. Return false to cancel the action.</p>\n"
    },
    {
      "tagname": "event",
      "name": "dirtychange",
      "member": "Ext.form.Basic",
      "doc": "<p>Fires when the dirty state of the entire form changes.</p>\n",
      "params": [
        {
          "type": "Ext.form.Basic",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "dirty",
          "doc": "<p><tt>true</tt> if the form is now dirty, <tt>false</tt> if it is no longer dirty.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 136,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-event-dirtychange",
      "shortDoc": "<p>Fires when the dirty state of the entire form changes.</p>\n"
    },
    {
      "tagname": "event",
      "name": "validitychange",
      "member": "Ext.form.Basic",
      "doc": "<p>Fires when the validity of the entire form changes.</p>\n",
      "params": [
        {
          "type": "Ext.form.Basic",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "valid",
          "doc": "<p><tt>true</tt> if the form is now valid, <tt>false</tt> if it is now invalid.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
      "linenr": 129,
      "html_filename": "Basic.html",
      "href": "Basic.html#Ext-form-Basic-event-validitychange",
      "shortDoc": "<p>Fires when the validity of the entire form changes.</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Basic.js",
  "linenr": 1,
  "html_filename": "Basic.html",
  "href": "Basic.html#Ext-form-Basic",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.util.Observable"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});