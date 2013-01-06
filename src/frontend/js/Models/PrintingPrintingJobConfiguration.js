Ext.define("PartKeepr.Printing.PrintingJobConfiguration", {
	extend: "Ext.data.Model",
	fields: [
	         {	id: 'id', name: 'id',			type: 'int' },
	         {	name: 'name',	type: 'string'},
	         {	name: 'comment',	type: 'string'},
	         {	name: 'objectType',	type: 'string'},
	         {	name: 'exportRenderer',	type: 'string'},
	         {	name: 'pageLayout',	type: 'int'},
	         {	name: 'rendererConfiguration',	type: 'string'}	         
			],
    belongsTo: [
                { model: 'PartKeepr.Printing.PageBasicLayout', 		primaryKey: 'id', 	foreignKey: 'pageLayout'}
                ],
	proxy: PartKeepr.getRESTProxy("Printing.PrintingJobConfiguration"),
	getRecordName: function () {
		return this.get("name");
	}
});