Ext.define('Sample.Developer', {
    extend: 'Sample.Person',

    statics: {
        averageIQ: 120
    },

    config: {
        languages: ['JavaScript', 'C++', 'Python']
    },

    constructor: function(config) {
        this.isGeek = true;

        // Apply a method from the parent class' prototype
        return this.callParent(arguments);
    },

    canCode: function(language) {
        return Ext.Array.contains(this.getLanguages(), language);
    },

    code: function(language) {
        if (!this.canCode(language)) {
            alert("I can't code in: " + language);

            return this;
        }

        alert("I'm coding in: " + language);

        this.eat("Bugs");

        return this;
    },

    clone: function() {
        var self = this.statics(),
            cloned = new self(this.config);

        return cloned;
    }
});
