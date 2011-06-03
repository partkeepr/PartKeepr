Ext.data.JsonP.Ext_form_field_VTypes({
  "tagname": "class",
  "name": "Ext.form.field.VTypes",
  "doc": "<p>This is a singleton object which contains a set of commonly used field validation functions.\nThe validations provided are basic and intended to be easily customizable and extended.</p>\n\n\n<p>To add custom VTypes specify the <code><a href=\"#/api/Ext.form.field.Text-cfg-vtype\" rel=\"Ext.form.field.Text-cfg-vtype\" class=\"docClass\">vtype</a></code> validation\ntest function, and optionally specify any corresponding error text to display and any keystroke\nfiltering mask to apply. For example:</p>\n\n\n<pre><code>// custom Vtype for vtype:'time'\nvar timeTest = /^([1-9]|1[0-9]):([0-5][0-9])(\\s[a|p]m)$/i;\nExt.apply(Ext.form.field.VTypes, {\n    //  vtype validation function\n    time: function(val, field) {\n        return timeTest.test(val);\n    },\n    // vtype Text property: The error text to display when the validation function returns false\n    timeText: 'Not a valid time.  Must be in the format \"12:34 PM\".',\n    // vtype Mask property: The keystroke filter mask\n    timeMask: /[\\d\\s:amp]/i\n});\n</code></pre>\n\n\n<p>Another example:</p>\n\n<pre><code>// custom Vtype for vtype:'IPAddress'\nExt.apply(Ext.form.field.VTypes, {\n    IPAddress:  function(v) {\n        return /^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$/.test(v);\n    },\n    IPAddressText: 'Must be a numeric IP address',\n    IPAddressMask: /[\\d\\.]/i\n});\n</code></pre>\n\n",
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
      "name": "alpha",
      "member": "Ext.form.field.VTypes",
      "doc": "<p>The function used to validate alpha values</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The value</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 90,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-method-alpha",
      "shortDoc": "<p>The function used to validate alpha values</p>\n"
    },
    {
      "tagname": "method",
      "name": "alphanum",
      "member": "Ext.form.field.VTypes",
      "doc": "<p>The function used to validate alphanumeric values</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The value</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 111,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-method-alphanum",
      "shortDoc": "<p>The function used to validate alphanumeric values</p>\n"
    },
    {
      "tagname": "method",
      "name": "email",
      "member": "Ext.form.field.VTypes",
      "doc": "<p>The function used to validate email addresses.  Note that this is a very basic validation -- complete\nvalidation per the email RFC specifications is very complex and beyond the scope of this class, although\nthis function can be overridden if a more comprehensive validation scheme is desired.  See the validation\nsection of the <a href=\"http://en.wikipedia.org/wiki/E-mail_address\">Wikipedia article on email addresses</a>\nfor additional information.  This implementation is intended to validate the following emails:<tt>\n'barney@example.de', 'barney.rubble@example.com', 'barney-rubble@example.coop', 'barney+rubble@example.com'\n</tt>.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The email address</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 47,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-method-email",
      "shortDoc": "The function used to validate email addresses.  Note that this is a very basic validation -- complete\nvalidation per ..."
    },
    {
      "tagname": "method",
      "name": "url",
      "member": "Ext.form.field.VTypes",
      "doc": "<p>The function used to validate URLs</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The URL</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 75,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-method-url",
      "shortDoc": "<p>The function used to validate URLs</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "alphaMask",
      "member": "Ext.form.field.VTypes",
      "type": "RegExp",
      "doc": "<p>The keystroke filter mask to be applied on alpha input.  Defaults to:\n<tt>/[a-z_]/i</tt></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 104,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-property-alphaMask"
    },
    {
      "tagname": "property",
      "name": "alphaText",
      "member": "Ext.form.field.VTypes",
      "type": "String",
      "doc": "<p>The error text to display when the alpha validation function returns false.  Defaults to:\n<tt>'This field should only contain letters and _'</tt></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 98,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-property-alphaText",
      "shortDoc": "The error text to display when the alpha validation function returns false.  Defaults to:\n'This field should only con..."
    },
    {
      "tagname": "property",
      "name": "alphanumMask",
      "member": "Ext.form.field.VTypes",
      "type": "RegExp",
      "doc": "<p>The keystroke filter mask to be applied on alphanumeric input.  Defaults to:\n<tt>/[a-z0-9_]/i</tt></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 125,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-property-alphanumMask"
    },
    {
      "tagname": "property",
      "name": "alphanumText",
      "member": "Ext.form.field.VTypes",
      "type": "String",
      "doc": "<p>The error text to display when the alphanumeric validation function returns false.  Defaults to:\n<tt>'This field should only contain letters, numbers and _'</tt></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 119,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-property-alphanumText",
      "shortDoc": "The error text to display when the alphanumeric validation function returns false.  Defaults to:\n'This field should o..."
    },
    {
      "tagname": "property",
      "name": "emailMask",
      "member": "Ext.form.field.VTypes",
      "type": "RegExp",
      "doc": "<p>The keystroke filter mask to be applied on email input.  See the <a href=\"#/api/Ext.form.field.VTypes-method-email\" rel=\"Ext.form.field.VTypes-method-email\" class=\"docClass\">email</a> method for\ninformation about more complex email validation. Defaults to:\n<tt>/[a-z0-9_.-@]/i</tt></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 67,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-property-emailMask",
      "shortDoc": "The keystroke filter mask to be applied on email input.  See the email method for\ninformation about more complex emai..."
    },
    {
      "tagname": "property",
      "name": "emailText",
      "member": "Ext.form.field.VTypes",
      "type": "String",
      "doc": "<p>The error text to display when the email validation function returns false.  Defaults to:\n<tt>'This field should be an e-mail address in the format \"user@example.com\"'</tt></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 61,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-property-emailText",
      "shortDoc": "The error text to display when the email validation function returns false.  Defaults to:\n'This field should be an e-..."
    },
    {
      "tagname": "property",
      "name": "urlText",
      "member": "Ext.form.field.VTypes",
      "type": "String",
      "doc": "<p>The error text to display when the url validation function returns false.  Defaults to:\n<tt>'This field should be a URL in the format \"http:/'+'/www.example.com\"'</tt></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
      "linenr": 83,
      "html_filename": "VTypes.html",
      "href": "VTypes.html#Ext-form-field-VTypes-property-urlText",
      "shortDoc": "The error text to display when the url validation function returns false.  Defaults to:\n'This field should be a URL i..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/field/VTypes.js",
  "linenr": 1,
  "html_filename": "VTypes.html",
  "href": "VTypes.html#Ext-form-field-VTypes",
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