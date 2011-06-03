Ext.Loader.setConfig({enabled: true});
Ext.Loader.require_backup = Ext.Loader.require;
Ext.Loader.require = Ext.require = function(requiredClasses, fn, scope) {
    fn.call(scope);
};