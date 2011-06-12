Ext.data.JsonP.Ext_data_NodeInterface({
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-appendChild",
        "shortDoc": "Insert node(s) as the last child node of this node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node/Array",
            "optional": false,
            "doc": "<p>The node or Array of nodes to append</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "suppressEvents"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "suppressNodeUpdate"
          }
        ],
        "name": "appendChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Insert node(s) as the last child node of this node.</p>\n\n\n<p>If the node was previously a child node of another parent node, it will be removed from that node first.</p>\n\n",
        "linenr": 332,
        "return": {
          "type": "Node",
          "doc": "<p>The appended node if single append, or null if an array was passed</p>\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-bubble",
        "shortDoc": "Bubbles up the tree from this node, calling the specified function with each node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
            "name": "args"
          }
        ],
        "name": "bubble",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Bubbles up the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
        "linenr": 707,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-cascadeBy",
        "shortDoc": "Cascades down the tree from this node, calling the specified function with each node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
            "name": "args"
          }
        ],
        "name": "cascadeBy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Cascades down the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe cascade is stopped on that branch.</p>\n",
        "linenr": 734,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapse",
        "shortDoc": "Collapse this node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) True to recursively collapse all the children</p>\n",
            "name": "recursive"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) The function to execute once the collapse completes</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "name": "scope"
          }
        ],
        "name": "collapse",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Collapse this node.</p>\n",
        "linenr": 1006,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapseChildren",
        "shortDoc": "Collapse all the children of this node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) True to recursively collapse all the children</p>\n",
            "name": "recursive"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) The function to execute once all the children are collapsed</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "name": "scope"
          }
        ],
        "name": "collapseChildren",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Collapse all the children of this node.</p>\n",
        "linenr": 1043,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-contains",
        "shortDoc": "Returns true if this node is an ancestor (at any point) of the passed node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "name": "contains",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is an ancestor (at any point) of the passed node.</p>\n",
        "linenr": 815,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-copy",
        "shortDoc": "Creates a copy (clone) of this Node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) A new id, defaults to this Node's id. See <code>id</code>.</p>\n",
            "name": "id"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) <p>If passed as <code>true</code>, all child Nodes are recursively copied into the new Node.</p></p>\n\n<p>If omitted or false, the copy will have no child Nodes.</p>\n\n",
            "name": "deep"
          }
        ],
        "name": "copy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Creates a copy (clone) of this Node.</p>\n",
        "linenr": 475,
        "return": {
          "type": "Node",
          "doc": "<p>A copy of this Node.</p>\n"
        },
        "html_filename": "NodeInterface.html"
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-createNode",
        "shortDoc": "Ensures that the passed object is an instance of a Record with the NodeInterface applied ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "name": "createNode",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Ensures that the passed object is an instance of a Record with the NodeInterface applied</p>\n",
        "linenr": 214,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-decorate",
        "shortDoc": "This method allows you to decorate a Record's prototype to implement the NodeInterface. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Ext.data.Record",
            "optional": false,
            "doc": "<p>The Record you want to decorate the prototype of.</p>\n",
            "name": "record"
          }
        ],
        "name": "decorate",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>This method allows you to decorate a Record's prototype to implement the NodeInterface.\nThis adds a set of methods, new events, new properties and new fields on every Record\nwith the same Model as the passed Record.</p>\n",
        "linenr": 12,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-destroy",
        "shortDoc": "Destroys the node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "silent"
          }
        ],
        "name": "destroy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Destroys the node.</p>\n",
        "linenr": 512,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-eachChild",
        "shortDoc": "Interates the child nodes of this node, calling the specified function with each node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node in the iteration.</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
            "name": "args"
          }
        ],
        "name": "eachChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Interates the child nodes of this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe iteration stops.</p>\n",
        "linenr": 754,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-expand",
        "shortDoc": "Expand this node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) True to recursively expand all the children</p>\n",
            "name": "recursive"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) The function to execute once the expand completes</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "name": "scope"
          }
        ],
        "name": "expand",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Expand this node.</p>\n",
        "linenr": 924,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-expandChildren",
        "shortDoc": "Expand all the children of this node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) True to recursively expand all the children</p>\n",
            "name": "recursive"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) The function to execute once all the children are expanded</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "name": "scope"
          }
        ],
        "name": "expandChildren",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Expand all the children of this node.</p>\n",
        "linenr": 975,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChild",
        "shortDoc": "Finds the first child that has the attribute with the specified value. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The attribute name</p>\n",
            "name": "attribute"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to search for</p>\n",
            "name": "value"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n",
            "name": "deep"
          }
        ],
        "name": "findChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Finds the first child that has the attribute with the specified value.</p>\n",
        "linenr": 774,
        "return": {
          "type": "Node",
          "doc": "<p>The found child or null if none was found</p>\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChildBy",
        "shortDoc": "Finds the first child by a custom function. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>A function which must return <code>true</code> if the passed Node is the required Node.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Node being tested.</p>\n",
            "name": "scope"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n",
            "name": "deep"
          }
        ],
        "name": "findChildBy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Finds the first child by a custom function. The child matches if the function passed returns <code>true</code>.</p>\n",
        "linenr": 787,
        "return": {
          "type": "Node",
          "doc": "<p>The found child or null if none was found</p>\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getChildAt",
        "shortDoc": "Returns the child node at the specified index. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "index"
          }
        ],
        "name": "getChildAt",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns the child node at the specified index.</p>\n",
        "linenr": 667,
        "return": {
          "type": "Node",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getDepth",
        "shortDoc": "Returns depth of this node (the root node has a depth of 0) ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "getDepth",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns depth of this node (the root node has a depth of 0)</p>\n",
        "linenr": 699,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-hasChildNodes",
        "shortDoc": "Returns true if this node has one or more child nodes, else false. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "hasChildNodes",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node has one or more child nodes, else false.</p>\n",
        "linenr": 310,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
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
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-indexOf",
        "shortDoc": "Returns the index of a child node ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "name": "indexOf",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns the index of a child node</p>\n",
        "linenr": 690,
        "return": {
          "type": "Number",
          "doc": "<p>The index of the node or -1 if it was not found</p>\n"
        },
        "html_filename": "NodeInterface.html"
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertBefore",
        "shortDoc": "Inserts the first node before the second node in this nodes childNodes collection. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node to insert</p>\n",
            "name": "node"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node to insert before (if null the node is appended)</p>\n",
            "name": "refNode"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "suppressEvents"
          }
        ],
        "name": "insertBefore",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Inserts the first node before the second node in this nodes childNodes collection.</p>\n",
        "linenr": 540,
        "return": {
          "type": "Node",
          "doc": "<p>The inserted node</p>\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertChild",
        "shortDoc": "Insert a node into this node ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The zero-based index to insert the node at</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The node to insert</p>\n",
            "name": "node"
          }
        ],
        "name": "insertChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Insert a node into this node</p>\n",
        "linenr": 622,
        "return": {
          "type": "Ext.data.Record",
          "doc": "<p>The record you just inserted</p>\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isAncestor",
        "shortDoc": "Returns true if the passed node is an ancestor (at any point) of this node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "name": "isAncestor",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if the passed node is an ancestor (at any point) of this node.</p>\n",
        "linenr": 824,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpandable",
        "shortDoc": "Returns true if this node has one or more child nodes, or if the expandable\nnode attribute is explicitly specified as...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "isExpandable",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node has one or more child nodes, or if the <tt>expandable</tt>\nnode attribute is explicitly specified as true (see attributes), otherwise returns false.</p>\n",
        "linenr": 318,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpanded",
        "shortDoc": "Returns true if this node is expaned ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "isExpanded",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is expaned</p>\n",
        "linenr": 877,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isFirst",
        "shortDoc": "Returns true if this node is the first child of its parent ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "isFirst",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is the first child of its parent</p>\n",
        "linenr": 302,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLast",
        "shortDoc": "Returns true if this node is the last child of its parent ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "isLast",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is the last child of its parent</p>\n",
        "linenr": 294,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLeaf",
        "shortDoc": "Returns true if this node is a leaf ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "isLeaf",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is a leaf</p>\n",
        "linenr": 226,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoaded",
        "shortDoc": "Returns true if this node is loaded ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "isLoaded",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is loaded</p>\n",
        "linenr": 885,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoading",
        "shortDoc": "Returns true if this node is loading ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "isLoading",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is loading</p>\n",
        "linenr": 893,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isRoot",
        "shortDoc": "Returns true if this node is the root node ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "isRoot",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is the root node</p>\n",
        "linenr": 901,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isVisible",
        "shortDoc": "Returns true if this node is visible ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [

        ],
        "name": "isVisible",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is visible</p>\n",
        "linenr": 909,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-remove",
        "shortDoc": "Removes this node from its parent ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
            "name": "destroy"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "suppressEvents"
          }
        ],
        "name": "remove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Removes this node from its parent</p>\n",
        "linenr": 638,
        "return": {
          "type": "Node",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeAll",
        "shortDoc": "Removes all child nodes from this node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
            "name": "destroy"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "suppressEvents"
          }
        ],
        "name": "removeAll",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Removes all child nodes from this node.</p>\n",
        "linenr": 652,
        "return": {
          "type": "Node",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeChild",
        "shortDoc": "Removes a child node from this node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node to remove</p>\n",
            "name": "node"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
            "name": "destroy"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "suppressEvents"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "suppressNodeUpdate"
          }
        ],
        "name": "removeChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Removes a child node from this node.</p>\n",
        "linenr": 421,
        "return": {
          "type": "Node",
          "doc": "<p>The removed node</p>\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-replaceChild",
        "shortDoc": "Replaces one child node in this node with another. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The replacement node</p>\n",
            "name": "newChild"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node to replace</p>\n",
            "name": "oldChild"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "suppressEvents"
          }
        ],
        "name": "replaceChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Replaces one child node in this node with another.</p>\n",
        "linenr": 676,
        "return": {
          "type": "Node",
          "doc": "<p>The replaced node</p>\n"
        },
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-sort",
        "shortDoc": "Sorts this nodes children using the supplied sort function. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>A function which, when passed two Nodes, returns -1, 0 or 1 depending upon required sort order.</p>\n",
            "name": "fn"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not to apply this sort recursively</p>\n",
            "name": "recursive"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Set to true to not fire a sort event.</p>\n",
            "name": "suppressEvent"
          }
        ],
        "name": "sort",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Sorts this nodes children using the supplied sort function.</p>\n",
        "linenr": 840,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-updateInfo",
        "shortDoc": "Updates general data of this node like isFirst, isLast, depth. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "silent"
          }
        ],
        "name": "updateInfo",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Updates general data of this node like isFirst, isLast, depth. This\nmethod is internally called after a node is moved. This shouldn't\nhave to be called by the developer unless they are creating custom\nTree plugins.</p>\n",
        "linenr": 252,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "NodeInterface.html"
      }
    ],
    "property": [
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-append",
        "shortDoc": "Fires when a new child node is appended ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The newly appended node</p>\n",
            "name": "node"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the newly appended node</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "append",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when a new child node is appended</p>\n",
        "linenr": 78,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeappend",
        "shortDoc": "Fires before a new child is appended, return false to cancel the append. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node to be appended</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeappend",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before a new child is appended, return false to cancel the append.</p>\n",
        "linenr": 114,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforecollapse",
        "shortDoc": "Fires before this node is collapsed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The collapsing node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforecollapse",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before this node is collapsed.</p>\n",
        "linenr": 170,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeexpand",
        "shortDoc": "Fires before this node is expanded. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The expanding node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeexpand",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before this node is expanded.</p>\n",
        "linenr": 163,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeinsert",
        "shortDoc": "Fires before a new child is inserted, return false to cancel the insert. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node to be inserted</p>\n",
            "name": "node"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node the node is being inserted before</p>\n",
            "name": "refNode"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeinsert",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before a new child is inserted, return false to cancel the insert.</p>\n",
        "linenr": 140,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforemove",
        "shortDoc": "Fires before this node is moved to a new location in the tree. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The parent of this node</p>\n",
            "name": "oldParent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The new parent this node is moving to</p>\n",
            "name": "newParent"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index it is being moved to</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforemove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before this node is moved to a new location in the tree. Return false to cancel the move.</p>\n",
        "linenr": 130,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeremove",
        "shortDoc": "Fires before a child is removed, return false to cancel the remove. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node to be removed</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeremove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before a child is removed, return false to cancel the remove.</p>\n",
        "linenr": 122,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-collapse",
        "shortDoc": "Fires when this node is collapsed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The collapsing node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "collapse",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node is collapsed.</p>\n",
        "linenr": 156,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-expand",
        "shortDoc": "Fires when this node is expanded. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The expanding node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "expand",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node is expanded.</p>\n",
        "linenr": 149,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-insert",
        "shortDoc": "Fires when a new child node is inserted. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node inserted</p>\n",
            "name": "node"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node the node was inserted before</p>\n",
            "name": "refNode"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "insert",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when a new child node is inserted.</p>\n",
        "linenr": 105,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-move",
        "shortDoc": "Fires when this node is moved to a new location in the tree ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The old parent of this node</p>\n",
            "name": "oldParent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The new parent of this node</p>\n",
            "name": "newParent"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index it was moved to</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "move",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node is moved to a new location in the tree</p>\n",
        "linenr": 95,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-remove",
        "shortDoc": "Fires when a child node is removed ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node</p>\n",
            "name": "this"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The removed node</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "remove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when a child node is removed</p>\n",
        "linenr": 87,
        "html_filename": "NodeInterface.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-sort",
        "shortDoc": "Fires when this node's childNodes are sorted. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>This node.</p>\n",
            "name": "this"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>childNodes of this node.</p>\n",
            "name": "The"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "sort",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node's childNodes are sorted.</p>\n",
        "linenr": 177,
        "html_filename": "NodeInterface.html"
      }
    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [
    "Ext.Base"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "NodeInterface.html#Ext-data-NodeInterface",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.data.NodeInterface",
  "doc": "<p>This class is meant to be used as a set of methods that are applied to the prototype of a\nRecord to decorate it with a Node API. This means that models used in conjunction with a tree\nwill have all of the tree related methods available on the model. In general this class will\nnot be used directly by the developer.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "NodeInterface.html",
  "extends": "Ext.Base"
});