Ext.define("PartKeepr.Printing.PageBasicLayout", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'comment',	type: 'string'},
	         {	name: 'columnCount',	type: 'int'},
	         {	name: 'rowCount',	type: 'int'},
	         {	name: 'paperSize',	type: 'string'},
	         {	name: 'paperPortrait',	type: 'boolean'},
	         {	name: 'cellWidthInMM',	type: 'float'},
	         {	name: 'cellHeightInMM',	type: 'float'},
	         {	name: 'topLeftXInMM',	type: 'float'},
	         {	name: 'topLeftYInMM',	type: 'float'}
			],
	proxy: PartKeepr.getRESTProxy("Printing.PageBasicLayout"),
	getRecordName: function () {
		return this.get("name");
	}
});