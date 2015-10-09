/**
 * Defines a grid menu plugin which appears when a grid is right-clicked.
 * 
 * Currently only contains an export menu.
 */
Ext.define("PartKeepr.GridMenuPlugin", {
	alias: 'plugin.gridmenu',
	
	// Private: The assigned grid
	grid: null,
	
	/**
	 * Initializes the plugin.
	 * @param grid {Object} The grid to which this plugin is bound
	 */
	init: function(grid) {
		this.grid = grid;
		
		this.menu = new Ext.menu.Menu({
			floating: true,
			renderTo: Ext.getBody(),
			items: [{
				text: i18n("Export"),
				glyph: 0xf152,
				menu: [{
                    icon: 'resources/mimetypes/csv.png',
                    text: 'Export as semicolon-delimited CSV (.csv)',
                    handler: this.exportSSV,
                    scope: this
                },{
					icon: 'resources/mimetypes/csv.png',
					text: i18n('Export as comma-delimited CSV (.csv)'),
					handler: this.exportCSV,
					scope: this
				},{
					icon: 'blue-document-excel.png',
					text: i18n('Export as Excel XML (.xlsx)'),
					handler: this.exportXLSX,
					scope: this
				},{
					icon: 'bundles/partkeeprfrontend/images/icons/mediawiki_icon.png',
					text: i18n('Export as MediaWiki table (.txt)'),
					handler: this.exportWiki,
					scope: this
				}]
			},{
				glypt: 0xf02f,
				text: i18n('Print ...'),
				handler: this.exportPrint,
				scope: this
			}]
		});
		
		// Show the menu when an item was clicked
		grid.on("itemcontextmenu", function (view, record, item, index, e, eOpts) {
			this.menu.showAt(e.xy[0], e.xy[1]);
		}, this);
		
		// Show the menu when no item but the grid was clicked
		grid.on("containercontextmenu", function (view, e, eOpts) {
			this.menu.showAt(e.xy[0], e.xy[1]);
		}, this);
	},
	/**
	 * Exports the grid to CSV
	 */
	exportCSV: function () {
        var csvFormatter = Ext.ux.exporter.Exporter.getFormatterByName("csv");
        csvFormatter.separator = ",";

		this.doExport(Ext.ux.exporter.Exporter.exportAny(this.grid, csvFormatter, {}), this.getExportFilename() + ".csv");
	},
    /**
     * Exports the grid to SSV (semicolon separated file)
     */
    exportSSV: function () {
        var csvFormatter = Ext.ux.exporter.Exporter.getFormatterByName("csv");
        csvFormatter.separator = ";";

        this.doExport(Ext.ux.exporter.Exporter.exportAny(this.grid, "csv", {}), this.getExportFilename() + ".csv");
    },
	/**
	 * Exports the grid to MediaWiki format
	 */
	exportWiki: function () {
		this.doExport(Ext.ux.exporter.Exporter.exportAny(this.grid, "wiki", {}), this.getExportFilename() + ".txt");
	},
	/**
	 * Exports the grid to XLSX
	 */
	exportXLSX: function () {
		this.doExport(Ext.ux.exporter.Exporter.exportAny(this.grid, "excel", {}), this.getExportFilename() + ".xlsx");
	},
	/**
	 * Exports selection to print
	 */
	exportPrint: function () {
		selection = this.grid.getSelectionModel().getSelection();
		var ids = new Array();
		for (var i=0;i<selection.length;i++) {
			ids.push(selection[i].get("id"));
		}
		
		var val = Ext.create("PartKeepr.PrintingWindow");
		val.setObjectType('PartKeepr\\PartBundle\\Entity\\Part');
		val.setObjectIds(ids);
		val.show();
	},
	/**
	 * Returns the filename without extension for the grid. Defaults to the grid's title
	 * @returns {String} the filename
	 */
	getExportFilename: function () {
		return this.grid.title;
	},
	/**
	 * Triggers the export. Calls the jsonUpload method and redirects to the uploaded file.
	 * 
	 * @param data {String} The data 
	 * @param filename {String} The filename
	 */
	doExport: function (data, filename) {
		var call = new PartKeepr.ServiceCall("TempFile", "jsonUpload");
		call.setParameter("filedata", Ext.ux.exporter.Base64.encode(data));
		call.setParameter("filename", filename);
		call.setHandler(function (response) {
			var loc = "file.php?type=temp&download=true&id=TMP:"+response.id;
			
			window.location.href = loc;
		});
		call.doCall();
	}
});