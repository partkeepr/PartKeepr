/**
 * @class Ext.ux.PortalColumn
 * @extends Ext.container.Container
 * A layout column class used internally be {@link Ext.app.PortalPanel}.
 */
Ext.define('Ext.app.PortalColumn', {
    extend: 'Ext.container.Container',
    alias: 'widget.portalcolumn',
    layout: {
        type: 'anchor'
    },
    defaultType: 'portlet',
    cls: 'x-portal-column',
    autoHeight: true
    //
    // This is a class so that it could be easily extended
    // if necessary to provide additional behavior.
    //
});