Ext.data.JsonP.Ext_util_Inflector({
  "tagname": "class",
  "name": "Ext.util.Inflector",
  "doc": "<p>General purpose inflector class that <a href=\"#/api/Ext.util.Inflector-method-pluralize\" rel=\"Ext.util.Inflector-method-pluralize\" class=\"docClass\">pluralizes</a>, <a href=\"#/api/Ext.util.Inflector-method-singularize\" rel=\"Ext.util.Inflector-method-singularize\" class=\"docClass\">singularizes</a> and \n<a href=\"#/api/Ext.util.Inflector-method-ordinalize\" rel=\"Ext.util.Inflector-method-ordinalize\" class=\"docClass\">ordinalizes</a> words. Sample usage:</p>\n\n\n\n\n<pre><code>//turning singular words into plurals\nExt.util.Inflector.pluralize('word'); //'words'\nExt.util.Inflector.pluralize('person'); //'people'\nExt.util.Inflector.pluralize('sheep'); //'sheep'\n\n//turning plurals into singulars\nExt.util.Inflector.singularize('words'); //'word'\nExt.util.Inflector.singularize('people'); //'person'\nExt.util.Inflector.singularize('sheep'); //'sheep'\n\n//ordinalizing numbers\nExt.util.Inflector.ordinalize(11); //\"11th\"\nExt.util.Inflector.ordinalize(21); //\"21th\"\nExt.util.Inflector.ordinalize(1043); //\"1043rd\"\n</code></pre>\n\n\n\n\n<p><u>Customization</u></p>\n\n\n\n\n<p>The Inflector comes with a default set of US English pluralization rules. These can be augmented with additional\nrules if the default rules do not meet your application's requirements, or swapped out entirely for other languages.\nHere is how we might add a rule that pluralizes \"ox\" to \"oxen\":</p>\n\n\n\n\n<pre><code>Ext.util.Inflector.plural(/^(ox)$/i, \"$1en\");\n</code></pre>\n\n\n\n\n<p>Each rule consists of two items - a regular expression that matches one or more rules, and a replacement string.\nIn this case, the regular expression will only match the string \"ox\", and will replace that match with \"oxen\". \nHere's how we could add the inverse rule:</p>\n\n\n\n\n<pre><code>Ext.util.Inflector.singular(/^(ox)en$/i, \"$1\");\n</code></pre>\n\n\n\n\n<p>Note that the ox/oxen rules are present by default.</p>\n\n",
  "extends": "Object",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "classify",
      "member": "Ext.util.Inflector",
      "doc": "<p>Returns the correct <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> name for a given string. Mostly used internally by the data\npackage</p>\n",
      "params": [
        {
          "type": "String",
          "name": "word",
          "doc": "<p>The word to classify</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The classified version of the word</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Inflector.js",
      "linenr": 237,
      "html_filename": "Inflector.html",
      "href": "Inflector.html#Ext-util-Inflector-method-classify",
      "shortDoc": "<p>Returns the correct <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> name for a given string. Mostly used internally by the data\npackage</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearPlurals",
      "member": "Ext.util.Inflector",
      "doc": "<p>Removes all registered pluralization rules</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Inflector.js",
      "linenr": 169,
      "html_filename": "Inflector.html",
      "href": "Inflector.html#Ext-util-Inflector-method-clearPlurals",
      "shortDoc": "<p>Removes all registered pluralization rules</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearSingulars",
      "member": "Ext.util.Inflector",
      "doc": "<p>Removes all registered singularization rules</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Inflector.js",
      "linenr": 162,
      "html_filename": "Inflector.html",
      "href": "Inflector.html#Ext-util-Inflector-method-clearSingulars",
      "shortDoc": "<p>Removes all registered singularization rules</p>\n"
    },
    {
      "tagname": "method",
      "name": "isTransnumeral",
      "member": "Ext.util.Inflector",
      "doc": "<p>Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. sheep, fish)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "word",
          "doc": "<p>The word to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the word is transnumeral</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Inflector.js",
      "linenr": 176,
      "html_filename": "Inflector.html",
      "href": "Inflector.html#Ext-util-Inflector-method-isTransnumeral",
      "shortDoc": "<p>Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. sheep, fish)</p>\n"
    },
    {
      "tagname": "method",
      "name": "ordinalize",
      "member": "Ext.util.Inflector",
      "doc": "<p>Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. 21 -> 21st, 22 -> 22nd, 23 -> 23rd, 24 -> 24th etc</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "number",
          "doc": "<p>The number to ordinalize</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The ordinalized number</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Inflector.js",
      "linenr": 247,
      "html_filename": "Inflector.html",
      "href": "Inflector.html#Ext-util-Inflector-method-ordinalize",
      "shortDoc": "Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber...."
    },
    {
      "tagname": "method",
      "name": "plural",
      "member": "Ext.util.Inflector",
      "doc": "<p>Adds a new pluralization rule to the Inflector. See the intro docs for more information</p>\n",
      "params": [
        {
          "type": "RegExp",
          "name": "matcher",
          "doc": "<p>The matcher regex</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "replacer",
          "doc": "<p>The replacement string, which can reference matches from the matcher argument</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Inflector.js",
      "linenr": 153,
      "html_filename": "Inflector.html",
      "href": "Inflector.html#Ext-util-Inflector-method-plural",
      "shortDoc": "<p>Adds a new pluralization rule to the Inflector. See the intro docs for more information</p>\n"
    },
    {
      "tagname": "method",
      "name": "pluralize",
      "member": "Ext.util.Inflector",
      "doc": "<p>Returns the pluralized form of a word (e.g. Ext.util.Inflector.pluralize('word') returns 'words')</p>\n",
      "params": [
        {
          "type": "String",
          "name": "word",
          "doc": "<p>The word to pluralize</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The pluralized form of the word</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Inflector.js",
      "linenr": 185,
      "html_filename": "Inflector.html",
      "href": "Inflector.html#Ext-util-Inflector-method-pluralize",
      "shortDoc": "<p>Returns the pluralized form of a word (e.g. Ext.util.Inflector.pluralize('word') returns 'words')</p>\n"
    },
    {
      "tagname": "method",
      "name": "singular",
      "member": "Ext.util.Inflector",
      "doc": "<p>Adds a new singularization rule to the Inflector. See the intro docs for more information</p>\n",
      "params": [
        {
          "type": "RegExp",
          "name": "matcher",
          "doc": "<p>The matcher regex</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "replacer",
          "doc": "<p>The replacement string, which can reference matches from the matcher argument</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Inflector.js",
      "linenr": 144,
      "html_filename": "Inflector.html",
      "href": "Inflector.html#Ext-util-Inflector-method-singular",
      "shortDoc": "<p>Adds a new singularization rule to the Inflector. See the intro docs for more information</p>\n"
    },
    {
      "tagname": "method",
      "name": "singularize",
      "member": "Ext.util.Inflector",
      "doc": "<p>Returns the singularized form of a word (e.g. Ext.util.Inflector.singularize('words') returns 'word')</p>\n",
      "params": [
        {
          "type": "String",
          "name": "word",
          "doc": "<p>The word to singularize</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The singularized form of the word</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Inflector.js",
      "linenr": 211,
      "html_filename": "Inflector.html",
      "href": "Inflector.html#Ext-util-Inflector-method-singularize",
      "shortDoc": "<p>Returns the singularized form of a word (e.g. Ext.util.Inflector.singularize('words') returns 'word')</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Inflector.js",
  "linenr": 1,
  "html_filename": "Inflector.html",
  "href": "Inflector.html#Ext-util-Inflector",
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