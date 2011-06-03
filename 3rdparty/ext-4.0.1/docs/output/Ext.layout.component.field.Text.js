Ext.data.JsonP.Ext_layout_component_field_Text({
  "tagname": "class",
  "name": "Ext.layout.component.field.Text",
  "doc": "<p>Layout class for <a href=\"#/api/Ext.form.field.Text\" rel=\"Ext.form.field.Text\" class=\"docClass\">Ext.form.field.Text</a> fields. Handles sizing the input field.</p>\n",
  "extends": "Ext.layout.component.field.Field",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": true,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "adjustForGrow",
      "member": "Ext.layout.component.field.Text",
      "doc": "<p>Given the target bodyEl dimensions, adjust them if necessary to return the correct final\nsize based on the text field's <a href=\"#/api/Ext.form.field.Text-cfg-grow\" rel=\"Ext.form.field.Text-cfg-grow\" class=\"docClass\">grow config</a>.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "width",
          "doc": "<p>The bodyEl width</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "height",
          "doc": "<p>The bodyEl height</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>[inputElWidth, inputElHeight]</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Text.js",
      "linenr": 41,
      "html_filename": "Text2.html",
      "href": "Text2.html#Ext-layout-component-field-Text-method-adjustForGrow",
      "shortDoc": "Given the target bodyEl dimensions, adjust them if necessary to return the correct final\nsize based on the text field..."
    },
    {
      "tagname": "method",
      "name": "beforeLayout",
      "member": "Ext.layout.component.field.Text",
      "doc": "<p>Allow layout to proceed if the <a href=\"#/api/Ext.form.field.Text-cfg-grow\" rel=\"Ext.form.field.Text-cfg-grow\" class=\"docClass\">Ext.form.field.Text.grow</a> config is enabled and the value has\nchanged since the last layout.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "width",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "height",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Text.js",
      "linenr": 15,
      "html_filename": "Text2.html",
      "href": "Text2.html#Ext-layout-component-field-Text-method-beforeLayout",
      "shortDoc": "Allow layout to proceed if the Ext.form.field.Text.grow config is enabled and the value has\nchanged since the last la..."
    },
    {
      "tagname": "method",
      "name": "destroyTip",
      "member": "Ext.layout.component.field.Field",
      "doc": "<p>Destroy the error tip instance.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 380,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-method-destroyTip",
      "shortDoc": "<p>Destroy the error tip instance.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getErrorStrategy",
      "member": "Ext.layout.component.field.Field",
      "doc": "<p>Return the set of strategy functions from the <a href=\"#/api/Ext.layout.component.field.Text-property-errorStrategies\" rel=\"Ext.layout.component.field.Text-property-errorStrategies\" class=\"docClass\">errorStrategies collection</a>\nthat is appropriate for the field's <a href=\"#/api/Ext.form.field.Field--msgTarget\" rel=\"Ext.form.field.Field--msgTarget\" class=\"docClass\">msgTarget</a> config.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 144,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-method-getErrorStrategy",
      "shortDoc": "Return the set of strategy functions from the errorStrategies collection\nthat is appropriate for the field's msgTarge..."
    },
    {
      "tagname": "method",
      "name": "getLabelStrategy",
      "member": "Ext.layout.component.field.Field",
      "doc": "<p>Return the set of strategy functions from the <a href=\"#/api/Ext.layout.component.field.Text-property-labelStrategies\" rel=\"Ext.layout.component.field.Text-property-labelStrategies\" class=\"docClass\">labelStrategies collection</a>\nthat is appropriate for the field's <a href=\"#/api/Ext.form.field.Field--labelAlign\" rel=\"Ext.form.field.Field--labelAlign\" class=\"docClass\">labelAlign</a> config.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 133,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-method-getLabelStrategy",
      "shortDoc": "Return the set of strategy functions from the labelStrategies collection\nthat is appropriate for the field's labelAli..."
    },
    {
      "tagname": "method",
      "name": "getRenderTarget",
      "member": "Ext.layout.component.Component",
      "doc": "<p>Returns the element into which rendering must take place. Defaults to the owner Component's encapsulating element.</p>\n\n\n<p>May be overridden in Component layout managers which implement an inner element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/component/Component.js",
      "linenr": 129,
      "html_filename": "Component5.html",
      "href": "Component5.html#Ext-layout-component-Component-method-getRenderTarget",
      "shortDoc": "Returns the element into which rendering must take place. Defaults to the owner Component's encapsulating element.\n\n\n..."
    },
    {
      "tagname": "method",
      "name": "getTarget",
      "member": "Ext.layout.component.Component",
      "doc": "<p>Returns the owner component's resize element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/component/Component.js",
      "linenr": 121,
      "html_filename": "Component5.html",
      "href": "Component5.html#Ext-layout-component-Component-method-getTarget",
      "shortDoc": "<p>Returns the owner component's resize element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "initTip",
      "member": "Ext.layout.component.field.Field",
      "doc": "<p>Use a custom QuickTip instance separate from the main QuickTips singleton, so that we\ncan give it a custom frame style. Responds to errorqtip rather than the qtip property.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 365,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-method-initTip",
      "shortDoc": "Use a custom QuickTip instance separate from the main QuickTips singleton, so that we\ncan give it a custom frame styl..."
    },
    {
      "tagname": "method",
      "name": "needsLayout",
      "member": "Ext.layout.component.Component",
      "doc": "<p>Check if the new size is different from the current size and only\ntrigger a layout if it is necessary.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "width",
          "doc": "<p>The new width to set.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "height",
          "doc": "<p>The new height to set.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/component/Component.js",
      "linenr": 90,
      "html_filename": "Component5.html",
      "href": "Component5.html#Ext-layout-component-Component-method-needsLayout",
      "shortDoc": "<p>Check if the new size is different from the current size and only\ntrigger a layout if it is necessary.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setElementSize",
      "member": "Ext.layout.component.Component",
      "doc": "<p>Set the size of any element supporting undefined, null, and values.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "width",
          "doc": "<p>The new width to set.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "height",
          "doc": "<p>The new height to set.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "height",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/component/Component.js",
      "linenr": 104,
      "html_filename": "Component5.html",
      "href": "Component5.html#Ext-layout-component-Component-method-setElementSize",
      "shortDoc": "<p>Set the size of any element supporting undefined, null, and values.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setTargetSize",
      "member": "Ext.layout.component.Component",
      "doc": "<p>Set the size of the target element.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "width",
          "doc": "<p>The new width to set.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "height",
          "doc": "<p>The new height to set.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/layout/component/Component.js",
      "linenr": 138,
      "html_filename": "Component5.html",
      "href": "Component5.html#Ext-layout-component-Component-method-setTargetSize",
      "shortDoc": "<p>Set the size of the target element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "sizeBody",
      "member": "Ext.layout.component.field.Field",
      "doc": "<p>Perform sizing and alignment of the bodyEl (and children) to match the calculated insets.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "info",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 105,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-method-sizeBody",
      "shortDoc": "<p>Perform sizing and alignment of the bodyEl (and children) to match the calculated insets.</p>\n"
    },
    {
      "tagname": "method",
      "name": "sizeBodyContents",
      "member": "Ext.layout.component.field.Text",
      "doc": "<p>Size the field body contents given the total dimensions of the bodyEl, taking into account the optional\n<a href=\"#/api/Ext.form.field.Text-cfg-grow\" rel=\"Ext.form.field.Text-cfg-grow\" class=\"docClass\">Ext.form.field.Text.grow</a> configurations.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "width",
          "doc": "<p>The bodyEl width</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "height",
          "doc": "<p>The bodyEl height</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Text.js",
      "linenr": 29,
      "html_filename": "Text2.html",
      "href": "Text2.html#Ext-layout-component-field-Text-method-sizeBodyContents",
      "shortDoc": "Size the field body contents given the total dimensions of the bodyEl, taking into account the optional\nExt.form.fiel..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "elementId",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Error message displayed as content of an element with a given id elsewhere in the app</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 348,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-elementId"
    },
    {
      "tagname": "property",
      "name": "errorStrategies",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Collection of named strategies for laying out and adjusting insets to accommodate error messages.\nAn appropriate one will be chosen based on the owner field's <a href=\"#/api/Ext.form.field.Field--msgTarget\" rel=\"Ext.form.field.Field--msgTarget\" class=\"docClass\">Ext.form.field.Field.msgTarget</a> config.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 240,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-errorStrategies",
      "shortDoc": "Collection of named strategies for laying out and adjusting insets to accommodate error messages.\nAn appropriate one ..."
    },
    {
      "tagname": "property",
      "name": "labelStrategies",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Collection of named strategies for laying out and adjusting labels to accommodate error messages.\nAn appropriate one will be chosen based on the owner field's <a href=\"#/api/Ext.form.field.Field--labelAlign\" rel=\"Ext.form.field.Field--labelAlign\" class=\"docClass\">Ext.form.field.Field.labelAlign</a> config.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 160,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-labelStrategies",
      "shortDoc": "Collection of named strategies for laying out and adjusting labels to accommodate error messages.\nAn appropriate one ..."
    },
    {
      "tagname": "property",
      "name": "left",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Label displayed to the left of the bodyEl</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 226,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-left"
    },
    {
      "tagname": "property",
      "name": "qtip",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Error displayed as QuickTip on hover of the field container</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 327,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-qtip"
    },
    {
      "tagname": "property",
      "name": "right",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Same as left, only difference is text-align in CSS</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 231,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-right"
    },
    {
      "tagname": "property",
      "name": "side",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Error displayed as icon (with QuickTip on hover) to right of the bodyEl</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 273,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-side"
    },
    {
      "tagname": "property",
      "name": "sizeBodyContents",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Size the contents of the field body, given the full dimensions of the bodyEl. Does nothing by\ndefault, subclasses can override to handle their specific contents.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 124,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-sizeBodyContents",
      "shortDoc": "Size the contents of the field body, given the full dimensions of the bodyEl. Does nothing by\ndefault, subclasses can..."
    },
    {
      "tagname": "property",
      "name": "title",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Error displayed as title tip on hover of the field container</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 338,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-title"
    },
    {
      "tagname": "property",
      "name": "top",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Label displayed above the bodyEl</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 213,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-top"
    },
    {
      "tagname": "property",
      "name": "under",
      "member": "Ext.layout.component.field.Field",
      "type": "Object",
      "doc": "<p>Error message displayed underneath the bodyEl</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Field.js",
      "linenr": 301,
      "html_filename": "Field2.html",
      "href": "Field2.html#Ext-layout-component-field-Field-property-under"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/layout/component/field/Text.js",
  "linenr": 1,
  "html_filename": "Text2.html",
  "href": "Text2.html#Ext-layout-component-field-Text",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.layout.Layout",
    "Ext.layout.component.Component",
    "Ext.layout.component.field.Field"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});