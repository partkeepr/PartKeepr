Ext.data.JsonP.Ext_Editor({
  "allMixins": [
    "Ext.util.Floating",
    "Ext.util.Observable",
    "Ext.util.Animate",
    "Ext.state.Stateful"
  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-alignment",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "alignment",
        "owner": "Ext.Editor",
        "doc": "<p>The position to align to (see <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">Ext.core.Element.alignTo</a> for more details, defaults to \"c-c?\").</p>\n",
        "linenr": 110,
        "html_filename": "Editor.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-allowBlur",
        "shortDoc": "True to complete the editing process if in edit mode when the\nfield is blurred. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "allowBlur",
        "owner": "Ext.Editor",
        "doc": "<p>True to <a href=\"#/api/Ext.Editor-method-completeEdit\" rel=\"Ext.Editor-method-completeEdit\" class=\"docClass\">complete the editing process</a> if in edit mode when the\nfield is blurred. Defaults to <tt>true</tt>.</p>\n",
        "linenr": 56,
        "html_filename": "Editor.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoEl",
        "shortDoc": "A tag name or DomHelper spec used to create the Element which will\nencapsulate this Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A tag name or <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> spec used to create the <a href=\"#/api/Ext.Editor-method-getEl\" rel=\"Ext.Editor-method-getEl\" class=\"docClass\">Element</a> which will\nencapsulate this Component.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> and <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>,\nthis defaults to <b><tt>'div'</tt></b>. The more complex Sencha classes use a more complex\nDOM structure specified by their own <a href=\"#/api/Ext.Editor-cfg-renderTpl\" rel=\"Ext.Editor-cfg-renderTpl\" class=\"docClass\">renderTpl</a>s.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components encapsulated by\ndifferent DOM elements. Example usage:</p>\n\n\n<pre><code>{\n    xtype: 'component',\n    autoEl: {\n        tag: 'img',\n        src: 'http://www.example.com/example.jpg'\n    }\n}, {\n    xtype: 'component',\n    autoEl: {\n        tag: 'blockquote',\n        html: 'autoEl is cool!'\n    }\n}, {\n    xtype: 'container',\n    autoEl: 'ul',\n    cls: 'ux-unordered-list',\n    items: {\n        xtype: 'component',\n        autoEl: 'li',\n        html: 'First list item'\n    }\n}\n</code></pre>\n\n",
        "linenr": 130,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoRender",
        "shortDoc": "This config is intended mainly for floating Components which may or may not be shown. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This config is intended mainly for <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> Components which may or may not be shown. Instead\nof using <a href=\"#/api/Ext.Editor-cfg-renderTo\" rel=\"Ext.Editor-cfg-renderTo\" class=\"docClass\">renderTo</a> in the configuration, and rendering upon construction, this allows a Component\nto render itself upon first <i><a href=\"#/api/Ext.Editor-event-show\" rel=\"Ext.Editor-event-show\" class=\"docClass\">show</a></i>.</p>\n\n\n<p>Specify as <code>true</code> to have this Component render to the document body upon first show.</p>\n\n\n<p>Specify as an element, or the ID of an element to have this Component render to a specific element upon first show.</p>\n\n\n<p><b>This defaults to <code>true</code> for the <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a> class.</b></p>\n\n",
        "linenr": 499,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-autoScroll",
        "shortDoc": "true to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, false...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "autoScroll",
        "owner": "Ext.Component",
        "doc": "<p><code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, <code>false</code> to clip any overflowing content (defaults to <code>false</code>).</p>\n",
        "linenr": 172,
        "html_filename": "Component2.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoShow",
        "shortDoc": "True to automatically show the component upon creation. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoShow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically show the component upon creation.\nThis config option may only be used for <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> components or components\nthat use <a href=\"#/api/Ext.Editor-cfg-autoRender\" rel=\"Ext.Editor-cfg-autoRender\" class=\"docClass\">autoRender</a>. Defaults to <tt>false</tt>.</p>\n",
        "linenr": 492,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean/Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-autoSize",
        "shortDoc": "True for the editor to automatically adopt the size of the underlying field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "autoSize",
        "owner": "Ext.Editor",
        "doc": "<p>True for the editor to automatically adopt the size of the underlying field. Otherwise, an object\ncan be passed to indicate where to get each dimension. The available properties are 'boundEl' and\n'field'. If a dimension is not specified, it will use the underlying height/width specified on\nthe editor object.\nExamples:</p>\n\n<pre><code>autoSize: true // The editor will be sized to the height/width of the field\n\nheight: 21,\nautoSize: {\n    width: 'boundEl' // The width will be determined by the width of the boundEl, the height from the editor (21)\n}\n\nautoSize: {\n    width: 'field', // Width from the field\n    height: 'boundEl' // Height from the boundEl\n}\n</pre>\n\n\n<p></code></p>\n",
        "linenr": 63,
        "html_filename": "Editor.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-baseCls",
        "shortDoc": "The base CSS class to apply to this components's element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "baseCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The base CSS class to apply to this components's element. This will also be prepended to\nelements within this component like Panel's body will get a class x-panel-body. This means\nthat if you create a subclass of Panel, and you want it to get all the Panels styling for the\nelement and the body, you leave the baseCls x-panel and use componentCls to add specific styling for this\ncomponent.</p>\n",
        "linenr": 273,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number/String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-border",
        "shortDoc": "Specifies the border for this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "border",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the border for this component. The border can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 360,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-cancelOnEsc",
        "shortDoc": "True to cancel the edit when the escape key is pressed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "cancelOnEsc",
        "owner": "Ext.Editor",
        "doc": "<p>True to cancel the edit when the escape key is pressed. Defaults to <tt>true</tt>.</p>\n",
        "linenr": 143,
        "html_filename": "Editor.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-cls",
        "shortDoc": "An optional extra CSS class that will be added to this component's Element (defaults to ''). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "cls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be\nuseful for adding customized styles to the component or any of its children using standard CSS rules.</p>\n",
        "linenr": 289,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-completeOnEnter",
        "shortDoc": "True to complete the edit when the enter key is pressed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "completeOnEnter",
        "owner": "Ext.Editor",
        "doc": "<p>True to complete the edit when the enter key is pressed. Defaults to <tt>true</tt>.</p>\n",
        "linenr": 138,
        "html_filename": "Editor.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentCls",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "componentCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS Class to be added to a components root level element to give distinction to it\nvia styling.</p>\n",
        "linenr": 283,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String/Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentLayout",
        "shortDoc": "The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "componentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager which sizes a Component's internal structure in response to the Component being sized.</p>\n\n\n<p>Generally, developers will not use this configuration as all provided Components which need their internal\nelements sizing (Such as <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">input fields</a>) come with their own componentLayout managers.</p>\n\n\n<p>The <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used on instances of the base <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> class\nwhich simply sizes the Component's encapsulating element to the height and width specified in the <a href=\"#/api/Ext.Editor-method-setSize\" rel=\"Ext.Editor-method-setSize\" class=\"docClass\">setSize</a> method.</p>\n\n",
        "linenr": 242,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-constrain",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "constrain",
        "owner": "Ext.Editor",
        "doc": "<p>True to constrain the editor to the viewport</p>\n",
        "linenr": 128,
        "html_filename": "Editor.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-contentEl",
        "shortDoc": "Optional. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "contentEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Optional. Specify an existing HTML element, or the <code>id</code> of an existing HTML element to use as the content\nfor this component.</p>\n\n\n<ul>\n<li><b>Description</b> :\n<div class=\"sub-desc\">This config option is used to take an existing HTML element and place it in the layout element\nof a new component (it simply moves the specified DOM element <i>after the Component is rendered</i> to use as the content.</div></li>\n<li><b>Notes</b> :\n<div class=\"sub-desc\">The specified HTML element is appended to the layout element of the component <i>after any configured\n<a href=\"#/api/Ext.Editor-cfg-html\" rel=\"Ext.Editor-cfg-html\" class=\"docClass\">HTML</a> has been inserted</i>, and so the document will not contain this element at the time the <a href=\"#/api/Ext.Editor-event-render\" rel=\"Ext.Editor-event-render\" class=\"docClass\">render</a> event is fired.</div>\n<div class=\"sub-desc\">The specified HTML element used will not participate in any <code><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></code>\nscheme that the Component may use. It is just HTML. Layouts operate on child <code><b><a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a></b></code>.</div>\n<div class=\"sub-desc\">Add either the <code>x-hidden</code> or the <code>x-hide-display</code> CSS class to\nprevent a brief flicker of the content before it is rendered to the panel.</div></li>\n</ul>\n\n",
        "linenr": 422,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-data",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "data",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The initial set of data to apply to the <code><a href=\"#/api/Ext.Editor-cfg-tpl\" rel=\"Ext.Editor-cfg-tpl\" class=\"docClass\">tpl</a></code> to\nupdate the content area of the Component.</p>\n",
        "linenr": 260,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabled",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Defaults to false.</p>\n",
        "linenr": 384,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabledCls",
        "shortDoc": "CSS class to add when the Component is disabled. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disabledCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS class to add when the Component is disabled. Defaults to 'x-item-disabled'.</p>\n",
        "linenr": 302,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-draggable",
        "shortDoc": "Specify as true to make a floating Component draggable using the Component's encapsulating element as the drag handle. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "draggable",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to make a <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> Component draggable using the Component's encapsulating element as the drag handle.</p>\n\n\n<p>This may also be specified as a config object for the <a href=\"#/api/Ext.util.ComponentDragger\" rel=\"Ext.util.ComponentDragger\" class=\"docClass\">ComponentDragger</a> which is instantiated to perform dragging.</p>\n\n\n<p>For example to create a Component which may only be dragged around using a certain internal element as the drag handle,\nuse the delegate option:</p>\n\n\n<p><code></p>\n\n<pre>new Ext.Component({\n    constrain: true,\n    floating:true,\n    style: {\n        backgroundColor: '#fff',\n        border: '1px solid black'\n    },\n    html: '&lt;h1 style=\"cursor:move\"&gt;The title&lt;/h1&gt;&lt;p&gt;The content&lt;/p&gt;',\n    draggable: {\n        delegate: 'h1'\n    }\n}).show();\n</pre>\n\n\n<p></code></p>\n",
        "linenr": 237,
        "html_filename": "Component2.html"
      },
      {
        "type": "Ext.form.field.Field",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-field",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "field",
        "owner": "Ext.Editor",
        "doc": "<p>The Field object (or descendant) or config object for field</p>\n",
        "linenr": 51,
        "html_filename": "Editor.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-floating",
        "shortDoc": "Specify as true to float the Component outside of the document flow using CSS absolute positioning. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "floating",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to float the Component outside of the document flow using CSS absolute positioning.</p>\n\n\n<p>Components such as <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s and <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Menu</a>s are floating\nby default.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will register themselves with the global\n<a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<h3 class=\"pa\">Floating Components as child items of a Container</h3>\n\n\n<p>A floating Component may be used as a child item of a Container. This just allows the floating Component to seek a ZIndexManager by\nexamining the ownerCt chain.</p>\n\n\n<p>When configured as floating, Components acquire, at render time, a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which manages a stack\nof related floating Components. The ZIndexManager brings a single floating Component to the top of its stack when\nthe Component's <a href=\"#/api/Ext.Editor-method-toFront\" rel=\"Ext.Editor-method-toFront\" class=\"docClass\">toFront</a> method is called.</p>\n\n\n<p>The ZIndexManager is found by traversing up the <a href=\"#/api/Ext.Editor-property-ownerCt\" rel=\"Ext.Editor-property-ownerCt\" class=\"docClass\">ownerCt</a> chain to find an ancestor which itself is floating. This is so that\ndescendant floating Components of floating <i>Containers</i> (Such as a ComboBox dropdown within a Window) can have its zIndex managed relative\nto any siblings, but always <b>above</b> that floating ancestor Container.</p>\n\n\n<p>If no floating ancestor is found, a floating Component registers itself with the default <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a>.</p>\n\n\n<p>Floating components <i>do not participate in the Container's layout</i>. Because of this, they are not rendered until you explicitly\n<a href=\"#/api/Ext.Editor-event-show\" rel=\"Ext.Editor-event-show\" class=\"docClass\">show</a> them.</p>\n\n\n<p>After rendering, the ownerCt reference is deleted, and the <a href=\"#/api/Ext.Editor-property-floatParent\" rel=\"Ext.Editor-property-floatParent\" class=\"docClass\">floatParent</a> property is set to the found floating ancestor Container.\nIf no floating ancestor Container was found the <a href=\"#/api/Ext.Editor-property-floatParent\" rel=\"Ext.Editor-property-floatParent\" class=\"docClass\">floatParent</a> property will not be set.</p>\n\n",
        "linenr": 178,
        "html_filename": "Component2.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Floating.html#Ext-util-Floating-cfg-focusOnToFront",
        "shortDoc": "Specifies whether the floated component should be automatically focused when it is\nbrought to the front. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "focusOnToFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floated component should be automatically <a href=\"#/api/Ext.Editor-method-focus\" rel=\"Ext.Editor-method-focus\" class=\"docClass\">focused</a> when it is\n<a href=\"#/api/Ext.Editor-method-toFront\" rel=\"Ext.Editor-method-toFront\" class=\"docClass\">brought to the front</a>. Defaults to true.</p>\n",
        "linenr": 9,
        "html_filename": "Floating.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-frame",
        "shortDoc": "Specify as true to have the Component inject framing elements within the Component at render time to\nprovide a graphi...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "frame",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specify as <code>true</code> to have the Component inject framing elements within the Component at render time to\nprovide a graphical rounded frame around the Component content.</p>\n\n\n<p>This is only necessary when running on outdated, or non standard-compliant browsers such as Microsoft's Internet Explorer\nprior to version 9 which do not support rounded corners natively.</p>\n\n\n<p>The extra space taken up by this framing is available from the read only property <a href=\"#/api/Ext.Editor-property-frameSize\" rel=\"Ext.Editor-property-frameSize\" class=\"docClass\">frameSize</a>.</p>\n\n",
        "linenr": 219,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-height",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "height",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The height of this component in pixels.</p>\n",
        "linenr": 355,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hidden",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Defaults to false.</p>\n",
        "linenr": 378,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-hideEl",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "hideEl",
        "owner": "Ext.Editor",
        "doc": "<p>False to keep the bound element visible while the editor is displayed (defaults to true)</p>\n",
        "linenr": 99,
        "html_filename": "Editor.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hideMode",
        "shortDoc": "A String which specifies how this Component's encapsulating DOM element will be hidden. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hideMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A String which specifies how this Component's encapsulating DOM element will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div>\nDefaults to <code>'display'</code>.</p>\n",
        "linenr": 409,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String/Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-html",
        "shortDoc": "An HTML fragment, or a DomHelper specification to use as the layout element\ncontent (defaults to ''). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "html",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An HTML fragment, or a <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> specification to use as the layout element\ncontent (defaults to ''). The HTML content is added after the component is rendered,\nso the document will not contain this HTML at the time the <a href=\"#/api/Ext.Editor-event-render\" rel=\"Ext.Editor-event-render\" class=\"docClass\">render</a> event is fired.\nThis content is inserted into the body <i>before</i> any configured <a href=\"#/api/Ext.Editor-cfg-contentEl\" rel=\"Ext.Editor-cfg-contentEl\" class=\"docClass\">contentEl</a> is appended.</p>\n",
        "linenr": 440,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-id",
        "shortDoc": "The unique id of this component instance (defaults to an auto-assigned id). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "id",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The <b><u>unique id of this component instance</u></b> (defaults to an <a href=\"#/api/Ext.Editor-method-getId\" rel=\"Ext.Editor-method-getId\" class=\"docClass\">auto-assigned id</a>).</p>\n\n\n<p>It should not be necessary to use this configuration except for singleton objects in your application.\nComponents created with an id may be accessed globally using <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>.</p>\n\n\n<p>Instead of using assigned ids, use the <a href=\"#/api/Ext.Editor-cfg-itemId\" rel=\"Ext.Editor-cfg-itemId\" class=\"docClass\">itemId</a> config, and <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> which\nprovides selector-based searching for Sencha Components analogous to DOM querying. The <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>\nclass contains <a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">shortcut methods</a> to query its descendant Components by selector.</p>\n\n\n<p>Note that this id will also be used as the element id for the containing HTML element\nthat is rendered to the page for this component. This allows you to write id-based CSS\nrules to style the specific instance of this component uniquely, and also to select\nsub-elements using this component's id as the parent.</p>\n\n\n<p><b>Note</b>: to avoid complications imposed by a unique <tt>id</tt> also see <code><a href=\"#/api/Ext.Editor-cfg-itemId\" rel=\"Ext.Editor-cfg-itemId\" class=\"docClass\">itemId</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of a Component see <code><a href=\"#/api/Ext.Editor-property-ownerCt\" rel=\"Ext.Editor-property-ownerCt\" class=\"docClass\">ownerCt</a></code>.</p>\n\n",
        "linenr": 50,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-ignoreNoChange",
        "shortDoc": "True to skip the edit completion process (no save, no events fired) if the user completes an edit and\nthe value has n...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "ignoreNoChange",
        "owner": "Ext.Editor",
        "doc": "<p>True to skip the edit completion process (no save, no events fired) if the user completes an edit and\nthe value has not changed (defaults to false).  Applies only to string values - edits for other data types\nwill never be ignored.</p>\n",
        "linenr": 92,
        "html_filename": "Editor.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-itemId",
        "shortDoc": "An itemId can be used as an alternative way to get a reference to a component\nwhen no object reference is available. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "itemId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <tt>itemId</tt> can be used as an alternative way to get a reference to a component\nwhen no object reference is available.  Instead of using an <code><a href=\"#/api/Ext.Editor-cfg-id\" rel=\"Ext.Editor-cfg-id\" class=\"docClass\">id</a></code> with\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>.<a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">getCmp</a>, use <code>itemId</code> with\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a> which will retrieve\n<code>itemId</code>'s or <tt><a href=\"#/api/Ext.Editor-cfg-id\" rel=\"Ext.Editor-cfg-id\" class=\"docClass\">id</a></tt>'s. Since <code>itemId</code>'s are an index to the\ncontainer's internal MixedCollection, the <code>itemId</code> is scoped locally to the container --\navoiding potential conflicts with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> which requires a <b>unique</b>\n<code><a href=\"#/api/Ext.Editor-cfg-id\" rel=\"Ext.Editor-cfg-id\" class=\"docClass\">id</a></code>.</p>\n\n\n<pre><code>var c = new Ext.panel.Panel({ //\n    <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 300,\n    <a href=\"#/api/Ext.Editor-cfg-renderTo\" rel=\"Ext.Editor-cfg-renderTo\" class=\"docClass\">renderTo</a>: document.body,\n    <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a>: 'auto',\n    <a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a>: [\n        {\n            itemId: 'p1',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 1',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        },\n        {\n            itemId: 'p2',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 2',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        }\n    ]\n})\np1 = c.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p1'); // not the same as <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp()</a>\np2 = p1.<a href=\"#/api/Ext.Editor-property-ownerCt\" rel=\"Ext.Editor-property-ownerCt\" class=\"docClass\">ownerCt</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p2'); // reference via a sibling\n</code></pre>\n\n\n<p>Also see <tt><a href=\"#/api/Ext.Editor-cfg-id\" rel=\"Ext.Editor-cfg-id\" class=\"docClass\">id</a></tt>, <code><a href=\"#/api/Ext.container.Container-method-query\" rel=\"Ext.container.Container-method-query\" class=\"docClass\">Ext.container.Container.query</a></code>,\n<code><a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">Ext.container.Container.down</a></code> and <code><a href=\"#/api/Ext.container.Container-method-child\" rel=\"Ext.container.Container-method-child\" class=\"docClass\">Ext.container.Container.child</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of an item see <tt><a href=\"#/api/Ext.Editor-property-ownerCt\" rel=\"Ext.Editor-property-ownerCt\" class=\"docClass\">ownerCt</a></tt>.</p>\n\n",
        "linenr": 66,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.Editor-method-addListener\" rel=\"Ext.Editor-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 102,
        "html_filename": "Observable.html"
      },
      {
        "type": "Ext.ComponentLoader/Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-loader",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "loader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A configuration object or an instance of a <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> to load remote\ncontent for this Component.</p>\n",
        "linenr": 483,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-maintainFlex",
        "shortDoc": "Only valid when a sibling element of a Splitter within a VBox or\nHBox layout. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "maintainFlex",
        "owner": "Ext.Component",
        "doc": "<p><b>Only valid when a sibling element of a <a href=\"#/api/Ext.resizer.Splitter\" rel=\"Ext.resizer.Splitter\" class=\"docClass\">Splitter</a> within a <a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">VBox</a> or\n<a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">HBox</a> layout.</b></p>\n\n\n<p>Specifies that if an immediate sibling Splitter is moved, the Component on the <i>other</i> side is resized, and this\nComponent maintains its configured <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">flex</a> value.</p>\n\n",
        "linenr": 259,
        "html_filename": "Component2.html"
      },
      {
        "type": "Number/String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-margin",
        "shortDoc": "Specifies the margin for this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "margin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 372,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxHeight",
        "shortDoc": "The maximum value in pixels which this Component will set its height to. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maxHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 472,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxWidth",
        "shortDoc": "The maximum value in pixels which this Component will set its width to. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maxWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 477,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minHeight",
        "shortDoc": "The minimum value in pixels which this Component will set its height to. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "minHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 462,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minWidth",
        "shortDoc": "The minimum value in pixels which this Component will set its width to. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "minWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 467,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-offsets",
        "shortDoc": "The offsets to use when aligning (see Ext.core.Element.alignTo for more details. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "offsets",
        "owner": "Ext.Editor",
        "doc": "<p>The offsets to use when aligning (see <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">Ext.core.Element.alignTo</a> for more details. Defaults to <tt>[0, 0]</tt>.</p>\n",
        "linenr": 116,
        "html_filename": "Editor.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-overCls",
        "shortDoc": "An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "overCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and removed when the mouse moves out. (defaults to '').  This can be\nuseful for adding customized 'active' or 'hover' styles to the component or any of its children using standard CSS rules.</p>\n",
        "linenr": 295,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number/String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-padding",
        "shortDoc": "Specifies the padding for this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "padding",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 366,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-parentEl",
        "shortDoc": "An element to render to. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "parentEl",
        "owner": "Ext.Editor",
        "doc": "<p>An element to render to. Defaults to the <tt>document.body</tt>.</p>\n",
        "linenr": 153,
        "html_filename": "Editor.html"
      },
      {
        "type": "Object/Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-plugins",
        "shortDoc": "An object or array of objects that will provide custom functionality for this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "plugins",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object or array of objects that will provide custom functionality for this component.  The only\nrequirement for a valid plugin is that it contain an init method that accepts a reference of type <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.\nWhen a component is created, if any plugins are available, the component will call the init method on each\nplugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the\ncomponent as needed to provide its functionality.</p>\n",
        "linenr": 512,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderSelectors",
        "shortDoc": "An object containing properties specifying DomQuery selectors which identify child elements\ncreated by the render pro...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderSelectors",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object containing properties specifying <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selectors which identify child elements\ncreated by the render process.</p>\n\n<p>After the Component's internal structure is rendered according to the <a href=\"#/api/Ext.Editor-cfg-renderTpl\" rel=\"Ext.Editor-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, this object is iterated through,\nand the found Elements are added as properties to the Component using the <code>renderSelector</code> property name.</p>\n\n<p>For example, a Component which rendered an image, and description into its element might use the following properties\ncoded into its prototype:</p>\n\n<pre><code>renderTpl: '&amp;lt;img src=\"{imageUrl}\" class=\"x-image-component-img\"&gt;&amp;lt;div class=\"x-image-component-desc\"&gt;{description}&amp;gt;/div&amp;lt;',\n\nrenderSelectors: {\n    image: 'img.x-image-component-img',\n    descEl: 'div.x-image-component-desc'\n}\n</code></pre>\n\n<p>After rendering, the Component would have a property <code>image</code> referencing its child <code>img</code> Element,\nand a property <code>descEl</code> referencing the <code>div</code> Element which contains the description.</p>\n",
        "linenr": 179,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTo",
        "shortDoc": "Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderTo",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into.</p>\n\n\n<div><ul>\n<li><b>Notes</b> : <ul>\n<div class=\"sub-desc\">Do <u>not</u> use this option if the Component is to be a child item of\na <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>. It is the responsibility of the\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>'s <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout manager</a>\nto render and manage its child items.</div>\n<div class=\"sub-desc\">When using this config, a call to render() is not required.</div>\n</ul></li>\n</ul></div>\n\n\n<p>See <code><a href=\"#/api/Ext.Editor-event-render\" rel=\"Ext.Editor-event-render\" class=\"docClass\">render</a></code> also.</p>\n\n",
        "linenr": 204,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTpl",
        "shortDoc": "An XTemplate used to create the internal structure inside this Component's\nencapsulating Element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderTpl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> used to create the internal structure inside this Component's\nencapsulating <a href=\"#/api/Ext.Editor-method-getEl\" rel=\"Ext.Editor-method-getEl\" class=\"docClass\">Element</a>.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\nand <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>, this defaults to <b><code>null</code></b> which means that they will be initially rendered\nwith no internal structure; they render their <a href=\"#/api/Ext.Editor-method-getEl\" rel=\"Ext.Editor-method-getEl\" class=\"docClass\">Element</a> empty. The more specialized ExtJS and Touch classes\nwhich use a more complex DOM structure, provide their own template definitions.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components with customized\ninternal structure.</p>\n\n\n<p>Upon rendering, any created child elements may be automatically imported into object properties using the\n<a href=\"#/api/Ext.Editor-cfg-renderSelectors\" rel=\"Ext.Editor-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a> option.</p>\n\n",
        "linenr": 164,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-resizable",
        "shortDoc": "Specify as true to apply a Resizer to this Component\nafter rendering. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "resizable",
        "owner": "Ext.Component",
        "doc": "<p>Specify as <code>true</code> to apply a <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a> to this Component\nafter rendering.</p>\n\n\n<p>May also be specified as a config object to be passed to the constructor of <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a>\nto override any defaults. By default the Component passes its minimum and maximum size, and uses\n<code><a href=\"#/api/Ext.resizer.Resizer-cfg-dynamic\" rel=\"Ext.resizer.Resizer-cfg-dynamic\" class=\"docClass\">Ext.resizer.Resizer.dynamic</a>: false</code></p>\n\n",
        "linenr": 157,
        "html_filename": "Component2.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-resizeHandles",
        "shortDoc": "A valid Ext.resizer.Resizer handles config string (defaults to 'all'). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "resizeHandles",
        "owner": "Ext.Component",
        "doc": "<p>A valid <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Ext.resizer.Resizer</a> handles config string (defaults to 'all').  Only applies when resizable = true.</p>\n",
        "linenr": 166,
        "html_filename": "Component2.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-revertInvalid",
        "shortDoc": "True to automatically revert the field value and cancel the edit when the user completes an edit and the field\nvalida...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "revertInvalid",
        "owner": "Ext.Editor",
        "doc": "<p>True to automatically revert the field value and cancel the edit when the user completes an edit and the field\nvalidation fails (defaults to true)</p>\n",
        "linenr": 85,
        "html_filename": "Editor.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Stateful.html#Ext-state-Stateful-cfg-saveBuffer",
        "shortDoc": "A buffer to be applied if many state events are fired within\na short period. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "saveBuffer",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A buffer to be applied if many state events are fired within\na short period. Defaults to 100.</p>\n",
        "linenr": 74,
        "html_filename": "Stateful.html"
      },
      {
        "type": "Boolean/String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-shadow",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "shadow",
        "owner": "Ext.Editor",
        "doc": "<p>\"sides\" for sides/bottom only, \"frame\" for 4-way shadow, and \"drop\"\nfor bottom-right shadow (defaults to \"frame\")</p>\n",
        "linenr": 122,
        "html_filename": "Editor.html"
      },
      {
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateEvents",
        "shortDoc": "An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). <code>stateEvents</code> may be any type\nof event supported by this object, including browser or custom events\n(e.g., <tt>['click', 'customerchange']</tt>).</p>\n\n\n<p>See <code><a href=\"#/api/Ext.Editor-cfg-stateful\" rel=\"Ext.Editor-cfg-stateful\" class=\"docClass\">stateful</a></code> for an explanation of saving and\nrestoring object state.</p>\n\n",
        "linenr": 64,
        "html_filename": "Stateful.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateId",
        "shortDoc": "The unique id for this object to use for state management purposes. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>The unique id for this object to use for state management purposes.</p>\n\n<p>See <a href=\"#/api/Ext.Editor-cfg-stateful\" rel=\"Ext.Editor-cfg-stateful\" class=\"docClass\">stateful</a> for an explanation of saving and restoring state.</p>\n\n",
        "linenr": 58,
        "html_filename": "Stateful.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateful",
        "shortDoc": "A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateful",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. The object must have\na <code><a href=\"#/api/Ext.Editor-cfg-stateId\" rel=\"Ext.Editor-cfg-stateId\" class=\"docClass\">stateId</a></code> for state to be managed.\nAuto-generated ids are not guaranteed to be stable across page loads and\ncannot be relied upon to save and restore the same state for a object.<p>\n<p>For state saving to work, the state manager's provider must have been\nset to an implementation of <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> which overrides the\n<a href=\"#/api/Ext.state.Provider-method-set\" rel=\"Ext.state.Provider-method-set\" class=\"docClass\">set</a> and <a href=\"#/api/Ext.state.Provider-method-get\" rel=\"Ext.state.Provider-method-get\" class=\"docClass\">get</a>\nmethods to save and recall name/value pairs. A built-in implementation,\n<a href=\"#/api/Ext.state.CookieProvider\" rel=\"Ext.state.CookieProvider\" class=\"docClass\">Ext.state.CookieProvider</a> is available.</p>\n<p>To set the state provider for the current page:</p>\n<pre><code>Ext.state.Manager.setProvider(new Ext.state.CookieProvider({\n    expires: new Date(new Date().getTime()+(1000*60*60*24*7)), //7 days from now\n}));\n</code></pre>\n<p>A stateful object attempts to save state when one of the events\nlisted in the <code><a href=\"#/api/Ext.Editor-cfg-stateEvents\" rel=\"Ext.Editor-cfg-stateEvents\" class=\"docClass\">stateEvents</a></code> configuration fires.</p>\n<p>To save state, a stateful object first serializes its state by\ncalling <b><code><a href=\"#/api/Ext.Editor-method-getState\" rel=\"Ext.Editor-method-getState\" class=\"docClass\">getState</a></code></b>. By default, this function does\nnothing. The developer must provide an implementation which returns an\nobject hash which represents the restorable state of the object.</p>\n<p>The value yielded by getState is passed to <a href=\"#/api/Ext.state.Manager-method-set\" rel=\"Ext.state.Manager-method-set\" class=\"docClass\">Ext.state.Manager.set</a>\nwhich uses the configured <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> to save the object\nkeyed by the <code><a href=\"#/api/Ext.Editor-cfg-stateId\" rel=\"Ext.Editor-cfg-stateId\" class=\"docClass\">stateId</a></code></p>.\n<p>During construction, a stateful object attempts to <i>restore</i>\nits state by calling <a href=\"#/api/Ext.state.Manager-method-get\" rel=\"Ext.state.Manager-method-get\" class=\"docClass\">Ext.state.Manager.get</a> passing the\n<code><a href=\"#/api/Ext.Editor-cfg-stateId\" rel=\"Ext.Editor-cfg-stateId\" class=\"docClass\">stateId</a></code></p>\n<p>The resulting object is passed to <b><code><a href=\"#/api/Ext.Editor-method-applyState\" rel=\"Ext.Editor-method-applyState\" class=\"docClass\">applyState</a></code></b>.\nThe default implementation of <code><a href=\"#/api/Ext.Editor-method-applyState\" rel=\"Ext.Editor-method-applyState\" class=\"docClass\">applyState</a></code> simply copies\nproperties into the object, but a developer may override this to support\nmore behaviour.</p>\n<p>You can perform extra processing on state save and restore by attaching\nhandlers to the <a href=\"#/api/Ext.Editor-event-beforestaterestore\" rel=\"Ext.Editor-event-beforestaterestore\" class=\"docClass\">beforestaterestore</a>, <a href=\"#/api/Ext.Editor-event-staterestore\" rel=\"Ext.Editor-event-staterestore\" class=\"docClass\">staterestore</a>,\n<a href=\"#/api/Ext.Editor-event-beforestatesave\" rel=\"Ext.Editor-event-beforestatesave\" class=\"docClass\">beforestatesave</a> and <a href=\"#/api/Ext.Editor-event-statesave\" rel=\"Ext.Editor-event-statesave\" class=\"docClass\">statesave</a> events.</p>\n\n",
        "linenr": 18,
        "html_filename": "Stateful.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-style",
        "shortDoc": "A custom style specification to be applied to this component's Element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "style",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A custom style specification to be applied to this component's Element.  Should be a valid argument to\n<a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>.</p>\n\n<pre><code>        new Ext.panel.Panel({\n            title: 'Some Title',\n            renderTo: Ext.getBody(),\n            width: 400, height: 300,\n            layout: 'form',\n            items: [{\n                xtype: 'textarea',\n                style: {\n                    width: '95%',\n                    marginBottom: '10px'\n                }\n            },\n            new Ext.button.Button({\n                text: 'Send',\n                minWidth: '100',\n                style: {\n                    marginBottom: '10px'\n                }\n            })\n            ]\n        });\n     </code></pre>\n\n",
        "linenr": 321,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlCls",
        "shortDoc": "The class that is added to the content target when you set styleHtmlContent to true. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "styleHtmlCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The class that is added to the content target when you set styleHtmlContent to true.\nDefaults to 'x-html'</p>\n",
        "linenr": 455,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlContent",
        "shortDoc": "True to automatically style the html inside the content target of this component (body for panels). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "styleHtmlContent",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically style the html inside the content target of this component (body for panels).\nDefaults to false.</p>\n",
        "linenr": 448,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-swallowKeys",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "swallowKeys",
        "owner": "Ext.Editor",
        "doc": "<p>Handle the keydown/keypress events so they don't propagate (defaults to true)</p>\n",
        "linenr": 133,
        "html_filename": "Editor.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-toFrontOnShow",
        "shortDoc": "True to automatically call toFront when the show method is called\non an already visible, floating component (default ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "toFrontOnShow",
        "owner": "Ext.Component",
        "doc": "<p>True to automatically call <a href=\"#/api/Ext.Editor-method-toFront\" rel=\"Ext.Editor-method-toFront\" class=\"docClass\">toFront</a> when the <a href=\"#/api/Ext.Editor-event-show\" rel=\"Ext.Editor-event-show\" class=\"docClass\">show</a> method is called\non an already visible, floating component (default is <code>true</code>).</p>\n\n",
        "linenr": 202,
        "html_filename": "Component2.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tpl",
        "shortDoc": "An Ext.Template, Ext.XTemplate\nor an array of strings to form an Ext.XTemplate. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "tpl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <bold><a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></bold>, <bold><a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a></bold>\nor an array of strings to form an <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.\nUsed in conjunction with the <code><a href=\"#/api/Ext.Editor-cfg-data\" rel=\"Ext.Editor-cfg-data\" class=\"docClass\">data</a></code> and\n<code><a href=\"#/api/Ext.Editor-cfg-tplWriteMode\" rel=\"Ext.Editor-cfg-tplWriteMode\" class=\"docClass\">tplWriteMode</a></code> configurations.</p>\n",
        "linenr": 252,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tplWriteMode",
        "shortDoc": "The Ext.(X)Template method to use when\nupdating the content area of the Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "tplWriteMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The Ext.(X)Template method to use when\nupdating the content area of the Component. Defaults to <code>'overwrite'</code>\n(see <code><a href=\"#/api/Ext.XTemplate-method-overwrite\" rel=\"Ext.XTemplate-method-overwrite\" class=\"docClass\">Ext.XTemplate.overwrite</a></code>).</p>\n",
        "linenr": 266,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String/Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-ui",
        "shortDoc": "A set style for a component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "ui",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A set style for a component. Can be a string or an Array of multiple strings (UIs)</p>\n",
        "linenr": 308,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-updateEl",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "updateEl",
        "owner": "Ext.Editor",
        "doc": "<p>True to update the innerHTML of the bound element when the update completes (defaults to false)</p>\n",
        "linenr": 148,
        "html_filename": "Editor.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Editor.html#Ext-Editor-cfg-value",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "name": "value",
        "owner": "Ext.Editor",
        "doc": "<p>The data value of the underlying field (defaults to \"\")</p>\n",
        "linenr": 104,
        "html_filename": "Editor.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-width",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "width",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The width of this component in pixels.</p>\n",
        "linenr": 350,
        "html_filename": "AbstractComponent.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Component2.html#Ext-Component-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new Component. ...",
        "static": false,
        "params": [
          {
            "type": "Ext.core.Element/String/Object",
            "optional": false,
            "doc": "<p>The configuration options may be specified as either:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>an element</b> :\n<p class=\"sub-desc\">it is set as the internal element and its id used as the component id</p></li>\n<li><b>a string</b> :\n<p class=\"sub-desc\">it is assumed to be the id of an existing element and is used as the component id</p></li>\n<li><b>anything else</b> :\n<p class=\"sub-desc\">it is assumed to be a standard config object and is applied to the component</p></li>\n</ul></div>\n\n",
            "name": "config"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "doc": "<p>Creates new Component.</p>\n",
        "owner": "Ext.Component",
        "name": "Editor",
        "html_filename": "Component2.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 1
      },
      {
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Color-method-addCls\" rel=\"Ext.picker.Color-method-addCls\" class=\"docClass\">addCls</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Adds a CSS class to the top level element representing this component."
        },
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClass",
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "name": "addClass",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "linenr": 2328,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addCls",
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "name": "addCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "linenr": 2306,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClsWithUI",
        "shortDoc": "Adds a cls to the uiCls array, which will also call addUIClsToElement and adds\nto all elements of this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>A string or an array of strings to add to the uiCls</p>\n",
            "name": "cls"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Boolean) skip True to skip adding it to the class and do it later (via the return)</p>\n",
            "name": "skip"
          }
        ],
        "name": "addClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a cls to the uiCls array, which will also call <a href=\"#/api/Ext.Editor-method-addUIClsToElement\" rel=\"Ext.Editor-method-addUIClsToElement\" class=\"docClass\">addUIClsToElement</a> and adds\nto all elements of this component.</p>\n",
        "linenr": 1463,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "name": "o"
          },
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>Optional additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "name": "more"
          }
        ],
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "linenr": 494,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "shortDoc": "Appends an event handler to this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.Editor-method-fireEvent\" rel=\"Ext.Editor-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "linenr": 278,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 156,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Stateful.html#Ext-state-Stateful-method-addStateEvents",
        "shortDoc": "Add events that will trigger the state to be saved. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The event name or an array of event names.</p>\n",
            "name": "events"
          }
        ],
        "name": "addStateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Add events that will trigger the state to be saved.</p>\n",
        "linenr": 159,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-addStatics",
        "shortDoc": "Add / override static properties of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "addStatics",
        "owner": "Ext.Base",
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "linenr": 388,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addUIClsToElement",
        "shortDoc": "Method which adds a specified UI + uiCls to the components element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The UI to remove from the element</p>\n",
            "name": "ui"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "force"
          }
        ],
        "name": "addUIClsToElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which adds a specified UI + uiCls to the components element.\nCan be overridden to remove the UI from more than just the components element.</p>\n",
        "linenr": 1534,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-afterComponentLayout",
        "shortDoc": " ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "name": "isSetSize"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>Container requesting the layout. Only used when isSetSize is false.</p>\n",
            "name": "callingContainer"
          }
        ],
        "name": "afterComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "\n",
        "linenr": 2699,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-alignTo",
        "shortDoc": "Aligns this floating Component to the specified element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element or <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> to align to. If passing a component, it must\nbe a omponent instance. If a string id is passed, it will be used as an element id.</p>\n",
            "name": "element"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to (see <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">Ext.core.Element.alignTo</a> for more details).</p>\n",
            "name": "position"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "name": "offsets"
          }
        ],
        "name": "alignTo",
        "owner": "Ext.util.Floating",
        "doc": "<p>Aligns this floating Component to the specified element</p>\n",
        "linenr": 173,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-animate",
        "shortDoc": "Perform custom animation on this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing properties which describe the animation's start and end states, and the timeline of the animation.</p>\n",
            "name": "config"
          }
        ],
        "name": "animate",
        "owner": "Ext.util.Animate",
        "doc": "<p>Perform custom animation on this object.<p>\n<p>This method is applicable to both the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class and the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> class.\nIt performs animated transitions of certain properties of this object over a specified timeline.</p>\n<p>The sole parameter is an object which specifies start property values, end property values, and properties which\ndescribe the timeline. Of the properties listed below, only <b><code>to</code></b> is mandatory.</p>\n<p>Properties include<ul>\n<li><code>from</code> <div class=\"sub-desc\">An object which specifies start values for the properties being animated.\nIf not supplied, properties are animated from current settings. The actual properties which may be animated depend upon\nths object being animated. See the sections below on Element and Component animation.<div></li>\n<li><code>to</code> <div class=\"sub-desc\">An object which specifies end values for the properties being animated.</div></li>\n<li><code>duration</code><div class=\"sub-desc\">The duration <b>in milliseconds</b> for which the animation will run.</div></li>\n<li><code>easing</code> <div class=\"sub-desc\">A string value describing an easing type to modify the rate of change from the default linear to non-linear. Values may be one of:<code><ul>\n<li>ease</li>\n<li>easeIn</li>\n<li>easeOut</li>\n<li>easeInOut</li>\n<li>backIn</li>\n<li>backOut</li>\n<li>elasticIn</li>\n<li>elasticOut</li>\n<li>bounceIn</li>\n<li>bounceOut</li>\n</ul></code></div></li>\n<li><code>keyframes</code> <div class=\"sub-desc\">This is an object which describes the state of animated properties at certain points along the timeline.\nit is an object containing properties who's names are the percentage along the timeline being described and who's values specify the animation state at that point.</div></li>\n<li><code>listeners</code> <div class=\"sub-desc\">This is a standard <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration object which may be used\nto inject behaviour at either the <code>beforeanimate</code> event or the <code>afteranimate</code> event.</div></li>\n</ul></p>\n<h3>Animating an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The element's CSS <code>left</code> value. Units must be supplied.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The element's CSS <code>top</code> value. Units must be supplied.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The element's CSS <code>width</code> value. Units must be supplied.</div></li>\n<li><code>height</code> <div class=\"sub-desc\">The element's CSS <code>height</code> value. Units must be supplied.</div></li>\n<li><code>scrollLeft</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>scrollTop</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>opacity</code> <div class=\"sub-desc\">The element's <code>opacity</code> value. This must be a value between <code>0</code> and <code>1</code>.</div></li>\n</ul>\n<p><b>Be aware than animating an Element which is being used by an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> Component without in some way informing the Component about the changed element state\nwill result in incorrect Component behaviour. This is because the Component will be using the old state of the element. To avoid this problem, it is now possible to\ndirectly animate certain properties of Components.</b></p>\n<h3>Animating a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The Component's page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The Component's page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The Component's <code>left</code> value in pixels.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The Component's <code>top</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>dynamic</code> <div class=\"sub-desc\">Specify as true to update the Component's layout (if it is a Container) at every frame\nof the animation. <i>Use sparingly as laying out on every intermediate size change is an expensive operation</i>.</div></li>\n</ul>\n<p>For example, to animate a Window to a new size, ensuring that its internal layout, and any shadow is correct:</p>\n<pre><code>myWindow = Ext.create('Ext.window.Window', {\n    title: 'Test Component animation',\n    width: 500,\n    height: 300,\n    layout: {\n        type: 'hbox',\n        align: 'stretch'\n    },\n    items: [{\n        title: 'Left: 33%',\n        margins: '5 0 5 5',\n        flex: 1\n    }, {\n        title: 'Left: 66%',\n        margins: '5 5 5 5',\n        flex: 2\n    }]\n});\nmyWindow.show();\nmyWindow.header.el.on('click', function() {\n    myWindow.animate({\n        to: {\n            width: (myWindow.getWidth() == 500) ? 700 : 500,\n            height: (myWindow.getHeight() == 300) ? 400 : 300,\n        }\n    });\n});\n</code></pre>\n<p>For performance reasons, by default, the internal layout is only updated when the Window reaches its final <code>\"to\"</code> size. If dynamic updating of the Window's child\nComponents is required, then configure the animation with <code>dynamic: true</code> and the two child items will maintain their proportions during the animation.</p>\n\n",
        "linenr": 207,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Stateful.html#Ext-state-Stateful-method-applyState",
        "shortDoc": "Applies the state to the object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The state</p>\n",
            "name": "state"
          }
        ],
        "name": "applyState",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Applies the state to the object. This should be overridden in subclasses to do\nmore complex state operations. By default it applies the state properties onto\nthe current object.</p>\n",
        "linenr": 225,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-beforeComponentLayout",
        "shortDoc": "Occurs before componentLayout is run. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "name": "isSetSize"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>Container requesting sent the layout. Only used when isSetSize is false.</p>\n",
            "name": "callingContainer"
          }
        ],
        "name": "beforeComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the componentLayout\nfrom being executed.</p>\n",
        "linenr": 2709,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-bubble",
        "shortDoc": "Bubbles up the component/container heirarchy, calling the specified function with each component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope of the function (defaults to current node)</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current component)</p>\n",
            "name": "args"
          }
        ],
        "name": "bubble",
        "owner": "Ext.Component",
        "doc": "<p>Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
        "linenr": 1007,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callParent",
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Editor.html#Ext-Editor-method-cancelEdit",
        "shortDoc": "Cancels the editing process and hides the editor without persisting any changes. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Override the default behavior and keep the editor visible after\ncancel (defaults to false)</p>\n",
            "name": "remainVisible"
          }
        ],
        "name": "cancelEdit",
        "owner": "Ext.Editor",
        "doc": "<p>Cancels the editing process and hides the editor without persisting any changes.  The field value will be\nreverted to the original starting value.</p>\n",
        "linenr": 392,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-capture",
        "shortDoc": "Starts capture on the specified Observable. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable",
            "optional": false,
            "doc": "<p>The Observable to capture events from.</p>\n",
            "name": "o"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call when an event is fired.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to\nthe Observable firing the event.</p>\n",
            "name": "scope"
          }
        ],
        "name": "capture",
        "owner": "Ext.util.Observable",
        "doc": "<p>Starts capture on the specified Observable. All events will be passed to the supplied function with the event\nname + standard signature of the event <strong>before</strong> the event is fired. If the supplied function returns false,\nthe event will not fire.</p>\n",
        "linenr": 54,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-center",
        "shortDoc": "Center this Component in its container. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [

        ],
        "name": "center",
        "owner": "Ext.util.Floating",
        "doc": "<p>Center this Component in its container.</p>\n",
        "linenr": 251,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "linenr": 425,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "shortDoc": "Removes all managed listeners for this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "linenr": 454,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-cloneConfig",
        "shortDoc": "Clone the current component using the original config values passed into this instance by default. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A new config containing any properties to override in the cloned version.\nAn id property can be passed on this object, otherwise one will be generated to avoid duplicates.</p>\n",
            "name": "overrides"
          }
        ],
        "name": "cloneConfig",
        "owner": "Ext.Component",
        "doc": "<p>Clone the current component using the original config values passed into this instance by default.</p>\n",
        "linenr": 947,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>clone The cloned copy of this component</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Editor.html#Ext-Editor-method-completeEdit",
        "shortDoc": "Ends the editing process, persists the changed value to the underlying field, and hides the editor. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Override the default behavior and keep the editor visible after edit (defaults to false)</p>\n",
            "name": "remainVisible"
          }
        ],
        "name": "completeEdit",
        "owner": "Ext.Editor",
        "doc": "<p>Ends the editing process, persists the changed value to the underlying field, and hides the editor.</p>\n",
        "linenr": 339,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-create",
        "shortDoc": "Create a new instance of this Class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "create",
        "owner": "Ext.Base",
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "linenr": 329,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-createAlias",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "name": "alias"
          },
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The original method name</p>\n",
            "name": "origin"
          }
        ],
        "name": "createAlias",
        "owner": "Ext.Base",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "linenr": 648,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-destroy",
        "shortDoc": "Destroys the Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Destroys the Component.</p>\n",
        "linenr": 2891,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-disable",
        "shortDoc": "Disable the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing true, will supress the 'disable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Disable the component.</p>\n",
        "linenr": 2245,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doAutoRender",
        "shortDoc": "Handles autoRender. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "doAutoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Handles autoRender.\nFloating Components may have an ownerCt. If they are asking to be constrained, constrain them within that\nownerCt, and have their z-index managed locally. Floating Components are always rendered to document.body</p>\n",
        "linenr": 920,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doComponentLayout",
        "shortDoc": "This method needs to be called whenever you change something on this component that requires the Component's\nlayout t...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "width"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "height"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "isSetSize"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "callingContainer"
          }
        ],
        "name": "doComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method needs to be called whenever you change something on this component that requires the Component's\nlayout to be recalculated.</p>\n",
        "linenr": 2630,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-doConstrain",
        "shortDoc": "Moves this floating Component into a constrain region. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Optional. The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this Component is to be constrained.</p>\n",
            "name": "constrainTo"
          }
        ],
        "name": "doConstrain",
        "owner": "Ext.util.Floating",
        "doc": "<p>Moves this floating Component into a constrain region.</p>\n\n\n<p>By default, this Component is constrained to be within the container it was added to, or the element\nit was rendered to.</p>\n\n\n<p>An alternative constraint may be passed.</p>\n\n",
        "linenr": 135,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-enable",
        "shortDoc": "Enable the component ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing false will supress the 'enable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable the component</p>\n",
        "linenr": 2222,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 609,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-findLayoutController",
        "shortDoc": "This method finds the topmost active layout who's processing will eventually determine the size and position of this\n...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "findLayoutController",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method finds the topmost active layout who's processing will eventually determine the size and position of this\nComponent.<p>\n<p>This method is useful when dynamically adding Components into Containers, and some processing must take place after the\nfinal sizing and positioning of the Component has been performed.</p>\n\n",
        "linenr": 876,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-findParentBy",
        "shortDoc": "Find a container above this component at any level by a custom function. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The custom function to call with the arguments (container, this component).</p>\n",
            "name": "fn"
          }
        ],
        "name": "findParentBy",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by a custom function. If the passed function returns\ntrue, the container will be returned.</p>\n",
        "linenr": 978,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container for which the custom function returns true</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-findParentByType",
        "shortDoc": "Find a container above this component at any level by xtype or class\n\n\nSee also the up method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "String/Class",
            "optional": false,
            "doc": "<p>The xtype string for a component, or the class of the component directly</p>\n",
            "name": "xtype"
          }
        ],
        "name": "findParentByType",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by xtype or class</p>\n\n\n<p>See also the <a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">up</a> method.</p>\n\n",
        "linenr": 992,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container which matches the given xtype or class</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to fire.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object...",
            "optional": false,
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "name": "args"
          }
        ],
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.Editor-method-addListener\" rel=\"Ext.Editor-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.Editor-method-enableBubble\" rel=\"Ext.Editor-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "linenr": 233,
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-focus",
        "shortDoc": "Try to focus this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If applicable, true to also select the text in this component</p>\n",
            "name": "selectText"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) Delay the focus this number of milliseconds (true for 10 milliseconds).</p>\n",
            "name": "delay"
          }
        ],
        "name": "focus",
        "owner": "Ext.Component",
        "doc": "<p>Try to focus this component.</p>\n",
        "linenr": 856,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-forceComponentLayout",
        "shortDoc": "Forces this component to redo its componentLayout. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "forceComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Forces this component to redo its componentLayout.</p>\n",
        "linenr": 2673,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-getActiveAnimation",
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "getActiveAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "linenr": 377,
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-getBox",
        "shortDoc": "Gets the current box measurements of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "name": "getBox",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current box measurements of the component's underlying element.</p>\n",
        "linenr": 541,
        "return": {
          "type": "Object",
          "doc": "<p>box An object in the format {x, y, width, height}</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getBubbleTarget",
        "shortDoc": "Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getBubbleTarget",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.</p>\n",
        "linenr": 2443,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>the Container which owns this Component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getEl",
        "shortDoc": "Retrieves the top level element representing this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the top level element representing this component.</p>\n",
        "linenr": 2059,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getHeight",
        "shortDoc": "Gets the current height of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current height of the component's underlying element.</p>\n",
        "linenr": 2798,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getId",
        "shortDoc": "Retrieves the id of this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n",
        "linenr": 2047,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getInsertPosition",
        "shortDoc": "This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insert...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String/Number/Element/HTMLElement",
            "optional": false,
            "doc": "<p>Index, element id or element you want\nto put this component before.</p>\n",
            "name": "position"
          }
        ],
        "name": "getInsertPosition",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insertBefore.</p>\n",
        "linenr": 1674,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>DOM element that you can use in the insertBefore</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getLoader",
        "shortDoc": "Gets the Ext.ComponentLoader for this Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getLoader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> for this Component.</p>\n",
        "linenr": 2806,
        "return": {
          "type": "Ext.ComponentLoader",
          "doc": "<p>The loader instance, null if it doesn't exist.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-getName",
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getPlugin",
        "shortDoc": "Retrieves a plugin by its pluginId which has been bound to this\ncomponent. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "pluginId"
          }
        ],
        "name": "getPlugin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves a plugin by its pluginId which has been bound to this\ncomponent.</p>\n",
        "linenr": 2934,
        "return": {
          "type": "Ext.AbstractPlugin",
          "doc": "<p>pluginInstance</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-getPosition",
        "shortDoc": "Gets the current XY position of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "name": "getPosition",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current XY position of the component's underlying element.</p>\n",
        "linenr": 606,
        "return": {
          "type": "Array",
          "doc": "<p>The XY position of the element (e.g., [100, 200])</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getSize",
        "shortDoc": "Gets the current size of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current size of the component's underlying element.</p>\n",
        "linenr": 2782,
        "return": {
          "type": "Object",
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getState",
        "shortDoc": "The supplied default state gathering method for the AbstractComponent class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getState",
        "owner": "Ext.AbstractComponent",
        "doc": "<p></p>The supplied default state gathering method for the AbstractComponent class.</p>\nThis method returns dimension setings such as <code>flex</code>, <code>anchor</code>, <code>width</code>\nand <code>height</code> along with <code>collapsed</code> state.</p></p>\n\n<p>Subclasses which implement more complex state should call the superclass's implementation, and apply their state\nto the result if this basic state is to be saved.</p>\n\n\n<p>Note that Component state will only be saved if the Component has a <a href=\"#/api/Ext.Editor-cfg-stateId\" rel=\"Ext.Editor-cfg-stateId\" class=\"docClass\">stateId</a> and there as a StateProvider\nconfigured for the document.</p>\n\n",
        "linenr": 750,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Stateful.html#Ext-state-Stateful-method-getStateId",
        "shortDoc": "Gets the state id for this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [

        ],
        "name": "getStateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Gets the state id for this object.</p>\n",
        "linenr": 237,
        "return": {
          "type": "String",
          "doc": "<p>The state id, null if not found.</p>\n"
        },
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Editor.html#Ext-Editor-method-getValue",
        "shortDoc": "Gets the data value of the editor ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [

        ],
        "name": "getValue",
        "owner": "Ext.Editor",
        "doc": "<p>Gets the data value of the editor</p>\n",
        "linenr": 458,
        "return": {
          "type": "Mixed",
          "doc": "<p>The data value</p>\n"
        },
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getWidth",
        "shortDoc": "Gets the current width of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current width of the component's underlying element.</p>\n",
        "linenr": 2790,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-getXType",
        "shortDoc": "Gets the xtype for this component as registered with Ext.ComponentManager. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [

        ],
        "name": "getXType",
        "owner": "Ext.Component",
        "doc": "<p>Gets the xtype for this component as registered with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a>. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header. Example usage:</p>\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXType());  // alerts 'textfield'\n</code></pre>\n\n",
        "linenr": 965,
        "return": {
          "type": "String",
          "doc": "<p>The xtype</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getXTypes",
        "shortDoc": "Returns this Component's xtype hierarchy as a slash-delimited string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getXTypes",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXTypes());  // alerts 'component/field/textfield'\n</code></pre>\n\n",
        "linenr": 2105,
        "return": {
          "type": "String",
          "doc": "<p>The xtype hierarchy string</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Color-method-getActiveAnimation\" rel=\"Ext.picker.Color-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Returns thq current animation if this object has any effects actively running or queued, else returns false."
        },
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-hasActiveFx",
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "hasActiveFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "linenr": 369,
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "linenr": 530,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-hasUICls",
        "shortDoc": "Checks if there is currently a specified uiCls ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The cls to check</p>\n",
            "name": "cls"
          }
        ],
        "name": "hasUICls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Checks if there is currently a specified uiCls</p>\n",
        "linenr": 1523,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-hide",
        "shortDoc": "Hides this Component, setting it to invisible using the configured hideMode. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "String/Element/Component",
            "optional": false,
            "doc": "<p>Optional, and <b>only valid for <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b>.\nThe target to which the Component should animate while hiding (defaults to null with no animation)</p>\n",
            "name": "animateTarget"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) A callback function to call after the Component is hidden.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "name": "scope"
          }
        ],
        "name": "hide",
        "owner": "Ext.Component",
        "doc": "<p>Hides this Component, setting it to invisible using the configured <a href=\"#/api/Ext.Editor-cfg-hideMode\" rel=\"Ext.Editor-cfg-hideMode\" class=\"docClass\">hideMode</a>.</p>\n",
        "linenr": 751,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-implement",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "implement",
        "owner": "Ext.Base",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "linenr": 415,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-initConfig",
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-is",
        "shortDoc": "Tests whether this Component matches the selector string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector string to test against.</p>\n",
            "name": "selector"
          }
        ],
        "name": "is",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether this Component matches the selector string.</p>\n",
        "linenr": 1886,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this Component matches the selector.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDescendantOf",
        "shortDoc": "Determines whether this component is the descendant of a particular container. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Container",
            "optional": false,
            "doc": "\n",
            "name": "container"
          }
        ],
        "name": "isDescendantOf",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Determines whether this component is the descendant of a particular container.</p>\n",
        "linenr": 2950,
        "return": {
          "type": "Boolean",
          "doc": "<p>isDescendant</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDisabled",
        "shortDoc": "Method to determine whether this Component is currently disabled. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "isDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently disabled.</p>\n",
        "linenr": 2282,
        "return": {
          "type": "Boolean",
          "doc": "<p>the disabled state of this Component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDraggable",
        "shortDoc": "Method to determine whether this Component is draggable. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "isDraggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is draggable.</p>\n",
        "linenr": 2459,
        "return": {
          "type": "Boolean",
          "doc": "<p>the draggable state of this component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDroppable",
        "shortDoc": "Method to determine whether this Component is droppable. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "isDroppable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is droppable.</p>\n",
        "linenr": 2467,
        "return": {
          "type": "Boolean",
          "doc": "<p>the droppable state of this component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isFloating",
        "shortDoc": "Method to determine whether this Component is floating. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "isFloating",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is floating.</p>\n",
        "linenr": 2451,
        "return": {
          "type": "Boolean",
          "doc": "<p>the floating state of this component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isHidden",
        "shortDoc": "Method to determine whether this Component is currently set to hidden. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "isHidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently set to hidden.</p>\n",
        "linenr": 2298,
        "return": {
          "type": "Boolean",
          "doc": "<p>the hidden state of this Component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isVisible",
        "shortDoc": "Returns true if this component is visible. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>. <p>Optional. Pass <code>true</code> to interrogate the visibility status of all\nparent Containers to determine whether this Component is truly visible to the user.</p></p>\n\n<p>Generally, to determine whether a Component is hidden, the no argument form is needed. For example\nwhen creating dynamically laid out UIs in a hidden Container before showing them.</p>\n\n",
            "name": "deep"
          }
        ],
        "name": "isVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns true if this component is visible.</p>\n",
        "linenr": 2182,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component is visible, false otherwise.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isXType",
        "shortDoc": "Tests whether or not this Component is of a specific xtype. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The xtype to check for this Component</p>\n",
            "name": "xtype"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) False to check whether this Component is descended from the xtype (this is\nthe default), or true to check whether this Component is directly of the specified xtype.</p>\n",
            "name": "shallow"
          }
        ],
        "name": "isXType",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended\nfrom the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>For a list of all available xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nvar isText = t.isXType('textfield');        // true\nvar isBoxSubclass = t.isXType('field');       // true, descended from <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\nvar isBoxInstance = t.isXType('field', true); // false, not a direct <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> instance\n</code></pre>\n\n",
        "linenr": 2074,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component descends from the specified xtype, false otherwise.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addManagedListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "shortDoc": "Shorthand for addManagedListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Editor-method-addManagedListener\" rel=\"Ext.Editor-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 681,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeManagedListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Editor-method-removeManagedListener\" rel=\"Ext.Editor-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.Editor-method-mon\" rel=\"Ext.Editor-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 687,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextNode",
        "shortDoc": "Returns the next node in the Component tree in tree traversal order. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following nodes.</p>\n",
            "name": "selector"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "includeSelf"
          }
        ],
        "name": "nextNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree to attempt to find a match. Contrast with <a href=\"#/api/Ext.Editor-method-nextSibling\" rel=\"Ext.Editor-method-nextSibling\" class=\"docClass\">nextSibling</a>.</p>\n\n",
        "linenr": 2012,
        "return": {
          "type": "void",
          "doc": "<p>The next node (or the next node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextSibling",
        "shortDoc": "Returns the next sibling of this Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following items.</p>\n",
            "name": "selector"
          }
        ],
        "name": "nextSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next sibling of this Component.</p>\n\n\n<p>Optionally selects the next sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>next()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.Editor-method-nextNode\" rel=\"Ext.Editor-method-nextNode\" class=\"docClass\">nextNode</a></p>\n\n",
        "linenr": 1916,
        "return": {
          "type": "void",
          "doc": "<p>The next sibling (or the next sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-observe",
        "shortDoc": "Sets observability on the passed class constructor. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The class constructor to make observable.</p>\n",
            "name": "c"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.Editor-method-addListener\" rel=\"Ext.Editor-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
            "name": "listeners"
          }
        ],
        "name": "observe",
        "owner": "Ext.util.Observable",
        "doc": "<p>Sets observability on the passed class constructor.</p>\n\n<p>This makes any event fired on any instance of the passed class also fire a single event through\nthe <strong>class</strong> allowing for central handling of events on many instances at once.</p>\n\n<p>Usage:</p>\n\n<pre><code>Ext.util.Observable.observe(Ext.data.Connection);\nExt.data.Connection.on('beforerequest', function(con, options) {\n    console.log('Ajax request made to ' + options.url);\n});\n</code></pre>\n",
        "linenr": 69,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-on",
        "shortDoc": "Shorthand for addListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.Editor-method-fireEvent\" rel=\"Ext.Editor-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Editor-method-addListener\" rel=\"Ext.Editor-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "linenr": 669,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-override",
        "shortDoc": "Override prototype members of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "override",
        "owner": "Ext.Base",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 518,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousNode",
        "shortDoc": "Returns the previous node in the Component tree in tree traversal order. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding nodes.</p>\n",
            "name": "selector"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "includeSelf"
          }
        ],
        "name": "previousNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree in reverse order to attempt to find a match. Contrast with <a href=\"#/api/Ext.Editor-method-previousSibling\" rel=\"Ext.Editor-method-previousSibling\" class=\"docClass\">previousSibling</a>.</p>\n\n",
        "linenr": 1976,
        "return": {
          "type": "void",
          "doc": "<p>The previous node (or the previous node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousSibling",
        "shortDoc": "Returns the previous sibling of this Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding items.</p>\n",
            "name": "selector"
          }
        ],
        "name": "previousSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous sibling of this Component.</p>\n\n\n<p>Optionally selects the previous sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>prev()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.Editor-method-previousNode\" rel=\"Ext.Editor-method-previousNode\" class=\"docClass\">previousNode</a></p>\n\n",
        "linenr": 1946,
        "return": {
          "type": "void",
          "doc": "<p>The previous sibling (or the previous sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Editor.html#Ext-Editor-method-realign",
        "shortDoc": "Realigns the editor to the bound field based on the current alignment config value. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to size the field to the dimensions of the bound element.</p>\n",
            "name": "autoSize"
          }
        ],
        "name": "realign",
        "owner": "Ext.Editor",
        "doc": "<p>Realigns the editor to the bound field based on the current alignment config value.</p>\n",
        "linenr": 327,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "name": "origin"
          },
          {
            "type": "[String]",
            "optional": false,
            "doc": "<p>Array of event names to relay.</p>\n",
            "name": "events"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "prefix"
          }
        ],
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "linenr": 573,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-releaseCapture",
        "shortDoc": "Removes all added captures from the Observable. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable",
            "optional": false,
            "doc": "<p>The Observable to release</p>\n",
            "name": "o"
          }
        ],
        "name": "releaseCapture",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes <strong>all</strong> added captures from the Observable.</p>\n",
        "linenr": 44,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeCls",
        "shortDoc": "Removes a CSS class from the top level element representing this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "className"
          }
        ],
        "name": "removeCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a CSS class from the top level element representing this component.</p>\n",
        "linenr": 2338,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeClsWithUI",
        "shortDoc": "Removes a cls to the uiCls array, which will also call removeUIClsFromElement and removes\nit from all elements of thi...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>A string or an array of strings to remove to the uiCls</p>\n",
            "name": "cls"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "skip"
          }
        ],
        "name": "removeClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a cls to the uiCls array, which will also call <a href=\"#/api/Ext.Editor-method-removeUIClsFromElement\" rel=\"Ext.Editor-method-removeUIClsFromElement\" class=\"docClass\">removeUIClsFromElement</a> and removes\nit from all elements of this component.</p>\n",
        "linenr": 1494,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "shortDoc": "Removes an event handler. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.Editor-method-addListener\" rel=\"Ext.Editor-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n",
        "linenr": 392,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.Editor-method-mon\" rel=\"Ext.Editor-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 197,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeUIClsFromElement",
        "shortDoc": "Method which removes a specified UI + uiCls from the components element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The UI to add to the element</p>\n",
            "name": "ui"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "force"
          }
        ],
        "name": "removeUIClsFromElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which removes a specified UI + uiCls from the components element.\nThe cls which is added to the element will be: <code>this.baseCls + '-' + ui</code></p>\n",
        "linenr": 1574,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.Editor-method-suspendEvents\" rel=\"Ext.Editor-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "linenr": 554,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-sequenceFx",
        "shortDoc": "Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "sequenceFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.Editor-method-syncFx\" rel=\"Ext.Editor-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n",
        "linenr": 357,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-setActive",
        "shortDoc": "This method is called internally by Ext.ZIndexManager to signal that a floating\nComponent has either been moved to th...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to activate the Component, false to deactivate it (defaults to false)</p>\n",
            "name": "active"
          },
          {
            "type": "Component",
            "optional": false,
            "doc": "<p>The newly active Component which is taking over topmost zIndex position.</p>\n",
            "name": "newActive"
          }
        ],
        "name": "setActive",
        "owner": "Ext.util.Floating",
        "doc": "<p>This method is called internally by <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">Ext.ZIndexManager</a> to signal that a floating\nComponent has either been moved to the top of its zIndex stack, or pushed from the top of its zIndex stack.</p>\n\n\n<p>If a <i>Window</i> is superceded by another Window, deactivating it hides its shadow.</p>\n\n\n<p>This method also fires the <a href=\"#/api/Ext.Editor-event-activate\" rel=\"Ext.Editor-event-activate\" class=\"docClass\">activate</a> or <a href=\"#/api/Ext.Editor-event-deactivate\" rel=\"Ext.Editor-event-deactivate\" class=\"docClass\">deactivate</a> event depending on which action occurred.</p>\n\n",
        "linenr": 218,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-setAutoScroll",
        "shortDoc": "Sets the overflow on the content element of the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to allow the Component to auto scroll.</p>\n",
            "name": "scroll"
          }
        ],
        "name": "setAutoScroll",
        "owner": "Ext.Component",
        "doc": "<p>Sets the overflow on the content element of the component.</p>\n",
        "linenr": 362,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDisabled",
        "shortDoc": "Enable or disable the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "\n",
            "name": "disabled"
          }
        ],
        "name": "setDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable or disable the component.</p>\n",
        "linenr": 2290,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDocked",
        "shortDoc": "Sets the dock position of this component in its parent panel. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "dock"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "layoutParent"
          }
        ],
        "name": "setDocked",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the dock position of this component in its parent panel. Note that\nthis only has effect if this item is part of the dockedItems collection\nof a parent that has a DockLayout (note that any Panel has a DockLayout\nby default)</p>\n",
        "linenr": 2865,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setHeight",
        "shortDoc": "Sets the height of the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new height to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.Editor-method-getEl\" rel=\"Ext.Editor-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style.</li>\n<li><i>undefined</i> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "name": "setHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the height of the component.  This method fires the <a href=\"#/api/Ext.Editor-event-resize\" rel=\"Ext.Editor-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "linenr": 2769,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setLoading",
        "shortDoc": "This method allows you to show or hide a LoadMask on top of this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean/Object/String",
            "optional": false,
            "doc": "<p>True to show the default LoadMask, a config object\nthat will be passed to the LoadMask constructor, or a message String to show. False to\nhide the current LoadMask.</p>\n",
            "name": "load"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to mask the targetEl of this Component instead of the this.el.\nFor example, setting this to true on a Panel will cause only the body to be masked. (defaults to false)</p>\n",
            "name": "targetEl"
          }
        ],
        "name": "setLoading",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method allows you to show or hide a LoadMask on top of this component.</p>\n",
        "linenr": 2830,
        "return": {
          "type": "Ext.LoadMask",
          "doc": "<p>The LoadMask instance that has just been shown.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-setPagePosition",
        "shortDoc": "Sets the page XY position of the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new x position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new y position</p>\n",
            "name": "y"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If passed, the Component is <i>animated</i> into its new position. If this parameter\nis a number, it is used as the animation duration in milliseconds.</p>\n",
            "name": "animate"
          }
        ],
        "name": "setPagePosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the page XY position of the component.  To set the left and top instead, use <a href=\"#/api/Ext.Editor-method-setPosition\" rel=\"Ext.Editor-method-setPosition\" class=\"docClass\">setPosition</a>.\nThis method fires the <a href=\"#/api/Ext.Editor-event-move\" rel=\"Ext.Editor-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "linenr": 504,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-setPosition",
        "shortDoc": "Sets the left and top of the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new left</p>\n",
            "name": "left"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new top</p>\n",
            "name": "top"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If true, the Component is <i>animated</i> into its new position. You may also pass an animation configuration.</p>\n",
            "name": "animate"
          }
        ],
        "name": "setPosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the left and top of the component.  To set the page XY position instead, use <a href=\"#/api/Ext.Editor-method-setPagePosition\" rel=\"Ext.Editor-method-setPagePosition\" class=\"docClass\">setPagePosition</a>.\nThis method fires the <a href=\"#/api/Ext.Editor-event-move\" rel=\"Ext.Editor-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "linenr": 420,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setSize",
        "shortDoc": "Sets the width and height of this Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new width to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.Editor-method-getEl\" rel=\"Ext.Editor-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n<li><code>undefined</code> to leave the width unchanged.</li>\n</ul></div></p>\n",
            "name": "width"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new height to set (not required if a size object is passed as the first arg).\nThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.Editor-method-getEl\" rel=\"Ext.Editor-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n<li><code>undefined</code> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "name": "setSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width and height of this Component. This method fires the <a href=\"#/api/Ext.Editor-event-resize\" rel=\"Ext.Editor-event-resize\" class=\"docClass\">resize</a> event. This method can accept\neither width and height as separate arguments, or you can pass a size object like <code>{width:10, height:20}</code>.</p>\n",
        "linenr": 2507,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setUI",
        "shortDoc": "Sets the UI for the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new UI for the component</p>\n",
            "name": "ui"
          }
        ],
        "name": "setUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the UI for the component. This will remove any existing UIs on the component. It will also\nloop through any uiCls set on the component and rename them so they include the new UI</p>\n",
        "linenr": 1417,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Editor.html#Ext-Editor-method-setValue",
        "shortDoc": "Sets the data value of the editor ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Any valid value supported by the underlying field</p>\n",
            "name": "value"
          }
        ],
        "name": "setValue",
        "owner": "Ext.Editor",
        "doc": "<p>Sets the data value of the editor</p>\n",
        "linenr": 450,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setVisible",
        "shortDoc": "Convenience function to hide or show this component by boolean. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to show, false to hide</p>\n",
            "name": "visible"
          }
        ],
        "name": "setVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Convenience function to hide or show this component by boolean.</p>\n",
        "linenr": 2173,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setWidth",
        "shortDoc": "Sets the width of the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new width to setThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.Editor-method-getEl\" rel=\"Ext.Editor-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n</ul></div></p>\n",
            "name": "width"
          }
        ],
        "name": "setWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width of the component.  This method fires the <a href=\"#/api/Ext.Editor-event-resize\" rel=\"Ext.Editor-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "linenr": 2757,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-show",
        "shortDoc": "Shows this Component, rendering it first if autoRender or floating are true. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "String/Element",
            "optional": false,
            "doc": "<p>Optional, and <b>only valid for <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b> The target from which the Component should\nanimate from while opening (defaults to null with no animation)</p>\n",
            "name": "animateTarget"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) A callback function to call after the Component is displayed. Only necessary if animation was specified.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "name": "scope"
          }
        ],
        "name": "show",
        "owner": "Ext.Component",
        "doc": "<p>Shows this Component, rendering it first if <a href=\"#/api/Ext.Editor-cfg-autoRender\" rel=\"Ext.Editor-cfg-autoRender\" class=\"docClass\">autoRender</a> or <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> are <code>true</code>.</p>\n\n\n<p>After being shown, a <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> Component (such as a <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>), is activated it and brought to the front of\nits <a href=\"#/api/Ext.Editor-property-zIndexManager\" rel=\"Ext.Editor-property-zIndexManager\" class=\"docClass\">z-index stack</a>.</p>\n\n",
        "linenr": 648,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Editor.html#Ext-Editor-method-startEdit",
        "shortDoc": "Starts the editing process and shows the editor. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to edit</p>\n",
            "name": "el"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) A value to initialize the editor with. If a value is not provided, it defaults\nto the innerHTML of el.</p>\n",
            "name": "value"
          }
        ],
        "name": "startEdit",
        "owner": "Ext.Editor",
        "doc": "<p>Starts the editing process and shows the editor.</p>\n",
        "linenr": 295,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-statics",
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-stopAnimation",
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "stopAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "linenr": 335,
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Color-method-stopAnimation\" rel=\"Ext.picker.Color-method-stopAnimation\" class=\"docClass\">stopAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet."
        },
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-stopFx",
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "stopFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "linenr": 326,
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.Editor-method-resumeEvents\" rel=\"Ext.Editor-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.Editor-method-resumeEvents\" rel=\"Ext.Editor-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "linenr": 541,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-syncFx",
        "shortDoc": "Ensures that all effects queued after syncFx is called on this object are\nrun concurrently. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "syncFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.Editor-method-sequenceFx\" rel=\"Ext.Editor-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n",
        "linenr": 345,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-toBack",
        "shortDoc": "Sends this Component to the back of (lower z-index than) any other visible windows ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [

        ],
        "name": "toBack",
        "owner": "Ext.util.Floating",
        "doc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n",
        "linenr": 242,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-toFront",
        "shortDoc": "Brings this floating Component to the front of any other visible, floating Components managed by the same ZIndexManag...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Specify <code>true</code> to prevent the Component from being focused.</p>\n",
            "name": "preventFocus"
          }
        ],
        "name": "toFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Brings this floating Component to the front of any other visible, floating Components managed by the same <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<p>If this Component is modal, inserts the modal mask just below this Component in the z-index stack.</p>\n\n",
        "linenr": 190,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-un",
        "shortDoc": "Shorthand for removeListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.Editor-method-addListener\" rel=\"Ext.Editor-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Editor-method-removeListener\" rel=\"Ext.Editor-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "linenr": 675,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-up",
        "shortDoc": "Walks up the ownerCt axis looking for an ancestor Container which matches\nthe passed simple selector. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. The simple selector to test.</p>\n",
            "name": "selector"
          }
        ],
        "name": "up",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Walks up the <code>ownerCt</code> axis looking for an ancestor Container which matches\nthe passed simple selector.</p>\n\n\n<p>Example:\n<pre><code>var owningTabPanel = grid.up('tabpanel');\n</code></pre>\n\n",
        "linenr": 1895,
        "return": {
          "type": "Container",
          "doc": "<p>The matching ancestor Container (or <code>undefined</code> if no match was found).</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-update",
        "shortDoc": "Update the content area of a component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If this component has been configured with a template via the tpl config\nthen it will use this argument as data to populate the template.\nIf this component was not configured with a template, the components\ncontent area will be updated via <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> update</p>\n",
            "name": "htmlOrData"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Only legitimate when using the html configuration. Defaults to false</p>\n",
            "name": "loadScripts"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) Only legitimate when using the html configuration. Callback to execute when scripts have finished loading</p>\n",
            "name": "callback"
          }
        ],
        "name": "update",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Update the content area of a component.</p>\n",
        "linenr": 2141,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-updateBox",
        "shortDoc": "Sets the current box measurements of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object in the format {x, y, width, height}</p>\n",
            "name": "box"
          }
        ],
        "name": "updateBox",
        "owner": "Ext.Component",
        "doc": "<p>Sets the current box measurements of the component's underlying element.</p>\n",
        "linenr": 554,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      }
    ],
    "property": [
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-draggable",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "draggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component can be dragged</p>\n",
        "linenr": 395,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Ext.Container",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Component2.html#Ext-Component-property-floatParent",
        "shortDoc": "Optional. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "floatParent",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> Components which were inserted as descendant items of floating Containers.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will not have a <code>floatParent</code> property.</p>\n\n\n<p>For <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> Components which are child items of a Container, the floatParent will be the floating ancestor Container which is\nresponsible for the base z-index value of all its floating descendants. It provides a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which provides\nz-indexing services for all its descendant floating Components.</p>\n\n\n<p>For example, the dropdown <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">BoundList</a> of a ComboBox which is in a Window will have the Window as its\n<code>floatParent</code></p>\n\n\n<p>See <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.Editor-property-zIndexManager\" rel=\"Ext.Editor-property-zIndexManager\" class=\"docClass\">zIndexManager</a></p>\n\n",
        "linenr": 224,
        "html_filename": "Component2.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-frameSize",
        "shortDoc": "Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "frameSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto provide graphical, rounded borders. See the <a href=\"#/api/Ext.Editor-cfg-frame\" rel=\"Ext.Editor-cfg-frame\" class=\"docClass\">frame</a> config.</p>\n\n\n<p> This is an object containing the frame width in pixels for all four sides of the Component containing\nthe following properties:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>top</code> The width of the top framing element in pixels.</li>\n<li><code>right</code> The width of the right framing element in pixels.</li>\n<li><code>bottom</code> The width of the bottom framing element in pixels.</li>\n<li><code>left</code> The width of the left framing element in pixels.</li>\n</ul></div>\n\n",
        "linenr": 228,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-maskOnDisable",
        "shortDoc": "This is an internal flag that you use when creating custom components. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maskOnDisable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This is an internal flag that you use when creating custom components.\nBy default this is set to true which means that every component gets a mask when its disabled.\nComponents like FieldContainer, FieldSet, Field, Button, Tab override this property to false\nsince they want to implement custom disable logic.</p>\n",
        "linenr": 534,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Ext.Container",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-ownerCt",
        "shortDoc": "This Component's owner Container (defaults to undefined, and is set automatically when\nthis Component is added to a C...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "ownerCt",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This Component's owner <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a> (defaults to undefined, and is set automatically when\nthis Component is added to a Container).  Read-only.</p>\n\n<p><b>Note</b>: to access items within the Container see <tt><a href=\"#/api/Ext.Editor-cfg-itemId\" rel=\"Ext.Editor-cfg-itemId\" class=\"docClass\">itemId</a></tt>.</p>\n\n",
        "linenr": 102,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-rendered",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "rendered",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component has been rendered.</p>\n",
        "linenr": 521,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Class",
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "property",
        "href": "Base3.html#Ext-Base-property-self",
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      },
      {
        "type": "Ext.ZIndexManager",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Component2.html#Ext-Component-property-zIndexManager",
        "shortDoc": "Optional. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "zIndexManager",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> Components after they have been rendered.</p>\n\n\n<p>A reference to the ZIndexManager which is managing this Component's z-index.</p>\n\n\n<p>The <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> maintains a stack of floating Component z-indices, and also provides a single modal\nmask which is insert just beneath the topmost visible modal floating Component.</p>\n\n\n<p>Floating Components may be <a href=\"#/api/Ext.Editor-method-toFront\" rel=\"Ext.Editor-method-toFront\" class=\"docClass\">brought to the front</a> or <a href=\"#/api/Ext.Editor-method-toBack\" rel=\"Ext.Editor-method-toBack\" class=\"docClass\">sent to the back</a> of the z-index stack.</p>\n\n\n<p>This defaults to the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> for floating Components that are programatically\n<a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a>.</p>\n\n\n<p>For <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> Components which are added to a Container, the ZIndexManager is acquired from the first ancestor Container found\nwhich is floating, or if not found the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> is used.</p>\n\n\n<p>See <a href=\"#/api/Ext.Editor-cfg-floating\" rel=\"Ext.Editor-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.Editor-property-floatParent\" rel=\"Ext.Editor-property-floatParent\" class=\"docClass\">floatParent</a></p>\n\n",
        "linenr": 209,
        "html_filename": "Component2.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-activate",
        "shortDoc": "Fires after a Component has been visually activated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "activate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component has been visually activated.</p>\n",
        "linenr": 565,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-added",
        "shortDoc": "Fires after a Component had been added to a Container. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>Parent Container</p>\n",
            "name": "container"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>position of Component</p>\n",
            "name": "pos"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "added",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component had been added to a Container.</p>\n",
        "linenr": 585,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-afterrender",
        "shortDoc": "Fires after the component rendering is finished. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "afterrender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component rendering is finished.</p>\n\n\n<p>The afterrender event is fired after this Component has been <a href=\"#/api/Ext.Editor-property-rendered\" rel=\"Ext.Editor-property-rendered\" class=\"docClass\">rendered</a>, been postprocesed\nby any afterRender method defined for the Component.</p>\n\n",
        "linenr": 652,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeactivate",
        "shortDoc": "Fires before a Component has been visually activated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually activated.\nReturning false from an event listener can prevent the activate\nfrom occurring.</p>\n",
        "linenr": 557,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Editor.html#Ext-Editor-event-beforecomplete",
        "shortDoc": "Fires after a change has been made to the field, but before the change is reflected in the underlying\nfield. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Editor",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The current field value</p>\n",
            "name": "value"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The original field value</p>\n",
            "name": "startValue"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforecomplete",
        "owner": "Ext.Editor",
        "doc": "<p>Fires after a change has been made to the field, but before the change is reflected in the underlying\nfield.  Saving the change to the field can be canceled by returning false from the handler of this event.\nNote that if the value has not changed and ignoreNoChange = true, the editing will still end but this\nevent will not fire since no edit actually occurred.</p>\n",
        "linenr": 206,
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedeactivate",
        "shortDoc": "Fires before a Component has been visually deactivated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforedeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually deactivated.\nReturning false from an event listener can prevent the deactivate\nfrom occurring.</p>\n",
        "linenr": 571,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedestroy",
        "shortDoc": "Fires before the component is destroyed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforedestroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.Editor-event-destroy\" rel=\"Ext.Editor-event-destroy\" class=\"docClass\">destroy</a>ed. Return false from an event handler to stop the <a href=\"#/api/Ext.Editor-event-destroy\" rel=\"Ext.Editor-event-destroy\" class=\"docClass\">destroy</a>.</p>\n",
        "linenr": 660,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforehide",
        "shortDoc": "Fires before the component is hidden when calling the hide method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforehide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is hidden when calling the <a href=\"#/api/Ext.Editor-event-hide\" rel=\"Ext.Editor-event-hide\" class=\"docClass\">hide</a> method.\nReturn false from an event handler to stop the hide.</p>\n",
        "linenr": 618,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforerender",
        "shortDoc": "Fires before the component is rendered. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforerender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.Editor-property-rendered\" rel=\"Ext.Editor-property-rendered\" class=\"docClass\">rendered</a>. Return false from an\nevent handler to stop the <a href=\"#/api/Ext.Editor-event-render\" rel=\"Ext.Editor-event-render\" class=\"docClass\">render</a>.</p>\n",
        "linenr": 639,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeshow",
        "shortDoc": "Fires before the component is shown when calling the show method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeshow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is shown when calling the <a href=\"#/api/Ext.Editor-event-show\" rel=\"Ext.Editor-event-show\" class=\"docClass\">show</a> method.\nReturn false from an event handler to stop the show.</p>\n",
        "linenr": 605,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Editor.html#Ext-Editor-event-beforestartedit",
        "shortDoc": "Fires when editing is initiated, but before the value changes. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Editor",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.core.Element",
            "optional": false,
            "doc": "<p>The underlying element bound to this editor</p>\n",
            "name": "boundEl"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The field value being set</p>\n",
            "name": "value"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforestartedit",
        "owner": "Ext.Editor",
        "doc": "<p>Fires when editing is initiated, but before the value changes.  Editing can be canceled by returning\nfalse from the handler of this event.</p>\n",
        "linenr": 189,
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Stateful.html#Ext-state-Stateful-event-beforestaterestore",
        "shortDoc": "Fires before the state of the object is restored. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values returned from the StateProvider. If this\nevent is not vetoed, then the state object is passed to <b><tt>applyState</tt></b>. By default,\nthat simply copies property values into this object. The method maybe overriden to\nprovide custom state restoration.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforestaterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is restored. Return false from an event handler to stop the restore.</p>\n",
        "linenr": 101,
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Stateful.html#Ext-state-Stateful-event-beforestatesave",
        "shortDoc": "Fires before the state of the object is saved to the configured state provider. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforestatesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is saved to the configured state provider. Return false to stop the save.</p>\n",
        "linenr": 122,
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Editor.html#Ext-Editor-event-canceledit",
        "shortDoc": "Fires after editing has been canceled and the editor's value has been reset. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Editor",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The user-entered field value that was discarded</p>\n",
            "name": "value"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The original field value that was set back into the editor after cancel</p>\n",
            "name": "startValue"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "canceledit",
        "owner": "Ext.Editor",
        "doc": "<p>Fires after editing has been canceled and the editor's value has been reset.</p>\n",
        "linenr": 225,
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Editor.html#Ext-Editor-event-complete",
        "shortDoc": "Fires after editing is complete and any changed value has been written to the underlying field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Editor",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The current field value</p>\n",
            "name": "value"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The original field value</p>\n",
            "name": "startValue"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "complete",
        "owner": "Ext.Editor",
        "doc": "<p>Fires after editing is complete and any changed value has been written to the underlying field.</p>\n",
        "linenr": 217,
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-deactivate",
        "shortDoc": "Fires after a Component has been visually deactivated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "deactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component has been visually deactivated.</p>\n",
        "linenr": 579,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-destroy",
        "shortDoc": "Fires after the component is destroyed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is <a href=\"#/api/Ext.Editor-event-destroy\" rel=\"Ext.Editor-event-destroy\" class=\"docClass\">destroy</a>ed.</p>\n",
        "linenr": 666,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-disable",
        "shortDoc": "Fires after the component is disabled. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is disabled.</p>\n",
        "linenr": 593,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-enable",
        "shortDoc": "Fires after the component is enabled. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is enabled.</p>\n",
        "linenr": 599,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-hide",
        "shortDoc": "Fires after the component is hidden. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "hide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is hidden.\nFires after the component is hidden when calling the <a href=\"#/api/Ext.Editor-event-hide\" rel=\"Ext.Editor-event-hide\" class=\"docClass\">hide</a> method.</p>\n",
        "linenr": 625,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-move",
        "shortDoc": "Fires after the component is moved. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new x position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new y position</p>\n",
            "name": "y"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "move",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is moved.</p>\n",
        "linenr": 680,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-removed",
        "shortDoc": "Fires when a component is removed from an Ext.container.Container ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>Container which holds the component</p>\n",
            "name": "ownerCt"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "removed",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires when a component is removed from an Ext.container.Container</p>\n",
        "linenr": 632,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-render",
        "shortDoc": "Fires after the component markup is rendered. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "render",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component markup is <a href=\"#/api/Ext.Editor-property-rendered\" rel=\"Ext.Editor-property-rendered\" class=\"docClass\">rendered</a>.</p>\n",
        "linenr": 646,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-resize",
        "shortDoc": "Fires after the component is resized. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "resize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is resized.</p>\n",
        "linenr": 672,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-show",
        "shortDoc": "Fires after the component is shown when calling the show method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "show",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is shown when calling the <a href=\"#/api/Ext.Editor-event-show\" rel=\"Ext.Editor-event-show\" class=\"docClass\">show</a> method.</p>\n",
        "linenr": 612,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Editor.html#Ext-Editor-event-specialkey",
        "shortDoc": "Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Editor",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.form.field.Field",
            "optional": false,
            "doc": "<p>field attached to this editor</p>\n",
            "name": "The"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The event object</p>\n",
            "name": "event"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "specialkey",
        "owner": "Ext.Editor",
        "doc": "<p>Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed.  You can check\n<a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">Ext.EventObject.getKey</a> to determine which key was pressed.</p>\n",
        "linenr": 233,
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Editor.html#Ext-Editor-event-startedit",
        "shortDoc": "Fires when this editor is displayed ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Editor",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.core.Element",
            "optional": false,
            "doc": "<p>The underlying element bound to this editor</p>\n",
            "name": "boundEl"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The starting field value</p>\n",
            "name": "value"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "startedit",
        "owner": "Ext.Editor",
        "doc": "<p>Fires when this editor is displayed</p>\n",
        "linenr": 198,
        "html_filename": "Editor.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Stateful.html#Ext-state-Stateful-event-staterestore",
        "shortDoc": "Fires after the state of the object is restored. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values returned from the StateProvider. This is passed\nto <b><tt>applyState</tt></b>. By default, that simply copies property values into this\nobject. The method maybe overriden to provide custom state restoration.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "staterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is restored.</p>\n",
        "linenr": 112,
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Stateful.html#Ext-state-Stateful-event-statesave",
        "shortDoc": "Fires after the state of the object is saved to the configured state provider. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "statesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is saved to the configured state provider.</p>\n",
        "linenr": 133,
        "html_filename": "Stateful.html"
      }
    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [
    "Ext.Base",
    "Ext.AbstractComponent",
    "Ext.Component"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Editor.html#Ext-Editor",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": true,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Editor.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.Editor",
  "doc": "<p>\nThe Editor class is used to provide inline editing for elements on the page. The editor\nis backed by a <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a> that will be displayed to edit the underlying content.\nThe editor is a floating Component, when the editor is shown it is automatically aligned to\ndisplay over the top of the bound element it is editing. The Editor contains several options\nfor how to handle key presses:\n<ul>\n<li><a href=\"#/api/Ext.Editor-cfg-completeOnEnter\" rel=\"Ext.Editor-cfg-completeOnEnter\" class=\"docClass\">completeOnEnter</a></li>\n<li><a href=\"#/api/Ext.Editor-cfg-cancelOnEsc\" rel=\"Ext.Editor-cfg-cancelOnEsc\" class=\"docClass\">cancelOnEsc</a></li>\n<li><a href=\"#/api/Ext.Editor-cfg-swallowKeys\" rel=\"Ext.Editor-cfg-swallowKeys\" class=\"docClass\">swallowKeys</a></li>\n</ul>\nIt also has options for how to use the value once the editor has been activated:\n<ul>\n<li><a href=\"#/api/Ext.Editor-cfg-revertInvalid\" rel=\"Ext.Editor-cfg-revertInvalid\" class=\"docClass\">revertInvalid</a></li>\n<li><a href=\"#/api/Ext.Editor-cfg-ignoreNoChange\" rel=\"Ext.Editor-cfg-ignoreNoChange\" class=\"docClass\">ignoreNoChange</a></li>\n<li><a href=\"#/api/Ext.Editor-cfg-updateEl\" rel=\"Ext.Editor-cfg-updateEl\" class=\"docClass\">updateEl</a></li>\n</ul>\nSample usage:\n</p>\n\n\n<pre><code>var editor = new Ext.Editor({\n    updateEl: true, // update the innerHTML of the bound element when editing completes\n    field: {\n        xtype: 'textfield'\n    }\n});\nvar el = Ext.get('my-text'); // The element to 'edit'\neditor.startEdit(el); // The value of the field will be taken as the innerHTML of the element.\n</code></pre>\n\n\n<p><p><img src=\"doc-resources/Ext.Editor/Ext.Editor.png\" alt=\"Ext.Editor component\"></p></p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [
    "editor"
  ],
  "html_filename": "Editor.html",
  "extends": "Ext.Component"
});