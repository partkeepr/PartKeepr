Ext.define('Sample.Person', {
    uses: 'Sample.Gun',

    statics: {
        averageIQ: 100
    },

    config: {
        name: 'Unknown',
        gender: 'unknown',
        isCool: false,
        height: 5.8
    },

    constructor: function(config) {
        this.initConfig(config);

        return this;
    },

    eat: function(foodType) {
        alert("I'm eating: " + foodType);

        return this;
    },

    applyScroller: function(scroller) {
        return new Ext.util.Scroller(scroller);
    },

    applyHeight: function(height) {
        return parseFloat(height);
    },

    applyName: function(name) {
        return name || 'Unknown';
    },

    applyGender: function(gender) {
        if (!/^(male|female|gay|lesbian)$/.test(gender)) {
            return 'unknown';
        }

        return gender;
    },

    getAverageIQ: function() {
        return this.self.averageIQ;
    }
});
