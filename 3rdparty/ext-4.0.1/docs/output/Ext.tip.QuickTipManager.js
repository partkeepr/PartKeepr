Ext.data.JsonP.Ext_tip_QuickTipManager({
  "tagname": "class",
  "name": "Ext.tip.QuickTipManager",
  "doc": "<p>Provides attractive and customizable tooltips for any element. The QuickTips\nsingleton is used to configure and manage tooltips globally for multiple elements\nin a generic manner.  To create individual tooltips with maximum customizability,\nyou should consider either <a href=\"#/api/Ext.tip.Tip\" rel=\"Ext.tip.Tip\" class=\"docClass\">Ext.tip.Tip</a> or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">Ext.tip.ToolTip</a>.</p>\n\n<p>Quicktips can be configured via tag attributes directly in markup, or by\nregistering quick tips programmatically via the <a href=\"#/api/Ext.tip.QuickTipManager-method-register\" rel=\"Ext.tip.QuickTipManager-method-register\" class=\"docClass\">register</a> method.</p>\n\n<p>The singleton's instance of <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">Ext.tip.QuickTip</a> is available via\n<a href=\"#/api/Ext.tip.QuickTipManager-method-getQuickTip\" rel=\"Ext.tip.QuickTipManager-method-getQuickTip\" class=\"docClass\">getQuickTip</a>, and supports all the methods, and all the all the\nconfiguration properties of <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">Ext.tip.QuickTip</a>. These settings will apply to all\ntooltips shown by the singleton.</p>\n\n<p>Below is the summary of the configuration properties which can be used.\nFor detailed descriptions see the config options for the <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> class</p>\n\n<h2>QuickTips singleton configs (all are optional)</h2>\n\n<ul>\n<li><code>dismissDelay</code></li>\n<li><code>hideDelay</code></li>\n<li><code>maxWidth</code></li>\n<li><code>minWidth</code></li>\n<li><code>showDelay</code></li>\n<li><code>trackMouse</code></li>\n</ul>\n\n\n<h2>Target element configs (optional unless otherwise noted)</h2>\n\n<ul>\n<li><code>autoHide</code></li>\n<li><code>cls</code></li>\n<li><code>dismissDelay</code> (overrides singleton value)</li>\n<li><code>target</code> (required)</li>\n<li><code>text</code> (required)</li>\n<li><code>title</code></li>\n<li><code>width</code></li>\n</ul>\n\n\n<p>Here is an example showing how some of these config options could be used:</p>\n\n<p><p><img src=\"doc-resources/Ext.tip.QuickTipManager/Ext.tip.QuickTipManager.png\" alt=\"Ext.tip.QuickTipManager component\"></p></p>\n\n<h2>Code</h2>\n\n<pre><code>// Init the singleton.  Any tag-based quick tips will start working.\nExt.tip.QuickTipManager.init();\n\n// Apply a set of config properties to the singleton\nExt.apply(Ext.tip.QuickTipManager.getQuickTip(), {\n    maxWidth: 200,\n    minWidth: 100,\n    showDelay: 50      // Show 50ms after entering target\n});\n\n// Create a small panel to add a quick tip to\nExt.create('Ext.container.Container', {\n    id: 'quickTipContainer',\n    width: 200,\n    height: 150,\n    style: {\n        backgroundColor:'#000000'\n    },\n    renderTo: Ext.getBody()\n});\n\n\n// Manually register a quick tip for a specific element\nExt.tip.QuickTipManager.register({\n    target: 'quickTipContainer',\n    title: 'My Tooltip',\n    text: 'This tooltip was added in code',\n    width: 100,\n    dismissDelay: 10000 // Hide after 10 seconds hover\n});\n</code></pre>\n\n<p>To register a quick tip in markup, you simply add one or more of the valid QuickTip attributes prefixed with\nthe <strong>data-</strong> namespace.  The HTML element itself is automatically set as the quick tip target. Here is the summary\nof supported attributes (optional unless otherwise noted):</p>\n\n<ul>\n<li><code>hide</code>: Specifying \"user\" is equivalent to setting autoHide = false.  Any other value will be the same as autoHide = true.</li>\n<li><code>qclass</code>: A CSS class to be applied to the quick tip (equivalent to the 'cls' target element config).</li>\n<li><code>qtip (required)</code>: The quick tip text (equivalent to the 'text' target element config).</li>\n<li><code>qtitle</code>: The quick tip title (equivalent to the 'title' target element config).</li>\n<li><code>qwidth</code>: The quick tip width (equivalent to the 'width' target element config).</li>\n</ul>\n\n\n<p>Here is an example of configuring an HTML element to display a tooltip from markup:</p>\n\n<pre><code>// Add a quick tip to an HTML button\n&lt;input type=\"button\" value=\"OK\" data-qtitle=\"OK Button\" data-qwidth=\"100\"\n     data-qtip=\"This is a quick tip from markup!\"&gt;&lt;/input&gt;\n</code></pre>\n",
  "extends": null,
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
      "name": "destroy",
      "member": "Ext.tip.QuickTipManager",
      "doc": "<p>Destroy the QuickTips instance.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
      "linenr": 150,
      "html_filename": "QuickTipManager.html",
      "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-destroy",
      "shortDoc": "<p>Destroy the QuickTips instance.</p>\n"
    },
    {
      "tagname": "method",
      "name": "disable",
      "member": "Ext.tip.QuickTipManager",
      "doc": "<p>Disable quick tips globally.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
      "linenr": 187,
      "html_filename": "QuickTipManager.html",
      "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-disable",
      "shortDoc": "<p>Disable quick tips globally.</p>\n"
    },
    {
      "tagname": "method",
      "name": "enable",
      "member": "Ext.tip.QuickTipManager",
      "doc": "<p>Enable quick tips globally.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
      "linenr": 177,
      "html_filename": "QuickTipManager.html",
      "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-enable",
      "shortDoc": "<p>Enable quick tips globally.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getQuickTip",
      "member": "Ext.tip.QuickTipManager",
      "doc": "<p>Gets the single <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> instance used to show tips from all registered elements.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.tip.QuickTip",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
      "linenr": 205,
      "html_filename": "QuickTipManager.html",
      "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-getQuickTip",
      "shortDoc": "<p>Gets the single <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> instance used to show tips from all registered elements.</p>\n"
    },
    {
      "tagname": "method",
      "name": "init",
      "member": "Ext.tip.QuickTipManager",
      "doc": "<p>Initialize the global QuickTips instance and prepare any quick tips.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "autoRender",
          "doc": "<p>True to render the QuickTips container immediately to\npreload images. (Defaults to true)</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>An optional config object for the created QuickTip. By\ndefault, the <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> class is instantiated, but this can\nbe changed by supplying an xtype property or a className property in this object.\nAll other properties on this object are configuration for the created component.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
      "linenr": 103,
      "html_filename": "QuickTipManager.html",
      "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-init",
      "shortDoc": "<p>Initialize the global QuickTips instance and prepare any quick tips.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isEnabled",
      "member": "Ext.tip.QuickTipManager",
      "doc": "<p>Returns true if quick tips are enabled, else false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
      "linenr": 197,
      "html_filename": "QuickTipManager.html",
      "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-isEnabled",
      "shortDoc": "<p>Returns true if quick tips are enabled, else false.</p>\n"
    },
    {
      "tagname": "method",
      "name": "register",
      "member": "Ext.tip.QuickTipManager",
      "doc": "<p>Configures a new quick tip instance and assigns it to a target element.  See\n<a href=\"#/api/Ext.tip.QuickTip-method-register\" rel=\"Ext.tip.QuickTip-method-register\" class=\"docClass\">Ext.tip.QuickTip.register</a> for details.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The config object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
      "linenr": 213,
      "html_filename": "QuickTipManager.html",
      "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-register",
      "shortDoc": "<p>Configures a new quick tip instance and assigns it to a target element.  See\n<a href=\"#/api/Ext.tip.QuickTip-method-register\" rel=\"Ext.tip.QuickTip-method-register\" class=\"docClass\">Ext.tip.QuickTip.register</a> for details.</p>\n"
    },
    {
      "tagname": "method",
      "name": "tips",
      "member": "Ext.tip.QuickTipManager",
      "doc": "<p>Alias of <a href=\"#/api/Ext.tip.QuickTipManager-method-register\" rel=\"Ext.tip.QuickTipManager-method-register\" class=\"docClass\">register</a>.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The config object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
      "linenr": 230,
      "html_filename": "QuickTipManager.html",
      "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-tips",
      "shortDoc": "<p>Alias of <a href=\"#/api/Ext.tip.QuickTipManager-method-register\" rel=\"Ext.tip.QuickTipManager-method-register\" class=\"docClass\">register</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "unregister",
      "member": "Ext.tip.QuickTipManager",
      "doc": "<p>Removes any registered quick tip from the target element and destroys it.</p>\n",
      "params": [
        {
          "type": "String/HTMLElement/Element",
          "name": "el",
          "doc": "<p>The element from which the quick tip is to be removed.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
      "linenr": 222,
      "html_filename": "QuickTipManager.html",
      "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-unregister",
      "shortDoc": "<p>Removes any registered quick tip from the target element and destroys it.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tip/QuickTipManager.js",
  "linenr": 1,
  "html_filename": "QuickTipManager.html",
  "href": "QuickTipManager.html#Ext-tip-QuickTipManager",
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