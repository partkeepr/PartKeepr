Ext.define('Sample.Musician', {
    extend: 'Sample.Person',

    statics: {
        clone: function(musician) {
            return new this({
                name: musician.getName(),
                height: musician.getHeight(),
                isCool: musician.getIsCool(),
                gender: musician.getGender()
            });
        }
    },

    mixins: {
        guitar: 'Sample.ability.CanPlayGuitar',
        compose: 'Sample.ability.CanComposeSongs',
        sing: 'Sample.ability.CanSing'
    }
});
