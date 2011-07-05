Ext.data.JsonP.Ext_data_NodeInterface({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "NodeInterface.html#Ext-data-NodeInterface",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-appendChild",
        "return": {
          "type": "Node",
          "doc": "<p>The appended node if single append, or null if an array was passed</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Insert node(s) as the last child node of this node. ...",
        "static": false,
        "name": "appendChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Insert node(s) as the last child node of this node.</p>\n\n\n<p>If the node was previously a child node of another parent node, it will be removed from that node first.</p>\n\n",
        "linenr": 332,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-bubble",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Bubbles up the tree from this node, calling the specified function with each node. ...",
        "static": false,
        "name": "bubble",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Bubbles up the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
        "linenr": 707,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-cascadeBy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Cascades down the tree from this node, calling the specified function with each node. ...",
        "static": false,
        "name": "cascadeBy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Cascades down the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe cascade is stopped on that branch.</p>\n",
        "linenr": 734,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapse",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Collapse this node. ...",
        "static": false,
        "name": "collapse",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Collapse this node.</p>\n",
        "linenr": 1006,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapseChildren",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Collapse all the children of this node. ...",
        "static": false,
        "name": "collapseChildren",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Collapse all the children of this node.</p>\n",
        "linenr": 1043,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-contains",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node is an ancestor (at any point) of the passed node. ...",
        "static": false,
        "name": "contains",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is an ancestor (at any point) of the passed node.</p>\n",
        "linenr": 815,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-copy",
        "return": {
          "type": "Node",
          "doc": "<p>A copy of this Node.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Creates a copy (clone) of this Node. ...",
        "static": false,
        "name": "copy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Creates a copy (clone) of this Node.</p>\n",
        "linenr": 475,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-createNode",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Ensures that the passed object is an instance of a Record with the NodeInterface applied ...",
        "static": false,
        "name": "createNode",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Ensures that the passed object is an instance of a Record with the NodeInterface applied</p>\n",
        "linenr": 214,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "silent"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-destroy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Destroys the node. ...",
        "static": false,
        "name": "destroy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Destroys the node.</p>\n",
        "linenr": 512,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-eachChild",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Interates the child nodes of this node, calling the specified function with each node. ...",
        "static": false,
        "name": "eachChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Interates the child nodes of this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe iteration stops.</p>\n",
        "linenr": 754,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-expand",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Expand this node. ...",
        "static": false,
        "name": "expand",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Expand this node.</p>\n",
        "linenr": 924,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-expandChildren",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Expand all the children of this node. ...",
        "static": false,
        "name": "expandChildren",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Expand all the children of this node.</p>\n",
        "linenr": 975,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChild",
        "return": {
          "type": "Node",
          "doc": "<p>The found child or null if none was found</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Finds the first child that has the attribute with the specified value. ...",
        "static": false,
        "name": "findChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Finds the first child that has the attribute with the specified value.</p>\n",
        "linenr": 774,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChildBy",
        "return": {
          "type": "Node",
          "doc": "<p>The found child or null if none was found</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Finds the first child by a custom function. ...",
        "static": false,
        "name": "findChildBy",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Finds the first child by a custom function. The child matches if the function passed returns <code>true</code>.</p>\n",
        "linenr": 787,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "index"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getChildAt",
        "return": {
          "type": "Node",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns the child node at the specified index. ...",
        "static": false,
        "name": "getChildAt",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns the child node at the specified index.</p>\n",
        "linenr": 667,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getDepth",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns depth of this node (the root node has a depth of 0) ...",
        "static": false,
        "name": "getDepth",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns depth of this node (the root node has a depth of 0)</p>\n",
        "linenr": 699,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-hasChildNodes",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node has one or more child nodes, else false. ...",
        "static": false,
        "name": "hasChildNodes",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node has one or more child nodes, else false.</p>\n",
        "linenr": 310,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-indexOf",
        "return": {
          "type": "Number",
          "doc": "<p>The index of the node or -1 if it was not found</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns the index of a child node ...",
        "static": false,
        "name": "indexOf",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns the index of a child node</p>\n",
        "linenr": 690,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertBefore",
        "return": {
          "type": "Node",
          "doc": "<p>The inserted node</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Inserts the first node before the second node in this nodes childNodes collection. ...",
        "static": false,
        "name": "insertBefore",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Inserts the first node before the second node in this nodes childNodes collection.</p>\n",
        "linenr": 540,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertChild",
        "return": {
          "type": "Ext.data.Record",
          "doc": "<p>The record you just inserted</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Insert a node into this node ...",
        "static": false,
        "name": "insertChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Insert a node into this node</p>\n",
        "linenr": 622,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isAncestor",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if the passed node is an ancestor (at any point) of this node. ...",
        "static": false,
        "name": "isAncestor",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if the passed node is an ancestor (at any point) of this node.</p>\n",
        "linenr": 824,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpandable",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node has one or more child nodes, or if the expandable\nnode attribute is explicitly specified as...",
        "static": false,
        "name": "isExpandable",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node has one or more child nodes, or if the <tt>expandable</tt>\nnode attribute is explicitly specified as true (see attributes), otherwise returns false.</p>\n",
        "linenr": 318,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpanded",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node is expaned ...",
        "static": false,
        "name": "isExpanded",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is expaned</p>\n",
        "linenr": 877,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isFirst",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node is the first child of its parent ...",
        "static": false,
        "name": "isFirst",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is the first child of its parent</p>\n",
        "linenr": 302,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLast",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node is the last child of its parent ...",
        "static": false,
        "name": "isLast",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is the last child of its parent</p>\n",
        "linenr": 294,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLeaf",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node is a leaf ...",
        "static": false,
        "name": "isLeaf",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is a leaf</p>\n",
        "linenr": 226,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoaded",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node is loaded ...",
        "static": false,
        "name": "isLoaded",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is loaded</p>\n",
        "linenr": 885,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoading",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node is loading ...",
        "static": false,
        "name": "isLoading",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is loading</p>\n",
        "linenr": 893,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isRoot",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node is the root node ...",
        "static": false,
        "name": "isRoot",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is the root node</p>\n",
        "linenr": 901,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isVisible",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Returns true if this node is visible ...",
        "static": false,
        "name": "isVisible",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Returns true if this node is visible</p>\n",
        "linenr": 909,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-remove",
        "return": {
          "type": "Node",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Removes this node from its parent ...",
        "static": false,
        "name": "remove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Removes this node from its parent</p>\n",
        "linenr": 638,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeAll",
        "return": {
          "type": "Node",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Removes all child nodes from this node. ...",
        "static": false,
        "name": "removeAll",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Removes all child nodes from this node.</p>\n",
        "linenr": 652,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeChild",
        "return": {
          "type": "Node",
          "doc": "<p>The removed node</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Removes a child node from this node. ...",
        "static": false,
        "name": "removeChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Removes a child node from this node.</p>\n",
        "linenr": 421,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-replaceChild",
        "return": {
          "type": "Node",
          "doc": "<p>The replaced node</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Replaces one child node in this node with another. ...",
        "static": false,
        "name": "replaceChild",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Replaces one child node in this node with another.</p>\n",
        "linenr": 676,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-sort",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Sorts this nodes children using the supplied sort function. ...",
        "static": false,
        "name": "sort",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Sorts this nodes children using the supplied sort function.</p>\n",
        "linenr": 840,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "silent"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-updateInfo",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Updates general data of this node like isFirst, isLast, depth. ...",
        "static": false,
        "name": "updateInfo",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Updates general data of this node like isFirst, isLast, depth. This\nmethod is internally called after a node is moved. This shouldn't\nhave to be called by the developer unless they are creating custom\nTree plugins.</p>\n",
        "linenr": 252,
        "html_filename": "NodeInterface.html"
      }
    ],
    "event": [
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-append",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires when a new child node is appended ...",
        "static": false,
        "name": "append",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when a new child node is appended</p>\n",
        "linenr": 78,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeappend",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires before a new child is appended, return false to cancel the append. ...",
        "static": false,
        "name": "beforeappend",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before a new child is appended, return false to cancel the append.</p>\n",
        "linenr": 114,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforecollapse",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires before this node is collapsed. ...",
        "static": false,
        "name": "beforecollapse",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before this node is collapsed.</p>\n",
        "linenr": 170,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeexpand",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires before this node is expanded. ...",
        "static": false,
        "name": "beforeexpand",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before this node is expanded.</p>\n",
        "linenr": 163,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeinsert",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires before a new child is inserted, return false to cancel the insert. ...",
        "static": false,
        "name": "beforeinsert",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before a new child is inserted, return false to cancel the insert.</p>\n",
        "linenr": 140,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforemove",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires before this node is moved to a new location in the tree. ...",
        "static": false,
        "name": "beforemove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before this node is moved to a new location in the tree. Return false to cancel the move.</p>\n",
        "linenr": 130,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeremove",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires before a child is removed, return false to cancel the remove. ...",
        "static": false,
        "name": "beforeremove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires before a child is removed, return false to cancel the remove.</p>\n",
        "linenr": 122,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-collapse",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires when this node is collapsed. ...",
        "static": false,
        "name": "collapse",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node is collapsed.</p>\n",
        "linenr": 156,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-expand",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires when this node is expanded. ...",
        "static": false,
        "name": "expand",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node is expanded.</p>\n",
        "linenr": 149,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-insert",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires when a new child node is inserted. ...",
        "static": false,
        "name": "insert",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when a new child node is inserted.</p>\n",
        "linenr": 105,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-move",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires when this node is moved to a new location in the tree ...",
        "static": false,
        "name": "move",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node is moved to a new location in the tree</p>\n",
        "linenr": 95,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-remove",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires when a child node is removed ...",
        "static": false,
        "name": "remove",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when a child node is removed</p>\n",
        "linenr": 87,
        "html_filename": "NodeInterface.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-sort",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "Fires when this node's childNodes are sorted. ...",
        "static": false,
        "name": "sort",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>Fires when this node's childNodes are sorted.</p>\n",
        "linenr": 177,
        "html_filename": "NodeInterface.html"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.data.NodeInterface",
  "doc": "<p>This class is meant to be used as a set of methods that are applied to the prototype of a\nRecord to decorate it with a Node API. This means that models used in conjunction with a tree\nwill have all of the tree related methods available on the model. In general this class will\nnot be used directly by the developer.</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "NodeInterface.html",
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Record",
            "optional": false,
            "doc": "<p>The Record you want to decorate the prototype of.</p>\n",
            "name": "record"
          }
        ],
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-decorate",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "shortDoc": "This method allows you to decorate a Record's prototype to implement the NodeInterface. ...",
        "static": true,
        "name": "decorate",
        "owner": "Ext.data.NodeInterface",
        "doc": "<p>This method allows you to decorate a Record's prototype to implement the NodeInterface.\nThis adds a set of methods, new events, new properties and new fields on every Record\nwith the same Model as the passed Record.</p>\n",
        "linenr": 12,
        "html_filename": "NodeInterface.html"
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
  "extends": "Ext.Base"
});