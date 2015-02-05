/**
 * @class Ext.ux.Exporter.WikiFormatter
 * @extends Ext.ux.Exporter.Formatter
 * Specialised Format class for outputting mediawiki tables
 */
Ext.define("Ext.ux.exporter.wikiFormatter.WikiFormatter", {
    extend: "Ext.ux.exporter.Formatter",
    
    /**
     * @cfg {String} contentType The content type to use. Defaults to 'data:text/plain;base64,'
     */
    contentType: 'data:text/plain;base64,',
    
    /**
     * @cfg {String} cls The table class. Defaults to "wikitable"
     */
    cls: "wikitable",

    /**
     * @cfg {String} extension The extension to use. Defaults to 'txt'
     */
    extension: "txt",
    
    /**
     * @cfg {String} lineSeparator The line separator to use. Defaults to "\n"
     */
    lineSeparator: "\n",
    
    /**
     * @cfg {Boolean} capitalizeHeaders Capitalizes the header fields. Defaults to false
     */
    capitalizeHeaders: false,

    /**
     * Formats the store to the wiki table format. 
     * @param store The store to export
     * @param config {Object} [config] Config object. Contains the "columns" property, which is an array of field names.
     */
    format: function(store, config) {
        this.columns = config.columns || (store.fields ? store.fields.items : store.model.prototype.fields.items);
        return "{|" + this.getHeaders() + this.lineSeparator +
        		this.getRows(store) + this.lineSeparator + "|}";
    },
    
    /**
     * Returns the headers for the specific store.
     * 
     * @param {Object} store The store to process
     * @returns {String} The header line
     */
    getHeaders: function(store) {
        var columns = [];
        
        Ext.each(this.columns, function(col) {
          var title;
          if (col.text != undefined) {
            title = col.text;
          } else if(col.name) {
            title = col.name.replace(/_/g, " ");
          } else {
        	  title = "";
          }
          
          if (this.capitalizeHeaders) {
        	  title = Ext.String.capitalize(title);        	  
          }

          columns.push("! " + title);
        }, this);

        var retVal = ' class="'+ this.cls + '" valign="top"' + this.lineSeparator;
        retVal += columns.join(this.lineSeparator);
        
        return retVal;
    },
    /**
     * Returns all rows for the store
     * 
     * @param {Object} store The store to use
     * @returns {String}
     */
    getRows: function(store) {
        var rows = [];
        store.each(function(record) {
          rows.push("|-" + this.lineSeparator + this.getCells(record));
        }, this);

        return rows.join(this.lineSeparator);
    },
    /**
     * Returns the cells for a specific row
     * @param {Object} record The record
     * @returns {String} The cells of the record
     */
    getCells: function(record) {
        var cells = [];
        
        Ext.each(this.columns, function(col) {
            var name = col.name || col.dataIndex;
            var value = "";
            
            if(typeof name !== 'undefined') {
                if (Ext.isFunction(col.renderer)) {
                  value = col.renderer(record.get(name), null, record);
                } else {
                  value = record.get(name);
                }
                
                cells.push("| " + value);
            }
        });

        return cells.join(this.lineSeparator);
    }
});