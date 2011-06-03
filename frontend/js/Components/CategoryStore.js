PartDB2.CategoryTreeStore = Ext.define("CategoryTreeStore",
{
	extend: "Ext.data.TreeStore",
    model: 'Category',
    proxy: {
        type: 'ajax',
        url: 'rest.php/Category',
        method: 'POST',
        extraParams: {
        	call: 'getCategories'
        },
        reader: {
        	type: 'json',
        	root: 'response'
        }
    },
    root: {
        text: 'Ext JS',
        id: 'src',
        expanded: true
    },
    constructor: function () {
    	this.proxy.extraParams.session = PartDB2.getSession();
    	
    	this.callParent();
    },
    folderSort: true
});