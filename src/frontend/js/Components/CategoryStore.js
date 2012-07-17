Ext.define("PartKeepr.CategoryTreeStore", {
	extend: "Ext.data.TreeStore",
    model: 'PartKeepr.Category',
    root: {
        text: 'Ext JS',
        id: 'src',
        expanded: true
    },
    constructor: function () {
        Ext.apply(this, {
            proxy: {
                type: 'ajax',
                    url: PartKeepr.getBasePath()+'/Category',
                    method: 'POST',
                    extraParams: {
                    call: 'getCategories'
                },
                reader: {
                    type: 'json',
                        root: 'response'
                }
            }
        });

    	this.proxy.extraParams.session = PartKeepr.getSession();
    	
    	this.callParent();
    },
    folderSort: true
});