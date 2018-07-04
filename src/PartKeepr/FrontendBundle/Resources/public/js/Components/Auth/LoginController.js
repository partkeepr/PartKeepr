Ext.define('PartKeepr.Components.Auth.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.LoginController',

    login: function () {
        var view = this.getView();

        view.fireEvent("login", view.getUsername(), view.getPassword());
    }
});