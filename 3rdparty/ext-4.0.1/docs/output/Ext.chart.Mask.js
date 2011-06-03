Ext.data.JsonP.Ext_chart_Mask({
  "tagname": "class",
  "name": "Ext.chart.Mask",
  "doc": "<p>Defines a mask for a chart's series.\nThe 'chart' member must be set prior to rendering.</p>\n\n<p>A Mask can be used to select a certain region in a chart.\nWhen enabled, the <code>select</code> event will be triggered when a\nregion is selected by the mask, allowing the user to perform\nother tasks like zooming on that region, etc.</p>\n\n<p>In order to use the mask one has to set the Chart <code>mask</code> option to\n<code>true</code>, <code>vertical</code> or <code>horizontal</code>. Then a possible configuration for the\nlistener could be:</p>\n\n<pre><code>    items: {\n        xtype: 'chart',\n        animate: true,\n        store: store1,\n        mask: 'horizontal',\n        listeners: {\n            select: {\n                fn: function(me, selection) {\n                    me.setZoom(selection);\n                    me.mask.hide();\n                }\n            }\n        },\n</code></pre>\n\n<p>In this example we zoom the chart to that particular region. You can also get\na handle to a mask instance from the chart object. The <code>chart.mask</code> element is a\n<code>Ext.Panel</code>.</p>\n",
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

  ],
  "method": [
    {
      "tagname": "method",
      "name": "Mask",
      "member": "Ext.chart.Mask",
      "doc": "\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Mask.js",
      "linenr": 1,
      "html_filename": "Mask.html",
      "href": "Mask.html#Ext-chart-Mask-method-constructor",
      "shortDoc": "\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/chart/Mask.js",
  "linenr": 1,
  "html_filename": "Mask.html",
  "href": "Mask.html#Ext-chart-Mask",
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
    "Ext.chart.Chart"
  ],
  "allMixins": [

  ]
});