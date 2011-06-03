Ext.data.JsonP.Ext_data_Types({
  "tagname": "class",
  "name": "Ext.data.Types",
  "doc": "<p>This is s static class containing the system-supplied data types which may be given to a <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a>.<p/>\n<p>The properties in this class are used as type indicators in the <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a> class, so to\ntest whether a Field is of a certain type, compare the <a href=\"#/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">type</a> property against properties\nof this class.</p>\n<p>Developers may add their own application-specific data types to this class. Definition names must be UPPERCASE.\neach type definition must contain three properties:</p>\n<div class=\"mdetail-params\"><ul>\n<li><code>convert</code> : <i>Function</i><div class=\"sub-desc\">A function to convert raw data values from a data block into the data\nto be stored in the Field. The function is passed the collowing parameters:\n<div class=\"mdetail-params\"><ul>\n<li><b>v</b> : Mixed<div class=\"sub-desc\">The data value as read by the Reader, if undefined will use\nthe configured <tt><a href=\"#/api/Ext.data.Field-cfg-defaultValue\" rel=\"Ext.data.Field-cfg-defaultValue\" class=\"docClass\">defaultValue</a></tt>.</div></li>\n<li><b>rec</b> : Mixed<div class=\"sub-desc\">The data object containing the row as read by the Reader.\nDepending on the Reader type, this could be an Array (<a href=\"#/api/Ext.data.reader.Array\" rel=\"Ext.data.reader.Array\" class=\"docClass\">ArrayReader</a>), an object\n(<a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">JsonReader</a>), or an XML element.</div></li>\n</ul></div></div></li>\n<li><code>sortType</code> : <i>Function</i> <div class=\"sub-desc\">A function to convert the stored data into comparable form, as defined by <a href=\"#/api/Ext.data.SortTypes\" rel=\"Ext.data.SortTypes\" class=\"docClass\">Ext.data.SortTypes</a>.</div></li>\n<li><code>type</code> : <i>String</i> <div class=\"sub-desc\">A textual data type name.</div></li>\n</ul></div>\n<p>For example, to create a VELatLong field (See the Microsoft Bing Mapping API) containing the latitude/longitude value of a datapoint on a map from a JsonReader data block\nwhich contained the properties <code>lat</code> and <code>long</code>, you would define a new data type like this:</p>\n<pre><code>// Add a new Field data type which stores a VELatLong object in the Record.\nExt.data.Types.VELATLONG = {\n    convert: function(v, data) {\n        return new VELatLong(data.lat, data.long);\n    },\n    sortType: function(v) {\n        return v.Latitude;  // When sorting, order by latitude\n    },\n    type: 'VELatLong'\n};\n</code></pre>\n<p>Then, when declaring a Model, use \n<pre><code>var types = Ext.data.Types; // allow shorthand type access\nExt.define('Unit',\n    extend: 'Ext.data.Model', \n    fields: [\n        { name: 'unitName', mapping: 'UnitName' },\n        { name: 'curSpeed', mapping: 'CurSpeed', type: types.INT },\n        { name: 'latitude', mapping: 'lat', type: types.FLOAT },\n        { name: 'latitude', mapping: 'lat', type: types.FLOAT },\n        { name: 'position', type: types.VELATLONG }\n    ]\n});\n</code></pre>\n\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [

  ],
  "property": [
    {
      "tagname": "property",
      "name": "AUTO",
      "member": "Ext.data.Types",
      "type": "Object.",
      "doc": "<p>This data type means that no conversion is applied to the raw data before it is placed into a Record.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
      "linenr": 66,
      "html_filename": "Types.html",
      "href": "Types.html#Ext-data-Types-property-AUTO"
    },
    {
      "tagname": "property",
      "name": "BOOL",
      "member": "Ext.data.Types",
      "type": "Object.",
      "doc": "<p>This data type means that the raw data is converted into a boolean before it is placed into\na Record. The string \"true\" and the number 1 are converted to boolean <code>true</code>.</p>\n\n\n<p>The synonym <code>BOOLEAN</code> is equivalent.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
      "linenr": 123,
      "html_filename": "Types.html",
      "href": "Types.html#Ext-data-Types-property-BOOL",
      "shortDoc": "This data type means that the raw data is converted into a boolean before it is placed into\na Record. The string \"tru..."
    },
    {
      "tagname": "property",
      "name": "BOOLEAN",
      "member": "Ext.data.Types",
      "type": "Object.",
      "doc": "<p>This data type means that the raw data is converted into a boolean before it is placed into\na Record. The string \"true\" and the number 1 are converted to boolean <code>true</code>.</p>\n\n\n<p>The synonym <code>BOOL</code> is equivalent.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
      "linenr": 176,
      "html_filename": "Types.html",
      "href": "Types.html#Ext-data-Types-property-BOOLEAN",
      "shortDoc": "This data type means that the raw data is converted into a boolean before it is placed into\na Record. The string \"tru..."
    },
    {
      "tagname": "property",
      "name": "DATE",
      "member": "Ext.data.Types",
      "type": "Object.",
      "doc": "<p>This data type means that the raw data is converted into a Date before it is placed into a Record.\nThe date format is specified in the constructor of the <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> to which this type is\nbeing applied.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
      "linenr": 141,
      "html_filename": "Types.html",
      "href": "Types.html#Ext-data-Types-property-DATE",
      "shortDoc": "This data type means that the raw data is converted into a Date before it is placed into a Record.\nThe date format is..."
    },
    {
      "tagname": "property",
      "name": "FLOAT",
      "member": "Ext.data.Types",
      "type": "Object.",
      "doc": "<p>This data type means that the raw data is converted into a number before it is placed into a Record.</p>\n\n<p>The synonym <code>NUMBER</code> is equivalent.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
      "linenr": 108,
      "html_filename": "Types.html",
      "href": "Types.html#Ext-data-Types-property-FLOAT",
      "shortDoc": "This data type means that the raw data is converted into a number before it is placed into a Record.\n\nThe synonym NUM..."
    },
    {
      "tagname": "property",
      "name": "INT",
      "member": "Ext.data.Types",
      "type": "Object.",
      "doc": "<p>This data type means that the raw data is converted into an integer before it is placed into a Record.</p>\n\n<p>The synonym <code>INTEGER</code> is equivalent.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
      "linenr": 93,
      "html_filename": "Types.html",
      "href": "Types.html#Ext-data-Types-property-INT",
      "shortDoc": "This data type means that the raw data is converted into an integer before it is placed into a Record.\n\nThe synonym I..."
    },
    {
      "tagname": "property",
      "name": "INTEGER",
      "member": "Ext.data.Types",
      "type": "Object.",
      "doc": "<p>This data type means that the raw data is converted into an integer before it is placed into a Record.</p>\n\n<p>The synonym <code>INT</code> is equivalent.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
      "linenr": 185,
      "html_filename": "Types.html",
      "href": "Types.html#Ext-data-Types-property-INTEGER",
      "shortDoc": "This data type means that the raw data is converted into an integer before it is placed into a Record.\n\nThe synonym I..."
    },
    {
      "tagname": "property",
      "name": "NUMBER",
      "member": "Ext.data.Types",
      "type": "Object.",
      "doc": "<p>This data type means that the raw data is converted into a number before it is placed into a Record.</p>\n\n<p>The synonym <code>FLOAT</code> is equivalent.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
      "linenr": 193,
      "html_filename": "Types.html",
      "href": "Types.html#Ext-data-Types-property-NUMBER",
      "shortDoc": "This data type means that the raw data is converted into a number before it is placed into a Record.\n\nThe synonym FLO..."
    },
    {
      "tagname": "property",
      "name": "STRING",
      "member": "Ext.data.Types",
      "type": "Object.",
      "doc": "<p>This data type means that the raw data is converted into a String before it is placed into a Record.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
      "linenr": 79,
      "html_filename": "Types.html",
      "href": "Types.html#Ext-data-Types-property-STRING"
    },
    {
      "tagname": "property",
      "name": "stripRe",
      "member": "Ext.data.Types",
      "type": "Regexp",
      "doc": "<p>A regular expression for stripping non-numeric characters from a numeric value. Defaults to <tt>/[\\$,%]/g</tt>.\nThis should be overridden for localization.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
      "linenr": 58,
      "html_filename": "Types.html",
      "href": "Types.html#Ext-data-Types-property-stripRe",
      "shortDoc": "A regular expression for stripping non-numeric characters from a numeric value. Defaults to /[\\$,%]/g.\nThis should be..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Types.js",
  "linenr": 1,
  "html_filename": "Types.html",
  "href": "Types.html#Ext-data-Types",
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