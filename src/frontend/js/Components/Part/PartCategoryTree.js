Ext.define("PartKeepr.PartCategoryTree", {
	extend: 'PartKeepr.CategoryEditorTree',
	alias: 'widget.PartCategoryTree',
	
	ddGroup: 'PartTree',
	categoryModel: 'PartKeepr.PartCategory',
	categoryService: 'PartCategory',
	initComponent: function () {
		this.addEvents("syncCategory");
		this.callParent();
		
		this.syncButton = Ext.create("Ext.button.Button", {
			tooltip: i18n("Reveal Category for selected part"),
			icon: 'resources/fugue-icons/icons/arrow-split-180.png',
        	handler: Ext.bind(function () {
        		this.fireEvent("syncCategory");
        	}, this),
        	disabled: true
		});
		this.toolbar.add(['->', this.syncButton]);
	},
	
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