/**
 * Represents a project part
 */
Ext.define("PartKeepr.ProjectPart", {
	extend: "Ext.data.Model",
	fields: [
	         {
	        	 id: 'id',
	        	 name: 'id',
	        	 type: 'int'
			},
	         {	name: 'project_id',	type: 'int'},
	         {	name: 'part_id',	type: 'int'},
	         {	name: 'part_name',	type: 'string'},
	         {	name: 'quantity',	type: 'int'},
	         {	name: 'remarks',	type: 'string'}
	         
	         ],
	belongsTo: { type: 'belongsTo', model: 'PartKeepr.Project', primaryKey: 'id', foreignKey: 'project_id'},
	belongsTo: { type: 'belongsTo', model: 'PartKeepr.Part', primaryKey: 'id', foreignKey: 'part_id'},
	proxy: PartKeepr.getRESTProxy("ProjectPart")
});