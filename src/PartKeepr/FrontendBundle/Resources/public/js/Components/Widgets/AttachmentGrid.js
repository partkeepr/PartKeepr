Ext.define('PartKeepr.AttachmentGrid', {
	extend: 'PartKeepr.BaseGrid',
	alias: 'widget.AttachmentGrid',
	border: false,
	model: null,
	initComponent: function () {
		if (this.model === null) {
			alert("Error: Model can't be null!");
		}
		
		this.store = Ext.create("Ext.data.Store", {
			model: this.model,
			proxy: {
				type: 'memory',
				reader: {
					type: 'json'
				}
			}
			
		});
		
		this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });
		
		this.plugins =  [ this.editing ];
		
		this.deleteButton = Ext.create("Ext.button.Button", {
                text: i18n('Delete'),
                disabled: true,
                itemId: 'delete',
                scope: this,
                icon: 'resources/silkicons/delete.png',
                handler: this.onDeleteClick
            });
		
		this.viewButton = Ext.create("Ext.button.Button", {
			text: i18n("View"),
			handler: this.onViewClick,
			scope: this,
			icon: 'resources/silkicons/zoom.png',
			disabled: true
		});
		
		this.webcamButton = Ext.create("Ext.button.Button", {
			text: i18n("Take image"),
			handler: this.onWebcamClick,
			scope: this,
			icon: 'resources/fugue-icons/icons/webcam.png'
		});
		
		this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                text: i18n('Add'),
                scope: this,
                icon: 'resources/silkicons/attach.png',
                handler: this.onAddClick
            },
            this.webcamButton,
            this.viewButton,
            this.deleteButton
            ]
        }];
		
		this.columns = [
		                {
		                	dataIndex: 'extension',
		                	width: 30,
		                	renderer: function (val) {
		                		return '<img src="resources/mimetypes/'+val+'.png"/>';
		                	}
		                },
		                {
		                	header: i18n("Filename"),
		                	dataIndex: 'originalFilename',
		                	width: 200
		                },
		                {
		                	header: i18n("Size"),
		                	dataIndex: 'size',
		                	width: 80,
		                	renderer: PartKeepr.bytesToSize
		                },
		                { 	
		                	header: i18n("Description"),
		                	dataIndex: 'description',
		                	flex: 0.4,
		                	editor: {
		                        xtype:'textfield',
		                        allowBlank:true
		                    }
		                }
		                ];
		
		this.callParent();
		
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
		this.on("itemdblclick", this.onDoubleClick, this);
	},
	onWebcamClick: function () {
		var wp = Ext.create("PartKeepr.WebcamPanel");
		wp.on("uploadComplete", this.onFileUploaded, this);
		
		var j = Ext.create("Ext.window.Window", {
			title: i18n("Take Webcam Photo"),
			items: [
			        wp
			        ]
		});
		
		wp.on("uploadComplete", function () { j.close(); });
		
		j.show();
	},
	onDoubleClick: function (view, record) {
		if (record) {
			this.viewAttachment(record);
		}
	},
	onAddClick: function () {
		var j = Ext.create("PartKeepr.FileUploadDialog");
		j.on("fileUploaded", this.onFileUploaded, this);
		j.show();
	},
	onFileUploaded: function (response) {
		this.editing.cancelEdit();
		
		this.store.insert(this.store.getCount(), Ext.create(this.model, {
			id: "TMP:"+response.id,
			extension: response.extension,
			size: response.size,
			originalFilename: response.originalFilename
		}));
		
	},
	onDeleteClick: function () {
		var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            this.store.remove(selection);
        }
	},
	onSelectChange: function(selModel, selections){
        this.deleteButton.setDisabled(selections.length === 0);
        this.viewButton.setDisabled(selections.length === 0);
    },
    onViewClick: function () {
    	var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
        	this.viewAttachment(selection);
        }
    },
    viewAttachment: function (record) {
    	var mySrc = "file.php?type="+this.model+"&";
    	
    	if (record.get("id") === 0) {
    		mySrc += "id=0&tmpId=" + record.get("tmp_id");
    	} else {
    		mySrc += "id=" + record.get("id");
    	}
    	
    	new Ext.Window({
    	    title : i18n("Display File"),
    	    width : 640,
    	    height: 600,
    	    maximizable: true,
    	    constrain: true,
    	    layout : 'fit',
    	    items : [{
    	        xtype : "component",
    	        autoEl : {
    	            tag : "iframe",
    	            src : mySrc
    	        }
    	    }]
    	}).show();
    }
});