Ext.data.JsonP.Ext_chart_axis_Category({
  "tagname": "class",
  "name": "Ext.chart.axis.Category",
  "doc": "<p>A type of axis that displays items in categories. This axis is generally used to\ndisplay categorical information like names of items, month names, quarters, etc.\nbut no quantitative values. For that other type of information <em>Number</em>\naxis are more suitable.</p>\n\n<p>As with other axis you can set the position of the axis and its title. For example:</p>\n\n<p><p><img src=\"doc-resources/Ext.chart.axis.Category/Ext.chart.axis.Category.png\" alt=\"Ext.chart.axis.Category chart axis\"></p></p>\n\n<pre><code>var store = Ext.create('Ext.data.JsonStore', {\n    fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],\n    data: [\n        {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},\n        {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},\n        {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},\n        {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},\n        {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}                                                \n    ]\n});\n\nExt.create('Ext.chart.Chart', {\n    renderTo: Ext.getBody(),\n    width: 500,\n    height: 300,\n    store: store,\n    axes: [{\n        type: 'Numeric',\n        grid: true,\n        position: 'left',\n        fields: ['data1', 'data2', 'data3', 'data4', 'data5'],\n        title: 'Sample Values',\n        grid: {\n            odd: {\n                opacity: 1,\n                fill: '#ddd',\n                stroke: '#bbb',\n                'stroke-width': 1\n            }\n        },\n        minimum: 0,\n        adjustMinimumByMajorUnit: 0\n    }, {\n        type: 'Category',\n        position: 'bottom',\n        fields: ['name'],\n        title: 'Sample Metrics',\n        grid: true,\n        label: {\n            rotate: {\n                degrees: 315\n            }\n        }\n    }],\n    series: [{\n        type: 'area',\n        highlight: false,\n        axis: 'left',\n        xField: 'name',\n        yField: ['data1', 'data2', 'data3', 'data4', 'data5'],\n        style: {\n            opacity: 0.93\n        }\n    }]\n});\n</code></pre>\n\n<p>In this example with set the category axis to the bottom of the surface, bound the axis to\nthe <em>name</em> property and set as title <em>Month of the Year</em>.</p>\n",
  "extends": "Ext.chart.axis.Axis",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.chart.CategoryAxis"
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
      "doc": "<p>Updates the <a href=\"#/api/Ext.chart.axis.Category--title\" rel=\"Ext.chart.axis.Category--title\" class=\"docClass\">title</a> of this axis.</p>\n",
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
      "shortDoc": "<p>Updates the <a href=\"#/api/Ext.chart.axis.Category--title\" rel=\"Ext.chart.axis.Category--title\" class=\"docClass\">title</a> of this axis.</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "calculateCategoryCount",
      "member": "Ext.chart.axis.Category",
      "type": "Boolean",
      "doc": "<p>Indicates whether or not to calculate the number of categories (ticks and\nlabels) when there is not enough room to display all labels on the axis.\nIf set to true, the axis will determine the number of categories to plot.\nIf not, all categories will be plotted.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Category.js",
      "linenr": 94,
      "html_filename": "Category.html",
      "href": "Category.html#Ext-chart-axis-Category-property-calculateCategoryCount",
      "shortDoc": "Indicates whether or not to calculate the number of categories (ticks and\nlabels) when there is not enough room to di..."
    },
    {
      "tagname": "property",
      "name": "categoryNames",
      "member": "Ext.chart.axis.Category",
      "type": "Array",
      "doc": "<p>A list of category names to display along this axis.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Category.js",
      "linenr": 86,
      "html_filename": "Category.html",
      "href": "Category.html#Ext-chart-axis-Category-property-categoryNames"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Category.js",
  "linenr": 1,
  "html_filename": "Category.html",
  "href": "Category.html#Ext-chart-axis-Category",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.chart.axis.Abstract",
    "Ext.chart.axis.Axis"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});