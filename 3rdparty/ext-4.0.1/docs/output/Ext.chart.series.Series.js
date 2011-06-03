Ext.data.JsonP.Ext_chart_series_Series({
  "tagname": "class",
  "name": "Ext.chart.series.Series",
  "doc": "<p>Series is the abstract class containing the common logic to all chart series. Series includes\nmethods from Labels, Highlights, Tips and Callouts mixins. This class implements the logic of handling\nmouse events, animating, hiding, showing all elements and returning the color of the series to be used as a legend item.</p>\n\n<h2>Listeners</h2>\n\n<p>The series class supports listeners via the Observable syntax. Some of these listeners are:</p>\n\n<ul>\n<li><code>itemmouseup</code> When the user interacts with a marker.</li>\n<li><code>itemmousedown</code> When the user interacts with a marker.</li>\n<li><code>itemmousemove</code> When the user iteracts with a marker.</li>\n<li><code>afterrender</code> Will be triggered when the animation ends or when the series has been rendered completely.</li>\n</ul>\n\n\n<p>For example:</p>\n\n<pre><code>series: [{\n        type: 'column',\n        axis: 'left',\n        listeners: {\n                'afterrender': function() {\n                        console('afterrender');\n                }\n        },\n        xField: 'category',\n        yField: 'data1'\n}]\n</code></pre>\n",
  "extends": null,
  "mixins": [
    "Ext.util.Observable",
    "Ext.chart.Label",
    "Ext.chart.Highlight",
    "Ext.chart.Tip",
    "Ext.chart.Callout"
  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "color",
      "member": "Ext.chart.Label",
      "type": "String",
      "doc": "<p>The color of the label text.\nDefault value: '#000' (black).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Label.js",
      "linenr": 42,
      "html_filename": "Label2.html",
      "href": "Label2.html#Ext-chart-Label-cfg-color"
    },
    {
      "tagname": "cfg",
      "name": "display",
      "member": "Ext.chart.Label",
      "type": "String",
      "doc": "<p>Specifies the presence and position of labels for each pie slice. Either \"rotate\", \"middle\", \"insideStart\",\n\"insideEnd\", \"outside\", \"over\", \"under\", or \"none\" to prevent label rendering.\nDefault value: 'none'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Label.js",
      "linenr": 35,
      "html_filename": "Label2.html",
      "href": "Label2.html#Ext-chart-Label-cfg-display",
      "shortDoc": "Specifies the presence and position of labels for each pie slice. Either \"rotate\", \"middle\", \"insideStart\",\n\"insideEn..."
    },
    {
      "tagname": "cfg",
      "name": "field",
      "member": "Ext.chart.Label",
      "type": "String",
      "doc": "<p>The name of the field to be displayed in the label.\nDefault value: 'name'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Label.js",
      "linenr": 48,
      "html_filename": "Label2.html",
      "href": "Label2.html#Ext-chart-Label-cfg-field"
    },
    {
      "tagname": "cfg",
      "name": "font",
      "member": "Ext.chart.Label",
      "type": "String",
      "doc": "<p>The font used for the labels.\nDefautl value: \"11px Helvetica, sans-serif\".</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Label.js",
      "linenr": 61,
      "html_filename": "Label2.html",
      "href": "Label2.html#Ext-chart-Label-cfg-font"
    },
    {
      "tagname": "cfg",
      "name": "highlight",
      "member": "Ext.chart.series.Series",
      "type": "Boolean|Object",
      "doc": "<p>If set to <code>true</code> it will highlight the markers or the series when hovering\nwith the mouse. This parameter can also be an object with the same style\nproperties you would apply to a <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a> to apply custom\nstyles to markers and series.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 46,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-cfg-highlight",
      "shortDoc": "If set to true it will highlight the markers or the series when hovering\nwith the mouse. This parameter can also be a..."
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.chart.series.Series",
      "type": "Object",
      "doc": "<p>An (optional) object with event callbacks. All event callbacks get the target <em>item</em> as first parameter. The callback functions are:</p>\n\n<p> <ul></p>\n\n<pre><code> &lt;li&gt;itemmouseover&lt;/li&gt;\n &lt;li&gt;itemmouseout&lt;/li&gt;\n &lt;li&gt;itemmousedown&lt;/li&gt;\n &lt;li&gt;itemmouseup&lt;/li&gt;\n</code></pre>\n\n<p> </ul></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 105,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-cfg-listeners",
      "shortDoc": "An (optional) object with event callbacks. All event callbacks get the target item as first parameter. The callback f..."
    },
    {
      "tagname": "cfg",
      "name": "minMargin",
      "member": "Ext.chart.Label",
      "type": "Number",
      "doc": "<p>Specifies the minimum distance from a label to the origin of the visualization.\nThis parameter is useful when using PieSeries width variable pie slice lengths.\nDefault value: 50.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Label.js",
      "linenr": 54,
      "html_filename": "Label2.html",
      "href": "Label2.html#Ext-chart-Label-cfg-minMargin",
      "shortDoc": "Specifies the minimum distance from a label to the origin of the visualization.\nThis parameter is useful when using P..."
    },
    {
      "tagname": "cfg",
      "name": "orientation",
      "member": "Ext.chart.Label",
      "type": "String",
      "doc": "<p>Either \"horizontal\" or \"vertical\".\nDafault value: \"horizontal\".</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Label.js",
      "linenr": 67,
      "html_filename": "Label2.html",
      "href": "Label2.html#Ext-chart-Label-cfg-orientation"
    },
    {
      "tagname": "cfg",
      "name": "renderer",
      "member": "Ext.chart.series.Series",
      "type": "Function",
      "doc": "<p>A function that can be overridden to set custom styling properties to each rendered element.\nPasses in (sprite, record, attributes, index, store) to the function.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 87,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-cfg-renderer",
      "shortDoc": "A function that can be overridden to set custom styling properties to each rendered element.\nPasses in (sprite, recor..."
    },
    {
      "tagname": "cfg",
      "name": "shadowAttributes",
      "member": "Ext.chart.series.Series",
      "type": "Array",
      "doc": "<p>An array with shadow attributes</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 96,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-cfg-shadowAttributes"
    },
    {
      "tagname": "cfg",
      "name": "showInLegend",
      "member": "Ext.chart.series.Series",
      "type": "Boolean",
      "doc": "<p>Whether to show this series in the legend.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 81,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-cfg-showInLegend"
    },
    {
      "tagname": "cfg",
      "name": "tips",
      "member": "Ext.chart.series.Series",
      "type": "Object",
      "doc": "<p>Add tooltips to the visualization's markers. The options for the tips are the\nsame configuration used with <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">Ext.tip.ToolTip</a>. For example:</p>\n\n<pre><code>tips: {\n  trackMouse: true,\n  width: 140,\n  height: 28,\n  renderer: function(storeItem, item) {\n    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' views');\n  }\n},\n</code></pre>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 54,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-cfg-tips",
      "shortDoc": "Add tooltips to the visualization's markers. The options for the tips are the\nsame configuration used with Ext.tip.To..."
    },
    {
      "tagname": "cfg",
      "name": "title",
      "member": "Ext.chart.series.Series",
      "type": "String",
      "doc": "<p>The human-readable name of the series.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 75,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-cfg-title"
    },
    {
      "tagname": "cfg",
      "name": "type",
      "member": "Ext.chart.series.Series",
      "type": "String",
      "doc": "<p>The type of series. Set in subclasses.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 69,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-cfg-type"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "addEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
      "params": [
        {
          "type": "Object/String",
          "name": "o",
          "doc": "<p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "",
          "doc": "<p>[additional] Optional additional event names if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 452,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addEvents",
      "shortDoc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Appends an event handler to this object.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to listen for. May also be an object who's property names are event names. See</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The method the event invokes.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n<li><b>element</b> : String<div class=\"sub-desc\"><b>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</b>\nThe name of a Component property which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which\nwill exist only after the Component is rendered. For example, to add a click listener to a Panel's body:\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></p>\n\n\n<p>When added in this way, the options available are the options applicable to <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a></p>\n\n\n<p></div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myPanel.on('hide', this.handleClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple events. For example:\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>.\n<p>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 271,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addListener",
      "shortDoc": "<p>Appends an event handler to this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addManagedListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component\nis destroyed.\n\n",
      "params": [
        {
          "type": "Observable/Element",
          "name": "item",
          "doc": "<p>The item to which to add a listener/listeners.</p>\n",
          "optional": false
        },
        {
          "type": "Object/String",
          "name": "ename",
          "doc": "<p>The event name, or an object containing event name properties.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "opt",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 155,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
      "shortDoc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component\nis destroyed.\n\n"
    },
    {
      "tagname": "method",
      "name": "capture",
      "member": "Ext.util.Observable",
      "doc": "<p>Starts capture on the specified Observable. All events will be passed\nto the supplied function with the event name + standard signature of the event\n<b>before</b> the event is fired. If the supplied function returns false,\nthe event will not fire.</p>\n",
      "params": [
        {
          "type": "Observable",
          "name": "o",
          "doc": "<p>The Observable to capture events from.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call when an event is fired.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Observable firing the event.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 55,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-capture",
      "shortDoc": "Starts capture on the specified Observable. All events will be passed\nto the supplied function with the event name + ..."
    },
    {
      "tagname": "method",
      "name": "clearListeners",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 383,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-clearListeners",
      "shortDoc": "<p>Removes all listeners for this object including the managed listeners</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearManagedListeners",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes all managed listeners for this object.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 412,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
      "shortDoc": "<p>Removes all managed listeners for this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "enableBubble",
      "member": "Ext.util.Observable",
      "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default\nimplementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n//  Add functionality to Field&#39;s initComponent to enable the change event to bubble\ninitComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n    this.enableBubble('change');\n}),\n\n//  We know that we want Field&#39;s events to bubble directly to the FormPanel.\ngetBubbleTarget : function() {\n    if (!this.formPanel) {\n        this.formPanel = this.findParentByType('form');\n    }\n    return this.formPanel;\n}\n});\n\nvar myForm = new Ext.formPanel({\ntitle: 'User Details',\nitems: [{\n    ...\n}],\nlisteners: {\n    change: function() {\n        // Title goes red if form has been modified.\n        myForm.header.setStyle('color', 'red');\n    }\n}\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "String/Array",
          "name": "events",
          "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 554,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-enableBubble",
      "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present...."
    },
    {
      "tagname": "method",
      "name": "fireEvent",
      "member": "Ext.util.Observable",
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.chart.series.Series-method-enableBubble\" rel=\"Ext.chart.series.Series-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to fire.</p>\n",
          "optional": false
        },
        {
          "type": "Object...",
          "name": "args",
          "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 232,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-fireEvent",
      "shortDoc": "Fires the specified event with the passed parameters (minus the event name).\n\n\nAn event may be set to bubble up an Ob..."
    },
    {
      "tagname": "method",
      "name": "getItemForPoint",
      "member": "Ext.chart.series.Series",
      "doc": "<p>For a given x/y point relative to the Surface, find a corresponding item from this\nseries, if any.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "x",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "y",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object describing the item, or null if there is no matching item. The exact contents of</p>\n\n<pre><code>             this object will vary by series type, but should always contain at least the following:\n             &lt;ul&gt;\n               &lt;li&gt;{Ext.chart.series.Series} series - the Series object to which the item belongs&lt;/li&gt;\n               &lt;li&gt;{Object} value - the value(s) of the item's data point&lt;/li&gt;\n               &lt;li&gt;{Array} point - the x/y coordinates relative to the chart box of a single point\n                   for this data item, which can be used as e.g. a tooltip anchor point.&lt;/li&gt;\n               &lt;li&gt;{Ext.draw.Sprite} sprite - the item's rendering Sprite.\n             &lt;/ul&gt;\n</code></pre>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 241,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-method-getItemForPoint",
      "shortDoc": "<p>For a given x/y point relative to the Surface, find a corresponding item from this\nseries, if any.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getLegendColor",
      "member": "Ext.chart.series.Series",
      "doc": "<p>Returns a string with the color to be used for the series legend item.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "index",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 321,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-method-getLegendColor",
      "shortDoc": "<p>Returns a string with the color to be used for the series legend item.</p>\n"
    },
    {
      "tagname": "method",
      "name": "hasListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to check for</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the event is being listened for, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 480,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-hasListener",
      "shortDoc": "<p>Checks to see if this object has any listeners for a specified event</p>\n"
    },
    {
      "tagname": "method",
      "name": "hideAll",
      "member": "Ext.chart.series.Series",
      "doc": "<p>Hides all the elements in the series.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 282,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-method-hideAll",
      "shortDoc": "<p>Hides all the elements in the series.</p>\n"
    },
    {
      "tagname": "method",
      "name": "highlightItem",
      "member": "Ext.chart.Highlight",
      "doc": "<p>Highlight the given series item.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "item",
          "doc": "<p>Info about the item; same format as returned by #getItemForPoint.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Highlight.js",
      "linenr": 38,
      "html_filename": "Highlight.html",
      "href": "Highlight.html#Ext-chart-Highlight-method-highlightItem",
      "shortDoc": "<p>Highlight the given series item.</p>\n"
    },
    {
      "tagname": "method",
      "name": "observe",
      "member": "Ext.util.Observable",
      "doc": "<p>Sets observability on the passed class constructor.</p>\n\n<p>This makes any event fired on any instance of the passed class also fire a single event through\nthe <strong>class</strong> allowing for central handling of events on many instances at once.</p>\n\n<p>Usage:</p>\n\n<pre><code>Ext.util.Observable.observe(Ext.data.Connection);\nExt.data.Connection.on('beforerequest', function(con, options) {\n    console.log('Ajax request made to ' + options.url);\n});\n</code></pre>\n",
      "params": [
        {
          "type": "Function",
          "name": "c",
          "doc": "<p>The class constructor to make observable.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "listeners",
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.chart.series.Series-method-addListener\" rel=\"Ext.chart.series.Series-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 69,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-observe",
      "shortDoc": "Sets observability on the passed class constructor.\n\nThis makes any event fired on any instance of the passed class a..."
    },
    {
      "tagname": "method",
      "name": "on",
      "member": "Ext.util.Observable",
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.chart.series.Series-method-addListener\" rel=\"Ext.chart.series.Series-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event to listen for</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The method the event invokes</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 616,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-on",
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.chart.series.Series-method-addListener\" rel=\"Ext.chart.series.Series-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "relayEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code><b>this</b></code>.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "origin",
          "doc": "<p>The Observable whose events this object is to relay.</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "events",
          "doc": "<p>Array of event names to relay.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "prefix",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 520,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-relayEvents",
      "shortDoc": "<p>Relays selected events from the specified Observable as if the events were fired by <code><b>this</b></code>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "releaseCapture",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes <b>all</b> added captures from the Observable.</p>\n",
      "params": [
        {
          "type": "Observable",
          "name": "o",
          "doc": "<p>The Observable to release</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 46,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-releaseCapture",
      "shortDoc": "<p>Removes <b>all</b> added captures from the Observable.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event the handler was associated with.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.chart.series.Series-method-addListener\" rel=\"Ext.chart.series.Series-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 352,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-removeListener",
      "shortDoc": "<p>Removes an event handler.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeManagedListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.chart.series.Series--mon\" rel=\"Ext.chart.series.Series--mon\" class=\"docClass\">mon</a> method.</p>\n",
      "params": [
        {
          "type": "Observable|Element",
          "name": "item",
          "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
          "optional": false
        },
        {
          "type": "Object|String",
          "name": "ename",
          "doc": "<p>The event name, or an object containing event name properties.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 196,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.chart.series.Series--mon\" rel=\"Ext.chart.series.Series--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.chart.series.Series-method-suspendEvents\" rel=\"Ext.chart.series.Series-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 502,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
      "shortDoc": "Resume firing events. (see suspendEvents)\nIf events were suspended using the queueSuspended parameter, then all\nevent..."
    },
    {
      "tagname": "method",
      "name": "setTitle",
      "member": "Ext.chart.series.Series",
      "doc": "<p>Changes the value of the <a href=\"#/api/Ext.chart.series.Series-cfg-title\" rel=\"Ext.chart.series.Series-cfg-title\" class=\"docClass\">title</a> for the series.\nArguments can take two forms:</p>\n\n<ul>\n<li>A single String value: this will be used as the new single title for the series (applies\nto series with only one yField)</li>\n<li>A numeric index and a String value: this will set the title for a single indexed yField.</li>\n</ul>\n\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "title",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 350,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-method-setTitle",
      "shortDoc": "Changes the value of the title for the series.\nArguments can take two forms:\n\n\nA single String value: this will be us..."
    },
    {
      "tagname": "method",
      "name": "showAll",
      "member": "Ext.chart.series.Series",
      "doc": "<p>Shows all the elements in the series.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 308,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-method-showAll",
      "shortDoc": "<p>Shows all the elements in the series.</p>\n"
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.chart.series.Series-method-resumeEvents\" rel=\"Ext.chart.series.Series-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.chart.series.Series-method-resumeEvents\" rel=\"Ext.chart.series.Series-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 490,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.chart.series.Series-method-resumeEvents\" rel=\"Ext.chart.series.Series-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.chart.series.Series-method-removeListener\" rel=\"Ext.chart.series.Series-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event the handler was associated with.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.chart.series.Series-method-addListener\" rel=\"Ext.chart.series.Series-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 608,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-un",
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.chart.series.Series-method-removeListener\" rel=\"Ext.chart.series.Series-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "unHighlightItem",
      "member": "Ext.chart.Highlight",
      "doc": "<p>Un-highlight any existing highlights</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Highlight.js",
      "linenr": 109,
      "html_filename": "Highlight.html",
      "href": "Highlight.html#Ext-chart-Highlight-method-unHighlightItem",
      "shortDoc": "<p>Un-highlight any existing highlights</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "highlight",
      "member": "Ext.chart.Highlight",
      "type": "Boolean",
      "doc": "<p>Highlight the given series item.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Highlight.js",
      "linenr": 13,
      "html_filename": "Highlight.html",
      "href": "Highlight.html#Ext-chart-Highlight-property-highlight"
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "titlechange",
      "member": "Ext.chart.series.Series",
      "doc": "<p>Fires when the series title is changed via <a href=\"#/api/Ext.chart.series.Series-method-setTitle\" rel=\"Ext.chart.series.Series-method-setTitle\" class=\"docClass\">setTitle</a>.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "title",
          "doc": "<p>The new title value</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index in the collection of titles</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
      "linenr": 139,
      "html_filename": "Series.html",
      "href": "Series.html#Ext-chart-series-Series-event-titlechange",
      "shortDoc": "<p>Fires when the series title is changed via <a href=\"#/api/Ext.chart.series.Series-method-setTitle\" rel=\"Ext.chart.series.Series-method-setTitle\" class=\"docClass\">setTitle</a>.</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/series/Series.js",
  "linenr": 1,
  "html_filename": "Series.html",
  "href": "Series.html#Ext-chart-series-Series",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.chart.series.Cartesian",
    "Ext.chart.series.Gauge",
    "Ext.chart.series.Pie",
    "Ext.chart.series.Radar"
  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Observable",
    "Ext.chart.Label",
    "Ext.chart.Highlight",
    "Ext.chart.Tip",
    "Ext.chart.Callout"
  ]
});