/**
 * @class PartKeepr.PartDisplay
 * <p>This component displays information about a specific part.</p>
 */
Ext.define('PartKeepr.PartDisplay', {
	extend: 'Ext.panel.Panel',
	bodyCls: 'partdisplay',
	
	/**
	 * Initializes the component and adds a template as well as the add/remove stock and edit part buttons.
	 */
	initComponent: function () {
		/**
		 * Create the template
		 */
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
				'<tr>',
					'<td class="o">'+i18n("Create Date")+':</td>',
					'<td class="o">{createDate}</td>',
				'</tr>',
				'<tr>',
					'<td class="e">'+i18n("Status")+':</td>',
					'<td class="e">{status}</td>',
				'</tr>',
				'<tr>',
					'<td class="o">'+i18n("Needs Review")+':</td>',
					'<td class="o">{needsReview}</td>',
					'</tr>',
				'</table>');
		
		/**
		 * Create the "add stock" button
		 */
		this.addButton = new Ext.Button({
			text: i18n("Add Stock"),
			icon: 'resources/silkicons/brick_add.png',
			handler: Ext.bind(this.addPartPrompt, this)
		});
		
		/**
		 * Create the "remove stock" button
		 */
		this.deleteButton = new Ext.Button({
			text: i18n("Remove Stock"),
			icon: 'resources/silkicons/brick_delete.png',
			handler: Ext.bind(this.deletePartPrompt, this)
		});
		
		/**
		 * Create the "edit part" button
		 */
		this.editButton = new Ext.Button({
			text: i18n("Edit Part"),
			icon: 'resources/silkicons/brick_edit.png',
			handler: Ext.bind(function () { this.fireEvent("editPart", this.record.get("id"));}, this)
		});
		
		/**
		 * Create the toolbar which holds our buttons
		 */
		this.tbar = Ext.create("Ext.toolbar.Toolbar", {
			enableOverflow: true,
			items: [
			        this.addButton,
			        this.deleteButton,
			        this.editButton
			        ]
		});
		
		/**
		 * Add the event "editPart". This event is fired as soon as the "edit" button is clicked.
		 * 
		 * @todo Add the events "addStock" and "removeStock" and manage these events from the PartManager.
		 */
		this.addEvents("editPart");
		
		this.callParent();
	},
	/**
	 * Sets the values for the template.
	 * 
	 * Note that the data of the record is applied with htmlentities(), i.e. <b>Test</b> will be
	 * displayed as such and not in bold.
	 */
	setValues: function (r) {
		this.record = r;
		
		var values = {};
		for (var i in r.data) {
			if (r.data[i] !== null) {
				values[i] = htmlentities(r.data[i]);
			} else {
				values[i] = r.data[i];
			}
		}
		
		this.tpl.overwrite(this.getTargetEl(), values);
	},
	/**
	 * Prompt the user for the stock level he wishes to add.
	 */
	addPartPrompt: function () {
		var j = new PartKeepr.PartStockWindow({ partUnitName: this.record.get("partUnitName") });
		j.addStock(this.addPartHandler, this);
	},
	/**
	 * Callback after the "add stock" dialog is complete.
	 */
	addPartHandler: function (quantity, price) {
			var call = new PartKeepr.ServiceCall(
	    			"Part", 
	    			"addStock");
			call.setParameter("stock", quantity);
			call.setParameter("price", price);
			call.setParameter("part", this.record.get("id"));
	    	call.setHandler(Ext.bind(this.reloadPart, this));
	    	call.doCall();	
	},
	/**
	 * Prompts the user for the stock level to decrease for the item.
	 */
	deletePartPrompt: function () {
		var j = new PartKeepr.PartStockWindow({ partUnitName: this.record.get("partUnitName") });
		j.removeStock(this.deletePartHandler, this);
	},
	/**
	 * Callback after the "delete stock" dialog is complete.
	 */
	deletePartHandler: function (quantity) {
			var call = new PartKeepr.ServiceCall(
	    			"Part", 
	    			"deleteStock");
			call.setParameter("stock", quantity);
			call.setParameter("part", this.record.get("id"));
	    	call.setHandler(Ext.bind(this.reloadPart, this));
	    	call.doCall();	
	},
	/**
	 * Reloads the current part
	 */
	reloadPart: function () {
		this.loadPart(this.record.get("id"));
	},
	/**
	 * Load the part from the database.
	 */
	loadPart: function (id) {
		PartKeepr.Part.load(id, {
			scope: this,
		    success: this.onPartLoaded
		});
	},
	/**
	 * Callback after the part is loaded
	 */
	onPartLoaded: function (record) {
		this.record = record;
		this.setValues(this.record);
		this.record.commit();
	}
});