/**
 * @class Ext.ux.Exporter.ExcelFormatter.Workbook
 * @extends Object
 * Represents an Excel workbook
 */
Ext.define("Ext.ux.exporter.excelFormatter.Workbook", {

  constructor: function(config) {
    config = config || {};

    Ext.apply(this, config, {
      /**
       * @property title
       * @type String
       * The title of the workbook (defaults to "Workbook")
       */
      title: "Workbook",

      /**
       * @property worksheets
       * @type Array
       * The array of worksheets inside this workbook
       */
      worksheets: [],

      /**
       * @property compileWorksheets
       * @type Array
       * Array of all rendered Worksheets
       */
      compiledWorksheets: [],

      /**
       * @property cellBorderColor
       * @type String
       * The colour of border to use for each Cell
       */
      cellBorderColor: "#e4e4e4",

      /**
       * @property styles
       * @type Array
       * The array of Ext.ux.Exporter.ExcelFormatter.Style objects attached to this workbook
       */
      styles: [],

      /**
       * @property compiledStyles
       * @type Array
       * Array of all rendered Ext.ux.Exporter.ExcelFormatter.Style objects for this workbook
       */
      compiledStyles: [],

      /**
       * @property hasDefaultStyle
       * @type Boolean
       * True to add the default styling options to all cells (defaults to true)
       */
      hasDefaultStyle: true,

      /**
       * @property hasStripeStyles
       * @type Boolean
       * True to add the striping styles (defaults to true)
       */
      hasStripeStyles: true,

      windowHeight    : 9000,
      windowWidth     : 50000,
      protectStructure: false,
      protectWindows  : false
    });

    if (this.hasDefaultStyle) this.addDefaultStyle();
    if (this.hasStripeStyles) this.addStripedStyles();

    this.addTitleStyle();
    this.addHeaderStyle();
  },

  render: function() {
    this.compileStyles();
    this.joinedCompiledStyles = this.compiledStyles.join("");

    this.compileWorksheets();
    this.joinedWorksheets = this.compiledWorksheets.join("");

    return this.tpl.apply(this);
  },

  /**
   * Adds a worksheet to this workbook based on a store and optional config
   * @param {Ext.data.Store} store The store to initialize the worksheet with
   * @param {Object} config Optional config object
   * @return {Ext.ux.Exporter.ExcelFormatter.Worksheet} The worksheet
   */
  addWorksheet: function(store, config) {
    var worksheet = new Ext.ux.exporter.excelFormatter.Worksheet(store, config);

    this.worksheets.push(worksheet);

    return worksheet;
  },

  /**
   * Adds a new Ext.ux.Exporter.ExcelFormatter.Style to this Workbook
   * @param {Object} config The style config, passed to the Style constructor (required)
   */
  addStyle: function(config) {
    var style = new Ext.ux.exporter.excelFormatter.Style(config || {});

    this.styles.push(style);

    return style;
  },

  /**
   * Compiles each Style attached to this Workbook by rendering it
   * @return {Array} The compiled styles array
   */
  compileStyles: function() {
    this.compiledStyles = [];

    Ext.each(this.styles, function(style) {
      this.compiledStyles.push(style.render());
    }, this);

    return this.compiledStyles;
  },

  /**
   * Compiles each Worksheet attached to this Workbook by rendering it
   * @return {Array} The compiled worksheets array
   */
  compileWorksheets: function() {
    this.compiledWorksheets = [];

    Ext.each(this.worksheets, function(worksheet) {
      this.compiledWorksheets.push(worksheet.render());
    }, this);

    return this.compiledWorksheets;
  },

  tpl: new Ext.XTemplate(
    '<?xml version="1.0" encoding="utf-8"?>',
    '<ss:Workbook xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:o="urn:schemas-microsoft-com:office:office">',
      '<o:DocumentProperties>',
        '<o:Title>{title}</o:Title>',
      '</o:DocumentProperties>',
      '<ss:ExcelWorkbook>',
        '<ss:WindowHeight>{windowHeight}</ss:WindowHeight>',
        '<ss:WindowWidth>{windowWidth}</ss:WindowWidth>',
        '<ss:ProtectStructure>{protectStructure}</ss:ProtectStructure>',
        '<ss:ProtectWindows>{protectWindows}</ss:ProtectWindows>',
      '</ss:ExcelWorkbook>',
      '<ss:Styles>',
        '{joinedCompiledStyles}',
      '</ss:Styles>',
        '{joinedWorksheets}',
    '</ss:Workbook>'
  ),

  /**
   * Adds the default Style to this workbook. This sets the default font face and size, as well as cell borders
   */
  addDefaultStyle: function() {
    var borderProperties = [
      {name: "Color",     value: this.cellBorderColor},
      {name: "Weight",    value: "1"},
      {name: "LineStyle", value: "Continuous"}
    ];

    this.addStyle({
      id: 'Default',
      attributes: [
        {
          name: "Alignment",
          properties: [
            {name: "Vertical", value: "Top"},
            {name: "WrapText", value: "1"}
          ]
        },
        {
          name: "Font",
          properties: [
            {name: "FontName", value: "arial"},
            {name: "Size",     value: "10"}
          ]
        },
        {name: "Interior"}, {name: "NumberFormat"}, {name: "Protection"},
        {
          name: "Borders",
          children: [
            {
              name: "Border",
              properties: [{name: "Position", value: "Top"}].concat(borderProperties)
            },
            {
              name: "Border",
              properties: [{name: "Position", value: "Bottom"}].concat(borderProperties)
            },
            {
              name: "Border",
              properties: [{name: "Position", value: "Left"}].concat(borderProperties)
            },
            {
              name: "Border",
              properties: [{name: "Position", value: "Right"}].concat(borderProperties)
            }
          ]
        }
      ]
    });
  },

  addTitleStyle: function() {
    this.addStyle({
      id: "title",
      attributes: [
        {name: "Borders"},
        {name: "Font"},
        {
          name: "NumberFormat",
          properties: [
            {name: "Format", value: "@"}
          ]
        },
        {
          name: "Alignment",
          properties: [
            {name: "WrapText",   value: "1"},
            {name: "Horizontal", value: "Center"},
            {name: "Vertical",   value: "Center"}
          ]
        }
      ]
    });
  },

  addHeaderStyle: function() {
    this.addStyle({
      id: "headercell",
      attributes: [
        {
          name: "Font",
          properties: [
            {name: "Bold", value: "1"},
            {name: "Size", value: "10"}
          ]
        },
        {
          name: "Interior",
          properties: [
            {name: "Pattern", value: "Solid"},
            {name: "Color",   value: "#A3C9F1"}
          ]
        },
        {
          name: "Alignment",
          properties: [
            {name: "WrapText",   value: "1"},
            {name: "Horizontal", value: "Center"}
          ]
        }
      ]
    });
  },

  /**
   * Adds the default striping styles to this workbook
   */
  addStripedStyles: function() {
    this.addStyle({
      id: "even",
      attributes: [
        {
          name: "Interior",
          properties: [
            {name: "Pattern", value: "Solid"},
            {name: "Color",   value: "#CCFFFF"}
          ]
        }
      ]
    });

    this.addStyle({
      id: "odd",
      attributes: [
        {
          name: "Interior",
          properties: [
            {name: "Pattern", value: "Solid"},
            {name: "Color",   value: "#CCCCFF"}
          ]
        }
      ]
    });

    Ext.each(['even', 'odd'], function(parentStyle) {
      this.addChildNumberFormatStyle(parentStyle, parentStyle + 'date', "[ENG][$-409]dd\-mmm\-yyyy;@");
      this.addChildNumberFormatStyle(parentStyle, parentStyle + 'int', "0");
      this.addChildNumberFormatStyle(parentStyle, parentStyle + 'float', "0.00");
    }, this);
  },

  /**
   * Private convenience function to easily add a NumberFormat style for a given parentStyle
   * @param {String} parentStyle The ID of the parentStyle Style
   * @param {String} id The ID of the new style
   * @param {String} value The value of the NumberFormat's Format property
   */
  addChildNumberFormatStyle: function(parentStyle, id, value) {
    this.addStyle({
      id: id,
      parentStyle: "even",
      attributes: [
        {
          name: "NumberFormat",
          properties: [{name: "Format", value: value}]
        }
      ]
    });
  }
});