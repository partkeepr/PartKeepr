{
	"projectName": "Ext.ux.Exporter",
    "packages": [{
    		"name": "Ext.ux.Exporter",
            "id": "ext-ux-exporter",
            "files": [
            	{"path": "", "name": "Formatter.js"},
            	{"path": "", "name": "Base64.js"},
				{"path": "", "name": "Exporter.js"},
				{"path": "", "name": "Button.js"},
				{"path": "csvFormatter/", "name": "CsvFormatter.js"},
				{"path": "wikiFormatter/", "name": "WikiFormatter.js"},
				{"path": "excelFormatter/", "name": "Cell.js"},
				{"path": "excelFormatter/", "name": "Style.js"},
				{"path": "excelFormatter/", "name": "ExcelFormatter.js"},
				{"path": "excelFormatter/", "name": "Workbook.js"},
				{"path": "excelFormatter/", "name": "Worksheet.js"}
			]
		}],
	"builds": [
		{
            "name": "All",
            "target": "Ext.ux.formatter-all.js",
            "compress": true,
            "packages": [
                "ext-ux-exporter"
            ]
        },
        {
            "name": "Debug",
            "target": "Ext.ux.formatter-all-debug.js",
            "compress": false,
            "packages": [
                "ext-ux-exporter"
            ]
        }]
}