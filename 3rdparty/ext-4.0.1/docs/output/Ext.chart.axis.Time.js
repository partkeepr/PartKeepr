Ext.data.JsonP.Ext_chart_axis_Time({
  "tagname": "class",
  "name": "Ext.chart.axis.Time",
  "doc": "<p>A type of axis whose units are measured in time values. Use this axis\nfor listing dates that you will want to group or dynamically change.\nIf you just want to display dates as categories then use the\nCategory class for axis instead.</p>\n\n<p>For example:</p>\n\n<pre><code>axes: [{\n    type: 'Time',\n    position: 'bottom',\n    fields: 'date',\n    title: 'Day',\n    dateFormat: 'M d',\n    groupBy: 'year,month,day',\n    aggregateOp: 'sum',\n\n    constrain: true,\n    fromDate: new Date('1/1/11'),\n    toDate: new Date('1/7/11')\n}]\n</code></pre>\n\n<p>In this example we're creating a time axis that has as title <em>Day</em>.\nThe field the axis is bound to is <code>date</code>.\nThe date format to use to display the text for the axis labels is <code>M d</code>\nwhich is a three letter month abbreviation followed by the day number.\nThe time axis will show values for dates between <code>fromDate</code> and <code>toDate</code>.\nSince <code>constrain</code> is set to true all other values for other dates not between\nthe fromDate and toDate will not be displayed.</p>\n",
  "extends": "Ext.chart.axis.Axis",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.chart.TimeAxis"
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
      "name": "Time",
      "member": "Ext.chart.axis.Time",
      "doc": "\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Time.js",
      "linenr": 1,
      "html_filename": "Time3.html",
      "href": "Time3.html#Ext-chart-axis-Time-method-constructor",
      "shortDoc": "\n"
    },
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
      "doc": "<p>Updates the <a href=\"#/api/Ext.chart.axis.Time--title\" rel=\"Ext.chart.axis.Time--title\" class=\"docClass\">title</a> of this axis.</p>\n",
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
      "shortDoc": "<p>Updates the <a href=\"#/api/Ext.chart.axis.Time--title\" rel=\"Ext.chart.axis.Time--title\" class=\"docClass\">title</a> of this axis.</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "aggregateOp",
      "member": "Ext.chart.axis.Time",
      "type": "String",
      "doc": "<p>Aggregation operation when grouping. Possible options are 'sum', 'avg', 'max', 'min'. Default's 'sum'.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Time.js",
      "linenr": 76,
      "html_filename": "Time3.html",
      "href": "Time3.html#Ext-chart-axis-Time-property-aggregateOp"
    },
    {
      "tagname": "property",
      "name": "calculateByLabelSize",
      "member": "Ext.chart.axis.Time",
      "type": "Boolean",
      "doc": "<p>The minimum value drawn by the axis. If not set explicitly, the axis\nminimum will be calculated automatically.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Time.js",
      "linenr": 50,
      "html_filename": "Time3.html",
      "href": "Time3.html#Ext-chart-axis-Time-property-calculateByLabelSize"
    },
    {
      "tagname": "property",
      "name": "constrain",
      "member": "Ext.chart.axis.Time",
      "type": "Boolean",
      "doc": "<p>If true, the values of the chart will be rendered only if they belong between the fromDate and toDate.\nIf false, the time axis will adapt to the new values by adding/removing steps.\nDefault's [Ext.Date.DAY, 1].</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Time.js",
      "linenr": 107,
      "html_filename": "Time3.html",
      "href": "Time3.html#Ext-chart-axis-Time-property-constrain",
      "shortDoc": "If true, the values of the chart will be rendered only if they belong between the fromDate and toDate.\nIf false, the ..."
    },
    {
      "tagname": "property",
      "name": "dateFormat",
      "member": "Ext.chart.axis.Time",
      "type": "String|Boolean",
      "doc": "<p>Indicates the format the date will be rendered on.\nFor example: 'M d' will render the dates as 'Jan 30', etc.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Time.js",
      "linenr": 58,
      "html_filename": "Time3.html",
      "href": "Time3.html#Ext-chart-axis-Time-property-dateFormat"
    },
    {
      "tagname": "property",
      "name": "fromDate",
      "member": "Ext.chart.axis.Time",
      "type": "Date",
      "doc": "<p>The starting date for the time axis.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Time.js",
      "linenr": 84,
      "html_filename": "Time3.html",
      "href": "Time3.html#Ext-chart-axis-Time-property-fromDate"
    },
    {
      "tagname": "property",
      "name": "step",
      "member": "Ext.chart.axis.Time",
      "type": "Array",
      "doc": "<p>An array with two components: The first is the unit of the step (day, month, year, etc). The second one is the number of units for the step (1, 2, etc.).\nDefault's [Ext.Date.DAY, 1].</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Time.js",
      "linenr": 98,
      "html_filename": "Time3.html",
      "href": "Time3.html#Ext-chart-axis-Time-property-step",
      "shortDoc": "An array with two components: The first is the unit of the step (day, month, year, etc). The second one is the number..."
    },
    {
      "tagname": "property",
      "name": "timeUnit",
      "member": "Ext.chart.axis.Time",
      "type": "String",
      "doc": "<p>Indicates the time unit to use for each step. Can be 'day', 'month', 'year' or a comma-separated combination of all of them.\nDefault's 'year,month,day'.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Time.js",
      "linenr": 67,
      "html_filename": "Time3.html",
      "href": "Time3.html#Ext-chart-axis-Time-property-timeUnit",
      "shortDoc": "Indicates the time unit to use for each step. Can be 'day', 'month', 'year' or a comma-separated combination of all o..."
    },
    {
      "tagname": "property",
      "name": "toDate",
      "member": "Ext.chart.axis.Time",
      "type": "Date",
      "doc": "<p>The ending date for the time axis.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Time.js",
      "linenr": 91,
      "html_filename": "Time3.html",
      "href": "Time3.html#Ext-chart-axis-Time-property-toDate"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/axis/Time.js",
  "linenr": 1,
  "html_filename": "Time3.html",
  "href": "Time3.html#Ext-chart-axis-Time",
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