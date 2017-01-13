Ext.define("PartKeepr.ProjectBundle.Entity.ProjectReportPart", {
    extend: "PartKeepr.PartBundle.Entity.Part",

    constructor: function () {
        this.fields.push({name: 'stockToUse', type: 'int'});
        this.callParent(arguments);
    }
});
