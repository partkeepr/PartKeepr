Ext.data.JsonP.Ext_Array({
  "tagname": "class",
  "name": "Ext.Array",
  "doc": "<p>A set of useful static methods to deal with arrays; provide missing methods for older browsers.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "clean",
      "member": "Ext.Array",
      "doc": "<p>Filter through an array and remove empty item as defined in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">Ext.isEmpty</a></p>\n\n<p>@see Ext.Array.filter</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>results</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 344,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-clean",
      "shortDoc": "<p>Filter through an array and remove empty item as defined in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">Ext.isEmpty</a></p>\n\n<p>@see Ext.Array.filter</p>\n"
    },
    {
      "tagname": "method",
      "name": "clone",
      "member": "Ext.Array",
      "doc": "<p>Clone a flat array without referencing the previous one. Note that this is different\nfrom Ext.clone since it doesn't handle recursive cloning. It's simply a convenient, easy-to-remember method\nfor Array.prototype.slice.call(array)</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>The array</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The clone array</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 477,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-clone",
      "shortDoc": "Clone a flat array without referencing the previous one. Note that this is different\nfrom Ext.clone since it doesn't ..."
    },
    {
      "tagname": "method",
      "name": "contains",
      "member": "Ext.Array",
      "doc": "<p>Checks whether or not the given <code>array</code> contains the specified <code>item</code></p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>The array to check</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "item",
          "doc": "<p>The item to look for</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the array contains the item, false otherwise</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 161,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-contains",
      "shortDoc": "<p>Checks whether or not the given <code>array</code> contains the specified <code>item</code></p>\n"
    },
    {
      "tagname": "method",
      "name": "difference",
      "member": "Ext.Array",
      "doc": "<p>Perform a set difference A-B by subtracting all items in array B from array A.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>A</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>B</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>difference</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 556,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-difference",
      "shortDoc": "<p>Perform a set difference A-B by subtracting all items in array B from array A.</p>\n"
    },
    {
      "tagname": "method",
      "name": "each",
      "member": "Ext.Array",
      "doc": "<p>Iterates an array or an iterable value and invoke the given callback function for each item.</p>\n\n<pre><code>var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];\n\nExt.Array.each(countries, function(name, index, countriesItSelf) {\n    console.log(name);\n});\n\nvar sum = function() {\n    var sum = 0;\n\n    Ext.Array.each(arguments, function(value) {\n        sum += value;\n    });\n\n    return sum;\n};\n\nsum(1, 2, 3); // returns 6\n</code></pre>\n\n<p>The iteration can be stopped by returning false in the function callback.</p>\n\n<pre><code>Ext.Array.each(countries, function(name, index, countriesItSelf) {\n    if (name === 'Singapore') {\n        return false; // break here\n    }\n});\n</code></pre>\n",
      "params": [
        {
          "type": "Array/NodeList/Mixed",
          "name": "iterable",
          "doc": "<p>The value to be iterated. If this\nargument is not iterable, the callback function is called once.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The callback function. If it returns false, the iteration stops and this method returns\nthe current <code>index</code>. Arguments passed to this callback function are:</p>\n\n<ul>\n<li><code>item</code>: {Mixed} The item at the current <code>index</code> in the passed <code>array</code></li>\n<li><code>index</code>: {Number} The current <code>index</code> within the <code>array</code></li>\n<li><code>allItems</code>: {Array/NodeList/Mixed} The <code>array</code> passed as the first argument to <code>Ext.Array.each</code></li>\n</ul>\n\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "reverse",
          "doc": "<p>(Optional) Reverse the iteration order (loop from the end to the beginning)\nDefaults false</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>See description for the <code>fn</code> parameter.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 37,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-each",
      "shortDoc": "Iterates an array or an iterable value and invoke the given callback function for each item.\n\nvar countries = ['Vietn..."
    },
    {
      "tagname": "method",
      "name": "every",
      "member": "Ext.Array",
      "doc": "<p>Executes the specified function for each array element until the function returns a falsy value.\nIf such an item is found, the function will return false immediately.\nOtherwise, it will return true.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Callback function for each item</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Callback function scope</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if no false value is returned by the callback function.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 281,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-every",
      "shortDoc": "Executes the specified function for each array element until the function returns a falsy value.\nIf such an item is f..."
    },
    {
      "tagname": "method",
      "name": "filter",
      "member": "Ext.Array",
      "doc": "<p>Creates a new array with all of the elements of this array for which\nthe provided filtering function returns true.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Callback function for each item</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Callback function scope</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>results</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 391,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-filter",
      "shortDoc": "<p>Creates a new array with all of the elements of this array for which\nthe provided filtering function returns true.</p>\n"
    },
    {
      "tagname": "method",
      "name": "flatten",
      "member": "Ext.Array",
      "doc": "<p>Recursively flattens into 1-d Array. Injects Arrays inline.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>The array to flatten</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The new, flattened array.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 625,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-flatten",
      "shortDoc": "<p>Recursively flattens into 1-d Array. Injects Arrays inline.</p>\n"
    },
    {
      "tagname": "method",
      "name": "forEach",
      "member": "Ext.Array",
      "doc": "<p>Iterates an array and invoke the given callback function for each item. Note that this will simply\ndelegate to the native Array.prototype.forEach method if supported.\nIt doesn't support stopping the iteration by returning false in the callback function like\n<a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">each</a>. However, performance could be much better in modern browsers comparing with\n<a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">each</a></p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>The array to iterate</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function callback, to be invoked these arguments:</p>\n\n<ul>\n<li><code>item</code>: {Mixed} The item at the current <code>index</code> in the passed <code>array</code></li>\n<li><code>index</code>: {Number} The current <code>index</code> within the <code>array</code></li>\n<li><code>allItems</code>: {Array} The <code>array</code> itself which was passed as the first argument</li>\n</ul>\n\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(Optional) The execution scope (<code>this</code>) in which the specified function is executed.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 105,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-forEach",
      "shortDoc": "Iterates an array and invoke the given callback function for each item. Note that this will simply\ndelegate to the na..."
    },
    {
      "tagname": "method",
      "name": "from",
      "member": "Ext.Array",
      "doc": "<p>Converts a value to an array if it's not already an array; returns:</p>\n\n<ul>\n<li>An empty array if given value is <code>undefined</code> or <code>null</code></li>\n<li>Itself if given value is already an array</li>\n<li>An array copy if given value is <a href=\"#/api/Ext-method-isIterable\" rel=\"Ext-method-isIterable\" class=\"docClass\">iterable</a> (arguments, NodeList and alike)</li>\n<li>An array with one item which is the given value, otherwise</li>\n</ul>\n\n",
      "params": [
        {
          "type": "Array/Mixed",
          "name": "value",
          "doc": "<p>The value to convert to an array if it's not already is an array</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "newReference",
          "doc": "<p>(Optional) newReference True to clone the given array and return a new reference if necessary,\ndefaults to false</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>array</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 417,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-from",
      "shortDoc": "Converts a value to an array if it's not already an array; returns:\n\n\nAn empty array if given value is undefined or n..."
    },
    {
      "tagname": "method",
      "name": "include",
      "member": "Ext.Array",
      "doc": "<p>Push an item into the array only if the array doesn't contain it yet</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>The array</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "item",
          "doc": "<p>The item to include</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The passed array itself</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 464,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-include",
      "shortDoc": "<p>Push an item into the array only if the array doesn't contain it yet</p>\n"
    },
    {
      "tagname": "method",
      "name": "indexOf",
      "member": "Ext.Array",
      "doc": "<p>Get the index of the provided <code>item</code> in the given <code>array</code>, a supplement for the\nmissing arrayPrototype.indexOf in Internet Explorer.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>The array to check</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "item",
          "doc": "<p>The item to look for</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "from",
          "doc": "<p>(Optional) The index at which to begin the search</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The index of item in the array (or -1 if it is not found)</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 135,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-indexOf",
      "shortDoc": "Get the index of the provided item in the given array, a supplement for the\nmissing arrayPrototype.indexOf in Interne..."
    },
    {
      "tagname": "method",
      "name": "intersect",
      "member": "Ext.Array",
      "doc": "<p>Merge multiple arrays into one with unique items that exist in all of the arrays.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>,...</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>intersect</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 507,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-intersect",
      "shortDoc": "<p>Merge multiple arrays into one with unique items that exist in all of the arrays.</p>\n"
    },
    {
      "tagname": "method",
      "name": "map",
      "member": "Ext.Array",
      "doc": "<p>Creates a new array with the results of calling a provided function on every element in this array.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Callback function for each item</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Callback function scope</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>results</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 258,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-map",
      "shortDoc": "<p>Creates a new array with the results of calling a provided function on every element in this array.</p>\n"
    },
    {
      "tagname": "method",
      "name": "max",
      "member": "Ext.Array",
      "doc": "<p>Returns the maximum value in the Array</p>\n",
      "params": [
        {
          "type": "Array|NodeList",
          "name": "array",
          "doc": "<p>The Array from which to select the maximum value.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "comparisonFn",
          "doc": "<p>(optional) a function to perform the comparision which determines maximization.</p>\n\n<pre><code>              If omitted the \"&gt;\" operator will be used. Note: gt = 1; eq = 0; lt = -1\n</code></pre>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>maxValue The maximum value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 681,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-max",
      "shortDoc": "<p>Returns the maximum value in the Array</p>\n"
    },
    {
      "tagname": "method",
      "name": "mean",
      "member": "Ext.Array",
      "doc": "<p>Calculates the mean of all items in the array</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>The Array to calculate the mean value of.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The mean.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 710,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-mean",
      "shortDoc": "<p>Calculates the mean of all items in the array</p>\n"
    },
    {
      "tagname": "method",
      "name": "merge",
      "member": "Ext.Array",
      "doc": "<p>Merge multiple arrays into one with unique items. Alias to <a href=\"#/api/Ext.Array-method-union\" rel=\"Ext.Array-method-union\" class=\"docClass\">union</a>.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>,...</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>merged</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 489,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-merge",
      "shortDoc": "<p>Merge multiple arrays into one with unique items. Alias to <a href=\"#/api/Ext.Array-method-union\" rel=\"Ext.Array-method-union\" class=\"docClass\">union</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "min",
      "member": "Ext.Array",
      "doc": "<p>Returns the minimum value in the Array.</p>\n",
      "params": [
        {
          "type": "Array|NodeList",
          "name": "array",
          "doc": "<p>The Array from which to select the minimum value.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "comparisonFn",
          "doc": "<p>(optional) a function to perform the comparision which determines minimization.</p>\n\n<pre><code>              If omitted the \"&lt;\" operator will be used. Note: gt = 1; eq = 0; lt = -1\n</code></pre>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>minValue The minimum value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 652,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-min",
      "shortDoc": "<p>Returns the minimum value in the Array.</p>\n"
    },
    {
      "tagname": "method",
      "name": "pluck",
      "member": "Ext.Array",
      "doc": "<p>Plucks the value of a property from each item in the Array. Example:</p>\n\n<pre><code>Ext.Array.pluck(Ext.query(\"p\"), \"className\"); // [el1.className, el2.className, ..., elN.className]\n</code></pre>\n",
      "params": [
        {
          "type": "Array|NodeList",
          "name": "array",
          "doc": "<p>The Array of items to pluck the value from.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "propertyName",
          "doc": "<p>The property name to pluck from each element.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The value from each item in the Array.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 236,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-pluck",
      "shortDoc": "Plucks the value of a property from each item in the Array. Example:\n\nExt.Array.pluck(Ext.query(\"p\"), \"className\"); /..."
    },
    {
      "tagname": "method",
      "name": "remove",
      "member": "Ext.Array",
      "doc": "<p>Removes the specified item from the array if it exists</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>The array</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "item",
          "doc": "<p>The item to remove</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The passed array itself</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 447,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-remove",
      "shortDoc": "<p>Removes the specified item from the array if it exists</p>\n"
    },
    {
      "tagname": "method",
      "name": "some",
      "member": "Ext.Array",
      "doc": "<p>Executes the specified function for each array element until the function returns a truthy value.\nIf such an item is found, the function will return true immediately. Otherwise, it will return false.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Callback function for each item</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Callback function scope</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the callback function returns a truthy value.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 313,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-some",
      "shortDoc": "Executes the specified function for each array element until the function returns a truthy value.\nIf such an item is ..."
    },
    {
      "tagname": "method",
      "name": "sort",
      "member": "Ext.Array",
      "doc": "<p>Sorts the elements of an Array.\nBy default, this method sorts the elements alphabetically and ascending.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>The array to sort.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "sortFn",
          "doc": "<p>(optional) The comparison function.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The sorted array.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 581,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-sort",
      "shortDoc": "<p>Sorts the elements of an Array.\nBy default, this method sorts the elements alphabetically and ascending.</p>\n"
    },
    {
      "tagname": "method",
      "name": "sum",
      "member": "Ext.Array",
      "doc": "<p>Calculates the sum of all items in the given array</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "<p>The Array to calculate the sum value of.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The sum.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 719,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-sum",
      "shortDoc": "<p>Calculates the sum of all items in the given array</p>\n"
    },
    {
      "tagname": "method",
      "name": "toArray",
      "member": "Ext.Array",
      "doc": "<p>Converts any iterable (numeric indices and a length property) into a true array.</p>\n\n<p>function test() {</p>\n\n<pre><code>var args = Ext.Array.toArray(arguments),\n    fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);\n\nalert(args.join(' '));\nalert(fromSecondToLastArgs.join(' '));\n</code></pre>\n\n<p>}</p>\n\n<p>test('just', 'testing', 'here'); // alerts 'just testing here';</p>\n\n<pre><code>                             // alerts 'testing here';\n</code></pre>\n\n<p>Ext.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array\nExt.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']\nExt.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "iterable",
          "doc": "<p>the iterable object to be turned into a true Array.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "start",
          "doc": "<p>(Optional) a zero-based index that specifies the start of extraction. Defaults to 0</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "end",
          "doc": "<p>(Optional) a zero-based index that specifies the end of extraction. Defaults to the last\nindex of the iterable value</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>array</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 185,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-toArray",
      "shortDoc": "Converts any iterable (numeric indices and a length property) into a true array.\n\nfunction test() {\n\nvar args = Ext.A..."
    },
    {
      "tagname": "method",
      "name": "union",
      "member": "Ext.Array",
      "doc": "<p>Alias to <a href=\"#/api/Ext.Array-method-merge\" rel=\"Ext.Array-method-merge\" class=\"docClass\">merge</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 746,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-union",
      "shortDoc": "<p>Alias to <a href=\"#/api/Ext.Array-method-merge\" rel=\"Ext.Array-method-merge\" class=\"docClass\">merge</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "unique",
      "member": "Ext.Array",
      "doc": "<p>Returns a new array with unique items</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "array",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>results</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 368,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-Array-method-unique",
      "shortDoc": "<p>Returns a new array with unique items</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
  "linenr": 1,
  "html_filename": "Array2.html",
  "href": "Array2.html#Ext-Array",
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