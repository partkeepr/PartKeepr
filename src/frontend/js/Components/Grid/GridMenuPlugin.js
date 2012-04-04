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
				icon: 'resources/fugue-icons/icons/application-export.png',
				menu: [{
					icon: 'resources/mimetypes/csv.png',
					text: 'Export as CSV (.csv)',
					handler: this.exportCSV,
					scope: this
				},{
					icon: 'resources/fugue-icons/icons/blue-document-excel.png',
					text: 'Export as Excel XML (.xlsx)',
					handler: this.exportXLSX,
					scope: this
				},{
					icon: 'resources/icons/mediawiki_icon.png',
					text: 'Export as MediaWiki table (.txt)',
					handler: this.exportWiki,
					scope: this
				}]
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