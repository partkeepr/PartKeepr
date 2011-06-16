Ext.data.JsonP.Ext_Date({
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Date4.html#Ext-Date",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date to modify</p>\n",
            "name": "date"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>A valid date interval enum value.</p>\n",
            "name": "interval"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The amount to add to the current date.</p>\n",
            "name": "value"
          }
        ],
        "href": "Date4.html#Ext-Date-method-add",
        "return": {
          "type": "Date",
          "doc": "<p>The new Date instance.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Provides a convenient method for performing basic date arithmetic. ...",
        "static": false,
        "name": "add",
        "owner": "Ext.Date",
        "doc": "<p>Provides a convenient method for performing basic date arithmetic. This method\ndoes not modify the Date instance being called - it creates and returns\na new Date instance containing the resulting date value.</p>\n\n<p>Examples:</p>\n\n<pre><code>// Basic usage:\nvar dt = Ext.Date.add(new Date('10/29/2006'), Ext.Date.DAY, 5);\nconsole.log(dt); //returns 'Fri Nov 03 2006 00:00:00'\n\n// Negative values will be subtracted:\nvar dt2 = Ext.Date.add(new Date('10/1/2006'), Ext.Date.DAY, -5);\nconsole.log(dt2); //returns 'Tue Sep 26 2006 00:00:00'\n\n</code></pre>\n\n",
        "linenr": 1283,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date to check</p>\n",
            "name": "date"
          },
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>Start date</p>\n",
            "name": "start"
          },
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>End date</p>\n",
            "name": "end"
          }
        ],
        "href": "Date4.html#Ext-Date-method-between",
        "return": {
          "type": "Boolean",
          "doc": "<p>true if this date falls on or between the given start and end dates.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Checks if a date falls on or between the given start and end dates. ...",
        "static": false,
        "name": "between",
        "owner": "Ext.Date",
        "doc": "<p>Checks if a date falls on or between the given start and end dates.</p>\n",
        "linenr": 1341,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>true to create a clone of this date, clear the time and return it (defaults to false).</p>\n",
            "name": "clone"
          }
        ],
        "href": "Date4.html#Ext-Date-method-clearTime",
        "return": {
          "type": "Date",
          "doc": "<p>this or the clone.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Attempts to clear all time information from this Date by setting the time to midnight of the same day,\nautomatically ...",
        "static": false,
        "name": "clearTime",
        "owner": "Ext.Date",
        "doc": "<p>Attempts to clear all time information from this Date by setting the time to midnight of the same day,\nautomatically adjusting for Daylight Saving Time (DST) where applicable.\n(note: DST timezone information for the browser's host operating system is assumed to be up-to-date)</p>\n",
        "linenr": 1247,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-clone",
        "return": {
          "type": "Date",
          "doc": "<p>The new Date instance.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Creates and returns a new Date instance with the exact same date value as the called instance. ...",
        "static": false,
        "name": "clone",
        "owner": "Ext.Date",
        "doc": "<p>Creates and returns a new Date instance with the exact same date value as the called instance.\nDates are copied and passed by reference, so if a copied date variable is modified later, the original\nvariable will also be changed.  When the intention is to create a new variable that will not\nmodify the original instance, you should create a clone.</p>\n\n<p>Example of correctly cloning a date:</p>\n\n<pre><code>//wrong way:\nvar orig = new Date('10/1/2006');\nvar copy = orig;\ncopy.setDate(5);\nconsole.log(orig);  //returns 'Thu Oct 05 2006'!\n\n//correct way:\nvar orig = new Date('10/1/2006'),\n    copy = Ext.Date.clone(orig);\ncopy.setDate(5);\nconsole.log(orig);  //returns 'Thu Oct 01 2006'\n</code></pre>\n\n",
        "linenr": 1209,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date to format</p>\n",
            "name": "date"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The format string</p>\n",
            "name": "format"
          }
        ],
        "href": "Date4.html#Ext-Date-method-format",
        "return": {
          "type": "String",
          "doc": "<p>The formatted date</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Formats a date given the supplied format string. ...",
        "static": false,
        "name": "format",
        "owner": "Ext.Date",
        "doc": "<p>Formats a date given the supplied format string.</p>\n",
        "linenr": 1013,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getDayOfYear",
        "return": {
          "type": "Number",
          "doc": "<p>0 to 364 (365 in leap years).</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the numeric day number of the year, adjusted for leap year. ...",
        "static": false,
        "name": "getDayOfYear",
        "owner": "Ext.Date",
        "doc": "<p>Get the numeric day number of the year, adjusted for leap year.</p>\n",
        "linenr": 1069,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getDaysInMonth",
        "return": {
          "type": "Number",
          "doc": "<p>The number of days in the month.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the number of days in the current month, adjusted for leap year. ...",
        "static": false,
        "name": "getDaysInMonth",
        "owner": "Ext.Date",
        "doc": "<p>Get the number of days in the current month, adjusted for leap year.</p>\n",
        "linenr": 1171,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The first date</p>\n",
            "name": "dateA"
          },
          {
            "type": "Date",
            "optional": true,
            "doc": "<p>(optional) The second date, defaults to now</p>\n",
            "name": "dateB"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getElapsed",
        "return": {
          "type": "Number",
          "doc": "<p>The difference in milliseconds</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Returns the number of milliseconds between two dates ...",
        "static": false,
        "name": "getElapsed",
        "owner": "Ext.Date",
        "doc": "<p>Returns the number of milliseconds between two dates</p>\n",
        "linenr": 155,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getFirstDateOfMonth",
        "return": {
          "type": "Date",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the date of the first day of the month in which this date resides. ...",
        "static": false,
        "name": "getFirstDateOfMonth",
        "owner": "Ext.Date",
        "doc": "<p>Get the date of the first day of the month in which this date resides.</p>\n",
        "linenr": 1153,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getFirstDayOfMonth",
        "return": {
          "type": "Number",
          "doc": "<p>The day number (0-6).</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the first day of the current month, adjusted for leap year. ...",
        "static": false,
        "name": "getFirstDayOfMonth",
        "owner": "Ext.Date",
        "doc": "<p>Get the first day of the current month, adjusted for leap year.  The returned value\nis the numeric day index within the week (0-6) which can be used in conjunction with\nthe monthNames array to retrieve the textual day name.\nExample:</p>\n\n<pre><code>var dt = new Date('1/10/2007'),\n    firstDay = Ext.Date.getFirstDayOfMonth(dt);\nconsole.log(Ext.Date.dayNames[firstDay]); //output: 'Monday'\n</code></pre>\n\n",
        "linenr": 1117,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to separate the hours and minutes with a colon (defaults to false).</p>\n",
            "name": "colon"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getGMTOffset",
        "return": {
          "type": "String",
          "doc": "<p>The 4-character offset string prefixed with + or - (e.g. '-0600').</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the offset from GMT of the current date (equivalent to the format specifier 'O'). ...",
        "static": false,
        "name": "getGMTOffset",
        "owner": "Ext.Date",
        "doc": "<p>Get the offset from GMT of the current date (equivalent to the format specifier 'O').</p>\n",
        "linenr": 1055,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getLastDateOfMonth",
        "return": {
          "type": "Date",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the date of the last day of the month in which this date resides. ...",
        "static": false,
        "name": "getLastDateOfMonth",
        "owner": "Ext.Date",
        "doc": "<p>Get the date of the last day of the month in which this date resides.</p>\n",
        "linenr": 1162,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getLastDayOfMonth",
        "return": {
          "type": "Number",
          "doc": "<p>The day number (0-6).</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the last day of the current month, adjusted for leap year. ...",
        "static": false,
        "name": "getLastDayOfMonth",
        "owner": "Ext.Date",
        "doc": "<p>Get the last day of the current month, adjusted for leap year.  The returned value\nis the numeric day index within the week (0-6) which can be used in conjunction with\nthe monthNames array to retrieve the textual day name.\nExample:</p>\n\n<pre><code>var dt = new Date('1/10/2007'),\n    lastDay = Ext.Date.getLastDayOfMonth(dt);\nconsole.log(Ext.Date.dayNames[lastDay]); //output: 'Wednesday'\n</code></pre>\n\n",
        "linenr": 1135,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getSuffix",
        "return": {
          "type": "String",
          "doc": "<p>'st, 'nd', 'rd' or 'th'.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the English ordinal suffix of the current day (equivalent to the format specifier 'S'). ...",
        "static": false,
        "name": "getSuffix",
        "owner": "Ext.Date",
        "doc": "<p>Get the English ordinal suffix of the current day (equivalent to the format specifier 'S').</p>\n",
        "linenr": 1187,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getTimezone",
        "return": {
          "type": "String",
          "doc": "<p>The abbreviated timezone name (e.g. 'CST', 'PDT', 'EDT', 'MPST' ...).</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the timezone abbreviation of the current date (equivalent to the format specifier 'T'). ...",
        "static": false,
        "name": "getTimezone",
        "owner": "Ext.Date",
        "doc": "<p>Get the timezone abbreviation of the current date (equivalent to the format specifier 'T').</p>\n\n<p>Note: The date string returned by the javascript Date object's toString() method varies\nbetween browsers (e.g. FF vs IE) and system region settings (e.g. IE in Asia vs IE in America).\nFor a given date string e.g. \"Thu Oct 25 2007 22:55:35 GMT+0800 (Malay Peninsula Standard Time)\",\ngetTimezone() first tries to get the timezone abbreviation from between a pair of parentheses\n(which may or may not be present), failing which it proceeds to get the timezone abbreviation\nfrom the GMT offset portion of the date string.</p>\n",
        "linenr": 1027,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getWeekOfYear",
        "return": {
          "type": "Number",
          "doc": "<p>1 to 53</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the numeric ISO-8601 week number of the year. ...",
        "static": false,
        "name": "getWeekOfYear",
        "owner": "Ext.Date",
        "doc": "<p>Get the numeric ISO-8601 week number of the year.\n(equivalent to the format specifier 'W', but without a leading zero).</p>\n",
        "linenr": 1086,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-isDST",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the current date is affected by DST.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Checks if the current date is affected by Daylight Saving Time (DST). ...",
        "static": false,
        "name": "isDST",
        "owner": "Ext.Date",
        "doc": "<p>Checks if the current date is affected by Daylight Saving Time (DST).</p>\n",
        "linenr": 1236,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The date</p>\n",
            "name": "date"
          }
        ],
        "href": "Date4.html#Ext-Date-method-isLeapYear",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the current date falls within a leap year, false otherwise.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Checks if the current date falls within a leap year. ...",
        "static": false,
        "name": "isLeapYear",
        "owner": "Ext.Date",
        "doc": "<p>Checks if the current date falls within a leap year.</p>\n",
        "linenr": 1107,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Date4.html#Ext-Date-method-now",
        "return": {
          "type": "Date",
          "doc": "<p>The current timestamp</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Returns the current timestamp ...",
        "static": false,
        "name": "now",
        "owner": "Ext.Date",
        "doc": "<p>Returns the current timestamp</p>\n",
        "linenr": 131,
        "html_filename": "Date4.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "singleton": true,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.Date",
  "doc": "<p>A set of useful static methods to deal with date\nNote that if <a href=\"#/api/Ext.Date\" rel=\"Ext.Date\" class=\"docClass\">Ext.Date</a> is required and loaded, it will copy all methods / properties to\nthis object for convenience</p>\n\n<p>The date parsing and formatting syntax contains a subset of\n<a href=\"http://www.php.net/date\">PHP's date() function</a>, and the formats that are\nsupported will provide results equivalent to their PHP versions.</p>\n\n<p>The following is a list of all currently supported formats:</p>\n\n<pre class=\"\">\nFormat  Description                                                               Example returned values\n------  -----------------------------------------------------------------------   -----------------------\n  d     Day of the month, 2 digits with leading zeros                             01 to 31\n  D     A short textual representation of the day of the week                     Mon to Sun\n  j     Day of the month without leading zeros                                    1 to 31\n  l     A full textual representation of the day of the week                      Sunday to Saturday\n  N     ISO-8601 numeric representation of the day of the week                    1 (for Monday) through 7 (for Sunday)\n  S     English ordinal suffix for the day of the month, 2 characters             st, nd, rd or th. Works well with j\n  w     Numeric representation of the day of the week                             0 (for Sunday) to 6 (for Saturday)\n  z     The day of the year (starting from 0)                                     0 to 364 (365 in leap years)\n  W     ISO-8601 week number of year, weeks starting on Monday                    01 to 53\n  F     A full textual representation of a month, such as January or March        January to December\n  m     Numeric representation of a month, with leading zeros                     01 to 12\n  M     A short textual representation of a month                                 Jan to Dec\n  n     Numeric representation of a month, without leading zeros                  1 to 12\n  t     Number of days in the given month                                         28 to 31\n  L     Whether it&#39;s a leap year                                                  1 if it is a leap year, 0 otherwise.\n  o     ISO-8601 year number (identical to (Y), but if the ISO week number (W)    Examples: 1998 or 2004\n        belongs to the previous or next year, that year is used instead)\n  Y     A full numeric representation of a year, 4 digits                         Examples: 1999 or 2003\n  y     A two digit representation of a year                                      Examples: 99 or 03\n  a     Lowercase Ante meridiem and Post meridiem                                 am or pm\n  A     Uppercase Ante meridiem and Post meridiem                                 AM or PM\n  g     12-hour format of an hour without leading zeros                           1 to 12\n  G     24-hour format of an hour without leading zeros                           0 to 23\n  h     12-hour format of an hour with leading zeros                              01 to 12\n  H     24-hour format of an hour with leading zeros                              00 to 23\n  i     Minutes, with leading zeros                                               00 to 59\n  s     Seconds, with leading zeros                                               00 to 59\n  u     Decimal fraction of a second                                              Examples:\n        (minimum 1 digit, arbitrary number of digits allowed)                     001 (i.e. 0.001s) or\n                                                                                  100 (i.e. 0.100s) or\n                                                                                  999 (i.e. 0.999s) or\n                                                                                  999876543210 (i.e. 0.999876543210s)\n  O     Difference to Greenwich time (GMT) in hours and minutes                   Example: +1030\n  P     Difference to Greenwich time (GMT) with colon between hours and minutes   Example: -08:00\n  T     Timezone abbreviation of the machine running the code                     Examples: EST, MDT, PDT ...\n  Z     Timezone offset in seconds (negative if west of UTC, positive if east)    -43200 to 50400\n  c     ISO 8601 date\n        Notes:                                                                    Examples:\n        1) If unspecified, the month / day defaults to the current month / day,   1991 or\n           the time defaults to midnight, while the timezone defaults to the      1992-10 or\n           browser's timezone. If a time is specified, it must include both hours 1993-09-20 or\n           and minutes. The \"T\" delimiter, seconds, milliseconds and timezone     1994-08-19T16:20+01:00 or\n           are optional.                                                          1995-07-18T17:21:28-02:00 or\n        2) The decimal fraction of a second, if specified, must contain at        1996-06-17T18:22:29.98765+03:00 or\n           least 1 digit (there is no limit to the maximum number                 1997-05-16T19:23:30,12345-0400 or\n           of digits allowed), and may be delimited by either a '.' or a ','      1998-04-15T20:24:31.2468Z or\n        Refer to the examples on the right for the various levels of              1999-03-14T20:24:32Z or\n        date-time granularity which are supported, or see                         2000-02-13T21:25:33\n        http://www.w3.org/TR/NOTE-datetime for more info.                         2001-01-12 22:26:34\n  U     Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)                1193432466 or -2138434463\n  MS    Microsoft AJAX serialized dates                                           \\/Date(1238606590509)\\/ (i.e. UTC milliseconds since epoch) or\n                                                                                  \\/Date(1238606590509+0800)\\/\n</pre>\n\n\n<p>Example usage (note that you must escape format specifiers with '\\' to render them as character literals):</p>\n\n<pre><code>// Sample date:\n// 'Wed Jan 10 2007 15:05:01 GMT-0600 (Central Standard Time)'\n\nvar dt = new Date('1/10/2007 03:05:01 PM GMT-0600');\nconsole.log(Ext.Date.format(dt, 'Y-m-d'));                          // 2007-01-10\nconsole.log(Ext.Date.format(dt, 'F j, Y, g:i a'));                  // January 10, 2007, 3:05 pm\nconsole.log(Ext.Date.format(dt, 'l, \\\\t\\\\he jS \\\\of F Y h:i:s A')); // Wednesday, the 10th of January 2007 03:05:01 PM\n</code></pre>\n\n\n<p>Here are some standard date/time patterns that you might find helpful.  They\nare not part of the source of <a href=\"#/api/Ext.Date\" rel=\"Ext.Date\" class=\"docClass\">Ext.Date</a>, but to use them you can simply copy this\nblock of code into any script that is included after <a href=\"#/api/Ext.Date\" rel=\"Ext.Date\" class=\"docClass\">Ext.Date</a> and they will also become\nglobally available on the Date object.  Feel free to add or remove patterns as needed in your code.</p>\n\n<pre><code>Ext.Date.patterns = {\n    ISO8601Long:\"Y-m-d H:i:s\",\n    ISO8601Short:\"Y-m-d\",\n    ShortDate: \"n/j/Y\",\n    LongDate: \"l, F d, Y\",\n    FullDateTime: \"l, F d, Y g:i:s A\",\n    MonthDay: \"F d\",\n    ShortTime: \"g:i A\",\n    LongTime: \"g:i:s A\",\n    SortableDateTime: \"Y-m-d\\\\TH:i:s\",\n    UniversalSortableDateTime: \"Y-m-d H:i:sO\",\n    YearMonth: \"F, Y\"\n};\n</code></pre>\n\n\n<p>Example usage:</p>\n\n<pre><code>var dt = new Date();\nconsole.log(Ext.Date.format(dt, Ext.Date.patterns.ShortDate));\n</code></pre>\n\n\n<p>Developer-written, custom formats may be used by supplying both a formatting and a parsing function\nwhich perform to specialized requirements. The functions are stored in parseFunctions and formatFunctions.</p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Date4.html",
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The format to check</p>\n",
            "name": "format"
          }
        ],
        "href": "Date4.html#Ext-Date-method-formatContainsDateInfo",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the format contains information about\ndate/day information.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Checks if the specified format contains information about\nanything other than the time. ...",
        "static": true,
        "name": "formatContainsDateInfo",
        "owner": "Ext.Date",
        "doc": "<p>Checks if the specified format contains information about\nanything other than the time.</p>\n",
        "linenr": 473,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The format to check</p>\n",
            "name": "format"
          }
        ],
        "href": "Date4.html#Ext-Date-method-formatContainsHourInfo",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the format contains hour information</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Checks if the specified format contains hour information ...",
        "static": true,
        "name": "formatContainsHourInfo",
        "owner": "Ext.Date",
        "doc": "<p>Checks if the specified format contains hour information</p>\n",
        "linenr": 458,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The short/full month name.</p>\n",
            "name": "name"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getMonthNumber",
        "return": {
          "type": "Number",
          "doc": "<p>The zero-based javascript month number.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the zero-based javascript month number for the given short/full month name. ...",
        "static": true,
        "name": "getMonthNumber",
        "owner": "Ext.Date",
        "doc": "<p>Get the zero-based javascript month number for the given short/full month name.\nOverride this function for international dates.</p>\n",
        "linenr": 446,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>A zero-based javascript day number.</p>\n",
            "name": "day"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getShortDayName",
        "return": {
          "type": "String",
          "doc": "<p>The short day name.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the short day name for the given day number. ...",
        "static": true,
        "name": "getShortDayName",
        "owner": "Ext.Date",
        "doc": "<p>Get the short day name for the given day number.\nOverride this function for international dates.</p>\n",
        "linenr": 435,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>A zero-based javascript month number.</p>\n",
            "name": "month"
          }
        ],
        "href": "Date4.html#Ext-Date-method-getShortMonthName",
        "return": {
          "type": "String",
          "doc": "<p>The short month name.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Get the short month name for the given month number. ...",
        "static": true,
        "name": "getShortMonthName",
        "owner": "Ext.Date",
        "doc": "<p>Get the short month name for the given month number.\nOverride this function for international dates.</p>\n",
        "linenr": 424,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>4-digit year</p>\n",
            "name": "year"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>1-based month-of-year</p>\n",
            "name": "month"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Day of month</p>\n",
            "name": "day"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) Hour</p>\n",
            "name": "hour"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) Minute</p>\n",
            "name": "minute"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) Second</p>\n",
            "name": "second"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) Millisecond</p>\n",
            "name": "millisecond"
          }
        ],
        "href": "Date4.html#Ext-Date-method-isValid",
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the passed parameters do not cause a Date \"rollover\", false otherwise.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Checks if the passed Date parameters will cause a javascript Date \"rollover\". ...",
        "static": true,
        "name": "isValid",
        "owner": "Ext.Date",
        "doc": "<p>Checks if the passed Date parameters will cause a javascript Date \"rollover\".</p>\n",
        "linenr": 564,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The raw date string.</p>\n",
            "name": "input"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The expected date string format.</p>\n",
            "name": "format"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to validate date strings while parsing (i.e. prevents javascript Date \"rollover\")</p>\n\n<pre><code>                    (defaults to false). Invalid date strings will return null when parsed.\n</code></pre>\n",
            "name": "strict"
          }
        ],
        "href": "Date4.html#Ext-Date-method-parse",
        "return": {
          "type": "Date",
          "doc": "<p>The parsed Date.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Parses the passed string using the specified date format. ...",
        "static": true,
        "name": "parse",
        "owner": "Ext.Date",
        "doc": "<p>Parses the passed string using the specified date format.\nNote that this function expects normal calendar dates, meaning that months are 1-based (i.e. 1 = January).\nThe defaults hash will be used for any date value (i.e. year, month, day, hour, minute, second or millisecond)\nwhich cannot be found in the passed string. If a corresponding default date value has not been specified in the defaults hash,\nthe current date's year, month, day or DST-adjusted zero-hour time value will be used instead.\nKeep in mind that the input date string must precisely match the specified format string\nin order for the parse operation to be successful (failed parse operations return a null value).</p>\n\n<p>Example:</p>\n\n\n<pre><code>//dt = Fri May 25 2007 (current date)\nvar dt = new Date();\n\n//dt = Thu May 25 2006 (today&#39;s month/day in 2006)\ndt = Ext.Date.parse(\"2006\", \"Y\");\n\n//dt = Sun Jan 15 2006 (all date parts specified)\ndt = Ext.Date.parse(\"2006-01-15\", \"Y-m-d\");\n\n//dt = Sun Jan 15 2006 15:20:01\ndt = Ext.Date.parse(\"2006-01-15 3:20:01 PM\", \"Y-m-d g:i:s A\");\n\n// attempt to parse Sun Feb 29 2006 03:20:01 in strict mode\ndt = Ext.Date.parse(\"2006-02-29 03:20:01\", \"Y-m-d H:i:s\", true); // returns null\n</code></pre>\n\n",
        "linenr": 595,
        "html_filename": "Date4.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-DAY",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "static": true,
        "name": "DAY",
        "owner": "Ext.Date",
        "doc": "<p>Date interval constant</p>\n",
        "linenr": 282,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-HOUR",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "static": true,
        "name": "HOUR",
        "owner": "Ext.Date",
        "doc": "<p>Date interval constant</p>\n",
        "linenr": 276,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-MILLI",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "static": true,
        "name": "MILLI",
        "owner": "Ext.Date",
        "doc": "<p>Date interval constant</p>\n",
        "linenr": 255,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-MINUTE",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "static": true,
        "name": "MINUTE",
        "owner": "Ext.Date",
        "doc": "<p>Date interval constant</p>\n",
        "linenr": 269,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-MONTH",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "static": true,
        "name": "MONTH",
        "owner": "Ext.Date",
        "doc": "<p>Date interval constant</p>\n",
        "linenr": 289,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-SECOND",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "static": true,
        "name": "SECOND",
        "owner": "Ext.Date",
        "doc": "<p>Date interval constant</p>\n",
        "linenr": 262,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-YEAR",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "static": true,
        "name": "YEAR",
        "owner": "Ext.Date",
        "doc": "<p>Date interval constant</p>\n",
        "linenr": 296,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-dayNames",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "An array of textual day names. ...",
        "static": true,
        "name": "dayNames",
        "owner": "Ext.Date",
        "doc": "<p>An array of textual day names.\nOverride these values for international dates.\nExample:</p>\n\n<pre><code>Ext.Date.dayNames = [\n    'SundayInYourLang',\n    'MondayInYourLang',\n    ...\n];\n</code></pre>\n\n",
        "linenr": 334,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-defaultFormat",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "The date format string that the Ext.util.Format.dateRenderer\nand Ext.util.Format.date functions use. ...",
        "static": true,
        "name": "defaultFormat",
        "owner": "Ext.Date",
        "doc": "<p>The date format string that the <a href=\"#/api/Ext.util.Format-method-dateRenderer\" rel=\"Ext.util.Format-method-dateRenderer\" class=\"docClass\">Ext.util.Format.dateRenderer</a>\nand <a href=\"#/api/Ext.util.Format-method-date\" rel=\"Ext.util.Format-method-date\" class=\"docClass\">Ext.util.Format.date</a> functions use.  See <a href=\"#/api/Ext.Date\" rel=\"Ext.Date\" class=\"docClass\">Ext.Date</a> for details.</p>\n\n\n<p>This defaults to <code>m/d/Y</code>, but may be overridden in a locale file.</p>\n\n",
        "linenr": 415,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-defaults",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "An object hash containing default date values used during date parsing. ...",
        "static": true,
        "name": "defaults",
        "owner": "Ext.Date",
        "doc": "<p>An object hash containing default date values used during date parsing.</p>\n\n\n<p>The following properties are available:<div class=\"mdetail-params\"><ul>\n<li><code>y</code> : Number<div class=\"sub-desc\">The default year value. (defaults to undefined)</div></li>\n<li><code>m</code> : Number<div class=\"sub-desc\">The default 1-based month value. (defaults to undefined)</div></li>\n<li><code>d</code> : Number<div class=\"sub-desc\">The default day value. (defaults to undefined)</div></li>\n<li><code>h</code> : Number<div class=\"sub-desc\">The default hour value. (defaults to undefined)</div></li>\n<li><code>i</code> : Number<div class=\"sub-desc\">The default minute value. (defaults to undefined)</div></li>\n<li><code>s</code> : Number<div class=\"sub-desc\">The default second value. (defaults to undefined)</div></li>\n<li><code>ms</code> : Number<div class=\"sub-desc\">The default millisecond value. (defaults to undefined)</div></li>\n</ul></div></p>\n\n\n<p>Override these properties to customize the default date values used by the parse method.</p>\n\n\n<p><b>Note: In countries which experience Daylight Saving Time (i.e. DST), the <tt>h</tt>, <tt>i</tt>, <tt>s</tt>\nand <tt>ms</tt> properties may coincide with the exact time in which DST takes effect.\nIt is the responsiblity of the developer to account for this.</b></p>\n\n\n<p>Example Usage:</p>\n\n<pre><code>// set default day value to the first day of the month\nExt.Date.defaults.d = 1;\n\n// parse a February date string containing only year and month values.\n// setting the default day value to 1 prevents weird date rollover issues\n// when attempting to parse the following date string on, for example, March 31st 2009.\nExt.Date.parse('2009-02', 'Y-m'); // returns a Date object representing February 1st 2009\n</code></pre>\n\n",
        "linenr": 303,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-formatCodes",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "The base format-code to formatting-function hashmap used by the format method. ...",
        "static": true,
        "name": "formatCodes",
        "owner": "Ext.Date",
        "doc": "<p>The base format-code to formatting-function hashmap used by the <a href=\"#/api/Ext.Date-method-format\" rel=\"Ext.Date-method-format\" class=\"docClass\">format</a> method.\nFormatting functions are strings (or functions which return strings) which\nwill return the appropriate value when evaluated in the context of the Date object\nfrom which the <a href=\"#/api/Ext.Date-method-format\" rel=\"Ext.Date-method-format\" class=\"docClass\">format</a> method is called.\nAdd to / override these mappings for custom date formatting.\nNote: Ext.Date.format() treats characters as literals if an appropriate mapping cannot be found.\nExample:</p>\n\n<pre><code>Ext.Date.formatCodes.x = \"Ext.util.Format.leftPad(this.getDate(), 2, '0')\";\nconsole.log(Ext.Date.format(new Date(), 'X'); // returns the current day of the month\n</code></pre>\n\n",
        "linenr": 491,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-formatFunctions",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "An object hash in which each property is a date formatting function. ...",
        "static": true,
        "name": "formatFunctions",
        "owner": "Ext.Date",
        "doc": "<p>An object hash in which each property is a date formatting function. The property name is the\nformat string which corresponds to the produced formatted date string.</p>\n\n\n<p>This object is automatically populated with date formatting functions as\ndate formats are requested for <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> standard formatting strings.</p>\n\n\n<p>Custom formatting functions may be inserted into this object, keyed by a name which from then on\nmay be used as a format string to <a href=\"#/api/Ext.Date-method-format\" rel=\"Ext.Date-method-format\" class=\"docClass\">format</a>. Example:</p>\n\n\n<pre><code>Ext.Date.formatFunctions['x-date-format'] = myDateFormatter;\n</code></pre>\n\n\n<p>A formatting function should return a string representation of the passed Date object, and is passed the following parameters:<div class=\"mdetail-params\"><ul>\n<li><code>date</code> : Date<div class=\"sub-desc\">The Date to format.</div></li>\n</ul></div></p>\n\n\n<p>To enable date strings to also be <i>parsed</i> according to that format, a corresponding\nparsing function must be placed into the parseFunctions property.\n\n",
        "linenr": 228,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-monthNames",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "An array of textual month names. ...",
        "static": true,
        "name": "monthNames",
        "owner": "Ext.Date",
        "doc": "<p>An array of textual month names.\nOverride these values for international dates.\nExample:</p>\n\n<pre><code>Ext.Date.monthNames = [\n    'JanInYourLang',\n    'FebInYourLang',\n    ...\n];\n</code></pre>\n\n",
        "linenr": 358,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-monthNumbers",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "An object hash of zero-based javascript month numbers (with short month names as keys. ...",
        "static": true,
        "name": "monthNumbers",
        "owner": "Ext.Date",
        "doc": "<p>An object hash of zero-based javascript month numbers (with short month names as keys. note: keys are case-sensitive).\nOverride these values for international dates.\nExample:</p>\n\n<pre><code>Ext.Date.monthNumbers = {\n    'ShortJanNameInYourLang':0,\n    'ShortFebNameInYourLang':1,\n    ...\n};\n</code></pre>\n\n",
        "linenr": 387,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-parseFunctions",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "An object hash in which each property is a date parsing function. ...",
        "static": true,
        "name": "parseFunctions",
        "owner": "Ext.Date",
        "doc": "<p>An object hash in which each property is a date parsing function. The property name is the\nformat string which that function parses.</p>\n\n\n<p>This object is automatically populated with date parsing functions as\ndate formats are requested for <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> standard formatting strings.</p>\n\n\n<p>Custom parsing functions may be inserted into this object, keyed by a name which from then on\nmay be used as a format string to parse.<p>\n<p>Example:</p>\n<pre><code>Ext.Date.parseFunctions['x-date-format'] = myDateParser;\n</code></pre>\n<p>A parsing function should return a Date object, and is passed the following parameters:<div class=\"mdetail-params\"><ul>\n<li><code>date</code> : String<div class=\"sub-desc\">The date string to parse.</div></li>\n<li><code>strict</code> : Boolean<div class=\"sub-desc\">True to validate date strings while parsing\n(i.e. prevent javascript Date \"rollover\") (The default must be false).\nInvalid date strings should return null when parsed.</div></li>\n</ul></div></p>\n<p>To enable Dates to also be <i>formatted</i> according to that format, a corresponding\nformatting function must be placed into the formatFunctions property.\n\n",
        "linenr": 195,
        "html_filename": "Date4.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Date4.html#Ext-Date-property-useStrict",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Date.js",
        "private": false,
        "shortDoc": "Global flag which determines if strict date parsing should be used. ...",
        "static": true,
        "name": "useStrict",
        "owner": "Ext.Date",
        "doc": "<p>Global flag which determines if strict date parsing should be used.\nStrict date parsing will not roll-over invalid dates, which is the\ndefault behaviour of javascript Date objects.\n(see parse for more information)\nDefaults to <tt>false</tt>.</p>\n",
        "linenr": 165,
        "html_filename": "Date4.html"
      }
    ]
  },
  "extends": null
});