Ext.data.JsonP.Ext_data_NodeInterface({
  "tagname": "class",
  "name": "Ext.data.NodeInterface",
  "doc": "<p>This class is meant to be used as a set of methods that are applied to the prototype of a\nRecord to decorate it with a Node API. This means that models used in conjunction with a tree\nwill have all of the tree related methods available on the model. In general this class will\nnot be used directly by the developer.</p>\n",
  "extends": null,
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

  ],
  "method": [
    {
      "tagname": "method",
      "name": "appendChild",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Insert node(s) as the last child node of this node.</p>\n\n\n<p>If the node was previously a child node of another parent node, it will be removed from that node first.</p>\n\n",
      "params": [
        {
          "type": "Node/Array",
          "name": "node",
          "doc": "<p>The node or Array of nodes to append</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "suppressEvents",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "suppressNodeUpdate",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Node",
        "doc": "<p>The appended node if single append, or null if an array was passed</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 332,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-appendChild",
      "shortDoc": "Insert node(s) as the last child node of this node.\n\n\nIf the node was previously a child node of another parent node,..."
    },
    {
      "tagname": "method",
      "name": "bubble",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Bubbles up the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n",
          "optional": true
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 707,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-bubble",
      "shortDoc": "Bubbles up the tree from this node, calling the specified function with each node. The arguments to the function\nwill..."
    },
    {
      "tagname": "method",
      "name": "cascadeBy",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Cascades down the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe cascade is stopped on that branch.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n",
          "optional": true
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 734,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-cascadeBy",
      "shortDoc": "Cascades down the tree from this node, calling the specified function with each node. The arguments to the function\nw..."
    },
    {
      "tagname": "method",
      "name": "collapse",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Collapse this node.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "recursive",
          "doc": "<p>(Optional) True to recursively collapse all the children</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>(Optional) The function to execute once the collapse completes</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(Optional) The scope to run the callback in</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 1006,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapse",
      "shortDoc": "<p>Collapse this node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "collapseChildren",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Collapse all the children of this node.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "recursive",
          "doc": "<p>(Optional) True to recursively collapse all the children</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>(Optional) The function to execute once all the children are collapsed</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(Optional) The scope to run the callback in</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 1043,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapseChildren",
      "shortDoc": "<p>Collapse all the children of this node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "contains",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node is an ancestor (at any point) of the passed node.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "node",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 815,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-contains",
      "shortDoc": "<p>Returns true if this node is an ancestor (at any point) of the passed node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "copy",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Creates a copy (clone) of this Node.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>(optional) A new id, defaults to this Node's id. See <code><a href=\"#/api/Ext.data.NodeInterface--id\" rel=\"Ext.data.NodeInterface--id\" class=\"docClass\">id</a></code>.</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "deep",
          "doc": "<p>(optional) <p>If passed as <code>true</code>, all child Nodes are recursively copied into the new Node.</p></p>\n\n<p>If omitted or false, the copy will have no child Nodes.</p>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Node",
        "doc": "<p>A copy of this Node.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 475,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-copy",
      "shortDoc": "<p>Creates a copy (clone) of this Node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "createNode",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Ensures that the passed object is an instance of a Record with the NodeInterface applied</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "node",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 219,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-createNode",
      "shortDoc": "<p>Ensures that the passed object is an instance of a Record with the NodeInterface applied</p>\n"
    },
    {
      "tagname": "method",
      "name": "decorate",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>This method allows you to decorate a Record's prototype to implement the NodeInterface.\nThis adds a set of methods, new events, new properties and new fields on every Record\nwith the same Model as the passed Record.</p>\n",
      "params": [
        {
          "type": "Ext.data.Record",
          "name": "record",
          "doc": "<p>The Record you want to decorate the prototype of.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 12,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-decorate",
      "shortDoc": "This method allows you to decorate a Record's prototype to implement the NodeInterface.\nThis adds a set of methods, n..."
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Destroys the node.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "silent",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 512,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-destroy",
      "shortDoc": "<p>Destroys the node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "eachChild",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Interates the child nodes of this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe iteration stops.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node in the iteration.</p>\n",
          "optional": true
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 754,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-eachChild",
      "shortDoc": "Interates the child nodes of this node, calling the specified function with each node. The arguments to the function\n..."
    },
    {
      "tagname": "method",
      "name": "expand",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Expand this node.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "recursive",
          "doc": "<p>(Optional) True to recursively expand all the children</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>(Optional) The function to execute once the expand completes</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(Optional) The scope to run the callback in</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 924,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-expand",
      "shortDoc": "<p>Expand this node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "expandChildren",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Expand all the children of this node.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "recursive",
          "doc": "<p>(Optional) True to recursively expand all the children</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>(Optional) The function to execute once all the children are expanded</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(Optional) The scope to run the callback in</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 975,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-expandChildren",
      "shortDoc": "<p>Expand all the children of this node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "findChild",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Finds the first child that has the attribute with the specified value.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "attribute",
          "doc": "<p>The attribute name</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to search for</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "deep",
          "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Node",
        "doc": "<p>The found child or null if none was found</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 774,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChild",
      "shortDoc": "<p>Finds the first child that has the attribute with the specified value.</p>\n"
    },
    {
      "tagname": "method",
      "name": "findChildBy",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Finds the first child by a custom function. The child matches if the function passed returns <code>true</code>.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>A function which must return <code>true</code> if the passed Node is the required Node.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Node being tested.</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "deep",
          "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Node",
        "doc": "<p>The found child or null if none was found</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 787,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChildBy",
      "shortDoc": "<p>Finds the first child by a custom function. The child matches if the function passed returns <code>true</code>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getChildAt",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns the child node at the specified index.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Node",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 667,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-getChildAt",
      "shortDoc": "<p>Returns the child node at the specified index.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getDepth",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns depth of this node (the root node has a depth of 0)</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 699,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-getDepth",
      "shortDoc": "<p>Returns depth of this node (the root node has a depth of 0)</p>\n"
    },
    {
      "tagname": "method",
      "name": "hasChildNodes",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node has one or more child nodes, else false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 315,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-hasChildNodes",
      "shortDoc": "<p>Returns true if this node has one or more child nodes, else false.</p>\n"
    },
    {
      "tagname": "method",
      "name": "indexOf",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns the index of a child node</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "node",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The index of the node or -1 if it was not found</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 690,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-indexOf",
      "shortDoc": "<p>Returns the index of a child node</p>\n"
    },
    {
      "tagname": "method",
      "name": "insertBefore",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Inserts the first node before the second node in this nodes childNodes collection.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "node",
          "doc": "<p>The node to insert</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "refNode",
          "doc": "<p>The node to insert before (if null the node is appended)</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "suppressEvents",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Node",
        "doc": "<p>The inserted node</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 540,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertBefore",
      "shortDoc": "<p>Inserts the first node before the second node in this nodes childNodes collection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "insertChild",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Insert a node into this node</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The zero-based index to insert the node at</p>\n",
          "optional": false
        },
        {
          "type": "Ext.data.Model",
          "name": "node",
          "doc": "<p>The node to insert</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Record",
        "doc": "<p>The record you just inserted</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 622,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertChild",
      "shortDoc": "<p>Insert a node into this node</p>\n"
    },
    {
      "tagname": "method",
      "name": "isAncestor",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if the passed node is an ancestor (at any point) of this node.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "node",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 824,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-isAncestor",
      "shortDoc": "<p>Returns true if the passed node is an ancestor (at any point) of this node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isExpandable",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node has one or more child nodes, or if the <tt>expandable</tt>\nnode attribute is explicitly specified as true (see <a href=\"#/api/Ext.data.NodeInterface--attributes\" rel=\"Ext.data.NodeInterface--attributes\" class=\"docClass\">attributes</a>), otherwise returns false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 323,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpandable",
      "shortDoc": "Returns true if this node has one or more child nodes, or if the expandable\nnode attribute is explicitly specified as..."
    },
    {
      "tagname": "method",
      "name": "isExpanded",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node is expaned</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 877,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpanded",
      "shortDoc": "<p>Returns true if this node is expaned</p>\n"
    },
    {
      "tagname": "method",
      "name": "isFirst",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node is the first child of its parent</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 307,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-isFirst",
      "shortDoc": "<p>Returns true if this node is the first child of its parent</p>\n"
    },
    {
      "tagname": "method",
      "name": "isLast",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node is the last child of its parent</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 299,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLast",
      "shortDoc": "<p>Returns true if this node is the last child of its parent</p>\n"
    },
    {
      "tagname": "method",
      "name": "isLeaf",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node is a leaf</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 231,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLeaf",
      "shortDoc": "<p>Returns true if this node is a leaf</p>\n"
    },
    {
      "tagname": "method",
      "name": "isLoaded",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node is loaded</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 885,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoaded",
      "shortDoc": "<p>Returns true if this node is loaded</p>\n"
    },
    {
      "tagname": "method",
      "name": "isLoading",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node is loading</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 893,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoading",
      "shortDoc": "<p>Returns true if this node is loading</p>\n"
    },
    {
      "tagname": "method",
      "name": "isRoot",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node is the root node</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 901,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-isRoot",
      "shortDoc": "<p>Returns true if this node is the root node</p>\n"
    },
    {
      "tagname": "method",
      "name": "isVisible",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Returns true if this node is visible</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 909,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-isVisible",
      "shortDoc": "<p>Returns true if this node is visible</p>\n"
    },
    {
      "tagname": "method",
      "name": "remove",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Removes this node from its parent</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "destroy",
          "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "suppressEvents",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Node",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 638,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-remove",
      "shortDoc": "<p>Removes this node from its parent</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeAll",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Removes all child nodes from this node.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "destroy",
          "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "suppressEvents",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Node",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 652,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeAll",
      "shortDoc": "<p>Removes all child nodes from this node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeChild",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Removes a child node from this node.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "node",
          "doc": "<p>The node to remove</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "destroy",
          "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "suppressEvents",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "suppressNodeUpdate",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Node",
        "doc": "<p>The removed node</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 421,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeChild",
      "shortDoc": "<p>Removes a child node from this node.</p>\n"
    },
    {
      "tagname": "method",
      "name": "replaceChild",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Replaces one child node in this node with another.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "newChild",
          "doc": "<p>The replacement node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "oldChild",
          "doc": "<p>The node to replace</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "suppressEvents",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Node",
        "doc": "<p>The replaced node</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 676,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-replaceChild",
      "shortDoc": "<p>Replaces one child node in this node with another.</p>\n"
    },
    {
      "tagname": "method",
      "name": "sort",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Sorts this nodes children using the supplied sort function.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>A function which, when passed two Nodes, returns -1, 0 or 1 depending upon required sort order.</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "recursive",
          "doc": "<p>Whether or not to apply this sort recursively</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "suppressEvent",
          "doc": "<p>Set to true to not fire a sort event.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 840,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-sort",
      "shortDoc": "<p>Sorts this nodes children using the supplied sort function.</p>\n"
    },
    {
      "tagname": "method",
      "name": "updateInfo",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Updates general data of this node like isFirst, isLast, depth. This\nmethod is internally called after a node is moved. This shouldn't\nhave to be called by the developer unless they are creating custom\nTree plugins.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "silent",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 257,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-method-updateInfo",
      "shortDoc": "Updates general data of this node like isFirst, isLast, depth. This\nmethod is internally called after a node is moved..."
    }
  ],
  "property": [

  ],
  "event": [
    {
      "tagname": "event",
      "name": "append",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires when a new child node is appended</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>This node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "node",
          "doc": "<p>The newly appended node</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index of the newly appended node</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 84,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-append",
      "shortDoc": "<p>Fires when a new child node is appended</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforeappend",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires before a new child is appended, return false to cancel the append.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>This node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "node",
          "doc": "<p>The child node to be appended</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 120,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeappend",
      "shortDoc": "<p>Fires before a new child is appended, return false to cancel the append.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforecollapse",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires before this node is collapsed.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>The collapsing node</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 183,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforecollapse",
      "shortDoc": "<p>Fires before this node is collapsed.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforeexpand",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires before this node is expanded.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>The expanding node</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 169,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeexpand",
      "shortDoc": "<p>Fires before this node is expanded.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforeinsert",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires before a new child is inserted, return false to cancel the insert.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>This node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "node",
          "doc": "<p>The child node to be inserted</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "refNode",
          "doc": "<p>The child node the node is being inserted before</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 146,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeinsert",
      "shortDoc": "<p>Fires before a new child is inserted, return false to cancel the insert.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforemove",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires before this node is moved to a new location in the tree. Return false to cancel the move.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>This node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "oldParent",
          "doc": "<p>The parent of this node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "newParent",
          "doc": "<p>The new parent this node is moving to</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index it is being moved to</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 136,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforemove",
      "shortDoc": "<p>Fires before this node is moved to a new location in the tree. Return false to cancel the move.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforeremove",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires before a child is removed, return false to cancel the remove.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>This node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "node",
          "doc": "<p>The child node to be removed</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 128,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeremove",
      "shortDoc": "<p>Fires before a child is removed, return false to cancel the remove.</p>\n"
    },
    {
      "tagname": "event",
      "name": "collapse",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires when this node is collapsed.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>The collapsing node</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 162,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-collapse",
      "shortDoc": "<p>Fires when this node is collapsed.</p>\n"
    },
    {
      "tagname": "event",
      "name": "expand",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires when this node is expanded.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>The expanding node</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 155,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-expand",
      "shortDoc": "<p>Fires when this node is expanded.</p>\n"
    },
    {
      "tagname": "event",
      "name": "insert",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires when a new child node is inserted.</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>This node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "node",
          "doc": "<p>The child node inserted</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "refNode",
          "doc": "<p>The child node the node was inserted before</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 111,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-insert",
      "shortDoc": "<p>Fires when a new child node is inserted.</p>\n"
    },
    {
      "tagname": "event",
      "name": "move",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires when this node is moved to a new location in the tree</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>This node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "oldParent",
          "doc": "<p>The old parent of this node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "newParent",
          "doc": "<p>The new parent of this node</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index it was moved to</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 101,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-move",
      "shortDoc": "<p>Fires when this node is moved to a new location in the tree</p>\n"
    },
    {
      "tagname": "event",
      "name": "remove",
      "member": "Ext.data.NodeInterface",
      "doc": "<p>Fires when a child node is removed</p>\n",
      "params": [
        {
          "type": "Node",
          "name": "this",
          "doc": "<p>This node</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "node",
          "doc": "<p>The removed node</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
      "linenr": 93,
      "html_filename": "NodeInterface.html",
      "href": "NodeInterface.html#Ext-data-NodeInterface-event-remove",
      "shortDoc": "<p>Fires when a child node is removed</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeInterface.js",
  "linenr": 1,
  "html_filename": "NodeInterface.html",
  "href": "NodeInterface.html#Ext-data-NodeInterface",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});