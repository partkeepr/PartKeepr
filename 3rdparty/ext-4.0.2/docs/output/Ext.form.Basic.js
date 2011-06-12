Ext.data.JsonP.Ext_form_Basic({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "members": {
    "cfg": [
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-api",
        "shortDoc": "(Optional) If specified, load and submit actions will be handled\nwith Ext.form.action.DirectLoad and Ext.form.action....",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "api",
        "owner": "Ext.form.Basic",
        "doc": "<p>(Optional) If specified, load and submit actions will be handled\nwith <a href=\"#/api/Ext.form.action.DirectLoad\" rel=\"Ext.form.action.DirectLoad\" class=\"docClass\">Ext.form.action.DirectLoad</a> and <a href=\"#/api/Ext.form.action.DirectLoad\" rel=\"Ext.form.action.DirectLoad\" class=\"docClass\">Ext.form.action.DirectLoad</a>.\nMethods which have been imported by <a href=\"#/api/Ext.direct.Manager\" rel=\"Ext.direct.Manager\" class=\"docClass\">Ext.direct.Manager</a> can be specified here to load and submit\nforms.\nSuch as the following:</p>\n\n<pre><code>api: {\n    load: App.ss.MyProfile.load,\n    submit: App.ss.MyProfile.submit\n}\n</code></pre>\n\n\n<p>Load actions can use <code><a href=\"#/api/Ext.form.Basic-cfg-paramOrder\" rel=\"Ext.form.Basic-cfg-paramOrder\" class=\"docClass\">paramOrder</a></code> or <code><a href=\"#/api/Ext.form.Basic-cfg-paramsAsHash\" rel=\"Ext.form.Basic-cfg-paramsAsHash\" class=\"docClass\">paramsAsHash</a></code>\nto customize how the load method is invoked.\nSubmit actions will always use a standard form submit. The <tt>formHandler</tt> configuration must\nbe set on the associated server-side method which has been imported by <a href=\"#/api/Ext.direct.Manager\" rel=\"Ext.direct.Manager\" class=\"docClass\">Ext.direct.Manager</a>.</p>\n\n",
        "linenr": 198,
        "html_filename": "Basic.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-baseParams",
        "shortDoc": "Parameters to pass with all requests. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "baseParams",
        "owner": "Ext.form.Basic",
        "doc": "<p>Parameters to pass with all requests. e.g. baseParams: {id: '123', foo: 'bar'}.</p>\n\n\n<p>Parameters are encoded as standard HTTP parameters using <a href=\"#/api/Ext-method-urlEncode\" rel=\"Ext-method-urlEncode\" class=\"docClass\">Ext.Object.toQueryString</a>.</p>\n\n",
        "linenr": 187,
        "html_filename": "Basic.html"
      },
      {
        "type": "Ext.data.reader.Reader",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-errorReader",
        "shortDoc": "An Ext.data.DataReader (e.g. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "errorReader",
        "owner": "Ext.form.Basic",
        "doc": "<p>An <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.DataReader</a> (e.g. <a href=\"#/api/Ext.data.reader.Xml\" rel=\"Ext.data.reader.Xml\" class=\"docClass\">Ext.data.reader.Xml</a>) to be used to\nread field error messages returned from 'submit' actions. This is optional\nas there is built-in support for processing JSON responses.</p>\n\n\n<p>The Records which provide messages for the invalid Fields must use the\nField name (or id) as the Record ID, and must contain a field called 'msg'\nwhich contains the error message.</p>\n\n\n<p>The errorReader does not have to be a full-blown implementation of a\nReader. It simply needs to implement a <tt>read(xhr)</tt> function\nwhich returns an Array of Records in an object with the following\nstructure:</p>\n\n\n<pre><code>{\n    records: recordArray\n}\n</code></pre>\n\n",
        "linenr": 163,
        "html_filename": "Basic.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 102,
        "html_filename": "Observable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-method",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "method",
        "owner": "Ext.form.Basic",
        "doc": "<p>The request method to use (GET or POST) for form actions if one isn't supplied in the action options.</p>\n",
        "linenr": 153,
        "html_filename": "Basic.html"
      },
      {
        "type": "Array/String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-paramOrder",
        "shortDoc": "A list of params to be executed server side. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "paramOrder",
        "owner": "Ext.form.Basic",
        "doc": "<p>A list of params to be executed server side.\nDefaults to <tt>undefined</tt>. Only used for the <code><a href=\"#/api/Ext.form.Basic-cfg-api\" rel=\"Ext.form.Basic-cfg-api\" class=\"docClass\">api</a></code>\n<code>load</code> configuration.</p>\n\n\n<p>Specify the params in the order in which they must be executed on the\nserver-side as either (1) an Array of String values, or (2) a String of params\ndelimited by either whitespace, comma, or pipe. For example,\nany of the following would be acceptable:</p>\n\n\n<pre><code>paramOrder: ['param1','param2','param3']\nparamOrder: 'param1 param2 param3'\nparamOrder: 'param1,param2,param3'\nparamOrder: 'param1|param2|param'\n     </code></pre>\n\n",
        "linenr": 215,
        "html_filename": "Basic.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-paramsAsHash",
        "shortDoc": "Only used for the api\nload configuration. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "paramsAsHash",
        "owner": "Ext.form.Basic",
        "doc": "<p>Only used for the <code><a href=\"#/api/Ext.form.Basic-cfg-api\" rel=\"Ext.form.Basic-cfg-api\" class=\"docClass\">api</a></code>\n<code>load</code> configuration. If <tt>true</tt>, parameters will be sent as a\nsingle hash collection of named arguments (defaults to <tt>false</tt>). Providing a\n<tt><a href=\"#/api/Ext.form.Basic-cfg-paramOrder\" rel=\"Ext.form.Basic-cfg-paramOrder\" class=\"docClass\">paramOrder</a></tt> nullifies this configuration.</p>\n",
        "linenr": 230,
        "html_filename": "Basic.html"
      },
      {
        "type": "Ext.data.reader.Reader",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-reader",
        "shortDoc": "An Ext.data.DataReader (e.g. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "reader",
        "owner": "Ext.form.Basic",
        "doc": "<p>An <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.DataReader</a> (e.g. <a href=\"#/api/Ext.data.reader.Xml\" rel=\"Ext.data.reader.Xml\" class=\"docClass\">Ext.data.reader.Xml</a>) to be used to read\ndata when executing 'load' actions. This is optional as there is built-in\nsupport for processing JSON responses.</p>\n",
        "linenr": 157,
        "html_filename": "Basic.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-standardSubmit",
        "shortDoc": "If set to true, a standard HTML form submit is used instead\nof a XHR (Ajax) style form submission. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "standardSubmit",
        "owner": "Ext.form.Basic",
        "doc": "<p>If set to <tt>true</tt>, a standard HTML form submit is used instead\nof a XHR (Ajax) style form submission. Defaults to <tt>false</tt>. All of\nthe field values, plus any additional params configured via <a href=\"#/api/Ext.form.Basic-cfg-baseParams\" rel=\"Ext.form.Basic-cfg-baseParams\" class=\"docClass\">baseParams</a>\nand/or the <code>options</code> to <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submit</a>, will be included in the\nvalues submitted in the form.</p>\n\n",
        "linenr": 250,
        "html_filename": "Basic.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-timeout",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "timeout",
        "owner": "Ext.form.Basic",
        "doc": "<p>Timeout for form actions in seconds (default is 30 seconds).</p>\n",
        "linenr": 193,
        "html_filename": "Basic.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-trackResetOnLoad",
        "shortDoc": "If set to true, reset() resets to the last loaded\nor setValues() data instead of when the form was first created. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "trackResetOnLoad",
        "owner": "Ext.form.Basic",
        "doc": "<p>If set to <tt>true</tt>, <a href=\"#/api/Ext.form.Basic-method-reset\" rel=\"Ext.form.Basic-method-reset\" class=\"docClass\">reset</a>() resets to the last loaded\nor <a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>() data instead of when the form was first created.  Defaults to <tt>false</tt>.</p>\n",
        "linenr": 244,
        "html_filename": "Basic.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-url",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "url",
        "owner": "Ext.form.Basic",
        "doc": "<p>The URL to use for form actions if one isn't supplied in the\n<a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">doAction</a> options.</p>\n",
        "linenr": 181,
        "html_filename": "Basic.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-waitMsgTarget",
        "shortDoc": "By default wait messages are displayed with Ext.MessageBox.wait. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "waitMsgTarget",
        "owner": "Ext.form.Basic",
        "doc": "<p>By default wait messages are displayed with Ext.MessageBox.wait. You can target a specific\nelement by passing it or its id or mask the form itself by passing in true. Defaults to <tt>undefined</tt>.</p>\n",
        "linenr": 259,
        "html_filename": "Basic.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Basic.html#Ext-form-Basic-cfg-waitTitle",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "waitTitle",
        "owner": "Ext.form.Basic",
        "doc": "<p>The default title to show for the waiting message box (defaults to <tt>'Please Wait...'</tt>)</p>\n",
        "linenr": 238,
        "html_filename": "Basic.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Basic.html#Ext-form-Basic-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new form. ...",
        "static": false,
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>The component that is the container for the form, usually a <a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a></p>\n",
            "name": "owner"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Configuration options. These are normally specified in the config to the\n<a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a> constructor, which passes them along to the BasicForm automatically.</p>\n",
            "name": "config"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "doc": "<p>Creates new form.</p>\n",
        "owner": "Ext.form.Basic",
        "name": "Basic",
        "html_filename": "Basic.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 71
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "name": "o"
          },
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>Optional additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "name": "more"
          }
        ],
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "linenr": 494,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "shortDoc": "Appends an event handler to this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.form.Basic-method-fireEvent\" rel=\"Ext.form.Basic-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "linenr": 278,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 156,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-addStatics",
        "shortDoc": "Add / override static properties of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "addStatics",
        "owner": "Ext.Base",
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "linenr": 388,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-applyIfToFields",
        "shortDoc": "Calls Ext.applyIf for all field in this form with the passed object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The object to be applied</p>\n",
            "name": "obj"
          }
        ],
        "name": "applyIfToFields",
        "owner": "Ext.form.Basic",
        "doc": "<p>Calls <a href=\"#/api/Ext-method-applyIf\" rel=\"Ext-method-applyIf\" class=\"docClass\">Ext.applyIf</a> for all field in this form with the passed object.</p>\n",
        "linenr": 880,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-applyToFields",
        "shortDoc": "Calls Ext.apply for all fields in this form with the passed object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The object to be applied</p>\n",
            "name": "obj"
          }
        ],
        "name": "applyToFields",
        "owner": "Ext.form.Basic",
        "doc": "<p>Calls <a href=\"#/api/Ext-method-apply\" rel=\"Ext-method-apply\" class=\"docClass\">Ext.apply</a> for all fields in this form with the passed object.</p>\n",
        "linenr": 868,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callParent",
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-capture",
        "shortDoc": "Starts capture on the specified Observable. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable",
            "optional": false,
            "doc": "<p>The Observable to capture events from.</p>\n",
            "name": "o"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call when an event is fired.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to\nthe Observable firing the event.</p>\n",
            "name": "scope"
          }
        ],
        "name": "capture",
        "owner": "Ext.util.Observable",
        "doc": "<p>Starts capture on the specified Observable. All events will be passed to the supplied function with the event\nname + standard signature of the event <strong>before</strong> the event is fired. If the supplied function returns false,\nthe event will not fire.</p>\n",
        "linenr": 54,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-checkDirty",
        "shortDoc": "Check whether the dirty state of the entire form has changed since it was last checked, and\nif so fire the dirtychang...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "checkDirty",
        "owner": "Ext.form.Basic",
        "doc": "<p>Check whether the dirty state of the entire form has changed since it was last checked, and\nif so fire the <a href=\"#/api/Ext.form.Basic-event-dirtychange\" rel=\"Ext.form.Basic-event-dirtychange\" class=\"docClass\">dirtychange</a> event. This is automatically invoked\nwhen an individual field's dirty state changes.</p>\n",
        "linenr": 418,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-checkValidity",
        "shortDoc": "Check whether the validity of the entire form has changed since it was last checked, and\nif so fire the validitychang...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "checkValidity",
        "owner": "Ext.form.Basic",
        "doc": "<p>Check whether the validity of the entire form has changed since it was last checked, and\nif so fire the <a href=\"#/api/Ext.form.Basic-event-validitychange\" rel=\"Ext.form.Basic-event-validitychange\" class=\"docClass\">validitychange</a> event. This is automatically invoked\nwhen an individual field's validity changes.</p>\n",
        "linenr": 373,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-clearInvalid",
        "shortDoc": "Clears all invalid field messages in this form. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "clearInvalid",
        "owner": "Ext.form.Basic",
        "doc": "<p>Clears all invalid field messages in this form.</p>\n",
        "linenr": 840,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "linenr": 425,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "shortDoc": "Removes all managed listeners for this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "linenr": 454,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-create",
        "shortDoc": "Create a new instance of this Class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "create",
        "owner": "Ext.Base",
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "linenr": 329,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-createAlias",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "name": "alias"
          },
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The original method name</p>\n",
            "name": "origin"
          }
        ],
        "name": "createAlias",
        "owner": "Ext.Base",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "linenr": 648,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-destroy",
        "shortDoc": "Destroys this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "destroy",
        "owner": "Ext.form.Basic",
        "doc": "<p>Destroys this object.</p>\n",
        "linenr": 270,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-doAction",
        "shortDoc": "Performs a predefined action (an implementation of Ext.form.action.Action)\nto perform application-specific processing. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "String/Ext.form.action.Action",
            "optional": false,
            "doc": "<p>The name of the predefined action type,\nor instance of <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a> to perform.</p>\n",
            "name": "action"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The options to pass to the <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a>\nthat will get created, if the <tt>action</tt> argument is a String.</p>\n\n<p>All of the config options listed below are supported by both the\n<a href=\"#/api/Ext.form.action.Submit\" rel=\"Ext.form.action.Submit\" class=\"docClass\">submit</a> and <a href=\"#/api/Ext.form.action.Load\" rel=\"Ext.form.action.Load\" class=\"docClass\">load</a>\nactions unless otherwise noted (custom actions could also accept\nother config options):</p>\n\n\n<ul>\n\n<li><b>url</b> : String<div class=\"sub-desc\">The url for the action (defaults\nto the form's <a href=\"#/api/Ext.form.Basic-cfg-url\" rel=\"Ext.form.Basic-cfg-url\" class=\"docClass\">url</a>.)</div></li>\n\n<li><b>method</b> : String<div class=\"sub-desc\">The form method to use (defaults\nto the form's method, or POST if not defined)</div></li>\n\n<li><b>params</b> : String/Object<div class=\"sub-desc\"><p>The params to pass\n(defaults to the form's baseParams, or none if not defined)</p>\n<p>Parameters are encoded as standard HTTP parameters using <a href=\"#/api/Ext-method-urlEncode\" rel=\"Ext-method-urlEncode\" class=\"docClass\">Ext.Object.toQueryString</a>.</p></div></li>\n\n<li><b>headers</b> : Object<div class=\"sub-desc\">Request headers to set for the action.</div></li>\n\n<li><b>success</b> : Function<div class=\"sub-desc\">The callback that will\nbe invoked after a successful response (see top of\n<a href=\"#/api/Ext.form.action.Submit\" rel=\"Ext.form.action.Submit\" class=\"docClass\">submit</a> and <a href=\"#/api/Ext.form.action.Load\" rel=\"Ext.form.action.Load\" class=\"docClass\">load</a>\nfor a description of what constitutes a successful response).\nThe function is passed the following parameters:<ul>\n<li><tt>form</tt> : The <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a> that requested the action.</li>\n<li><tt>action</tt> : The <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Action</a> object which performed the operation.\n<div class=\"sub-desc\">The action object contains these properties of interest:<ul>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-response\" rel=\"Ext.form.action.Action-property-response\" class=\"docClass\">response</a></tt></li>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-result\" rel=\"Ext.form.action.Action-property-result\" class=\"docClass\">result</a></tt> : interrogate for custom postprocessing</li>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-type\" rel=\"Ext.form.action.Action-property-type\" class=\"docClass\">type</a></tt></li>\n</ul></div></li></ul></div></li>\n\n<li><b>failure</b> : Function<div class=\"sub-desc\">The callback that will be invoked after a\nfailed transaction attempt. The function is passed the following parameters:<ul>\n<li><tt>form</tt> : The <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a> that requested the action.</li>\n<li><tt>action</tt> : The <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Action</a> object which performed the operation.\n<div class=\"sub-desc\">The action object contains these properties of interest:<ul>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-failureType\" rel=\"Ext.form.action.Action-property-failureType\" class=\"docClass\">failureType</a></tt></li>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-response\" rel=\"Ext.form.action.Action-property-response\" class=\"docClass\">response</a></tt></li>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-result\" rel=\"Ext.form.action.Action-property-result\" class=\"docClass\">result</a></tt> : interrogate for custom postprocessing</li>\n<li><tt><a href=\"#/api/Ext.form.action.Action-property-type\" rel=\"Ext.form.action.Action-property-type\" class=\"docClass\">type</a></tt></li>\n</ul></div></li></ul></div></li>\n\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope in which to call the\ncallback functions (The <tt>this</tt> reference for the callback functions).</div></li>\n\n<li><b>clientValidation</b> : Boolean<div class=\"sub-desc\">Submit Action only.\nDetermines whether a Form's fields are validated in a final call to\n<a href=\"#/api/Ext.form.Basic-method-isValid\" rel=\"Ext.form.Basic-method-isValid\" class=\"docClass\">isValid</a> prior to submission. Set to <tt>false</tt>\nto prevent this. If undefined, pre-submission field validation is performed.</div></li></ul>\n\n",
            "name": "options"
          }
        ],
        "name": "doAction",
        "owner": "Ext.form.Basic",
        "doc": "<p>Performs a predefined action (an implementation of <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a>)\nto perform application-specific processing.</p>\n",
        "linenr": 459,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 609,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-findField",
        "shortDoc": "Find a specific Ext.form.field.Field in this form by id or name. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to search for (specify either a <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a> or\n<a href=\"#/api/Ext.form.field.Field-method-getName\" rel=\"Ext.form.field.Field-method-getName\" class=\"docClass\">name or hiddenName</a>).</p>\n",
            "name": "id"
          }
        ],
        "name": "findField",
        "owner": "Ext.form.Basic",
        "doc": "<p>Find a specific <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a> in this form by id or name.</p>\n",
        "linenr": 692,
        "return": {
          "type": "void",
          "doc": "<p>Ext.form.field.Field The first matching field, or <tt>null</tt> if none was found.</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to fire.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object...",
            "optional": false,
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "name": "args"
          }
        ],
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.form.Basic-method-enableBubble\" rel=\"Ext.form.Basic-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "linenr": 233,
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-getFieldValues",
        "shortDoc": "Retrieves the fields in the form as a set of key/value pairs, using their\ngetModelData() method to collect the values. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true, only fields that are dirty will be included in the result.\nDefaults to false.</p>\n",
            "name": "dirtyOnly"
          }
        ],
        "name": "getFieldValues",
        "owner": "Ext.form.Basic",
        "doc": "<p>Retrieves the fields in the form as a set of key/value pairs, using their\n<a href=\"#/api/Ext.form.field.Field-method-getModelData\" rel=\"Ext.form.field.Field-method-getModelData\" class=\"docClass\">getModelData()</a> method to collect the values.\nIf multiple fields return values under the same name those values will be combined into an Array.\nThis is similar to <a href=\"#/api/Ext.form.Basic-method-getValues\" rel=\"Ext.form.Basic-method-getValues\" class=\"docClass\">getValues</a> except that this method collects type-specific data values\n(e.g. Date objects for date fields) while getValues returns only String values for submission.</p>\n",
        "linenr": 826,
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-getFields",
        "shortDoc": "Return all the Ext.form.field.Field components in the owner container. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "getFields",
        "owner": "Ext.form.Basic",
        "doc": "<p>Return all the <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a> components in the owner container.</p>\n",
        "linenr": 319,
        "return": {
          "type": "Ext.util.MixedCollection",
          "doc": "<p>Collection of the Field objects</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-getName",
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-getRecord",
        "shortDoc": "Returns the last Ext.data.Model instance that was loaded via loadRecord ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "getRecord",
        "owner": "Ext.form.Basic",
        "doc": "<p>Returns the last <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance that was loaded via <a href=\"#/api/Ext.form.Basic-method-loadRecord\" rel=\"Ext.form.Basic-method-loadRecord\" class=\"docClass\">loadRecord</a></p>\n",
        "linenr": 622,
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The record</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-getValues",
        "shortDoc": "Retrieves the fields in the form as a set of key/value pairs, using their\ngetSubmitData() method to collect the values. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true, will return the key/value collection as a single\nURL-encoded param string. Defaults to false.</p>\n",
            "name": "asString"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true, only fields that are dirty will be included in the result.\nDefaults to false.</p>\n",
            "name": "dirtyOnly"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true, the configured emptyText of empty fields will be used.\nDefaults to false.</p>\n",
            "name": "includeEmptyText"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "useDataValues"
          }
        ],
        "name": "getValues",
        "owner": "Ext.form.Basic",
        "doc": "<p>Retrieves the fields in the form as a set of key/value pairs, using their\n<a href=\"#/api/Ext.form.field.Field-method-getSubmitData\" rel=\"Ext.form.field.Field-method-getSubmitData\" class=\"docClass\">getSubmitData()</a> method to collect the values.\nIf multiple fields return values under the same name those values will be combined into an Array.\nThis is similar to <a href=\"#/api/Ext.form.Basic-method-getFieldValues\" rel=\"Ext.form.Basic-method-getFieldValues\" class=\"docClass\">getFieldValues</a> except that this method collects only String values for\nsubmission, while getFieldValues collects type-specific data values (e.g. Date objects for date fields.)</p>\n",
        "linenr": 776,
        "return": {
          "type": "String/Object",
          "doc": "\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-hasInvalidField",
        "shortDoc": "Returns true if the form contains any invalid fields. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "hasInvalidField",
        "owner": "Ext.form.Basic",
        "doc": "<p>Returns true if the form contains any invalid fields. No fields will be marked as invalid\nas a result of calling this; to trigger marking of fields use <a href=\"#/api/Ext.form.Basic-method-isValid\" rel=\"Ext.form.Basic-method-isValid\" class=\"docClass\">isValid</a> instead.</p>\n",
        "linenr": 341,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "linenr": 530,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-hasUpload",
        "shortDoc": "Returns true if the form contains a file upload field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "hasUpload",
        "owner": "Ext.form.Basic",
        "doc": "<p>Returns true if the form contains a file upload field. This is used to determine the\nmethod for submitting the form: File uploads are not performed using normal 'Ajax' techniques,\nthat is they are <b>not</b> performed using XMLHttpRequests. Instead a hidden <tt>&lt;form></tt>\nelement containing all the fields is created temporarily and submitted with its\n<a href=\"http://www.w3.org/TR/REC-html40/present/frames.html#adef-target\">target</a> set to refer\nto a dynamically generated, hidden <tt>&lt;iframe></tt> which is inserted into the document\nbut removed after the return data has been gathered.</p>\n\n\n<p>The server response is parsed by the browser to create the document for the IFRAME. If the\nserver is using JSON to send the return object, then the\n<a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17\">Content-Type</a> header\nmust be set to \"text/html\" in order to tell the browser to insert the text unchanged into the document body.</p>\n\n\n<p>Characters which are significant to an HTML parser must be sent as HTML entities, so encode\n\"&lt;\" as \"&amp;lt;\", \"&amp;\" as \"&amp;amp;\" etc.</p>\n\n\n<p>The response text is retrieved from the document, and a fake XMLHttpRequest object\nis created containing a <tt>responseText</tt> property in order to conform to the\nrequirements of event handlers and callbacks.</p>\n\n\n<p>Be aware that file upload packets are sent with the content type <a href=\"http://www.faqs.org/rfcs/rfc2388.html\">multipart/form</a>\nand some server technologies (notably JEE) may require some custom processing in order to\nretrieve parameter names and parameter values from the packet content.</p>\n\n",
        "linenr": 431,
        "return": {
          "type": "void",
          "doc": "<p>Boolean</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-implement",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "implement",
        "owner": "Ext.Base",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "linenr": 415,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-initConfig",
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-isDirty",
        "shortDoc": "Returns true if any fields in this form have changed from their original values. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "isDirty",
        "owner": "Ext.form.Basic",
        "doc": "<p>Returns true if any fields in this form have changed from their original values.</p>\n\n\n<p>Note that if this BasicForm was configured with <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> then the\nFields' <em>original values</em> are updated when the values are loaded by <a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>\nor <a href=\"#/api/Ext.form.Basic-method-loadRecord\" rel=\"Ext.form.Basic-method-loadRecord\" class=\"docClass\">loadRecord</a>.</p>\n\n",
        "linenr": 405,
        "return": {
          "type": "void",
          "doc": "<p>Boolean</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-isValid",
        "shortDoc": "Returns true if client-side validation on the form is successful. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "isValid",
        "owner": "Ext.form.Basic",
        "doc": "<p>Returns true if client-side validation on the form is successful. Any invalid fields will be\nmarked as invalid. If you only want to determine overall form validity without marking anything,\nuse <a href=\"#/api/Ext.form.Basic-method-hasInvalidField\" rel=\"Ext.form.Basic-method-hasInvalidField\" class=\"docClass\">hasInvalidField</a> instead.</p>\n",
        "linenr": 356,
        "return": {
          "type": "void",
          "doc": "<p>Boolean</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-load",
        "shortDoc": "Shortcut to do a load action. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options to pass to the action (see <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">doAction</a> for details)</p>\n",
            "name": "options"
          }
        ],
        "name": "load",
        "owner": "Ext.form.Basic",
        "doc": "<p>Shortcut to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">do</a> a <a href=\"#/api/Ext.form.action.Load\" rel=\"Ext.form.action.Load\" class=\"docClass\">load action</a>.</p>\n",
        "linenr": 576,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-loadRecord",
        "shortDoc": "Loads an Ext.data.Model into this form by calling setValues with the\nrecord data. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record to load</p>\n",
            "name": "record"
          }
        ],
        "name": "loadRecord",
        "owner": "Ext.form.Basic",
        "doc": "<p>Loads an <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> into this form by calling <a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a> with the\nrecord data.\nSee also <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>.</p>\n",
        "linenr": 610,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-markInvalid",
        "shortDoc": "Mark fields in this form invalid in bulk. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Array/Object",
            "optional": false,
            "doc": "<p>Either an array in the form <code>[{id:'fieldId', msg:'The message'}, ...]</code>,\nan object hash of <code>{id: msg, id2: msg2}</code>, or a <a href=\"#/api/Ext.data.Errors\" rel=\"Ext.data.Errors\" class=\"docClass\">Ext.data.Errors</a> object.</p>\n",
            "name": "errors"
          }
        ],
        "name": "markInvalid",
        "owner": "Ext.form.Basic",
        "doc": "<p>Mark fields in this form invalid in bulk.</p>\n",
        "linenr": 705,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addManagedListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "shortDoc": "Shorthand for addManagedListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.Basic-method-addManagedListener\" rel=\"Ext.form.Basic-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 681,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeManagedListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.Basic-method-removeManagedListener\" rel=\"Ext.form.Basic-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.Basic-method-mon\" rel=\"Ext.form.Basic-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 687,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-observe",
        "shortDoc": "Sets observability on the passed class constructor. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The class constructor to make observable.</p>\n",
            "name": "c"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
            "name": "listeners"
          }
        ],
        "name": "observe",
        "owner": "Ext.util.Observable",
        "doc": "<p>Sets observability on the passed class constructor.</p>\n\n<p>This makes any event fired on any instance of the passed class also fire a single event through\nthe <strong>class</strong> allowing for central handling of events on many instances at once.</p>\n\n<p>Usage:</p>\n\n<pre><code>Ext.util.Observable.observe(Ext.data.Connection);\nExt.data.Connection.on('beforerequest', function(con, options) {\n    console.log('Ajax request made to ' + options.url);\n});\n</code></pre>\n",
        "linenr": 69,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-on",
        "shortDoc": "Shorthand for addListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.form.Basic-method-fireEvent\" rel=\"Ext.form.Basic-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "linenr": 669,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-override",
        "shortDoc": "Override prototype members of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "override",
        "owner": "Ext.Base",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 518,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "name": "origin"
          },
          {
            "type": "[String]",
            "optional": false,
            "doc": "<p>Array of event names to relay.</p>\n",
            "name": "events"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "prefix"
          }
        ],
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "linenr": 573,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-releaseCapture",
        "shortDoc": "Removes all added captures from the Observable. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable",
            "optional": false,
            "doc": "<p>The Observable to release</p>\n",
            "name": "o"
          }
        ],
        "name": "releaseCapture",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes <strong>all</strong> added captures from the Observable.</p>\n",
        "linenr": 44,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "shortDoc": "Removes an event handler. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n",
        "linenr": 392,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.Basic-method-mon\" rel=\"Ext.form.Basic-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 197,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-reset",
        "shortDoc": "Resets all fields in this form. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [

        ],
        "name": "reset",
        "owner": "Ext.form.Basic",
        "doc": "<p>Resets all fields in this form.</p>\n",
        "linenr": 854,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.form.Basic-method-suspendEvents\" rel=\"Ext.form.Basic-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "linenr": 554,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-setValues",
        "shortDoc": "Set values for fields in this form in bulk. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Array/Object",
            "optional": false,
            "doc": "<p>Either an array in the form:</p>\n\n<pre><code>[{id:'clientName', value:'Fred. Olsen Lines'},\n {id:'portOfLoading', value:'FXT'},\n {id:'portOfDischarge', value:'OSL'} ]</code></pre>\n\n\n<p>or an object hash of the form:</p>\n\n<pre><code>{\n    clientName: 'Fred. Olsen Lines',\n    portOfLoading: 'FXT',\n    portOfDischarge: 'OSL'\n}</code></pre>\n\n",
            "name": "values"
          }
        ],
        "name": "setValues",
        "owner": "Ext.form.Basic",
        "doc": "<p>Set values for fields in this form in bulk.</p>\n",
        "linenr": 737,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-statics",
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-submit",
        "shortDoc": "Shortcut to do a submit action. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options to pass to the action (see <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">doAction</a> for details).<br></p>\n\n<p>The following code:</p>\n\n\n<pre><code>myFormPanel.getForm().submit({\n    clientValidation: true,\n    url: 'updateConsignment.php',\n    params: {\n        newStatus: 'delivered'\n    },\n    success: function(form, action) {\n       Ext.Msg.alert('Success', action.result.msg);\n    },\n    failure: function(form, action) {\n        switch (action.failureType) {\n            case Ext.form.action.Action.CLIENT_INVALID:\n                Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');\n                break;\n            case Ext.form.action.Action.CONNECT_FAILURE:\n                Ext.Msg.alert('Failure', 'Ajax communication failed');\n                break;\n            case Ext.form.action.Action.SERVER_INVALID:\n               Ext.Msg.alert('Failure', action.result.msg);\n       }\n    }\n});\n</code></pre>\n\n\n<p>would process the following server response for a successful submission:</p>\n\n<pre><code>{\n    \"success\":true, // note this is Boolean, not string\n    \"msg\":\"Consignment updated\"\n}\n</code></pre>\n\n\n<p>and the following server response for a failed submission:</p>\n\n<pre><code>{\n    \"success\":false, // note this is Boolean, not string\n    \"msg\":\"You do not have permission to perform this operation\"\n}\n</code></pre>\n\n",
            "name": "options"
          }
        ],
        "name": "submit",
        "owner": "Ext.form.Basic",
        "doc": "<p>Shortcut to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">do</a> a <a href=\"#/api/Ext.form.action.Submit\" rel=\"Ext.form.action.Submit\" class=\"docClass\">submit action</a>. This will use the\n<a href=\"#/api/Ext.form.action.Submit\" rel=\"Ext.form.action.Submit\" class=\"docClass\">AJAX submit action</a> by default. If the standardsubmit config is\nenabled it will use a standard form element to submit, or if the <a href=\"#/api/Ext.form.Basic-cfg-api\" rel=\"Ext.form.Basic-cfg-api\" class=\"docClass\">api</a> config is present it will\nuse the <a href=\"#/api/Ext.form.action.DirectLoad\" rel=\"Ext.form.action.DirectLoad\" class=\"docClass\">Ext.direct.Direct submit action</a>.</p>\n",
        "linenr": 528,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.form.Basic-method-resumeEvents\" rel=\"Ext.form.Basic-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.form.Basic-method-resumeEvents\" rel=\"Ext.form.Basic-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "linenr": 541,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-un",
        "shortDoc": "Shorthand for removeListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.form.Basic-method-addListener\" rel=\"Ext.form.Basic-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.Basic-method-removeListener\" rel=\"Ext.form.Basic-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "linenr": 675,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Basic.html#Ext-form-Basic-method-updateRecord",
        "shortDoc": "Persists the values in this form into the passed Ext.data.Model object in a beginEdit/endEdit block. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Ext.data.Record",
            "optional": false,
            "doc": "<p>The record to edit</p>\n",
            "name": "record"
          }
        ],
        "name": "updateRecord",
        "owner": "Ext.form.Basic",
        "doc": "<p>Persists the values in this form into the passed <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object in a beginEdit/endEdit block.</p>\n",
        "linenr": 585,
        "return": {
          "type": "Ext.form.Basic",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Basic.html"
      }
    ],
    "property": [
      {
        "type": "Ext.container.Container",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Basic.html#Ext-form-Basic-property-owner",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "name": "owner",
        "owner": "Ext.form.Basic",
        "doc": "<p>The container component to which this BasicForm is attached.</p>\n",
        "linenr": 81,
        "html_filename": "Basic.html"
      },
      {
        "type": "Class",
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "property",
        "href": "Base3.html#Ext-Base-property-self",
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Basic.html#Ext-form-Basic-event-actioncomplete",
        "shortDoc": "Fires when an action is completed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.Basic",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.form.action.Action",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a> that completed</p>\n",
            "name": "action"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "actioncomplete",
        "owner": "Ext.form.Basic",
        "doc": "<p>Fires when an action is completed.</p>\n",
        "linenr": 119,
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Basic.html#Ext-form-Basic-event-actionfailed",
        "shortDoc": "Fires when an action fails. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.Basic",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.form.action.Action",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a> that failed</p>\n",
            "name": "action"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "actionfailed",
        "owner": "Ext.form.Basic",
        "doc": "<p>Fires when an action fails.</p>\n",
        "linenr": 112,
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Basic.html#Ext-form-Basic-event-beforeaction",
        "shortDoc": "Fires before any action is performed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.Basic",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.form.action.Action",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a> to be performed</p>\n",
            "name": "action"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeaction",
        "owner": "Ext.form.Basic",
        "doc": "<p>Fires before any action is performed. Return false to cancel the action.</p>\n",
        "linenr": 105,
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Basic.html#Ext-form-Basic-event-dirtychange",
        "shortDoc": "Fires when the dirty state of the entire form changes. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.Basic",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p><tt>true</tt> if the form is now dirty, <tt>false</tt> if it is no longer dirty.</p>\n",
            "name": "dirty"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "dirtychange",
        "owner": "Ext.form.Basic",
        "doc": "<p>Fires when the dirty state of the entire form changes.</p>\n",
        "linenr": 133,
        "html_filename": "Basic.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Basic.html#Ext-form-Basic-event-validitychange",
        "shortDoc": "Fires when the validity of the entire form changes. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.Basic",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p><tt>true</tt> if the form is now valid, <tt>false</tt> if it is now invalid.</p>\n",
            "name": "valid"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "validitychange",
        "owner": "Ext.form.Basic",
        "doc": "<p>Fires when the validity of the entire form changes.</p>\n",
        "linenr": 126,
        "html_filename": "Basic.html"
      }
    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [
    "Ext.Base",
    "Ext.util.Observable"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Basic.html#Ext-form-Basic",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Basic.js",
  "private": false,
  "alternateClassNames": [
    "Ext.form.BasicForm"
  ],
  "name": "Ext.form.Basic",
  "doc": "<p>Provides input field management, validation, submission, and form loading services for the collection\nof <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Field</a> instances within a <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>. It is recommended\nthat you use a <a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a> as the form container, as that has logic to automatically\nhook up an instance of <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a> (plus other conveniences related to field configuration.)</p>\n\n<h2>Form Actions</h2>\n\n<p>The Basic class delegates the handling of form loads and submits to instances of <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a>.\nSee the various Action implementations for specific details of each one's functionality, as well as the\ndocumentation for <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">doAction</a> which details the configuration options that can be specified in\neach action call.</p>\n\n<p>The default submit Action is <a href=\"#/api/Ext.form.action.Submit\" rel=\"Ext.form.action.Submit\" class=\"docClass\">Ext.form.action.Submit</a>, which uses an Ajax request to submit the\nform's values to a configured URL. To enable normal browser submission of an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> form, use the\n<a href=\"#/api/Ext.form.Basic-cfg-standardSubmit\" rel=\"Ext.form.Basic-cfg-standardSubmit\" class=\"docClass\">standardSubmit</a> config option.</p>\n\n<p>Note: File uploads are not performed using normal 'Ajax' techniques; see the description for\n<a href=\"#/api/Ext.form.Basic-method-hasUpload\" rel=\"Ext.form.Basic-method-hasUpload\" class=\"docClass\">hasUpload</a> for details.</p>\n\n<h2>Example usage:</h2>\n\n<pre><code>Ext.create('Ext.form.Panel', {\n    title: 'Basic Form',\n    renderTo: Ext.getBody(),\n    bodyPadding: 5,\n    width: 350,\n\n    // Any configuration items here will be automatically passed along to\n    // the <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a> instance when it gets created.\n\n    // The form will submit an AJAX request to this URL when submitted\n    url: 'save-form.php',\n\n    items: [{\n        fieldLabel: 'Field',\n        name: 'theField'\n    }],\n\n    buttons: [{\n        text: 'Submit',\n        handler: function() {\n            // The getForm() method returns the <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a> instance:\n            var form = this.up('form').getForm();\n            if (form.isValid()) {\n                // Submit the Ajax request and handle the response\n                form.submit({\n                    success: function(form, action) {\n                       Ext.Msg.alert('Success', action.result.msg);\n                    },\n                    failure: function(form, action) {\n                        Ext.Msg.alert('Failed', action.result.msg);\n                    }\n                });\n            }\n        }\n    }]\n});\n</code></pre>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Basic.html",
  "extends": "Ext.util.Observable"
});