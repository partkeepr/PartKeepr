Ext.data.JsonP.Ext_form_FieldAncestor({
  "tagname": "class",
  "name": "Ext.form.FieldAncestor",
  "doc": "<p>A mixin for <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a> components that are likely to have form fields in their\nitems subtree. Adds the following capabilities:</p>\n\n<ul>\n<li>Methods for handling the addition and removal of <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a> and <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a>\ninstances at any depth within the container.</li>\n<li>Events (<a href=\"#/api/Ext.form.FieldAncestor--fieldvaliditychange\" rel=\"Ext.form.FieldAncestor--fieldvaliditychange\" class=\"docClass\">fieldvaliditychange</a> and <a href=\"#/api/Ext.form.FieldAncestor-event-fielderrorchange\" rel=\"Ext.form.FieldAncestor-event-fielderrorchange\" class=\"docClass\">fielderrorchange</a>) for handling changes to the state\nof individual fields at the container level.</li>\n<li>Automatic application of <a href=\"#/api/Ext.form.FieldAncestor-cfg-fieldDefaults\" rel=\"Ext.form.FieldAncestor-cfg-fieldDefaults\" class=\"docClass\">fieldDefaults</a> config properties to each field added within the\ncontainer, to facilitate uniform configuration of all fields.</li>\n</ul>\n\n\n<p>This mixin is primarily for internal use by <a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a> and <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>,\nand should not normally need to be used directly.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "fieldDefaults",
      "member": "Ext.form.FieldAncestor",
      "type": "Object",
      "doc": "<p>If specified, the properties in this object are used as default config values for each\n<a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a> instance (e.g. <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> or <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>)\nthat is added as a descendant of this container. Corresponding values specified in an individual field's\nown configuration, or from the <a href=\"#/api/Ext.container.Container-cfg-defaults\" rel=\"Ext.container.Container-cfg-defaults\" class=\"docClass\">defaults config</a> of its parent container,\nwill take precedence. See the documentation for <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a> to see what config\noptions may be specified in the <tt>fieldDefaults</tt>.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code>new Ext.form.Panel({\n    fieldDefaults: {\n        labelAlign: 'left',\n        labelWidth: 100\n    },\n    items: [{\n        xtype: 'fieldset',\n        defaults: {\n            labelAlign: 'top'\n        },\n        items: [{\n            name: 'field1'\n        }, {\n            name: 'field2'\n        }]\n    }, {\n        xtype: 'fieldset',\n        items: [{\n            name: 'field3',\n            labelWidth: 150\n        }, {\n            name: 'field4'\n        }]\n    }]\n});</code></pre>\n\n\n<p>In this example, field1 and field2 will get labelAlign:'top' (from the fieldset's <tt>defaults</tt>)\nand labelWidth:100 (from <tt>fieldDefaults</tt>), field3 and field4 will both get labelAlign:'left' (from\n<tt>fieldDefaults</tt> and field3 will use the labelWidth:150 from its own config.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/FieldAncestor.js",
      "linenr": 22,
      "html_filename": "FieldAncestor.html",
      "href": "FieldAncestor.html#Ext-form-FieldAncestor-cfg-fieldDefaults",
      "shortDoc": "If specified, the properties in this object are used as default config values for each\nExt.form.Labelable instance (e..."
    }
  ],
  "method": [

  ],
  "property": [

  ],
  "event": [
    {
      "tagname": "event",
      "name": "fielderrorchange",
      "member": "Ext.form.FieldAncestor",
      "doc": "<p>Fires when the active error message is changed for any one of the <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a>\ninstances within this container.</p>\n",
      "params": [
        {
          "type": "Ext.form.FieldAncestor",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.form.Labelable",
          "name": "The",
          "doc": "<p>Labelable instance whose active error was changed</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "error",
          "doc": "<p>The active error message</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/FieldAncestor.js",
      "linenr": 81,
      "html_filename": "FieldAncestor.html",
      "href": "FieldAncestor.html#Ext-form-FieldAncestor-event-fielderrorchange",
      "shortDoc": "<p>Fires when the active error message is changed for any one of the <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a>\ninstances within this container.</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/FieldAncestor.js",
  "linenr": 1,
  "html_filename": "FieldAncestor.html",
  "href": "FieldAncestor.html#Ext-form-FieldAncestor",
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
    "Ext.form.FieldContainer",
    "Ext.form.Panel"
  ],
  "allMixins": [

  ]
});