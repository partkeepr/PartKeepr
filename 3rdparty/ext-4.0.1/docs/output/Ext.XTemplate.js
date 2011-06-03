Ext.data.JsonP.Ext_XTemplate({
  "tagname": "class",
  "name": "Ext.XTemplate",
  "doc": "<p>A template class that supports advanced functionality like:<div class=\"mdetail-params\"><ul>\n<li>Autofilling arrays using templates and sub-templates</li>\n<li>Conditional processing with basic comparison operators</li>\n<li>Basic math function support</li>\n<li>Execute arbitrary inline code with special built-in template variables</li>\n<li>Custom member functions</li>\n<li>Many special tags and built-in operators that aren't defined as part of\nthe API, but are supported in the templates that can be created</li>\n</ul></div></p>\n\n\n<p>XTemplate provides the templating mechanism built into:<div class=\"mdetail-params\"><ul>\n<li><a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">Ext.view.View</a></li>\n</ul></div></p>\n\n\n<p>The <a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> describes\nthe acceptable parameters to pass to the constructor. The following\nexamples demonstrate all of the supported features.</p></p>\n\n<div class=\"mdetail-params\"><ul>\n\n<li><b><u>Sample Data</u></b>\n<div class=\"sub-desc\">\n<p>This is the data object used for reference in each code example:</p>\n<pre><code>var data = {\nname: 'Tommy Maintz',\ntitle: 'Lead Developer',\ncompany: 'Sencha Inc.',\nemail: 'tommy@sencha.com',\naddress: '5 Cups Drive',\ncity: 'Palo Alto',\nstate: 'CA',\nzip: '44102',\ndrinks: ['Coffee', 'Soda', 'Water'],\nkids: [{\n        name: 'Joshua',\n        age:3\n    },{\n        name: 'Matthew',\n        age:2\n    },{\n        name: 'Solomon',\n        age:0\n}]\n};\n </code></pre>\n</div>\n</li>\n\n\n<li><b><u>Auto filling of arrays</u></b>\n<div class=\"sub-desc\">\n<p>The <b><tt>tpl</tt></b> tag and the <b><tt>for</tt></b> operator are used\nto process the provided data object:\n<ul>\n<li>If the value specified in <tt>for</tt> is an array, it will auto-fill,\nrepeating the template block inside the <tt>tpl</tt> tag for each item in the\narray.</li>\n<li>If <tt>for=\".\"</tt> is specified, the data object provided is examined.</li>\n<li>While processing an array, the special variable <tt>{#}</tt>\nwill provide the current array index + 1 (starts at 1, not 0).</li>\n</ul>\n</p>\n<pre><code>&lt;tpl <b>for</b>=\".\">...&lt;/tpl>       // loop through array at root node\n&lt;tpl <b>for</b>=\"foo\">...&lt;/tpl>     // loop through array at foo node\n&lt;tpl <b>for</b>=\"foo.bar\">...&lt;/tpl> // loop through array at foo.bar node\n </code></pre>\nUsing the sample data above:\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Kids: ',\n    '&lt;tpl <b>for</b>=\".\">',       // process the data.kids node\n        '&lt;p>{#}. {name}&lt;/p>',  // use current array index to autonumber\n    '&lt;/tpl>&lt;/p>'\n);\ntpl.overwrite(panel.body, data.kids); // pass the kids property of the data object\n </code></pre>\n<p>An example illustrating how the <b><tt>for</tt></b> property can be leveraged\nto access specified members of the provided data object to populate the template:</p>\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Title: {title}&lt;/p>',\n    '&lt;p>Company: {company}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl <b>for=\"kids\"</b>>',     // interrogate the kids property within the data\n        '&lt;p>{name}&lt;/p>',\n    '&lt;/tpl>&lt;/p>'\n);\ntpl.overwrite(panel.body, data);  // pass the root node of the data object\n </code></pre>\n<p>Flat arrays that contain values (and not objects) can be auto-rendered\nusing the special <b><tt>{.}</tt></b> variable inside a loop.  This variable\nwill represent the value of the array at the current index:</p>\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>{name}\\&#39;s favorite beverages:&lt;/p>',\n    '&lt;tpl for=\"drinks\">',\n        '&lt;div> - {.}&lt;/div>',\n    '&lt;/tpl>'\n);\ntpl.overwrite(panel.body, data);\n </code></pre>\n<p>When processing a sub-template, for example while looping through a child array,\nyou can access the parent object's members via the <b><tt>parent</tt></b> object:</p>\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl for=\"kids\">',\n        '&lt;tpl if=\"age &amp;gt; 1\">',\n            '&lt;p>{name}&lt;/p>',\n            '&lt;p>Dad: {<b>parent</b>.name}&lt;/p>',\n        '&lt;/tpl>',\n    '&lt;/tpl>&lt;/p>'\n);\ntpl.overwrite(panel.body, data);\n </code></pre>\n</div>\n</li>\n\n\n<li><b><u>Conditional processing with basic comparison operators</u></b>\n<div class=\"sub-desc\">\n<p>The <b><tt>tpl</tt></b> tag and the <b><tt>if</tt></b> operator are used\nto provide conditional checks for deciding whether or not to render specific\nparts of the template. Notes:<div class=\"sub-desc\"><ul>\n<li>Double quotes must be encoded if used within the conditional</li>\n<li>There is no <tt>else</tt> operator &mdash; if needed, two opposite\n<tt>if</tt> statements should be used.</li>\n</ul></div>\n<pre><code>&lt;tpl if=\"age &gt; 1 &amp;&amp; age &lt; 10\">Child&lt;/tpl>\n&lt;tpl if=\"age >= 10 && age < 18\">Teenager&lt;/tpl>\n&lt;tpl <b>if</b>=\"this.isGirl(name)\">...&lt;/tpl>\n&lt;tpl <b>if</b>=\"id==\\'download\\'\">...&lt;/tpl>\n&lt;tpl <b>if</b>=\"needsIcon\">&lt;img src=\"{icon}\" class=\"{iconCls}\"/>&lt;/tpl>\n// no good:\n&lt;tpl if=\"name == \"Tommy\"\">Hello&lt;/tpl>\n// encode &#34; if it is part of the condition, e.g.\n&lt;tpl if=\"name == &#38;quot;Tommy&#38;quot;\">Hello&lt;/tpl>\n</code></pre>\nUsing the sample data above:\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl for=\"kids\">',\n        '&lt;tpl if=\"age &amp;gt; 1\">',\n            '&lt;p>{name}&lt;/p>',\n        '&lt;/tpl>',\n    '&lt;/tpl>&lt;/p>'\n);\ntpl.overwrite(panel.body, data);\n </code></pre>\n</div>\n</li>\n\n\n<li><b><u>Basic math support</u></b>\n<div class=\"sub-desc\">\n<p>The following basic math operators may be applied directly on numeric\ndata values:</p>\n<pre>+ - * /\n</pre>\nFor example:\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl for=\"kids\">',\n        '&lt;tpl if=\"age &amp;gt; 1\">',  // <-- Note that the &gt; is encoded\n            '&lt;p>{#}: {name}&lt;/p>',  // <-- Auto-number each item\n            '&lt;p>In 5 Years: {age+5}&lt;/p>',  // <-- Basic math\n            '&lt;p>Dad: {parent.name}&lt;/p>',\n        '&lt;/tpl>',\n    '&lt;/tpl>&lt;/p>'\n);\ntpl.overwrite(panel.body, data);\n </code></pre>\n</div>\n</li>\n\n\n<li><b><u>Execute arbitrary inline code with special built-in template variables</u></b>\n<div class=\"sub-desc\">\n<p>Anything between <code>{[ ... ]}</code> is considered code to be executed\nin the scope of the template. There are some special variables available in that code:\n<ul>\n<li><b><tt>values</tt></b>: The values in the current scope. If you are using\nscope changing sub-templates, you can change what <tt>values</tt> is.</li>\n<li><b><tt>parent</tt></b>: The scope (values) of the ancestor template.</li>\n<li><b><tt>xindex</tt></b>: If you are in a looping template, the index of the\nloop you are in (1-based).</li>\n<li><b><tt>xcount</tt></b>: If you are in a looping template, the total length\nof the array you are looping.</li>\n</ul>\nThis example demonstrates basic row striping using an inline code block and the\n<tt>xindex</tt> variable:</p>\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Company: {[values.company.toUpperCase() + \", \" + values.title]}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl for=\"kids\">',\n        '&lt;div class=\"{[xindex % 2 === 0 ? \"even\" : \"odd\"]}\">',\n        '{name}',\n        '&lt;/div>',\n    '&lt;/tpl>&lt;/p>'\n );\ntpl.overwrite(panel.body, data);\n </code></pre>\n</div>\n</li>\n\n<li><b><u>Template member functions</u></b>\n<div class=\"sub-desc\">\n<p>One or more member functions can be specified in a configuration\nobject passed into the XTemplate constructor for more complex processing:</p>\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl for=\"kids\">',\n        '&lt;tpl if=\"this.isGirl(name)\">',\n            '&lt;p>Girl: {name} - {age}&lt;/p>',\n        '&lt;/tpl>',\n         // use opposite if statement to simulate 'else' processing:\n        '&lt;tpl if=\"this.isGirl(name) == false\">',\n            '&lt;p>Boy: {name} - {age}&lt;/p>',\n        '&lt;/tpl>',\n        '&lt;tpl if=\"this.isBaby(age)\">',\n            '&lt;p>{name} is a baby!&lt;/p>',\n        '&lt;/tpl>',\n    '&lt;/tpl>&lt;/p>',\n    {\n        // XTemplate configuration:\n        compiled: true,\n        // member functions:\n        isGirl: function(name){\n           return name == 'Sara Grace';\n        },\n        isBaby: function(age){\n           return age < 1;\n        }\n    }\n);\ntpl.overwrite(panel.body, data);\n </code></pre>\n</div>\n</li>\n\n</ul></div>\n\n",
  "extends": "Ext.Template",
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
      "name": "codeRe",
      "member": "Ext.XTemplate",
      "type": "RegExp",
      "doc": "<p>The regular expression used to match code variables (default: matches <tt>{[expression]}</tt>).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/XTemplate.js",
      "linenr": 359,
      "html_filename": "XTemplate.html",
      "href": "XTemplate.html#Ext-XTemplate-cfg-codeRe"
    },
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
      "doc": "<p>Applies the supplied <code>values</code> to the template and appends\nthe new node(s) to the specified <code>el</code>.</p>\n\n<p>For example usage <a href=\"#/api/Ext.XTemplate--Template\" rel=\"Ext.XTemplate--Template\" class=\"docClass\">see the constructor</a>.</p>\n\n",
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
      "member": "Ext.XTemplate",
      "doc": "<p>Alias for <a href=\"#/api/Ext.XTemplate-method-applyTemplate\" rel=\"Ext.XTemplate-method-applyTemplate\" class=\"docClass\">applyTemplate</a>\nReturns an HTML fragment of this template with the specified values applied.</p>\n",
      "params": [
        {
          "type": "Object/Array",
          "name": "values",
          "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The HTML fragment</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/XTemplate.js",
      "linenr": 488,
      "html_filename": "XTemplate.html",
      "href": "XTemplate.html#Ext-XTemplate-method-apply",
      "shortDoc": "<p>Alias for <a href=\"#/api/Ext.XTemplate-method-applyTemplate\" rel=\"Ext.XTemplate-method-applyTemplate\" class=\"docClass\">applyTemplate</a>\nReturns an HTML fragment of this template with the specified values applied.</p>\n"
    },
    {
      "tagname": "method",
      "name": "applyTemplate",
      "member": "Ext.XTemplate",
      "doc": "<p>Returns an HTML fragment of this template with the specified values applied.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "values",
          "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The HTML fragment</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/XTemplate.js",
      "linenr": 471,
      "html_filename": "XTemplate.html",
      "href": "XTemplate.html#Ext-XTemplate-method-applyTemplate",
      "shortDoc": "<p>Returns an HTML fragment of this template with the specified values applied.</p>\n"
    },
    {
      "tagname": "method",
      "name": "compile",
      "member": "Ext.XTemplate",
      "doc": "<p>Compile the template to a function for optimized performance.  Recommended if the template will be used frequently.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Function",
        "doc": "<p>The compiled function</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/XTemplate.js",
      "linenr": 480,
      "html_filename": "XTemplate.html",
      "href": "XTemplate.html#Ext-XTemplate-method-compile",
      "shortDoc": "<p>Compile the template to a function for optimized performance.  Recommended if the template will be used frequently.</p>\n"
    },
    {
      "tagname": "method",
      "name": "from",
      "member": "Ext.XTemplate",
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
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Template",
        "doc": "<p>The created template</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/XTemplate.js",
      "linenr": 268,
      "html_filename": "XTemplate.html",
      "href": "XTemplate.html#Ext-XTemplate-method-from",
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
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/XTemplate.js",
  "linenr": 1,
  "html_filename": "XTemplate.html",
  "href": "XTemplate.html#Ext-XTemplate",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.Template"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});