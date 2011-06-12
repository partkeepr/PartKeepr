Ext.data.JsonP.Ext_util_Format({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-capitalize",
        "shortDoc": "Capitalize the given string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [

        ],
        "name": "capitalize",
        "owner": "Ext.util.Format",
        "doc": "<p>Capitalize the given string. See <a href=\"#/api/Ext.String-method-capitalize\" rel=\"Ext.String-method-capitalize\" class=\"docClass\">Ext.String.capitalize</a>.</p>\n",
        "linenr": 442,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-currency",
        "shortDoc": "Format a number as a currency ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Number/String",
            "optional": false,
            "doc": "<p>The numeric value to format</p>\n",
            "name": "value"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The currency sign to use (defaults to <a href=\"#/api/Ext.util.Format-property-currencySign\" rel=\"Ext.util.Format-property-currencySign\" class=\"docClass\">currencySign</a>)</p>\n",
            "name": "sign"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of decimals to use for the currency (defaults to <a href=\"#/api/Ext.util.Format-property-currencyPrecision\" rel=\"Ext.util.Format-property-currencyPrecision\" class=\"docClass\">currencyPrecision</a>)</p>\n",
            "name": "decimals"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if the currency sign should be at the end of the string (defaults to <a href=\"#/api/Ext.util.Format-property-currencyAtEnd\" rel=\"Ext.util.Format-property-currencyAtEnd\" class=\"docClass\">currencyAtEnd</a>)</p>\n",
            "name": "end"
          }
        ],
        "name": "currency",
        "owner": "Ext.util.Format",
        "doc": "<p>Format a number as a currency</p>\n",
        "linenr": 165,
        "return": {
          "type": "String",
          "doc": "<p>The formatted currency string</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-date",
        "shortDoc": "Formats the passed date using the specified format pattern. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "String/Date",
            "optional": false,
            "doc": "<p>The value to format. If a string is passed, it is converted to a Date by the Javascript\nDate object's <a href=\"http://www.w3schools.com/jsref/jsref_parse.asp\">parse()</a> method.</p>\n",
            "name": "value"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>(Optional) Any valid date format string. Defaults to <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n",
            "name": "format"
          }
        ],
        "name": "date",
        "owner": "Ext.util.Format",
        "doc": "<p>Formats the passed date using the specified format pattern.</p>\n",
        "linenr": 195,
        "return": {
          "type": "String",
          "doc": "<p>The formatted date string.</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-dateRenderer",
        "shortDoc": "Returns a date rendering function that can be reused to apply a date format multiple times efficiently ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Any valid date format string. Defaults to <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n",
            "name": "format"
          }
        ],
        "name": "dateRenderer",
        "owner": "Ext.util.Format",
        "doc": "<p>Returns a date rendering function that can be reused to apply a date format multiple times efficiently</p>\n",
        "linenr": 212,
        "return": {
          "type": "Function",
          "doc": "<p>The date formatting function</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-defaultValue",
        "shortDoc": "Checks a reference and converts it to the default value if it's empty ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Reference to check</p>\n",
            "name": "value"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to insert of it's undefined (defaults to \"\")</p>\n",
            "name": "defaultValue"
          }
        ],
        "name": "defaultValue",
        "owner": "Ext.util.Format",
        "doc": "<p>Checks a reference and converts it to the default value if it's empty</p>\n",
        "linenr": 117,
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-ellipsis",
        "shortDoc": "Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [

        ],
        "name": "ellipsis",
        "owner": "Ext.util.Format",
        "doc": "<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length.\nSee <a href=\"#/api/Ext.String-method-ellipsis\" rel=\"Ext.String-method-ellipsis\" class=\"docClass\">Ext.String.ellipsis</a>.</p>\n",
        "linenr": 448,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-escapeRegex",
        "shortDoc": "Escapes the passed string for use in a regular expression ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "str"
          }
        ],
        "name": "escapeRegex",
        "owner": "Ext.util.Format",
        "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
        "linenr": 519,
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-fileSize",
        "shortDoc": "Simple format for a file size (xxx bytes, xxx KB, xxx MB) ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Number/String",
            "optional": false,
            "doc": "<p>The numeric value to format</p>\n",
            "name": "size"
          }
        ],
        "name": "fileSize",
        "owner": "Ext.util.Format",
        "doc": "<p>Simple format for a file size (xxx bytes, xxx KB, xxx MB)</p>\n",
        "linenr": 241,
        "return": {
          "type": "String",
          "doc": "<p>The formatted file size</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-format",
        "shortDoc": "Formats to a string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [

        ],
        "name": "format",
        "owner": "Ext.util.Format",
        "doc": "<p>Formats to a string. See <a href=\"#/api/Ext.String-method-format\" rel=\"Ext.String-method-format\" class=\"docClass\">Ext.String.format</a></p>\n",
        "linenr": 455,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-htmlDecode",
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [

        ],
        "name": "htmlDecode",
        "owner": "Ext.util.Format",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.\nSee <a href=\"#/api/Ext.String-method-htmlDecode\" rel=\"Ext.String-method-htmlDecode\" class=\"docClass\">Ext.String.htmlDecode</a>.</p>\n",
        "linenr": 461,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-htmlEncode",
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [

        ],
        "name": "htmlEncode",
        "owner": "Ext.util.Format",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.\nSee <a href=\"#/api/Ext.String-method-htmlEncode\" rel=\"Ext.String-method-htmlEncode\" class=\"docClass\">Ext.String.htmlEncode</a>.</p>\n",
        "linenr": 468,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-leftPad",
        "shortDoc": "Adds left padding to a string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [

        ],
        "name": "leftPad",
        "owner": "Ext.util.Format",
        "doc": "<p>Adds left padding to a string. See <a href=\"#/api/Ext.String-method-leftPad\" rel=\"Ext.String-method-leftPad\" class=\"docClass\">Ext.String.leftPad</a></p>\n",
        "linenr": 475,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-lowercase",
        "shortDoc": "Converts a string to all lower case letters ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The text to convert</p>\n",
            "name": "value"
          }
        ],
        "name": "lowercase",
        "owner": "Ext.util.Format",
        "doc": "<p>Converts a string to all lower case letters</p>\n",
        "linenr": 138,
        "return": {
          "type": "String",
          "doc": "<p>The converted text</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-math",
        "shortDoc": "It does simple math for use in a template, for example:\n\nvar tpl = new Ext.Template('{value} * 10 = {value:math(\"* 10...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [

        ],
        "name": "math",
        "owner": "Ext.util.Format",
        "doc": "<p>It does simple math for use in a template, for example:</p>\n\n<pre><code>var tpl = new Ext.Template('{value} * 10 = {value:math(\"* 10\")}');\n</code></pre>\n\n",
        "linenr": 256,
        "return": {
          "type": "Function",
          "doc": "<p>A function that operates on the passed value.</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-nl2br",
        "shortDoc": "Converts newline characters to the HTML tag &lt;br/> ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>string value to format.</p>\n",
            "name": "The"
          }
        ],
        "name": "nl2br",
        "owner": "Ext.util.Format",
        "doc": "<p>Converts newline characters to the HTML tag &lt;br/></p>\n",
        "linenr": 433,
        "return": {
          "type": "String",
          "doc": "<p>The string with embedded &lt;br/> tags in place of newlines.</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-number",
        "shortDoc": "Formats the passed number according to the passed format string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number to format.</p>\n",
            "name": "v"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The way you would like to format this text.</p>\n",
            "name": "format"
          }
        ],
        "name": "number",
        "owner": "Ext.util.Format",
        "doc": "<p>Formats the passed number according to the passed format string.</p>\n\n\n<p>The number of digits after the decimal separator character specifies the number of\ndecimal places in the resulting string. The <u>local-specific</u> decimal character is used in the result.</p>\n\n\n<p>The <i>presence</i> of a thousand separator character in the format string specifies that\nthe <u>locale-specific</u> thousand separator (if any) is inserted separating thousand groups.</p>\n\n\n<p>By default, \",\" is expected as the thousand separator, and \".\" is expected as the decimal separator.</p>\n\n\n<p><b>New to Ext4</b></p>\n\n\n<p>Locale-specific characters are always used in the formatted output when inserting\nthousand and decimal separators.</p>\n\n\n<p>The format string must specify separator characters according to US/UK conventions (\",\" as the\nthousand separator, and \".\" as the decimal separator)</p>\n\n\n<p>To allow specification of format strings according to local conventions for separator characters, add\nthe string <code>/i</code> to the end of the format string.</p>\n\n\n<div style=\"margin-left:40px\">examples (123456.789):\n<div style=\"margin-left:10px\">\n0 - (123456) show only digits, no precision<br>\n0.00 - (123456.78) show only digits, 2 precision<br>\n0.0000 - (123456.7890) show only digits, 4 precision<br>\n0,000 - (123,456) show comma and digits, no precision<br>\n0,000.00 - (123,456.78) show comma and digits, 2 precision<br>\n0,0.00 - (123,456.78) shortcut method, show comma and digits, 2 precision<br>\nTo allow specification of the formatting string using UK/US grouping characters (,) and decimal (.) for international numbers, add /i to the end.\nFor example: 0.000,00/i\n</div></div>\n\n",
        "linenr": 289,
        "return": {
          "type": "String",
          "doc": "<p>The formatted number.</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-numberRenderer",
        "shortDoc": "Returns a number rendering function that can be reused to apply a number format multiple times efficiently ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Any valid number format string for <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a></p>\n",
            "name": "format"
          }
        ],
        "name": "numberRenderer",
        "owner": "Ext.util.Format",
        "doc": "<p>Returns a number rendering function that can be reused to apply a number format multiple times efficiently</p>\n",
        "linenr": 410,
        "return": {
          "type": "Function",
          "doc": "<p>The number formatting function</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-parseBox",
        "shortDoc": "Parses a number or string representing margin sizes into an object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Number|String",
            "optional": false,
            "doc": "<p>The encoded margins</p>\n",
            "name": "v"
          }
        ],
        "name": "parseBox",
        "owner": "Ext.util.Format",
        "doc": "<p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n",
        "linenr": 487,
        "return": {
          "type": "Object",
          "doc": "<p>An object with margin sizes for top, right, bottom and left</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-plural",
        "shortDoc": "Selectively do a plural form of a word based on a numeric value. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The value to compare against</p>\n",
            "name": "value"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The singular form of the word</p>\n",
            "name": "singular"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The plural form of the word (defaults to the singular with an \"s\")</p>\n",
            "name": "plural"
          }
        ],
        "name": "plural",
        "owner": "Ext.util.Format",
        "doc": "<p>Selectively do a plural form of a word based on a numeric value. For example, in a template,\n{commentCount:plural(\"Comment\")}  would result in \"1 Comment\" if commentCount was 1 or would be \"x Comments\"\nif the value is 0 or greater than 1.</p>\n",
        "linenr": 421,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-round",
        "shortDoc": "Rounds the passed number to the required decimal precision. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Number/String",
            "optional": false,
            "doc": "<p>The numeric value to round.</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of decimal places to which to round the first parameter's value.</p>\n",
            "name": "precision"
          }
        ],
        "name": "round",
        "owner": "Ext.util.Format",
        "doc": "<p>Rounds the passed number to the required decimal precision.</p>\n",
        "linenr": 274,
        "return": {
          "type": "Number",
          "doc": "<p>The rounded value.</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-stripScripts",
        "shortDoc": "Strips all script tags ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The text from which to strip script tags</p>\n",
            "name": "value"
          }
        ],
        "name": "stripScripts",
        "owner": "Ext.util.Format",
        "doc": "<p>Strips all script tags</p>\n",
        "linenr": 232,
        "return": {
          "type": "String",
          "doc": "<p>The stripped text</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-stripTags",
        "shortDoc": "Strips all HTML tags ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The text from which to strip tags</p>\n",
            "name": "value"
          }
        ],
        "name": "stripTags",
        "owner": "Ext.util.Format",
        "doc": "<p>Strips all HTML tags</p>\n",
        "linenr": 223,
        "return": {
          "type": "String",
          "doc": "<p>The stripped text</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-substr",
        "shortDoc": "Returns a substring from within an original string ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The original text</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The start index of the substring</p>\n",
            "name": "start"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The length of the substring</p>\n",
            "name": "length"
          }
        ],
        "name": "substr",
        "owner": "Ext.util.Format",
        "doc": "<p>Returns a substring from within an original string</p>\n",
        "linenr": 127,
        "return": {
          "type": "String",
          "doc": "<p>The substring</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-trim",
        "shortDoc": "Trims any whitespace from either side of a string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [

        ],
        "name": "trim",
        "owner": "Ext.util.Format",
        "doc": "<p>Trims any whitespace from either side of a string. See <a href=\"#/api/Ext.String-method-trim\" rel=\"Ext.String-method-trim\" class=\"docClass\">Ext.String.trim</a>.</p>\n",
        "linenr": 481,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-undef",
        "shortDoc": "Checks a reference and converts it to empty string if it is undefined ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Reference to check</p>\n",
            "name": "value"
          }
        ],
        "name": "undef",
        "owner": "Ext.util.Format",
        "doc": "<p>Checks a reference and converts it to empty string if it is undefined</p>\n",
        "linenr": 108,
        "return": {
          "type": "Mixed",
          "doc": "<p>Empty string if converted, otherwise the original value</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-uppercase",
        "shortDoc": "Converts a string to all upper case letters ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The text to convert</p>\n",
            "name": "value"
          }
        ],
        "name": "uppercase",
        "owner": "Ext.util.Format",
        "doc": "<p>Converts a string to all upper case letters</p>\n",
        "linenr": 147,
        "return": {
          "type": "String",
          "doc": "<p>The converted text</p>\n"
        },
        "html_filename": "Format.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Format.html#Ext-util-Format-method-usMoney",
        "shortDoc": "Format a number as US currency ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "params": [
          {
            "type": "Number/String",
            "optional": false,
            "doc": "<p>The numeric value to format</p>\n",
            "name": "value"
          }
        ],
        "name": "usMoney",
        "owner": "Ext.util.Format",
        "doc": "<p>Format a number as US currency</p>\n",
        "linenr": 156,
        "return": {
          "type": "String",
          "doc": "<p>The formatted currency string</p>\n"
        },
        "html_filename": "Format.html"
      }
    ],
    "property": [
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Format.html#Ext-util-Format-property-currencyAtEnd",
        "shortDoc": "This may be set to true to make the currency function\nappend the currency sign to the formatted value. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "name": "currencyAtEnd",
        "owner": "Ext.util.Format",
        "doc": "<p>This may be set to <code>true</code> to make the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function\nappend the currency sign to the formatted value.</p>\n\n\n<p>This defaults to <code>false</code>, but may be overridden in a locale file.</p>\n\n",
        "linenr": 99,
        "html_filename": "Format.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Format.html#Ext-util-Format-property-currencyPrecision",
        "shortDoc": "The number of decimal places that the currency function displays. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "name": "currencyPrecision",
        "owner": "Ext.util.Format",
        "doc": "<p>The number of decimal places that the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function displays.</p>\n\n\n<p>This defaults to <code>2</code>, but may be overridden in a locale file.</p>\n\n",
        "linenr": 83,
        "html_filename": "Format.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Format.html#Ext-util-Format-property-currencySign",
        "shortDoc": "The currency sign that the currency function displays. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "name": "currencySign",
        "owner": "Ext.util.Format",
        "doc": "<p>The currency sign that the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function displays.</p>\n\n\n<p>This defaults to <code>$</code>, but may be overridden in a locale file.</p>\n\n",
        "linenr": 91,
        "html_filename": "Format.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Format.html#Ext-util-Format-property-decimalSeparator",
        "shortDoc": "The character that the number function uses as a decimal point. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "name": "decimalSeparator",
        "owner": "Ext.util.Format",
        "doc": "<p>The character that the <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a> function uses as a decimal point.</p>\n\n\n<p>This defaults to <code>.</code>, but may be overridden in a locale file.</p>\n\n",
        "linenr": 75,
        "html_filename": "Format.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Format.html#Ext-util-Format-property-thousandSeparator",
        "shortDoc": "The character that the number function uses as a thousand separator. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "name": "thousandSeparator",
        "owner": "Ext.util.Format",
        "doc": "<p>The character that the <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a> function uses as a thousand separator.</p>\n\n\n<p>This defaults to <code>,</code>, but may be overridden in a locale file.</p>\n\n",
        "linenr": 67,
        "html_filename": "Format.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": true,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Format.html#Ext-util-Format",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.util.Format",
  "doc": "<p>This class is a centralized place for formatting functions inside the library. It includes\nfunctions to format various different types of data, such as text, dates and numeric values.</p>\n\n<p><strong>Localization</strong>\nThis class contains several options for localization. These can be set once the library has loaded,\nall calls to the functions from that point will use the locale settings that were specified.\nOptions include:\n- thousandSeparator\n- decimalSeparator\n- currenyPrecision\n- currencySign\n- currencyAtEnd\nThis class also uses the default date format defined here: <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n\n<p><strong>Using with renderers</strong>\nThere are two helper functions that return a new function that can be used in conjunction with\ngrid renderers:</p>\n\n<pre><code>columns: [{\n    dataIndex: 'date',\n    renderer: Ext.util.Format.dateRenderer('Y-m-d')\n}, {\n    dataIndex: 'time',\n    renderer: Ext.util.Format.numberRenderer('0.000')\n}]\n</code></pre>\n\n<p>Functions that only take a single argument can also be passed directly:</p>\n\n<pre><code>columns: [{\n    dataIndex: 'cost',\n    renderer: Ext.util.Format.usMoney\n}, {\n    dataIndex: 'productCode',\n    renderer: Ext.util.Format.uppercase\n}]\n</code></pre>\n\n<p><strong>Using with XTemplates</strong>\nXTemplates can also directly use <a href=\"#/api/Ext.util.Format\" rel=\"Ext.util.Format\" class=\"docClass\">Ext.util.Format</a> functions:</p>\n\n<pre><code>new Ext.XTemplate([\n    'Date: {startDate:date(\"Y-m-d\")}',\n    'Cost: {cost:usMoney}'\n]);\n</code></pre>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Format.html",
  "extends": null
});