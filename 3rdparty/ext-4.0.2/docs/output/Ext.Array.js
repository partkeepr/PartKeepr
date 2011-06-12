Ext.data.JsonP.Ext_Array({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-clean",
        "shortDoc": "Filter through an array and remove empty item as defined in Ext.isEmpty\n\nSee filter ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array"
          }
        ],
        "name": "clean",
        "owner": "Ext.Array",
        "doc": "<p>Filter through an array and remove empty item as defined in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">Ext.isEmpty</a></p>\n\n<p>See <a href=\"#/api/Ext.Array-method-filter\" rel=\"Ext.Array-method-filter\" class=\"docClass\">filter</a></p>\n",
        "linenr": 495,
        "return": {
          "type": "Array",
          "doc": "<p>results</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-clone",
        "shortDoc": "Clone a flat array without referencing the previous one. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array</p>\n",
            "name": "array"
          }
        ],
        "name": "clone",
        "owner": "Ext.Array",
        "doc": "<p>Clone a flat array without referencing the previous one. Note that this is different\nfrom Ext.clone since it doesn't handle recursive cloning. It's simply a convenient, easy-to-remember method\nfor Array.prototype.slice.call(array)</p>\n",
        "linenr": 628,
        "return": {
          "type": "Array",
          "doc": "<p>The clone array</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-contains",
        "shortDoc": "Checks whether or not the given array contains the specified item ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array to check</p>\n",
            "name": "array"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The item to look for</p>\n",
            "name": "item"
          }
        ],
        "name": "contains",
        "owner": "Ext.Array",
        "doc": "<p>Checks whether or not the given <code>array</code> contains the specified <code>item</code></p>\n",
        "linenr": 311,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the array contains the item, false otherwise</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-difference",
        "shortDoc": "Perform a set difference A-B by subtracting all items in array B from array A. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "arrayA"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "arrayB"
          }
        ],
        "name": "difference",
        "owner": "Ext.Array",
        "doc": "<p>Perform a set difference A-B by subtracting all items in array B from array A.</p>\n",
        "linenr": 713,
        "return": {
          "type": "Array",
          "doc": "<p>difference</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-each",
        "shortDoc": "Iterates an array or an iterable value and invoke the given callback function for each item. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array/NodeList/Mixed",
            "optional": false,
            "doc": "<p>The value to be iterated. If this\nargument is not iterable, the callback function is called once.</p>\n",
            "name": "iterable"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The callback function. If it returns false, the iteration stops and this method returns\nthe current <code>index</code>. Arguments passed to this callback function are:</p>\n\n<ul>\n<li><code>item</code> : Mixed - The item at the current <code>index</code> in the passed <code>array</code></li>\n<li><code>index</code> : Number - The current <code>index</code> within the <code>array</code></li>\n<li><code>allItems</code> : Array/NodeList/Mixed - The <code>array</code> passed as the first argument to <code>Ext.Array.each</code></li>\n</ul>\n\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) Reverse the iteration order (loop from the end to the beginning)\nDefaults false</p>\n",
            "name": "reverse"
          }
        ],
        "name": "each",
        "owner": "Ext.Array",
        "doc": "<p>Iterates an array or an iterable value and invoke the given callback function for each item.</p>\n\n<pre><code>var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];\n\nExt.Array.each(countries, function(name, index, countriesItSelf) {\n    console.log(name);\n});\n\nvar sum = function() {\n    var sum = 0;\n\n    Ext.Array.each(arguments, function(value) {\n        sum += value;\n    });\n\n    return sum;\n};\n\nsum(1, 2, 3); // returns 6\n</code></pre>\n\n<p>The iteration can be stopped by returning false in the function callback.</p>\n\n<pre><code>Ext.Array.each(countries, function(name, index, countriesItSelf) {\n    if (name === 'Singapore') {\n        return false; // break here\n    }\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-each\" rel=\"Ext-method-each\" class=\"docClass\">Ext.each</a> is alias for <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a></p>\n",
        "linenr": 188,
        "return": {
          "type": "Boolean",
          "doc": "<p>See description for the <code>fn</code> parameter.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-erase",
        "shortDoc": "Removes items from an array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The Array on which to replace.</p>\n",
            "name": "array"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index in the array at which to operate.</p>\n",
            "name": "index"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of items to remove at index.</p>\n",
            "name": "removeCount"
          }
        ],
        "name": "erase",
        "owner": "Ext.Array",
        "doc": "<p>Removes items from an array. This is functionally equivalent to the splice method\nof Array, but works around bugs in IE8's splice method and does not copy the\nremoved elements in order to return them (because very often they are ignored).</p>\n",
        "linenr": 920,
        "return": {
          "type": "Array",
          "doc": "<p>The array passed.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-every",
        "shortDoc": "Executes the specified function for each array element until the function returns a falsy value. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function for each item</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Callback function scope</p>\n",
            "name": "scope"
          }
        ],
        "name": "every",
        "owner": "Ext.Array",
        "doc": "<p>Executes the specified function for each array element until the function returns a falsy value.\nIf such an item is found, the function will return false immediately.\nOtherwise, it will return true.</p>\n",
        "linenr": 432,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if no false value is returned by the callback function.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-filter",
        "shortDoc": "Creates a new array with all of the elements of this array for which\nthe provided filtering function returns true. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function for each item</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Callback function scope</p>\n",
            "name": "scope"
          }
        ],
        "name": "filter",
        "owner": "Ext.Array",
        "doc": "<p>Creates a new array with all of the elements of this array for which\nthe provided filtering function returns true.</p>\n",
        "linenr": 543,
        "return": {
          "type": "Array",
          "doc": "<p>results</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-flatten",
        "shortDoc": "Recursively flattens into 1-d Array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "array"
          }
        ],
        "name": "flatten",
        "owner": "Ext.Array",
        "doc": "<p>Recursively flattens into 1-d Array. Injects Arrays inline.</p>\n",
        "linenr": 800,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-forEach",
        "shortDoc": "Iterates an array and invoke the given callback function for each item. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array to iterate</p>\n",
            "name": "array"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function callback, to be invoked these arguments:</p>\n\n<ul>\n<li><code>item</code> : Mixed - The item at the current <code>index</code> in the passed <code>array</code></li>\n<li><code>index</code> : Number - The current <code>index</code> within the <code>array</code></li>\n<li><code>allItems</code> : Array - The <code>array</code> itself which was passed as the first argument</li>\n</ul>\n\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The execution scope (<code>this</code>) in which the specified function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "name": "forEach",
        "owner": "Ext.Array",
        "doc": "<p>Iterates an array and invoke the given callback function for each item. Note that this will simply\ndelegate to the native Array.prototype.forEach method if supported.\nIt doesn't support stopping the iteration by returning false in the callback function like\n<a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">each</a>. However, performance could be much better in modern browsers comparing with\n<a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">each</a></p>\n",
        "linenr": 257,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-from",
        "shortDoc": "Converts a value to an array if it's not already an array; returns:\n\n\nAn empty array if given value is undefined or n...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array/Mixed",
            "optional": false,
            "doc": "<p>The value to convert to an array if it's not already is an array</p>\n",
            "name": "value"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) newReference True to clone the given array and return a new reference if necessary,\ndefaults to false</p>\n",
            "name": "newReference"
          }
        ],
        "name": "from",
        "owner": "Ext.Array",
        "doc": "<p>Converts a value to an array if it's not already an array; returns:</p>\n\n<ul>\n<li>An empty array if given value is <code>undefined</code> or <code>null</code></li>\n<li>Itself if given value is already an array</li>\n<li>An array copy if given value is <a href=\"#/api/Ext-method-isIterable\" rel=\"Ext-method-isIterable\" class=\"docClass\">iterable</a> (arguments, NodeList and alike)</li>\n<li>An array with one item which is the given value, otherwise</li>\n</ul>\n\n",
        "linenr": 570,
        "return": {
          "type": "Array",
          "doc": "<p>array</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-include",
        "shortDoc": "Push an item into the array only if the array doesn't contain it yet ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array</p>\n",
            "name": "array"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The item to include</p>\n",
            "name": "item"
          }
        ],
        "name": "include",
        "owner": "Ext.Array",
        "doc": "<p>Push an item into the array only if the array doesn't contain it yet</p>\n",
        "linenr": 616,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-indexOf",
        "shortDoc": "Get the index of the provided item in the given array, a supplement for the\nmissing arrayPrototype.indexOf in Interne...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array to check</p>\n",
            "name": "array"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The item to look for</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>(Optional) The index at which to begin the search</p>\n",
            "name": "from"
          }
        ],
        "name": "indexOf",
        "owner": "Ext.Array",
        "doc": "<p>Get the index of the provided <code>item</code> in the given <code>array</code>, a supplement for the\nmissing arrayPrototype.indexOf in Internet Explorer.</p>\n",
        "linenr": 286,
        "return": {
          "type": "Number",
          "doc": "<p>The index of item in the array (or -1 if it is not found)</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-insert",
        "shortDoc": "Inserts items in to an array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The Array on which to replace.</p>\n",
            "name": "array"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index in the array at which to operate.</p>\n",
            "name": "index"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array of items to insert at index.</p>\n",
            "name": "items"
          }
        ],
        "name": "insert",
        "owner": "Ext.Array",
        "doc": "<p>Inserts items in to an array.</p>\n",
        "linenr": 933,
        "return": {
          "type": "Array",
          "doc": "<p>The array passed.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-intersect",
        "shortDoc": "Merge multiple arrays into one with unique items that exist in all of the arrays. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array1"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array2"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "etc"
          }
        ],
        "name": "intersect",
        "owner": "Ext.Array",
        "doc": "<p>Merge multiple arrays into one with unique items that exist in all of the arrays.</p>\n",
        "linenr": 662,
        "return": {
          "type": "Array",
          "doc": "<p>intersect</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-map",
        "shortDoc": "Creates a new array with the results of calling a provided function on every element in this array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function for each item</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Callback function scope</p>\n",
            "name": "scope"
          }
        ],
        "name": "map",
        "owner": "Ext.Array",
        "doc": "<p>Creates a new array with the results of calling a provided function on every element in this array.</p>\n",
        "linenr": 408,
        "return": {
          "type": "Array",
          "doc": "<p>results</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-max",
        "shortDoc": "Returns the maximum value in the Array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array|NodeList",
            "optional": false,
            "doc": "<p>The Array from which to select the maximum value.</p>\n",
            "name": "array"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) a function to perform the comparision which determines maximization.\nIf omitted the \">\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n",
            "name": "comparisonFn"
          }
        ],
        "name": "max",
        "owner": "Ext.Array",
        "doc": "<p>Returns the maximum value in the Array.</p>\n",
        "linenr": 856,
        "return": {
          "type": "Mixed",
          "doc": "<p>maxValue The maximum value</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-mean",
        "shortDoc": "Calculates the mean of all items in the array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The Array to calculate the mean value of.</p>\n",
            "name": "array"
          }
        ],
        "name": "mean",
        "owner": "Ext.Array",
        "doc": "<p>Calculates the mean of all items in the array.</p>\n",
        "linenr": 886,
        "return": {
          "type": "Number",
          "doc": "<p>The mean.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-merge",
        "shortDoc": "Merge multiple arrays into one with unique items. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array1"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array2"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "etc"
          }
        ],
        "name": "merge",
        "owner": "Ext.Array",
        "doc": "<p>Merge multiple arrays into one with unique items.</p>\n\n<p><a href=\"#/api/Ext.Array-method-union\" rel=\"Ext.Array-method-union\" class=\"docClass\">union</a> is alias for <a href=\"#/api/Ext.Array-method-merge\" rel=\"Ext.Array-method-merge\" class=\"docClass\">merge</a></p>\n",
        "linenr": 640,
        "return": {
          "type": "Array",
          "doc": "<p>merged</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-min",
        "shortDoc": "Returns the minimum value in the Array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array|NodeList",
            "optional": false,
            "doc": "<p>The Array from which to select the minimum value.</p>\n",
            "name": "array"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) a function to perform the comparision which determines minimization.\nIf omitted the \"&lt;\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n",
            "name": "comparisonFn"
          }
        ],
        "name": "min",
        "owner": "Ext.Array",
        "doc": "<p>Returns the minimum value in the Array.</p>\n",
        "linenr": 826,
        "return": {
          "type": "Mixed",
          "doc": "<p>minValue The minimum value</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-pluck",
        "shortDoc": "Plucks the value of a property from each item in the Array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array|NodeList",
            "optional": false,
            "doc": "<p>The Array of items to pluck the value from.</p>\n",
            "name": "array"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The property name to pluck from each element.</p>\n",
            "name": "propertyName"
          }
        ],
        "name": "pluck",
        "owner": "Ext.Array",
        "doc": "<p>Plucks the value of a property from each item in the Array. Example:</p>\n\n<pre><code>Ext.Array.pluck(Ext.query(\"p\"), \"className\"); // [el1.className, el2.className, ..., elN.className]\n</code></pre>\n",
        "linenr": 386,
        "return": {
          "type": "Array",
          "doc": "<p>The value from each item in the Array.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-remove",
        "shortDoc": "Removes the specified item from the array if it exists ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array</p>\n",
            "name": "array"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The item to remove</p>\n",
            "name": "item"
          }
        ],
        "name": "remove",
        "owner": "Ext.Array",
        "doc": "<p>Removes the specified item from the array if it exists</p>\n",
        "linenr": 599,
        "return": {
          "type": "Array",
          "doc": "<p>The passed array itself</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-replace",
        "shortDoc": "Replaces items in an array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The Array on which to replace.</p>\n",
            "name": "array"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index in the array at which to operate.</p>\n",
            "name": "index"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of items to remove at index (can be 0).</p>\n",
            "name": "removeCount"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>An optional array of items to insert at index.</p>\n",
            "name": "insert"
          }
        ],
        "name": "replace",
        "owner": "Ext.Array",
        "doc": "<p>Replaces items in an array. This is functionally equivalent to the splice method\nof Array, but works around bugs in IE8's splice method and is often more convenient\nto call because it accepts an array of items to insert rather than use a variadic\nargument list.</p>\n",
        "linenr": 945,
        "return": {
          "type": "Array",
          "doc": "<p>The array passed.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-slice",
        "shortDoc": "Returns a shallow copy of a part of an array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array (or arguments object).</p>\n",
            "name": "array"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which to begin. Negative values are offsets from\nthe end of the array.</p>\n",
            "name": "begin"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which to end. The copied items do not include\nend. Negative values are offsets from the end of the array. If end is omitted,\nall items up to the end of the array are copied.</p>\n",
            "name": "end"
          }
        ],
        "name": "slice",
        "owner": "Ext.Array",
        "doc": "<p>Returns a shallow copy of a part of an array. This is equivalent to the native\ncall \"Array.prototype.slice.call(array, begin, end)\". This is often used when \"array\"\nis \"arguments\" since the arguments object does not supply a slice method but can\nbe the context object to Array.prototype.slice.</p>\n",
        "linenr": 738,
        "return": {
          "type": "Array",
          "doc": "<p>The copied piece of the array.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-some",
        "shortDoc": "Executes the specified function for each array element until the function returns a truthy value. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Callback function for each item</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Callback function scope</p>\n",
            "name": "scope"
          }
        ],
        "name": "some",
        "owner": "Ext.Array",
        "doc": "<p>Executes the specified function for each array element until the function returns a truthy value.\nIf such an item is found, the function will return true immediately. Otherwise, it will return false.</p>\n",
        "linenr": 464,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the callback function returns a truthy value.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-sort",
        "shortDoc": "Sorts the elements of an Array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array to sort.</p>\n",
            "name": "array"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) The comparison function.</p>\n",
            "name": "sortFn"
          }
        ],
        "name": "sort",
        "owner": "Ext.Array",
        "doc": "<p>Sorts the elements of an Array.\nBy default, this method sorts the elements alphabetically and ascending.</p>\n",
        "linenr": 756,
        "return": {
          "type": "Array",
          "doc": "<p>The sorted array.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-splice",
        "shortDoc": "Replaces items in an array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The Array on which to replace.</p>\n",
            "name": "array"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index in the array at which to operate.</p>\n",
            "name": "index"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of items to remove at index (can be 0).</p>\n",
            "name": "removeCount"
          }
        ],
        "name": "splice",
        "owner": "Ext.Array",
        "doc": "<p>Replaces items in an array. This is equivalent to the splice method of Array, but\nworks around bugs in IE8's splice method. The signature is exactly the same as the\nsplice method except that the array is the first argument. All arguments following\nremoveCount are inserted in the array at index.</p>\n",
        "linenr": 960,
        "return": {
          "type": "Array",
          "doc": "<p>An array containing the removed items.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-sum",
        "shortDoc": "Calculates the sum of all items in the given array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The Array to calculate the sum value of.</p>\n",
            "name": "array"
          }
        ],
        "name": "sum",
        "owner": "Ext.Array",
        "doc": "<p>Calculates the sum of all items in the given array.</p>\n",
        "linenr": 896,
        "return": {
          "type": "Number",
          "doc": "<p>The sum.</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-toArray",
        "shortDoc": "Converts any iterable (numeric indices and a length property) into a true array. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>the iterable object to be turned into a true Array.</p>\n",
            "name": "iterable"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>(Optional) a zero-based index that specifies the start of extraction. Defaults to 0</p>\n",
            "name": "start"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>(Optional) a zero-based index that specifies the end of extraction. Defaults to the last\nindex of the iterable value</p>\n",
            "name": "end"
          }
        ],
        "name": "toArray",
        "owner": "Ext.Array",
        "doc": "<p>Converts any iterable (numeric indices and a length property) into a true array.</p>\n\n<pre><code>function test() {\n    var args = Ext.Array.toArray(arguments),\n        fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);\n\n    alert(args.join(' '));\n    alert(fromSecondToLastArgs.join(' '));\n}\n\ntest('just', 'testing', 'here'); // alerts 'just testing here';\n                                 // alerts 'testing here';\n\nExt.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array\nExt.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']\nExt.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-toArray\" rel=\"Ext-method-toArray\" class=\"docClass\">Ext.toArray</a> is alias for <a href=\"#/api/Ext.Array-method-toArray\" rel=\"Ext.Array-method-toArray\" class=\"docClass\">Ext.Array.toArray</a></p>\n",
        "linenr": 334,
        "return": {
          "type": "Array",
          "doc": "<p>array</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.Array",
          "doc": null,
          "owner": "merge"
        },
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-union",
        "shortDoc": "Merge multiple arrays into one with unique items. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array1"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array2"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "etc"
          }
        ],
        "name": "union",
        "owner": "Ext.Array",
        "doc": "<p>Merge multiple arrays into one with unique items.</p>\n\n<p><a href=\"#/api/Ext.Array-method-union\" rel=\"Ext.Array-method-union\" class=\"docClass\">union</a> is alias for <a href=\"#/api/Ext.Array-method-merge\" rel=\"Ext.Array-method-merge\" class=\"docClass\">merge</a></p>\n",
        "linenr": 982,
        "return": {
          "type": "Array",
          "doc": "<p>merged</p>\n"
        },
        "html_filename": "Array2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Array2.html#Ext-Array-method-unique",
        "shortDoc": "Returns a new array with unique items ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "array"
          }
        ],
        "name": "unique",
        "owner": "Ext.Array",
        "doc": "<p>Returns a new array with unique items</p>\n",
        "linenr": 520,
        "return": {
          "type": "Array",
          "doc": "<p>results</p>\n"
        },
        "html_filename": "Array2.html"
      }
    ],
    "property": [

    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": true,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Array2.html#Ext-Array",
  "subclasses": [

  ],
  "static": false,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.Array",
  "doc": "<p>A set of useful static methods to deal with arrays; provide missing methods for older browsers.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Array2.html",
  "extends": null
});