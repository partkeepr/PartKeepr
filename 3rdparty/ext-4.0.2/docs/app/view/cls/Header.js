/**
 * Renders class name and icon in page header.
 */
Ext.define('Docs.view.cls.Header', {
    extend: 'Ext.container.Container',
    padding: '5 0 17 0',
    // Initially the component will be empty and so the initial height
    // will not be correct if not set explicitly
    height: 47,
    alias: 'widget.classheader',

    tpl: Ext.create('Ext.XTemplate',
        '<h1 class="{[this.getClass(values)]}">',
            '<tpl if="private">',
                '<span class="private">Private</span>',
            '</tpl>',
            '<a href="source/{href}" target="_blank">{name}</a>',
            '<tpl if="xtypes.length &gt; 0">',
                '<span>xtype: {[values.xtypes.join(", ")]}</span>',
            '</tpl>',
        '</h1>',
        {
            getClass: function(cls) {
                if (cls.component) {
                    return "component";
                }
                else if (cls.singleton) {
                    return "singleton";
                }
                else {
                    return "class";
                }
            }
        }
    ),

    /**
     * Loads class name and icon to header.
     * @param {Object} cls  class config.
     */
    load: function(cls) {
        this.update(this.tpl.apply(cls));
    }
});
