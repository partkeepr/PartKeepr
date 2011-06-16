Ext.data.JsonP.Ext_grid_Panel({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.AbstractComponent",
    "Ext.Component",
    "Ext.container.AbstractContainer",
    "Ext.container.Container",
    "Ext.panel.AbstractPanel",
    "Ext.panel.Panel",
    "Ext.panel.Table"
  ],
  "inheritable": false,
  "subclasses": [
    "Ext.grid.property.Grid"
  ],
  "deprecated": null,
  "allMixins": [
    "Ext.util.Floating",
    "Ext.util.Observable",
    "Ext.util.Animate",
    "Ext.state.Stateful"
  ],
  "href": "Panel4.html#Ext-grid-Panel",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "String/Number",
        "deprecated": null,
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-activeItem",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "A string component id or the numeric index of the component that should be initially activated within the\ncontainer's...",
        "static": false,
        "name": "activeItem",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>A string component id or the numeric index of the component that should be initially activated within the\ncontainer's layout on render.  For example, activeItem: 'item-1' or activeItem: 0 (index 0 = the first\nitem in the container's collection).  activeItem only applies to layout styles that can display\nitems one at a time (like <a href=\"#/api/Ext.layout.container.Card\" rel=\"Ext.layout.container.Card\" class=\"docClass\">Ext.layout.container.Card</a> and <a href=\"#/api/Ext.layout.container.Fit\" rel=\"Ext.layout.container.Fit\" class=\"docClass\">Ext.layout.container.Fit</a>).</p>\n",
        "linenr": 87,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-animCollapse",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "true to animate the transition when the panel is collapsed, false to skip the\nanimation (defaults to true if the Ext....",
        "static": false,
        "name": "animCollapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p><code>true</code> to animate the transition when the panel is collapsed, <code>false</code> to skip the\nanimation (defaults to <code>true</code> if the <a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> class is available, otherwise <code>false</code>).\nMay also be specified as the animation duration in milliseconds.</p>\n",
        "linenr": 109,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-autoDestroy",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "If true the container will automatically destroy any contained component that is removed from it, else\ndestruction mu...",
        "static": false,
        "name": "autoDestroy",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>If true the container will automatically destroy any contained component that is removed from it, else\ndestruction must be handled manually.\nDefaults to true.</p>\n",
        "linenr": 161,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoEl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "A tag name or DomHelper spec used to create the Element which will\nencapsulate this Component. ...",
        "static": false,
        "name": "autoEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A tag name or <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> spec used to create the <a href=\"#/api/Ext.grid.Panel-method-getEl\" rel=\"Ext.grid.Panel-method-getEl\" class=\"docClass\">Element</a> which will\nencapsulate this Component.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> and <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>,\nthis defaults to <b><tt>'div'</tt></b>. The more complex Sencha classes use a more complex\nDOM structure specified by their own <a href=\"#/api/Ext.grid.Panel-cfg-renderTpl\" rel=\"Ext.grid.Panel-cfg-renderTpl\" class=\"docClass\">renderTpl</a>s.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components encapsulated by\ndifferent DOM elements. Example usage:</p>\n\n\n<pre><code>{\n    xtype: 'component',\n    autoEl: {\n        tag: 'img',\n        src: 'http://www.example.com/example.jpg'\n    }\n}, {\n    xtype: 'component',\n    autoEl: {\n        tag: 'blockquote',\n        html: 'autoEl is cool!'\n    }\n}, {\n    xtype: 'container',\n    autoEl: 'ul',\n    cls: 'ux-unordered-list',\n    items: {\n        xtype: 'component',\n        autoEl: 'li',\n        html: 'First list item'\n    }\n}\n</code></pre>\n\n",
        "linenr": 130,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoRender",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This config is intended mainly for floating Components which may or may not be shown. ...",
        "static": false,
        "name": "autoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This config is intended mainly for <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> Components which may or may not be shown. Instead\nof using <a href=\"#/api/Ext.grid.Panel-cfg-renderTo\" rel=\"Ext.grid.Panel-cfg-renderTo\" class=\"docClass\">renderTo</a> in the configuration, and rendering upon construction, this allows a Component\nto render itself upon first <i><a href=\"#/api/Ext.grid.Panel-event-show\" rel=\"Ext.grid.Panel-event-show\" class=\"docClass\">show</a></i>.</p>\n\n\n<p>Specify as <code>true</code> to have this Component render to the document body upon first show.</p>\n\n\n<p>Specify as an element, or the ID of an element to have this Component render to a specific element upon first show.</p>\n\n\n<p><b>This defaults to <code>true</code> for the <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a> class.</b></p>\n\n",
        "linenr": 499,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-autoScroll",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "true to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, false...",
        "static": false,
        "name": "autoScroll",
        "owner": "Ext.Component",
        "doc": "<p><code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, <code>false</code> to clip any overflowing content (defaults to <code>false</code>).</p>\n",
        "linenr": 172,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoShow",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "True to automatically show the component upon creation. ...",
        "static": false,
        "name": "autoShow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically show the component upon creation.\nThis config option may only be used for <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> components or components\nthat use <a href=\"#/api/Ext.grid.Panel-cfg-autoRender\" rel=\"Ext.grid.Panel-cfg-autoRender\" class=\"docClass\">autoRender</a>. Defaults to <tt>false</tt>.</p>\n",
        "linenr": 492,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-baseCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "static": false,
        "name": "baseCls",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>The base CSS class to apply to this panel's element (defaults to <code>'x-panel'</code>).</p>\n",
        "linenr": 17,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "type": "Object/Array",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-bbar",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Convenience method. ...",
        "static": false,
        "name": "bbar",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method. Short for 'Bottom Bar'.</p>\n\n<pre><code>bbar: [\n  { xtype: 'button', text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'bottom',\n    items: [\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n",
        "linenr": 543,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-bodyBorder",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "A shortcut to add or remove the border on the body of a panel. ...",
        "static": false,
        "name": "bodyBorder",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>A shortcut to add or remove the border on the body of a panel. This only applies to a panel which has the <a href=\"#/api/Ext.grid.Panel-cfg-frame\" rel=\"Ext.grid.Panel-cfg-frame\" class=\"docClass\">frame</a> configuration set to <code>true</code>.\nDefaults to <code>undefined</code>.</p>\n",
        "linenr": 30,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "type": "String/Array",
        "deprecated": null,
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-bodyCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "A CSS class, space-delimited string of classes, or array of classes to be applied to the panel's body element. ...",
        "static": false,
        "name": "bodyCls",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>A CSS class, space-delimited string of classes, or array of classes to be applied to the panel's body element.\nThe following examples are all valid:</p>\n\n<pre><code>bodyCls: 'foo'\nbodyCls: 'foo bar'\nbodyCls: ['foo', 'bar']\n</code></pre>\n\n",
        "linenr": 50,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "type": "Number/String",
        "deprecated": null,
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-bodyPadding",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "A shortcut for setting a padding style on the body element. ...",
        "static": false,
        "name": "bodyPadding",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>A shortcut for setting a padding style on the body element. The value can either be\na number to be applied to all sides, or a normal css string describing padding.\nDefaults to <code>undefined</code>.</p>\n",
        "linenr": 23,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "type": "String/Object/Function",
        "deprecated": null,
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-bodyStyle",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "Custom CSS styles to be applied to the panel's body element, which can be supplied as a valid CSS style string,\nan ob...",
        "static": false,
        "name": "bodyStyle",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Custom CSS styles to be applied to the panel's body element, which can be supplied as a valid CSS style string,\nan object containing style property name/value pairs or a function that returns such a string or object.\nFor example, these two formats are interpreted to be equivalent:</p>\n\n<pre><code>bodyStyle: 'background:#ffc; padding:10px;'\n\nbodyStyle: {\n    background: '#ffc',\n    padding: '10px'\n}\n</code></pre>\n\n",
        "linenr": 36,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "type": "Number/String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-border",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Specifies the border for this component. ...",
        "static": false,
        "name": "border",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the border for this component. The border can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 360,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-bubbleEvents",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "An array of events that, when fired, should be bubbled to any parent container. ...",
        "static": false,
        "name": "bubbleEvents",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>An array of events that, when fired, should be bubbled to any parent container.\nSee <a href=\"#/api/Ext.util.Observable-method-enableBubble\" rel=\"Ext.util.Observable-method-enableBubble\" class=\"docClass\">Ext.util.Observable.enableBubble</a>.\nDefaults to <code>['add', 'remove']</code>.\n\n",
        "linenr": 187,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-buttonAlign",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "The alignment of any buttons added to this panel. ...",
        "static": false,
        "name": "buttonAlign",
        "owner": "Ext.panel.Panel",
        "doc": "<p>The alignment of any buttons added to this panel.  Valid values are 'right',\n'left' and 'center' (defaults to 'right' for buttons/fbar, 'left' for other toolbar types).</p>\n\n\n<p><b>NOTE:</b> The newer way to specify toolbars is to use the dockedItems config, and\ninstead of buttonAlign you would add the layout: { pack: 'start' | 'center' | 'end' }\noption to the dockedItem config.</p>\n\n",
        "linenr": 508,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Object/Array",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-buttons",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Convenience method used for adding buttons docked to the bottom of the panel. ...",
        "static": false,
        "name": "buttons",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method used for adding buttons docked to the bottom of the panel. This is a\nsynonym for the <a href=\"#/api/Ext.grid.Panel-cfg-fbar\" rel=\"Ext.grid.Panel-cfg-fbar\" class=\"docClass\">fbar</a> config.</p>\n\n<pre><code>buttons: [\n  { text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'bottom',\n    ui: 'footer',\n    defaults: {minWidth: <a href=\"#/api/Ext.grid.Panel-cfg-minButtonWidth\" rel=\"Ext.grid.Panel-cfg-minButtonWidth\" class=\"docClass\">minButtonWidth</a>},\n    items: [\n        { xtype: 'component', flex: 1 },\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n\n<p>The <a href=\"#/api/Ext.grid.Panel-cfg-minButtonWidth\" rel=\"Ext.grid.Panel-cfg-minButtonWidth\" class=\"docClass\">minButtonWidth</a> is used as the default <a href=\"#/api/Ext.button.Button-cfg-minWidth\" rel=\"Ext.button.Button-cfg-minWidth\" class=\"docClass\">minWidth</a> for\neach of the buttons in the buttons toolbar.</p>\n",
        "linenr": 569,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-closable",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "True to display the 'close' tool button and allow the user to close the window, false to\nhide the button and disallow...",
        "static": false,
        "name": "closable",
        "owner": "Ext.panel.Panel",
        "doc": "<p>True to display the 'close' tool button and allow the user to close the window, false to\nhide the button and disallow closing the window (defaults to <code>false</code>).</p>\n\n\n<p>By default, when close is requested by clicking the close button in the header, the <a href=\"#/api/Ext.grid.Panel-method-close\" rel=\"Ext.grid.Panel-method-close\" class=\"docClass\">close</a>\nmethod will be called. This will <i><a href=\"#/api/Ext.Component-event-destroy\" rel=\"Ext.Component-event-destroy\" class=\"docClass\">destroy</a></i> the Panel and its content\nmeaning that it may not be reused.</p>\n\n\n<p>To make closing a Panel <i>hide</i> the Panel so that it may be reused, set\n<a href=\"#/api/Ext.grid.Panel-cfg-closeAction\" rel=\"Ext.grid.Panel-cfg-closeAction\" class=\"docClass\">closeAction</a> to 'hide'.</p>\n\n",
        "linenr": 209,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-closeAction",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "The action to take when the close header tool is clicked:\n\n'destroy' : Default\nremove the window from the DOM and des...",
        "static": false,
        "name": "closeAction",
        "owner": "Ext.panel.Panel",
        "doc": "<p>The action to take when the close header tool is clicked:\n<div class=\"mdetail-params\"><ul>\n<li><b><code>'<a href=\"#/api/Ext.grid.Panel-event-destroy\" rel=\"Ext.grid.Panel-event-destroy\" class=\"docClass\">destroy</a>'</code></b> : <b>Default</b><div class=\"sub-desc\">\n<a href=\"#/api/Ext.grid.Panel-event-destroy\" rel=\"Ext.grid.Panel-event-destroy\" class=\"docClass\">remove</a> the window from the DOM and <a href=\"#/api/Ext.Component-event-destroy\" rel=\"Ext.Component-event-destroy\" class=\"docClass\">destroy</a>\nit and all descendant Components. The window will <b>not</b> be available to be\nredisplayed via the <a href=\"#/api/Ext.grid.Panel-event-show\" rel=\"Ext.grid.Panel-event-show\" class=\"docClass\">show</a> method.\n</div></li>\n<li><b><code>'<a href=\"#/api/Ext.grid.Panel-event-hide\" rel=\"Ext.grid.Panel-event-hide\" class=\"docClass\">hide</a>'</code></b> : <div class=\"sub-desc\">\n<a href=\"#/api/Ext.grid.Panel-event-hide\" rel=\"Ext.grid.Panel-event-hide\" class=\"docClass\">hide</a> the window by setting visibility to hidden and applying negative offsets.\nThe window will be available to be redisplayed via the <a href=\"#/api/Ext.grid.Panel-event-show\" rel=\"Ext.grid.Panel-event-show\" class=\"docClass\">show</a> method.\n</div></li>\n</ul></div>\n<p><b>Note:</b> This behavior has changed! setting *does* affect the <a href=\"#/api/Ext.grid.Panel-method-close\" rel=\"Ext.grid.Panel-method-close\" class=\"docClass\">close</a> method\nwhich will invoke the approriate closeAction.\n\n",
        "linenr": 221,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-cls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An optional extra CSS class that will be added to this component's Element (defaults to ''). ...",
        "static": false,
        "name": "cls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be\nuseful for adding customized styles to the component or any of its children using standard CSS rules.</p>\n",
        "linenr": 289,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapseDirection",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "The direction to collapse the Panel when the toggle button is clicked. ...",
        "static": false,
        "name": "collapseDirection",
        "owner": "Ext.panel.Panel",
        "doc": "<p>The direction to collapse the Panel when the toggle button is clicked.</p>\n\n\n<p>Defaults to the <a href=\"#/api/Ext.grid.Panel-cfg-headerPosition\" rel=\"Ext.grid.Panel-cfg-headerPosition\" class=\"docClass\">headerPosition</a></p>\n\n\n<p><b>Important: This config is <u>ignored</u> for <a href=\"#/api/Ext.grid.Panel-cfg-collapsible\" rel=\"Ext.grid.Panel-cfg-collapsible\" class=\"docClass\">collapsible</a> Panels which are direct child items of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>.</b></p>\n\n\n<p>Specify as <code>'top'</code>, <code>'bottom'</code>, <code>'left'</code> or <code>'right'</code>.</p>\n\n",
        "linenr": 201,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapseFirst",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "true to make sure the collapse/expand toggle button always renders first (to the left of)\nany other tools in the pane...",
        "static": false,
        "name": "collapseFirst",
        "owner": "Ext.panel.Panel",
        "doc": "<p><code>true</code> to make sure the collapse/expand toggle button always renders first (to the left of)\nany other tools in the panel&#39;s title bar, <code>false</code> to render it last (defaults to <code>true</code>).</p>\n",
        "linenr": 134,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapseMode",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Important: this config is only effective for collapsible Panels which are direct child items of a border layout. ...",
        "static": false,
        "name": "collapseMode",
        "owner": "Ext.panel.Panel",
        "doc": "<p><b>Important: this config is only effective for <a href=\"#/api/Ext.grid.Panel-cfg-collapsible\" rel=\"Ext.grid.Panel-cfg-collapsible\" class=\"docClass\">collapsible</a> Panels which are direct child items of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>.</b></p>\n\n\n<p>When <i>not</i> a direct child item of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>, then the Panel&#39;s header remains visible, and the body is collapsed to zero dimensions.\nIf the Panel has no header, then a new header (orientated correctly depending on the <a href=\"#/api/Ext.grid.Panel-cfg-collapseDirection\" rel=\"Ext.grid.Panel-cfg-collapseDirection\" class=\"docClass\">collapseDirection</a>) will be inserted to show a the title and a re-expand tool.</p>\n\n\n<p>When a child item of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>, this config has two options:\n<div class=\"mdetail-params\"><ul>\n<li><b><code>undefined/omitted</code></b><div class=\"sub-desc\">When collapsed, a placeholder <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">Header</a> is injected into the layout to represent the Panel\nand to provide a UI with a Tool to allow the user to re-expand the Panel.</div></li>\n<li><b><code>header</code></b> : <div class=\"sub-desc\">The Panel collapses to leave its header visible as when not inside a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>.</div></li>\n</ul></div></p>\n\n",
        "linenr": 156,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapsed",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "static": false,
        "name": "collapsed",
        "owner": "Ext.panel.Panel",
        "doc": "<p><code>true</code> to render the panel collapsed, <code>false</code> to render it expanded (defaults to\n<code>false</code>).</p>\n",
        "linenr": 127,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapsedCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "static": false,
        "name": "collapsedCls",
        "owner": "Ext.panel.Panel",
        "doc": "<p>A CSS class to add to the panel&#39;s element after it has been collapsed (defaults to\n<code>'collapsed'</code>).</p>\n",
        "linenr": 102,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-collapsible",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "True to make the panel collapsible and have an expand/collapse toggle Tool added into\nthe header tool button area. ...",
        "static": false,
        "name": "collapsible",
        "owner": "Ext.panel.Panel",
        "doc": "<p>True to make the panel collapsible and have an expand/collapse toggle Tool added into\nthe header tool button area. False to keep the panel sized either statically, or by an owning layout manager, with no toggle Tool (defaults to false).</p>\n\n\n<p>See <a href=\"#/api/Ext.grid.Panel-cfg-collapseMode\" rel=\"Ext.grid.Panel-cfg-collapseMode\" class=\"docClass\">collapseMode</a> and <a href=\"#/api/Ext.grid.Panel-cfg-collapseDirection\" rel=\"Ext.grid.Panel-cfg-collapseDirection\" class=\"docClass\">collapseDirection</a></p>\n",
        "linenr": 193,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel4.html#Ext-grid-Panel-cfg-columnLines",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/Panel.js",
        "private": false,
        "static": false,
        "name": "columnLines",
        "owner": "Ext.grid.Panel",
        "doc": "<p>Adds column line styling</p>\n",
        "linenr": 346,
        "html_filename": "Panel4.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-cfg-columns",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "An array of column definition objects which define all columns that appear in this grid. ...",
        "static": false,
        "name": "columns",
        "owner": "Ext.panel.Table",
        "doc": "<p>An array of <a href=\"#/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">column</a> definition objects which define all columns that appear in this grid. Each\ncolumn definition provides the header text for the column, and a definition of where the data for that column comes from.</p>\n",
        "linenr": 56,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "componentCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS Class to be added to a components root level element to give distinction to it\nvia styling.</p>\n",
        "linenr": 283,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String/Object",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentLayout",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager...",
        "static": false,
        "name": "componentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager which sizes a Component's internal structure in response to the Component being sized.</p>\n\n\n<p>Generally, developers will not use this configuration as all provided Components which need their internal\nelements sizing (Such as <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">input fields</a>) come with their own componentLayout managers.</p>\n\n\n<p>The <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used on instances of the base <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> class\nwhich simply sizes the Component's encapsulating element to the height and width specified in the <a href=\"#/api/Ext.grid.Panel-method-setSize\" rel=\"Ext.grid.Panel-method-setSize\" class=\"docClass\">setSize</a> method.</p>\n\n",
        "linenr": 242,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-contentEl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Optional. ...",
        "static": false,
        "name": "contentEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Optional. Specify an existing HTML element, or the <code>id</code> of an existing HTML element to use as the content\nfor this component.</p>\n\n\n<ul>\n<li><b>Description</b> :\n<div class=\"sub-desc\">This config option is used to take an existing HTML element and place it in the layout element\nof a new component (it simply moves the specified DOM element <i>after the Component is rendered</i> to use as the content.</div></li>\n<li><b>Notes</b> :\n<div class=\"sub-desc\">The specified HTML element is appended to the layout element of the component <i>after any configured\n<a href=\"#/api/Ext.grid.Panel-cfg-html\" rel=\"Ext.grid.Panel-cfg-html\" class=\"docClass\">HTML</a> has been inserted</i>, and so the document will not contain this element at the time the <a href=\"#/api/Ext.grid.Panel-event-render\" rel=\"Ext.grid.Panel-event-render\" class=\"docClass\">render</a> event is fired.</div>\n<div class=\"sub-desc\">The specified HTML element used will not participate in any <code><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></code>\nscheme that the Component may use. It is just HTML. Layouts operate on child <code><b><a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a></b></code>.</div>\n<div class=\"sub-desc\">Add either the <code>x-hidden</code> or the <code>x-hide-display</code> CSS class to\nprevent a brief flicker of the content before it is rendered to the panel.</div></li>\n</ul>\n\n",
        "linenr": 422,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-data",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "data",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The initial set of data to apply to the <code><a href=\"#/api/Ext.grid.Panel-cfg-tpl\" rel=\"Ext.grid.Panel-cfg-tpl\" class=\"docClass\">tpl</a></code> to\nupdate the content area of the Component.</p>\n",
        "linenr": 260,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-cfg-defaultDockWeights",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "This object holds the default weights applied to dockedItems that have no weight. ...",
        "static": false,
        "name": "defaultDockWeights",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>This object holds the default weights applied to dockedItems that have no weight. These start with a\nweight of 1, to allow negative weights to insert before top items and are odd numbers\nso that even weights can be used to get between different dock orders.</p>\n\n<p>To make default docking order match border layout, do this:</p>\n\n<pre><code>Ext.panel.AbstractPanel.prototype.defaultDockWeights = { top: 1, bottom: 3, left: 5, right: 7 };</code></pre>\n\n\n<p>Changing these defaults as above or individually on this object will effect all Panels.\nTo change the defaults on a single panel, you should replace the entire object:</p>\n\n<pre><code>initComponent: function () {\n    // NOTE: Don't change members of defaultDockWeights since the object is shared.\n    this.defaultDockWeights = { top: 1, bottom: 3, left: 5, right: 7 };\n\n    this.callParent();\n}</code></pre>\n\n\n<p>To change only one of the default values, you do this:</p>\n\n<pre><code>initComponent: function () {\n    // NOTE: Don't change members of defaultDockWeights since the object is shared.\n    this.defaultDockWeights = Ext.applyIf({ top: 10 }, this.defaultDockWeights);\n\n    this.callParent();\n}</code></pre>\n\n",
        "linenr": 64,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-defaultType",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "The default xtype of child Components to create in this Container when\na child item is specified as a raw configurati...",
        "static": false,
        "name": "defaultType",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>The default <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">xtype</a> of child Components to create in this Container when\na child item is specified as a raw configuration object, rather than as an instantiated Component.</p>\n\n\n<p>Defaults to <code>'panel'</code>.</p>\n\n",
        "linenr": 168,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "type": "Object|Function",
        "deprecated": null,
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-defaults",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "This option is a means of applying default settings to all added items whether added through the items\nconfig or via ...",
        "static": false,
        "name": "defaults",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>This option is a means of applying default settings to all added items whether added through the <a href=\"#/api/Ext.grid.Panel-property-items\" rel=\"Ext.grid.Panel-property-items\" class=\"docClass\">items</a>\nconfig or via the <a href=\"#/api/Ext.grid.Panel-event-add\" rel=\"Ext.grid.Panel-event-add\" class=\"docClass\">add</a> or <a href=\"#/api/Ext.grid.Panel-method-insert\" rel=\"Ext.grid.Panel-method-insert\" class=\"docClass\">insert</a> methods.</p>\n\n\n<p>If an added item is a config object, and <b>not</b> an instantiated Component, then the default properties are\nunconditionally applied. If the added item <b>is</b> an instantiated Component, then the default properties are\napplied conditionally so as not to override existing properties in the item.</p>\n\n\n<p>If the defaults option is specified as a function, then the function will be called using this Container as the\nscope (<code>this</code> reference) and passing the added item as the first parameter. Any resulting object\nfrom that call is then applied to the item as default properties.</p>\n\n\n<p>For example, to automatically apply padding to the body of each of a set of\ncontained <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a> items, you could pass: <code>defaults: {bodyStyle:'padding:15px'}</code>.</p>\n\n\n<p>Usage:</p>\n\n\n<pre><code>defaults: {               // defaults are applied to items, not the container\n    autoScroll:true\n},\nitems: [\n    {\n        xtype: 'panel',   // defaults <b>do not</b> have precedence over\n        id: 'panel1',     // options in config objects, so the defaults\n        autoScroll: false // will not be applied here, panel1 will be autoScroll:false\n    },\n    new Ext.panel.Panel({       // defaults <b>do</b> have precedence over options\n        id: 'panel2',     // options in components, so the defaults\n        autoScroll: false // will be applied here, panel2 will be autoScroll:true.\n    })\n]</code></pre>\n\n",
        "linenr": 126,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-cfg-deferRowRender",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Defaults to true to enable deferred row rendering. ...",
        "static": false,
        "name": "deferRowRender",
        "owner": "Ext.panel.Table",
        "doc": "<P>Defaults to <code>true</code> to enable deferred row rendering.</p>\n\n\n<p>This allows the GridView to execute a refresh quickly, with the expensive update of the row\nstructure deferred so that layouts with GridPanels appear, and lay out more quickly.</p>\n\n",
        "linenr": 73,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabled",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "disabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Defaults to false.</p>\n",
        "linenr": 384,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabledCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "CSS class to add when the Component is disabled. ...",
        "static": false,
        "name": "disabledCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS class to add when the Component is disabled. Defaults to 'x-item-disabled'.</p>\n",
        "linenr": 302,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Object/Array",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-dockedItems",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "A component or series of components to be added as docked items to this panel. ...",
        "static": false,
        "name": "dockedItems",
        "owner": "Ext.panel.Panel",
        "doc": "<p>A component or series of components to be added as docked items to this panel.\nThe docked items can be docked to either the top, right, left or bottom of a panel.\nThis is typically used for things like toolbars or tab bars:</p>\n\n<pre><code>var panel = new Ext.panel.Panel({\n    dockedItems: [{\n        xtype: 'toolbar',\n        dock: 'top',\n        items: [{\n            text: 'Docked to the top'\n        }]\n    }]\n});</pre>\n\n\n<p></code></p>\n",
        "linenr": 240,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-draggable",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Specify as true to make a floating Component draggable using the Component's encapsulating element as the drag handle. ...",
        "static": false,
        "name": "draggable",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to make a <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> Component draggable using the Component's encapsulating element as the drag handle.</p>\n\n\n<p>This may also be specified as a config object for the <a href=\"#/api/Ext.util.ComponentDragger\" rel=\"Ext.util.ComponentDragger\" class=\"docClass\">ComponentDragger</a> which is instantiated to perform dragging.</p>\n\n\n<p>For example to create a Component which may only be dragged around using a certain internal element as the drag handle,\nuse the delegate option:</p>\n\n\n<p><code></p>\n\n<pre>new Ext.Component({\n    constrain: true,\n    floating:true,\n    style: {\n        backgroundColor: '#fff',\n        border: '1px solid black'\n    },\n    html: '&lt;h1 style=\"cursor:move\"&gt;The title&lt;/h1&gt;&lt;p&gt;The content&lt;/p&gt;',\n    draggable: {\n        delegate: 'h1'\n    }\n}).show();\n</pre>\n\n\n<p></code></p>\n",
        "linenr": 237,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-cfg-enableColumnHide",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Defaults to true. ...",
        "static": false,
        "name": "enableColumnHide",
        "owner": "Ext.panel.Table",
        "doc": "<p>Defaults to <code>true</code>. Set to <code>false</code> to disable column hiding within this grid.</p>\n",
        "linenr": 110,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-cfg-enableColumnMove",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Defaults to true. ...",
        "static": false,
        "name": "enableColumnMove",
        "owner": "Ext.panel.Table",
        "doc": "<p>Defaults to <code>true</code>. Set to <code>false</code> to disable column dragging within this grid.</p>\n",
        "linenr": 98,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-cfg-enableColumnResize",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Defaults to true. ...",
        "static": false,
        "name": "enableColumnResize",
        "owner": "Ext.panel.Table",
        "doc": "<p>Defaults to <code>true</code>. Set to <code>false</code> to disable column resizing within this grid.</p>\n",
        "linenr": 104,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "Object/Array",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-fbar",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Convenience method used for adding items to the bottom of the panel. ...",
        "static": false,
        "name": "fbar",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method used for adding items to the bottom of the panel. Short for Footer Bar.</p>\n\n<pre><code>fbar: [\n  { type: 'button', text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'bottom',\n    ui: 'footer',\n    defaults: {minWidth: <a href=\"#/api/Ext.grid.Panel-cfg-minButtonWidth\" rel=\"Ext.grid.Panel-cfg-minButtonWidth\" class=\"docClass\">minButtonWidth</a>},\n    items: [\n        { xtype: 'component', flex: 1 },\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n\n<p>The <a href=\"#/api/Ext.grid.Panel-cfg-minButtonWidth\" rel=\"Ext.grid.Panel-cfg-minButtonWidth\" class=\"docClass\">minButtonWidth</a> is used as the default <a href=\"#/api/Ext.button.Button-cfg-minWidth\" rel=\"Ext.button.Button-cfg-minWidth\" class=\"docClass\">minWidth</a> for\neach of the buttons in the fbar.</p>\n",
        "linenr": 602,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-floatable",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Important: This config is only effective for collapsible Panels which are direct child items of a border layout. ...",
        "static": false,
        "name": "floatable",
        "owner": "Ext.panel.Panel",
        "doc": "<p><b>Important: This config is only effective for <a href=\"#/api/Ext.grid.Panel-cfg-collapsible\" rel=\"Ext.grid.Panel-cfg-collapsible\" class=\"docClass\">collapsible</a> Panels which are direct child items of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>.</b></p>\n\n\n<p><tt>true</tt> to allow clicking a collapsed Panel&#39;s <a href=\"#/api/Ext.grid.Panel-cfg-placeholder\" rel=\"Ext.grid.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a> to display the Panel floated\nabove the layout, <tt>false</tt> to force the user to fully expand a collapsed region by\nclicking the expand button to see it again (defaults to <tt>true</tt>).</p>\n",
        "linenr": 178,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-floating",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Specify as true to float the Component outside of the document flow using CSS absolute positioning. ...",
        "static": false,
        "name": "floating",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to float the Component outside of the document flow using CSS absolute positioning.</p>\n\n\n<p>Components such as <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s and <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Menu</a>s are floating\nby default.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will register themselves with the global\n<a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<h3 class=\"pa\">Floating Components as child items of a Container</h3>\n\n\n<p>A floating Component may be used as a child item of a Container. This just allows the floating Component to seek a ZIndexManager by\nexamining the ownerCt chain.</p>\n\n\n<p>When configured as floating, Components acquire, at render time, a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which manages a stack\nof related floating Components. The ZIndexManager brings a single floating Component to the top of its stack when\nthe Component's <a href=\"#/api/Ext.grid.Panel-method-toFront\" rel=\"Ext.grid.Panel-method-toFront\" class=\"docClass\">toFront</a> method is called.</p>\n\n\n<p>The ZIndexManager is found by traversing up the <a href=\"#/api/Ext.grid.Panel-property-ownerCt\" rel=\"Ext.grid.Panel-property-ownerCt\" class=\"docClass\">ownerCt</a> chain to find an ancestor which itself is floating. This is so that\ndescendant floating Components of floating <i>Containers</i> (Such as a ComboBox dropdown within a Window) can have its zIndex managed relative\nto any siblings, but always <b>above</b> that floating ancestor Container.</p>\n\n\n<p>If no floating ancestor is found, a floating Component registers itself with the default <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a>.</p>\n\n\n<p>Floating components <i>do not participate in the Container's layout</i>. Because of this, they are not rendered until you explicitly\n<a href=\"#/api/Ext.grid.Panel-event-show\" rel=\"Ext.grid.Panel-event-show\" class=\"docClass\">show</a> them.</p>\n\n\n<p>After rendering, the ownerCt reference is deleted, and the <a href=\"#/api/Ext.grid.Panel-property-floatParent\" rel=\"Ext.grid.Panel-property-floatParent\" class=\"docClass\">floatParent</a> property is set to the found floating ancestor Container.\nIf no floating ancestor Container was found the <a href=\"#/api/Ext.grid.Panel-property-floatParent\" rel=\"Ext.grid.Panel-property-floatParent\" class=\"docClass\">floatParent</a> property will not be set.</p>\n\n",
        "linenr": 178,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Floating.html#Ext-util-Floating-cfg-focusOnToFront",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Specifies whether the floated component should be automatically focused when it is\nbrought to the front. ...",
        "static": false,
        "name": "focusOnToFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floated component should be automatically <a href=\"#/api/Ext.grid.Panel-method-focus\" rel=\"Ext.grid.Panel-method-focus\" class=\"docClass\">focused</a> when it is\n<a href=\"#/api/Ext.grid.Panel-method-toFront\" rel=\"Ext.grid.Panel-method-toFront\" class=\"docClass\">brought to the front</a>. Defaults to true.</p>\n",
        "linenr": 9,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-cfg-forceFit",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Specify as true to force the columns to fit into the available width. ...",
        "static": false,
        "name": "forceFit",
        "owner": "Ext.panel.Table",
        "doc": "<p>Specify as <code>true</code> to force the columns to fit into the available width. Headers are first sized according to configuration, whether that be\na specific width, or flex. Then they are all proportionally changed in width so that the entire content width is used..</p>\n",
        "linenr": 62,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-frame",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "static": false,
        "name": "frame",
        "owner": "Ext.panel.Panel",
        "doc": "<p>True to apply a frame to the panel.</p>\n",
        "linenr": 267,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-frameHeader",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "static": false,
        "name": "frameHeader",
        "owner": "Ext.panel.Panel",
        "doc": "<p>True to apply a frame to the panel panels header (if 'frame' is true).</p>\n",
        "linenr": 273,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-headerPosition",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Specify as 'top', 'bottom', 'left' or 'right'. ...",
        "static": false,
        "name": "headerPosition",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Specify as <code>'top'</code>, <code>'bottom'</code>, <code>'left'</code> or <code>'right'</code>. Defaults to <code>'top'</code>.</p>\n",
        "linenr": 262,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-height",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "height",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The height of this component in pixels.</p>\n",
        "linenr": 355,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hidden",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "hidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Defaults to false.</p>\n",
        "linenr": 378,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-hideCollapseTool",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "static": false,
        "name": "hideCollapseTool",
        "owner": "Ext.panel.Panel",
        "doc": "<p><code>true</code> to hide the expand/collapse toggle button when <code><a href=\"#/api/Ext.grid.Panel-cfg-collapsible\" rel=\"Ext.grid.Panel-cfg-collapsible\" class=\"docClass\">collapsible</a> == true</code>,\n<code>false</code> to display it (defaults to <code>false</code>).</p>\n",
        "linenr": 141,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-cfg-hideHeaders",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "static": false,
        "name": "hideHeaders",
        "owner": "Ext.panel.Table",
        "doc": "<p>Specify as <code>true</code> to hide the headers.</p>\n",
        "linenr": 68,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hideMode",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "A String which specifies how this Component's encapsulating DOM element will be hidden. ...",
        "static": false,
        "name": "hideMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A String which specifies how this Component's encapsulating DOM element will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div>\nDefaults to <code>'display'</code>.</p>\n",
        "linenr": 409,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String/Object",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-html",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An HTML fragment, or a DomHelper specification to use as the layout element\ncontent (defaults to ''). ...",
        "static": false,
        "name": "html",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An HTML fragment, or a <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> specification to use as the layout element\ncontent (defaults to ''). The HTML content is added after the component is rendered,\nso the document will not contain this HTML at the time the <a href=\"#/api/Ext.grid.Panel-event-render\" rel=\"Ext.grid.Panel-event-render\" class=\"docClass\">render</a> event is fired.\nThis content is inserted into the body <i>before</i> any configured <a href=\"#/api/Ext.grid.Panel-cfg-contentEl\" rel=\"Ext.grid.Panel-cfg-contentEl\" class=\"docClass\">contentEl</a> is appended.</p>\n",
        "linenr": 440,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-id",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The unique id of this component instance (defaults to an auto-assigned id). ...",
        "static": false,
        "name": "id",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The <b><u>unique id of this component instance</u></b> (defaults to an <a href=\"#/api/Ext.grid.Panel-method-getId\" rel=\"Ext.grid.Panel-method-getId\" class=\"docClass\">auto-assigned id</a>).</p>\n\n\n<p>It should not be necessary to use this configuration except for singleton objects in your application.\nComponents created with an id may be accessed globally using <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>.</p>\n\n\n<p>Instead of using assigned ids, use the <a href=\"#/api/Ext.grid.Panel-cfg-itemId\" rel=\"Ext.grid.Panel-cfg-itemId\" class=\"docClass\">itemId</a> config, and <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> which\nprovides selector-based searching for Sencha Components analogous to DOM querying. The <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>\nclass contains <a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">shortcut methods</a> to query its descendant Components by selector.</p>\n\n\n<p>Note that this id will also be used as the element id for the containing HTML element\nthat is rendered to the page for this component. This allows you to write id-based CSS\nrules to style the specific instance of this component uniquely, and also to select\nsub-elements using this component's id as the parent.</p>\n\n\n<p><b>Note</b>: to avoid complications imposed by a unique <tt>id</tt> also see <code><a href=\"#/api/Ext.grid.Panel-cfg-itemId\" rel=\"Ext.grid.Panel-cfg-itemId\" class=\"docClass\">itemId</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of a Component see <code><a href=\"#/api/Ext.grid.Panel-property-ownerCt\" rel=\"Ext.grid.Panel-property-ownerCt\" class=\"docClass\">ownerCt</a></code>.</p>\n\n",
        "linenr": 50,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-itemId",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An itemId can be used as an alternative way to get a reference to a component\nwhen no object reference is available. ...",
        "static": false,
        "name": "itemId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <tt>itemId</tt> can be used as an alternative way to get a reference to a component\nwhen no object reference is available.  Instead of using an <code><a href=\"#/api/Ext.grid.Panel-cfg-id\" rel=\"Ext.grid.Panel-cfg-id\" class=\"docClass\">id</a></code> with\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>.<a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">getCmp</a>, use <code>itemId</code> with\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a> which will retrieve\n<code>itemId</code>'s or <tt><a href=\"#/api/Ext.grid.Panel-cfg-id\" rel=\"Ext.grid.Panel-cfg-id\" class=\"docClass\">id</a></tt>'s. Since <code>itemId</code>'s are an index to the\ncontainer's internal MixedCollection, the <code>itemId</code> is scoped locally to the container --\navoiding potential conflicts with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> which requires a <b>unique</b>\n<code><a href=\"#/api/Ext.grid.Panel-cfg-id\" rel=\"Ext.grid.Panel-cfg-id\" class=\"docClass\">id</a></code>.</p>\n\n\n<pre><code>var c = new Ext.panel.Panel({ //\n    <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 300,\n    <a href=\"#/api/Ext.grid.Panel-cfg-renderTo\" rel=\"Ext.grid.Panel-cfg-renderTo\" class=\"docClass\">renderTo</a>: document.body,\n    <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a>: 'auto',\n    <a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a>: [\n        {\n            itemId: 'p1',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 1',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        },\n        {\n            itemId: 'p2',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 2',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        }\n    ]\n})\np1 = c.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p1'); // not the same as <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp()</a>\np2 = p1.<a href=\"#/api/Ext.grid.Panel-property-ownerCt\" rel=\"Ext.grid.Panel-property-ownerCt\" class=\"docClass\">ownerCt</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p2'); // reference via a sibling\n</code></pre>\n\n\n<p>Also see <tt><a href=\"#/api/Ext.grid.Panel-cfg-id\" rel=\"Ext.grid.Panel-cfg-id\" class=\"docClass\">id</a></tt>, <code><a href=\"#/api/Ext.container.Container-method-query\" rel=\"Ext.container.Container-method-query\" class=\"docClass\">Ext.container.Container.query</a></code>,\n<code><a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">Ext.container.Container.down</a></code> and <code><a href=\"#/api/Ext.container.Container-method-child\" rel=\"Ext.container.Container-method-child\" class=\"docClass\">Ext.container.Container.child</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of an item see <tt><a href=\"#/api/Ext.grid.Panel-property-ownerCt\" rel=\"Ext.grid.Panel-property-ownerCt\" class=\"docClass\">ownerCt</a></tt>.</p>\n\n",
        "linenr": 66,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Object/Array",
        "deprecated": null,
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-items",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "A single item, or an array of child Components to be added to this container\n\n\nUnless configured with a layout, a Con...",
        "static": false,
        "name": "items",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>A single item, or an array of child Components to be added to this container</p>\n\n\n<p><b>Unless configured with a <a href=\"#/api/Ext.grid.Panel-cfg-layout\" rel=\"Ext.grid.Panel-cfg-layout\" class=\"docClass\">layout</a>, a Container simply renders child Components serially into\nits encapsulating element and performs no sizing or positioning upon them.</b><p>\n<p>Example:</p>\n<pre><code>// specifying a single item\nitems: {...},\nlayout: 'fit',    // The single items is sized to fit\n\n// specifying multiple items\nitems: [{...}, {...}],\nlayout: 'hbox', // The items are arranged horizontally\n       </code></pre>\n<p>Each item may be:</p>\n<ul>\n<li>A <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></li>\n<li>A Component configuration object</li>\n</ul>\n<p>If a configuration object is specified, the actual type of Component to be\ninstantiated my be indicated by using the xtype option.</p>\n<p>Every Component class has its own xtype.</p>\n<p>If an xtype is not explicitly\nspecified, the <a href=\"#/api/Ext.grid.Panel-cfg-defaultType\" rel=\"Ext.grid.Panel-cfg-defaultType\" class=\"docClass\">defaultType</a> for the Container is used, which by default is usually <code>panel</code>.</p>\n<p><b>Notes</b>:</p>\n<p>Ext uses lazy rendering. Child Components will only be rendered\nshould it become necessary. Items are automatically laid out when they are first\nshown (no sizing is done while hidden), or in response to a <a href=\"#/api/Ext.grid.Panel-method-doLayout\" rel=\"Ext.grid.Panel-method-doLayout\" class=\"docClass\">doLayout</a> call.</p>\n<p>Do not specify <code><a href=\"#/api/Ext.panel.Panel-cfg-contentEl\" rel=\"Ext.panel.Panel-cfg-contentEl\" class=\"docClass\">contentEl</a></code> or \n<code><a href=\"#/api/Ext.panel.Panel-cfg-html\" rel=\"Ext.panel.Panel-cfg-html\" class=\"docClass\">html</a></code> with <code>items</code>.</p>\n\n",
        "linenr": 94,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "type": "String/Object",
        "deprecated": null,
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-layout",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "*Important: In order for child items to be correctly sized and\npositioned, typically a layout manager must be specifi...",
        "static": false,
        "name": "layout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p><b>*Important</b>: In order for child items to be correctly sized and\npositioned, typically a layout manager <b>must</b> be specified through\nthe <code>layout</code> configuration option.</p>\n\n\n<br><p>The sizing and positioning of child <a href=\"#/api/Ext.grid.Panel-property-items\" rel=\"Ext.grid.Panel-property-items\" class=\"docClass\">items</a> is the responsibility of\n\n\n<p>the Container's layout manager which creates and manages the type of layout\nyou have in mind.  For example:</p></p>\n\n<p>If the <a href=\"#/api/Ext.grid.Panel-cfg-layout\" rel=\"Ext.grid.Panel-cfg-layout\" class=\"docClass\">layout</a> configuration is not explicitly specified for\na general purpose container (e.g. Container or Panel) the\n<a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used\nwhich does nothing but render child components sequentially into the\nContainer (no sizing or positioning will be performed in this situation).</p>\n\n\n<br><p><b><code>layout</code></b> may be specified as either as an Object or\n\n\n<p>as a String:</p><div><ul class=\"mdetail-params\"></p>\n\n<p><li><u>Specify as an Object</u></li></p>\n\n<div><ul class=\"mdetail-params\">\n<li>Example usage:</li>\n<pre><code>layout: {\n    type: 'vbox',\n    align: 'left'\n}\n       </code></pre>\n\n<li><code><b>type</b></code></li>\n<br/><p>The layout type to be used for this container.  If not specified,\na default <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">Ext.layout.container.Auto</a> will be created and used.</p>\n<br/><p>Valid layout <code>type</code> values are:</p>\n<div class=\"sub-desc\"><ul class=\"mdetail-params\">\n<li><code><b><a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">Auto</a></b></code> &nbsp;&nbsp;&nbsp; <b>Default</b></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.Card\" rel=\"Ext.layout.container.Card\" class=\"docClass\">card</a></b></code></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.Fit\" rel=\"Ext.layout.container.Fit\" class=\"docClass\">fit</a></b></code></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">hbox</a></b></code></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">vbox</a></b></code></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.Anchor\" rel=\"Ext.layout.container.Anchor\" class=\"docClass\">anchor</a></b></code></li>\n<li><code><b><a href=\"#/api/Ext.layout.container.Table\" rel=\"Ext.layout.container.Table\" class=\"docClass\">table</a></b></code></li>\n</ul></div>\n\n<li>Layout specific configuration properties</li>\n<br/><p>Additional layout specific configuration properties may also be\nspecified. For complete details regarding the valid config options for\neach layout type, see the layout class corresponding to the <code>type</code>\nspecified.</p>\n\n</ul></div>\n\n\n<p><li><u>Specify as a String</u></li></p>\n\n<div><ul class=\"mdetail-params\">\n<li>Example usage:</li>\n<pre><code>layout: {\n    type: 'vbox',\n    padding: '5',\n    align: 'left'\n}\n       </code></pre>\n<li><code><b>layout</b></code></li>\n<br/><p>The layout <code>type</code> to be used for this container (see list\nof valid layout type values above).</p><br/>\n<br/><p>Additional layout specific configuration properties. For complete\ndetails regarding the valid config options for each layout type, see the\nlayout class corresponding to the <code>layout</code> specified.</p>\n</ul></div>\n\n\n<p></ul></div></p>\n",
        "linenr": 20,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "type": "Object/Array",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-lbar",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Convenience method. ...",
        "static": false,
        "name": "lbar",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method. Short for 'Left Bar' (left-docked, vertical toolbar).</p>\n\n<pre><code>lbar: [\n  { xtype: 'button', text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'left',\n    items: [\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n",
        "linenr": 650,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "static": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.grid.Panel-method-addListener\" rel=\"Ext.grid.Panel-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 102,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "type": "Ext.ComponentLoader/Object",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-loader",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "loader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A configuration object or an instance of a <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> to load remote\ncontent for this Component.</p>\n",
        "linenr": 483,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-maintainFlex",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Only valid when a sibling element of a Splitter within a VBox or\nHBox layout. ...",
        "static": false,
        "name": "maintainFlex",
        "owner": "Ext.Component",
        "doc": "<p><b>Only valid when a sibling element of a <a href=\"#/api/Ext.resizer.Splitter\" rel=\"Ext.resizer.Splitter\" class=\"docClass\">Splitter</a> within a <a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">VBox</a> or\n<a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">HBox</a> layout.</b></p>\n\n\n<p>Specifies that if an immediate sibling Splitter is moved, the Component on the <i>other</i> side is resized, and this\nComponent maintains its configured <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">flex</a> value.</p>\n\n",
        "linenr": 259,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Number/String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-margin",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Specifies the margin for this component. ...",
        "static": false,
        "name": "margin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 372,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxHeight",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The maximum value in pixels which this Component will set its height to. ...",
        "static": false,
        "name": "maxHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 472,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxWidth",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The maximum value in pixels which this Component will set its width to. ...",
        "static": false,
        "name": "maxWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 477,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-minButtonWidth",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Minimum width of all footer toolbar buttons in pixels (defaults to 75). ...",
        "static": false,
        "name": "minButtonWidth",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Minimum width of all footer toolbar buttons in pixels (defaults to <tt>75</tt>). If set, this will\nbe used as the default value for the <tt><a href=\"#/api/Ext.button.Button-cfg-minWidth\" rel=\"Ext.button.Button-cfg-minWidth\" class=\"docClass\">Ext.button.Button.minWidth</a></tt> config of\neach Button added to the <b>footer toolbar</b> via the <a href=\"#/api/Ext.grid.Panel-cfg-fbar\" rel=\"Ext.grid.Panel-cfg-fbar\" class=\"docClass\">fbar</a> or <a href=\"#/api/Ext.grid.Panel-cfg-buttons\" rel=\"Ext.grid.Panel-cfg-buttons\" class=\"docClass\">buttons</a> configurations.\nIt will be ignored for buttons that have a minWidth configured some other way, e.g. in their own config\nobject or via the defaults of their parent container.</p>\n",
        "linenr": 117,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minHeight",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The minimum value in pixels which this Component will set its height to. ...",
        "static": false,
        "name": "minHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 462,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minWidth",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The minimum value in pixels which this Component will set its width to. ...",
        "static": false,
        "name": "minWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 467,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-overCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and...",
        "static": false,
        "name": "overCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and removed when the mouse moves out. (defaults to '').  This can be\nuseful for adding customized 'active' or 'hover' styles to the component or any of its children using standard CSS rules.</p>\n",
        "linenr": 295,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-overlapHeader",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "True to overlap the header in a panel over the framing of the panel itself. ...",
        "static": false,
        "name": "overlapHeader",
        "owner": "Ext.panel.Panel",
        "doc": "<p>True to overlap the header in a panel over the framing of the panel itself. This is needed when frame:true (and is done automatically for you). Otherwise it is undefined.\nIf you manually add rounded corners to a panel header which does not have frame:true, this will need to be set to true.</p>\n",
        "linenr": 187,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Number/String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-padding",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Specifies the padding for this component. ...",
        "static": false,
        "name": "padding",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 366,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-placeholder",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Important: This config is only effective for collapsible Panels which are direct child items of a border layout\nwhen ...",
        "static": false,
        "name": "placeholder",
        "owner": "Ext.panel.Panel",
        "doc": "<p><b>Important: This config is only effective for <a href=\"#/api/Ext.grid.Panel-cfg-collapsible\" rel=\"Ext.grid.Panel-cfg-collapsible\" class=\"docClass\">collapsible</a> Panels which are direct child items of a <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>\nwhen not using the <code>'header'</code> <a href=\"#/api/Ext.grid.Panel-cfg-collapseMode\" rel=\"Ext.grid.Panel-cfg-collapseMode\" class=\"docClass\">collapseMode</a>.</b></p>\n\n\n<p><b>Optional.</b> A Component (or config object for a Component) to show in place of this Panel when this Panel is collapsed by a\n<a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">border layout</a>. Defaults to a generated <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">Header</a>\ncontaining a <a href=\"#/api/Ext.panel.Tool\" rel=\"Ext.panel.Tool\" class=\"docClass\">Tool</a> to re-expand the Panel.</p>\n\n",
        "linenr": 169,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Object/Array",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-plugins",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An object or array of objects that will provide custom functionality for this component. ...",
        "static": false,
        "name": "plugins",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object or array of objects that will provide custom functionality for this component.  The only\nrequirement for a valid plugin is that it contain an init method that accepts a reference of type <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.\nWhen a component is created, if any plugins are available, the component will call the init method on each\nplugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the\ncomponent as needed to provide its functionality.</p>\n",
        "linenr": 512,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-preventHeader",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Prevent a Header from being created and shown. ...",
        "static": false,
        "name": "preventHeader",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Prevent a Header from being created and shown. Defaults to false.</p>\n",
        "linenr": 257,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Object/Array",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-rbar",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Convenience method. ...",
        "static": false,
        "name": "rbar",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method. Short for 'Right Bar' (right-docked, vertical toolbar).</p>\n\n<pre><code>rbar: [\n  { xtype: 'button', text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'right',\n    items: [\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n",
        "linenr": 676,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderSelectors",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An object containing properties specifying DomQuery selectors which identify child elements\ncreated by the render pro...",
        "static": false,
        "name": "renderSelectors",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object containing properties specifying <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selectors which identify child elements\ncreated by the render process.</p>\n\n<p>After the Component's internal structure is rendered according to the <a href=\"#/api/Ext.grid.Panel-cfg-renderTpl\" rel=\"Ext.grid.Panel-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, this object is iterated through,\nand the found Elements are added as properties to the Component using the <code>renderSelector</code> property name.</p>\n\n<p>For example, a Component which rendered an image, and description into its element might use the following properties\ncoded into its prototype:</p>\n\n<pre><code>renderTpl: '&amp;lt;img src=\"{imageUrl}\" class=\"x-image-component-img\"&gt;&amp;lt;div class=\"x-image-component-desc\"&gt;{description}&amp;gt;/div&amp;lt;',\n\nrenderSelectors: {\n    image: 'img.x-image-component-img',\n    descEl: 'div.x-image-component-desc'\n}\n</code></pre>\n\n<p>After rendering, the Component would have a property <code>image</code> referencing its child <code>img</code> Element,\nand a property <code>descEl</code> referencing the <code>div</code> Element which contains the description.</p>\n",
        "linenr": 179,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTo",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into. ...",
        "static": false,
        "name": "renderTo",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into.</p>\n\n\n<div><ul>\n<li><b>Notes</b> : <ul>\n<div class=\"sub-desc\">Do <u>not</u> use this option if the Component is to be a child item of\na <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>. It is the responsibility of the\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>'s <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout manager</a>\nto render and manage its child items.</div>\n<div class=\"sub-desc\">When using this config, a call to render() is not required.</div>\n</ul></li>\n</ul></div>\n\n\n<p>See <code><a href=\"#/api/Ext.grid.Panel-event-render\" rel=\"Ext.grid.Panel-event-render\" class=\"docClass\">render</a></code> also.</p>\n\n",
        "linenr": 204,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTpl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An XTemplate used to create the internal structure inside this Component's\nencapsulating Element. ...",
        "static": false,
        "name": "renderTpl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> used to create the internal structure inside this Component's\nencapsulating <a href=\"#/api/Ext.grid.Panel-method-getEl\" rel=\"Ext.grid.Panel-method-getEl\" class=\"docClass\">Element</a>.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\nand <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>, this defaults to <b><code>null</code></b> which means that they will be initially rendered\nwith no internal structure; they render their <a href=\"#/api/Ext.grid.Panel-method-getEl\" rel=\"Ext.grid.Panel-method-getEl\" class=\"docClass\">Element</a> empty. The more specialized ExtJS and Touch classes\nwhich use a more complex DOM structure, provide their own template definitions.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components with customized\ninternal structure.</p>\n\n\n<p>Upon rendering, any created child elements may be automatically imported into object properties using the\n<a href=\"#/api/Ext.grid.Panel-cfg-renderSelectors\" rel=\"Ext.grid.Panel-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a> option.</p>\n\n",
        "linenr": 164,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-resizable",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Specify as true to apply a Resizer to this Component\nafter rendering. ...",
        "static": false,
        "name": "resizable",
        "owner": "Ext.Component",
        "doc": "<p>Specify as <code>true</code> to apply a <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a> to this Component\nafter rendering.</p>\n\n\n<p>May also be specified as a config object to be passed to the constructor of <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a>\nto override any defaults. By default the Component passes its minimum and maximum size, and uses\n<code><a href=\"#/api/Ext.resizer.Resizer-cfg-dynamic\" rel=\"Ext.resizer.Resizer-cfg-dynamic\" class=\"docClass\">Ext.resizer.Resizer.dynamic</a>: false</code></p>\n\n",
        "linenr": 157,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-resizeHandles",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "A valid Ext.resizer.Resizer handles config string (defaults to 'all'). ...",
        "static": false,
        "name": "resizeHandles",
        "owner": "Ext.Component",
        "doc": "<p>A valid <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Ext.resizer.Resizer</a> handles config string (defaults to 'all').  Only applies when resizable = true.</p>\n",
        "linenr": 166,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Stateful.html#Ext-state-Stateful-cfg-saveBuffer",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "A buffer to be applied if many state events are fired within\na short period. ...",
        "static": false,
        "name": "saveBuffer",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A buffer to be applied if many state events are fired within\na short period. Defaults to 100.</p>\n",
        "linenr": 74,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "type": "String/Boolean",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-cfg-scroll",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Valid values are 'both', 'horizontal' or 'vertical'. ...",
        "static": false,
        "name": "scroll",
        "owner": "Ext.panel.Table",
        "doc": "<p>Valid values are 'both', 'horizontal' or 'vertical'. true implies 'both'. false implies 'none'.\nDefaults to true.</p>\n",
        "linenr": 49,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-cfg-scrollDelta",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Number of pixels to scroll when scrolling with mousewheel. ...",
        "static": false,
        "name": "scrollDelta",
        "owner": "Ext.panel.Table",
        "doc": "<p>Number of pixels to scroll when scrolling with mousewheel.\nDefaults to 40.</p>\n",
        "linenr": 42,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "String/Boolean",
        "deprecated": null,
        "href": "Floating.html#Ext-util-Floating-cfg-shadow",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Specifies whether the floating component should be given a shadow. ...",
        "static": false,
        "name": "shadow",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floating component should be given a shadow. Set to\n<tt>true</tt> to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the\nshadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. Set to <tt>false</tt> to disable the shadow.\n(Defaults to <tt>'sides'</tt>.)</p>\n",
        "linenr": 16,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-cfg-sortableColumns",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Defaults to true. ...",
        "static": false,
        "name": "sortableColumns",
        "owner": "Ext.panel.Table",
        "doc": "<p>Defaults to <code>true</code>. Set to <code>false</code> to disable column sorting via clicking the\nheader and via the Sorting menu items.</p>\n",
        "linenr": 79,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateEvents",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). ...",
        "static": false,
        "name": "stateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). <code>stateEvents</code> may be any type\nof event supported by this object, including browser or custom events\n(e.g., <tt>['click', 'customerchange']</tt>).</p>\n\n\n<p>See <code><a href=\"#/api/Ext.grid.Panel-cfg-stateful\" rel=\"Ext.grid.Panel-cfg-stateful\" class=\"docClass\">stateful</a></code> for an explanation of saving and\nrestoring object state.</p>\n\n",
        "linenr": 64,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateId",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "The unique id for this object to use for state management purposes. ...",
        "static": false,
        "name": "stateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>The unique id for this object to use for state management purposes.</p>\n\n<p>See <a href=\"#/api/Ext.grid.Panel-cfg-stateful\" rel=\"Ext.grid.Panel-cfg-stateful\" class=\"docClass\">stateful</a> for an explanation of saving and restoring state.</p>\n\n",
        "linenr": 58,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateful",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. ...",
        "static": false,
        "name": "stateful",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. The object must have\na <code><a href=\"#/api/Ext.grid.Panel-cfg-stateId\" rel=\"Ext.grid.Panel-cfg-stateId\" class=\"docClass\">stateId</a></code> for state to be managed.\nAuto-generated ids are not guaranteed to be stable across page loads and\ncannot be relied upon to save and restore the same state for a object.<p>\n<p>For state saving to work, the state manager's provider must have been\nset to an implementation of <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> which overrides the\n<a href=\"#/api/Ext.state.Provider-method-set\" rel=\"Ext.state.Provider-method-set\" class=\"docClass\">set</a> and <a href=\"#/api/Ext.state.Provider-method-get\" rel=\"Ext.state.Provider-method-get\" class=\"docClass\">get</a>\nmethods to save and recall name/value pairs. A built-in implementation,\n<a href=\"#/api/Ext.state.CookieProvider\" rel=\"Ext.state.CookieProvider\" class=\"docClass\">Ext.state.CookieProvider</a> is available.</p>\n<p>To set the state provider for the current page:</p>\n<pre><code>Ext.state.Manager.setProvider(new Ext.state.CookieProvider({\n    expires: new Date(new Date().getTime()+(1000*60*60*24*7)), //7 days from now\n}));\n</code></pre>\n<p>A stateful object attempts to save state when one of the events\nlisted in the <code><a href=\"#/api/Ext.grid.Panel-cfg-stateEvents\" rel=\"Ext.grid.Panel-cfg-stateEvents\" class=\"docClass\">stateEvents</a></code> configuration fires.</p>\n<p>To save state, a stateful object first serializes its state by\ncalling <b><code><a href=\"#/api/Ext.grid.Panel-method-getState\" rel=\"Ext.grid.Panel-method-getState\" class=\"docClass\">getState</a></code></b>. By default, this function does\nnothing. The developer must provide an implementation which returns an\nobject hash which represents the restorable state of the object.</p>\n<p>The value yielded by getState is passed to <a href=\"#/api/Ext.state.Manager-method-set\" rel=\"Ext.state.Manager-method-set\" class=\"docClass\">Ext.state.Manager.set</a>\nwhich uses the configured <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> to save the object\nkeyed by the <code><a href=\"#/api/Ext.grid.Panel-cfg-stateId\" rel=\"Ext.grid.Panel-cfg-stateId\" class=\"docClass\">stateId</a></code></p>.\n<p>During construction, a stateful object attempts to <i>restore</i>\nits state by calling <a href=\"#/api/Ext.state.Manager-method-get\" rel=\"Ext.state.Manager-method-get\" class=\"docClass\">Ext.state.Manager.get</a> passing the\n<code><a href=\"#/api/Ext.grid.Panel-cfg-stateId\" rel=\"Ext.grid.Panel-cfg-stateId\" class=\"docClass\">stateId</a></code></p>\n<p>The resulting object is passed to <b><code><a href=\"#/api/Ext.grid.Panel-method-applyState\" rel=\"Ext.grid.Panel-method-applyState\" class=\"docClass\">applyState</a></code></b>.\nThe default implementation of <code><a href=\"#/api/Ext.grid.Panel-method-applyState\" rel=\"Ext.grid.Panel-method-applyState\" class=\"docClass\">applyState</a></code> simply copies\nproperties into the object, but a developer may override this to support\nmore behaviour.</p>\n<p>You can perform extra processing on state save and restore by attaching\nhandlers to the <a href=\"#/api/Ext.grid.Panel-event-beforestaterestore\" rel=\"Ext.grid.Panel-event-beforestaterestore\" class=\"docClass\">beforestaterestore</a>, <a href=\"#/api/Ext.grid.Panel-event-staterestore\" rel=\"Ext.grid.Panel-event-staterestore\" class=\"docClass\">staterestore</a>,\n<a href=\"#/api/Ext.grid.Panel-event-beforestatesave\" rel=\"Ext.grid.Panel-event-beforestatesave\" class=\"docClass\">beforestatesave</a> and <a href=\"#/api/Ext.grid.Panel-event-statesave\" rel=\"Ext.grid.Panel-event-statesave\" class=\"docClass\">statesave</a> events.</p>\n\n",
        "linenr": 18,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-style",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "A custom style specification to be applied to this component's Element. ...",
        "static": false,
        "name": "style",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A custom style specification to be applied to this component's Element.  Should be a valid argument to\n<a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>.</p>\n\n<pre><code>        new Ext.panel.Panel({\n            title: 'Some Title',\n            renderTo: Ext.getBody(),\n            width: 400, height: 300,\n            layout: 'form',\n            items: [{\n                xtype: 'textarea',\n                style: {\n                    width: '95%',\n                    marginBottom: '10px'\n                }\n            },\n            new Ext.button.Button({\n                text: 'Send',\n                minWidth: '100',\n                style: {\n                    marginBottom: '10px'\n                }\n            })\n            ]\n        });\n     </code></pre>\n\n",
        "linenr": 321,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The class that is added to the content target when you set styleHtmlContent to true. ...",
        "static": false,
        "name": "styleHtmlCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The class that is added to the content target when you set styleHtmlContent to true.\nDefaults to 'x-html'</p>\n",
        "linenr": 455,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlContent",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "True to automatically style the html inside the content target of this component (body for panels). ...",
        "static": false,
        "name": "styleHtmlContent",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically style the html inside the content target of this component (body for panels).\nDefaults to false.</p>\n",
        "linenr": 448,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-cfg-suspendLayout",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "If true, suspend calls to doLayout. ...",
        "static": false,
        "name": "suspendLayout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>If true, suspend calls to doLayout.  Useful when batching multiple adds to a container and not passing them\nas multiple arguments or an array.</p>\n",
        "linenr": 155,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "type": "Object/Array",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-tbar",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Convenience method. ...",
        "static": false,
        "name": "tbar",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Convenience method. Short for 'Top Bar'.</p>\n\n<pre><code>tbar: [\n  { xtype: 'button', text: 'Button 1' }\n]\n</code></pre>\n\n<p>is equivalent to</p>\n\n<pre><code>dockedItems: [{\n    xtype: 'toolbar',\n    dock: 'top',\n    items: [\n        { xtype: 'button', text: 'Button 1' }\n    ]\n}]\n</code></pre>\n",
        "linenr": 517,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-title",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "The title text to be used to display in the panel header (defaults to ''). ...",
        "static": false,
        "name": "title",
        "owner": "Ext.panel.Panel",
        "doc": "<p>The title text to be used to display in the <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">panel header</a> (defaults to '').\nWhen a <code>title</code> is specified the <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">Ext.panel.Header</a> will automatically be created and displayed unless\n<a href=\"#/api/Ext.grid.Panel-cfg-preventHeader\" rel=\"Ext.grid.Panel-cfg-preventHeader\" class=\"docClass\">preventHeader</a> is set to <code>true</code>.</p>\n",
        "linenr": 307,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-titleCollapse",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "true to allow expanding and collapsing the panel (when collapsible = true)\nby clicking anywhere in the header bar, fa...",
        "static": false,
        "name": "titleCollapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p><code>true</code> to allow expanding and collapsing the panel (when <code><a href=\"#/api/Ext.grid.Panel-cfg-collapsible\" rel=\"Ext.grid.Panel-cfg-collapsible\" class=\"docClass\">collapsible</a> = true</code>)\nby clicking anywhere in the header bar, <code>false</code>) to allow it only by clicking to tool button\n(defaults to <code>false</code>)).</p>\n",
        "linenr": 148,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-toFrontOnShow",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "True to automatically call toFront when the show method is called\non an already visible, floating component (default ...",
        "static": false,
        "name": "toFrontOnShow",
        "owner": "Ext.Component",
        "doc": "<p>True to automatically call <a href=\"#/api/Ext.grid.Panel-method-toFront\" rel=\"Ext.grid.Panel-method-toFront\" class=\"docClass\">toFront</a> when the <a href=\"#/api/Ext.grid.Panel-event-show\" rel=\"Ext.grid.Panel-event-show\" class=\"docClass\">show</a> method is called\non an already visible, floating component (default is <code>true</code>).</p>\n\n",
        "linenr": 202,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-cfg-tools",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "An array of Ext.panel.Tool configs/instances to be added to the header tool area. ...",
        "static": false,
        "name": "tools",
        "owner": "Ext.panel.Panel",
        "doc": "<p>An array of <a href=\"#/api/Ext.panel.Tool\" rel=\"Ext.panel.Tool\" class=\"docClass\">Ext.panel.Tool</a> configs/instances to be added to the header tool area. The tools are stored as child\ncomponents of the header container. They can be accessed using <a href=\"#/api/Ext.grid.Panel-method-down\" rel=\"Ext.grid.Panel-method-down\" class=\"docClass\">down</a> and {#query}, as well as the other\ncomponent methods. The toggle tool is automatically created if <a href=\"#/api/Ext.grid.Panel-cfg-collapsible\" rel=\"Ext.grid.Panel-cfg-collapsible\" class=\"docClass\">collapsible</a> is set to true.</p>\n\n<p>Note that, apart from the toggle tool which is provided when a panel is collapsible, these\ntools only provide the visual button. Any required functionality must be provided by adding\nhandlers that implement the necessary behavior.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>tools:[{\n    type:'refresh',\n    qtip: 'Refresh form Data',\n    // hidden:true,\n    handler: function(event, toolEl, panel){\n        // refresh logic\n    }\n},\n{\n    type:'help',\n    qtip: 'Get Help',\n    handler: function(event, toolEl, panel){\n        // show help here\n    }\n}]\n</code></pre>\n\n",
        "linenr": 279,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tpl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An Ext.Template, Ext.XTemplate\nor an array of strings to form an Ext.XTemplate. ...",
        "static": false,
        "name": "tpl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <bold><a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></bold>, <bold><a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a></bold>\nor an array of strings to form an <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.\nUsed in conjunction with the <code><a href=\"#/api/Ext.grid.Panel-cfg-data\" rel=\"Ext.grid.Panel-cfg-data\" class=\"docClass\">data</a></code> and\n<code><a href=\"#/api/Ext.grid.Panel-cfg-tplWriteMode\" rel=\"Ext.grid.Panel-cfg-tplWriteMode\" class=\"docClass\">tplWriteMode</a></code> configurations.</p>\n",
        "linenr": 252,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tplWriteMode",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The Ext.(X)Template method to use when\nupdating the content area of the Component. ...",
        "static": false,
        "name": "tplWriteMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The Ext.(X)Template method to use when\nupdating the content area of the Component. Defaults to <code>'overwrite'</code>\n(see <code><a href=\"#/api/Ext.XTemplate-method-overwrite\" rel=\"Ext.XTemplate-method-overwrite\" class=\"docClass\">Ext.XTemplate.overwrite</a></code>).</p>\n",
        "linenr": 266,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String/Array",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-ui",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "A set style for a component. ...",
        "static": false,
        "name": "ui",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A set style for a component. Can be a string or an Array of multiple strings (UIs)</p>\n",
        "linenr": 308,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-width",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "width",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The width of this component in pixels.</p>\n",
        "linenr": 350,
        "html_filename": "AbstractComponent.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.core.Element/String/Object",
            "optional": false,
            "doc": "<p>The configuration options may be specified as either:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>an element</b> :\n<p class=\"sub-desc\">it is set as the internal element and its id used as the component id</p></li>\n<li><b>a string</b> :\n<p class=\"sub-desc\">it is assumed to be the id of an existing element and is used as the component id</p></li>\n<li><b>anything else</b> :\n<p class=\"sub-desc\">it is assumed to be a standard config object and is applied to the component</p></li>\n</ul></div>\n\n",
            "name": "config"
          }
        ],
        "href": "Component2.html#Ext-Component-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Creates new Component. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.Component",
        "doc": "<p>Creates new Component.</p>\n",
        "linenr": 1,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "...Object/Array",
            "optional": false,
            "doc": "<p>Either one or more Components to add or an Array of Components to add.\nSee <code><a href=\"#/api/Ext.grid.Panel-property-items\" rel=\"Ext.grid.Panel-property-items\" class=\"docClass\">items</a></code> for additional information.</p>\n",
            "name": "Component"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-add",
        "return": {
          "type": "Ext.Component/Array",
          "doc": "<p>The Components that were added.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Adds Component(s) to this Container. ...",
        "static": false,
        "name": "add",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Adds <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a>(s) to this Container.</p>\n\n<h2>Description:</h2>\n\n<ul>\n<li>Fires the <a href=\"#/api/Ext.grid.Panel-event-beforeadd\" rel=\"Ext.grid.Panel-event-beforeadd\" class=\"docClass\">beforeadd</a> event before adding.</li>\n<li>The Container's <a href=\"#/api/Ext.grid.Panel-cfg-defaults\" rel=\"Ext.grid.Panel-cfg-defaults\" class=\"docClass\">default config values</a> will be applied\naccordingly (see <code><a href=\"#/api/Ext.grid.Panel-cfg-defaults\" rel=\"Ext.grid.Panel-cfg-defaults\" class=\"docClass\">defaults</a></code> for details).</li>\n<li>Fires the <code><a href=\"#/api/Ext.grid.Panel-event-add\" rel=\"Ext.grid.Panel-event-add\" class=\"docClass\">add</a></code> event after the component has been added.</li>\n</ul>\n\n\n<h2>Notes:</h2>\n\n<p>If the Container is <strong>already rendered</strong> when <code>add</code>\nis called, it will render the newly added Component into its content area.</p>\n\n<p><strong><strong>If</strong></strong> the Container was configured with a size-managing <a href=\"#/api/Ext.grid.Panel-cfg-layout\" rel=\"Ext.grid.Panel-cfg-layout\" class=\"docClass\">layout</a> manager, the Container\nwill recalculate its internal layout at this time too.</p>\n\n<p>Note that the default layout manager simply renders child Components sequentially into the content area and thereafter performs no sizing.</p>\n\n<p>If adding multiple new child Components, pass them as an array to the <code>add</code> method, so that only one layout recalculation is performed.</p>\n\n<pre><code>tb = new <a href=\"#/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Ext.toolbar.Toolbar</a>({\n    renderTo: document.body\n});  // toolbar is rendered\ntb.add([{text:'Button 1'}, {text:'Button 2'}]); // add multiple items. (<a href=\"#/api/Ext.grid.Panel-cfg-defaultType\" rel=\"Ext.grid.Panel-cfg-defaultType\" class=\"docClass\">defaultType</a> for <a href=\"#/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Toolbar</a> is 'button')\n</code></pre>\n\n<h2>Warning:##</h2>\n\n<p>Components directly managed by the BorderLayout layout manager\nmay not be removed or added.  See the Notes for <a href=\"#/api/Ext.layout.container.Border\" rel=\"Ext.layout.container.Border\" class=\"docClass\">BorderLayout</a>\nfor more details.</p>\n",
        "linenr": 446,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Time-method-addCls\" rel=\"Ext.picker.Time-method-addCls\" class=\"docClass\">addCls</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Adds a CSS class to the top level element representing this component."
        },
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClass",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "static": false,
        "name": "addClass",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "linenr": 2359,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addCls",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "static": false,
        "name": "addCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "linenr": 2337,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClsWithUI",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Adds a cls to the uiCls array, which will also call addUIClsToElement and adds\nto all elements of this component. ...",
        "static": false,
        "name": "addClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a cls to the uiCls array, which will also call <a href=\"#/api/Ext.grid.Panel-method-addUIClsToElement\" rel=\"Ext.grid.Panel-method-addUIClsToElement\" class=\"docClass\">addUIClsToElement</a> and adds\nto all elements of this component.</p>\n",
        "linenr": 1494,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The Component or array of components to add. The components\nmust include a 'dock' parameter on each component to indicate where it should be docked ('top', 'right',\n'bottom', 'left').</p>\n",
            "name": "component"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index at which the Component will be added</p>\n",
            "name": "pos"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-addDocked",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "Adds docked item(s) to the panel. ...",
        "static": false,
        "name": "addDocked",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Adds docked item(s) to the panel.</p>\n",
        "linenr": 263,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "static": false,
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "linenr": 494,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.grid.Panel-method-fireEvent\" rel=\"Ext.grid.Panel-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Appends an event handler to this object. ...",
        "static": false,
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "linenr": 278,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "static": false,
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 156,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The event name or an array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-method-addStateEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Add events that will trigger the state to be saved. ...",
        "static": false,
        "name": "addStateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Add events that will trigger the state to be saved.</p>\n",
        "linenr": 159,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addUIClsToElement",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method which adds a specified UI + uiCls to the components element. ...",
        "static": false,
        "name": "addUIClsToElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which adds a specified UI + uiCls to the components element.\nCan be overridden to remove the UI from more than just the components element.</p>\n",
        "linenr": 1565,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-afterComponentLayout",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": " ...",
        "static": false,
        "name": "afterComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "\n",
        "linenr": 2730,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Floating.html#Ext-util-Floating-method-alignTo",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Aligns this floating Component to the specified element ...",
        "static": false,
        "name": "alignTo",
        "owner": "Ext.util.Floating",
        "doc": "<p>Aligns this floating Component to the specified element</p>\n",
        "linenr": 173,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing properties which describe the animation's start and end states, and the timeline of the animation.</p>\n",
            "name": "config"
          }
        ],
        "href": "Animate.html#Ext-util-Animate-method-animate",
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Perform custom animation on this object. ...",
        "static": false,
        "name": "animate",
        "owner": "Ext.util.Animate",
        "doc": "<p>Perform custom animation on this object.<p>\n<p>This method is applicable to both the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class and the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> class.\nIt performs animated transitions of certain properties of this object over a specified timeline.</p>\n<p>The sole parameter is an object which specifies start property values, end property values, and properties which\ndescribe the timeline. Of the properties listed below, only <b><code>to</code></b> is mandatory.</p>\n<p>Properties include<ul>\n<li><code>from</code> <div class=\"sub-desc\">An object which specifies start values for the properties being animated.\nIf not supplied, properties are animated from current settings. The actual properties which may be animated depend upon\nths object being animated. See the sections below on Element and Component animation.<div></li>\n<li><code>to</code> <div class=\"sub-desc\">An object which specifies end values for the properties being animated.</div></li>\n<li><code>duration</code><div class=\"sub-desc\">The duration <b>in milliseconds</b> for which the animation will run.</div></li>\n<li><code>easing</code> <div class=\"sub-desc\">A string value describing an easing type to modify the rate of change from the default linear to non-linear. Values may be one of:<code><ul>\n<li>ease</li>\n<li>easeIn</li>\n<li>easeOut</li>\n<li>easeInOut</li>\n<li>backIn</li>\n<li>backOut</li>\n<li>elasticIn</li>\n<li>elasticOut</li>\n<li>bounceIn</li>\n<li>bounceOut</li>\n</ul></code></div></li>\n<li><code>keyframes</code> <div class=\"sub-desc\">This is an object which describes the state of animated properties at certain points along the timeline.\nit is an object containing properties who's names are the percentage along the timeline being described and who's values specify the animation state at that point.</div></li>\n<li><code>listeners</code> <div class=\"sub-desc\">This is a standard <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration object which may be used\nto inject behaviour at either the <code>beforeanimate</code> event or the <code>afteranimate</code> event.</div></li>\n</ul></p>\n<h3>Animating an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The element's CSS <code>left</code> value. Units must be supplied.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The element's CSS <code>top</code> value. Units must be supplied.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The element's CSS <code>width</code> value. Units must be supplied.</div></li>\n<li><code>height</code> <div class=\"sub-desc\">The element's CSS <code>height</code> value. Units must be supplied.</div></li>\n<li><code>scrollLeft</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>scrollTop</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>opacity</code> <div class=\"sub-desc\">The element's <code>opacity</code> value. This must be a value between <code>0</code> and <code>1</code>.</div></li>\n</ul>\n<p><b>Be aware than animating an Element which is being used by an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> Component without in some way informing the Component about the changed element state\nwill result in incorrect Component behaviour. This is because the Component will be using the old state of the element. To avoid this problem, it is now possible to\ndirectly animate certain properties of Components.</b></p>\n<h3>Animating a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The Component's page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The Component's page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The Component's <code>left</code> value in pixels.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The Component's <code>top</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>dynamic</code> <div class=\"sub-desc\">Specify as true to update the Component's layout (if it is a Container) at every frame\nof the animation. <i>Use sparingly as laying out on every intermediate size change is an expensive operation</i>.</div></li>\n</ul>\n<p>For example, to animate a Window to a new size, ensuring that its internal layout, and any shadow is correct:</p>\n<pre><code>myWindow = Ext.create('Ext.window.Window', {\n    title: 'Test Component animation',\n    width: 500,\n    height: 300,\n    layout: {\n        type: 'hbox',\n        align: 'stretch'\n    },\n    items: [{\n        title: 'Left: 33%',\n        margins: '5 0 5 5',\n        flex: 1\n    }, {\n        title: 'Left: 66%',\n        margins: '5 5 5 5',\n        flex: 2\n    }]\n});\nmyWindow.show();\nmyWindow.header.el.on('click', function() {\n    myWindow.animate({\n        to: {\n            width: (myWindow.getWidth() == 500) ? 700 : 500,\n            height: (myWindow.getHeight() == 300) ? 400 : 300,\n        }\n    });\n});\n</code></pre>\n<p>For performance reasons, by default, the internal layout is only updated when the Window reaches its final <code>\"to\"</code> size. If dynamic updating of the Window's child\nComponents is required, then configure the animation with <code>dynamic: true</code> and the two child items will maintain their proportions during the animation.</p>\n\n",
        "linenr": 207,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The state</p>\n",
            "name": "state"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-method-applyState",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Applies the state to the object. ...",
        "static": false,
        "name": "applyState",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Applies the state to the object. This should be overridden in subclasses to do\nmore complex state operations. By default it applies the state properties onto\nthe current object.</p>\n",
        "linenr": 225,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-beforeComponentLayout",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Occurs before componentLayout is run. ...",
        "static": false,
        "name": "beforeComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the componentLayout\nfrom being executed.</p>\n",
        "linenr": 2741,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-beforeLayout",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Occurs before componentLayout is run. ...",
        "static": false,
        "name": "beforeLayout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the containerLayout\nfrom being executed.</p>\n",
        "linenr": 878,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Component2.html#Ext-Component-method-bubble",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Bubbles up the component/container heirarchy, calling the specified function with each component. ...",
        "static": false,
        "name": "bubble",
        "owner": "Ext.Component",
        "doc": "<p>Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
        "linenr": 1007,
        "html_filename": "Component2.html"
      },
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
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope of the function (defaults to current component)</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with. The current component always passed as the last argument.</p>\n",
            "name": "args"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-cascade",
        "return": {
          "type": "Ext.Container",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Cascades down the component/container heirarchy from this component (passed in the first call), calling the specified...",
        "static": false,
        "name": "cascade",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Cascades down the component/container heirarchy from this component (passed in the first call), calling the specified function with\neach component. The scope (<code>this</code> reference) of the\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe cascade is stopped on that branch.</p>\n",
        "linenr": 742,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Floating.html#Ext-util-Floating-method-center",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Center this Component in its container. ...",
        "static": false,
        "name": "center",
        "owner": "Ext.util.Floating",
        "doc": "<p>Center this Component in its container.</p>\n",
        "linenr": 251,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>An <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">Ext.ComponentQuery</a> selector</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-child",
        "return": {
          "type": "void",
          "doc": "<p>Ext.Component</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Retrieves the first direct child of this container which matches the passed selector. ...",
        "static": false,
        "name": "child",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Retrieves the first direct child of this container which matches the passed selector.\nThe passed in selector must comply with an <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">Ext.ComponentQuery</a> selector.</p>\n",
        "linenr": 807,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "static": false,
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "linenr": 425,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all managed listeners for this object. ...",
        "static": false,
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "linenr": 454,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A new config containing any properties to override in the cloned version.\nAn id property can be passed on this object, otherwise one will be generated to avoid duplicates.</p>\n",
            "name": "overrides"
          }
        ],
        "href": "Component2.html#Ext-Component-method-cloneConfig",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>clone The cloned copy of this component</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Clone the current component using the original config values passed into this instance by default. ...",
        "static": false,
        "name": "cloneConfig",
        "owner": "Ext.Component",
        "doc": "<p>Clone the current component using the original config values passed into this instance by default.</p>\n",
        "linenr": 947,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Panel2.html#Ext-panel-Panel-method-close",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Closes the Panel. ...",
        "static": false,
        "name": "close",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Closes the Panel. By default, this method, removes it from the DOM, <a href=\"#/api/Ext.Component-event-destroy\" rel=\"Ext.Component-event-destroy\" class=\"docClass\">destroy</a>s\nthe Panel object and all its descendant Components. The beforeclose\nevent is fired before the close happens and will cancel the close action if it returns false.<p>\n<p><b>Note:</b> This method is not affected by the <a href=\"#/api/Ext.grid.Panel-cfg-closeAction\" rel=\"Ext.grid.Panel-cfg-closeAction\" class=\"docClass\">closeAction</a> setting which\nonly affects the action triggered when clicking the <a href=\"#/api/Ext.grid.Panel-cfg-closable\" rel=\"Ext.grid.Panel-cfg-closable\" class=\"docClass\">'close' tool in the header</a>.\nTo hide the Panel without destroying it, call <a href=\"#/api/Ext.grid.Panel-event-hide\" rel=\"Ext.grid.Panel-event-hide\" class=\"docClass\">hide</a>.</p>\n\n",
        "linenr": 755,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>. The direction to collapse towards. Must be one of<ul>\n<li>Ext.Component.DIRECTION_TOP</li>\n<li>Ext.Component.DIRECTION_RIGHT</li>\n<li>Ext.Component.DIRECTION_BOTTOM</li>\n<li>Ext.Component.DIRECTION_LEFT</li></ul></p>\n",
            "name": "direction"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to animate the transition, else false (defaults to the value of the\n<a href=\"#/api/Ext.grid.Panel-cfg-animCollapse\" rel=\"Ext.grid.Panel-cfg-animCollapse\" class=\"docClass\">animCollapse</a> panel config)</p>\n",
            "name": "animate"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "internal"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-method-collapse",
        "return": {
          "type": "Ext.panel.Panel",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Collapses the panel body so that the body becomes hidden. ...",
        "static": false,
        "name": "collapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Collapses the panel body so that the body becomes hidden. Docked Components parallel to the\nborder towards which the collapse takes place will remain visible.  Fires the <a href=\"#/api/Ext.grid.Panel-event-beforecollapse\" rel=\"Ext.grid.Panel-event-beforecollapse\" class=\"docClass\">beforecollapse</a> event which will\ncancel the collapse action if it returns false.</p>\n",
        "linenr": 891,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-destroy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Destroys the Component. ...",
        "static": false,
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Destroys the Component.</p>\n",
        "linenr": 2923,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Table.html#Ext-panel-Table-method-determineScrollbars",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Request a recalculation of scrollbars and put them in if they are needed. ...",
        "static": false,
        "name": "determineScrollbars",
        "owner": "Ext.panel.Table",
        "doc": "<p>Request a recalculation of scrollbars and put them in if they are needed.</p>\n",
        "linenr": 784,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing true, will supress the 'disable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-disable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Disable the component. ...",
        "static": false,
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Disable the component.</p>\n",
        "linenr": 2276,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doAutoRender",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Handles autoRender. ...",
        "static": false,
        "name": "doAutoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Handles autoRender.\nFloating Components may have an ownerCt. If they are asking to be constrained, constrain them within that\nownerCt, and have their z-index managed locally. Floating Components are always rendered to document.body</p>\n",
        "linenr": 936,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doComponentLayout",
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This method needs to be called whenever you change something on this component that requires the Component's\nlayout t...",
        "static": false,
        "name": "doComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method needs to be called whenever you change something on this component that requires the Component's\nlayout to be recalculated.</p>\n",
        "linenr": 2661,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Optional. The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this Component is to be constrained.</p>\n",
            "name": "constrainTo"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-doConstrain",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Moves this floating Component into a constrain region. ...",
        "static": false,
        "name": "doConstrain",
        "owner": "Ext.util.Floating",
        "doc": "<p>Moves this floating Component into a constrain region.</p>\n\n\n<p>By default, this Component is constrained to be within the container it was added to, or the element\nit was rendered to.</p>\n\n\n<p>An alternative constraint may be passed.</p>\n\n",
        "linenr": 135,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-doLayout",
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Manually force this container's layout to be recalculated. ...",
        "static": false,
        "name": "doLayout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Manually force this container's layout to be recalculated.  The framwork uses this internally to refresh layouts\nform most cases.</p>\n",
        "linenr": 343,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>An <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">Ext.ComponentQuery</a> selector</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-down",
        "return": {
          "type": "void",
          "doc": "<p>Ext.Component</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Retrieves the first descendant of this container which matches the passed selector. ...",
        "static": false,
        "name": "down",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Retrieves the first descendant of this container which matches the passed selector.\nThe passed in selector must comply with an <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">Ext.ComponentQuery</a> selector.</p>\n",
        "linenr": 817,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing false will supress the 'enable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-enable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Enable the component ...",
        "static": false,
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable the component</p>\n",
        "linenr": 2253,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "static": false,
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 609,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to animate the transition, else false (defaults to the value of the\n<a href=\"#/api/Ext.grid.Panel-cfg-animCollapse\" rel=\"Ext.grid.Panel-cfg-animCollapse\" class=\"docClass\">animCollapse</a> panel config)</p>\n",
            "name": "animate"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-method-expand",
        "return": {
          "type": "Ext.panel.Panel",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Expands the panel body so that it becomes visible. ...",
        "static": false,
        "name": "expand",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Expands the panel body so that it becomes visible.  Fires the <a href=\"#/api/Ext.grid.Panel-event-beforeexpand\" rel=\"Ext.grid.Panel-event-beforeexpand\" class=\"docClass\">beforeexpand</a> event which will\ncancel the expand action if it returns false.</p>\n",
        "linenr": 1182,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-findLayoutController",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This method finds the topmost active layout who's processing will eventually determine the size and position of this\n...",
        "static": false,
        "name": "findLayoutController",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method finds the topmost active layout who's processing will eventually determine the size and position of this\nComponent.<p>\n<p>This method is useful when dynamically adding Components into Containers, and some processing must take place after the\nfinal sizing and positioning of the Component has been performed.</p>\n\n",
        "linenr": 892,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The custom function to call with the arguments (container, this component).</p>\n",
            "name": "fn"
          }
        ],
        "href": "Component2.html#Ext-Component-method-findParentBy",
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container for which the custom function returns true</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Find a container above this component at any level by a custom function. ...",
        "static": false,
        "name": "findParentBy",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by a custom function. If the passed function returns\ntrue, the container will be returned.</p>\n",
        "linenr": 978,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Class",
            "optional": false,
            "doc": "<p>The xtype string for a component, or the class of the component directly</p>\n",
            "name": "xtype"
          }
        ],
        "href": "Component2.html#Ext-Component-method-findParentByType",
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container which matches the given xtype or class</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Find a container above this component at any level by xtype or class\n\n\nSee also the up method. ...",
        "static": false,
        "name": "findParentByType",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by xtype or class</p>\n\n\n<p>See also the <a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">up</a> method.</p>\n\n",
        "linenr": 992,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "static": false,
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.grid.Panel-method-addListener\" rel=\"Ext.grid.Panel-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.grid.Panel-method-enableBubble\" rel=\"Ext.grid.Panel-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "linenr": 233,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Component2.html#Ext-Component-method-focus",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Try to focus this component. ...",
        "static": false,
        "name": "focus",
        "owner": "Ext.Component",
        "doc": "<p>Try to focus this component.</p>\n",
        "linenr": 856,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-forceComponentLayout",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Forces this component to redo its componentLayout. ...",
        "static": false,
        "name": "forceComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Forces this component to redo its componentLayout.</p>\n",
        "linenr": 2704,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-getActiveAnimation",
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "static": false,
        "name": "getActiveAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "linenr": 377,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "href": "Component2.html#Ext-Component-method-getBox",
        "return": {
          "type": "Object",
          "doc": "<p>box An object in the format {x, y, width, height}</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Gets the current box measurements of the component's underlying element. ...",
        "static": false,
        "name": "getBox",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current box measurements of the component's underlying element.</p>\n",
        "linenr": 541,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getBubbleTarget",
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>the Container which owns this Component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy. ...",
        "static": false,
        "name": "getBubbleTarget",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.</p>\n",
        "linenr": 2474,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The element to test.</p>\n",
            "name": "el"
          }
        ],
        "href": "Container2.html#Ext-container-Container-method-getChildByElement",
        "return": {
          "type": "Component",
          "doc": "<p>The child item which contains the passed element.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/container/Container.js",
        "private": false,
        "shortDoc": "Return the immediate child Component in which the passed element is located. ...",
        "static": false,
        "name": "getChildByElement",
        "owner": "Ext.container.Container",
        "doc": "<p>Return the immediate child Component in which the passed element is located.</p>\n",
        "linenr": 160,
        "html_filename": "Container2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Number",
            "optional": false,
            "doc": "<p>The component id, itemId or position to find</p>\n",
            "name": "comp"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-getComponent",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The component (if found)</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "Attempts a default component lookup (see Ext.container.Container.getComponent). ...",
        "static": false,
        "name": "getComponent",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Attempts a default component lookup (see <a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">Ext.container.Container.getComponent</a>). If the component is not found in the normal\nitems, the dockedItems are searched and the matched component (if any) returned (see {@loink #getDockedComponent}). Note that docked\nitems will only be matched by component id or itemId -- if you pass a numeric index only non-docked child components will be searched.</p>\n",
        "linenr": 176,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Number",
            "optional": false,
            "doc": "<p>The id, itemId or position of the docked component (see <a href=\"#/api/Ext.grid.Panel-method-getComponent\" rel=\"Ext.grid.Panel-method-getComponent\" class=\"docClass\">getComponent</a> for details)</p>\n",
            "name": "comp"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-getDockedComponent",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The docked component (if found)</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "Finds a docked component by id, itemId or position. ...",
        "static": false,
        "name": "getDockedComponent",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Finds a docked component by id, itemId or position. Also see <a href=\"#/api/Ext.grid.Panel-method-getDockedItems\" rel=\"Ext.grid.Panel-method-getDockedItems\" class=\"docClass\">getDockedItems</a></p>\n",
        "linenr": 164,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector string to filter the returned items.</p>\n",
            "name": "cqSelector"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-getDockedItems",
        "return": {
          "type": "Array",
          "doc": "<p>An array of components.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "Retrieve an array of all currently docked Components. ...",
        "static": false,
        "name": "getDockedItems",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Retrieve an array of all currently docked Components.</p>\n",
        "linenr": 363,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getEl",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Retrieves the top level element representing this component. ...",
        "static": false,
        "name": "getEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the top level element representing this component.</p>\n",
        "linenr": 2090,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getHeight",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Gets the current height of the component's underlying element. ...",
        "static": false,
        "name": "getHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current height of the component's underlying element.</p>\n",
        "linenr": 2830,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getId",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Retrieves the id of this component. ...",
        "static": false,
        "name": "getId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n",
        "linenr": 2078,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Number/Element/HTMLElement",
            "optional": false,
            "doc": "<p>Index, element id or element you want\nto put this component before.</p>\n",
            "name": "position"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getInsertPosition",
        "return": {
          "type": "HTMLElement",
          "doc": "<p>DOM element that you can use in the insertBefore</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insert...",
        "static": false,
        "name": "getInsertPosition",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insertBefore.</p>\n",
        "linenr": 1705,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-getLayout",
        "return": {
          "type": "Ext.layout.container.AbstractContainer",
          "doc": "<p>The layout</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Returns the layout instance currently associated with this Container. ...",
        "static": false,
        "name": "getLayout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Returns the <a href=\"#/api/Ext.layout.container.AbstractContainer\" rel=\"Ext.layout.container.AbstractContainer\" class=\"docClass\">layout</a> instance currently associated with this Container.\nIf a layout has not been instantiated yet, that is done first</p>\n",
        "linenr": 329,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getLoader",
        "return": {
          "type": "Ext.ComponentLoader",
          "doc": "<p>The loader instance, null if it doesn't exist.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Gets the Ext.ComponentLoader for this Component. ...",
        "static": false,
        "name": "getLoader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> for this Component.</p>\n",
        "linenr": 2838,
        "html_filename": "AbstractComponent.html"
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
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "pluginId"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getPlugin",
        "return": {
          "type": "Ext.AbstractPlugin",
          "doc": "<p>pluginInstance</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Retrieves a plugin by its pluginId which has been bound to this\ncomponent. ...",
        "static": false,
        "name": "getPlugin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves a plugin by its pluginId which has been bound to this\ncomponent.</p>\n",
        "linenr": 2966,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "href": "Component2.html#Ext-Component-method-getPosition",
        "return": {
          "type": "Array",
          "doc": "<p>The XY position of the element (e.g., [100, 200])</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Gets the current XY position of the component's underlying element. ...",
        "static": false,
        "name": "getPosition",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current XY position of the component's underlying element.</p>\n",
        "linenr": 606,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Table.html#Ext-panel-Table-method-getSelectionModel",
        "return": {
          "type": "Ext.selection.Model",
          "doc": "<p>selModel</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Returns the selection model being used and creates it via the configuration\nif it has not been created already. ...",
        "static": false,
        "name": "getSelectionModel",
        "owner": "Ext.panel.Table",
        "doc": "<p>Returns the selection model being used and creates it via the configuration\nif it has not been created already.</p>\n",
        "linenr": 1156,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getSize",
        "return": {
          "type": "Object",
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Gets the current size of the component's underlying element. ...",
        "static": false,
        "name": "getSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current size of the component's underlying element.</p>\n",
        "linenr": 2814,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getState",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The supplied default state gathering method for the AbstractComponent class. ...",
        "static": false,
        "name": "getState",
        "owner": "Ext.AbstractComponent",
        "doc": "<p></p>The supplied default state gathering method for the AbstractComponent class.</p>\nThis method returns dimension setings such as <code>flex</code>, <code>anchor</code>, <code>width</code>\nand <code>height</code> along with <code>collapsed</code> state.</p></p>\n\n<p>Subclasses which implement more complex state should call the superclass's implementation, and apply their state\nto the result if this basic state is to be saved.</p>\n\n\n<p>Note that Component state will only be saved if the Component has a <a href=\"#/api/Ext.grid.Panel-cfg-stateId\" rel=\"Ext.grid.Panel-cfg-stateId\" class=\"docClass\">stateId</a> and there as a StateProvider\nconfigured for the document.</p>\n\n",
        "linenr": 758,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Stateful.html#Ext-state-Stateful-method-getStateId",
        "return": {
          "type": "String",
          "doc": "<p>The state id, null if not found.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Gets the state id for this object. ...",
        "static": false,
        "name": "getStateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Gets the state id for this object.</p>\n",
        "linenr": 237,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Table.html#Ext-panel-Table-method-getStore",
        "return": {
          "type": "Ext.data.Store",
          "doc": "<p>The store</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Returns the store associated with this Panel. ...",
        "static": false,
        "name": "getStore",
        "owner": "Ext.panel.Table",
        "doc": "<p>Returns the store associated with this Panel.</p>\n",
        "linenr": 699,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Table.html#Ext-panel-Table-method-getView",
        "return": {
          "type": "Ext.view.Table",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Gets the view for this panel. ...",
        "static": false,
        "name": "getView",
        "owner": "Ext.panel.Table",
        "doc": "<p>Gets the view for this panel.</p>\n",
        "linenr": 707,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getWidth",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Gets the current width of the component's underlying element. ...",
        "static": false,
        "name": "getWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current width of the component's underlying element.</p>\n",
        "linenr": 2822,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Component2.html#Ext-Component-method-getXType",
        "return": {
          "type": "String",
          "doc": "<p>The xtype</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Gets the xtype for this component as registered with Ext.ComponentManager. ...",
        "static": false,
        "name": "getXType",
        "owner": "Ext.Component",
        "doc": "<p>Gets the xtype for this component as registered with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a>. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header. Example usage:</p>\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXType());  // alerts 'textfield'\n</code></pre>\n\n",
        "linenr": 965,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getXTypes",
        "return": {
          "type": "String",
          "doc": "<p>The xtype hierarchy string</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns this Component's xtype hierarchy as a slash-delimited string. ...",
        "static": false,
        "name": "getXTypes",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXTypes());  // alerts 'component/field/textfield'\n</code></pre>\n\n",
        "linenr": 2136,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Time-method-getActiveAnimation\" rel=\"Ext.picker.Time-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Returns thq current animation if this object has any effects actively running or queued, else returns false."
        },
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-hasActiveFx",
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "static": false,
        "name": "hasActiveFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "linenr": 369,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "static": false,
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "linenr": 530,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The cls to check</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-hasUICls",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Checks if there is currently a specified uiCls ...",
        "static": false,
        "name": "hasUICls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Checks if there is currently a specified uiCls</p>\n",
        "linenr": 1554,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Element/Component",
            "optional": false,
            "doc": "<p>Optional, and <b>only valid for <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b>.\nThe target to which the Component should animate while hiding (defaults to null with no animation)</p>\n",
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
        "href": "Component2.html#Ext-Component-method-hide",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Hides this Component, setting it to invisible using the configured hideMode. ...",
        "static": false,
        "name": "hide",
        "owner": "Ext.Component",
        "doc": "<p>Hides this Component, setting it to invisible using the configured <a href=\"#/api/Ext.grid.Panel-cfg-hideMode\" rel=\"Ext.grid.Panel-cfg-hideMode\" class=\"docClass\">hideMode</a>.</p>\n",
        "linenr": 751,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Table.html#Ext-panel-Table-method-hideHorizontalScroller",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Hide the verticalScroller and remove the horizontalScrollerPresentCls. ...",
        "static": false,
        "name": "hideHorizontalScroller",
        "owner": "Ext.panel.Table",
        "doc": "<p>Hide the verticalScroller and remove the horizontalScrollerPresentCls.</p>\n",
        "linenr": 914,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Table.html#Ext-panel-Table-method-hideVerticalScroller",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Hide the verticalScroller and remove the verticalScrollerPresentCls. ...",
        "static": false,
        "name": "hideVerticalScroller",
        "owner": "Ext.panel.Table",
        "doc": "<p>Hide the verticalScroller and remove the verticalScrollerPresentCls.</p>\n",
        "linenr": 945,
        "html_filename": "Table.html"
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
        "href": "Table.html#Ext-panel-Table-method-initHorizontalScroller",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Returns the horizontal scroller config. ...",
        "static": false,
        "name": "initHorizontalScroller",
        "owner": "Ext.panel.Table",
        "doc": "<p>Returns the horizontal scroller config.</p>\n",
        "linenr": 559,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Table.html#Ext-panel-Table-method-initVerticalScroller",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Returns the vertical scroller config. ...",
        "static": false,
        "name": "initVerticalScroller",
        "owner": "Ext.panel.Table",
        "doc": "<p>Returns the vertical scroller config.</p>\n",
        "linenr": 574,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the Component will be inserted\ninto the Container's items collection</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The child Component to insert.<br><br>\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> uses lazy rendering, and will only render the inserted Component should\nit become necessary.<br><br>\nA Component config object may be passed in order to avoid the overhead of\nconstructing a real Component object if lazy rendering might mean that the\ninserted Component will not be rendered immediately. To take advantage of\nthis 'lazy instantiation', set the Ext.Component.xtype config\nproperty to the registered type of the Component wanted.<br><br>\nFor a list of all available xtypes, see <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.</p>\n",
            "name": "component"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-insert",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>component The Component (or config object) that was\ninserted with the Container's default config values applied.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Inserts a Component into this Container at a specified index. ...",
        "static": false,
        "name": "insert",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Inserts a Component into this Container at a specified index. Fires the\n<a href=\"#/api/Ext.grid.Panel-event-beforeadd\" rel=\"Ext.grid.Panel-event-beforeadd\" class=\"docClass\">beforeadd</a> event before inserting, then fires the <a href=\"#/api/Ext.grid.Panel-event-add\" rel=\"Ext.grid.Panel-event-add\" class=\"docClass\">add</a> event after the\nComponent has been inserted.</p>\n",
        "linenr": 570,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the Component will be inserted</p>\n",
            "name": "pos"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>. The Component or array of components to add. The components\nmust include a 'dock' paramater on each component to indicate where it should be docked ('top', 'right',\n'bottom', 'left').</p>\n",
            "name": "component"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-insertDocked",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "Inserts docked item(s) to the panel at the indicated position. ...",
        "static": false,
        "name": "insertDocked",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Inserts docked item(s) to the panel at the indicated position.</p>\n",
        "linenr": 309,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Table.html#Ext-panel-Table-method-invalidateScroller",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Invalides scrollers that are present and forces a recalculation. ...",
        "static": false,
        "name": "invalidateScroller",
        "owner": "Ext.panel.Table",
        "doc": "<p>Invalides scrollers that are present and forces a recalculation.\n(Not related to showing/hiding the scrollers)</p>\n",
        "linenr": 984,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector string to test against.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-is",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this Component matches the selector.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Tests whether this Component matches the selector string. ...",
        "static": false,
        "name": "is",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether this Component matches the selector string.</p>\n",
        "linenr": 1917,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Container",
            "optional": false,
            "doc": "\n",
            "name": "container"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDescendantOf",
        "return": {
          "type": "Boolean",
          "doc": "<p>isDescendant</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Determines whether this component is the descendant of a particular container. ...",
        "static": false,
        "name": "isDescendantOf",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Determines whether this component is the descendant of a particular container.</p>\n",
        "linenr": 2982,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDisabled",
        "return": {
          "type": "Boolean",
          "doc": "<p>the disabled state of this Component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method to determine whether this Component is currently disabled. ...",
        "static": false,
        "name": "isDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently disabled.</p>\n",
        "linenr": 2313,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDraggable",
        "return": {
          "type": "Boolean",
          "doc": "<p>the draggable state of this component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method to determine whether this Component is draggable. ...",
        "static": false,
        "name": "isDraggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is draggable.</p>\n",
        "linenr": 2490,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDroppable",
        "return": {
          "type": "Boolean",
          "doc": "<p>the droppable state of this component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method to determine whether this Component is droppable. ...",
        "static": false,
        "name": "isDroppable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is droppable.</p>\n",
        "linenr": 2498,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isFloating",
        "return": {
          "type": "Boolean",
          "doc": "<p>the floating state of this component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method to determine whether this Component is floating. ...",
        "static": false,
        "name": "isFloating",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is floating.</p>\n",
        "linenr": 2482,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isHidden",
        "return": {
          "type": "Boolean",
          "doc": "<p>the hidden state of this Component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method to determine whether this Component is currently set to hidden. ...",
        "static": false,
        "name": "isHidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently set to hidden.</p>\n",
        "linenr": 2329,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>. <p>Optional. Pass <code>true</code> to interrogate the visibility status of all\nparent Containers to determine whether this Component is truly visible to the user.</p></p>\n\n<p>Generally, to determine whether a Component is hidden, the no argument form is needed. For example\nwhen creating dynamically laid out UIs in a hidden Container before showing them.</p>\n\n",
            "name": "deep"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isVisible",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component is visible, false otherwise.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns true if this component is visible. ...",
        "static": false,
        "name": "isVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns true if this component is visible.</p>\n",
        "linenr": 2213,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isXType",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component descends from the specified xtype, false otherwise.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Tests whether or not this Component is of a specific xtype. ...",
        "static": false,
        "name": "isXType",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended\nfrom the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>For a list of all available xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nvar isText = t.isXType('textfield');        // true\nvar isBoxSubclass = t.isXType('field');       // true, descended from <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\nvar isBoxInstance = t.isXType('field', true); // false, not a direct <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> instance\n</code></pre>\n\n",
        "linenr": 2105,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addManagedListener. ...",
        "static": false,
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.Panel-method-addManagedListener\" rel=\"Ext.grid.Panel-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 681,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index the Component you wish to move is currently at.</p>\n",
            "name": "fromIdx"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new index for the Component.</p>\n",
            "name": "toIdx"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-move",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>component The Component (or config object) that was moved.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Moves a Component within the Container ...",
        "static": false,
        "name": "move",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Moves a Component within the Container</p>\n",
        "linenr": 592,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "static": false,
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.Panel-method-removeManagedListener\" rel=\"Ext.grid.Panel-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.Panel-method-mon\" rel=\"Ext.grid.Panel-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 687,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextNode",
        "return": {
          "type": "void",
          "doc": "<p>The next node (or the next node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns the next node in the Component tree in tree traversal order. ...",
        "static": false,
        "name": "nextNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree to attempt to find a match. Contrast with <a href=\"#/api/Ext.grid.Panel-method-nextSibling\" rel=\"Ext.grid.Panel-method-nextSibling\" class=\"docClass\">nextSibling</a>.</p>\n\n",
        "linenr": 2043,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following items.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextSibling",
        "return": {
          "type": "void",
          "doc": "<p>The next sibling (or the next sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns the next sibling of this Component. ...",
        "static": false,
        "name": "nextSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next sibling of this Component.</p>\n\n\n<p>Optionally selects the next sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>next()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.grid.Panel-method-nextNode\" rel=\"Ext.grid.Panel-method-nextNode\" class=\"docClass\">nextNode</a></p>\n\n",
        "linenr": 1947,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.grid.Panel-method-fireEvent\" rel=\"Ext.grid.Panel-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "href": "Observable.html#Ext-util-Observable-method-on",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addListener. ...",
        "static": false,
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.Panel-method-addListener\" rel=\"Ext.grid.Panel-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "linenr": 669,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousNode",
        "return": {
          "type": "void",
          "doc": "<p>The previous node (or the previous node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns the previous node in the Component tree in tree traversal order. ...",
        "static": false,
        "name": "previousNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree in reverse order to attempt to find a match. Contrast with <a href=\"#/api/Ext.grid.Panel-method-previousSibling\" rel=\"Ext.grid.Panel-method-previousSibling\" class=\"docClass\">previousSibling</a>.</p>\n\n",
        "linenr": 2007,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding items.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousSibling",
        "return": {
          "type": "void",
          "doc": "<p>The previous sibling (or the previous sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns the previous sibling of this Component. ...",
        "static": false,
        "name": "previousSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous sibling of this Component.</p>\n\n\n<p>Optionally selects the previous sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>prev()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.grid.Panel-method-previousNode\" rel=\"Ext.grid.Panel-method-previousNode\" class=\"docClass\">previousNode</a></p>\n\n",
        "linenr": 1977,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Selector complying to an <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">Ext.ComponentQuery</a> selector</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-query",
        "return": {
          "type": "Array",
          "doc": "<p>Ext.Component's which matched the selector</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Retrieves all descendant components which match the passed selector. ...",
        "static": false,
        "name": "query",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Retrieves all descendant components which match the passed selector.\nExecutes an Ext.ComponentQuery.query using this container as its root.</p>\n",
        "linenr": 797,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>The new store.</p>\n",
            "name": "store"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>An array of column configs</p>\n",
            "name": "columns"
          }
        ],
        "href": "Table.html#Ext-panel-Table-method-reconfigure",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Reconfigure the table with a new store/column. ...",
        "static": false,
        "name": "reconfigure",
        "owner": "Ext.panel.Table",
        "doc": "<p>Reconfigure the table with a new store/column.\nEither the store or the column can be ommitted if you don't wish to change them.</p>\n",
        "linenr": 1232,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "static": false,
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "linenr": 573,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Component/String",
            "optional": false,
            "doc": "<p>The component reference or id to remove.</p>\n",
            "name": "component"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to automatically invoke the removed Component's <a href=\"#/api/Ext.Component-event-destroy\" rel=\"Ext.Component-event-destroy\" class=\"docClass\">Ext.Component.destroy</a> function.\nDefaults to the value of this Container's <a href=\"#/api/Ext.grid.Panel-cfg-autoDestroy\" rel=\"Ext.grid.Panel-cfg-autoDestroy\" class=\"docClass\">autoDestroy</a> config.</p>\n",
            "name": "autoDestroy"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-remove",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>component The Component that was removed.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Removes a component from this container. ...",
        "static": false,
        "name": "remove",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Removes a component from this container.  Fires the <a href=\"#/api/Ext.grid.Panel-event-beforeremove\" rel=\"Ext.grid.Panel-event-beforeremove\" class=\"docClass\">beforeremove</a> event before removing, then fires\nthe <a href=\"#/api/Ext.grid.Panel-event-remove\" rel=\"Ext.grid.Panel-event-remove\" class=\"docClass\">remove</a> event after the component has been removed.</p>\n",
        "linenr": 623,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to automatically invoke the removed Component's <a href=\"#/api/Ext.Component-event-destroy\" rel=\"Ext.Component-event-destroy\" class=\"docClass\">Ext.Component.destroy</a> function.\nDefaults to the value of this Container's <a href=\"#/api/Ext.grid.Panel-cfg-autoDestroy\" rel=\"Ext.grid.Panel-cfg-autoDestroy\" class=\"docClass\">autoDestroy</a> config.</p>\n",
            "name": "autoDestroy"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-method-removeAll",
        "return": {
          "type": "Array",
          "doc": "<p>Array of the destroyed components</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Removes all components from this container. ...",
        "static": false,
        "name": "removeAll",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Removes all components from this container.</p>\n",
        "linenr": 676,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "className"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeCls",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Removes a CSS class from the top level element representing this component. ...",
        "static": false,
        "name": "removeCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a CSS class from the top level element representing this component.</p>\n",
        "linenr": 2369,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeClsWithUI",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Removes a cls to the uiCls array, which will also call removeUIClsFromElement and removes\nit from all elements of thi...",
        "static": false,
        "name": "removeClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a cls to the uiCls array, which will also call <a href=\"#/api/Ext.grid.Panel-method-removeUIClsFromElement\" rel=\"Ext.grid.Panel-method-removeUIClsFromElement\" class=\"docClass\">removeUIClsFromElement</a> and removes\nit from all elements of this component.</p>\n",
        "linenr": 1525,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>. The Component to remove.</p>\n",
            "name": "item"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Destroy the component after removal.</p>\n",
            "name": "autoDestroy"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-method-removeDocked",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "Removes the docked item from the panel. ...",
        "static": false,
        "name": "removeDocked",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Removes the docked item from the panel.</p>\n",
        "linenr": 320,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.grid.Panel-method-addListener\" rel=\"Ext.grid.Panel-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes an event handler. ...",
        "static": false,
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n",
        "linenr": 392,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "static": false,
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.Panel-method-mon\" rel=\"Ext.grid.Panel-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 197,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeUIClsFromElement",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method which removes a specified UI + uiCls from the components element. ...",
        "static": false,
        "name": "removeUIClsFromElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which removes a specified UI + uiCls from the components element.\nThe cls which is added to the element will be: <code>this.baseCls + '-' + ui</code></p>\n",
        "linenr": 1605,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "static": false,
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.grid.Panel-method-suspendEvents\" rel=\"Ext.grid.Panel-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "linenr": 554,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "deltaY"
          }
        ],
        "href": "Table.html#Ext-panel-Table-method-scrollByDeltaX",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Scrolls the TablePanel by deltaX ...",
        "static": false,
        "name": "scrollByDeltaX",
        "owner": "Ext.panel.Table",
        "doc": "<p>Scrolls the TablePanel by deltaX</p>\n",
        "linenr": 1114,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "deltaY"
          }
        ],
        "href": "Table.html#Ext-panel-Table-method-scrollByDeltaY",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Scrolls the TablePanel by deltaY ...",
        "static": false,
        "name": "scrollByDeltaY",
        "owner": "Ext.panel.Table",
        "doc": "<p>Scrolls the TablePanel by deltaY</p>\n",
        "linenr": 1102,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-sequenceFx",
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence. ...",
        "static": false,
        "name": "sequenceFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.grid.Panel-method-syncFx\" rel=\"Ext.grid.Panel-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n",
        "linenr": 357,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Floating.html#Ext-util-Floating-method-setActive",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "This method is called internally by Ext.ZIndexManager to signal that a floating\nComponent has either been moved to th...",
        "static": false,
        "name": "setActive",
        "owner": "Ext.util.Floating",
        "doc": "<p>This method is called internally by <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">Ext.ZIndexManager</a> to signal that a floating\nComponent has either been moved to the top of its zIndex stack, or pushed from the top of its zIndex stack.</p>\n\n\n<p>If a <i>Window</i> is superceded by another Window, deactivating it hides its shadow.</p>\n\n\n<p>This method also fires the <a href=\"#/api/Ext.grid.Panel-event-activate\" rel=\"Ext.grid.Panel-event-activate\" class=\"docClass\">activate</a> or <a href=\"#/api/Ext.grid.Panel-event-deactivate\" rel=\"Ext.grid.Panel-event-deactivate\" class=\"docClass\">deactivate</a> event depending on which action occurred.</p>\n\n",
        "linenr": 218,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to allow the Component to auto scroll.</p>\n",
            "name": "scroll"
          }
        ],
        "href": "Component2.html#Ext-Component-method-setAutoScroll",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Sets the overflow on the content element of the component. ...",
        "static": false,
        "name": "setAutoScroll",
        "owner": "Ext.Component",
        "doc": "<p>Sets the overflow on the content element of the component.</p>\n",
        "linenr": 362,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "\n",
            "name": "disabled"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDisabled",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Enable or disable the component. ...",
        "static": false,
        "name": "setDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable or disable the component.</p>\n",
        "linenr": 2321,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDocked",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Sets the dock position of this component in its parent panel. ...",
        "static": false,
        "name": "setDocked",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the dock position of this component in its parent panel. Note that\nthis only has effect if this item is part of the dockedItems collection\nof a parent that has a DockLayout (note that any Panel has a DockLayout\nby default)</p>\n",
        "linenr": 2897,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new height to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.grid.Panel-method-getEl\" rel=\"Ext.grid.Panel-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style.</li>\n<li><i>undefined</i> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setHeight",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Sets the height of the component. ...",
        "static": false,
        "name": "setHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the height of the component.  This method fires the <a href=\"#/api/Ext.grid.Panel-event-resize\" rel=\"Ext.grid.Panel-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "linenr": 2801,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "newIconCls"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-method-setIconCls",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Set the iconCls for the panel&#39;s header. ...",
        "static": false,
        "name": "setIconCls",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Set the iconCls for the panel&#39;s header. See Ext.panel.Header.iconCls.</p>\n",
        "linenr": 459,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setLoading",
        "return": {
          "type": "Ext.LoadMask",
          "doc": "<p>The LoadMask instance that has just been shown.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This method allows you to show or hide a LoadMask on top of this component. ...",
        "static": false,
        "name": "setLoading",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method allows you to show or hide a LoadMask on top of this component.</p>\n",
        "linenr": 2862,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Component2.html#Ext-Component-method-setPagePosition",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Sets the page XY position of the component. ...",
        "static": false,
        "name": "setPagePosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the page XY position of the component.  To set the left and top instead, use <a href=\"#/api/Ext.grid.Panel-method-setPosition\" rel=\"Ext.grid.Panel-method-setPosition\" class=\"docClass\">setPosition</a>.\nThis method fires the <a href=\"#/api/Ext.grid.Panel-event-move\" rel=\"Ext.grid.Panel-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "linenr": 504,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Component2.html#Ext-Component-method-setPosition",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Sets the left and top of the component. ...",
        "static": false,
        "name": "setPosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the left and top of the component.  To set the page XY position instead, use <a href=\"#/api/Ext.grid.Panel-method-setPagePosition\" rel=\"Ext.grid.Panel-method-setPagePosition\" class=\"docClass\">setPagePosition</a>.\nThis method fires the <a href=\"#/api/Ext.grid.Panel-event-move\" rel=\"Ext.grid.Panel-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "linenr": 420,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "deltaY"
          }
        ],
        "href": "Table.html#Ext-panel-Table-method-setScrollTop",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Sets the scrollTop of the TablePanel. ...",
        "static": false,
        "name": "setScrollTop",
        "owner": "Ext.panel.Table",
        "doc": "<p>Sets the scrollTop of the TablePanel.</p>\n",
        "linenr": 1079,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new width to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.grid.Panel-method-getEl\" rel=\"Ext.grid.Panel-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n<li><code>undefined</code> to leave the width unchanged.</li>\n</ul></div></p>\n",
            "name": "width"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new height to set (not required if a size object is passed as the first arg).\nThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.grid.Panel-method-getEl\" rel=\"Ext.grid.Panel-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n<li><code>undefined</code> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setSize",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Sets the width and height of this Component. ...",
        "static": false,
        "name": "setSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width and height of this Component. This method fires the <a href=\"#/api/Ext.grid.Panel-event-resize\" rel=\"Ext.grid.Panel-event-resize\" class=\"docClass\">resize</a> event. This method can accept\neither width and height as separate arguments, or you can pass a size object like <code>{width:10, height:20}</code>.</p>\n",
        "linenr": 2538,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "newTitle"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-method-setTitle",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Set a title for the panel&#39;s header. ...",
        "static": false,
        "name": "setTitle",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Set a title for the panel&#39;s header. See Ext.panel.Header.title.</p>\n",
        "linenr": 438,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new UI for the component</p>\n",
            "name": "ui"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setUI",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Sets the UI for the component. ...",
        "static": false,
        "name": "setUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the UI for the component. This will remove any existing UIs on the component. It will also\nloop through any uiCls set on the component and rename them so they include the new UI</p>\n",
        "linenr": 1448,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to show, false to hide</p>\n",
            "name": "visible"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setVisible",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Convenience function to hide or show this component by boolean. ...",
        "static": false,
        "name": "setVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Convenience function to hide or show this component by boolean.</p>\n",
        "linenr": 2204,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new width to setThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.grid.Panel-method-getEl\" rel=\"Ext.grid.Panel-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n</ul></div></p>\n",
            "name": "width"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setWidth",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Sets the width of the component. ...",
        "static": false,
        "name": "setWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width of the component.  This method fires the <a href=\"#/api/Ext.grid.Panel-event-resize\" rel=\"Ext.grid.Panel-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "linenr": 2789,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Element",
            "optional": false,
            "doc": "<p>Optional, and <b>only valid for <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b> The target from which the Component should\nanimate from while opening (defaults to null with no animation)</p>\n",
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
        "href": "Component2.html#Ext-Component-method-show",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Shows this Component, rendering it first if autoRender or floating are true. ...",
        "static": false,
        "name": "show",
        "owner": "Ext.Component",
        "doc": "<p>Shows this Component, rendering it first if <a href=\"#/api/Ext.grid.Panel-cfg-autoRender\" rel=\"Ext.grid.Panel-cfg-autoRender\" class=\"docClass\">autoRender</a> or <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> are <code>true</code>.</p>\n\n\n<p>After being shown, a <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> Component (such as a <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>), is activated it and brought to the front of\nits <a href=\"#/api/Ext.grid.Panel-property-zIndexManager\" rel=\"Ext.grid.Panel-property-zIndexManager\" class=\"docClass\">z-index stack</a>.</p>\n\n",
        "linenr": 648,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Table.html#Ext-panel-Table-method-showHorizontalScroller",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Show the horizontalScroller and add the horizontalScrollerPresentCls. ...",
        "static": false,
        "name": "showHorizontalScroller",
        "owner": "Ext.panel.Table",
        "doc": "<p>Show the horizontalScroller and add the horizontalScrollerPresentCls.</p>\n",
        "linenr": 929,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Table.html#Ext-panel-Table-method-showVerticalScroller",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Show the verticalScroller and add the verticalScrollerPresentCls. ...",
        "static": false,
        "name": "showVerticalScroller",
        "owner": "Ext.panel.Table",
        "doc": "<p>Show the verticalScroller and add the verticalScrollerPresentCls.</p>\n",
        "linenr": 959,
        "html_filename": "Table.html"
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
        "href": "Animate.html#Ext-util-Animate-method-stopAnimation",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "static": false,
        "name": "stopAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "linenr": 335,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Time-method-stopAnimation\" rel=\"Ext.picker.Time-method-stopAnimation\" class=\"docClass\">stopAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet."
        },
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-stopFx",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "static": false,
        "name": "stopFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "linenr": 326,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.grid.Panel-method-resumeEvents\" rel=\"Ext.grid.Panel-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Suspends the firing of all events. ...",
        "static": false,
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.grid.Panel-method-resumeEvents\" rel=\"Ext.grid.Panel-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "linenr": 541,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-syncFx",
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Ensures that all effects queued after syncFx is called on this object are\nrun concurrently. ...",
        "static": false,
        "name": "syncFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.grid.Panel-method-sequenceFx\" rel=\"Ext.grid.Panel-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n",
        "linenr": 345,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Floating.html#Ext-util-Floating-method-toBack",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Sends this Component to the back of (lower z-index than) any other visible windows ...",
        "static": false,
        "name": "toBack",
        "owner": "Ext.util.Floating",
        "doc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n",
        "linenr": 242,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Specify <code>true</code> to prevent the Component from being focused.</p>\n",
            "name": "preventFocus"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-toFront",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Brings this floating Component to the front of any other visible, floating Components managed by the same ZIndexManag...",
        "static": false,
        "name": "toFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Brings this floating Component to the front of any other visible, floating Components managed by the same <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<p>If this Component is modal, inserts the modal mask just below this Component in the z-index stack.</p>\n\n",
        "linenr": 190,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Panel2.html#Ext-panel-Panel-method-toggleCollapse",
        "return": {
          "type": "Ext.panel.Panel",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Shortcut for performing an expand or collapse based on the current state of the panel. ...",
        "static": false,
        "name": "toggleCollapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Shortcut for performing an <a href=\"#/api/Ext.grid.Panel-event-expand\" rel=\"Ext.grid.Panel-event-expand\" class=\"docClass\">expand</a> or <a href=\"#/api/Ext.grid.Panel-event-collapse\" rel=\"Ext.grid.Panel-event-collapse\" class=\"docClass\">collapse</a> based on the current state of the panel.</p>\n",
        "linenr": 1370,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.grid.Panel-method-addListener\" rel=\"Ext.grid.Panel-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-un",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeListener. ...",
        "static": false,
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.Panel-method-removeListener\" rel=\"Ext.grid.Panel-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "linenr": 675,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. The simple selector to test.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-up",
        "return": {
          "type": "Container",
          "doc": "<p>The matching ancestor Container (or <code>undefined</code> if no match was found).</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Walks up the ownerCt axis looking for an ancestor Container which matches\nthe passed simple selector. ...",
        "static": false,
        "name": "up",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Walks up the <code>ownerCt</code> axis looking for an ancestor Container which matches\nthe passed simple selector.</p>\n\n\n<p>Example:\n<pre><code>var owningTabPanel = grid.up('tabpanel');\n</code></pre>\n\n",
        "linenr": 1926,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-update",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Update the content area of a component. ...",
        "static": false,
        "name": "update",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Update the content area of a component.</p>\n",
        "linenr": 2172,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object in the format {x, y, width, height}</p>\n",
            "name": "box"
          }
        ],
        "href": "Component2.html#Ext-Component-method-updateBox",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Sets the current box measurements of the component's underlying element. ...",
        "static": false,
        "name": "updateBox",
        "owner": "Ext.Component",
        "doc": "<p>Sets the current box measurements of the component's underlying element.</p>\n",
        "linenr": 554,
        "html_filename": "Component2.html"
      }
    ],
    "event": [
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-activate",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after a Component has been visually activated. ...",
        "static": false,
        "name": "activate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component has been visually activated.</p>\n",
        "linenr": 573,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The component that was added</p>\n",
            "name": "component"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the component was added to the container's items collection</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-add",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "@bubbles\nFires after any Ext.Component is added or inserted into the container. ...",
        "static": false,
        "name": "add",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>@bubbles\nFires after any <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> is added or inserted into the container.</p>\n",
        "linenr": 223,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-added",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after a Component had been added to a Container. ...",
        "static": false,
        "name": "added",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component had been added to a Container.</p>\n",
        "linenr": 593,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "ContainerLayout",
            "optional": false,
            "doc": "<p>The ContainerLayout implementation for this container</p>\n",
            "name": "layout"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-afterlayout",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Fires when the components in this container are arranged by the associated layout manager. ...",
        "static": false,
        "name": "afterlayout",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Fires when the components in this container are arranged by the associated layout manager.</p>\n",
        "linenr": 199,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-afterrender",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component rendering is finished. ...",
        "static": false,
        "name": "afterrender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component rendering is finished.</p>\n\n\n<p>The afterrender event is fired after this Component has been <a href=\"#/api/Ext.grid.Panel-property-rendered\" rel=\"Ext.grid.Panel-property-rendered\" class=\"docClass\">rendered</a>, been postprocesed\nby any afterRender method defined for the Component.</p>\n\n",
        "linenr": 660,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeactivate",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before a Component has been visually activated. ...",
        "static": false,
        "name": "beforeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually activated.\nReturning false from an event listener can prevent the activate\nfrom occurring.</p>\n",
        "linenr": 565,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The component being added</p>\n",
            "name": "component"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the component will be added to the container's items collection</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-beforeadd",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Fires before any Ext.Component is added or inserted into the container. ...",
        "static": false,
        "name": "beforeadd",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Fires before any <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> is added or inserted into the container.\nA handler can return false to cancel the add.</p>\n",
        "linenr": 206,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The card that will be switched to</p>\n",
            "name": "newCard"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The card that will be switched from</p>\n",
            "name": "oldCard"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the card that will be switched to</p>\n",
            "name": "index"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if this cardswitch will be animated</p>\n",
            "name": "animated"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-beforecardswitch",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Fires before this container switches the active card. ...",
        "static": false,
        "name": "beforecardswitch",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Fires before this container switches the active card. This event\nis only available if this container uses a CardLayout. Note that\nTabPanel and Carousel both get a CardLayout by default, so both\nwill have this event.\nA handler can return false to cancel the card switch.</p>\n",
        "linenr": 240,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>The Panel being collapsed.</p>\n",
            "name": "p"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>. The direction of the collapse. One of<ul>\n<li>Ext.Component.DIRECTION_TOP</li>\n<li>Ext.Component.DIRECTION_RIGHT</li>\n<li>Ext.Component.DIRECTION_BOTTOM</li>\n<li>Ext.Component.DIRECTION_LEFT</li></ul></p>\n",
            "name": "direction"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if the collapse is animated, else false.</p>\n",
            "name": "animate"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-beforecollapse",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Fires before this panel is collapsed. ...",
        "static": false,
        "name": "beforecollapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires before this panel is collapsed. Return false to prevent the collapse.</p>\n",
        "linenr": 327,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforecontainerclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the click event on the container is processed. ...",
        "static": false,
        "name": "beforecontainerclick",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the click event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 462,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforecontainercontextmenu",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the contextmenu event on the container is processed. ...",
        "static": false,
        "name": "beforecontainercontextmenu",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the contextmenu event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 476,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforecontainerdblclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the dblclick event on the container is processed. ...",
        "static": false,
        "name": "beforecontainerdblclick",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the dblclick event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 469,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforecontainermousedown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the mousedown event on the container is processed. ...",
        "static": false,
        "name": "beforecontainermousedown",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the mousedown event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 434,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforecontainermouseout",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the mouseout event on the container is processed. ...",
        "static": false,
        "name": "beforecontainermouseout",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the mouseout event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 455,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforecontainermouseover",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the mouseover event on the container is processed. ...",
        "static": false,
        "name": "beforecontainermouseover",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the mouseover event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 448,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforecontainermouseup",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the mouseup event on the container is processed. ...",
        "static": false,
        "name": "beforecontainermouseup",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the mouseup event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 441,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedeactivate",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before a Component has been visually deactivated. ...",
        "static": false,
        "name": "beforedeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually deactivated.\nReturning false from an event listener can prevent the deactivate\nfrom occurring.</p>\n",
        "linenr": 579,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedestroy",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before the component is destroyed. ...",
        "static": false,
        "name": "beforedestroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.grid.Panel-event-destroy\" rel=\"Ext.grid.Panel-event-destroy\" class=\"docClass\">destroy</a>ed. Return false from an event handler to stop the <a href=\"#/api/Ext.grid.Panel-event-destroy\" rel=\"Ext.grid.Panel-event-destroy\" class=\"docClass\">destroy</a>.</p>\n",
        "linenr": 668,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>The Panel being expanded.</p>\n",
            "name": "p"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if the expand is animated, else false.</p>\n",
            "name": "animate"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-beforeexpand",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Fires before this panel is expanded. ...",
        "static": false,
        "name": "beforeexpand",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires before this panel is expanded. Return false to prevent the expand.</p>\n",
        "linenr": 319,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforehide",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before the component is hidden when calling the hide method. ...",
        "static": false,
        "name": "beforehide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is hidden when calling the <a href=\"#/api/Ext.grid.Panel-event-hide\" rel=\"Ext.grid.Panel-event-hide\" class=\"docClass\">hide</a> method.\nReturn false from an event handler to stop the hide.</p>\n",
        "linenr": 626,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforeitemclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the click event on an item is processed. ...",
        "static": false,
        "name": "beforeitemclick",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the click event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 334,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforeitemcontextmenu",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the contextmenu event on an item is processed. ...",
        "static": false,
        "name": "beforeitemcontextmenu",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the contextmenu event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 354,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforeitemdblclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the dblclick event on an item is processed. ...",
        "static": false,
        "name": "beforeitemdblclick",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the dblclick event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 344,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforeitemmousedown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the mousedown event on an item is processed. ...",
        "static": false,
        "name": "beforeitemmousedown",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the mousedown event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 294,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforeitemmouseenter",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the mouseenter event on an item is processed. ...",
        "static": false,
        "name": "beforeitemmouseenter",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the mouseenter event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 314,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforeitemmouseleave",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the mouseleave event on an item is processed. ...",
        "static": false,
        "name": "beforeitemmouseleave",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the mouseleave event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 324,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforeitemmouseup",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before the mouseup event on an item is processed. ...",
        "static": false,
        "name": "beforeitemmouseup",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before the mouseup event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 304,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The component being removed</p>\n",
            "name": "component"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-beforeremove",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Fires before any Ext.Component is removed from the container. ...",
        "static": false,
        "name": "beforeremove",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Fires before any <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> is removed from the container.  A handler can return\nfalse to cancel the remove.</p>\n",
        "linenr": 215,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforerender",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before the component is rendered. ...",
        "static": false,
        "name": "beforerender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.grid.Panel-property-rendered\" rel=\"Ext.grid.Panel-property-rendered\" class=\"docClass\">rendered</a>. Return false from an\nevent handler to stop the <a href=\"#/api/Ext.grid.Panel-event-render\" rel=\"Ext.grid.Panel-event-render\" class=\"docClass\">render</a>.</p>\n",
        "linenr": 647,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The node to be selected</p>\n",
            "name": "node"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>Array of currently selected nodes</p>\n",
            "name": "selections"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-beforeselect",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires before a selection is made. ...",
        "static": false,
        "name": "beforeselect",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires before a selection is made. If any handlers return false, the selection is cancelled.</p>\n",
        "linenr": 533,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeshow",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before the component is shown when calling the show method. ...",
        "static": false,
        "name": "beforeshow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is shown when calling the <a href=\"#/api/Ext.grid.Panel-event-show\" rel=\"Ext.grid.Panel-event-show\" class=\"docClass\">show</a> method.\nReturn false from an event handler to stop the show.</p>\n",
        "linenr": 613,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Stateful.html#Ext-state-Stateful-event-beforestaterestore",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Fires before the state of the object is restored. ...",
        "static": false,
        "name": "beforestaterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is restored. Return false from an event handler to stop the restore.</p>\n",
        "linenr": 101,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Stateful.html#Ext-state-Stateful-event-beforestatesave",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Fires before the state of the object is saved to the configured state provider. ...",
        "static": false,
        "name": "beforestatesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is saved to the configured state provider. Return false to stop the save.</p>\n",
        "linenr": 122,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>the Panel which has been resized.</p>\n",
            "name": "p"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The Panel body's new width.</p>\n",
            "name": "width"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The Panel body's new height.</p>\n",
            "name": "height"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractPanel.html#Ext-panel-AbstractPanel-event-bodyresize",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/panel/AbstractPanel.js",
        "private": false,
        "shortDoc": "Fires after the Panel has been resized. ...",
        "static": false,
        "name": "bodyresize",
        "owner": "Ext.panel.AbstractPanel",
        "doc": "<p>Fires after the Panel has been resized.</p>\n",
        "linenr": 121,
        "html_filename": "AbstractPanel.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The card that has been switched to</p>\n",
            "name": "newCard"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The card that has been switched from</p>\n",
            "name": "oldCard"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the card that has been switched to</p>\n",
            "name": "index"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if this cardswitch was animated</p>\n",
            "name": "animated"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-cardswitch",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "Fires after this container switches the active card. ...",
        "static": false,
        "name": "cardswitch",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>Fires after this container switches the active card. If the card\nis switched using an animation, this event will fire after the\nanimation has finished. This event is only available if this container\nuses a CardLayout. Note that TabPanel and Carousel both get a CardLayout\nby default, so both will have this event.</p>\n",
        "linenr": 254,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>The Panel that has been collapsed.</p>\n",
            "name": "p"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-collapse",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Fires after this Panel hass collapsed. ...",
        "static": false,
        "name": "collapse",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires after this Panel hass collapsed.</p>\n",
        "linenr": 347,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-containerclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when the container is clicked. ...",
        "static": false,
        "name": "containerclick",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when the container is clicked.</p>\n",
        "linenr": 504,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-containercontextmenu",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when the container is right clicked. ...",
        "static": false,
        "name": "containercontextmenu",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when the container is right clicked.</p>\n",
        "linenr": 518,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-containerdblclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when the container is double clicked. ...",
        "static": false,
        "name": "containerdblclick",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when the container is double clicked.</p>\n",
        "linenr": 511,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-containermouseout",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when you move the mouse out of the container. ...",
        "static": false,
        "name": "containermouseout",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when you move the mouse out of the container.</p>\n",
        "linenr": 497,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-containermouseover",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when you move the mouse over the container. ...",
        "static": false,
        "name": "containermouseover",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when you move the mouse over the container.</p>\n",
        "linenr": 490,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-containermouseup",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when there is a mouse up on the container ...",
        "static": false,
        "name": "containermouseup",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when there is a mouse up on the container</p>\n",
        "linenr": 483,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-deactivate",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after a Component has been visually deactivated. ...",
        "static": false,
        "name": "deactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component has been visually deactivated.</p>\n",
        "linenr": 587,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-destroy",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is destroyed. ...",
        "static": false,
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is <a href=\"#/api/Ext.grid.Panel-event-destroy\" rel=\"Ext.grid.Panel-event-destroy\" class=\"docClass\">destroy</a>ed.</p>\n",
        "linenr": 674,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-disable",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is disabled. ...",
        "static": false,
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is disabled.</p>\n",
        "linenr": 601,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-enable",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is enabled. ...",
        "static": false,
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is enabled.</p>\n",
        "linenr": 607,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>The Panel that has been expanded.</p>\n",
            "name": "p"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-expand",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Fires after this Panel has expanded. ...",
        "static": false,
        "name": "expand",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires after this Panel has expanded.</p>\n",
        "linenr": 340,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-hide",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is hidden. ...",
        "static": false,
        "name": "hide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is hidden.\nFires after the component is hidden when calling the <a href=\"#/api/Ext.grid.Panel-event-hide\" rel=\"Ext.grid.Panel-event-hide\" class=\"docClass\">hide</a> method.</p>\n",
        "linenr": 633,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>the Panel which has been resized.</p>\n",
            "name": "p"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new iconCls.</p>\n",
            "name": "newIconCls"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The previous panel iconCls.</p>\n",
            "name": "oldIconCls"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-iconchange",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Fires after the Panel iconCls has been set or changed. ...",
        "static": false,
        "name": "iconchange",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires after the Panel iconCls has been set or changed.</p>\n",
        "linenr": 363,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-itemclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when an item is clicked. ...",
        "static": false,
        "name": "itemclick",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when an item is clicked.</p>\n",
        "linenr": 404,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-itemcontextmenu",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when an item is right clicked. ...",
        "static": false,
        "name": "itemcontextmenu",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when an item is right clicked.</p>\n",
        "linenr": 424,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-itemdblclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when an item is double clicked. ...",
        "static": false,
        "name": "itemdblclick",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when an item is double clicked.</p>\n",
        "linenr": 414,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-itemmousedown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when there is a mouse down on an item ...",
        "static": false,
        "name": "itemmousedown",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when there is a mouse down on an item</p>\n",
        "linenr": 364,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-itemmouseenter",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when the mouse enters an item. ...",
        "static": false,
        "name": "itemmouseenter",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when the mouse enters an item.</p>\n",
        "linenr": 384,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-itemmouseleave",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when the mouse leaves an item. ...",
        "static": false,
        "name": "itemmouseleave",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when the mouse leaves an item.</p>\n",
        "linenr": 394,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-itemmouseup",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when there is a mouse up on an item ...",
        "static": false,
        "name": "itemmouseup",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when there is a mouse up on an item</p>\n",
        "linenr": 374,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-move",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is moved. ...",
        "static": false,
        "name": "move",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is moved.</p>\n",
        "linenr": 688,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.panel.Table",
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
        "href": "Table.html#Ext-panel-Table-event-reconfigure",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires after a reconfigure ...",
        "static": false,
        "name": "reconfigure",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires after a reconfigure</p>\n",
        "linenr": 175,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>The component that was removed</p>\n",
            "name": "component"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-event-remove",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "shortDoc": "@bubbles\nFires after any Ext.Component is removed from the container. ...",
        "static": false,
        "name": "remove",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>@bubbles\nFires after any <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> is removed from the container.</p>\n",
        "linenr": 232,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-removed",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires when a component is removed from an Ext.container.Container ...",
        "static": false,
        "name": "removed",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires when a component is removed from an Ext.container.Container</p>\n",
        "linenr": 640,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-render",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component markup is rendered. ...",
        "static": false,
        "name": "render",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component markup is <a href=\"#/api/Ext.grid.Panel-property-rendered\" rel=\"Ext.grid.Panel-property-rendered\" class=\"docClass\">rendered</a>.</p>\n",
        "linenr": 654,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-resize",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is resized. ...",
        "static": false,
        "name": "resize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is resized.</p>\n",
        "linenr": 680,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.grid.Scroller",
            "optional": false,
            "doc": "\n",
            "name": "scroller"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Orientation, can be 'vertical' or 'horizontal'</p>\n",
            "name": "orientation"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-scrollerhide",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when a scroller is hidden ...",
        "static": false,
        "name": "scrollerhide",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when a scroller is hidden</p>\n",
        "linenr": 181,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.grid.Scroller",
            "optional": false,
            "doc": "\n",
            "name": "scroller"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Orientation, can be 'vertical' or 'horizontal'</p>\n",
            "name": "orientation"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-scrollershow",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when a scroller is shown ...",
        "static": false,
        "name": "scrollershow",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when a scroller is shown</p>\n",
        "linenr": 188,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>Array of the selected nodes</p>\n",
            "name": "selections"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Table.html#Ext-panel-Table-event-selectionchange",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "shortDoc": "Fires when the selected nodes change. ...",
        "static": false,
        "name": "selectionchange",
        "owner": "Ext.panel.Table",
        "doc": "<p>Fires when the selected nodes change. Relayed event from the underlying selection model.</p>\n",
        "linenr": 526,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-show",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is shown when calling the show method. ...",
        "static": false,
        "name": "show",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is shown when calling the <a href=\"#/api/Ext.grid.Panel-event-show\" rel=\"Ext.grid.Panel-event-show\" class=\"docClass\">show</a> method.</p>\n",
        "linenr": 620,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Stateful.html#Ext-state-Stateful-event-staterestore",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Fires after the state of the object is restored. ...",
        "static": false,
        "name": "staterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is restored.</p>\n",
        "linenr": 112,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Stateful.html#Ext-state-Stateful-event-statesave",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Fires after the state of the object is saved to the configured state provider. ...",
        "static": false,
        "name": "statesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is saved to the configured state provider.</p>\n",
        "linenr": 133,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>the Panel which has been resized.</p>\n",
            "name": "p"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new title.</p>\n",
            "name": "newTitle"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The previous panel title.</p>\n",
            "name": "oldTitle"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Panel2.html#Ext-panel-Panel-event-titlechange",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "Fires after the Panel title has been set or changed. ...",
        "static": false,
        "name": "titlechange",
        "owner": "Ext.panel.Panel",
        "doc": "<p>Fires after the Panel title has been set or changed.</p>\n",
        "linenr": 354,
        "html_filename": "Panel2.html"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "Ext.dd.DragSource.",
        "deprecated": null,
        "href": "Panel2.html#Ext-panel-Panel-property-dd",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Panel.js",
        "private": false,
        "shortDoc": "If this Panel is configured draggable, this property will contain\nan instance of Ext.dd.DragSource which handles drag...",
        "static": false,
        "name": "dd",
        "owner": "Ext.panel.Panel",
        "doc": "<p>If this Panel is configured <a href=\"#/api/Ext.grid.Panel-property-draggable\" rel=\"Ext.grid.Panel-property-draggable\" class=\"docClass\">draggable</a>, this property will contain\nan instance of <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> which handles dragging the Panel.</p>\n\n\n<p>The developer must provide implementations of the abstract methods of <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a>\nin order to supply behaviour for each stage of the drag/drop process. See <a href=\"#/api/Ext.grid.Panel-property-draggable\" rel=\"Ext.grid.Panel-property-draggable\" class=\"docClass\">draggable</a>.</p>\n",
        "linenr": 1393,
        "html_filename": "Panel2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-draggable",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "draggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component can be dragged</p>\n",
        "linenr": 395,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Ext.Container",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-property-floatParent",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Optional. ...",
        "static": false,
        "name": "floatParent",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> Components which were inserted as descendant items of floating Containers.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will not have a <code>floatParent</code> property.</p>\n\n\n<p>For <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> Components which are child items of a Container, the floatParent will be the floating ancestor Container which is\nresponsible for the base z-index value of all its floating descendants. It provides a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which provides\nz-indexing services for all its descendant floating Components.</p>\n\n\n<p>For example, the dropdown <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">BoundList</a> of a ComboBox which is in a Window will have the Window as its\n<code>floatParent</code></p>\n\n\n<p>See <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.grid.Panel-property-zIndexManager\" rel=\"Ext.grid.Panel-property-zIndexManager\" class=\"docClass\">zIndexManager</a></p>\n\n",
        "linenr": 224,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-frameSize",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto ...",
        "static": false,
        "name": "frameSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto provide graphical, rounded borders. See the <a href=\"#/api/Ext.grid.Panel-cfg-frame\" rel=\"Ext.grid.Panel-cfg-frame\" class=\"docClass\">frame</a> config.</p>\n\n\n<p> This is an object containing the frame width in pixels for all four sides of the Component containing\nthe following properties:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>top</code> The width of the top framing element in pixels.</li>\n<li><code>right</code> The width of the right framing element in pixels.</li>\n<li><code>bottom</code> The width of the bottom framing element in pixels.</li>\n<li><code>left</code> The width of the left framing element in pixels.</li>\n</ul></div>\n\n",
        "linenr": 228,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Table.html#Ext-panel-Table-property-hasView",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Table.js",
        "private": false,
        "static": false,
        "name": "hasView",
        "owner": "Ext.panel.Table",
        "doc": "<p>Boolean to indicate that a view has been injected into the panel.</p>\n",
        "linenr": 32,
        "html_filename": "Table.html"
      },
      {
        "inheritable": false,
        "type": "Ext.util.MixedCollection",
        "deprecated": null,
        "href": "AbstractContainer2.html#Ext-container-AbstractContainer-property-items",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/container/AbstractContainer.js",
        "private": false,
        "static": false,
        "name": "items",
        "owner": "Ext.container.AbstractContainer",
        "doc": "<p>The MixedCollection containing all the child items of this container.</p>\n",
        "linenr": 281,
        "html_filename": "AbstractContainer2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-maskOnDisable",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This is an internal flag that you use when creating custom components. ...",
        "static": false,
        "name": "maskOnDisable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This is an internal flag that you use when creating custom components.\nBy default this is set to true which means that every component gets a mask when its disabled.\nComponents like FieldContainer, FieldSet, Field, Button, Tab override this property to false\nsince they want to implement custom disable logic.</p>\n",
        "linenr": 542,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Ext.Container",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-ownerCt",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This Component's owner Container (defaults to undefined, and is set automatically when\nthis Component is added to a C...",
        "static": false,
        "name": "ownerCt",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This Component's owner <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a> (defaults to undefined, and is set automatically when\nthis Component is added to a Container).  Read-only.</p>\n\n<p><b>Note</b>: to access items within the Container see <tt><a href=\"#/api/Ext.grid.Panel-cfg-itemId\" rel=\"Ext.grid.Panel-cfg-itemId\" class=\"docClass\">itemId</a></tt>.</p>\n\n",
        "linenr": 102,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-rendered",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "rendered",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component has been rendered.</p>\n",
        "linenr": 521,
        "html_filename": "AbstractComponent.html"
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
      },
      {
        "inheritable": false,
        "type": "Ext.ZIndexManager",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-property-zIndexManager",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Optional. ...",
        "static": false,
        "name": "zIndexManager",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> Components after they have been rendered.</p>\n\n\n<p>A reference to the ZIndexManager which is managing this Component's z-index.</p>\n\n\n<p>The <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> maintains a stack of floating Component z-indices, and also provides a single modal\nmask which is insert just beneath the topmost visible modal floating Component.</p>\n\n\n<p>Floating Components may be <a href=\"#/api/Ext.grid.Panel-method-toFront\" rel=\"Ext.grid.Panel-method-toFront\" class=\"docClass\">brought to the front</a> or <a href=\"#/api/Ext.grid.Panel-method-toBack\" rel=\"Ext.grid.Panel-method-toBack\" class=\"docClass\">sent to the back</a> of the z-index stack.</p>\n\n\n<p>This defaults to the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> for floating Components that are programatically\n<a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a>.</p>\n\n\n<p>For <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> Components which are added to a Container, the ZIndexManager is acquired from the first ancestor Container found\nwhich is floating, or if not found the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> is used.</p>\n\n\n<p>See <a href=\"#/api/Ext.grid.Panel-cfg-floating\" rel=\"Ext.grid.Panel-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.grid.Panel-property-floatParent\" rel=\"Ext.grid.Panel-property-floatParent\" class=\"docClass\">floatParent</a></p>\n\n",
        "linenr": 209,
        "html_filename": "Component2.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": "Aaron Conran",
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/Panel.js",
  "private": false,
  "alternateClassNames": [
    "Ext.list.ListView",
    "Ext.ListView",
    "Ext.grid.GridPanel"
  ],
  "static": false,
  "name": "Ext.grid.Panel",
  "doc": "<p>Grids are an excellent way of showing large amounts of tabular data on the client side. Essentially a supercharged\n<code>&lt;table&gt;</code>, GridPanel makes it easy to fetch, sort and filter large amounts of data.</p>\n\n<p>Grids are composed of 2 main pieces - a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> full of data and a set of columns to render.</p>\n\n<p><p><img src=\"doc-resources/Ext.grid.Panel/Ext.grid.Panel1.png\" alt=\"Ext.grid.Panel component\"></p></p>\n\n<h2>Basic GridPanel</h2>\n\n<pre><code>Ext.create('Ext.data.Store', {\n    storeId:'simpsonsStore',\n    fields:['name', 'email', 'phone'],\n    data:{'items':[\n        {\"name\":\"Lisa\", \"email\":\"lisa@simpsons.com\", \"phone\":\"555-111-1224\"},\n        {\"name\":\"Bart\", \"email\":\"bart@simpsons.com\", \"phone\":\"555--222-1234\"},\n        {\"name\":\"Homer\", \"email\":\"home@simpsons.com\", \"phone\":\"555-222-1244\"},                        \n        {\"name\":\"Marge\", \"email\":\"marge@simpsons.com\", \"phone\":\"555-222-1254\"}            \n    ]},\n    proxy: {\n        type: 'memory',\n        reader: {\n            type: 'json',\n            root: 'items'\n        }\n    }\n});\n\nExt.create('Ext.grid.Panel', {\n    title: 'Simpsons',\n    store: Ext.data.StoreManager.lookup('simpsonsStore'),\n    columns: [\n        {header: 'Name',  dataIndex: 'name'},\n        {header: 'Email', dataIndex: 'email', flex:1},\n        {header: 'Phone', dataIndex: 'phone'}\n    ],\n    height: 200,\n    width: 400,\n    renderTo: Ext.getBody()\n});\n</code></pre>\n\n<p>The code above produces a simple grid with three columns. We specified a Store which will load JSON data inline.\nIn most apps we would be placing the grid inside another container and wouldn't need to use the\n<a href=\"#/api/Ext.grid.Panel-cfg-height\" rel=\"Ext.grid.Panel-cfg-height\" class=\"docClass\">height</a>, <a href=\"#/api/Ext.grid.Panel-cfg-width\" rel=\"Ext.grid.Panel-cfg-width\" class=\"docClass\">width</a> and <a href=\"#/api/Ext.grid.Panel-cfg-renderTo\" rel=\"Ext.grid.Panel-cfg-renderTo\" class=\"docClass\">renderTo</a> configurations but they are included here to make it easy to get\nup and running.</p>\n\n<p>The grid we created above will contain a header bar with a title ('Simpsons'), a row of column headers directly underneath\nand finally the grid rows under the headers.</p>\n\n<h2>Configuring columns</h2>\n\n<p>By default, each column is sortable and will toggle between ASC and DESC sorting when you click on its header. Each\ncolumn header is also reorderable by default, and each gains a drop-down menu with options to hide and show columns.\nIt's easy to configure each column - here we use the same example as above and just modify the columns config:</p>\n\n<pre><code>columns: [\n    {\n        header: 'Name',\n        dataIndex: 'name',\n        sortable: false,\n        hideable: false,\n        flex: 1\n    },\n    {\n        header: 'Email',\n        dataIndex: 'email',\n        hidden: true\n    },\n    {\n        header: 'Phone',\n        dataIndex: 'phone',\n        width: 100\n    }\n]\n</code></pre>\n\n<p>We turned off sorting and hiding on the 'Name' column so clicking its header now has no effect. We also made the Email\ncolumn hidden by default (it can be shown again by using the menu on any other column). We also set the Phone column to\na fixed with of 100px and flexed the Name column, which means it takes up all remaining width after the other columns\nhave been accounted for. See the <a href=\"#/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">column docs</a> for more details.</p>\n\n<h2>Renderers</h2>\n\n<p>As well as customizing columns, it's easy to alter the rendering of individual cells using renderers. A renderer is\ntied to a particular column and is passed the value that would be rendered into each cell in that column. For example,\nwe could define a renderer function for the email column to turn each email address into a mailto link:</p>\n\n<pre><code>columns: [\n    {\n        header: 'Email',\n        dataIndex: 'email',\n        renderer: function(value) {\n            return Ext.String.format('&lt;a href=\"mailto:{0}\"&gt;{1}&lt;/a&gt;', value, value);\n        }\n    }\n]\n</code></pre>\n\n<p>See the <a href=\"#/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">column docs</a> for more information on renderers.</p>\n\n<h2>Selection Models</h2>\n\n<p>Sometimes all you want is to render data onto the screen for viewing, but usually it's necessary to interact with or\nupdate that data. Grids use a concept called a Selection Model, which is simply a mechanism for selecting some part of\nthe data in the grid. The two main types of Selection Model are RowSelectionModel, where entire rows are selected, and\nCellSelectionModel, where individual cells are selected.</p>\n\n<p>Grids use a Row Selection Model by default, but this is easy to customise like so:</p>\n\n<pre><code>Ext.create('Ext.grid.Panel', {\n    selType: 'cellmodel',\n    store: ...\n});\n</code></pre>\n\n<p>Specifying the <code>cellmodel</code> changes a couple of things. Firstly, clicking on a cell now\nselects just that cell (using a <a href=\"#/api/Ext.selection.RowModel\" rel=\"Ext.selection.RowModel\" class=\"docClass\">rowmodel</a> will select the entire row), and secondly the\nkeyboard navigation will walk from cell to cell instead of row to row. Cell-based selection models are usually used in\nconjunction with editing.</p>\n\n<p><p><img src=\"doc-resources/Ext.grid.Panel/Ext.grid.Panel2.png\" alt=\"Ext.grid.Panel cell editing\"></p></p>\n\n<h2>Editing</h2>\n\n<p>Grid has built-in support for in-line editing. There are two chief editing modes - cell editing and row editing. Cell\nediting is easy to add to your existing column setup - here we'll just modify the example above to include an editor\non both the name and the email columns:</p>\n\n<pre><code>Ext.create('Ext.grid.Panel', {\n    title: 'Simpsons',\n    store: Ext.data.StoreManager.lookup('simpsonsStore'),\n    columns: [\n        {header: 'Name',  dataIndex: 'name', field: 'textfield'},\n        {header: 'Email', dataIndex: 'email', flex:1, \n            field:{\n                xtype:'textfield',\n                allowBlank:false\n            }\n        },\n        {header: 'Phone', dataIndex: 'phone'}\n    ],\n    selType: 'cellmodel',\n    plugins: [\n        Ext.create('Ext.grid.plugin.CellEditing', {\n            clicksToEdit: 1\n        })\n    ],\n    height: 200,\n    width: 400,\n    renderTo: Ext.getBody()\n});\n</code></pre>\n\n<p>This requires a little explanation. We're passing in store and <a href=\"#/api/Ext.grid.Panel-cfg-columns\" rel=\"Ext.grid.Panel-cfg-columns\" class=\"docClass\">columns</a> as normal, but\nthis time we've also specified a field on two of our columns. For the Name column we just want a default\ntextfield to edit the value, so we specify 'textfield'. For the Email column we customized the editor slightly by\npassing allowBlank: false, which will provide inline validation.</p>\n\n<p>To support cell editing, we also specified that the grid should use the 'cellmodel' selType, and created an\ninstance of the <a href=\"#/api/Ext.grid.plugin.CellEditing\" rel=\"Ext.grid.plugin.CellEditing\" class=\"docClass\">CellEditing plugin</a>, which we configured to activate each editor after a\nsingle click.</p>\n\n<p><p><img src=\"doc-resources/Ext.grid.Panel/Ext.grid.Panel3.png\" alt=\"Ext.grid.Panel row editing\"></p></p>\n\n<h2>Row Editing</h2>\n\n<p>The other type of editing is row-based editing, using the RowEditor component. This enables you to edit an entire row\nat a time, rather than editing cell by cell. Row Editing works in exactly the same way as cell editing, all we need to\ndo is change the plugin type to <a href=\"#/api/Ext.grid.plugin.RowEditing\" rel=\"Ext.grid.plugin.RowEditing\" class=\"docClass\">Ext.grid.plugin.RowEditing</a>, and set the selType to 'rowmodel':</p>\n\n<pre><code>Ext.create('Ext.grid.Panel', {\n    title: 'Simpsons',\n    store: Ext.data.StoreManager.lookup('simpsonsStore'),\n    columns: [\n        {header: 'Name',  dataIndex: 'name', field: 'textfield'},\n        {header: 'Email', dataIndex: 'email', flex:1, \n            field:{\n                xtype:'textfield',\n                allowBlank:false\n            }\n        },\n        {header: 'Phone', dataIndex: 'phone'}\n    ],\n    selType: 'rowmodel',\n    plugins: [\n        Ext.create('Ext.grid.plugin.RowEditing', {\n            clicksToEdit: 1\n        })\n    ],\n    height: 200,\n    width: 400,\n    renderTo: Ext.getBody()\n});\n</code></pre>\n\n<p>Again we passed some configuration to our <a href=\"#/api/Ext.grid.plugin.RowEditing\" rel=\"Ext.grid.plugin.RowEditing\" class=\"docClass\">Ext.grid.plugin.RowEditing</a> plugin, and now when we click each row a row\neditor will appear and enable us to edit each of the columns we have specified an editor for.</p>\n\n<h2>Sorting &amp; Filtering</h2>\n\n<p>Every grid is attached to a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>, which provides multi-sort and filtering capabilities. It's\neasy to set up a grid to be sorted from the start:</p>\n\n<pre><code>var myGrid = Ext.create('Ext.grid.Panel', {\n    store: {\n        fields: ['name', 'email', 'phone'],\n        sorters: ['name', 'phone']\n    },\n    columns: [\n        {text: 'Name',  dataIndex: 'name'},\n        {text: 'Email', dataIndex: 'email'}\n    ]\n});\n</code></pre>\n\n<p>Sorting at run time is easily accomplished by simply clicking each column header. If you need to perform sorting on\nmore than one field at run time it's easy to do so by adding new sorters to the store:</p>\n\n<pre><code>myGrid.store.sort([\n    {property: 'name',  direction: 'ASC'},\n    {property: 'email', direction: 'DESC'},\n]);\n</code></pre>\n\n<p><p><img src=\"doc-resources/Ext.grid.Panel/Ext.grid.Panel4.png\" alt=\"Ext.grid.Panel grouping\"></p></p>\n\n<h2>Grouping</h2>\n\n<p>Grid supports the grouping of rows by any field. For example if we had a set of employee records, we might want to\ngroup by the department that each employee works in. Here's how we might set that up:</p>\n\n<pre><code>var store = Ext.create('Ext.data.Store', {\n    storeId:'employeeStore',\n    fields:['name', 'senority', 'department'],\n    groupField: 'department',\n    data:{'employees':[\n        {\"name\":\"Michael Scott\", \"senority\":7, \"department\":\"Manangement\"},\n        {\"name\":\"Dwight Schrute\", \"senority\":2, \"department\":\"Sales\"},\n        {\"name\":\"Jim Halpert\", \"senority\":3, \"department\":\"Sales\"},\n        {\"name\":\"Kevin Malone\", \"senority\":4, \"department\":\"Accounting\"},\n        {\"name\":\"Angela Martin\", \"senority\":5, \"department\":\"Accounting\"}                        \n    ]},\n    proxy: {\n        type: 'memory',\n        reader: {\n            type: 'json',\n            root: 'employees'\n        }\n    }\n});\n\nExt.create('Ext.grid.Panel', {\n    title: 'Employees',\n    store: Ext.data.StoreManager.lookup('employeeStore'),\n    columns: [\n        {header: 'Name',  dataIndex: 'name'},\n        {header: 'Senority', dataIndex: 'senority'}\n    ],        \n    features: [{ftype:'grouping'}],\n    width: 200,\n    height: 275,\n    renderTo: Ext.getBody()\n});\n</code></pre>\n\n<h2>Infinite Scrolling</h2>\n\n<p>Grid supports infinite scrolling as an alternative to using a paging toolbar. Your users can scroll through thousands\nof records without the performance penalties of renderering all the records on screen at once. The grid should be bound\nto a store with a pageSize specified.</p>\n\n<pre><code>var grid = Ext.create('Ext.grid.Panel', {\n    // Use a PagingGridScroller (this is interchangeable with a PagingToolbar)\n    verticalScrollerType: 'paginggridscroller',\n    // do not reset the scrollbar when the view refreshs\n    invalidateScrollerOnRefresh: false,\n    // infinite scrolling does not support selection\n    disableSelection: true,\n    // ...\n});\n</code></pre>\n\n<h2>Paging</h2>\n\n<p>Grid supports paging through large sets of data via a PagingToolbar or PagingGridScroller (see the Infinite Scrolling section above).\nTo leverage paging via a toolbar or scroller, you need to set a pageSize configuration on the Store.</p>\n\n<pre><code>var itemsPerPage = 2;   // set the number of items you want per page\n\nvar store = Ext.create('Ext.data.Store', {\n    id:'simpsonsStore',\n    autoLoad: false,\n    fields:['name', 'email', 'phone'],\n    pageSize: itemsPerPage, // items per page\n    proxy: {\n        type: 'ajax',\n        url: 'pagingstore.js',  // url that will load data with respect to start and limit params\n        reader: {\n            type: 'json',\n            root: 'items',\n            totalProperty: 'total'\n        }\n    }\n});\n\n// specify segment of data you want to load using params\nstore.load({\n    params:{\n        start:0,    \n        limit: itemsPerPage\n    }\n});\n\nExt.create('Ext.grid.Panel', {\n    title: 'Simpsons',\n    store: store,\n    columns: [\n        {header: 'Name',  dataIndex: 'name'},\n        {header: 'Email', dataIndex: 'email', flex:1},\n        {header: 'Phone', dataIndex: 'phone'}\n    ],\n    width: 400,\n    height: 125,\n    dockedItems: [{\n        xtype: 'pagingtoolbar',\n        store: store,   // same store GridPanel is using\n        dock: 'bottom',\n        displayInfo: true\n    }],\n    renderTo: Ext.getBody()\n}); \n</code></pre>\n\n<p><p><img src=\"doc-resources/Ext.grid.Panel/Ext.grid.Panel5.png\" alt=\"Ext.grid.Panel grouping\"></p></p>\n",
  "docauthor": "Ed Spencer",
  "component": true,
  "linenr": 1,
  "xtypes": [
    "gridpanel",
    "grid"
  ],
  "html_filename": "Panel4.html",
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
  "extends": "Ext.panel.Table"
});