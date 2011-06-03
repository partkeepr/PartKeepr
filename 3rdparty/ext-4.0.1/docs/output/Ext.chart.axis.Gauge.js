Ext.data.JsonP.Ext_chart_axis_Gauge({
  "tagname": "class",
  "name": "Ext.chart.axis.Gauge",
  "doc": "<p>Gauge Axis is the axis to be used with a Gauge series. The Gauge axis\ndisplays numeric data from an interval defined by the <code>minimum</code>, <code>maximum</code> and\n<code>step</code> configuration properties. The placement of the numeric data can be changed\nby altering the <code>margin</code> option that is set to <code>10</code> by default.</p>\n\n<p>A possible configuration for this axis would look like:</p>\n\n<pre><code>axes: [{\n    type: 'gauge',\n    position: 'gauge',\n    minimum: 0,\n    maximum: 100,\n    steps: 10,\n    margin: 7\n}],\n</code></pre>\n",
  "extends": "Ext.chart.axis.Abstract",
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
      "name": "margin",
      "member": "Ext.chart.axis.Gauge",
      "type": "Number",
      "doc": "<p>(optional) the offset positioning of the tick marks and labels in pixels. Default's 10.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Gauge.js",
      "linenr": 41,
      "html_filename": "Gauge.html",
      "href": "Gauge.html#Ext-chart-axis-Gauge-cfg-margin"
    },
    {
      "tagname": "cfg",
      "name": "maximum",
      "member": "Ext.chart.axis.Gauge",
      "type": "Number",
      "doc": "<p>(required) the maximum value of the interval to be displayed in the axis.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Gauge.js",
      "linenr": 33,
      "html_filename": "Gauge.html",
      "href": "Gauge.html#Ext-chart-axis-Gauge-cfg-maximum"
    },
    {
      "tagname": "cfg",
      "name": "minimum",
      "member": "Ext.chart.axis.Gauge",
      "type": "Number",
      "doc": "<p>(required) the minimum value of the interval to be displayed in the axis.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Gauge.js",
      "linenr": 29,
      "html_filename": "Gauge.html",
      "href": "Gauge.html#Ext-chart-axis-Gauge-cfg-minimum"
    },
    {
      "tagname": "cfg",
      "name": "steps",
      "member": "Ext.chart.axis.Gauge",
      "type": "Number",
      "doc": "<p>(required) the number of steps and tick marks to add to the interval.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Gauge.js",
      "linenr": 37,
      "html_filename": "Gauge.html",
      "href": "Gauge.html#Ext-chart-axis-Gauge-cfg-steps"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "setTitle",
      "member": "Ext.chart.axis.Gauge",
      "doc": "<p>Updates the <a href=\"#/api/Ext.chart.axis.Gauge--title\" rel=\"Ext.chart.axis.Gauge--title\" class=\"docClass\">title</a> of this axis.</p>\n",
      "params": [
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Gauge.js",
      "linenr": 130,
      "html_filename": "Gauge.html",
      "href": "Gauge.html#Ext-chart-axis-Gauge-method-setTitle",
      "shortDoc": "<p>Updates the <a href=\"#/api/Ext.chart.axis.Gauge--title\" rel=\"Ext.chart.axis.Gauge--title\" class=\"docClass\">title</a> of this axis.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Gauge.js",
  "linenr": 1,
  "html_filename": "Gauge.html",
  "href": "Gauge.html#Ext-chart-axis-Gauge",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.chart.axis.Abstract"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});