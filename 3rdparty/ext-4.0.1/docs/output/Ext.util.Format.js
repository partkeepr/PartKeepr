Ext.data.JsonP.Ext_util_Format({
  "tagname": "class",
  "name": "Ext.util.Format",
  "doc": "<p>This class is a centralized place for formatting functions inside the library. It includes\nfunctions to format various different types of data, such as text, dates and numeric values.</p>\n\n<p><strong>Localization</strong>\nThis class contains several options for localization. These can be set once the library has loaded,\nall calls to the functions from that point will use the locale settings that were specified.\nOptions include:\n- thousandSeparator\n- decimalSeparator\n- currenyPrecision\n- currencySign\n- currencyAtEnd\nThis class also uses the default date format defined here: <a href=\"#/api/Ext.date--defaultFormat\" rel=\"Ext.date--defaultFormat\" class=\"docClass\">Ext.date.defaultFormat</a>.</p>\n\n<p><strong>Using with renderers</strong>\nThere are two helper functions that return a new function that can be used in conjunction with\ngrid renderers:</p>\n\n<pre><code>columns: [{\n    dataIndex: 'date',\n    renderer: Ext.util.Format.dateRenderer('Y-m-d')\n}, {\n    dataIndex: 'time',\n    renderer: Ext.util.Format.numberRenderer('0.000')\n}]\n</code></pre>\n\n<p>Functions that only take a single argument can also be passed directly:</p>\n\n<pre><code>columns: [{\n    dataIndex: 'cost',\n    renderer: Ext.util.Format.usMoney\n}, {\n    dataIndex: 'productCode',\n    renderer: Ext.util.Format.uppercase\n}]\n</code></pre>\n\n<p><strong>Using with XTemplates</strong>\nXTemplates can also directly use <a href=\"#/api/Ext.util.Format\" rel=\"Ext.util.Format\" class=\"docClass\">Ext.util.Format</a> functions:</p>\n\n<pre><code>new Ext.XTemplate([\n    'Date: {startDate:date(\"Y-m-d\")}',\n    'Cost: {cost:usMoney}'\n]);\n</code></pre>\n",
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
    {
      "tagname": "method",
      "name": "capitalize",
      "member": "Ext.util.Format",
      "doc": "<p>Capitalize the given string. See <a href=\"#/api/Ext.String-method-capitalize\" rel=\"Ext.String-method-capitalize\" class=\"docClass\">Ext.String.capitalize</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 434,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-capitalize",
      "shortDoc": "<p>Capitalize the given string. See <a href=\"#/api/Ext.String-method-capitalize\" rel=\"Ext.String-method-capitalize\" class=\"docClass\">Ext.String.capitalize</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "currency",
      "member": "Ext.util.Format",
      "doc": "<p>Format a number as a currency</p>\n",
      "params": [
        {
          "type": "Number/String",
          "name": "value",
          "doc": "<p>The numeric value to format</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "sign",
          "doc": "<p>The currency sign to use (defaults to <a href=\"#/api/Ext.util.Format-property-currencySign\" rel=\"Ext.util.Format-property-currencySign\" class=\"docClass\">currencySign</a>)</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "decimals",
          "doc": "<p>The number of decimals to use for the currency (defaults to <a href=\"#/api/Ext.util.Format-property-currencyPrecision\" rel=\"Ext.util.Format-property-currencyPrecision\" class=\"docClass\">currencyPrecision</a>)</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "end",
          "doc": "<p>True if the currency sign should be at the end of the string (defaults to <a href=\"#/api/Ext.util.Format-property-currencyAtEnd\" rel=\"Ext.util.Format-property-currencyAtEnd\" class=\"docClass\">currencyAtEnd</a>)</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The formatted currency string</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 165,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-currency",
      "shortDoc": "<p>Format a number as a currency</p>\n"
    },
    {
      "tagname": "method",
      "name": "date",
      "member": "Ext.util.Format",
      "doc": "<p>Formats the passed date using the specified format pattern.</p>\n",
      "params": [
        {
          "type": "String/Date",
          "name": "value",
          "doc": "<p>The value to format. If a string is passed, it is converted to a Date by the Javascript\nDate object's <a href=\"http://www.w3schools.com/jsref/jsref_parse.asp\">parse()</a> method.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "format",
          "doc": "<p>(Optional) Any valid date format string. Defaults to <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The formatted date string.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 195,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-date",
      "shortDoc": "<p>Formats the passed date using the specified format pattern.</p>\n"
    },
    {
      "tagname": "method",
      "name": "dateRenderer",
      "member": "Ext.util.Format",
      "doc": "<p>Returns a date rendering function that can be reused to apply a date format multiple times efficiently</p>\n",
      "params": [
        {
          "type": "String",
          "name": "format",
          "doc": "<p>Any valid date format string. Defaults to <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>The date formatting function</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 212,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-dateRenderer",
      "shortDoc": "<p>Returns a date rendering function that can be reused to apply a date format multiple times efficiently</p>\n"
    },
    {
      "tagname": "method",
      "name": "defaultValue",
      "member": "Ext.util.Format",
      "doc": "<p>Checks a reference and converts it to the default value if it's empty</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>Reference to check</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "defaultValue",
          "doc": "<p>The value to insert of it's undefined (defaults to \"\")</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 117,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-defaultValue",
      "shortDoc": "<p>Checks a reference and converts it to the default value if it's empty</p>\n"
    },
    {
      "tagname": "method",
      "name": "ellipsis",
      "member": "Ext.util.Format",
      "doc": "<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length.\nSee <a href=\"#/api/Ext.String-method-ellipsis\" rel=\"Ext.String-method-ellipsis\" class=\"docClass\">Ext.String.ellipsis</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 440,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-ellipsis",
      "shortDoc": "<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length.\nSee <a href=\"#/api/Ext.String-method-ellipsis\" rel=\"Ext.String-method-ellipsis\" class=\"docClass\">Ext.String.ellipsis</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "escapeRegex",
      "member": "Ext.util.Format",
      "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
      "params": [
        {
          "type": "String",
          "name": "str",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 511,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-escapeRegex",
      "shortDoc": "<p>Escapes the passed string for use in a regular expression</p>\n"
    },
    {
      "tagname": "method",
      "name": "fileSize",
      "member": "Ext.util.Format",
      "doc": "<p>Simple format for a file size (xxx bytes, xxx KB, xxx MB)</p>\n",
      "params": [
        {
          "type": "Number/String",
          "name": "size",
          "doc": "<p>The numeric value to format</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The formatted file size</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 241,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-fileSize",
      "shortDoc": "<p>Simple format for a file size (xxx bytes, xxx KB, xxx MB)</p>\n"
    },
    {
      "tagname": "method",
      "name": "format",
      "member": "Ext.util.Format",
      "doc": "<p>Formats to a string. See <a href=\"#/api/Ext.String-method-format\" rel=\"Ext.String-method-format\" class=\"docClass\">Ext.String.format</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 447,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-format",
      "shortDoc": "<p>Formats to a string. See <a href=\"#/api/Ext.String-method-format\" rel=\"Ext.String-method-format\" class=\"docClass\">Ext.String.format</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "htmlDecode",
      "member": "Ext.util.Format",
      "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.\nSee <a href=\"#/api/Ext.string--htmlDecode\" rel=\"Ext.string--htmlDecode\" class=\"docClass\">Ext.string.htmlDecode</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 453,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-htmlDecode",
      "shortDoc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.\nSee <a href=\"#/api/Ext.string--htmlDecode\" rel=\"Ext.string--htmlDecode\" class=\"docClass\">Ext.string.htmlDecode</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "htmlEncode",
      "member": "Ext.util.Format",
      "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.\nSee <a href=\"#/api/Ext.String-method-htmlEncode\" rel=\"Ext.String-method-htmlEncode\" class=\"docClass\">Ext.String.htmlEncode</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 460,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-htmlEncode",
      "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pag..."
    },
    {
      "tagname": "method",
      "name": "leftPad",
      "member": "Ext.util.Format",
      "doc": "<p>Adds left padding to a string. See <a href=\"#/api/Ext.String-method-leftPad\" rel=\"Ext.String-method-leftPad\" class=\"docClass\">Ext.String.leftPad</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 467,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-leftPad",
      "shortDoc": "<p>Adds left padding to a string. See <a href=\"#/api/Ext.String-method-leftPad\" rel=\"Ext.String-method-leftPad\" class=\"docClass\">Ext.String.leftPad</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "lowercase",
      "member": "Ext.util.Format",
      "doc": "<p>Converts a string to all lower case letters</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The text to convert</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The converted text</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 138,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-lowercase",
      "shortDoc": "<p>Converts a string to all lower case letters</p>\n"
    },
    {
      "tagname": "method",
      "name": "math",
      "member": "Ext.util.Format",
      "doc": "<p>It does simple math for use in a template, for example:</p>\n\n<pre><code>var tpl = new Ext.Template('{value} * 10 = {value:math(\"* 10\")}');\n</code></pre>\n\n",
      "params": [

      ],
      "return": {
        "type": "Function",
        "doc": "<p>A function that operates on the passed value.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 256,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-math",
      "shortDoc": "It does simple math for use in a template, for example:\n\nvar tpl = new Ext.Template('{value} * 10 = {value:math(\"* 10..."
    },
    {
      "tagname": "method",
      "name": "nl2br",
      "member": "Ext.util.Format",
      "doc": "<p>Converts newline characters to the HTML tag &lt;br/></p>\n",
      "params": [
        {
          "type": "String",
          "name": "The",
          "doc": "<p>string value to format.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The string with embedded &lt;br/> tags in place of newlines.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 425,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-nl2br",
      "shortDoc": "<p>Converts newline characters to the HTML tag &lt;br/></p>\n"
    },
    {
      "tagname": "method",
      "name": "number",
      "member": "Ext.util.Format",
      "doc": "<p>Formats the passed number according to the passed format string.</p>\n\n\n<p>The number of digits after the decimal separator character specifies the number of\ndecimal places in the resulting string. The <u>local-specific</u> decimal character is used in the result.</p>\n\n\n<p>The <i>presence</i> of a thousand separator character in the format string specifies that\nthe <u>locale-specific</u> thousand separator (if any) is inserted separating thousand groups.</p>\n\n\n<p>By default, \",\" is expected as the thousand separator, and \".\" is expected as the decimal separator.</p>\n\n\n<p><b>New to Ext4</b></p>\n\n\n<p>Locale-specific characters are always used in the formatted output when inserting\nthousand and decimal separators.</p>\n\n\n<p>The format string must specify separator characters according to US/UK conventions (\",\" as the\nthousand separator, and \".\" as the decimal separator)</p>\n\n\n<p>To allow specification of format strings according to local conventions for separator characters, add\nthe string <code>/i</code> to the end of the format string.</p>\n\n\n<div style=\"margin-left:40px\">examples (123456.789):\n<div style=\"margin-left:10px\">\n0 - (123456) show only digits, no precision<br>\n0.00 - (123456.78) show only digits, 2 precision<br>\n0.0000 - (123456.7890) show only digits, 4 precision<br>\n0,000 - (123,456) show comma and digits, no precision<br>\n0,000.00 - (123,456.78) show comma and digits, 2 precision<br>\n0,0.00 - (123,456.78) shortcut method, show comma and digits, 2 precision<br>\nTo allow specification of the formatting string using UK/US grouping characters (,) and decimal (.) for international numbers, add /i to the end.\nFor example: 0.000,00/i\n</div></div>\n\n",
      "params": [
        {
          "type": "Number",
          "name": "v",
          "doc": "<p>The number to format.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "format",
          "doc": "<p>The way you would like to format this text.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The formatted number.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 289,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-number",
      "shortDoc": "Formats the passed number according to the passed format string.\n\n\nThe number of digits after the decimal separator c..."
    },
    {
      "tagname": "method",
      "name": "numberRenderer",
      "member": "Ext.util.Format",
      "doc": "<p>Returns a number rendering function that can be reused to apply a number format multiple times efficiently</p>\n",
      "params": [
        {
          "type": "String",
          "name": "format",
          "doc": "<p>Any valid number format string for <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>The number formatting function</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 402,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-numberRenderer",
      "shortDoc": "<p>Returns a number rendering function that can be reused to apply a number format multiple times efficiently</p>\n"
    },
    {
      "tagname": "method",
      "name": "parseBox",
      "member": "Ext.util.Format",
      "doc": "<p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n",
      "params": [
        {
          "type": "Number|String",
          "name": "v",
          "doc": "<p>The encoded margins</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object with margin sizes for top, right, bottom and left</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 479,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-parseBox",
      "shortDoc": "Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, ..."
    },
    {
      "tagname": "method",
      "name": "plural",
      "member": "Ext.util.Format",
      "doc": "<p>Selectively do a plural form of a word based on a numeric value. For example, in a template,\n{commentCount:plural(\"Comment\")}  would result in \"1 Comment\" if commentCount was 1 or would be \"x Comments\"\nif the value is 0 or greater than 1.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "value",
          "doc": "<p>The value to compare against</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "singular",
          "doc": "<p>The singular form of the word</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "plural",
          "doc": "<p>(optional) The plural form of the word (defaults to the singular with an \"s\")</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 413,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-plural",
      "shortDoc": "Selectively do a plural form of a word based on a numeric value. For example, in a template,\n{commentCount:plural(\"Co..."
    },
    {
      "tagname": "method",
      "name": "round",
      "member": "Ext.util.Format",
      "doc": "<p>Rounds the passed number to the required decimal precision.</p>\n",
      "params": [
        {
          "type": "Number/String",
          "name": "value",
          "doc": "<p>The numeric value to round.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "precision",
          "doc": "<p>The number of decimal places to which to round the first parameter's value.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The rounded value.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 274,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-round",
      "shortDoc": "<p>Rounds the passed number to the required decimal precision.</p>\n"
    },
    {
      "tagname": "method",
      "name": "stripScripts",
      "member": "Ext.util.Format",
      "doc": "<p>Strips all script tags</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The text from which to strip script tags</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The stripped text</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 232,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-stripScripts",
      "shortDoc": "<p>Strips all script tags</p>\n"
    },
    {
      "tagname": "method",
      "name": "stripTags",
      "member": "Ext.util.Format",
      "doc": "<p>Strips all HTML tags</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The text from which to strip tags</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The stripped text</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 223,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-stripTags",
      "shortDoc": "<p>Strips all HTML tags</p>\n"
    },
    {
      "tagname": "method",
      "name": "substr",
      "member": "Ext.util.Format",
      "doc": "<p>Returns a substring from within an original string</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The original text</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "start",
          "doc": "<p>The start index of the substring</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "length",
          "doc": "<p>The length of the substring</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The substring</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 127,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-substr",
      "shortDoc": "<p>Returns a substring from within an original string</p>\n"
    },
    {
      "tagname": "method",
      "name": "trim",
      "member": "Ext.util.Format",
      "doc": "<p>Trims any whitespace from either side of a string. See <a href=\"#/api/Ext.String-method-trim\" rel=\"Ext.String-method-trim\" class=\"docClass\">Ext.String.trim</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 473,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-trim",
      "shortDoc": "<p>Trims any whitespace from either side of a string. See <a href=\"#/api/Ext.String-method-trim\" rel=\"Ext.String-method-trim\" class=\"docClass\">Ext.String.trim</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "undef",
      "member": "Ext.util.Format",
      "doc": "<p>Checks a reference and converts it to empty string if it is undefined</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>Reference to check</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>Empty string if converted, otherwise the original value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 108,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-undef",
      "shortDoc": "<p>Checks a reference and converts it to empty string if it is undefined</p>\n"
    },
    {
      "tagname": "method",
      "name": "uppercase",
      "member": "Ext.util.Format",
      "doc": "<p>Converts a string to all upper case letters</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The text to convert</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The converted text</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 147,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-uppercase",
      "shortDoc": "<p>Converts a string to all upper case letters</p>\n"
    },
    {
      "tagname": "method",
      "name": "usMoney",
      "member": "Ext.util.Format",
      "doc": "<p>Format a number as US currency</p>\n",
      "params": [
        {
          "type": "Number/String",
          "name": "value",
          "doc": "<p>The numeric value to format</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The formatted currency string</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 156,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-method-usMoney",
      "shortDoc": "<p>Format a number as US currency</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "currencyAtEnd",
      "member": "Ext.util.Format",
      "type": "Boolean",
      "doc": "<p>This may be set to <code>true</code> to make the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function\nappend the currency sign to the formatted value.</p>\n\n\n<p>This defaults to <code>false</code>, but may be overridden in a locale file.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 99,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-property-currencyAtEnd",
      "shortDoc": "This may be set to true to make the currency function\nappend the currency sign to the formatted value.\n\n\nThis default..."
    },
    {
      "tagname": "property",
      "name": "currencyPrecision",
      "member": "Ext.util.Format",
      "type": "Number",
      "doc": "<p>The number of decimal places that the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function displays.</p>\n\n\n<p>This defaults to <code>2</code>, but may be overridden in a locale file.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 83,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-property-currencyPrecision",
      "shortDoc": "The number of decimal places that the currency function displays.\n\n\nThis defaults to 2, but may be overridden in a lo..."
    },
    {
      "tagname": "property",
      "name": "currencySign",
      "member": "Ext.util.Format",
      "type": "String",
      "doc": "<p>The currency sign that the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function displays.</p>\n\n\n<p>This defaults to <code>$</code>, but may be overridden in a locale file.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 91,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-property-currencySign"
    },
    {
      "tagname": "property",
      "name": "decimalSeparator",
      "member": "Ext.util.Format",
      "type": "String",
      "doc": "<p>The character that the <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a> function uses as a decimal point.</p>\n\n\n<p>This defaults to <code>.</code>, but may be overridden in a locale file.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 75,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-property-decimalSeparator",
      "shortDoc": "The character that the number function uses as a decimal point.\n\n\nThis defaults to ., but may be overridden in a loca..."
    },
    {
      "tagname": "property",
      "name": "thousandSeparator",
      "member": "Ext.util.Format",
      "type": "String",
      "doc": "<p>The character that the <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a> function uses as a thousand separator.</p>\n\n\n<p>This defaults to <code>,</code>, but may be overridden in a locale file.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
      "linenr": 67,
      "html_filename": "Format.html",
      "href": "Format.html#Ext-util-Format-property-thousandSeparator",
      "shortDoc": "The character that the number function uses as a thousand separator.\n\n\nThis defaults to ,, but may be overridden in a..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/util/Format.js",
  "linenr": 1,
  "html_filename": "Format.html",
  "href": "Format.html#Ext-util-Format",
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