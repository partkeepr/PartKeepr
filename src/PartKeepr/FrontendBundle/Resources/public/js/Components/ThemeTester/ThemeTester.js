Ext.define("PartKeepr.ThemeTester", {
    extend: "Ext.panel.Panel",
    scrollable: true,

    initComponent: function () {
        this.isTouchTheme = window.theme === 'neptune-touch' || window.theme === 'crisp-touch';
        this.doThemes();
        this.callParent(arguments);
    },

    getBasicPanel: function () {
        return this.applySizing('basicPanel', {
            xtype: 'panel',
            title: 'Basic Panel',
            animCollapse: true,
            bodyPadding: 5,
            html: 'Some content'
        });
    },

    getCollapsedPanel: function () {
        return this.applySizing('collapsedPanel', {
            xtype: 'panel',
            title: 'Collapsed Panel',
            animCollapse: true,
            bodyPadding: 5,
            html: 'Some content',
            collapsible: true,
            collapsed: true
        });
    },

    getMaskedPanel: function () {
        return Ext.widget(this.applySizing('maskedPanel', {
            xtype: 'panel',
            title: 'Masked Panel',
            bodyPadding: 5,
            html: 'Some content',
            animCollapse: true,
            collapsible: true
        }));
    },

    getFramedPanel: function () {
        return this.applySizing('framedPanel', {
            xtype: 'panel',
            title: 'Framed Panel',
            animCollapse: true,
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                items: [{
                    text: 'test'
                }]
            }, {
                dock: 'right',
                xtype: 'toolbar',
                items: [{
                    text: 'test B'
                }]
            }, {
                dock: 'left',
                xtype: 'toolbar',
                items: [{
                    text: 'test A'
                }]
            }],
            html: 'Some content',
            frame: true
        });
    },

    getCollapsedFramedPanel: function () {
        return this.applySizing('collapsedFramedPanel', {
            xtype: 'panel',
            title: 'Collapsed Framed Panel',
            animCollapse: true,
            bodyPadding: 5,
            bodyBorder: true,
            html: 'Some content',
            frame: true,
            collapsible: true,
            collapsed: true
        });
    },

    getPanelWithToolbars: function () {
        /**
         * Toolbar with a menu
         */
        return this.applySizing('panelWithToolbars', {
            xtype: 'panel',
            id: 'panelWithToolbars',
            title: 'Basic Panel With Toolbars',
            collapsible: true,
            tbar: {
                id: 'panelWithToolbars_tbar',
                items: [{
                    xtype: 'buttongroup',
                    title: 'Button Group',
                    id: 'panelWithToolbars_btngroup',
                    columns: 2,
                    defaults: {
                        scale: 'small'
                    },
                    items: [{
                        xtype: 'splitbutton',
                        text: 'Menu Button',
                        iconCls: 'add16',
                        menu: [{text: 'Menu Button 1'}]
                    }, {
                        xtype: 'splitbutton',
                        text: 'Cut',
                        icon: '../shared/icons/fam/cross.gif',
                        id: 'panelWithToolbars_splitbtn',
                        menu: [{text: 'Cut Menu Item'}]
                    }]
                }]
            },
            bbar: {
                id: 'panelWithToolbars_bbar',
                items: ['Toolbar', ' ', '-', this.isTouchTheme ? null : {text: 'Button'}, {
                    text: 'Menu' + (this.isTouchTheme ? ' Button' : ''),
                    id: 'menu-btn',
                    menu: [{text: 'Menu item'},
                        {
                            text: 'Check 1',
                            checked: true
                        },
                        {
                            text: 'Check 2',
                            checked: false
                        },
                        '-',
                        {
                            text: 'Option 1',
                            checked: true,
                            group: 'opts'
                        },
                        {
                            text: 'Option 2',
                            checked: false,
                            group: 'opts'
                        },
                        '-',
                        {
                            text: 'Sub-items',
                            menu: Ext.widget('menu', {
                                items: [{text: 'Item 1'}, {text: 'Item 2'}]
                            })
                        }]
                }, {
                    xtype: 'splitbutton',
                    text: 'Split Button',
                    menu: Ext.widget('menu', {
                        items: [{text: 'Item 1'}, {text: 'Item 2'}]
                    })
                }, {
                    xtype: 'button',
                    enableToggle: true,
                    pressed: true,
                    text: 'Toggle Button'
                }]
            },
            lbar: {
                id: 'panelWithToolbars_lbar',
                items: [{text: 'Left'}]
            },
            rbar: {
                id: 'panelWithToolbars_rbar',
                items: [{text: 'Right'}]
            }
        });
    },

    getFormWidgets: function () {
        return this.applySizing('formWidgets', {
            xtype: 'form',
            id: 'form-widgets',
            title: 'Form Widgets',
            frame: true,

            tools: [{type: 'close'},
                {type: 'minimize'},
                {type: 'maximize'},
                {type: 'restore'},
                {type: 'gear'},
                {type: 'pin'},
                {type: 'unpin'},
                {type: 'right'},
                {type: 'left'},
                {type: 'down'},
                {type: 'refresh'},
                {type: 'minus'},
                {type: 'plus'},
                {type: 'help'},
                {type: 'search'},
                {type: 'save'},
                {type: 'print'}],

            bodyPadding: '10 20',

            defaults: {
                anchor: '98%',
                msgTarget: 'side',
                allowBlank: false
            },

            items: [{
                xtype: 'label',
                text: 'Plain Label'
            }, {
                fieldLabel: 'TextField',
                xtype: 'textfield',
                name: 'someField',
                emptyText: 'Enter a value'
            }, {
                fieldLabel: 'ComboBox',
                xtype: 'combo',
                store: ['Foo', 'Bar']
            }, {
                fieldLabel: 'DateField',
                xtype: 'datefield',
                name: 'date'
            }, {
                fieldLabel: 'TimeField',
                name: 'time',
                xtype: 'timefield'
            }, {
                fieldLabel: 'NumberField',
                xtype: 'numberfield',
                name: 'number',
                emptyText: '(This field is optional)',
                allowBlank: true
            }, {
                fieldLabel: 'TextArea',
                xtype: 'textareafield',
                name: 'message',
                cls: 'x-form-valid',
                value: 'This field is hard-coded to have the "valid" style (it will require some code changes to add/remove this style dynamically)'
            }, {
                fieldLabel: 'Checkboxes',
                xtype: 'checkboxgroup',
                columns: [100, 100],
                items: [{
                    boxLabel: 'Foo',
                    checked: true,
                    id: 'fooChk',
                    inputId: 'fooChkInput'
                }, {boxLabel: 'Bar'}]
            }, {
                fieldLabel: 'Radios',
                xtype: 'radiogroup',
                columns: [100, 100],
                items: [{
                    boxLabel: 'Foo',
                    checked: true,
                    name: 'radios'
                },
                    {
                        boxLabel: 'Bar',
                        name: 'radios'
                    }]
            }, {
                hideLabel: true,
                id: 'htmleditor',
                xtype: 'htmleditor',
                name: 'html',
                enableColors: false,
                value: 'Mouse over toolbar for tooltips.<br /><br />The HTMLEditor IFrame requires a refresh between a stylesheet switch to get accurate colors.',
                height: 110
            }, {
                xtype: 'fieldset',
                title: 'Plain Fieldset',
                items: [{
                    hideLabel: true,
                    xtype: 'radiogroup',
                    items: [{
                        boxLabel: 'Radio A',
                        checked: true,
                        name: 'radiogrp2'
                    }, {
                        boxLabel: 'Radio B',
                        name: 'radiogrp2'
                    }]
                }]
            }, {
                xtype: 'fieldset',
                title: 'Collapsible Fieldset',
                collapsible: true,
                items: [{
                    xtype: 'checkbox',
                    boxLabel: 'Checkbox 1'
                },
                    {
                        xtype: 'checkbox',
                        boxLabel: 'Checkbox 2'
                    }]
            }, {
                xtype: 'fieldset',
                title: 'Checkbox Fieldset',
                checkboxToggle: true,
                items: [{
                    xtype: 'radio',
                    boxLabel: 'Radio 1',
                    name: 'radiongrp1'
                }, {
                    xtype: 'radio',
                    boxLabel: 'Radio 2',
                    name: 'radiongrp1'
                }]
            }],

            buttons: [{
                text: 'Toggle Enabled',
                handler: function () {
                    this.up('form').items.each(function (item) {
                        item.setDisabled(!item.disabled);
                    });
                }
            }, {
                text: 'Reset Form',
                handler: function () {
                    Ext.getCmp('form-widgets').getForm().reset();
                }
            }, {
                text: 'Validate',
                handler: function () {
                    Ext.getCmp('form-widgets').getForm().isValid();
                }
            }]
        });
    },
    getBorderLayout: function () {
        var padding = {
            classic: 5,
            partkeepr: 5,
            gray: 5,
            triton: 10,
            'neptune-touch': 16,
            'crisp-touch': 16
        };

        return this.applySizing('borderLayout', {
            xtype: 'panel',
            title: 'BorderLayout Panel',
            layout: {
                type: 'border',
                padding: padding[Ext.themeName] || 8 // match padding to theme splitter size
            },
            collapsible: true,

            defaults: {
                collapsible: true,
                split: true
            },

            items: [{
                title: 'North',
                region: 'north',
                html: 'North',
                height: this.isTouchTheme ? 100 : 70
            }, {
                title: 'South',
                region: 'south',
                html: 'South',
                collapseMode: 'mini',
                height: this.isTouchTheme ? 100 : 70
            }, {
                title: 'West',
                region: 'west',
                html: 'West',
                collapseMode: 'mini',
                width: this.isTouchTheme ? 150 : 100
            }, {
                title: 'East',
                region: 'east',
                html: 'East',
                width: this.isTouchTheme ? 150 : 100
            }, {
                title: 'Center',
                region: 'center',
                collapsible: false,
                html: 'Center'
            }]
        });
    },

    getStore: function () {
        // Reverse order data should get sorted by the MemoryProxy
        var myData = [['E.I. du Pont de Nemours and Company', 40.48, 0.51, 1.28, '9/1 12:00am'],
            ['Citigroup, Inc.', 49.37, 0.02, 0.04, '9/1 12:00am'],
            ['Caterpillar Inc.', 67.27, 0.92, 1.39, '9/1 12:00am'],
            ['Boeing Co.', 75.43, 0.53, 0.71, '9/1 12:00am'],
            ['AT&T Inc.', 31.61, -0.48, -1.54, '9/1 12:00am'],
            ['American International Group, Inc.', 64.13, 0.31, 0.49, '9/1 12:00am'],
            ['American Express Company', 52.55, 0.01, 0.02, '9/1 12:00am'],
            ['Altria Group Inc', 83.81, 0.28, 0.34, '9/1 12:00am'],
            ['Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am'],
            ['3m Co', 71.72, 0.02, 0.03, '9/1 12:00am']];

        return Ext.create('Ext.data.ArrayStore', {
            fields: [{name: 'company'},
                {
                    name: 'price',
                    type: 'float',
                    convert: null
                },
                {
                    name: 'change',
                    type: 'float',
                    convert: null
                },
                {
                    name: 'pctChange',
                    type: 'float',
                    convert: null
                },
                {
                    name: 'lastChange',
                    type: 'date',
                    dateFormat: 'n/j h:ia'
                }],
            sorters: {
                property: 'company',
                direction: 'ASC'
            },
            data: myData,
            pageSize: 8
        });
    },

    getGrid: function () {
        var store = this.getStore(),
            pagingBar = Ext.widget('pagingtoolbar', {
                store: store,
                displayInfo: true,
                displayMsg: 'Displaying topics {0} - {1} of {2}'
            });

        return this.applySizing('grid', {
            xtype: 'gridpanel',
            title: 'GridPanel',
            collapsible: true,

            store: store,

            columns: [{
                header: "Company",
                flex: 1,
                sortable: true,
                dataIndex: 'company'
            },
                {
                    header: "Price",
                    width: 75,
                    sortable: true,
                    dataIndex: 'price'
                },
                {
                    header: "Change",
                    width: this.isTouchTheme ? 90 : 80,
                    sortable: true,
                    dataIndex: 'change'
                },
                {
                    header: "% Change",
                    width: this.isTouchTheme ? 105 : 95,
                    sortable: true,
                    dataIndex: 'pctChange'
                },
                {
                    header: "Last Updated",
                    width: this.isTouchTheme ? 130 : 110,
                    sortable: true,
                    xtype: 'datecolumn',
                    dataIndex: 'lastChange'
                }],
            loadMask: true,

            bbar: pagingBar,
            tbar: [{text: 'Toolbar'}, '->', {
                xtype: 'triggerfield',
                trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger'
            }]
        });
    },
    getAccordion: function () {
        var tree = Ext.create('Ext.tree.Panel', {
            title: 'TreePanel',
            root: {
                text: 'Root Node',
                expanded: true,
                children: [{
                    text: 'Item 1',
                    leaf: true
                }, {
                    text: 'Item 2',
                    leaf: true
                }, {
                    text: 'Folder',
                    children: [{
                        text: 'Item 3',
                        leaf: true
                    }]
                }]
            }
        });

        return this.applySizing('accordion', {
            title: 'Accordion and TreePanel',
            collapsible: true,
            layout: 'accordion',

            items: [tree, {
                title: 'Item 2',
                html: 'Some content'
            }, {
                title: 'Item 3',
                html: 'Some content'
            }]
        });
    },

    getTabs: function (config) {
        return Ext.apply({
            xtype: 'tabpanel',
            activeTab: 0,
            defaults: {
                bodyPadding: 10
            },

            items: [{
                title: 'Tab 1',
                html: 'Free-standing tab panel'
            }, {
                title: 'Tab 2',
                closable: true
            }, {
                title: 'Tab 3',
                closable: true
            }]
        }, config);
    },

    getScrollingTabs: function () {
        return this.applySizing('scrollingTabs', this.getTabs({
            enableTabScroll: true,
            plain: true,
            items: [{
                title: 'Tab 1',
                html: 'Tab panel 1 content'
            }, {
                title: 'Tab 2',
                html: 'Tab panel 2 content',
                closable: true
            }, {
                title: 'Tab 3',
                html: 'Tab panel 3 content',
                closable: true
            }, {
                title: 'Tab 4',
                html: 'Tab panel 4 content',
                closable: true
            }, {
                title: 'Tab 5',
                html: 'Tab panel 5 content',
                closable: true
            }, {
                title: 'Tab 6',
                html: 'Tab panel 6 content',
                closable: true
            }]
        }));
    },

    getPlainTabs: function () {
        return this.applySizing('plainTabs', this.getTabs({
            plain: true
        }));
    },

    getDatePicker: function () {
        return this.applySizing('datePicker', {
            xtype: 'panel',
            border: false,
            items: {
                xtype: 'datepicker'
            }
        });
    },

    getProgressBar: function () {
        var progressbar = Ext.widget('progressbar', {
            value: 0.5
        });


        setTimeout(function () {
            progressbar.wait({
                //animate: true,
                text: 'Progress text...'
            });
        }, 7000);


        return this.applySizing('progressBar', {
            xtype: 'panel',
            title: 'ProgressBar / Slider',
            bodyPadding: this.isTouchTheme ? 10 : 5,
            layout: 'anchor',

            items: [progressbar, {
                xtype: 'slider',
                hideLabel: true,
                value: 50,
                margin: '5 0 0 0',
                anchor: '100%'
            }, {
                xtype: 'slider',
                vertical: true,
                value: 50,
                height: this.isTouchTheme ? 200 : 100,
                margin: '5 0 0 0'
            }]
        });
    },

    getFramedGrid: function () {
        return this.applySizing('framedGrid', {
            xtype: 'grid',
            title: 'Framed Grid',
            collapsible: true,
            store: this.getStore(),
            multiSelect: true,
            emptyText: 'No images to display',
            frame: true,
            enableColumnMove: false,
            columns: [{
                header: "Company",
                flex: 1,
                sortable: true,
                dataIndex: 'company'
            },
                {
                    header: "Price",
                    width: this.isTouchTheme ? 90 : 75,
                    sortable: true,
                    dataIndex: 'price'
                },
                {
                    header: "Change",
                    width: this.isTouchTheme ? 90 : 75,
                    sortable: true,
                    dataIndex: 'change'
                }]
        });
    },

    getBasicWindow: function () {
        return Ext.widget('window', this.applySizing('basicWindow', {
            id: 'basicWindow',
            hidden: false,
            title: 'Window',
            bodyPadding: 5,
            html: 'Click Submit for Confirmation Msg.',
            collapsible: true,
            floating: false,
            closable: false,
            draggable: false,
            resizable: {handles: 's'},
            animCollapse: true,

            tbar: [{text: 'Toolbar'}],
            buttons: [{
                text: 'Submit',
                id: 'message_box',
                handler: function () {
                    Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?');
                }
            }]
        }));
    },

    getResizer: function () {
        return Ext.widget(this.applySizing('resizer', {
            xtype: 'component',
            style: 'background:transparent;overflow:hidden;',
            html: '<div style="margin:20px">Resizable handles</div>',
            resizable: {
                handles: 'all',
                pinned: true
            }
        }));
    },

    addFormWindow: function () {
        Ext.widget('window', {
            x: 660,
            y: 1230,

            width: 450, // height  : 360,
            minWidth: 450,

            title: 'Window',

            bodyPadding: '5 5 0 5',

            collapsible: true,
            closable: false,
            draggable: false,
            resizable: {handles: 's'},
            animCollapse: true,

            items: [{
                xtype: 'fieldset',
                title: 'Plain Fieldset',
                items: [{
                    fieldLabel: 'TextField',
                    xtype: 'textfield',
                    name: 'someField',
                    emptyText: 'Enter a value',
                    anchor: '100%'
                }, {
                    fieldLabel: 'ComboBox',
                    xtype: 'combo',
                    store: ['Foo', 'Bar'],
                    anchor: '100%'
                }, {
                    fieldLabel: 'DateField',
                    xtype: 'datefield',
                    name: 'date',
                    anchor: '100%'
                }, {
                    fieldLabel: 'TimeField',
                    name: 'time',
                    xtype: 'timefield',
                    anchor: '100%'
                }, {
                    fieldLabel: 'NumberField',
                    xtype: 'numberfield',
                    name: 'number',
                    emptyText: '(This field is optional)',
                    allowBlank: true,
                    anchor: '100%'
                }, {
                    fieldLabel: 'TextArea',
                    xtype: 'textareafield',
                    name: 'message',
                    cls: 'x-form-valid',
                    value: 'This field is hard-coded to have the "valid" style (it will require some code changes to add/remove this style dynamically)',
                    anchor: '100%'
                }, {
                    fieldLabel: 'Checkboxes',
                    xtype: 'checkboxgroup',
                    columns: [100, 100],
                    items: [{
                        boxLabel: 'Foo',
                        checked: true,
                        id: 'winFooChk',
                        inputId: 'winFooChkInput'
                    }, {boxLabel: 'Bar'}]
                }, {
                    xtype: 'radiogroup',
                    columns: [100, 100],
                    fieldLabel: 'Radio Group',
                    items: [{
                        boxLabel: 'Radio A',
                        checked: true,
                        name: 'radiogrp2'
                    }, {
                        boxLabel: 'Radio B',
                        name: 'radiogrp2'
                    }]
                }]
            }],

            buttons: [{
                text: 'Submit',
                handler: function () {
                    Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?');
                }
            }]
        }).show();
    },

    sizing: {
        mainContainer: {
            classic: [1130, 1460],
            neptune: [1250, 1600],
            'neptune-touch': [790, 4140]
        },
        basicPanel: {
            classic: [150, 90, 20, 20],
            neptune: [150, 130, 20, 20],
            'neptune-touch': [250, 150, 0, 0]
        },
        collapsedPanel: {
            classic: [150, 70, 20, 120],
            neptune: [150, 120, 20, 160],
            'neptune-touch': [250, 150, 0, 170]
        },
        maskedPanel: {
            classic: [130, 170, 180, 20],
            neptune: [130, 260, 180, 20],
            'neptune-touch': [230, 320, 270, 0]
        },
        framedPanel: {
            classic: [170, 100, 320, 20],
            neptune: [200, 150, 320, 20],
            'neptune-touch': [270, 150, 520, 0]
        },
        collapsedFramedPanel: {
            classic: [170, 60, 320, 130],
            neptune: [200, 100, 320, 180],
            'neptune-touch': [270, 150, 520, 170]
        },
        basicWindow: {
            classic: [150, 170, 500, 20, {
                minWidth: 150,
                minHeight: 150,
                maxHeight: 170
            }],
            neptune: [150, 260, 530, 20, {
                minWidth: 150,
                minHeight: 200,
                maxHeight: 260
            }],
            'neptune-touch': [250, 260, 0, 340, {
                minWidth: 150,
                minHeight: 200,
                maxHeight: 260
            }]
        },
        panelWithToolbars: {
            classic: [450, 170, 660, 20],
            neptune: [500, 260, 690, 20],
            'neptune-touch': [520, 260, 270, 340]
        },
        formWidgets: {
            classic: [630, 750, 20, 200],
            neptune: [660, 750, 20, 290],
            triton: [660, 1000, 20, 290],
            'neptune-touch': [790, 940, 0, 620]
        },
        borderLayout: {
            classic: [450, 350, 660, 200],
            neptune: [500, 350, 690, 290],
            'neptune-touch': [790, 500, 0, 1580]
        },
        grid: {
            classic: [450, 200, 660, 560],
            neptune: [500, 200, 690, 650],
            triton: [500, 300, 690, 650],
            'neptune-touch': [790, 400, 0, 2100]
        },
        accordion: {
            classic: [450, 240, 660, 770],
            neptune: [500, 240, 690, 860],
            triton: [500, 340, 690, 960],
            'neptune-touch': [790, 340, 0, 2520]
        },
        scrollingTabs: {
            classic: [310, 150, 20, 960],
            neptune: [325, 150, 20, 1050],
            triton: [325, 150, 20, 1300],
            'neptune-touch': [420, 200, 0, 2880]
        },
        plainTabs: {
            classic: [310, 150, 340, 960],
            neptune: [325, 150, 355, 1050],
            triton: [325, 150, 355, 1300],
            'neptune-touch': [350, 200, 440, 2880]
        },
        datePicker: {
            classic: [180, undefined, 20, 1120],
            neptune: [212, undefined, 20, 1210],
            triton: [310, undefined, 20, 1460],
            'neptune-touch': [282, undefined, 0, 3780]
        },
        progressBar: {
            classic: [450, 200, 660, 1020],
            neptune: [500, 200, 690, 1110],
            triton: [500, 220, 690, 1310],
            'neptune-touch': [790, 340, 0, 3100]
        },
        framedGrid: {
            classic: [450, 180, 660, 1230],
            neptune: [500, 180, 690, 1320],
            triton: [500, 280, 690, 1540],
            'neptune-touch': [790, 300, 0, 3460]
        },
        resizer: {
            classic: [440, 220, 210, 1120],
            neptune: [440, 220, 240, 1210],
            triton: [340, 220, 340, 1460],
            'neptune-touch': [488, 314, 302, 3780]
        }
    },

    theme: "",

    getSizing: function (id) {
        var theme = window.theme,
            info;

        if (theme === 'gray' || theme === "partkeepr")
        {
            // same dimensions
            theme = 'classic';
        }

        info = this.sizing[id][theme];
        if (!info && theme === 'crisp')
        {
            // default to neptune for crisp
            info = this.sizing[id]['neptune'];
        }
        if (!info && theme === 'triton')
        {
            // default to neptune for triton
            info = this.sizing[id]['neptune'];
        }
        if (!info && theme === 'crisp-touch')
        {
            // default to neptune-touch for crisp
            info = this.sizing[id]['neptune-touch'];
        }

        return info;
    },

    applySizing: function (id, config) {

        var info = this.getSizing(id),
            keys = ['width', 'height', 'x', 'y'],
            len = keys.length,
            i = 0,
            val;

        if (info)
        {
            for (; i < len; ++i)
            {
                val = info[i];
                if (val !== undefined)
                {
                    config[keys[i]] = val;
                }
            }

            // Any other config options
            Ext.applyIf(config, info[len]);
        }

        return config;
    },

    doThemes: function () {
        var time = Ext.perf.getTimestamp(),
            maskedPanel;

        var items = [this.getBasicPanel(),
            this.getCollapsedPanel(),
            maskedPanel = this.getMaskedPanel(),
            this.getFramedPanel(),
            this.getCollapsedFramedPanel(),
            this.getBasicWindow(),
            this.getPanelWithToolbars(),
            this.getFormWidgets(),
            this.getBorderLayout(),
            this.getGrid(),
            this.getAccordion(),
            this.getScrollingTabs(),
            this.getPlainTabs(),
            this.getDatePicker(),
            this.getProgressBar(),
            this.getFramedGrid(),
            this.getResizer(),
            0 // end of list (makes commenting out any of the above easy
        ];
        items.pop(); // remove the 0 on the end

        main = Ext.create('Ext.container.Container', this.applySizing('mainContainer', {
            id: 'main-container',
            layout: 'absolute',
            items: items
        }));


        this.items = main;

        //addFormWindow();

        setTimeout(function () {
            // we may comment out the creation of this for testing
            if (maskedPanel)
            {
                maskedPanel.setLoading({
                    msg: 'Loading...',
                    useTargetEl: true
                });
            }


            Ext.QuickTips.init();

        }, 2000);

        time = Ext.perf.getTimestamp() - time;
        Ext.log('total time: ' + Math.round(time));
    },

    statics: {
        iconCls: 'fugue-icon ui-combo-box-blue',
        title: i18n('Theme Tester'),
        closable: true,
        menuPath: [{text: i18n("View")},
            {
                text: i18n("Developers"),
                iconCls: "fugue-icon toolbox"
            }]
    }
});


