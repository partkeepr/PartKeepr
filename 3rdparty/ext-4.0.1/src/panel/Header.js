/**
 * @class Ext.panel.Header
 * @extends Ext.container.Container
 * Simple header class which is used for on {@link Ext.panel.Panel} and {@link Ext.window.Window}
 * @xtype header
 */
Ext.define('Ext.panel.Header', {
    extend: 'Ext.container.Container',
    uses: ['Ext.panel.Tool', 'Ext.draw.Component', 'Ext.util.CSS'],
    alias: 'widget.header',

    isHeader       : true,
    defaultType    : 'tool',
    indicateDrag   : false,
    weight         : -1,

    renderTpl: ['<div class="{baseCls}-body<tpl if="bodyCls"> {bodyCls}</tpl><tpl if="uiCls"><tpl for="uiCls"> {parent.baseCls}-body-{parent.ui}-{.}</tpl></tpl>"<tpl if="bodyStyle"> style="{bodyStyle}"</tpl>></div>'],

    initComponent: function() {
        var me = this,
            rule,
            style,
            titleTextEl,
            ui;

        me.indicateDragCls = me.baseCls + '-draggable';
        me.title = me.title || '&#160;';
        me.tools = me.tools || [];
        me.items = me.items || [];
        me.orientation = me.orientation || 'horizontal';
        me.dock = (me.dock) ? me.dock : (me.orientation == 'horizontal') ? 'top' : 'left';

        //add the dock as a ui
        //this is so we support top/right/left/bottom headers
        me.addClsWithUI(me.orientation);
        me.addClsWithUI(me.dock);

        Ext.applyIf(me.renderSelectors, {
            body: '.' + me.baseCls + '-body'
        });

        // Add Icon
        if (!Ext.isEmpty(me.iconCls)) {
            me.initIconCmp();
            me.items.push(me.iconCmp);
        }

        // Add Title
        if (me.orientation == 'vertical') {
            // Hack for IE6/7's inability to display an inline-block
            if (Ext.isIE6 || Ext.isIE7) {
                me.width = this.width || 24;
            } else if (Ext.isIEQuirks) {
                me.width = this.width || 25;
            }

            me.layout = {
                type : 'vbox',
                align: 'center',
                clearInnerCtOnLayout: true,
                bindToOwnerCtContainer: false
            };
            me.textConfig = {
                cls: me.baseCls + '-text',
                type: 'text',
                text: me.title,
                rotate: {
                    degrees: 90
                }
            };
            ui = me.ui;
            if (Ext.isArray(ui)) {
                ui = ui[0];
            }
            rule = Ext.util.CSS.getRule('.' + me.baseCls + '-text-' + ui);
            if (rule) {
                style = rule.style;
            }
            if (style) {
                Ext.apply(me.textConfig, {
                    'font-family': style.fontFamily,
                    'font-weight': style.fontWeight,
                    'font-size': style.fontSize,
                    fill: style.color
                });
            }
            me.titleCmp = Ext.create('Ext.draw.Component', {
                ariaRole  : 'heading',
                focusable: false,
                viewBox: false,
                autoSize: true,
                margins: '5 0 0 0',
                items: [ me.textConfig ],
                renderSelectors: {
                    textEl: '.' + me.baseCls + '-text'
                }
            });
        } else {
            me.layout = {
                type : 'hbox',
                align: 'middle',
                clearInnerCtOnLayout: true,
                bindToOwnerCtContainer: false
            };
            me.titleCmp = Ext.create('Ext.Component', {
                xtype     : 'component',
                ariaRole  : 'heading',
                focusable: false,
                renderTpl : ['<span class="{cls}-text {cls}-text-{ui}">{title}</span>'],
                renderData: {
                    title: me.title,
                    cls  : me.baseCls,
                    ui   : me.ui
                },
                renderSelectors: {
                    textEl: '.' + me.baseCls + '-text'
                }
            });
        }
        me.items.push(me.titleCmp);

        // Spacer ->
        me.items.push({
            xtype: 'component',
            html : '&nbsp;',
            flex : 1,
            focusable: false
        });

        // Add Tools
        me.items = me.items.concat(me.tools);
        this.callParent();
    },

    initIconCmp: function() {
        this.iconCmp = Ext.create('Ext.Component', {
            focusable: false,
            renderTpl : ['<img alt="" src="{blank}" class="{cls}-icon {iconCls}"/>'],
            renderData: {
                blank  : Ext.BLANK_IMAGE_URL,
                cls    : this.baseCls,
                iconCls: this.iconCls,
                orientation: this.orientation
            },
            renderSelectors: {
                iconEl: '.' + this.baseCls + '-icon'
            },
            iconCls: this.iconCls
        });
    },

    afterRender: function() {
        var me = this;

        me.el.unselectable();
        if (me.indicateDrag) {
            me.el.addCls(me.indicateDragCls);
        }
        me.mon(me.el, {
            click: me.onClick,
            scope: me
        });
        me.callParent();
    },

    afterLayout: function() {
        var me = this;
        me.callParent(arguments);

        // IE7 needs a forced repaint to make the top framing div expand to full width
        if (Ext.isIE7) {
            me.el.repaint();
        }
    },

    // inherit docs
    addUIClsToElement: function(cls, force) {
        var me = this;

        me.callParent(arguments);

        if (!force && me.rendered) {
            me.body.addCls(me.baseCls + '-body-' + cls);
            me.body.addCls(me.baseCls + '-body-' + me.ui + '-' + cls);
        }
    },

    // inherit docs
    removeUIClsFromElement: function(cls, force) {
        var me = this;

        me.callParent(arguments);

        if (!force && me.rendered) {
            me.body.removeCls(me.baseCls + '-body-' + cls);
            me.body.removeCls(me.baseCls + '-body-' + me.ui + '-' + cls);
        }
    },

    // inherit docs
    addUIToElement: function(force) {
        var me = this;

        me.callParent(arguments);

        if (!force && me.rendered) {
            me.body.addCls(me.baseCls + '-body-' + me.ui);
        }

        if (!force && me.titleCmp && me.titleCmp.rendered && me.titleCmp.textEl) {
            me.titleCmp.textEl.addCls(me.baseCls + '-text-' + me.ui);
        }
    },

    // inherit docs
    removeUIFromElement: function() {
        var me = this;

        me.callParent(arguments);

        if (me.rendered) {
            me.body.removeCls(me.baseCls + '-body-' + me.ui);
        }

        if (me.titleCmp && me.titleCmp.rendered && me.titleCmp.textEl) {
            me.titleCmp.textEl.removeCls(me.baseCls + '-text-' + me.ui);
        }
    },

    onClick: function(e) {
        if (!e.getTarget(Ext.baseCSSPrefix + 'tool')) {
            this.fireEvent('click', e);
        }
    },

    getTargetEl: function() {
        return this.body || this.frameBody || this.el;
    },

    /**
     * Sets the title of the header.
     * @param {String} title The title to be set
     */
    setTitle: function(title) {
        var me = this;
        if (me.rendered) {
            if (me.titleCmp.rendered) {
                if (me.titleCmp.surface) {
                    me.title = title || '';
                    var sprite = me.titleCmp.surface.items.items[0],
                        surface = me.titleCmp.surface;

                    surface.remove(sprite);
                    me.textConfig.type = 'text';
                    me.textConfig.text = title;
                    sprite = surface.add(me.textConfig);
                    sprite.setAttributes({
                        rotate: {
                            degrees: 90
                        }
                    }, true);
                    me.titleCmp.autoSizeSurface();
                } else {
                    me.title = title || '&#160;';
                    me.titleCmp.textEl.update(me.title);
                }
            } else {
                me.titleCmp.on({
                    render: function() {
                        me.setTitle(title);
                    },
                    single: true
                });
            }
        } else {
            me.on({
                render: function() {
                    me.layout.layout();
                    me.setTitle(title);
                },
                single: true
            });
        }
    },

    /**
     * Sets the CSS class that provides the icon image for this panel.  This method will replace any existing
     * icon class if one has already been set and fire the {@link #iconchange} event after completion.
     * @param {String} cls The new CSS class name
     */
    setIconCls: function(cls) {
        this.iconCls = cls;
        if (!this.iconCmp) {
            this.initIconCmp();
            this.insert(0, this.iconCmp);
        }
        else {
            if (!cls || !cls.length) {
                this.iconCmp.destroy();
            }
            else {
                var iconCmp = this.iconCmp,
                    el      = iconCmp.iconEl;

                el.removeCls(iconCmp.iconCls);
                el.addCls(cls);
                iconCmp.iconCls = cls;
            }
        }
    },

    /**
     * Add a tool to the header
     * @param {Object} tool
     */
    addTool: function(tool) {
        this.tools.push(this.add(tool));
    },

    /**
     * @private
     * Set up the tools.&lt;tool type> link in the owning Panel.
     * Bind the tool to its owning Panel.
     * @param component
     * @param index
     */
    onAdd: function(component, index) {
        this.callParent([arguments]);
        if (component instanceof Ext.panel.Tool) {
            component.bindTo(this.ownerCt);
            this.tools[component.type] = component;
        }
    }
});
