/**
 * Renders class name and icon in page header.
 */
Ext.define('Docs.PageHeader', {
    singleton: true,

    /**
     * Renders class in header.
     * @param {Object} docClass  class configuration object.
     */
    load: function(docClass) {
        if (!this.tpl) {
            this.tpl = new Ext.XTemplate(
                '<h1 class="{[this.getClass(values)]}">',
                    '<a href="source/{href}" target="_blank">{name}</a>',
                    '<tpl if="xtype">',
                        '<span>xtype: {xtype}</span>',
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
            );
        }
        Ext.get('top-block').update(this.tpl.apply(docClass));
    }
});
