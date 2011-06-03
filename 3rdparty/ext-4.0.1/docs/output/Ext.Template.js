Ext.data.JsonP.Ext_Template({
  "tagname": "class",
  "name": "Ext.Template",
  "doc": "<p>Represents an HTML fragment template. Templates may be <a href=\"#/api/Ext.Template--compile\" rel=\"Ext.Template--compile\" class=\"docClass\">precompiled</a>\nfor greater performance.</p>\n\n\n<p>An instance of this class may be created by passing to the constructor either\na single argument, or multiple arguments:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>single argument</b> : String/Array\n<div class=\"sub-desc\">\nThe single argument may be either a String or an Array:<ul>\n<li><tt>String</tt> : </li>\n<pre><code>var t = new Ext.Template(\"&lt;div>Hello {0}.&lt;/div>\");\nt.<a href=\"#/api/Ext.Template-method-append\" rel=\"Ext.Template-method-append\" class=\"docClass\">append</a>('some-element', ['foo']);\n   </code></pre>\n<li><tt>Array</tt> : </li>\nAn Array will be combined with <code>join('')</code>.\n<pre><code>var t = new Ext.Template([\n    '&lt;div name=\"{id}\"&gt;',\n        '&lt;span class=\"{cls}\"&gt;{name:trim} {value:ellipsis(10)}&lt;/span&gt;',\n    '&lt;/div&gt;',\n]);\nt.<a href=\"#/api/Ext.Template--compile\" rel=\"Ext.Template--compile\" class=\"docClass\">compile</a>();\nt.<a href=\"#/api/Ext.Template-method-append\" rel=\"Ext.Template-method-append\" class=\"docClass\">append</a>('some-element', {id: 'myid', cls: 'myclass', name: 'foo', value: 'bar'});\n   </code></pre>\n</ul></div></li>\n<li><b>multiple arguments</b> : String, Object, Array, ...\n<div class=\"sub-desc\">\nMultiple arguments will be combined with <code>join('')</code>.\n<pre><code>var t = new Ext.Template(\n    '&lt;div name=\"{id}\"&gt;',\n        '&lt;span class=\"{cls}\"&gt;{name} {value}&lt;/span&gt;',\n    '&lt;/div&gt;',\n    // a configuration object:\n    {\n        compiled: true,      // <a href=\"#/api/Ext.Template--compile\" rel=\"Ext.Template--compile\" class=\"docClass\">compile</a> immediately\n    }\n);\n   </code></pre>\n<p><b>Notes</b>:</p>\n<div class=\"mdetail-params\"><ul>\n<li>For a list of available format functions, see <a href=\"#/api/Ext.util.Format\" rel=\"Ext.util.Format\" class=\"docClass\">Ext.util.Format</a>.</li>\n<li><code>disableFormats</code> reduces <code><a href=\"#/api/Ext.Template-method-apply\" rel=\"Ext.Template-method-apply\" class=\"docClass\">apply</a></code> time\nwhen no formatting is required.</li>\n</ul></div>\n</div></li>\n</ul></div>\n\n",
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
    {
      "tagname": "cfg",
      "name": "disableFormats",
      "member": "Ext.Template",
      "type": "Boolean",
      "doc": "<p>true to disable format functions in the template. If the template doesn't contain format functions, setting\ndisableFormats to true will reduce apply time (defaults to false)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Template.js",
      "linenr": 111,
      "html_filename": "Template2.html",
      "href": "Template2.html#Ext-Template-cfg-disableFormats",
      "shortDoc": "true to disable format functions in the template. If the template doesn't contain format functions, setting\ndisableFo..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "append",
      "member": "Ext.Template",
      "doc": "<p>Applies the supplied <code>values</code> to the template and appends\nthe new node(s) to the specified <code>el</code>.</p>\n\n<p>For example usage <a href=\"#/api/Ext.Template--Template\" rel=\"Ext.Template--Template\" class=\"docClass\">see the constructor</a>.</p>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The context element</p>\n",
          "optional": false
        },
        {
          "type": "Object/Array",
          "name": "values",
          "doc": "<p>The template values. Can be an array if the params are numeric (i.e. <code>{0}</code>)\nor an object (i.e. <code>{foo: 'bar'}</code>).</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "returnElement",
          "doc": "<p>(optional) true to return an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to undefined)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLElement/Ext.core.Element",
        "doc": "<p>The new node or Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Template.js",
      "linenr": 237,
      "html_filename": "Template2.html",
      "href": "Template2.html#Ext-Template-method-append",
      "shortDoc": "Applies the supplied values to the template and appends\nthe new node(s) to the specified el.\n\nFor example usage see t..."
    },
    {
      "tagname": "method",
      "name": "apply",
      "member": "Ext.Template",
      "doc": "<p>Alias for <a href=\"#/api/Ext.Template--applyTemplate\" rel=\"Ext.Template--applyTemplate\" class=\"docClass\">applyTemplate</a>\nReturns an HTML fragment of this template with the specified <code>values</code> applied.</p>\n",
      "params": [
        {
          "type": "Object/Array",
          "name": "values",
          "doc": "<p>The template values. Can be an array if the params are numeric (i.e. <code>{0}</code>)\nor an object (i.e. <code>{foo: 'bar'}</code>).</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The HTML fragment</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Template.js",
      "linenr": 272,
      "html_filename": "Template2.html",
      "href": "Template2.html#Ext-Template-method-apply",
      "shortDoc": "<p>Alias for <a href=\"#/api/Ext.Template--applyTemplate\" rel=\"Ext.Template--applyTemplate\" class=\"docClass\">applyTemplate</a>\nReturns an HTML fragment of this template with the specified <code>values</code> applied.</p>\n"
    },
    {
      "tagname": "method",
      "name": "from",
      "member": "Ext.Template",
      "doc": "<p>Creates a template from the passed element's value (<i>display:none</i> textarea, preferred) or innerHTML.</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "el",
          "doc": "<p>A DOM element or its id</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>A configuration object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Template",
        "doc": "<p>The created template</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Template.js",
      "linenr": 59,
      "html_filename": "Template2.html",
      "href": "Template2.html#Ext-Template-method-from",
      "shortDoc": "<p>Creates a template from the passed element's value (<i>display:none</i> textarea, preferred) or innerHTML.</p>\n"
    },
    {
      "tagname": "method",
      "name": "insertAfter",
      "member": "Ext.Template",
      "doc": "<p>Applies the supplied values to the template and inserts the new node(s) after el.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The context element</p>\n",
          "optional": false
        },
        {
          "type": "Object/Array",
          "name": "values",
          "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "returnElement",
          "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to undefined)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLElement/Ext.core.Element",
        "doc": "<p>The new node or Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Template.js",
      "linenr": 226,
      "html_filename": "Template2.html",
      "href": "Template2.html#Ext-Template-method-insertAfter",
      "shortDoc": "<p>Applies the supplied values to the template and inserts the new node(s) after el.</p>\n"
    },
    {
      "tagname": "method",
      "name": "insertBefore",
      "member": "Ext.Template",
      "doc": "<p>Applies the supplied values to the template and inserts the new node(s) before el.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The context element</p>\n",
          "optional": false
        },
        {
          "type": "Object/Array",
          "name": "values",
          "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "returnElement",
          "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to undefined)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLElement/Ext.core.Element",
        "doc": "<p>The new node or Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Template.js",
      "linenr": 215,
      "html_filename": "Template2.html",
      "href": "Template2.html#Ext-Template-method-insertBefore",
      "shortDoc": "<p>Applies the supplied values to the template and inserts the new node(s) before el.</p>\n"
    },
    {
      "tagname": "method",
      "name": "insertFirst",
      "member": "Ext.Template",
      "doc": "<p>Applies the supplied values to the template and inserts the new node(s) as the first child of el.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The context element</p>\n",
          "optional": false
        },
        {
          "type": "Object/Array",
          "name": "values",
          "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "returnElement",
          "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to undefined)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLElement/Ext.core.Element",
        "doc": "<p>The new node or Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Template.js",
      "linenr": 204,
      "html_filename": "Template2.html",
      "href": "Template2.html#Ext-Template-method-insertFirst",
      "shortDoc": "<p>Applies the supplied values to the template and inserts the new node(s) as the first child of el.</p>\n"
    },
    {
      "tagname": "method",
      "name": "overwrite",
      "member": "Ext.Template",
      "doc": "<p>Applies the supplied values to the template and overwrites the content of el with the new node(s).</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The context element</p>\n",
          "optional": false
        },
        {
          "type": "Object/Array",
          "name": "values",
          "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "returnElement",
          "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to undefined)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "HTMLElement/Ext.core.Element",
        "doc": "<p>The new node or Element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Template.js",
      "linenr": 258,
      "html_filename": "Template2.html",
      "href": "Template2.html#Ext-Template-method-overwrite",
      "shortDoc": "<p>Applies the supplied values to the template and overwrites the content of el with the new node(s).</p>\n"
    },
    {
      "tagname": "method",
      "name": "set",
      "member": "Ext.Template",
      "doc": "<p>Sets the HTML used as the template and optionally compiles it.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "html",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "compile",
          "doc": "<p>(optional) True to compile the template (defaults to undefined)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.Template",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Template.js",
      "linenr": 154,
      "html_filename": "Template2.html",
      "href": "Template2.html#Ext-Template-method-set",
      "shortDoc": "<p>Sets the HTML used as the template and optionally compiles it.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Template.js",
  "linenr": 1,
  "html_filename": "Template2.html",
  "href": "Template2.html#Ext-Template",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.XTemplate"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});