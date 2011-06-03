Ext.data.JsonP.Ext_env_OS({
  "tagname": "class",
  "name": "Ext.env.OS",
  "doc": "<p>Provide useful information about the current operating system environment. Access the global instance stored in Ext.os. Example:</p>\n\n<pre><code>if (Ext.os.is.Windows) {\n     // Windows specific code here\n}\n\nif (Ext.os.is.iOS) {\n     // iPad, iPod, iPhone, etc.\n}\n\nconsole.log(\"Version \" + Ext.os.version);\n</code></pre>\n\n\n<p>For a full list of supported values, refer to: <a href=\"#/api/Ext.env.OS-method-is\" rel=\"Ext.env.OS-method-is\" class=\"docClass\">Ext.env.OS.is</a></p>\n",
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
      "name": "is",
      "member": "Ext.env.OS",
      "doc": "<p>A \"hybrid\" property, can be either accessed as a method call, i.e:</p>\n\n<pre><code>if (Ext.os.is('Android')) { ... }\n</code></pre>\n\n\n<p>or as an object with boolean properties, i.e:</p>\n\n<pre><code>if (Ext.os.is.Android) { ... }\n</code></pre>\n\n\n<p>Versions can be conveniently checked as well. For example:</p>\n\n<pre><code>if (Ext.os.is.Android2) { ... } // Equivalent to (Ext.os.is.Android && Ext.os.version.equals(2))\n\nif (Ext.os.is.iOS32) { ... } // Equivalent to (Ext.os.is.iOS && Ext.os.version.equals(3.2))\n</code></pre>\n\n\n<p>Note that only <a href=\"#/api/Ext.Version-method-getMajor\" rel=\"Ext.Version-method-getMajor\" class=\"docClass\">major component</a>  and <a href=\"#/api/Ext.Version-method-getShortVersion\" rel=\"Ext.Version-method-getShortVersion\" class=\"docClass\">shortVersion</a>\nvalue of the version are available via direct property checking.</p>\n\n<p>Supported values are: iOS, iPad, iPhone, iPod, Android, WebOS, BlackBerry, MacOSX, Windows, Linux and Other</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The OS name to check</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/OS.js",
      "linenr": 39,
      "html_filename": "OS.html",
      "href": "OS.html#Ext-env-OS-method-is",
      "shortDoc": "A \"hybrid\" property, can be either accessed as a method call, i.e:\n\nif (Ext.os.is('Android')) { ... }\n\n\n\nor as an obj..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "name",
      "member": "Ext.env.OS",
      "type": "String",
      "doc": "<p>Read-only - the full name of the current operating system\nPossible values are: iOS, Android, WebOS, BlackBerry, MacOSX, Windows, Linux and Other</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/OS.js",
      "linenr": 68,
      "html_filename": "OS.html",
      "href": "OS.html#Ext-env-OS-property-name",
      "shortDoc": "Read-only - the full name of the current operating system\nPossible values are: iOS, Android, WebOS, BlackBerry, MacOS..."
    },
    {
      "tagname": "property",
      "name": "version",
      "member": "Ext.env.OS",
      "type": "Ext.Version",
      "doc": "<p>Read-only, refer to <a href=\"#/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/OS.js",
      "linenr": 75,
      "html_filename": "OS.html",
      "href": "OS.html#Ext-env-OS-property-version"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/OS.js",
  "linenr": 1,
  "html_filename": "OS.html",
  "href": "OS.html#Ext-env-OS",
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