Ext.define('Sample.CoolGuy', {
    extend: 'Sample.Person',

    mixins: {
        guitar: 'Sample.ability.CanPlayGuitar',
        sing: 'Sample.ability.CanSing'
    },

    constructor: function() {
        this.config.knownSongs.push("Love Me or Die");

        return this.callParent(arguments);
    },

    sing: function() {
        alert("Ahem...");

        return this.mixins.sing.sing.apply(this, arguments);
    }
});
