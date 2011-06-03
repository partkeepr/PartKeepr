Ext.data.JsonP.Ext_form_Labelable({
  "tagname": "class",
  "name": "Ext.form.Labelable",
  "doc": "<p>A mixin which allows a component to be configured and decorated with a label and/or error message as is\ncommon for form fields. This is used by e.g. <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> and <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>\nto let them be managed by the Field layout.</p>\n\n<p>*NOTE**: This mixin is mainly for internal library use and most users should not need to use it directly. It\nis more likely you will want to use one of the component classes that import this mixin, such as\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> or <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>.</p>\n\n<p>Use of this mixin does not make a component a field in the logical sense, meaning it does not provide any\nlogic or state related to values or validation; that is handled by the related <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a>\nmixin. These two mixins may be used separately (for example <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a> is Labelable but not a\nField), or in combination (for example <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> implements both and has logic for connecting the\ntwo.)</p>\n\n<p>Component classes which use this mixin should use the Field layout\nor a derivation thereof to properly size and position the label and message according to the component config.\nThey must also call the <a href=\"#/api/Ext.form.Labelable-method-initLabelable\" rel=\"Ext.form.Labelable-method-initLabelable\" class=\"docClass\">initLabelable</a> method during component initialization to ensure the mixin gets\nset up correctly.</p>\n",
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
      "name": "activeError",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Defaults to undefined. Use <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a> or <a href=\"#/api/Ext.form.Labelable-method-unsetActiveError\" rel=\"Ext.form.Labelable-method-unsetActiveError\" class=\"docClass\">unsetActiveError</a> to\nchange it after component creation.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 206,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-activeError",
      "shortDoc": "If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Defaults ..."
    },
    {
      "tagname": "cfg",
      "name": "activeErrorsTpl",
      "member": "Ext.form.Labelable",
      "type": "Ext.XTemplate",
      "doc": "<p>The template used to format the Array of error messages passed to <a href=\"#/api/Ext.form.Labelable-method-setActiveErrors\" rel=\"Ext.form.Labelable-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a>\ninto a single HTML string. By default this renders each message as an item in an unordered list.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 50,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-activeErrorsTpl",
      "shortDoc": "The template used to format the Array of error messages passed to setActiveErrors\ninto a single HTML string. By defau..."
    },
    {
      "tagname": "cfg",
      "name": "autoFitErrors",
      "member": "Ext.form.Labelable",
      "type": "Boolean",
      "doc": "<p>Whether to adjust the component's body area to make room for 'side' or 'under'\n<a href=\"#/api/Ext.form.Labelable-cfg-msgTarget\" rel=\"Ext.form.Labelable-cfg-msgTarget\" class=\"docClass\">error messages</a>. Defaults to <tt>true</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 184,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-autoFitErrors"
    },
    {
      "tagname": "cfg",
      "name": "baseBodyCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The CSS class to be applied to the body content element. Defaults to 'x-form-item-body'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 87,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-baseBodyCls"
    },
    {
      "tagname": "cfg",
      "name": "clearCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide field clearing (defaults to <tt>'x-clear'</tt>).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 100,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-clearCls",
      "shortDoc": "The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide..."
    },
    {
      "tagname": "cfg",
      "name": "errorMsgCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The CSS class to be applied to the error message element. Defaults to 'x-form-error-msg'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 81,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-errorMsgCls"
    },
    {
      "tagname": "cfg",
      "name": "fieldBodyCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>An extra CSS class to be applied to the body content element in addition to <a href=\"#/api/Ext.form.Labelable-cfg-fieldBodyCls\" rel=\"Ext.form.Labelable-cfg-fieldBodyCls\" class=\"docClass\">fieldBodyCls</a>.\nDefaults to empty.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 93,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-fieldBodyCls"
    },
    {
      "tagname": "cfg",
      "name": "fieldLabel",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The label for the field. It gets appended with the <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>, and its position\nand sizing is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelAlign\" rel=\"Ext.form.Labelable-cfg-labelAlign\" class=\"docClass\">labelAlign</a>, <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a>, and <a href=\"#/api/Ext.form.Labelable-cfg-labelPad\" rel=\"Ext.form.Labelable-cfg-labelPad\" class=\"docClass\">labelPad</a>\nconfigs. Defaults to undefined.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 113,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-fieldLabel",
      "shortDoc": "The label for the field. It gets appended with the labelSeparator, and its position\nand sizing is determined by the l..."
    },
    {
      "tagname": "cfg",
      "name": "formItemCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. Defaults to 'x-form-item'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 68,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-formItemCls",
      "shortDoc": "A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. Defau..."
    },
    {
      "tagname": "cfg",
      "name": "hideEmptyLabel",
      "member": "Ext.form.Labelable",
      "type": "Boolean",
      "doc": "<p>When set to <tt>true</tt>, the label element (<a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>) will be\nautomatically hidden if the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> is empty. Setting this to <tt>false</tt> will cause the empty\nlabel element to be rendered and space to be reserved for it; this is useful if you want a field without a label\nto line up with other labeled fields in the same form. Defaults to <tt>true</tt>.</p>\n\n\n<p>If you wish to unconditionall hide the label even if a non-empty fieldLabel is configured, then set\nthe <a href=\"#/api/Ext.form.Labelable-cfg-hideLabel\" rel=\"Ext.form.Labelable-cfg-hideLabel\" class=\"docClass\">hideLabel</a> config to <tt>true</tt>.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 166,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-hideEmptyLabel",
      "shortDoc": "When set to true, the label element (fieldLabel and labelSeparator) will be\nautomatically hidden if the fieldLabel is..."
    },
    {
      "tagname": "cfg",
      "name": "hideLabel",
      "member": "Ext.form.Labelable",
      "type": "Boolean",
      "doc": "<p>Set to <tt>true</tt> to completely hide the label element (<a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>).\nDefaults to <tt>false</tt>.</p>\n\n\n<p>Also see <a href=\"#/api/Ext.form.Labelable-cfg-hideEmptyLabel\" rel=\"Ext.form.Labelable-cfg-hideEmptyLabel\" class=\"docClass\">hideEmptyLabel</a>, which controls whether space will be reserved for an empty fieldLabel.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 158,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-hideLabel",
      "shortDoc": "Set to true to completely hide the label element (fieldLabel and labelSeparator).\nDefaults to false.\n\n\nAlso see hideE..."
    },
    {
      "tagname": "cfg",
      "name": "invalidCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The CSS class to use when marking the component invalid (defaults to 'x-form-invalid')</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 107,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-invalidCls"
    },
    {
      "tagname": "cfg",
      "name": "labelAlign",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>Controls the position and alignment of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a>. Valid values are:</p>\n\n\n<ul>\n<li><tt>\"left\"</tt> (the default) - The label is positioned to the left of the field, with its text\naligned to the left. Its width is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n<li><tt>\"top\"</tt> - The label is positioned above the field.</li>\n<li><tt>\"right\"</tt> - The label is positioned to the left of the field, with its text aligned\nto the right. Its width is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n</ul>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 121,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelAlign",
      "shortDoc": "Controls the position and alignment of the fieldLabel. Valid values are:\n\n\n\n\"left\" (the default) - The label is posit..."
    },
    {
      "tagname": "cfg",
      "name": "labelCls",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The CSS class to be applied to the label element. Defaults to 'x-form-item-label'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 75,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelCls"
    },
    {
      "tagname": "cfg",
      "name": "labelPad",
      "member": "Ext.form.Labelable",
      "type": "Number",
      "doc": "<p>The amount of space in pixels between the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and the input field. Defaults to <tt>5</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 141,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelPad"
    },
    {
      "tagname": "cfg",
      "name": "labelSeparator",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>Character(s) to be inserted at the end of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">label text</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 147,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelSeparator"
    },
    {
      "tagname": "cfg",
      "name": "labelStyle",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>A CSS style specification string to apply directly to this field's label. Defaults to undefined.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 153,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelStyle"
    },
    {
      "tagname": "cfg",
      "name": "labelWidth",
      "member": "Ext.form.Labelable",
      "type": "Number",
      "doc": "<p>The width of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> in pixels. Only applicable if the <a href=\"#/api/Ext.form.Labelable-cfg-labelAlign\" rel=\"Ext.form.Labelable-cfg-labelAlign\" class=\"docClass\">labelAlign</a> is set\nto \"left\" or \"right\". Defaults to <tt>100</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 134,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelWidth"
    },
    {
      "tagname": "cfg",
      "name": "labelableRenderTpl",
      "member": "Ext.form.Labelable",
      "type": "Array/String/Ext.XTemplate",
      "doc": "<p>The rendering template for the field decorations. Component classes using this mixin should include\nlogic to use this as their <a href=\"#/api/Ext.AbstractComponent-cfg-renderTpl\" rel=\"Ext.AbstractComponent-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, and implement the\n<a href=\"#/api/Ext.form.Labelable--getSubTplMarkup\" rel=\"Ext.form.Labelable--getSubTplMarkup\" class=\"docClass\">getSubTplMarkup</a> method to generate the field body content.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 29,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-labelableRenderTpl",
      "shortDoc": "The rendering template for the field decorations. Component classes using this mixin should include\nlogic to use this..."
    },
    {
      "tagname": "cfg",
      "name": "msgTarget",
      "member": "Ext.form.Labelable",
      "type": "String",
      "doc": "<p>The location where the error message text should display.\nMust be one of the following values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>qtip</code> Display a quick tip containing the message when the user hovers over the field. This is the default.\n<div class=\"subdesc\"><b><a href=\"#/api/Ext.tip.QuickTipManager-method-init\" rel=\"Ext.tip.QuickTipManager-method-init\" class=\"docClass\">Ext.tip.QuickTipManager.init</a> must have been called for this setting to work.</b></div></li>\n<li><code>title</code> Display the message in a default browser title attribute popup.</li>\n<li><code>under</code> Add a block div beneath the field containing the error message.</li>\n<li><code>side</code> Add an error icon to the right of the field, displaying the message in a popup on hover.</li>\n<li><code>none</code> Don't display any error message. This might be useful if you are implementing custom error display.</li>\n<li><code>[element id]</code> Add the error message directly to the innerHTML of the specified element.</li>\n</ul></div>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 191,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-msgTarget",
      "shortDoc": "The location where the error message text should display.\nMust be one of the following values:\n\n\n\nqtip Display a quic..."
    },
    {
      "tagname": "cfg",
      "name": "preventMark",
      "member": "Ext.form.Labelable",
      "type": "Boolean",
      "doc": "<p><tt>true</tt> to disable displaying any <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">error message</a> set on this object.\nDefaults to <tt>false</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 177,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-cfg-preventMark"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "getActiveError",
      "member": "Ext.form.Labelable",
      "doc": "<p>Gets the active error message for this component, if any. This does not trigger\nvalidation on its own, it merely returns any message that the component may already hold.</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>The active error message on the component; if there is no error, an empty string is returned.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 330,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-getActiveError",
      "shortDoc": "Gets the active error message for this component, if any. This does not trigger\nvalidation on its own, it merely retu..."
    },
    {
      "tagname": "method",
      "name": "getActiveErrors",
      "member": "Ext.form.Labelable",
      "doc": "<p>Gets an Array of any active error messages currently applied to the field. This does not trigger\nvalidation on its own, it merely returns any messages that the component may already hold.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>The active error messages on the component; if there are no errors, an empty Array is returned.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 360,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-getActiveErrors",
      "shortDoc": "Gets an Array of any active error messages currently applied to the field. This does not trigger\nvalidation on its ow..."
    },
    {
      "tagname": "method",
      "name": "getFieldLabel",
      "member": "Ext.form.Labelable",
      "doc": "<p>Returns the label for the field. Defaults to simply returning the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> config. Can be\noverridden to provide</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>The configured field label, or empty string if not defined</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 232,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-getFieldLabel",
      "shortDoc": "<p>Returns the label for the field. Defaults to simply returning the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> config. Can be\noverridden to provide</p>\n"
    },
    {
      "tagname": "method",
      "name": "getInputId",
      "member": "Ext.form.Labelable",
      "doc": "<p>Get the input id, if any, for this component. This is used as the \"for\" attribute on the label element.\nImplementing subclasses may also use this as e.g. the id for their own <tt>input</tt> element.</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>The input id</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 321,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-getInputId",
      "shortDoc": "Get the input id, if any, for this component. This is used as the \"for\" attribute on the label element.\nImplementing ..."
    },
    {
      "tagname": "method",
      "name": "hasActiveError",
      "member": "Ext.form.Labelable",
      "doc": "<p>Tells whether the field currently has an active error message. This does not trigger\nvalidation on its own, it merely looks for any message that the component may already hold.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 339,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-hasActiveError",
      "shortDoc": "Tells whether the field currently has an active error message. This does not trigger\nvalidation on its own, it merely..."
    },
    {
      "tagname": "method",
      "name": "initLabelable",
      "member": "Ext.form.Labelable",
      "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 214,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-initLabelable",
      "shortDoc": "Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own in..."
    },
    {
      "tagname": "method",
      "name": "setActiveError",
      "member": "Ext.form.Labelable",
      "doc": "<p>Sets the active error message to the given string. This replaces the entire error message\ncontents with the given string. Also see <a href=\"#/api/Ext.form.Labelable-method-setActiveErrors\" rel=\"Ext.form.Labelable-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a> which accepts an Array of\nmessages and formats them according to the <a href=\"#/api/Ext.form.Labelable-cfg-activeErrorsTpl\" rel=\"Ext.form.Labelable-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "msg",
          "doc": "<p>The error message</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 348,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-setActiveError",
      "shortDoc": "Sets the active error message to the given string. This replaces the entire error message\ncontents with the given str..."
    },
    {
      "tagname": "method",
      "name": "setActiveErrors",
      "member": "Ext.form.Labelable",
      "doc": "<p>Set the active error message to an Array of error messages. The messages are formatted into\na single message string using the <a href=\"#/api/Ext.form.Labelable-cfg-activeErrorsTpl\" rel=\"Ext.form.Labelable-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>. Also see <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a>\nwhich allows setting the entire error contents with a single string.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "errors",
          "doc": "<p>The error messages</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 369,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-setActiveErrors",
      "shortDoc": "Set the active error message to an Array of error messages. The messages are formatted into\na single message string u..."
    },
    {
      "tagname": "method",
      "name": "setFieldDefaults",
      "member": "Ext.form.Labelable",
      "doc": "<p>Applies a set of default configuration values to this Labelable instance. For each of the\nproperties in the given object, check if this component hasOwnProperty that config; if not\nthen it's inheriting a default value from its prototype and we should apply the default value.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "defaults",
          "doc": "<p>The defaults to apply to the object.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 417,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-setFieldDefaults",
      "shortDoc": "Applies a set of default configuration values to this Labelable instance. For each of the\nproperties in the given obj..."
    },
    {
      "tagname": "method",
      "name": "unsetActiveError",
      "member": "Ext.form.Labelable",
      "doc": "<p>Clears the active error.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 381,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-method-unsetActiveError",
      "shortDoc": "<p>Clears the active error.</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "bodyEl",
      "member": "Ext.form.Labelable",
      "type": "Ext.core.Element",
      "doc": "<p>The div Element wrapping the component's contents. Only available after the component has been rendered.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 293,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-property-bodyEl"
    },
    {
      "tagname": "property",
      "name": "errorEl",
      "member": "Ext.form.Labelable",
      "type": "Ext.core.Element",
      "doc": "<p>The div Element that will contain the component's error message(s). Note that depending on the\nconfigured <a href=\"#/api/Ext.form.Labelable-cfg-msgTarget\" rel=\"Ext.form.Labelable-cfg-msgTarget\" class=\"docClass\">msgTarget</a>, this element may be hidden in favor of some other form of\npresentation, but will always be present in the DOM for use by assistive technologies.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 300,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-property-errorEl",
      "shortDoc": "The div Element that will contain the component's error message(s). Note that depending on the\nconfigured msgTarget, ..."
    },
    {
      "tagname": "property",
      "name": "isFieldLabelable",
      "member": "Ext.form.Labelable",
      "type": "Boolean",
      "doc": "<p>Flag denoting that this object is labelable as a field. Always true.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 61,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-property-isFieldLabelable"
    },
    {
      "tagname": "property",
      "name": "labelEl",
      "member": "Ext.form.Labelable",
      "type": "Ext.core.Element",
      "doc": "<p>The label Element for this component. Only available after the component has been rendered.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 286,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-property-labelEl"
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "errorchange",
      "member": "Ext.form.Labelable",
      "doc": "<p>Fires when the active error message is changed via <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a>.</p>\n",
      "params": [
        {
          "type": "Ext.form.Labelable",
          "name": "this",
          "doc": "\n",
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
      "linenr": 222,
      "html_filename": "Labelable.html",
      "href": "Labelable.html#Ext-form-Labelable-event-errorchange",
      "shortDoc": "<p>Fires when the active error message is changed via <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a>.</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/form/Labelable.js",
  "linenr": 1,
  "html_filename": "Labelable.html",
  "href": "Labelable.html#Ext-form-Labelable",
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
    "Ext.form.field.Base",
    "Ext.form.field.HtmlEditor",
    "Ext.form.FieldContainer"
  ],
  "allMixins": [

  ]
});