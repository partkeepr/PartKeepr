Ext.data.JsonP.Ext_chart_Legend({
  "tagname": "class",
  "name": "Ext.chart.Legend",
  "doc": "<p>Defines a legend for a chart's series.\nThe 'chart' member must be set prior to rendering.\nThe legend class displays a list of legend items each of them related with a\nseries being rendered. In order to render the legend item of the proper series\nthe series configuration object must have <code>showInSeries</code> set to true.</p>\n\n<p>The legend configuration object accepts a <code>position</code> as parameter.\nThe <code>position</code> parameter can be <code>left</code>, <code>right</code>\n<code>top</code> or <code>bottom</code>. For example:</p>\n\n<pre><code>legend: {\n    position: 'right'\n},\n</code></pre>\n\n<p>Full example:</p>\n\n<pre><code>    var store = Ext.create('Ext.data.JsonStore', {\n        fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],\n        data: [\n            {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},\n            {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},\n            {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},\n            {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},\n            {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}                                                \n        ]\n    });\n    \n    Ext.create('Ext.chart.Chart', {\n        renderTo: Ext.getBody(),\n        width: 500,\n        height: 300,\n        animate: true,\n        store: store,\n        shadow: true,\n        theme: 'Category1',\n        legend: {\n            position: 'top'\n        },\n         axes: [{\n                type: 'Numeric',\n                grid: true,\n                position: 'left',\n                fields: ['data1', 'data2', 'data3', 'data4', 'data5'],\n                title: 'Sample Values',\n                grid: {\n                    odd: {\n                        opacity: 1,\n                        fill: '#ddd',\n                        stroke: '#bbb',\n                        'stroke-width': 1\n                    }\n                },\n                minimum: 0,\n                adjustMinimumByMajorUnit: 0\n            }, {\n                type: 'Category',\n                position: 'bottom',\n                fields: ['name'],\n                title: 'Sample Metrics',\n                grid: true,\n                label: {\n                    rotate: {\n                        degrees: 315\n                    }\n                }\n        }],\n        series: [{\n            type: 'area',\n            highlight: false,\n            axis: 'left',\n            xField: 'name',\n            yField: ['data1', 'data2', 'data3', 'data4', 'data5'],\n            style: {\n                opacity: 0.93\n            }\n        }]\n    });    \n    </code></pre>\n\n",
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
      "name": "boxFill",
      "member": "Ext.chart.Legend",
      "type": "String",
      "doc": "<p>Fill style for the legend box</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 139,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-boxFill"
    },
    {
      "tagname": "cfg",
      "name": "boxStroke",
      "member": "Ext.chart.Legend",
      "type": "String",
      "doc": "<p>Style of the stroke for the legend box</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 127,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-boxStroke"
    },
    {
      "tagname": "cfg",
      "name": "boxStrokeWidth",
      "member": "Ext.chart.Legend",
      "type": "String",
      "doc": "<p>Width of the stroke for the legend box</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 133,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-boxStrokeWidth"
    },
    {
      "tagname": "cfg",
      "name": "boxZIndex",
      "member": "Ext.chart.Legend",
      "type": "Number",
      "doc": "<p>Sets the z-index for the legend. Defaults to 100.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 162,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-boxZIndex"
    },
    {
      "tagname": "cfg",
      "name": "itemSpacing",
      "member": "Ext.chart.Legend",
      "type": "Number",
      "doc": "<p>Amount of space between legend items</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 145,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-itemSpacing"
    },
    {
      "tagname": "cfg",
      "name": "labelFont",
      "member": "Ext.chart.Legend",
      "type": "String",
      "doc": "<p>Font to be used for the legend labels, eg '12px Helvetica'</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 121,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-labelFont"
    },
    {
      "tagname": "cfg",
      "name": "padding",
      "member": "Ext.chart.Legend",
      "type": "Number",
      "doc": "<p>Amount of padding between the legend box's border and its items</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 151,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-padding"
    },
    {
      "tagname": "cfg",
      "name": "position",
      "member": "Ext.chart.Legend",
      "type": "String",
      "doc": "<p>The position of the legend in relation to the chart. One of: \"top\",\n\"bottom\", \"left\", \"right\", or \"float\". If set to \"float\", then the legend\nbox will be positioned at the point denoted by the x and y parameters.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 99,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-position",
      "shortDoc": "The position of the legend in relation to the chart. One of: \"top\",\n\"bottom\", \"left\", \"right\", or \"float\". If set to ..."
    },
    {
      "tagname": "cfg",
      "name": "visible",
      "member": "Ext.chart.Legend",
      "type": "Boolean",
      "doc": "<p>Whether or not the legend should be displayed.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 93,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-visible"
    },
    {
      "tagname": "cfg",
      "name": "x",
      "member": "Ext.chart.Legend",
      "type": "Number",
      "doc": "<p>X-position of the legend box. Used directly if position is set to \"float\", otherwise\nit will be calculated dynamically.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 107,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-x"
    },
    {
      "tagname": "cfg",
      "name": "y",
      "member": "Ext.chart.Legend",
      "type": "Number",
      "doc": "<p>Y-position of the legend box. Used directly if position is set to \"float\", otherwise\nit will be calculated dynamically.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 114,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-cfg-y"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Legend",
      "member": "Ext.chart.Legend",
      "doc": "\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 1,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-method-constructor",
      "shortDoc": "\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "isVertical",
      "member": "Ext.chart.Legend",
      "type": "Boolean",
      "doc": "<p>Whether the legend box is oriented vertically, i.e. if it is on the left or right side or floating.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
      "linenr": 174,
      "html_filename": "Legend.html",
      "href": "Legend.html#Ext-chart-Legend-property-isVertical"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Legend.js",
  "linenr": 1,
  "html_filename": "Legend.html",
  "href": "Legend.html#Ext-chart-Legend",
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

  ],
  "allMixins": [

  ]
});