Ext.data.JsonP.Ext_chart_axis_Axis({
  "tagname": "class",
  "name": "Ext.chart.axis.Axis",
  "doc": "<p>Defines axis for charts. The axis position, type, style can be configured.\nThe axes are defined in an axes array of configuration objects where the type,\nfield, grid and other configuration options can be set. To know more about how\nto create a Chart please check the Chart class documentation. Here's an example for the axes part:\nAn example of axis for a series (in this case for an area chart that has multiple layers of yFields) could be:</p>\n\n<pre><code>axes: [{\n    type: 'Numeric',\n    grid: true,\n    position: 'left',\n    fields: ['data1', 'data2', 'data3'],\n    title: 'Number of Hits',\n    grid: {\n        odd: {\n            opacity: 1,\n            fill: '#ddd',\n            stroke: '#bbb',\n            'stroke-width': 1\n        }\n    },\n    minimum: 0\n}, {\n    type: 'Category',\n    position: 'bottom',\n    fields: ['name'],\n    title: 'Month of the Year',\n    grid: true,\n    label: {\n        rotate: {\n            degrees: 315\n        }\n    }\n}]\n</code></pre>\n\n<p>In this case we use a <code>Numeric</code> axis for displaying the values of the Area series and a <code>Category</code> axis for displaying the names of\nthe store elements. The numeric axis is placed on the left of the screen, while the category axis is placed at the bottom of the chart.\nBoth the category and numeric axes have <code>grid</code> set, which means that horizontal and vertical lines will cover the chart background. In the\ncategory axis the labels will be rotated so they can fit the space better.</p>\n",
  "extends": "Ext.chart.axis.Abstract",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.chart.Axis"
  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "dashSize",
      "member": "Ext.chart.axis.Axis",
      "type": "Number",
      "doc": "<p>The size of the dash marker. Default's 3.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
      "linenr": 69,
      "html_filename": "Axis.html",
      "href": "Axis.html#Ext-chart-axis-Axis-cfg-dashSize"
    },
    {
      "tagname": "cfg",
      "name": "length",
      "member": "Ext.chart.axis.Axis",
      "type": "Number",
      "doc": "<p>Offset axis position. Default's 0.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
      "linenr": 84,
      "html_filename": "Axis.html",
      "href": "Axis.html#Ext-chart-axis-Axis-cfg-length"
    },
    {
      "tagname": "cfg",
      "name": "majorTickSteps",
      "member": "Ext.chart.axis.Axis",
      "type": "Number",
      "doc": "<p>If <code>minimum</code> and <code>maximum</code> are specified it forces the number of major ticks to the specified value.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
      "linenr": 56,
      "html_filename": "Axis.html",
      "href": "Axis.html#Ext-chart-axis-Axis-cfg-majorTickSteps"
    },
    {
      "tagname": "cfg",
      "name": "minorTickSteps",
      "member": "Ext.chart.axis.Axis",
      "type": "Number",
      "doc": "<p>The number of small ticks between two major ticks. Default is zero.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
      "linenr": 61,
      "html_filename": "Axis.html",
      "href": "Axis.html#Ext-chart-axis-Axis-cfg-minorTickSteps"
    },
    {
      "tagname": "cfg",
      "name": "position",
      "member": "Ext.chart.axis.Axis",
      "type": "String",
      "doc": "<p>Where to set the axis. Available options are <code>left</code>, <code>bottom</code>, <code>right</code>, <code>top</code>. Default's <code>bottom</code>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
      "linenr": 75,
      "html_filename": "Axis.html",
      "href": "Axis.html#Ext-chart-axis-Axis-cfg-position"
    },
    {
      "tagname": "cfg",
      "name": "width",
      "member": "Ext.chart.axis.Axis",
      "type": "Number",
      "doc": "<p>Offset axis width. Default's 0.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
      "linenr": 90,
      "html_filename": "Axis.html",
      "href": "Axis.html#Ext-chart-axis-Axis-cfg-width"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "drawAxis",
      "member": "Ext.chart.axis.Axis",
      "doc": "<p>Renders the axis into the screen and updates it's position.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "init",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
      "linenr": 199,
      "html_filename": "Axis.html",
      "href": "Axis.html#Ext-chart-axis-Axis-method-drawAxis",
      "shortDoc": "<p>Renders the axis into the screen and updates it's position.</p>\n"
    },
    {
      "tagname": "method",
      "name": "drawGrid",
      "member": "Ext.chart.axis.Axis",
      "doc": "<p>Renders an horizontal and/or vertical grid into the Surface.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
      "linenr": 333,
      "html_filename": "Axis.html",
      "href": "Axis.html#Ext-chart-axis-Axis-method-drawGrid",
      "shortDoc": "<p>Renders an horizontal and/or vertical grid into the Surface.</p>\n"
    },
    {
      "tagname": "method",
      "name": "drawLabel",
      "member": "Ext.chart.axis.Axis",
      "doc": "<p>Renders the labels in the axes.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
      "linenr": 647,
      "html_filename": "Axis.html",
      "href": "Axis.html#Ext-chart-axis-Axis-method-drawLabel",
      "shortDoc": "<p>Renders the labels in the axes.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setTitle",
      "member": "Ext.chart.axis.Axis",
      "doc": "<p>Updates the <a href=\"#/api/Ext.chart.axis.Axis--title\" rel=\"Ext.chart.axis.Axis--title\" class=\"docClass\">title</a> of this axis.</p>\n",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
      "linenr": 708,
      "html_filename": "Axis.html",
      "href": "Axis.html#Ext-chart-axis-Axis-method-setTitle",
      "shortDoc": "<p>Updates the <a href=\"#/api/Ext.chart.axis.Axis--title\" rel=\"Ext.chart.axis.Axis--title\" class=\"docClass\">title</a> of this axis.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Axis.js",
  "linenr": 1,
  "html_filename": "Axis.html",
  "href": "Axis.html#Ext-chart-axis-Axis",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.chart.axis.Abstract"
  ],
  "subclasses": [
    "Ext.chart.axis.Category",
    "Ext.chart.axis.Numeric",
    "Ext.chart.axis.Time"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});