Ext.data.JsonP.Ext_data_Model({
  "tagname": "class",
  "name": "Ext.data.Model",
  "doc": "<p>A Model represents some object that your application manages. For example, one might define a Model for Users, Products,\nCars, or any other real-world object that we want to model in the system. Models are registered via the <a href=\"#/api/Ext.ModelManager\" rel=\"Ext.ModelManager\" class=\"docClass\">model manager</a>,\nand are used by <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">stores</a>, which are in turn used by many of the data-bound components in Ext.</p>\n\n\n\n\n<p>Models are defined as a set of fields and any arbitrary methods and properties relevant to the model. For example:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'name',  type: 'string'},\n        {name: 'age',   type: 'int'},\n        {name: 'phone', type: 'string'},\n        {name: 'alive', type: 'boolean', defaultValue: true}\n    ],\n\n    changeName: function() {\n        var oldName = this.get('name'),\n            newName = oldName + \" The Barbarian\";\n\n        this.set('name', newName);\n    }\n});\n</code></pre>\n\n\n\n\n<p>The fields array is turned into a <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a> automatically by the <a href=\"#/api/Ext.ModelManager\" rel=\"Ext.ModelManager\" class=\"docClass\">ModelManager</a>, and all\nother functions and properties are copied to the new Model's prototype.</p>\n\n\n\n\n<p>Now we can create instances of our User model and call any model logic we defined:</p>\n\n\n\n\n<pre><code>var user = Ext.ModelManager.create({\n    name : 'Conan',\n    age  : 24,\n    phone: '555-555-5555'\n}, 'User');\n\nuser.changeName();\nuser.get('name'); //returns \"Conan The Barbarian\"\n</code></pre>\n\n\n\n\n<p><u>Validations</u></p>\n\n\n\n\n<p>Models have built-in support for validations, which are executed against the validator functions in\n<a href=\"#/api/Ext.data.validations\" rel=\"Ext.data.validations\" class=\"docClass\">Ext.data.validations</a> (<a href=\"#/api/Ext.data.validations\" rel=\"Ext.data.validations\" class=\"docClass\">see all validation functions</a>). Validations are easy to add to models:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'name',     type: 'string'},\n        {name: 'age',      type: 'int'},\n        {name: 'phone',    type: 'string'},\n        {name: 'gender',   type: 'string'},\n        {name: 'username', type: 'string'},\n        {name: 'alive',    type: 'boolean', defaultValue: true}\n    ],\n\n    validations: [\n        {type: 'presence',  field: 'age'},\n        {type: 'length',    field: 'name',     min: 2},\n        {type: 'inclusion', field: 'gender',   list: ['Male', 'Female']},\n        {type: 'exclusion', field: 'username', list: ['Admin', 'Operator']},\n        {type: 'format',    field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}\n    ]\n});\n</code></pre>\n\n\n\n\n<p>The validations can be run by simply calling the <a href=\"#/api/Ext.data.Model-method-validate\" rel=\"Ext.data.Model-method-validate\" class=\"docClass\">validate</a> function, which returns a <a href=\"#/api/Ext.data.Errors\" rel=\"Ext.data.Errors\" class=\"docClass\">Ext.data.Errors</a>\nobject:</p>\n\n\n\n\n<pre><code>var instance = Ext.ModelManager.create({\n    name: 'Ed',\n    gender: 'Male',\n    username: 'edspencer'\n}, 'User');\n\nvar errors = instance.validate();\n</code></pre>\n\n\n\n\n<p><u>Associations</u></p>\n\n\n\n\n<p>Models can have associations with other Models via <a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo</a> and\n<a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany</a> associations. For example, let's say we're writing a blog administration\napplication which deals with Users, Posts and Comments. We can express the relationships between these models like this:</p>\n\n\n\n\n<pre><code>Ext.define('Post', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'user_id'],\n\n    belongsTo: 'User',\n    hasMany  : {model: 'Comment', name: 'comments'}\n});\n\nExt.define('Comment', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'user_id', 'post_id'],\n\n    belongsTo: 'Post'\n});\n\nExt.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id'],\n\n    hasMany: [\n        'Post',\n        {model: 'Comment', name: 'comments'}\n    ]\n});\n</code></pre>\n\n\n\n\n<p>See the docs for <a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">Ext.data.BelongsToAssociation</a> and <a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">Ext.data.HasManyAssociation</a> for details on the usage\nand configuration of associations. Note that associations can also be specified like this:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id'],\n\n    associations: [\n        {type: 'hasMany', model: 'Post',    name: 'posts'},\n        {type: 'hasMany', model: 'Comment', name: 'comments'}\n    ]\n});\n</code></pre>\n\n\n\n\n<p><u>Using a Proxy</u></p>\n\n\n\n\n<p>Models are great for representing types of data and relationships, but sooner or later we're going to want to\nload or save that data somewhere. All loading and saving of data is handled via a <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>,\nwhich can be set directly on the Model:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email'],\n\n    proxy: {\n        type: 'rest',\n        url : '/users'\n    }\n});\n</code></pre>\n\n\n\n\n<p>Here we've set up a <a href=\"#/api/Ext.data.proxy.Rest\" rel=\"Ext.data.proxy.Rest\" class=\"docClass\">Rest Proxy</a>, which knows how to load and save data to and from a\nRESTful backend. Let's see how this works:</p>\n\n\n\n\n<pre><code>var user = Ext.ModelManager.create({name: 'Ed Spencer', email: 'ed@sencha.com'}, 'User');\n\nuser.save(); //POST /users\n</code></pre>\n\n\n\n\n<p>Calling <a href=\"#/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">save</a> on the new Model instance tells the configured RestProxy that we wish to persist this\nModel's data onto our server. RestProxy figures out that this Model hasn't been saved before because it doesn't\nhave an id, and performs the appropriate action - in this case issuing a POST request to the url we configured\n(/users). We configure any Proxy on any Model and always follow this API - see <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a> for a full\nlist.</p>\n\n\n\n\n<p>Loading data via the Proxy is equally easy:</p>\n\n\n\n\n<pre><code>//get a reference to the User model class\nvar User = Ext.ModelManager.getModel('User');\n\n//Uses the configured RestProxy to make a GET request to /users/123\nUser.load(123, {\n    success: function(user) {\n        console.log(user.getId()); //logs 123\n    }\n});\n</code></pre>\n\n\n\n\n<p>Models can also be updated and destroyed easily:</p>\n\n\n\n\n<pre><code>//the user Model we loaded in the last snippet:\nuser.set('name', 'Edward Spencer');\n\n//tells the Proxy to save the Model. In this case it will perform a PUT request to /users/123 as this Model already has an id\nuser.save({\n    success: function() {\n        console.log('The User was updated');\n    }\n});\n\n//tells the Proxy to destroy the Model. Performs a DELETE request to /users/123\nuser.destroy({\n    success: function() {\n        console.log('The User was destroyed!');\n    }\n});\n</code></pre>\n\n\n\n\n<p><u>Usage in Stores</u></p>\n\n\n\n\n<p>It is very common to want to load a set of Model instances to be displayed and manipulated in the UI. We do this\nby creating a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>:</p>\n\n\n\n\n<pre><code>var store = new Ext.data.Store({\n    model: 'User'\n});\n\n//uses the Proxy we set up on Model to load the Store data\nstore.load();\n</code></pre>\n\n\n\n\n<p>A Store is just a collection of Model instances - usually loaded from a server somewhere. Store can also maintain\na set of added, updated and removed Model instances to be synchronized with the server via the Proxy. See the\n<a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store docs</a> for more information on Stores.</p>\n\n",
  "extends": null,
  "mixins": [
    "Ext.util.Observable"
  ],
  "alternateClassNames": [
    "Ext.data.Record"
  ],
  "xtype": null,
  "author": "Ed Spencer",
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "idProperty",
      "member": "Ext.data.Model",
      "type": "String",
      "doc": "<p>The name of the field treated as this Model's unique id (defaults to 'id').</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 521,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-cfg-idProperty"
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.data.Model-method-addListener\" rel=\"Ext.data.Model-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "persistanceProperty",
      "member": "Ext.data.Model",
      "type": "String",
      "doc": "<p>The property on this Persistable object that its data is saved to.\nDefaults to 'data' (e.g. all persistable data resides in this.data.)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 503,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-cfg-persistanceProperty",
      "shortDoc": "The property on this Persistable object that its data is saved to.\nDefaults to 'data' (e.g. all persistable data resi..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Model",
      "member": "Ext.data.Model",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "data",
          "doc": "<p>An object containing keys corresponding to this model's fields, and their associated values</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "id",
          "doc": "<p>Optional unique ID to assign to this model instance</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 1,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-constructor",
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
      "name": "beginEdit",
      "member": "Ext.data.Model",
      "doc": "<p>Begin an edit. While in edit mode, no events (e.g.. the <code>update</code> event)\nare relayed to the containing store. When an edit has begun, it must be followed\nby either <a href=\"#/api/Ext.data.Model-method-endEdit\" rel=\"Ext.data.Model-method-endEdit\" class=\"docClass\">endEdit</a> or <a href=\"#/api/Ext.data.Model-method-cancelEdit\" rel=\"Ext.data.Model-method-cancelEdit\" class=\"docClass\">cancelEdit</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 701,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-beginEdit",
      "shortDoc": "Begin an edit. While in edit mode, no events (e.g.. the update event)\nare relayed to the containing store. When an ed..."
    },
    {
      "tagname": "method",
      "name": "cancelEdit",
      "member": "Ext.data.Model",
      "doc": "<p>Cancels all changes made in the current edit operation.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 716,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-cancelEdit",
      "shortDoc": "<p>Cancels all changes made in the current edit operation.</p>\n"
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
      "name": "commit",
      "member": "Ext.data.Model",
      "doc": "<p>Usually called by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> which owns the model instance.\nCommits all changes made to the instance since either creation or the last commit operation.</p>\n\n<p>Developers should subscribe to the <a href=\"#/api/Ext.data.Store-event-update\" rel=\"Ext.data.Store-event-update\" class=\"docClass\">Ext.data.Store.update</a> event\nto have their code notified of commit operations.</p>\n\n",
      "params": [
        {
          "type": "Boolean",
          "name": "silent",
          "doc": "<p>(optional) True to skip notification of the owning\nstore of the change (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 842,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-commit",
      "shortDoc": "Usually called by the Ext.data.Store which owns the model instance.\nCommits all changes made to the instance since ei..."
    },
    {
      "tagname": "method",
      "name": "copy",
      "member": "Ext.data.Model",
      "doc": "<p>Creates a copy (clone) of this Model instance.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>(optional) A new id, defaults to the id\nof the instance being copied. See <code><a href=\"#/api/Ext.data.Model-method-id\" rel=\"Ext.data.Model-method-id\" class=\"docClass\">id</a></code>.\nTo generate a phantom instance with a new id use:</p>\n\n<pre><code>var rec = record.copy(); // clone the record\nExt.data.Model.id(rec); // automatically generate a unique sequential id\n</code></pre>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Record",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 863,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-copy",
      "shortDoc": "<p>Creates a copy (clone) of this Model instance.</p>\n"
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.data.Model",
      "doc": "<p>Destroys the model using the configured proxy</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>Options to pass to the proxy</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Model",
        "doc": "<p>The Model instance</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 991,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-destroy",
      "shortDoc": "<p>Destroys the model using the configured proxy</p>\n"
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
      "name": "endEdit",
      "member": "Ext.data.Model",
      "doc": "<p>End an edit. If any data was modified, the containing store is notified\n(ie, the store's <code>update</code> event will fire).</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "silent",
          "doc": "<p>True to not notify the store of the change</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 733,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-endEdit",
      "shortDoc": "<p>End an edit. If any data was modified, the containing store is notified\n(ie, the store's <code>update</code> event will fire).</p>\n"
    },
    {
      "tagname": "method",
      "name": "fireEvent",
      "member": "Ext.util.Observable",
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.data.Model-method-enableBubble\" rel=\"Ext.data.Model-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
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
      "name": "get",
      "member": "Ext.data.Model",
      "doc": "<p>Returns the value of the given field</p>\n",
      "params": [
        {
          "type": "String",
          "name": "fieldName",
          "doc": "<p>The field to fetch the value for</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>The value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 618,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-get",
      "shortDoc": "<p>Returns the value of the given field</p>\n"
    },
    {
      "tagname": "method",
      "name": "getAssociatedData",
      "member": "Ext.data.Model",
      "doc": "<p>Gets all of the data from this Models <em>loaded</em> associations.\nIt does this recursively - for example if we have a User which\nhasMany Orders, and each Order hasMany OrderItems, it will return an object like this:\n{</p>\n\n<pre><code>orders: [\n    {\n        id: 123,\n        status: 'shipped',\n        orderItems: [\n            ...\n        ]\n    }\n]\n</code></pre>\n\n<p>}</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>The nested data set for the Model's loaded associations</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 1102,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-getAssociatedData",
      "shortDoc": "Gets all of the data from this Models loaded associations.\nIt does this recursively - for example if we have a User w..."
    },
    {
      "tagname": "method",
      "name": "getChanges",
      "member": "Ext.data.Model",
      "doc": "<p>Gets a hash of only the fields that have been modified since this Model was created or commited.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "<p>Object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 751,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-getChanges",
      "shortDoc": "<p>Gets a hash of only the fields that have been modified since this Model was created or commited.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getId",
      "member": "Ext.data.Model",
      "doc": "<p>Returns the unique ID allocated to this model instance as defined by <a href=\"#/api/Ext.data.Model-cfg-idProperty\" rel=\"Ext.data.Model-cfg-idProperty\" class=\"docClass\">idProperty</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>The id</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 1024,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-getId",
      "shortDoc": "<p>Returns the unique ID allocated to this model instance as defined by <a href=\"#/api/Ext.data.Model-cfg-idProperty\" rel=\"Ext.data.Model-cfg-idProperty\" class=\"docClass\">idProperty</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "getProxy",
      "member": "Ext.data.Model",
      "doc": "<p>Returns the configured Proxy for this Model</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.data.proxy.Proxy",
        "doc": "<p>The proxy</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 900,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-getProxy",
      "shortDoc": "<p>Returns the configured Proxy for this Model</p>\n"
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
      "name": "id",
      "member": "Ext.data.Model",
      "doc": "<p>Generates a sequential id. This method is typically called when a record is <a href=\"#/api/Ext.data.Model--create\" rel=\"Ext.data.Model--create\" class=\"docClass\">create</a>d\nand <a href=\"#/api/Ext.data.Model--Record\" rel=\"Ext.data.Model--Record\" class=\"docClass\">no id has been specified</a>. The id will automatically be assigned\nto the record. The returned id takes the form:\n<tt>&#123;PREFIX}-&#123;AUTO_ID}</tt>.<div class=\"mdetail-params\"><ul>\n<li><b><tt>PREFIX</tt></b> : String<p class=\"sub-desc\"><tt>Ext.data.Model.PREFIX</tt>\n(defaults to <tt>'ext-record'</tt>)</p></li>\n<li><b><tt>AUTO_ID</tt></b> : String<p class=\"sub-desc\"><tt>Ext.data.Model.AUTO_ID</tt>\n(defaults to <tt>1</tt> initially)</p></li>\n</ul></div></p>\n",
      "params": [
        {
          "type": "Ext.data.Model",
          "name": "rec",
          "doc": "<p>The record being created.  The record does not exist, it's a <a href=\"#/api/Ext.data.Model-property-phantom\" rel=\"Ext.data.Model-property-phantom\" class=\"docClass\">phantom</a>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>auto-generated string id, <tt>\"ext-record-i++'</tt>;</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 468,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-id",
      "shortDoc": "Generates a sequential id. This method is typically called when a record is created\nand no id has been specified. The..."
    },
    {
      "tagname": "method",
      "name": "isModified",
      "member": "Ext.data.Model",
      "doc": "<p>Returns <tt>true</tt> if the passed field name has been <code><a href=\"#/api/Ext.data.Model-property-modified\" rel=\"Ext.data.Model-property-modified\" class=\"docClass\">modified</a></code>\nsince the load or last commit.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "fieldName",
          "doc": "<p><a href=\"#/api/Ext.data.Field-cfg-name\" rel=\"Ext.data.Field-cfg-name\" class=\"docClass\">Ext.data.Field.name</a></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 769,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-isModified",
      "shortDoc": "<p>Returns <tt>true</tt> if the passed field name has been <code><a href=\"#/api/Ext.data.Model-property-modified\" rel=\"Ext.data.Model-property-modified\" class=\"docClass\">modified</a></code>\nsince the load or last commit.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isValid",
      "member": "Ext.data.Model",
      "doc": "<p>Checks if the model is valid. See <a href=\"#/api/Ext.data.Model-method-validate\" rel=\"Ext.data.Model-method-validate\" class=\"docClass\">validate</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the model is valid.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 940,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-isValid",
      "shortDoc": "<p>Checks if the model is valid. See <a href=\"#/api/Ext.data.Model-method-validate\" rel=\"Ext.data.Model-method-validate\" class=\"docClass\">validate</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "join",
      "member": "Ext.data.Model",
      "doc": "<p>Tells this model instance that it has been added to a store</p>\n",
      "params": [
        {
          "type": "Ext.data.Store",
          "name": "store",
          "doc": "<p>The store that the model has been added to</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 1040,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-join",
      "shortDoc": "<p>Tells this model instance that it has been added to a store</p>\n"
    },
    {
      "tagname": "method",
      "name": "load",
      "member": "Ext.data.Model",
      "doc": "<p><b>Static</b>. Asynchronously loads a model instance by id. Sample usage:</p>\n\n<pre><code>    MyApp.User = Ext.define('User', {\n        extend: 'Ext.data.Model',\n        fields: [\n            {name: 'id', type: 'int'},\n            {name: 'name', type: 'string'}\n        ]\n    });\n\n    MyApp.User.load(10, {\n        scope: this,\n        failure: function(record, operation) {\n            //do something if the load failed\n        },\n        success: function(record, operation) {\n            //do something if the load succeeded\n        },\n        callback: function(record, operation) {\n            //do something whether the load succeeded or failed\n        }\n    });\n    </code></pre>\n\n",
      "params": [
        {
          "type": "Number",
          "name": "id",
          "doc": "<p>The id of the model to load</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Optional config object containing success, failure and callback functions, plus optional scope</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 405,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-load",
      "shortDoc": "Static. Asynchronously loads a model instance by id. Sample usage:\n\n    MyApp.User = Ext.define('User', {\n        ext..."
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
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.data.Model-method-addListener\" rel=\"Ext.data.Model-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
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
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.data.Model-method-addListener\" rel=\"Ext.data.Model-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
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
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.data.Model-method-addListener\" rel=\"Ext.data.Model-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "reject",
      "member": "Ext.data.Model",
      "doc": "<p>Usually called by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> to which this model instance has been <a href=\"#/api/Ext.data.Model-method-join\" rel=\"Ext.data.Model-method-join\" class=\"docClass\">joined</a>.\nRejects all changes made to the model instance since either creation, or the last commit operation.\nModified fields are reverted to their original values.</p>\n\n<p>Developers should subscribe to the <a href=\"#/api/Ext.data.Store-event-update\" rel=\"Ext.data.Store-event-update\" class=\"docClass\">Ext.data.Store.update</a> event\nto have their code notified of reject operations.</p>\n\n",
      "params": [
        {
          "type": "Boolean",
          "name": "silent",
          "doc": "<p>(optional) True to skip notification of the owning\nstore of the change (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 811,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-reject",
      "shortDoc": "Usually called by the Ext.data.Store to which this model instance has been joined.\nRejects all changes made to the mo..."
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.data.Model-method-addListener\" rel=\"Ext.data.Model-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.Model--mon\" rel=\"Ext.data.Model--mon\" class=\"docClass\">mon</a> method.</p>\n",
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
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.Model--mon\" rel=\"Ext.data.Model--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.data.Model-method-suspendEvents\" rel=\"Ext.data.Model-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
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
      "name": "save",
      "member": "Ext.data.Model",
      "doc": "<p>Saves the model instance using the configured proxy</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>Options to pass to the proxy</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Model",
        "doc": "<p>The Model instance</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 948,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-save",
      "shortDoc": "<p>Saves the model instance using the configured proxy</p>\n"
    },
    {
      "tagname": "method",
      "name": "set",
      "member": "Ext.data.Model",
      "doc": "<p>Sets the given field to the given value, marks the instance as dirty</p>\n",
      "params": [
        {
          "type": "String|Object",
          "name": "fieldName",
          "doc": "<p>The field to set, or an object containing key/value pairs</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to set</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 627,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-set",
      "shortDoc": "<p>Sets the given field to the given value, marks the instance as dirty</p>\n"
    },
    {
      "tagname": "method",
      "name": "setDirty",
      "member": "Ext.data.Model",
      "doc": "<p>Marks this <b>Record</b> as <code><a href=\"#/api/Ext.data.Model-property-dirty\" rel=\"Ext.data.Model-property-dirty\" class=\"docClass\">dirty</a></code>.  This method\nis used interally when adding <code><a href=\"#/api/Ext.data.Model-property-phantom\" rel=\"Ext.data.Model-property-phantom\" class=\"docClass\">phantom</a></code> records to a\n<a href=\"#/api/Ext.data.Store--writer\" rel=\"Ext.data.Store--writer\" class=\"docClass\">writer enabled store</a>.</p>\n\n\n<br><p>Marking a record <code><a href=\"#/api/Ext.data.Model-property-dirty\" rel=\"Ext.data.Model-property-dirty\" class=\"docClass\">dirty</a></code> causes the phantom to\n\n\n<p>be returned by <a href=\"#/api/Ext.data.Store--getModifiedRecords\" rel=\"Ext.data.Store--getModifiedRecords\" class=\"docClass\">Ext.data.Store.getModifiedRecords</a> where it will\nhave a create action composed for it during <a href=\"#/api/Ext.data.Store--save\" rel=\"Ext.data.Store--save\" class=\"docClass\">store save</a>\noperations.</p></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 779,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-setDirty",
      "shortDoc": "Marks this Record as dirty.  This method\nis used interally when adding phantom records to a\nwriter enabled store.\n\n\nM..."
    },
    {
      "tagname": "method",
      "name": "setId",
      "member": "Ext.data.Model",
      "doc": "<p>Sets the model instance's id field to the given id</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "id",
          "doc": "<p>The new id</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 1032,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-setId",
      "shortDoc": "<p>Sets the model instance's id field to the given id</p>\n"
    },
    {
      "tagname": "method",
      "name": "setProxy",
      "member": "Ext.data.Model",
      "doc": "<p>Sets the Proxy to use for this model. Accepts any options that can be accepted by <a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a></p>\n",
      "params": [
        {
          "type": "String/Object/Ext.data.proxy.Proxy",
          "name": "proxy",
          "doc": "<p>The proxy</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 879,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-setProxy",
      "shortDoc": "<p>Sets the Proxy to use for this model. Accepts any options that can be accepted by <a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.data.Model-method-resumeEvents\" rel=\"Ext.data.Model-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.Model-method-resumeEvents\" rel=\"Ext.data.Model-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
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
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.data.Model-method-resumeEvents\" rel=\"Ext.data.Model-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.data.Model-method-removeListener\" rel=\"Ext.data.Model-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.data.Model-method-addListener\" rel=\"Ext.data.Model-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.data.Model-method-removeListener\" rel=\"Ext.data.Model-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "unjoin",
      "member": "Ext.data.Model",
      "doc": "<p>Tells this model instance that it has been removed from the store</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 1053,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-unjoin",
      "shortDoc": "<p>Tells this model instance that it has been removed from the store</p>\n"
    },
    {
      "tagname": "method",
      "name": "validate",
      "member": "Ext.data.Model",
      "doc": "<p>Validates the current data against all of its configured <a href=\"#/api/Ext.data.Model--validations\" rel=\"Ext.data.Model--validations\" class=\"docClass\">validations</a> and returns an\n<a href=\"#/api/Ext.data.Errors\" rel=\"Ext.data.Errors\" class=\"docClass\">Errors</a> object</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.data.Errors",
        "doc": "<p>The errors object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 908,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-method-validate",
      "shortDoc": "<p>Validates the current data against all of its configured <a href=\"#/api/Ext.data.Model--validations\" rel=\"Ext.data.Model--validations\" class=\"docClass\">validations</a> and returns an\n<a href=\"#/api/Ext.data.Errors\" rel=\"Ext.data.Errors\" class=\"docClass\">Errors</a> object</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "defaultProxyType",
      "member": "Ext.data.Model",
      "type": "String",
      "doc": "<p>The string type of the default Model Proxy. Defaults to 'ajax'</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 526,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-property-defaultProxyType"
    },
    {
      "tagname": "property",
      "name": "dirty",
      "member": "Ext.data.Model",
      "type": "Boolean",
      "doc": "<p>Readonly flag - true if this Record has been modified.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 497,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-property-dirty"
    },
    {
      "tagname": "property",
      "name": "editing",
      "member": "Ext.data.Model",
      "type": "Boolean",
      "doc": "<p>Internal flag used to track whether or not the model instance is currently being edited. Read-only</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 490,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-property-editing"
    },
    {
      "tagname": "property",
      "name": "fields",
      "member": "Ext.data.Model",
      "type": "Array",
      "doc": "<p>An array of the fields defined on this model</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 533,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-property-fields"
    },
    {
      "tagname": "property",
      "name": "modified",
      "member": "Ext.data.Model",
      "type": "Object",
      "doc": "<p>Key: value pairs of all fields whose values have changed</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 571,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-property-modified"
    },
    {
      "tagname": "property",
      "name": "phantom",
      "member": "Ext.data.Model",
      "type": "Boolean",
      "doc": "<p><tt>true</tt> when the record does not yet exist in a server-side database (see\n<a href=\"#/api/Ext.data.Model-method-setDirty\" rel=\"Ext.data.Model-method-setDirty\" class=\"docClass\">setDirty</a>).  Any record which has a real database pk set as its id property\nis NOT a phantom -- it's real.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 512,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-property-phantom",
      "shortDoc": "true when the record does not yet exist in a server-side database (see\nsetDirty).  Any record which has a real databa..."
    },
    {
      "tagname": "property",
      "name": "raw",
      "member": "Ext.data.Model",
      "type": "Object",
      "doc": "<p>The raw data used to create this model if created via a reader.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 560,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-property-raw"
    },
    {
      "tagname": "property",
      "name": "store",
      "member": "Ext.data.Model",
      "type": "Ext.data.Store",
      "doc": "<p>The <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> to which this Record belongs.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
      "linenr": 1045,
      "html_filename": "Model.html",
      "href": "Model.html#Ext-data-Model-property-store"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Model.js",
  "linenr": 1,
  "html_filename": "Model.html",
  "href": "Model.html#Ext-data-Model",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.grid.property.Property"
  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Observable"
  ]
});