Ext.data.JsonP.Ext_util_Inflector({
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
        "href": "Inflector.html#Ext-util-Inflector-method-classify",
        "shortDoc": "Returns the correct Model name for a given string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The word to classify</p>\n",
            "name": "word"
          }
        ],
        "name": "classify",
        "owner": "Ext.util.Inflector",
        "doc": "<p>Returns the correct <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> name for a given string. Mostly used internally by the data\npackage</p>\n",
        "linenr": 237,
        "return": {
          "type": "String",
          "doc": "<p>The classified version of the word</p>\n"
        },
        "html_filename": "Inflector.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Inflector.html#Ext-util-Inflector-method-clearPlurals",
        "shortDoc": "Removes all registered pluralization rules ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "params": [

        ],
        "name": "clearPlurals",
        "owner": "Ext.util.Inflector",
        "doc": "<p>Removes all registered pluralization rules</p>\n",
        "linenr": 169,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Inflector.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Inflector.html#Ext-util-Inflector-method-clearSingulars",
        "shortDoc": "Removes all registered singularization rules ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "params": [

        ],
        "name": "clearSingulars",
        "owner": "Ext.util.Inflector",
        "doc": "<p>Removes all registered singularization rules</p>\n",
        "linenr": 162,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Inflector.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Inflector.html#Ext-util-Inflector-method-isTransnumeral",
        "shortDoc": "Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The word to test</p>\n",
            "name": "word"
          }
        ],
        "name": "isTransnumeral",
        "owner": "Ext.util.Inflector",
        "doc": "<p>Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. sheep, fish)</p>\n",
        "linenr": 176,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the word is transnumeral</p>\n"
        },
        "html_filename": "Inflector.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Inflector.html#Ext-util-Inflector-method-ordinalize",
        "shortDoc": "Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number to ordinalize</p>\n",
            "name": "number"
          }
        ],
        "name": "ordinalize",
        "owner": "Ext.util.Inflector",
        "doc": "<p>Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. 21 -> 21st, 22 -> 22nd, 23 -> 23rd, 24 -> 24th etc</p>\n",
        "linenr": 247,
        "return": {
          "type": "String",
          "doc": "<p>The ordinalized number</p>\n"
        },
        "html_filename": "Inflector.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Inflector.html#Ext-util-Inflector-method-plural",
        "shortDoc": "Adds a new pluralization rule to the Inflector. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "params": [
          {
            "type": "RegExp",
            "optional": false,
            "doc": "<p>The matcher regex</p>\n",
            "name": "matcher"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The replacement string, which can reference matches from the matcher argument</p>\n",
            "name": "replacer"
          }
        ],
        "name": "plural",
        "owner": "Ext.util.Inflector",
        "doc": "<p>Adds a new pluralization rule to the Inflector. See the intro docs for more information</p>\n",
        "linenr": 153,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Inflector.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Inflector.html#Ext-util-Inflector-method-pluralize",
        "shortDoc": "Returns the pluralized form of a word (e.g. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The word to pluralize</p>\n",
            "name": "word"
          }
        ],
        "name": "pluralize",
        "owner": "Ext.util.Inflector",
        "doc": "<p>Returns the pluralized form of a word (e.g. Ext.util.Inflector.pluralize('word') returns 'words')</p>\n",
        "linenr": 185,
        "return": {
          "type": "String",
          "doc": "<p>The pluralized form of the word</p>\n"
        },
        "html_filename": "Inflector.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Inflector.html#Ext-util-Inflector-method-singular",
        "shortDoc": "Adds a new singularization rule to the Inflector. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "params": [
          {
            "type": "RegExp",
            "optional": false,
            "doc": "<p>The matcher regex</p>\n",
            "name": "matcher"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The replacement string, which can reference matches from the matcher argument</p>\n",
            "name": "replacer"
          }
        ],
        "name": "singular",
        "owner": "Ext.util.Inflector",
        "doc": "<p>Adds a new singularization rule to the Inflector. See the intro docs for more information</p>\n",
        "linenr": 144,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Inflector.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Inflector.html#Ext-util-Inflector-method-singularize",
        "shortDoc": "Returns the singularized form of a word (e.g. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The word to singularize</p>\n",
            "name": "word"
          }
        ],
        "name": "singularize",
        "owner": "Ext.util.Inflector",
        "doc": "<p>Returns the singularized form of a word (e.g. Ext.util.Inflector.singularize('words') returns 'word')</p>\n",
        "linenr": 211,
        "return": {
          "type": "String",
          "doc": "<p>The singularized form of the word</p>\n"
        },
        "html_filename": "Inflector.html"
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
  "href": "Inflector.html#Ext-util-Inflector",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.util.Inflector",
  "doc": "<p>General purpose inflector class that <a href=\"#/api/Ext.util.Inflector-method-pluralize\" rel=\"Ext.util.Inflector-method-pluralize\" class=\"docClass\">pluralizes</a>, <a href=\"#/api/Ext.util.Inflector-method-singularize\" rel=\"Ext.util.Inflector-method-singularize\" class=\"docClass\">singularizes</a> and \n<a href=\"#/api/Ext.util.Inflector-method-ordinalize\" rel=\"Ext.util.Inflector-method-ordinalize\" class=\"docClass\">ordinalizes</a> words. Sample usage:</p>\n\n\n\n\n<pre><code>//turning singular words into plurals\nExt.util.Inflector.pluralize('word'); //'words'\nExt.util.Inflector.pluralize('person'); //'people'\nExt.util.Inflector.pluralize('sheep'); //'sheep'\n\n//turning plurals into singulars\nExt.util.Inflector.singularize('words'); //'word'\nExt.util.Inflector.singularize('people'); //'person'\nExt.util.Inflector.singularize('sheep'); //'sheep'\n\n//ordinalizing numbers\nExt.util.Inflector.ordinalize(11); //\"11th\"\nExt.util.Inflector.ordinalize(21); //\"21th\"\nExt.util.Inflector.ordinalize(1043); //\"1043rd\"\n</code></pre>\n\n\n\n\n<p><u>Customization</u></p>\n\n\n\n\n<p>The Inflector comes with a default set of US English pluralization rules. These can be augmented with additional\nrules if the default rules do not meet your application's requirements, or swapped out entirely for other languages.\nHere is how we might add a rule that pluralizes \"ox\" to \"oxen\":</p>\n\n\n\n\n<pre><code>Ext.util.Inflector.plural(/^(ox)$/i, \"$1en\");\n</code></pre>\n\n\n\n\n<p>Each rule consists of two items - a regular expression that matches one or more rules, and a replacement string.\nIn this case, the regular expression will only match the string \"ox\", and will replace that match with \"oxen\". \nHere's how we could add the inverse rule:</p>\n\n\n\n\n<pre><code>Ext.util.Inflector.singular(/^(ox)en$/i, \"$1\");\n</code></pre>\n\n\n\n\n<p>Note that the ox/oxen rules are present by default.</p>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Inflector.html",
  "extends": "Object"
});