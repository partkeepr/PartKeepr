Ext.define('Sample.ability.CanComposeSongs', {
    canComposeSongs: true,

    composeSongs: function() {
        alert(this.getName() + " is composing songs");

        return this;
    }
});