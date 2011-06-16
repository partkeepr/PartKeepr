/**
 * List of classes on front page.
 * Together with links to guides and icons legend.
 */
Ext.define('Docs.view.index.Container', {
    extend: 'Ext.container.Container',
    alias : 'widget.indexcontainer',
    cls: 'class-list',

    initComponent: function() {
        var data = this.classData;

        var tpl = new Ext.XTemplate(
            '<h1 class="pb">{title}</h1>',
            Docs.live ? '' : '<div class="notice">Use <a href="http://docs.sencha.com/ext-js/4-0">http://docs.sencha.com/ext-js/4-0</a> for up to date documentation and features</div>',
            '<div class="legend icons">',
                '<h4>Legend</h4>',
                '<ul>',
                  '<li class="icn icon-pkg">Package</li>',
                  '<li class="icn icon-class">Class</li>',
                  '<li class="icn icon-singleton">Singleton</li>',
                  '<li class="icn icon-component">Component</li>',
                  '<li class="icn icon-book">Guide</li>',
                '</ul>',
              '</div>',
              '<div class="legend guides">',
                '<h1>Guides</h1>',
                '<div class="lft">',
                  '<a class="guide getting_started" rel="getting_started" href="guides/getting_started/index.html">Getting Started</a>',
                  '<a class="guide class_system" rel="class_system" href="guides/class_system/index.html">Class System</a>',
                  '<a class="guide application_architecture" rel="application_architecture" href="guides/application_architecture/index.html">MVC Architecture</a>',
                  '<a class="guide layouts_and_containers" rel="layouts_and_containers" href="guides/layouts_and_containers/index.html">Layouts and Containers</a>',
                '</div>',
                '<div class="mid">',
                  '<a class="guide data" rel="data" href="guides/data/index.html">Data</a>',
                  '<a class="guide grid" rel="grid" href="guides/grid/index.html">Grids</a>',
                  '<a class="guide tree" rel="tree" href="guides/tree/index.html">Trees</a>',
                  '<a class="guide drawing_and_charting" rel="drawing_and_charting" href="guides/drawing_and_charting/index.html">Charts</a>',
                '</div>',
                '<div class="right">',
                  '<a class="guide components" rel="components" href="guides/components/index.html">Components</a>',
                  '<a class="guide theming" rel="theming" href="guides/theming/index.html">Theming</a>',
                  '<a class="guide direct" rel="direct" href="guides/direct/index.html">Direct</a>',
                  '<a class="guide accessibility" rel="accessibility" href="guides/accessibility/index.html">Accessibility</a>',
                '</div>',
                '<div class="egLink"><a href="http://dev.sencha.com/deploy/ext-4.0.3/examples/index.html">View the Ext 4.0 examples &rarr;</a></div>',
              '</div>',
            '</div>',
            '<tpl for="organisation">',
                '<div class="category">',
                    '<h1>{name}</h1>',
                    '<tpl for="categories">',
                        '<div class="{align}">',
                        '<tpl for="items">',
                            '<h3>{.}</h3>',
                            '<div class="links">',
                                '{[this.renderClasses(values)]}',
                            '</div>',
                        '</tpl>',
                        '</div>',
                    '</tpl>',
                    '<div style="clear:both"></div>',
                '</div>',
            '</tpl>',
            {
                renderClasses: function(category) {
                    return Ext.Array.map(data.categories[category].classes, function(cls) {
                        return Ext.String.format('<a href="#/api/{0}" rel="{0}" class="docClass">{0}</a>', cls);
                    }).join("\n");
                }
            }
        );

        this.html = tpl.apply(Ext.apply({
            // Use the same title as in <title>
            title: document.getElementsByTagName("title")[0].innerHTML
        }, data));

        this.callParent(arguments);
    }
});
