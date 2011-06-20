Ext.define("PartKeepr.PartCategoryTree", {
	extend: 'PartKeepr.CategoryEditorTree',
	alias: 'widget.PartCategoryTree',
	
	ddGroup: 'PartTree',
	categoryModel: 'PartKeepr.PartCategory',
	categoryService: 'PartCategory',
	onBeforeDrop: function (node, data, overModel, dropPosition, dropFunction, options) {
		var draggedRecord = data.records[0];
		var droppedOn = this.getView().getRecord(node);

		if (draggedRecord.modelName == "PartKeepr.Part") {
			/* Move Part */
			var call = new PartKeepr.ServiceCall("Part", "movePart");
			
			if (data.records.length > 1) {
				var sources = [];
			
				for (var i=0;i<data.records.length;i++) {
					sources.push(data.records[i].get("id"));
				}
				
				call.setParameter("parts", sources);
			} else {
				call.setParameter("part", draggedRecord.get("id"));
			}

			call.setParameter("targetCategory", droppedOn.get("id"));
			call.setHandler(function () {
				data.view.store.load();
			});
			call.doCall();
			
			return false;
		}
		
	}
});