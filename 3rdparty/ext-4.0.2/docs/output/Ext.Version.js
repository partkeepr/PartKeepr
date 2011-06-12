Ext.data.JsonP.Ext_Version({
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
        "href": "Version.html#Ext-Version-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": " ...",
        "static": false,
        "params": [
          {
            "type": "String/Number",
            "optional": false,
            "doc": "<p>The version number in the follow standard format: major[.minor[.patch[.build[release]]]]\nExamples: 1.0 or 1.2.3beta or 1.2.3.4RC</p>\n",
            "name": "version"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "doc": "\n",
        "owner": "Ext.Version",
        "name": "Version",
        "html_filename": "Version.html",
        "return": {
          "type": "Ext.Version",
          "doc": "<p>this</p>\n"
        },
        "linenr": 35
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-compare",
        "shortDoc": "Compare 2 specified versions, starting from left to right. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The current version to compare to</p>\n",
            "name": "current"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The target version to compare to</p>\n",
            "name": "target"
          }
        ],
        "name": "compare",
        "owner": "Ext.Version",
        "doc": "<p>Compare 2 specified versions, starting from left to right. If a part contains special version strings,\nthey are handled in the following order:\n'dev' &lt; 'alpha' = 'a' &lt; 'beta' = 'b' &lt; 'RC' = 'rc' &lt; '#' &lt; 'pl' = 'p' &lt; 'anything else'</p>\n",
        "linenr": 212,
        "return": {
          "type": "Number",
          "doc": "<p>Returns -1 if the current version is smaller than the target version, 1 if greater, and 0 if they're equivalent</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-deprecate",
        "shortDoc": "Create a closure for deprecated code. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The package name</p>\n",
            "name": "packageName"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The last version before it's deprecated</p>\n",
            "name": "since"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The callback function to be executed with the specified version is less than the current version</p>\n",
            "name": "closure"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The execution scope (<tt>this</tt>) if the closure</p>\n",
            "name": "scope"
          }
        ],
        "name": "deprecate",
        "owner": "Ext.Version",
        "doc": "<p>Create a closure for deprecated code.</p>\n\n<pre><code>// This means Ext.oldMethod is only supported in 4.0.0beta and older.\n// If Ext.getVersion('extjs') returns a version that is later than '4.0.0beta', for example '4.0.0RC',\n// the closure will not be invoked\nExt.deprecate('extjs', '4.0.0beta', function() {\n    Ext.oldMethod = Ext.newMethod;\n\n    ...\n});\n</code></pre>\n",
        "linenr": 283,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-equals",
        "shortDoc": "Returns whether this version equals to the supplied argument ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [
          {
            "type": "String/Number",
            "optional": false,
            "doc": "<p>The version to compare with</p>\n",
            "name": "target"
          }
        ],
        "name": "equals",
        "owner": "Ext.Version",
        "doc": "<p>Returns whether this version equals to the supplied argument</p>\n",
        "linenr": 144,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this version equals to the target, false otherwise</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-getBuild",
        "shortDoc": "Returns the build component value ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [

        ],
        "name": "getBuild",
        "owner": "Ext.Version",
        "doc": "<p>Returns the build component value</p>\n",
        "linenr": 110,
        "return": {
          "type": "Number",
          "doc": "<p>build</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-getComponentValue",
        "shortDoc": "Converts a version component to a comparable value ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to convert</p>\n",
            "name": "value"
          }
        ],
        "name": "getComponentValue",
        "owner": "Ext.Version",
        "doc": "<p>Converts a version component to a comparable value</p>\n",
        "linenr": 201,
        "return": {
          "type": "Mixed",
          "doc": "\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-getMajor",
        "shortDoc": "Returns the major component value ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [

        ],
        "name": "getMajor",
        "owner": "Ext.Version",
        "doc": "<p>Returns the major component value</p>\n",
        "linenr": 86,
        "return": {
          "type": "Number",
          "doc": "<p>major</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-getMinor",
        "shortDoc": "Returns the minor component value ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [

        ],
        "name": "getMinor",
        "owner": "Ext.Version",
        "doc": "<p>Returns the minor component value</p>\n",
        "linenr": 94,
        "return": {
          "type": "Number",
          "doc": "<p>minor</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-getPatch",
        "shortDoc": "Returns the patch component value ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [

        ],
        "name": "getPatch",
        "owner": "Ext.Version",
        "doc": "<p>Returns the patch component value</p>\n",
        "linenr": 102,
        "return": {
          "type": "Number",
          "doc": "<p>patch</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-getRelease",
        "shortDoc": "Returns the release component value ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [

        ],
        "name": "getRelease",
        "owner": "Ext.Version",
        "doc": "<p>Returns the release component value</p>\n",
        "linenr": 118,
        "return": {
          "type": "Number",
          "doc": "<p>release</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-getShortVersion",
        "shortDoc": "Returns shortVersion version without dots and release ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [

        ],
        "name": "getShortVersion",
        "owner": "Ext.Version",
        "doc": "<p>Returns shortVersion version without dots and release</p>\n",
        "linenr": 178,
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-getVersion",
        "shortDoc": "Get the version number of the supplied package name; will return the last registered version\n(last Ext.setVersion cal...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>(Optional) The package name, for example: 'core', 'touch', 'extjs'</p>\n",
            "name": "packageName"
          }
        ],
        "name": "getVersion",
        "owner": "Ext.Version",
        "doc": "<p>Get the version number of the supplied package name; will return the last registered version\n(last Ext.setVersion call) if there's no package name given.</p>\n",
        "linenr": 268,
        "return": {
          "type": "Ext.Version",
          "doc": "<p>The version</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-isGreaterThan",
        "shortDoc": "Returns whether this version if greater than the supplied argument ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [
          {
            "type": "String/Number",
            "optional": false,
            "doc": "<p>The version to compare with</p>\n",
            "name": "target"
          }
        ],
        "name": "isGreaterThan",
        "owner": "Ext.Version",
        "doc": "<p>Returns whether this version if greater than the supplied argument</p>\n",
        "linenr": 126,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this version if greater than the target, false otherwise</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-isLessThan",
        "shortDoc": "Returns whether this version if smaller than the supplied argument ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [
          {
            "type": "String/Number",
            "optional": false,
            "doc": "<p>The version to compare with</p>\n",
            "name": "target"
          }
        ],
        "name": "isLessThan",
        "owner": "Ext.Version",
        "doc": "<p>Returns whether this version if smaller than the supplied argument</p>\n",
        "linenr": 135,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this version if smaller than the target, false otherwise</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-match",
        "shortDoc": "Returns whether this version matches the supplied argument. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [
          {
            "type": "String/Number",
            "optional": false,
            "doc": "<p>The version to compare with</p>\n",
            "name": "target"
          }
        ],
        "name": "match",
        "owner": "Ext.Version",
        "doc": "<p>Returns whether this version matches the supplied argument. Example:</p>\n\n<pre><code>var version = new Ext.Version('1.0.2beta');\nconsole.log(version.match(1)); // True\nconsole.log(version.match(1.0)); // True\nconsole.log(version.match('1.0.2')); // True\nconsole.log(version.match('1.0.2RC')); // False\n</code></pre>\n\n",
        "linenr": 153,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this version matches the target, false otherwise</p>\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-setVersion",
        "shortDoc": "Set version number for the given package name. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The package name, for example: 'core', 'touch', 'extjs'</p>\n",
            "name": "packageName"
          },
          {
            "type": "String/Ext.Version",
            "optional": false,
            "doc": "<p>The version, for example: '1.2.3alpha', '2.4.0-dev'</p>\n",
            "name": "version"
          }
        ],
        "name": "setVersion",
        "owner": "Ext.Version",
        "doc": "<p>Set version number for the given package name.</p>\n",
        "linenr": 254,
        "return": {
          "type": "Ext",
          "doc": "\n"
        },
        "html_filename": "Version.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Version.html#Ext-Version-method-toArray",
        "shortDoc": "Returns this format: [major, minor, patch, build, release]. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "params": [

        ],
        "name": "toArray",
        "owner": "Ext.Version",
        "doc": "<p>Returns this format: [major, minor, patch, build, release]. Useful for comparison</p>\n",
        "linenr": 170,
        "return": {
          "type": "Array",
          "doc": "\n"
        },
        "html_filename": "Version.html"
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
  "singleton": false,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Version.html#Ext-Version",
  "subclasses": [

  ],
  "static": false,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.Version",
  "doc": "<p>A utility class that wrap around a string version number and provide convenient\nmethod to perform comparison. See also: <a href=\"#/api/Ext.Version-method-compare\" rel=\"Ext.Version-method-compare\" class=\"docClass\">compare</a>. Example:</p>\n\n<pre><code>var version = new Ext.Version('1.0.2beta');\nconsole.log(\"Version is \" + version); // Version is 1.0.2beta\n\nconsole.log(version.getMajor()); // 1\nconsole.log(version.getMinor()); // 0\nconsole.log(version.getPatch()); // 2\nconsole.log(version.getBuild()); // 0\nconsole.log(version.getRelease()); // beta\n\nconsole.log(version.isGreaterThan('1.0.1')); // True\nconsole.log(version.isGreaterThan('1.0.2alpha')); // True\nconsole.log(version.isGreaterThan('1.0.2RC')); // False\nconsole.log(version.isGreaterThan('1.0.2')); // False\nconsole.log(version.isLessThan('1.0.2')); // True\n\nconsole.log(version.match(1.0)); // True\nconsole.log(version.match('1.0.2')); // True\n</code></pre>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Version.html",
  "extends": null
});