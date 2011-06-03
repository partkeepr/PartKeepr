Ext.data.JsonP.Ext_chart_Label({
  "tagname": "class",
  "name": "Ext.chart.Label",
  "doc": "<p>Labels is a mixin whose methods are appended onto the Series class. Labels is an interface with methods implemented\nin each of the Series (Pie, Bar, etc) for label creation and label placement.</p>\n\n<p>The methods implemented by the Series are:</p>\n\n<ul>\n<li><p><strong><code>onCreateLabel(storeItem, item, i, display)</code></strong> Called each time a new label is created.\nThe arguments of the method are:</p>\n\n<ul>\n<li><em><code>storeItem</code></em> The element of the store that is related to the label sprite.</li>\n<li><em><code>item</code></em> The item related to the label sprite. An item is an object containing the position of the shape\nused to describe the visualization and also pointing to the actual shape (circle, rectangle, path, etc).</li>\n<li><em><code>i</code></em> The index of the element created (i.e the first created label, second created label, etc)</li>\n<li><em><code>display</code></em> The display type. May be <b>false</b> if the label is hidden</li>\n</ul>\n</li>\n<li><p><strong><code>onPlaceLabel(label, storeItem, item, i, display, animate)</code></strong> Called for updating the position of the label.\nThe arguments of the method are:</p>\n\n<ul>\n<li><em><code>label</code></em> The sprite label.</li></li>\n<li><em><code>storeItem</code></em> The element of the store that is related to the label sprite</li></li>\n<li><em><code>item</code></em> The item related to the label sprite. An item is an object containing the position of the shape\nused to describe the visualization and also pointing to the actual shape (circle, rectangle, path, etc).</li>\n<li><em><code>i</code></em> The index of the element to be updated (i.e. whether it is the first, second, third from the labelGroup)</li>\n<li><em><code>display</code></em> The display type. May be <b>false</b> if the label is hidden.</li>\n<li><em><code>animate</code></em> A boolean value to set or unset animations for the labels.</li>\n</ul>\n</li>\n</ul>\n\n",
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
      "member": "Ext.chart.Label",
      "type": "Function",
      "doc": "<p>Optional function for formatting the label into a displayable value.\nDefault value: function(v) { return v; }</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Label.js",
      "linenr": 73,
      "html_filename": "Label2.html",
      "href": "Label2.html#Ext-chart-Label-cfg-renderer"
    }
  ],
  "method": [

  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Label.js",
  "linenr": 1,
  "html_filename": "Label2.html",
  "href": "Label2.html#Ext-chart-Label",
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
    "Ext.chart.series.Series"
  ],
  "allMixins": [

  ]
});