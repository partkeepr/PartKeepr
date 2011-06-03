Ext.define('Sample.CTO', {
    extend: 'Sample.Developer',

    statics: {
        averageIQ: 140
    },

    constructor: function(config) {
        this.callParent(arguments);

        this.isSuperGeek = true;
    },

    hireNewDeveloperLike: function(developer) {
        return developer.clone();
    },

    clone: function() {
        var self = this.statics(),
            cloned = new self(this.config);

        alert(Ext.getClassName(this.callParent()));
        return cloned;
    }
});
