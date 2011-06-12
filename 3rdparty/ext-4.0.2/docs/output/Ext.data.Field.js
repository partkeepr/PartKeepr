Ext.data.JsonP.Ext_data_Field({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "Function",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field3.html#Ext-data-Field-cfg-convert",
        "shortDoc": "(Optional) A function which converts the value provided by the Reader into an object that will be stored\nin the Model. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "convert",
        "owner": "Ext.data.Field",
        "doc": "<p>(Optional) A function which converts the value provided by the Reader into an object that will be stored\nin the Model. It is passed the following parameters:<div class=\"mdetail-params\"><ul>\n<li><b>v</b> : Mixed<div class=\"sub-desc\">The data value as read by the Reader, if undefined will use\nthe configured <code><a href=\"#/api/Ext.data.Field-cfg-defaultValue\" rel=\"Ext.data.Field-cfg-defaultValue\" class=\"docClass\">defaultValue</a></code>.</div></li>\n<li><b>rec</b> : Ext.data.Model<div class=\"sub-desc\">The data object containing the Model as read so far by the\nReader. Note that the Model may not be fully populated at this point as the fields are read in the order that\nthey are defined in your fields array.</div></li>\n</ul></div></p>\n\n<pre><code>// example of convert function\nfunction fullName(v, record){\n    return record.name.last + ', ' + record.name.first;\n}\n\nfunction location(v, record){\n    return !record.city ? '' : (record.city + ', ' + record.state);\n}\n\nExt.define('Dude', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'fullname',  convert: fullName},\n        {name: 'firstname', mapping: 'name.first'},\n        {name: 'lastname',  mapping: 'name.last'},\n        {name: 'city', defaultValue: 'homeless'},\n        'state',\n        {name: 'location',  convert: location}\n    ]\n});\n\n// create the data store\nvar store = new Ext.data.Store({\n    reader: {\n        type: 'json',\n        model: 'Dude',\n        idProperty: 'key',\n        root: 'daRoot',\n        totalProperty: 'total'\n    }\n});\n\nvar myData = [\n    { key: 1,\n      name: { first: 'Fat',    last:  'Albert' }\n      // notice no city, state provided in data object\n    },\n    { key: 2,\n      name: { first: 'Barney', last:  'Rubble' },\n      city: 'Bedrock', state: 'Stoneridge'\n    },\n    { key: 3,\n      name: { first: 'Cliff',  last:  'Claven' },\n      city: 'Boston',  state: 'MA'\n    }\n];\n</code></pre>\n\n",
        "linenr": 162,
        "html_filename": "Field3.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field3.html#Ext-data-Field-cfg-dateFormat",
        "shortDoc": "(Optional) Used when converting received data into a Date when the type is specified as \"date\". ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "dateFormat",
        "owner": "Ext.data.Field",
        "doc": "<p>(Optional) Used when converting received data into a Date when the <a href=\"#/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">type</a> is specified as <code>\"date\"</code>.</p>\n\n\n<p>A format string for the <a href=\"#/api/Ext.Date-method-parse\" rel=\"Ext.Date-method-parse\" class=\"docClass\">Ext.Date.parse</a> function, or \"timestamp\" if the\nvalue provided by the Reader is a UNIX timestamp, or \"time\" if the value provided by the Reader is a\njavascript millisecond timestamp. See <a href=\"#/api/Ext.Date\" rel=\"Ext.Date\" class=\"docClass\">Ext.Date</a></p>\n\n",
        "linenr": 221,
        "html_filename": "Field3.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field3.html#Ext-data-Field-cfg-defaultValue",
        "shortDoc": "(Optional) The default value used when a Model is being created by a Reader\nwhen the item referenced by the mapping d...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "defaultValue",
        "owner": "Ext.data.Field",
        "doc": "<p>(Optional) The default value used <b>when a Model is being created by a <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Reader</a></b>\nwhen the item referenced by the <code><a href=\"#/api/Ext.data.Field-cfg-mapping\" rel=\"Ext.data.Field-cfg-mapping\" class=\"docClass\">mapping</a></code> does not exist in the data\nobject (i.e. undefined). (defaults to \"\")</p>\n",
        "linenr": 237,
        "html_filename": "Field3.html"
      },
      {
        "type": "String/Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field3.html#Ext-data-Field-cfg-mapping",
        "shortDoc": "(Optional) A path expression for use by the Ext.data.reader.Reader implementation\nthat is creating the Model to extra...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "mapping",
        "owner": "Ext.data.Field",
        "doc": "<p>(Optional) A path expression for use by the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> implementation\nthat is creating the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> to extract the Field value from the data object.\nIf the path expression is the same as the field name, the mapping may be omitted.</p>\n\n\n<p>The form of the mapping expression depends on the Reader being used.</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">Ext.data.reader.Json</a><div class=\"sub-desc\">The mapping is a string containing the javascript\nexpression to reference the data from an element of the data item's <a href=\"#/api/Ext.data.reader.Json-cfg-root\" rel=\"Ext.data.reader.Json-cfg-root\" class=\"docClass\">root</a> Array. Defaults to the field name.</div></li>\n<li><a href=\"#/api/Ext.data.reader.Xml\" rel=\"Ext.data.reader.Xml\" class=\"docClass\">Ext.data.reader.Xml</a><div class=\"sub-desc\">The mapping is an <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">Ext.DomQuery</a> path to the data\nitem relative to the DOM element that represents the <a href=\"#/api/Ext.data.reader.Xml-cfg-record\" rel=\"Ext.data.reader.Xml-cfg-record\" class=\"docClass\">record</a>. Defaults to the field name.</div></li>\n<li><a href=\"#/api/Ext.data.reader.Array\" rel=\"Ext.data.reader.Array\" class=\"docClass\">Ext.data.reader.Array</a><div class=\"sub-desc\">The mapping is a number indicating the Array index\nof the field's value. Defaults to the field specification's Array position.</div></li>\n</ul></div>\n\n\n<p>If a more complex value extraction strategy is required, then configure the Field with a <a href=\"#/api/Ext.data.Field-cfg-convert\" rel=\"Ext.data.Field-cfg-convert\" class=\"docClass\">convert</a>\nfunction. This is passed the whole row object, and may interrogate it in whatever way is necessary in order to\nreturn the desired data.</p>\n\n",
        "linenr": 244,
        "html_filename": "Field3.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field3.html#Ext-data-Field-cfg-name",
        "shortDoc": "The name by which the field is referenced within the Model. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "name",
        "owner": "Ext.data.Field",
        "doc": "<p>The name by which the field is referenced within the Model. This is referenced by, for example,\nthe <code>dataIndex</code> property in column definition objects passed to <a href=\"#/api/Ext.grid.property.HeaderContainer\" rel=\"Ext.grid.property.HeaderContainer\" class=\"docClass\">Ext.grid.property.HeaderContainer</a>.</p>\n\n<p>Note: In the simplest case, if no properties other than <code>name</code> are required, a field\ndefinition may consist of just a String for the field name.</p>\n\n",
        "linenr": 138,
        "html_filename": "Field3.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field3.html#Ext-data-Field-cfg-persist",
        "shortDoc": "False to exclude this field from the Ext.data.Model.modified fields in a model. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "persist",
        "owner": "Ext.data.Field",
        "doc": "<p>False to exclude this field from the <a href=\"#/api/Ext.data.Model-property-modified\" rel=\"Ext.data.Model-property-modified\" class=\"docClass\">Ext.data.Model.modified</a> fields in a model. This\nwill also exclude the field from being written using a <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a>. This option\nis useful when model fields are used to keep state on the client but do not need to be persisted\nto the server. Defaults to <tt>true</tt>.</p>\n",
        "linenr": 301,
        "html_filename": "Field3.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field3.html#Ext-data-Field-cfg-sortDir",
        "shortDoc": "(Optional) Initial direction to sort (\"ASC\" or  \"DESC\"). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "sortDir",
        "owner": "Ext.data.Field",
        "doc": "<p>(Optional) Initial direction to sort (<code>\"ASC\"</code> or  <code>\"DESC\"</code>).  Defaults to\n<code>\"ASC\"</code>.</p>\n",
        "linenr": 286,
        "html_filename": "Field3.html"
      },
      {
        "type": "Function",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field3.html#Ext-data-Field-cfg-sortType",
        "shortDoc": "(Optional) A function which converts a Field's value to a comparable value in order to ensure\ncorrect sort ordering. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "sortType",
        "owner": "Ext.data.Field",
        "doc": "<p>(Optional) A function which converts a Field's value to a comparable value in order to ensure\ncorrect sort ordering. Predefined functions are provided in <a href=\"#/api/Ext.data.SortTypes\" rel=\"Ext.data.SortTypes\" class=\"docClass\">Ext.data.SortTypes</a>. A custom\nsort example:</p>\n\n<pre><code>// current sort     after sort we want\n// +-+------+          +-+------+\n// |1|First |          |1|First |\n// |2|Last  |          |3|Second|\n// |3|Second|          |2|Last  |\n// +-+------+          +-+------+\n\nsortType: function(value) {\n   switch (value.toLowerCase()) // native toLowerCase():\n   {\n      case 'first': return 1;\n      case 'second': return 2;\n      default: return 3;\n   }\n}\n</code></pre>\n\n",
        "linenr": 263,
        "html_filename": "Field3.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field3.html#Ext-data-Field-cfg-type",
        "shortDoc": "(Optional) The data type for automatic conversion from received data to the stored value if convert\nhas not been spec...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "type",
        "owner": "Ext.data.Field",
        "doc": "<p>(Optional) The data type for automatic conversion from received data to the <i>stored</i> value if <code><a href=\"#/api/Ext.data.Field-cfg-convert\" rel=\"Ext.data.Field-cfg-convert\" class=\"docClass\">convert</a></code>\nhas not been specified. This may be specified as a string value. Possible values are</p>\n\n<div class=\"mdetail-params\"><ul>\n<li>auto (Default, implies no conversion)</li>\n<li>string</li>\n<li>int</li>\n<li>float</li>\n<li>boolean</li>\n<li>date</li></ul></div>\n\n\n<p>This may also be specified by referencing a member of the <a href=\"#/api/Ext.data.Types\" rel=\"Ext.data.Types\" class=\"docClass\">Ext.data.Types</a> class.</p>\n\n\n<p>Developers may create their own application-specific data types by defining new members of the\n<a href=\"#/api/Ext.data.Types\" rel=\"Ext.data.Types\" class=\"docClass\">Ext.data.Types</a> class.</p>\n\n",
        "linenr": 146,
        "html_filename": "Field3.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field3.html#Ext-data-Field-cfg-useNull",
        "shortDoc": "(Optional) Use when converting received data into a Number type (either int or float). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "useNull",
        "owner": "Ext.data.Field",
        "doc": "<p>(Optional) Use when converting received data into a Number type (either int or float). If the value cannot be parsed,\nnull will be used if useNull is true, otherwise the value will be 0. Defaults to <tt>false</tt>\n\n",
        "linenr": 230,
        "html_filename": "Field3.html"
      }
    ],
    "method": [

    ],
    "property": [

    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Field3.html#Ext-data-Field",
  "subclasses": [

  ],
  "static": false,
  "author": "Ed Spencer",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.data.Field",
  "doc": "<p>Fields are used to define what a Model is. They aren't instantiated directly - instead, when we create a class \nthat extends <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>, it will automatically create a Field instance for each field configured in a \n<a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>. For example, we might set up a model like this:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        'name', 'email',\n        {name: 'age', type: 'int'},\n        {name: 'gender', type: 'string', defaultValue: 'Unknown'}\n    ]\n});\n</code></pre>\n\n\n\n\n<p>Four fields will have been created for the User Model - name, email, age and gender. Note that we specified a\ncouple of different formats here; if we only pass in the string name of the field (as with name and email), the\nfield is set up with the 'auto' type. It's as if we'd done this instead:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'name', type: 'auto'},\n        {name: 'email', type: 'auto'},\n        {name: 'age', type: 'int'},\n        {name: 'gender', type: 'string', defaultValue: 'Unknown'}\n    ]\n});\n</code></pre>\n\n\n\n\n<p><u>Types and conversion</u></p>\n\n\n\n\n<p>The <a href=\"#/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">type</a> is important - it's used to automatically convert data passed to the field into the correct\nformat. In our example above, the name and email fields used the 'auto' type and will just accept anything that is\npassed into them. The 'age' field had an 'int' type however, so if we passed 25.4 this would be rounded to 25.</p>\n\n\n\n\n<p>Sometimes a simple type isn't enough, or we want to perform some processing when we load a Field's data. We can\ndo this using a <a href=\"#/api/Ext.data.Field-cfg-convert\" rel=\"Ext.data.Field-cfg-convert\" class=\"docClass\">convert</a> function. Here, we're going to create a new field based on another:</p>\n\n\n<p><code></p>\n\n<pre>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        'name', 'email',\n        {name: 'age', type: 'int'},\n        {name: 'gender', type: 'string', defaultValue: 'Unknown'},\n\n        {\n            name: 'firstName',\n            convert: function(value, record) {\n                var fullName  = record.get('name'),\n                    splits    = fullName.split(\" \"),\n                    firstName = splits[0];\n\n                return firstName;\n            }\n        }\n    ]\n});\n</code></pre>\n\n\n\n\n<p>Now when we create a new User, the firstName is populated automatically based on the name:</p>\n\n\n<p><code></p>\n\n<pre>var ed = Ext.ModelManager.create({name: 'Ed Spencer'}, 'User');\n\nconsole.log(ed.get('firstName')); //logs 'Ed', based on our convert function\n</code></pre>\n\n\n\n\n<p>In fact, if we log out all of the data inside ed, we'll see this:</p>\n\n\n<p><code></p>\n\n<pre>console.log(ed.data);\n\n//outputs this:\n{\n    age: 0,\n    email: \"\",\n    firstName: \"Ed\",\n    gender: \"Unknown\",\n    name: \"Ed Spencer\"\n}\n</code></pre>\n\n\n\n\n<p>The age field has been given a default of zero because we made it an int type. As an auto field, email has\ndefaulted to an empty string. When we registered the User model we set gender's <a href=\"#/api/Ext.data.Field-cfg-defaultValue\" rel=\"Ext.data.Field-cfg-defaultValue\" class=\"docClass\">defaultValue</a> to 'Unknown'\nso we see that now. Let's correct that and satisfy ourselves that the types work as we expect:</p>\n\n\n<p><code></p>\n\n<pre>ed.set('gender', 'Male');\ned.get('gender'); //returns 'Male'\n\ned.set('age', 25.4);\ned.get('age'); //returns 25 - we wanted an int, not a float, so no decimal places allowed\n</code></pre>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Field3.html",
  "extends": "Object"
});