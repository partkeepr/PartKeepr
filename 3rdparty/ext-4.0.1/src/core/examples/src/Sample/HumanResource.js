Ext.define('Sample.HumanResource', {

    requires: 'Sample.Developer',

    singleton: true,

    developers: [],

    recruit: function(developer) {
        if (!developer.canCode('JavaScript')) {
            alert(developer.getName() + " doesn't know JavaScript, no point recruiting!");
        }
        else {
            this.developers.push(developer);
        }

        return this;
    },

    getDevelopersCount: function() {
        return this.developers.length;
    }
});
