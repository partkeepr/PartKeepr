Ext.data.JsonP.Ext_Version({
  "tagname": "class",
  "name": "Ext.Version",
  "doc": "<p>A utility class that wrap around a string version number and provide convenient\nmethod to perform comparison. See also: <a href=\"#/api/Ext.Version-method-compare\" rel=\"Ext.Version-method-compare\" class=\"docClass\">compare</a>. Example:</p>\n\n<pre><code>var version = new Ext.Version('1.0.2beta');\nconsole.log(\"Version is \" + version); // Version is 1.0.2beta\n\nconsole.log(version.getMajor()); // 1\nconsole.log(version.getMinor()); // 0\nconsole.log(version.getPatch()); // 2\nconsole.log(version.getBuild()); // 0\nconsole.log(version.getRelease()); // beta\n\nconsole.log(version.isGreaterThan('1.0.1')); // True\nconsole.log(version.isGreaterThan('1.0.2alpha')); // True\nconsole.log(version.isGreaterThan('1.0.2RC')); // False\nconsole.log(version.isGreaterThan('1.0.2')); // False\nconsole.log(version.isLessThan('1.0.2')); // True\n\nconsole.log(version.match(1.0)); // True\nconsole.log(version.match('1.0.2')); // True\n</code></pre>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "singleton": false,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "Version",
      "member": "Ext.Version",
      "doc": "\n",
      "params": [
        {
          "type": "String/Number",
          "name": "version",
          "doc": "<p>The version number in the follow standard format: major[.minor[.patch[.build[release]]]]\nExamples: 1.0 or 1.2.3beta or 1.2.3.4RC</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "version",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Version",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 35,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "compare",
      "member": "Ext.Version",
      "doc": "<p>Compare 2 specified versions, starting from left to right. If a part contains special version strings,\nthey are handled in the following order:\n'dev' &lt; 'alpha' = 'a' &lt; 'beta' = 'b' &lt; 'RC' = 'rc' &lt; '#' &lt; 'pl' = 'p' &lt; 'anything else'</p>\n",
      "params": [
        {
          "type": "String",
          "name": "current",
          "doc": "<p>The current version to compare to</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "target",
          "doc": "<p>The target version to compare to</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>Returns -1 if the current version is smaller than the target version, 1 if greater, and 0 if they're equivalent</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 214,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-compare",
      "shortDoc": "Compare 2 specified versions, starting from left to right. If a part contains special version strings,\nthey are handl..."
    },
    {
      "tagname": "method",
      "name": "deprecate",
      "member": "Ext.Version",
      "doc": "<p>Create a closure for deprecated code.</p>\n\n<pre><code>// This means Ext.oldMethod is only supported in 4.0.0beta and older.\n// If Ext.getVersion('extjs') returns a version that is later than '4.0.0beta', for example '4.0.0RC',\n// the closure will not be invoked\nExt.deprecate('extjs', '4.0.0beta', function() {\n    Ext.oldMethod = Ext.newMethod;\n\n    ...\n});\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "packageName",
          "doc": "<p>The package name</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "since",
          "doc": "<p>The last version before it's deprecated</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "closure",
          "doc": "<p>The callback function to be executed with the specified version is less than the current version</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The execution scope (<tt>this</tt>) if the closure</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 285,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-deprecate",
      "shortDoc": "Create a closure for deprecated code.\n\n// This means Ext.oldMethod is only supported in 4.0.0beta and older.\n// If Ex..."
    },
    {
      "tagname": "method",
      "name": "equals",
      "member": "Ext.Version",
      "doc": "<p>Returns whether this version equals to the supplied argument</p>\n",
      "params": [
        {
          "type": "String/Number",
          "name": "target",
          "doc": "<p>The version to compare with</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this version equals to the target, false otherwise</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 146,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-equals",
      "shortDoc": "<p>Returns whether this version equals to the supplied argument</p>\n"
    },
    {
      "tagname": "method",
      "name": "getBuild",
      "member": "Ext.Version",
      "doc": "<p>Returns the build component value</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>build</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 112,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-getBuild",
      "shortDoc": "<p>Returns the build component value</p>\n"
    },
    {
      "tagname": "method",
      "name": "getComponentValue",
      "member": "Ext.Version",
      "doc": "<p>Converts a version component to a comparable value</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to convert</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 203,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-getComponentValue",
      "shortDoc": "<p>Converts a version component to a comparable value</p>\n"
    },
    {
      "tagname": "method",
      "name": "getMajor",
      "member": "Ext.Version",
      "doc": "<p>Returns the major component value</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>major</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 88,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-getMajor",
      "shortDoc": "<p>Returns the major component value</p>\n"
    },
    {
      "tagname": "method",
      "name": "getMinor",
      "member": "Ext.Version",
      "doc": "<p>Returns the minor component value</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>minor</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 96,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-getMinor",
      "shortDoc": "<p>Returns the minor component value</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPatch",
      "member": "Ext.Version",
      "doc": "<p>Returns the patch component value</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>patch</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 104,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-getPatch",
      "shortDoc": "<p>Returns the patch component value</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRelease",
      "member": "Ext.Version",
      "doc": "<p>Returns the release component value</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>release</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 120,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-getRelease",
      "shortDoc": "<p>Returns the release component value</p>\n"
    },
    {
      "tagname": "method",
      "name": "getShortVersion",
      "member": "Ext.Version",
      "doc": "<p>Returns shortVersion version without dots and release</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 180,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-getShortVersion",
      "shortDoc": "<p>Returns shortVersion version without dots and release</p>\n"
    },
    {
      "tagname": "method",
      "name": "getVersion",
      "member": "Ext.Version",
      "doc": "<p>Get the version number of the supplied package name; will return the last registered version\n(last Ext.setVersion call) if there's no package name given.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "packageName",
          "doc": "<p>(Optional) The package name, for example: 'core', 'touch', 'extjs'</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Version",
        "doc": "<p>The version</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 270,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-getVersion",
      "shortDoc": "Get the version number of the supplied package name; will return the last registered version\n(last Ext.setVersion cal..."
    },
    {
      "tagname": "method",
      "name": "isGreaterThan",
      "member": "Ext.Version",
      "doc": "<p>Returns whether this version if greater than the supplied argument</p>\n",
      "params": [
        {
          "type": "String/Number",
          "name": "target",
          "doc": "<p>The version to compare with</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this version if greater than the target, false otherwise</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 128,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-isGreaterThan",
      "shortDoc": "<p>Returns whether this version if greater than the supplied argument</p>\n"
    },
    {
      "tagname": "method",
      "name": "isLessThan",
      "member": "Ext.Version",
      "doc": "<p>Returns whether this version if smaller than the supplied argument</p>\n",
      "params": [
        {
          "type": "String/Number",
          "name": "target",
          "doc": "<p>The version to compare with</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this version if smaller than the target, false otherwise</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 137,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-isLessThan",
      "shortDoc": "<p>Returns whether this version if smaller than the supplied argument</p>\n"
    },
    {
      "tagname": "method",
      "name": "match",
      "member": "Ext.Version",
      "doc": "<p>Returns whether this version matches the supplied argument. Example:</p>\n\n<pre><code>var version = new Ext.Version('1.0.2beta');\nconsole.log(version.match(1)); // True\nconsole.log(version.match(1.0)); // True\nconsole.log(version.match('1.0.2')); // True\nconsole.log(version.match('1.0.2RC')); // False\n</code></pre>\n\n",
      "params": [
        {
          "type": "String/Number",
          "name": "target",
          "doc": "<p>The version to compare with</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if this version matches the target, false otherwise</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 155,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-match",
      "shortDoc": "Returns whether this version matches the supplied argument. Example:\n\nvar version = new Ext.Version('1.0.2beta');\ncon..."
    },
    {
      "tagname": "method",
      "name": "setVersion",
      "member": "Ext.Version",
      "doc": "<p>Set version number for the given package name.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "packageName",
          "doc": "<p>The package name, for example: 'core', 'touch', 'extjs'</p>\n",
          "optional": false
        },
        {
          "type": "String/Ext.Version",
          "name": "version",
          "doc": "<p>The version, for example: '1.2.3alpha', '2.4.0-dev'</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 256,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-setVersion",
      "shortDoc": "<p>Set version number for the given package name.</p>\n"
    },
    {
      "tagname": "method",
      "name": "toArray",
      "member": "Ext.Version",
      "doc": "<p>Returns this format: [major, minor, patch, build, release]. Useful for comparison</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
      "linenr": 172,
      "html_filename": "Version.html",
      "href": "Version.html#Ext-Version-method-toArray",
      "shortDoc": "<p>Returns this format: [major, minor, patch, build, release]. Useful for comparison</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/version/Version.js",
  "linenr": 1,
  "html_filename": "Version.html",
  "href": "Version.html#Ext-Version",
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