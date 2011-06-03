Ext.data.JsonP.Ext_data_proxy_Ajax({
  "tagname": "class",
  "name": "Ext.data.proxy.Ajax",
  "doc": "<p>AjaxProxy is one of the most widely-used ways of getting data into your application. It uses AJAX requests to \nload data from the server, usually to be placed into a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>. Let's take a look at a typical\nsetup. Here we're going to set up a Store that has an AjaxProxy. To prepare, we'll also set up a \n<a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email']\n});\n\n//The Store contains the AjaxProxy as an inline configuration\nvar store = new Ext.data.Store({\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : 'users.json'\n    }\n});\n\nstore.load();\n</code></pre>\n\n\n\n\n<p>Our example is going to load user data into a Store, so we start off by defining a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>\nwith the fields that we expect the server to return. Next we set up the Store itself, along with a <a href=\"#/api/Ext.data.proxy.Ajax--proxy\" rel=\"Ext.data.proxy.Ajax--proxy\" class=\"docClass\">proxy</a>\nconfiguration. This configuration was automatically turned into an <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">Ext.data.proxy.Ajax</a> instance, with the url we\nspecified being passed into AjaxProxy's constructor. It's as if we'd done this:</p>\n\n\n\n\n<pre><code>new Ext.data.proxy.Ajax({\n    url: 'users.json',\n    model: 'User',\n    reader: 'json'\n});\n</code></pre>\n\n\n\n\n<p>A couple of extra configurations appeared here - <a href=\"#/api/Ext.data.proxy.Ajax-cfg-model\" rel=\"Ext.data.proxy.Ajax-cfg-model\" class=\"docClass\">model</a> and <a href=\"#/api/Ext.data.proxy.Ajax-cfg-reader\" rel=\"Ext.data.proxy.Ajax-cfg-reader\" class=\"docClass\">reader</a>. These are set by default \nwhen we create the proxy via the Store - the Store already knows about the Model, and Proxy's default \n<a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Reader</a> is <a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">JsonReader</a>.</p>\n\n\n\n\n<p>Now when we call store.load(), the AjaxProxy springs into action, making a request to the url we configured\n('users.json' in this case). As we're performing a read, it sends a GET request to that url (see <a href=\"#/api/Ext.data.proxy.Ajax-property-actionMethods\" rel=\"Ext.data.proxy.Ajax-property-actionMethods\" class=\"docClass\">actionMethods</a>\nto customize this - by default any kind of read will be sent as a GET request and any kind of write will be sent as a\nPOST request).</p>\n\n\n\n\n<p><u>Limitations</u></p>\n\n\n\n\n<p>AjaxProxy cannot be used to retrieve data from other domains. If your application is running on http://domainA.com\nit cannot load data from http://domainB.com because browsers have a built-in security policy that prohibits domains\ntalking to each other via AJAX.</p>\n\n\n\n\n<p>If you need to read data from another domain and can't set up a proxy server (some software that runs on your own\ndomain's web server and transparently forwards requests to http://domainB.com, making it look like they actually came\nfrom http://domainA.com), you can use <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">Ext.data.proxy.JsonP</a> and a technique known as JSON-P (JSON with \nPadding), which can help you get around the problem so long as the server on http://domainB.com is set up to support\nJSON-P responses. See <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">JsonPProxy</a>'s introduction docs for more details.</p>\n\n\n\n\n<p><u>Readers and Writers</u></p>\n\n\n\n\n<p>AjaxProxy can be configured to use any type of <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Reader</a> to decode the server's response. If\nno Reader is supplied, AjaxProxy will default to using a <a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">JsonReader</a>. Reader configuration\ncan be passed in as a simple object, which the Proxy automatically turns into a <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Reader</a>\ninstance:</p>\n\n\n\n\n<pre><code>var proxy = new Ext.data.proxy.Ajax({\n    model: 'User',\n    reader: {\n        type: 'xml',\n        root: 'users'\n    }\n});\n\nproxy.getReader(); //returns an <a href=\"#/api/Ext.data.reader.Xml\" rel=\"Ext.data.reader.Xml\" class=\"docClass\">XmlReader</a> instance based on the config we supplied\n</code></pre>\n\n\n\n\n<p><u>Url generation</u></p>\n\n\n\n\n<p>AjaxProxy automatically inserts any sorting, filtering, paging and grouping options into the url it generates for\neach request. These are controlled with the following configuration options:</p>\n\n\n\n\n<ul style=\"list-style-type: disc; padding-left: 20px;\">\n    <li><a href=\"#/api/Ext.data.proxy.Ajax-cfg-pageParam\" rel=\"Ext.data.proxy.Ajax-cfg-pageParam\" class=\"docClass\">pageParam</a> - controls how the page number is sent to the server \n    (see also <a href=\"#/api/Ext.data.proxy.Ajax-cfg-startParam\" rel=\"Ext.data.proxy.Ajax-cfg-startParam\" class=\"docClass\">startParam</a> and <a href=\"#/api/Ext.data.proxy.Ajax-cfg-limitParam\" rel=\"Ext.data.proxy.Ajax-cfg-limitParam\" class=\"docClass\">limitParam</a>)</li>\n    <li><a href=\"#/api/Ext.data.proxy.Ajax-cfg-sortParam\" rel=\"Ext.data.proxy.Ajax-cfg-sortParam\" class=\"docClass\">sortParam</a> - controls how sort information is sent to the server</li>\n    <li><a href=\"#/api/Ext.data.proxy.Ajax-cfg-groupParam\" rel=\"Ext.data.proxy.Ajax-cfg-groupParam\" class=\"docClass\">groupParam</a> - controls how grouping information is sent to the server</li>\n    <li><a href=\"#/api/Ext.data.proxy.Ajax-cfg-filterParam\" rel=\"Ext.data.proxy.Ajax-cfg-filterParam\" class=\"docClass\">filterParam</a> - controls how filter information is sent to the server</li>\n</ul>\n\n\n\n\n<p>Each request sent by AjaxProxy is described by an <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a>. To see how we can \ncustomize the generated urls, let's say we're loading the Proxy with the following Operation:</p>\n\n\n\n\n<pre><code>var operation = new Ext.data.Operation({\n    action: 'read',\n    page  : 2\n});\n</code></pre>\n\n\n\n\n<p>Now we'll issue the request for this Operation by calling <a href=\"#/api/Ext.data.proxy.Ajax-method-read\" rel=\"Ext.data.proxy.Ajax-method-read\" class=\"docClass\">read</a>:</p>\n\n\n\n\n<pre><code>var proxy = new Ext.data.proxy.Ajax({\n    url: '/users'\n});\n\nproxy.read(operation); //GET /users?page=2\n</code></pre>\n\n\n\n\n<p>Easy enough - the Proxy just copied the page property from the Operation. We can customize how this page data is\nsent to the server:</p>\n\n\n\n\n<pre><code>var proxy = new Ext.data.proxy.Ajax({\n    url: '/users',\n    pagePage: 'pageNumber'\n});\n\nproxy.read(operation); //GET /users?pageNumber=2\n</code></pre>\n\n\n\n\n<p>Alternatively, our Operation could have been configured to send start and limit parameters instead of page:</p>\n\n\n\n\n<pre><code>var operation = new Ext.data.Operation({\n    action: 'read',\n    start : 50,\n    limit : 25\n});\n\nvar proxy = new Ext.data.proxy.Ajax({\n    url: '/users'\n});\n\nproxy.read(operation); //GET /users?start=50&limit=25\n</code></pre>\n\n\n\n\n<p>Again we can customize this url:</p>\n\n\n\n\n<pre><code>var proxy = new Ext.data.proxy.Ajax({\n    url: '/users',\n    startParam: 'startIndex',\n    limitParam: 'limitIndex'\n});\n\nproxy.read(operation); //GET /users?startIndex=50&limitIndex=25\n</code></pre>\n\n\n\n\n<p>AjaxProxy will also send sort and filter information to the server. Let's take a look at how this looks with a\nmore expressive Operation object:</p>\n\n\n\n\n<pre><code>var operation = new Ext.data.Operation({\n    action: 'read',\n    sorters: [\n        new Ext.util.Sorter({\n            property : 'name',\n            direction: 'ASC'\n        }),\n        new Ext.util.Sorter({\n            property : 'age',\n            direction: 'DESC'\n        })\n    ],\n    filters: [\n        new Ext.util.Filter({\n            property: 'eyeColor',\n            value   : 'brown'\n        })\n    ]\n});\n</code></pre>\n\n\n\n\n<p>This is the type of object that is generated internally when loading a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> with sorters\nand filters defined. By default the AjaxProxy will JSON encode the sorters and filters, resulting in something like\nthis (note that the url is escaped before sending the request, but is left unescaped here for clarity):</p>\n\n\n\n\n<pre><code>var proxy = new Ext.data.proxy.Ajax({\n    url: '/users'\n});\n\nproxy.read(operation); //GET /users?sort=[{\"property\":\"name\",\"direction\":\"ASC\"},{\"property\":\"age\",\"direction\":\"DESC\"}]&filter=[{\"property\":\"eyeColor\",\"value\":\"brown\"}]\n</code></pre>\n\n\n\n\n<p>We can again customize how this is created by supplying a few configuration options. Let's say our server is set \nup to receive sorting information is a format like \"sortBy=name#ASC,age#DESC\". We can configure AjaxProxy to provide\nthat format like this:</p>\n\n\n\n\n<pre><code> var proxy = new Ext.data.proxy.Ajax({\n     url: '/users',\n     sortParam: 'sortBy',\n     filterParam: 'filterBy',\n\n     //our custom implementation of sorter encoding - turns our sorters into \"name#ASC,age#DESC\"\n     encodeSorters: function(sorters) {\n         var length   = sorters.length,\n             sortStrs = [],\n             sorter, i;\n\n         for (i = 0; i < length; i++) {\n             sorter = sorters[i];\n\n             sortStrs[i] = sorter.property + '#' + sorter.direction\n         }\n\n         return sortStrs.join(\",\");\n     }\n });\n\n proxy.read(operation); //GET /users?sortBy=name#ASC,age#DESC&filterBy=[{\"property\":\"eyeColor\",\"value\":\"brown\"}]\n </code></pre>\n\n\n\n\n<p>We can also provide a custom <a href=\"#/api/Ext.data.proxy.Ajax-method-encodeFilters\" rel=\"Ext.data.proxy.Ajax-method-encodeFilters\" class=\"docClass\">encodeFilters</a> function to encode our filters.</p>\n\n",
  "extends": "Ext.data.proxy.Server",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.data.HttpProxy",
    "Ext.data.AjaxProxy"
  ],
  "xtype": null,
  "author": "Ed Spencer",
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "api",
      "member": "Ext.data.proxy.Server",
      "type": "Object",
      "doc": "<p>Specific urls to call on CRUD action methods \"read\", \"create\", \"update\" and \"destroy\".\nDefaults to:</p>\n\n<pre><code>api: {\n    read    : undefined,\n    create  : undefined,\n    update  : undefined,\n    destroy : undefined\n}\n</code></pre>\n\n\n<p>The url is built based upon the action being executed <tt>[load|create|save|destroy]</tt>\nusing the commensurate <tt><a href=\"#/api/Ext.data.proxy.Ajax-cfg-api\" rel=\"Ext.data.proxy.Ajax-cfg-api\" class=\"docClass\">api</a></tt> property, or if undefined default to the\nconfigured <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>.<a href=\"#/api/Ext.data.proxy.Server-cfg-url\" rel=\"Ext.data.proxy.Server-cfg-url\" class=\"docClass\">url</a>.</p>\n\n\n<br>\n\n\n<p>For example:</p>\n\n\n<pre><code>api: {\n    load :    '/controller/load',\n    create :  '/controller/new',\n    save :    '/controller/update',\n    destroy : '/controller/destroy_action'\n}\n</code></pre>\n\n\n<p>If the specific URL for a given CRUD action is undefined, the CRUD action request\nwill be directed to the configured <tt><a href=\"#/api/Ext.data.proxy.Server-cfg-url\" rel=\"Ext.data.proxy.Server-cfg-url\" class=\"docClass\">url</a></tt>.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 97,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-api",
      "shortDoc": "Specific urls to call on CRUD action methods \"read\", \"create\", \"update\" and \"destroy\".\nDefaults to:\n\napi: {\n    read ..."
    },
    {
      "tagname": "cfg",
      "name": "batchActions",
      "member": "Ext.data.proxy.Proxy",
      "type": "Boolean",
      "doc": "<p>True to batch actions of a particular type when synchronizing the store.\nDefaults to <tt>true</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 64,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-batchActions"
    },
    {
      "tagname": "cfg",
      "name": "batchOrder",
      "member": "Ext.data.proxy.Proxy",
      "type": "String",
      "doc": "<p>Comma-separated ordering 'create', 'update' and 'destroy' actions when batching. Override this\nto set a different order for the batched CRUD actions to be executed in. Defaults to 'create,update,destroy'</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 57,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-batchOrder",
      "shortDoc": "Comma-separated ordering 'create', 'update' and 'destroy' actions when batching. Override this\nto set a different ord..."
    },
    {
      "tagname": "cfg",
      "name": "cacheString",
      "member": "Ext.data.proxy.Server",
      "type": "String",
      "doc": "<p>The name of the cache param added to the url when using noCache (defaults to \"_dc\")</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 87,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-cacheString"
    },
    {
      "tagname": "cfg",
      "name": "directionParam",
      "member": "Ext.data.proxy.Server",
      "type": "String",
      "doc": "<p>The name of the direction parameter to send in a request. <strong>This is only used when simpleSortMode is set to true.</strong>\nDefaults to 'dir'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 69,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-directionParam",
      "shortDoc": "The name of the direction parameter to send in a request. This is only used when simpleSortMode is set to true.\nDefau..."
    },
    {
      "tagname": "cfg",
      "name": "extraParams",
      "member": "Ext.data.proxy.Server",
      "type": "Object",
      "doc": "<p>Extra parameters that will be included on every request. Individual requests with params\nof the same name will override these params when they are in conflict.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 143,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-extraParams",
      "shortDoc": "Extra parameters that will be included on every request. Individual requests with params\nof the same name will overri..."
    },
    {
      "tagname": "cfg",
      "name": "filterParam",
      "member": "Ext.data.proxy.Server",
      "type": "String",
      "doc": "<p>The name of the 'filter' parameter to send in a request. Defaults to 'filter'. Set\nthis to undefined if you don't want to send a filter parameter</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 63,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-filterParam",
      "shortDoc": "The name of the 'filter' parameter to send in a request. Defaults to 'filter'. Set\nthis to undefined if you don't wan..."
    },
    {
      "tagname": "cfg",
      "name": "groupParam",
      "member": "Ext.data.proxy.Server",
      "type": "String",
      "doc": "<p>The name of the 'group' parameter to send in a request. Defaults to 'group'. Set this\nto undefined if you don't want to send a group parameter</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 51,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-groupParam",
      "shortDoc": "The name of the 'group' parameter to send in a request. Defaults to 'group'. Set this\nto undefined if you don't want ..."
    },
    {
      "tagname": "cfg",
      "name": "headers",
      "member": "Ext.data.proxy.Ajax",
      "type": "Object",
      "doc": "<p>Any headers to add to the Ajax request. Defaults to <tt>undefined</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Ajax.js",
      "linenr": 252,
      "html_filename": "Ajax2.html",
      "href": "Ajax2.html#Ext-data-proxy-Ajax-cfg-headers"
    },
    {
      "tagname": "cfg",
      "name": "limitParam",
      "member": "Ext.data.proxy.Server",
      "type": "String",
      "doc": "<p>The name of the 'limit' parameter to send in a request. Defaults to 'limit'. Set this\nto undefined if you don't want to send a limit parameter</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 45,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-limitParam",
      "shortDoc": "The name of the 'limit' parameter to send in a request. Defaults to 'limit'. Set this\nto undefined if you don't want ..."
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "model",
      "member": "Ext.data.proxy.Proxy",
      "type": "String/Ext.data.Model",
      "doc": "<p>The name of the Model to tie to this Proxy. Can be either the string name of\nthe Model, or a reference to the Model constructor. Required.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 82,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-model",
      "shortDoc": "The name of the Model to tie to this Proxy. Can be either the string name of\nthe Model, or a reference to the Model c..."
    },
    {
      "tagname": "cfg",
      "name": "noCache",
      "member": "Ext.data.proxy.Server",
      "type": "Boolean",
      "doc": "<p>(optional) Defaults to true. Disable caching by adding a unique parameter\nname to the request.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 81,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-noCache"
    },
    {
      "tagname": "cfg",
      "name": "pageParam",
      "member": "Ext.data.proxy.Server",
      "type": "String",
      "doc": "<p>The name of the 'page' parameter to send in a request. Defaults to 'page'. Set this to\nundefined if you don't want to send a page parameter</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 33,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-pageParam",
      "shortDoc": "The name of the 'page' parameter to send in a request. Defaults to 'page'. Set this to\nundefined if you don't want to..."
    },
    {
      "tagname": "cfg",
      "name": "reader",
      "member": "Ext.data.proxy.Server",
      "type": "Object/String/Ext.data.reader.Reader",
      "doc": "<p>The <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> to use to decode the server's response. This can\neither be a Reader instance, a config object or just a valid Reader type name (e.g. 'json', 'xml').</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 23,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-reader",
      "shortDoc": "The Ext.data.reader.Reader to use to decode the server's response. This can\neither be a Reader instance, a config obj..."
    },
    {
      "tagname": "cfg",
      "name": "simpleSortMode",
      "member": "Ext.data.proxy.Server",
      "type": "Boolean",
      "doc": "<p>Enabling simpleSortMode in conjunction with remoteSort will only send one sort property and a direction when a remote sort is requested.\nThe directionParam and sortParam will be sent with the property name and either 'ASC' or 'DESC'</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 75,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-simpleSortMode",
      "shortDoc": "Enabling simpleSortMode in conjunction with remoteSort will only send one sort property and a direction when a remote..."
    },
    {
      "tagname": "cfg",
      "name": "sortParam",
      "member": "Ext.data.proxy.Server",
      "type": "String",
      "doc": "<p>The name of the 'sort' parameter to send in a request. Defaults to 'sort'. Set this\nto undefined if you don't want to send a sort parameter</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 57,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-sortParam",
      "shortDoc": "The name of the 'sort' parameter to send in a request. Defaults to 'sort'. Set this\nto undefined if you don't want to..."
    },
    {
      "tagname": "cfg",
      "name": "startParam",
      "member": "Ext.data.proxy.Server",
      "type": "String",
      "doc": "<p>The name of the 'start' parameter to send in a request. Defaults to 'start'. Set this\nto undefined if you don't want to send a start parameter</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 39,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-startParam",
      "shortDoc": "The name of the 'start' parameter to send in a request. Defaults to 'start'. Set this\nto undefined if you don't want ..."
    },
    {
      "tagname": "cfg",
      "name": "timeout",
      "member": "Ext.data.proxy.Server",
      "type": "Number",
      "doc": "<p>(optional) The number of milliseconds to wait for a response. Defaults to 30 seconds.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 92,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-timeout"
    },
    {
      "tagname": "cfg",
      "name": "url",
      "member": "Ext.data.proxy.Server",
      "type": "String",
      "doc": "<p>The URL from which to request the data object.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 19,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-url"
    },
    {
      "tagname": "cfg",
      "name": "writer",
      "member": "Ext.data.proxy.Server",
      "type": "Object/String/Ext.data.writer.Writer",
      "doc": "<p>The <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a> to use to encode any request sent to the server.\nThis can either be a Writer instance, a config object or just a valid Writer type name (e.g. 'json', 'xml').</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 28,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-cfg-writer",
      "shortDoc": "The Ext.data.writer.Writer to use to encode any request sent to the server.\nThis can either be a Writer instance, a c..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Ajax",
      "member": "Ext.data.proxy.Ajax",
      "doc": "<p>Note that if this HttpProxy is being used by a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>, then the\nStore's call to <a href=\"#/api/Ext.data.proxy.Ajax--load\" rel=\"Ext.data.proxy.Ajax--load\" class=\"docClass\">load</a> will override any specified <tt>callback</tt> and <tt>params</tt>\noptions. In this case, use the Store's <a href=\"#/api/Ext.data.Store--events\" rel=\"Ext.data.Store--events\" class=\"docClass\">events</a> to modify parameters,\nor react to loading events. The Store's <a href=\"#/api/Ext.data.Store--baseParams\" rel=\"Ext.data.Store--baseParams\" class=\"docClass\">baseParams</a> may also be\nused to pass parameters known at instantiation time.</p>\n\n\n\n\n<p>If an options parameter is passed, the singleton <a href=\"#/api/Ext.Ajax\" rel=\"Ext.Ajax\" class=\"docClass\">Ext.Ajax</a> object will be used to make\nthe request.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Ajax.js",
      "linenr": 1,
      "html_filename": "Ajax2.html",
      "href": "Ajax2.html#Ext-data-proxy-Ajax-method-constructor",
      "shortDoc": "Note that if this HttpProxy is being used by a Store, then the\nStore's call to load will override any specified callb..."
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
      "name": "afterRequest",
      "member": "Ext.data.proxy.Server",
      "doc": "<p>Optional callback function which can be used to clean up after a request has been completed.</p>\n",
      "params": [
        {
          "type": "Ext.data.Request",
          "name": "request",
          "doc": "<p>The Request object</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "success",
          "doc": "<p>True if the request was successful</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 450,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-method-afterRequest",
      "shortDoc": "<p>Optional callback function which can be used to clean up after a request has been completed.</p>\n"
    },
    {
      "tagname": "method",
      "name": "batch",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Performs a batch of <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operations</a>, in the order specified by <a href=\"#/api/Ext.data.proxy.Ajax-cfg-batchOrder\" rel=\"Ext.data.proxy.Ajax-cfg-batchOrder\" class=\"docClass\">batchOrder</a>. Used internally by\n<a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>'s <a href=\"#/api/Ext.data.Store-method-sync\" rel=\"Ext.data.Store-method-sync\" class=\"docClass\">sync</a> method. Example usage:</p>\n\n<pre><code>myProxy.batch({\n    create : [myModel1, myModel2],\n    update : [myModel3],\n    destroy: [myModel4, myModel5]\n});\n</code></pre>\n\n\n<p>Where the myModel* above are <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances - in this case 1 and 2 are new instances and have not been\nsaved before, 3 has been saved previously but needs to be updated, and 4 and 5 have already been saved but should now be destroyed.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "operations",
          "doc": "<p>Object containing the Model instances to act upon, keyed by action name</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "listeners",
          "doc": "<p>Optional listeners object passed straight through to the Batch - see <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Ext.data.Batch</a></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Batch",
        "doc": "<p>The newly created <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Ext.data.Batch</a> object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 241,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-batch",
      "shortDoc": "Performs a batch of Operations, in the order specified by batchOrder. Used internally by\nExt.data.Store's sync method..."
    },
    {
      "tagname": "method",
      "name": "buildRequest",
      "member": "Ext.data.proxy.Server",
      "doc": "<p>Creates and returns an <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object based on the options passed by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\nthat this Proxy is attached to.</p>\n",
      "params": [
        {
          "type": "Ext.data.Operation",
          "name": "operation",
          "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a> object to execute</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Request",
        "doc": "<p>The request object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 172,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-method-buildRequest",
      "shortDoc": "<p>Creates and returns an <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object based on the options passed by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\nthat this Proxy is attached to.</p>\n"
    },
    {
      "tagname": "method",
      "name": "buildUrl",
      "member": "Ext.data.proxy.Server",
      "doc": "<p>Generates a url based on a given <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object. By default, ServerProxy's buildUrl will\nadd the cache-buster param to the end of the url. Subclasses may need to perform additional modifications\nto the url.</p>\n",
      "params": [
        {
          "type": "Ext.data.Request",
          "name": "request",
          "doc": "<p>The request object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The url</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 399,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-method-buildUrl",
      "shortDoc": "Generates a url based on a given Ext.data.Request object. By default, ServerProxy's buildUrl will\nadd the cache-buste..."
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
      "name": "create",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Performs the given create operation.</p>\n",
      "params": [
        {
          "type": "Ext.data.Operation",
          "name": "operation",
          "doc": "<p>The Operation to perform</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Scope to execute the callback function in</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 205,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-create",
      "shortDoc": "<p>Performs the given create operation.</p>\n"
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Performs the given destroy operation.</p>\n",
      "params": [
        {
          "type": "Ext.data.Operation",
          "name": "operation",
          "doc": "<p>The Operation to perform</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Scope to execute the callback function in</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 232,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-destroy",
      "shortDoc": "<p>Performs the given destroy operation.</p>\n"
    },
    {
      "tagname": "method",
      "name": "doRequest",
      "member": "Ext.data.proxy.Server",
      "doc": "<p>In ServerProxy subclasses, the <a href=\"#/api/Ext.data.proxy.Ajax-method-create\" rel=\"Ext.data.proxy.Ajax-method-create\" class=\"docClass\">create</a>, <a href=\"#/api/Ext.data.proxy.Ajax-method-read\" rel=\"Ext.data.proxy.Ajax-method-read\" class=\"docClass\">read</a>, <a href=\"#/api/Ext.data.proxy.Ajax-method-update\" rel=\"Ext.data.proxy.Ajax-method-update\" class=\"docClass\">update</a> and <a href=\"#/api/Ext.data.proxy.Ajax-method-destroy\" rel=\"Ext.data.proxy.Ajax-method-destroy\" class=\"docClass\">destroy</a> methods all pass\nthrough to doRequest. Each ServerProxy subclass must implement the doRequest method - see <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">Ext.data.proxy.JsonP</a>\nand <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">Ext.data.proxy.Ajax</a> for examples. This method carries the same signature as each of the methods that delegate to it.</p>\n",
      "params": [
        {
          "type": "Ext.data.Operation",
          "name": "operation",
          "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>The callback function to call when the Operation has completed</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope in which to execute the callback</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 436,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-method-doRequest",
      "shortDoc": "In ServerProxy subclasses, the create, read, update and destroy methods all pass\nthrough to doRequest. Each ServerPro..."
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
      "name": "encodeFilters",
      "member": "Ext.data.proxy.Server",
      "doc": "<p>Encodes the array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Ext.util.Filter</a> objects into a string to be sent in the request url. By default,\nthis simply JSON-encodes the filter data</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "sorters",
          "doc": "<p>The array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> objects</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The encoded filters</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 319,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-method-encodeFilters",
      "shortDoc": "Encodes the array of Ext.util.Filter objects into a string to be sent in the request url. By default,\nthis simply JSO..."
    },
    {
      "tagname": "method",
      "name": "encodeSorters",
      "member": "Ext.data.proxy.Server",
      "doc": "<p>Encodes the array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> objects into a string to be sent in the request url. By default,\nthis simply JSON-encodes the sorter data</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "sorters",
          "doc": "<p>The array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorter</a> objects</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The encoded sorters</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 298,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-method-encodeSorters",
      "shortDoc": "Encodes the array of Ext.util.Sorter objects into a string to be sent in the request url. By default,\nthis simply JSO..."
    },
    {
      "tagname": "method",
      "name": "fireEvent",
      "member": "Ext.util.Observable",
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.data.proxy.Ajax-method-enableBubble\" rel=\"Ext.data.proxy.Ajax-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
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
      "name": "getMethod",
      "member": "Ext.data.proxy.Ajax",
      "doc": "<p>Returns the HTTP method name for a given request. By default this returns based on a lookup on <a href=\"#/api/Ext.data.proxy.Ajax-property-actionMethods\" rel=\"Ext.data.proxy.Ajax-property-actionMethods\" class=\"docClass\">actionMethods</a>.</p>\n",
      "params": [
        {
          "type": "Ext.data.Request",
          "name": "request",
          "doc": "<p>The request object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The HTTP method to use (should be one of 'GET', 'POST', 'PUT' or 'DELETE')</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Ajax.js",
      "linenr": 281,
      "html_filename": "Ajax2.html",
      "href": "Ajax2.html#Ext-data-proxy-Ajax-method-getMethod",
      "shortDoc": "<p>Returns the HTTP method name for a given request. By default this returns based on a lookup on <a href=\"#/api/Ext.data.proxy.Ajax-property-actionMethods\" rel=\"Ext.data.proxy.Ajax-property-actionMethods\" class=\"docClass\">actionMethods</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getModel",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Returns the model attached to this Proxy</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.data.Model",
        "doc": "<p>The model</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 123,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getModel",
      "shortDoc": "<p>Returns the model attached to this Proxy</p>\n"
    },
    {
      "tagname": "method",
      "name": "getReader",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Returns the reader currently attached to this proxy instance</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.data.reader.Reader",
        "doc": "<p>The Reader instance</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 162,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getReader",
      "shortDoc": "<p>Returns the reader currently attached to this proxy instance</p>\n"
    },
    {
      "tagname": "method",
      "name": "getWriter",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Returns the writer currently attached to this proxy instance</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.data.writer.Writer",
        "doc": "<p>The Writer instance</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 197,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getWriter",
      "shortDoc": "<p>Returns the writer currently attached to this proxy instance</p>\n"
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
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
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
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
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
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "processResponse",
      "member": "Ext.data.proxy.Server",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "success",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "operation",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "request",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "response",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "callback",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 208,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-method-processResponse",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "read",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Performs the given read operation.</p>\n",
      "params": [
        {
          "type": "Ext.data.Operation",
          "name": "operation",
          "doc": "<p>The Operation to perform</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Scope to execute the callback function in</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 214,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-read",
      "shortDoc": "<p>Performs the given read operation.</p>\n"
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.proxy.Ajax--mon\" rel=\"Ext.data.proxy.Ajax--mon\" class=\"docClass\">mon</a> method.</p>\n",
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
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.proxy.Ajax--mon\" rel=\"Ext.data.proxy.Ajax--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.data.proxy.Ajax-method-suspendEvents\" rel=\"Ext.data.proxy.Ajax-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
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
      "name": "setModel",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Sets the model associated with this proxy. This will only usually be called by a Store</p>\n",
      "params": [
        {
          "type": "String|Ext.data.Model",
          "name": "model",
          "doc": "<p>The new model. Can be either the model name string,\nor a reference to the model's constructor</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "setOnStore",
          "doc": "<p>Sets the new model on the associated Store, if one is present</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 103,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setModel",
      "shortDoc": "<p>Sets the model associated with this proxy. This will only usually be called by a Store</p>\n"
    },
    {
      "tagname": "method",
      "name": "setReader",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Sets the Proxy's Reader by string, config object or Reader instance</p>\n",
      "params": [
        {
          "type": "String|Object|Ext.data.reader.Reader",
          "name": "reader",
          "doc": "<p>The new Reader, which can be either a type string, a configuration object\nor an <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> instance</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.reader.Reader",
        "doc": "<p>The attached Reader object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 131,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setReader",
      "shortDoc": "<p>Sets the Proxy's Reader by string, config object or Reader instance</p>\n"
    },
    {
      "tagname": "method",
      "name": "setWriter",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Sets the Proxy's Writer by string, config object or Writer instance</p>\n",
      "params": [
        {
          "type": "String|Object|Ext.data.writer.Writer",
          "name": "writer",
          "doc": "<p>The new Writer, which can be either a type string, a configuration object\nor an <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a> instance</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.writer.Writer",
        "doc": "<p>The attached Writer object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 170,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setWriter",
      "shortDoc": "<p>Sets the Proxy's Writer by string, config object or Writer instance</p>\n"
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.data.proxy.Ajax-method-resumeEvents\" rel=\"Ext.data.proxy.Ajax-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.proxy.Ajax-method-resumeEvents\" rel=\"Ext.data.proxy.Ajax-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
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
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.data.proxy.Ajax-method-resumeEvents\" rel=\"Ext.data.proxy.Ajax-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.data.proxy.Ajax-method-removeListener\" rel=\"Ext.data.proxy.Ajax-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.data.proxy.Ajax-method-removeListener\" rel=\"Ext.data.proxy.Ajax-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "update",
      "member": "Ext.data.proxy.Proxy",
      "doc": "<p>Performs the given update operation.</p>\n",
      "params": [
        {
          "type": "Ext.data.Operation",
          "name": "operation",
          "doc": "<p>The Operation to perform</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Scope to execute the callback function in</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Proxy.js",
      "linenr": 223,
      "html_filename": "Proxy2.html",
      "href": "Proxy2.html#Ext-data-proxy-Proxy-method-update",
      "shortDoc": "<p>Performs the given update operation.</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "actionMethods",
      "member": "Ext.data.proxy.Ajax",
      "type": "Object",
      "doc": "<p>Mapping of action name to HTTP request method. In the basic AjaxProxy these are set to 'GET' for 'read' actions and 'POST'\nfor 'create', 'update' and 'destroy' actions. The <a href=\"#/api/Ext.data.proxy.Rest\" rel=\"Ext.data.proxy.Rest\" class=\"docClass\">Ext.data.proxy.Rest</a> maps these to the correct RESTful methods.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Ajax.js",
      "linenr": 240,
      "html_filename": "Ajax2.html",
      "href": "Ajax2.html#Ext-data-proxy-Ajax-property-actionMethods",
      "shortDoc": "Mapping of action name to HTTP request method. In the basic AjaxProxy these are set to 'GET' for 'read' actions and '..."
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "exception",
      "member": "Ext.data.proxy.Server",
      "doc": "<p>Fires when the server returns an exception</p>\n",
      "params": [
        {
          "type": "Ext.data.proxy.Proxy",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "response",
          "doc": "<p>The response from the AJAX request</p>\n",
          "optional": false
        },
        {
          "type": "Ext.data.Operation",
          "name": "operation",
          "doc": "<p>The operation that triggered request</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Server.js",
      "linenr": 132,
      "html_filename": "Server.html",
      "href": "Server.html#Ext-data-proxy-Server-event-exception",
      "shortDoc": "<p>Fires when the server returns an exception</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/proxy/Ajax.js",
  "linenr": 1,
  "html_filename": "Ajax2.html",
  "href": "Ajax2.html#Ext-data-proxy-Ajax",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.data.proxy.Proxy",
    "Ext.data.proxy.Server"
  ],
  "subclasses": [
    "Ext.data.proxy.Rest"
  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Observable"
  ]
});