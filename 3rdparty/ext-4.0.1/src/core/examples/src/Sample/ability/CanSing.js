Ext.define('Sample.ability.CanSing', {
    config: {
        knownSongs: ['Yesterday', 'Happy New Year', 'Jingle Bells']
    },

    canSing: true,

    sing: function(songName) {
        if (!Ext.Array.contains(this.getKnownSongs(), songName)) {
            alert("Sorry! I can't sing " + songName);
        }
        else {
            alert("I'm singing " + songName);
        }

        return this;
    }
});
