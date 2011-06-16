Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Docs': 'app'
    }
});

// The following is exactly what Ext.application() function does, but
// we use our own Application class that extends Ext.app.Application

Ext.require('Docs.Application');

Ext.onReady(function() {
    Ext.create('Docs.Application');
});
