Ext.define('Sample.ability.CanPlayGuitar', {
    canPlayGuitar: true,

    playGuitar: function() {
        alert(this.getName() + " is playing guitar");

        return this;
    }
});