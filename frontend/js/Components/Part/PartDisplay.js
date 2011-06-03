Ext.define('PartDB2.PartDisplay', {
	extend: 'Ext.panel.Panel',
	bodyCls: 'partdisplay',
	initComponent: function () {
		this.tpl = new Ext.XTemplate(
				'<h1>{name}</h1>',
				'<table>',
				'<tr>',
					'<td class="o">'+i18n("Category")+':</td>',
					'<td style="width: 100%;" class="o">{categoryName}</td>',
				'</tr>',
				'<tr>',
					'<td class="e">'+i18n("Stock Level")+':</td>',
					'<td class="e">{stockLevel}</td>',
				'</tr>',
				'<tr>',
					'<td class="o">'+i18n("Minimum Stock Level")+':</td>',
					'<td class="o">{minStockLevel}</td>',
				'</tr>',
				'<tr>',
					'<td class="e">'+i18n("Footprint")+':</td>',
					'<td class="e">{footprintName}</td>',
				'</tr>',
				'<tr>',
					'<td style="white-space: nowrap;" class="o">'+i18n("Storage Location")+':</td>',
					'<td class="o">{storageLocationName}</td>',
				'</tr>',
				'<tr>',
					'<td class="e">'+i18n("Comment")+':</td>',
					'<td class="e">{comment}</td>',
				'</tr>',
				'</table>');
		
		this.addButton = new Ext.Button({
			text: i18n("Add Stock"),
			cls:'x-btn-text-icon',
			icon: 'resources/silkicons/brick_add.png',
			handler: Ext.bind(this.addPartPrompt, this)
		});
		
		this.deleteButton = new Ext.Button({
			text: i18n("Remove Stock"),
			cls:'x-btn-text-icon',
			icon: 'resources/silkicons/brick_delete.png',
			handler: Ext.bind(this.deletePartPrompt, this)
		});
		
		this.editButton = new Ext.Button({
			text: i18n("Edit Part"),
			icon: 'resources/silkicons/brick_edit.png',
			handler: Ext.bind(function () { this.fireEvent("editPart", this.record.get("id"));}, this)
		});
		
		this.tbar = Ext.create("Ext.toolbar.Toolbar", {
			enableOverflow: true,
			items: [
			        this.addButton,
			        this.deleteButton,
			        this.editButton
			        ]
		});
		
		this.addEvents("editPart");
		
		this.callParent();
	},
	setValues: function (r) {
		this.record = r;
		this.tpl.overwrite(this.getTargetEl(), r.data);
	},
	addPartPrompt: function () {
		Ext.Msg.prompt(i18n("Add stock"), i18n("Amount"), this.addPartHandler, this);
	},
	addPartHandler: function (btn,a,c) {
		if (btn == "ok") {
			var call = new PartDB2.ServiceCall(
	    			"Part", 
	    			"addStock");
			call.setParameter("stock", a);
			call.setParameter("part", this.record.get("id"));
	    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategories]');
	    	call.setHandler(Ext.bind(this.reloadPart, this));
	    	call.doCall();	
		}
	},
	deletePartPrompt: function () {
		Ext.Msg.prompt(i18n("Remove Stock"), i18n("Amount"), this.deletePartHandler, this);
	},
	deletePartHandler: function (btn,a,c) {
		if (btn == "ok") {
			var call = new PartDB2.ServiceCall(
	    			"Part", 
	    			"deleteStock");
			call.setParameter("stock", a);
			call.setParameter("part", this.record.get("id"));
	    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategories]');
	    	call.setHandler(Ext.bind(this.reloadPart, this));
	    	call.doCall();	
		}
	},
	reloadPart: function () {
		this.loadPart(this.record.get("id"));
	},
	loadPart: function (id) {
		var call = new PartDB2.ServiceCall(
    			"Part", 
    			"getPart");
		call.setParameter("part", id);
    	call.setLoadMessage('$[de.RaumZeitLabor.PartDB2.CategoryEditor.loadCategories]');
    	call.setHandler(Ext.bind(this.onPartLoaded, this));
    	call.doCall();
	},
	onPartLoaded: function (response) {
		this.record.set(response);
		this.setValues(this.record);
		this.record.commit();
	}
});