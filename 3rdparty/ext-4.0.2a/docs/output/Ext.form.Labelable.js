Ext.data.JsonP.Ext_form_Labelable({
  "mixedInto": [
    "Ext.form.field.HtmlEditor",
    "Ext.form.field.Base",
    "Ext.form.FieldContainer"
  ],
  "superclasses": [
    "Ext.Base"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Labelable.html#Ext-form-Labelable",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-activeError",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "If specified, then the component will be displayed with this value as its active error when\nfirst rendered. ...",
        "static": false,
        "name": "activeError",
        "owner": "Ext.form.Labelable",
        "doc": "<p>If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Defaults to undefined. Use <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a> or <a href=\"#/api/Ext.form.Labelable-method-unsetActiveError\" rel=\"Ext.form.Labelable-method-unsetActiveError\" class=\"docClass\">unsetActiveError</a> to\nchange it after component creation.</p>\n",
        "linenr": 206,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Ext.XTemplate",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-activeErrorsTpl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The template used to format the Array of error messages passed to setActiveErrors\ninto a single HTML string. ...",
        "static": false,
        "name": "activeErrorsTpl",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The template used to format the Array of error messages passed to <a href=\"#/api/Ext.form.Labelable-method-setActiveErrors\" rel=\"Ext.form.Labelable-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a>\ninto a single HTML string. By default this renders each message as an item in an unordered list.</p>\n",
        "linenr": 50,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-autoFitErrors",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Whether to adjust the component's body area to make room for 'side' or 'under'\nerror messages. ...",
        "static": false,
        "name": "autoFitErrors",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Whether to adjust the component's body area to make room for 'side' or 'under'\n<a href=\"#/api/Ext.form.Labelable-cfg-msgTarget\" rel=\"Ext.form.Labelable-cfg-msgTarget\" class=\"docClass\">error messages</a>. Defaults to <tt>true</tt>.</p>\n",
        "linenr": 184,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-baseBodyCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The CSS class to be applied to the body content element. ...",
        "static": false,
        "name": "baseBodyCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The CSS class to be applied to the body content element. Defaults to 'x-form-item-body'.</p>\n",
        "linenr": 87,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-clearCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide...",
        "static": false,
        "name": "clearCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide field clearing (defaults to <tt>'x-clear'</tt>).</p>\n",
        "linenr": 100,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-errorMsgCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The CSS class to be applied to the error message element. ...",
        "static": false,
        "name": "errorMsgCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The CSS class to be applied to the error message element. Defaults to 'x-form-error-msg'.</p>\n",
        "linenr": 81,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-fieldBodyCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "An extra CSS class to be applied to the body content element in addition to fieldBodyCls. ...",
        "static": false,
        "name": "fieldBodyCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>An extra CSS class to be applied to the body content element in addition to <a href=\"#/api/Ext.form.Labelable-cfg-fieldBodyCls\" rel=\"Ext.form.Labelable-cfg-fieldBodyCls\" class=\"docClass\">fieldBodyCls</a>.\nDefaults to empty.</p>\n",
        "linenr": 93,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-fieldLabel",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The label for the field. ...",
        "static": false,
        "name": "fieldLabel",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The label for the field. It gets appended with the <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>, and its position\nand sizing is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelAlign\" rel=\"Ext.form.Labelable-cfg-labelAlign\" class=\"docClass\">labelAlign</a>, <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a>, and <a href=\"#/api/Ext.form.Labelable-cfg-labelPad\" rel=\"Ext.form.Labelable-cfg-labelPad\" class=\"docClass\">labelPad</a>\nconfigs. Defaults to undefined.</p>\n",
        "linenr": 113,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-formItemCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. ...",
        "static": false,
        "name": "formItemCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. Defaults to 'x-form-item'.</p>\n",
        "linenr": 68,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-hideEmptyLabel",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "When set to true, the label element (fieldLabel and labelSeparator) will be\nautomatically hidden if the fieldLabel is...",
        "static": false,
        "name": "hideEmptyLabel",
        "owner": "Ext.form.Labelable",
        "doc": "<p>When set to <tt>true</tt>, the label element (<a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>) will be\nautomatically hidden if the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> is empty. Setting this to <tt>false</tt> will cause the empty\nlabel element to be rendered and space to be reserved for it; this is useful if you want a field without a label\nto line up with other labeled fields in the same form. Defaults to <tt>true</tt>.</p>\n\n\n<p>If you wish to unconditionall hide the label even if a non-empty fieldLabel is configured, then set\nthe <a href=\"#/api/Ext.form.Labelable-cfg-hideLabel\" rel=\"Ext.form.Labelable-cfg-hideLabel\" class=\"docClass\">hideLabel</a> config to <tt>true</tt>.</p>\n\n",
        "linenr": 166,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-hideLabel",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Set to true to completely hide the label element (fieldLabel and labelSeparator). ...",
        "static": false,
        "name": "hideLabel",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Set to <tt>true</tt> to completely hide the label element (<a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>).\nDefaults to <tt>false</tt>.</p>\n\n\n<p>Also see <a href=\"#/api/Ext.form.Labelable-cfg-hideEmptyLabel\" rel=\"Ext.form.Labelable-cfg-hideEmptyLabel\" class=\"docClass\">hideEmptyLabel</a>, which controls whether space will be reserved for an empty fieldLabel.</p>\n\n",
        "linenr": 158,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-invalidCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "static": false,
        "name": "invalidCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The CSS class to use when marking the component invalid (defaults to 'x-form-invalid')</p>\n",
        "linenr": 107,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelAlign",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Controls the position and alignment of the fieldLabel. ...",
        "static": false,
        "name": "labelAlign",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Controls the position and alignment of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a>. Valid values are:</p>\n\n\n<ul>\n<li><tt>\"left\"</tt> (the default) - The label is positioned to the left of the field, with its text\naligned to the left. Its width is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n<li><tt>\"top\"</tt> - The label is positioned above the field.</li>\n<li><tt>\"right\"</tt> - The label is positioned to the left of the field, with its text aligned\nto the right. Its width is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n</ul>\n\n",
        "linenr": 121,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The CSS class to be applied to the label element. ...",
        "static": false,
        "name": "labelCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The CSS class to be applied to the label element. Defaults to 'x-form-item-label'.</p>\n",
        "linenr": 75,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelPad",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The amount of space in pixels between the fieldLabel and the input field. ...",
        "static": false,
        "name": "labelPad",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The amount of space in pixels between the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and the input field. Defaults to <tt>5</tt>.</p>\n",
        "linenr": 141,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelSeparator",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "static": false,
        "name": "labelSeparator",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Character(s) to be inserted at the end of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">label text</a>.</p>\n",
        "linenr": 147,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelStyle",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "A CSS style specification string to apply directly to this field's label. ...",
        "static": false,
        "name": "labelStyle",
        "owner": "Ext.form.Labelable",
        "doc": "<p>A CSS style specification string to apply directly to this field's label. Defaults to undefined.</p>\n\n",
        "linenr": 153,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelWidth",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The width of the fieldLabel in pixels. ...",
        "static": false,
        "name": "labelWidth",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The width of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> in pixels. Only applicable if the <a href=\"#/api/Ext.form.Labelable-cfg-labelAlign\" rel=\"Ext.form.Labelable-cfg-labelAlign\" class=\"docClass\">labelAlign</a> is set\nto \"left\" or \"right\". Defaults to <tt>100</tt>.</p>\n",
        "linenr": 134,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Array/String/Ext.XTemplate",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelableRenderTpl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The rendering template for the field decorations. ...",
        "static": false,
        "name": "labelableRenderTpl",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The rendering template for the field decorations. Component classes using this mixin should include\nlogic to use this as their <a href=\"#/api/Ext.AbstractComponent-cfg-renderTpl\" rel=\"Ext.AbstractComponent-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, and implement the\n<a href=\"#/api/Ext.form.Labelable-method-getSubTplMarkup\" rel=\"Ext.form.Labelable-method-getSubTplMarkup\" class=\"docClass\">getSubTplMarkup</a> method to generate the field body content.</p>\n",
        "linenr": 29,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-msgTarget",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The location where the error message text should display. ...",
        "static": false,
        "name": "msgTarget",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The location where the error message text should display.\nMust be one of the following values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>qtip</code> Display a quick tip containing the message when the user hovers over the field. This is the default.\n<div class=\"subdesc\"><b><a href=\"#/api/Ext.tip.QuickTipManager-method-init\" rel=\"Ext.tip.QuickTipManager-method-init\" class=\"docClass\">Ext.tip.QuickTipManager.init</a> must have been called for this setting to work.</b></div></li>\n<li><code>title</code> Display the message in a default browser title attribute popup.</li>\n<li><code>under</code> Add a block div beneath the field containing the error message.</li>\n<li><code>side</code> Add an error icon to the right of the field, displaying the message in a popup on hover.</li>\n<li><code>none</code> Don't display any error message. This might be useful if you are implementing custom error display.</li>\n<li><code>[element id]</code> Add the error message directly to the innerHTML of the specified element.</li>\n</ul></div>\n\n",
        "linenr": 191,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-cfg-preventMark",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "true to disable displaying any error message set on this object. ...",
        "static": false,
        "name": "preventMark",
        "owner": "Ext.form.Labelable",
        "doc": "<p><tt>true</tt> to disable displaying any <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">error message</a> set on this object.\nDefaults to <tt>false</tt>.</p>\n",
        "linenr": 177,
        "html_filename": "Labelable.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-getActiveError",
        "return": {
          "type": "String",
          "doc": "<p>The active error message on the component; if there is no error, an empty string is returned.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Gets the active error message for this component, if any. ...",
        "static": false,
        "name": "getActiveError",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Gets the active error message for this component, if any. This does not trigger\nvalidation on its own, it merely returns any message that the component may already hold.</p>\n",
        "linenr": 330,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-getActiveErrors",
        "return": {
          "type": "Array",
          "doc": "<p>The active error messages on the component; if there are no errors, an empty Array is returned.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Gets an Array of any active error messages currently applied to the field. ...",
        "static": false,
        "name": "getActiveErrors",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Gets an Array of any active error messages currently applied to the field. This does not trigger\nvalidation on its own, it merely returns any messages that the component may already hold.</p>\n",
        "linenr": 365,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-getBodyNaturalWidth",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Calculate and return the natural width of the bodyEl. ...",
        "static": false,
        "name": "getBodyNaturalWidth",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Calculate and return the natural width of the bodyEl. Override to provide custom logic.\nNote for implementors: if at all possible this method should be overridden with a custom implementation\nthat can avoid anything that would cause the browser to reflow, e.g. querying offsetWidth.</p>\n",
        "linenr": 446,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-getFieldLabel",
        "return": {
          "type": "String",
          "doc": "<p>The configured field label, or empty string if not defined</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Returns the label for the field. ...",
        "static": false,
        "name": "getFieldLabel",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Returns the label for the field. Defaults to simply returning the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> config. Can be\noverridden to provide</p>\n",
        "linenr": 232,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-getInputId",
        "return": {
          "type": "String",
          "doc": "<p>The input id</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Get the input id, if any, for this component. ...",
        "static": false,
        "name": "getInputId",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Get the input id, if any, for this component. This is used as the \"for\" attribute on the label element.\nImplementing subclasses may also use this as e.g. the id for their own <tt>input</tt> element.</p>\n",
        "linenr": 321,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-getLabelableRenderData",
        "return": {
          "type": "Object",
          "doc": "<p>The template arguments</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Generates the arguments for the field decorations rendering template. ...",
        "static": false,
        "name": "getLabelableRenderData",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Generates the arguments for the field decorations <a href=\"#/api/Ext.form.Labelable-cfg-labelableRenderTpl\" rel=\"Ext.form.Labelable-cfg-labelableRenderTpl\" class=\"docClass\">rendering template</a>.</p>\n",
        "linenr": 241,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-getLabelableSelectors",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Returns the additional Ext.AbstractComponent.renderSelectors for selecting the field\ndecoration elements from the ren...",
        "static": false,
        "name": "getLabelableSelectors",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Returns the additional <a href=\"#/api/Ext.AbstractComponent-cfg-renderSelectors\" rel=\"Ext.AbstractComponent-cfg-renderSelectors\" class=\"docClass\">Ext.AbstractComponent.renderSelectors</a> for selecting the field\ndecoration elements from the rendered <a href=\"#/api/Ext.form.Labelable-cfg-labelableRenderTpl\" rel=\"Ext.form.Labelable-cfg-labelableRenderTpl\" class=\"docClass\">labelableRenderTpl</a>. Component classes using this mixin should\nbe sure and merge this method's result into the component's <a href=\"#/api/Ext.AbstractComponent-cfg-renderSelectors\" rel=\"Ext.AbstractComponent-cfg-renderSelectors\" class=\"docClass\">Ext.AbstractComponent.renderSelectors</a>\nbefore rendering.</p>\n",
        "linenr": 277,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-getSubTplMarkup",
        "return": {
          "type": "String",
          "doc": "<p>The markup to be inserted</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Gets the markup to be inserted into the outer template's bodyEl. ...",
        "static": false,
        "name": "getSubTplMarkup",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Gets the markup to be inserted into the outer template's bodyEl. Defaults to empty string, should\nbe implemented by classes including this mixin as needed.</p>\n",
        "linenr": 311,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-hasActiveError",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Tells whether the field currently has an active error message. ...",
        "static": false,
        "name": "hasActiveError",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Tells whether the field currently has an active error message. This does not trigger\nvalidation on its own, it merely looks for any message that the component may already hold.</p>\n",
        "linenr": 339,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-initLabelable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Performs initialization of this mixin. ...",
        "static": false,
        "name": "initLabelable",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
        "linenr": 214,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The error message</p>\n",
            "name": "msg"
          }
        ],
        "href": "Labelable.html#Ext-form-Labelable-method-setActiveError",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Sets the active error message to the given string. ...",
        "static": false,
        "name": "setActiveError",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Sets the active error message to the given string. This replaces the entire error message\ncontents with the given string. Also see <a href=\"#/api/Ext.form.Labelable-method-setActiveErrors\" rel=\"Ext.form.Labelable-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a> which accepts an Array of\nmessages and formats them according to the <a href=\"#/api/Ext.form.Labelable-cfg-activeErrorsTpl\" rel=\"Ext.form.Labelable-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
        "linenr": 348,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The error messages</p>\n",
            "name": "errors"
          }
        ],
        "href": "Labelable.html#Ext-form-Labelable-method-setActiveErrors",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Set the active error message to an Array of error messages. ...",
        "static": false,
        "name": "setActiveErrors",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Set the active error message to an Array of error messages. The messages are formatted into\na single message string using the <a href=\"#/api/Ext.form.Labelable-cfg-activeErrorsTpl\" rel=\"Ext.form.Labelable-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>. Also see <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a>\nwhich allows setting the entire error contents with a single string.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
        "linenr": 374,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The defaults to apply to the object.</p>\n",
            "name": "defaults"
          }
        ],
        "href": "Labelable.html#Ext-form-Labelable-method-setFieldDefaults",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Applies a set of default configuration values to this Labelable instance. ...",
        "static": false,
        "name": "setFieldDefaults",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Applies a set of default configuration values to this Labelable instance. For each of the\nproperties in the given object, check if this component hasOwnProperty that config; if not\nthen it's inheriting a default value from its prototype and we should apply the default value.</p>\n",
        "linenr": 431,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Labelable.html#Ext-form-Labelable-method-unsetActiveError",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Clears the active error message(s). ...",
        "static": false,
        "name": "unsetActiveError",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Clears the active error message(s).</p>\n\n<p>Note that this only clears the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-clearInvalid\" rel=\"Ext.form.field.Base-method-clearInvalid\" class=\"docClass\">clearInvalid</a> instead.</p>\n",
        "linenr": 391,
        "html_filename": "Labelable.html"
      }
    ],
    "event": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.form.Labelable",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The active error message</p>\n",
            "name": "error"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Labelable.html#Ext-form-Labelable-event-errorchange",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Fires when the active error message is changed via setActiveError. ...",
        "static": false,
        "name": "errorchange",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Fires when the active error message is changed via <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a>.</p>\n",
        "linenr": 222,
        "html_filename": "Labelable.html"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "Ext.core.Element",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-property-bodyEl",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The div Element wrapping the component's contents. ...",
        "static": false,
        "name": "bodyEl",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The div Element wrapping the component's contents. Only available after the component has been rendered.</p>\n",
        "linenr": 293,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Ext.core.Element",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-property-errorEl",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The div Element that will contain the component's error message(s). ...",
        "static": false,
        "name": "errorEl",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The div Element that will contain the component's error message(s). Note that depending on the\nconfigured <a href=\"#/api/Ext.form.Labelable-cfg-msgTarget\" rel=\"Ext.form.Labelable-cfg-msgTarget\" class=\"docClass\">msgTarget</a>, this element may be hidden in favor of some other form of\npresentation, but will always be present in the DOM for use by assistive technologies.</p>\n",
        "linenr": 300,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-property-isFieldLabelable",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "Flag denoting that this object is labelable as a field. ...",
        "static": false,
        "name": "isFieldLabelable",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Flag denoting that this object is labelable as a field. Always true.</p>\n",
        "linenr": 61,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Ext.core.Element",
        "deprecated": null,
        "href": "Labelable.html#Ext-form-Labelable-property-labelEl",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "shortDoc": "The label Element for this component. ...",
        "static": false,
        "name": "labelEl",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The label Element for this component. Only available after the component has been rendered.</p>\n",
        "linenr": 286,
        "html_filename": "Labelable.html"
      },
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.form.Labelable",
  "doc": "<p>A mixin which allows a component to be configured and decorated with a label and/or error message as is\ncommon for form fields. This is used by e.g. <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> and <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>\nto let them be managed by the Field layout.</p>\n\n<p>*NOTE**: This mixin is mainly for internal library use and most users should not need to use it directly. It\nis more likely you will want to use one of the component classes that import this mixin, such as\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> or <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>.</p>\n\n<p>Use of this mixin does not make a component a field in the logical sense, meaning it does not provide any\nlogic or state related to values or validation; that is handled by the related <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a>\nmixin. These two mixins may be used separately (for example <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a> is Labelable but not a\nField), or in combination (for example <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> implements both and has logic for connecting the\ntwo.)</p>\n\n<p>Component classes which use this mixin should use the Field layout\nor a derivation thereof to properly size and position the label and message according to the component config.\nThey must also call the <a href=\"#/api/Ext.form.Labelable-method-initLabelable\" rel=\"Ext.form.Labelable-method-initLabelable\" class=\"docClass\">initLabelable</a> method during component initialization to ensure the mixin gets\nset up correctly.</p>\n",
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Labelable.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.Base"
});