//
// TODO: Add GridPanel.getView() to the lib
// TODO: Rename Ext.ux.PreviewPlugin -> Ext.grid.RowPreviewPlugin
// TODO: Move CSS styles from paging.html into grid.css
// TODO: Move JsonStore fix into the lib
//
/*========================================================================
 * 
 * This section contains stuff that should be in Ext4, or stuff that
 * is up for discussion. It should be removed prior to Ext 4 final.
 *
 *========================================================================*/

// This should be working as the alternateClassName but doesn't for some reason
Ext.toolbar.Toolbar.SplitButton = Ext.button.Split;

// DomHelper does not currently go through the ClassManager so there is no alternateClassName
Ext.DomHelper = Ext.core.DomHelper;

Ext.apply(Ext.panel.Panel.prototype, {
    getToolbars : function(dock){
        return this.getDockedItems({
            alias: 'widget.toolbar',
            dock: dock
        });
    }
});

// Not sure if these are intended to be deprecated or they just haven't been moved over
Ext.apply(Ext.menu.Menu.prototype, {
    addSeparator : function() {
        return this.add(Ext.create('Ext.menu.Separator'));
    },
    addElement : function(el) {
        return this.add(Ext.create('Ext.menu.Item', {
            el: el
        }));
    },
    addItem : function(item) {
        return this.add(item);
    },
    addMenuItem : function(config) {
        return this.add(this.lookupComponent(config));
    },
    addText : function(text){
        return this.add(Ext.create('Ext.menu.Item', {
            plain: true,
            text: text
        }));
    }
});


/*========================================================================
 * 
 * This section contains true compatibility overrides and should ship
 * with Ext 4 as an optional compatibility layer for Ext 3 code.
 * Ext.Compat is defined in ext3-core-compat.js.
 *
 *========================================================================*/

(function(){
    var compat = Ext.Compat,
        deprecate = Ext.bind(compat.deprecate, compat),
        notify = Ext.bind(compat.notify, compat),
        breaking = Ext.bind(compat.breaking, compat);
    
    /*-------------------------------------------------------------
     * Date (from the Ext.util folder in 3.x)
     *-------------------------------------------------------------*/
    (function(){
        var nativeDate = window.Date,
            utilDate = Ext.Date,
            staticMappings = ['useStrict', 'formatCodeToRegex', 'parseFunctions', 'parseRegexes', 'formatFunctions', 'y2kYear', 
                'MILLI', 'SECOND', 'MINUTE', 'HOUR', 'DAY', 'MONTH', 'YEAR', 'defaults', 'dayNames', 'monthNames', 
                'monthNumbers', 'formatCodes', 'getFormatCode', 'createFormat', 'createParser', 'parseCodes'],
            staticOverrides = ['getShortMonthName', 'getShortDayName', 'getMonthNumber', 'isValid', 'parseDate'],
            proto = ['dateFormat', 'format', 'getTimezone', 'getGMTOffset', 'getDayOfYear', 'getWeekOfYear', 'isLeapYear', 
                'getFirstDayOfMonth', 'getLastDayOfMonth', 'getFirstDateOfMonth', 'getLastDateOfMonth', 'getDaysInMonth', 
                'getSuffix', 'clone', 'isDST', 'clearTime', 'add', 'between'];
            
        // Static direct mappings. These are either private methods or any members
        // that cannot be aliased as methods to include a warning. These are documented
        // in the migration guide as breaking changes to be fixed.
        Ext.Array.forEach(staticMappings, function(member) {
            nativeDate[member] = utilDate[member];
        });
        
        // Static overrides. These are public static methods that can be overridden
        // as methods to include console warnings.
        Ext.Array.forEach(staticOverrides, function(member) {
            nativeDate[member] = function(){
                deprecate({pkg:'Date', member:member, alt:'Ext.Date.'+member});
                return utilDate[member].apply(utilDate, arguments);
            };
        });
        
        // Prototype (instance) overrides
        Ext.Array.forEach(proto, function(member) {
            nativeDate.prototype[member] = function() {
                if(member !== 'dateFormat'){
                    // dateFormat is actually private, and it is aliased publicly as "format". It needs
                    // to be included, but we can skip the warning as it would be a duplicate of the format
                    // warning and would actually be misleading since it won't have been called directly.
                    // All other methods in this array are public and should give a warning.
                    deprecate({pkg:'Date', member:'<date>.'+member, alt:'Ext.Date.'+member,
                        msg:'Note that this is now a static method, so the date instance will be the first argument to the new version.'});
                }
                return utilDate[member].apply(utilDate, [this].concat(Array.prototype.slice.call(arguments)));
            };
        });
    })();

    /*-------------------------------------------------------------
     * XTypes
     *-------------------------------------------------------------*/
    if (Ext.ClassManager) {
        Ext.apply(Ext.ClassManager, {
            instantiateByAlias: Ext.Function.createInterceptor(Ext.ClassManager.instantiateByAlias, function() {
                var args = Ext.Array.toArray(arguments),
                    alias = args.shift();
                //
                // These are xtypes that are not currently aliased in the framework code.
                // Not sure if these should really be deprecated or not...
                //
                if(alias == 'widget.tbsplit'){
                    deprecate({pkg:'Core', member:'tbsplit', alt:'splitbutton', type:'xtype'});
                    Ext.ClassManager.setAlias('Ext.button.Split', 'widget.tbsplit');
                }
                if(alias == 'widget.progress'){
                    deprecate({pkg:'Core', member:'progress', alt:'progressbar', type:'xtype'});
                    Ext.ClassManager.setAlias('Ext.ProgressBar', 'widget.progress');
                }
            })
        });
    }
    
    /*-------------------------------------------------------------
     * MicedCollection
     *-------------------------------------------------------------*/
    if (Ext.util.AbstractMixedCollection) {
        Ext.apply(Ext.util.AbstractMixedCollection.prototype, {
            removeKey : function() {
                deprecate({pkg:'Ext.util.MixedCollection', member:'removeKey', alt:'removeAtKey'});
                return this.removeAtKey.apply(this, arguments);
            },
            item : function() {
                deprecate({pkg:'Ext.util.MixedCollection', member:'item', alt:'get'});
                return this.get.apply(this, arguments);
            },
            itemAt : function() {
                deprecate({pkg:'Ext.util.MixedCollection', member:'itemAt', alt:'getAt'});
                return this.getAt.apply(this, arguments);
            },
            key : function() {
                deprecate({pkg:'Ext.util.MixedCollection', member:'key', alt:'getByKey'});
                return this.getByKey.apply(this, arguments);
            }
        });
    }
    if (Ext.util.MixedCollection) {
        Ext.apply(Ext.util.MixedCollection.prototype, {
            constructor: Ext.Function.createInterceptor(Ext.util.MixedCollection.prototype.constructor, function() {
                this._origSort = this.sort;
                this.sort = function(dir, fn) {
                    if (Ext.isFunction(fn)) {
                        deprecate({pkg:'Ext.util.MixedCollection', member:'sort (with a comparator fn)', alt:'sortBy', 
                            msg:'Calling MixedCollection.sort and passing a comparator function as the second parameter '+
                                'is no longer supported. See the docs for MixedCollection.sort to see the current '+
                                'valid parameter list. When passing a comparator function, use sortBy instead.'});
                        
                        return this.sortBy(fn);
                    }
                    return this._origSort(arguments);
                }
            }),
            keySort : function() {
                deprecate({pkg:'Ext.util.MixedCollection', member:'keySort', alt:'sortByKey'});
                return this.sortByKey.apply(this, arguments);
            }
        });
    }
    
    /*-------------------------------------------------------------
     * AbstractComponent
     *-------------------------------------------------------------*/
    if (Ext.AbstractComponent) {
        Ext.apply(Ext.AbstractComponent.prototype, {
            addClass : function() {
                deprecate({pkg:'Ext.Component', member:'addClass', alt:'addCls'});
                return this.addCls.apply(this, arguments);
            },
            removeClass : function() {
                deprecate({pkg:'Ext.Component', member:'removeClass', alt:'removeCls'});
                return this.removeCls.apply(this, arguments);
            }
        });
    }
    
    /*-------------------------------------------------------------
     * Component
     *-------------------------------------------------------------*/
    if (Ext.Component) {
        Ext.apply(Ext.Component.prototype, {
            initComponent: Ext.Function.createInterceptor(Ext.Component.prototype.initComponent, function() {
                if(Ext.isDefined(this.applyTo)){
                    deprecate({pkg:'Ext.Component', member:'applyTo', type:'config', alt:'renderTo',
                        msg:'Applying components to existing markup via "applyTo" is no longer supported.'});
                    
                    var replaced = false;
                    try{
                        var target = Ext.get(this.applyTo);
                        if (target) {
                            var parent = target.parent();
                            if (parent) {
                                this.renderTo = parent;
                                target.remove();
                                replaced = true;
                                notify({pkg:'Ext.Component', member:'applyTo', msg:'This component will attempt to render to '+
                                    'the applyTo target\'s parent node ("' + parent.id + '"). If this did not work as expected then '+
                                    'you will have to replace the applyTo config manually before this component will render properly.'})
                            }
                        }
                    } catch(ex) {}
                    
                    if (!replaced) {
                        breaking({pkg:'Ext.Component', member:'applyTo', msg:'Attempted to render the component to the applyTo target\'s '+
                            'parent node, but this failed. You must resolve this manually before the component can render.'})
                    }
                }
            })
        });

        Ext.define('Ext.BoxComponent', {
            extend: 'Ext.Component',
            constructor: function() {
                deprecate({member:'Ext.BoxComponent', alt:'Ext.Component', 
                    msg:'All functionality from BoxComponent is now directly in Component. '+
                        'Replace "BoxComponent" with "Component" and/or xtype "box" with "component".'});
                
                this.callParent(arguments);
            }
        });
    }
    
    /*-------------------------------------------------------------
     * ComponentManager
     *-------------------------------------------------------------*/
    if (Ext.ComponentManager) {
        var regMsg = 'Calling a separate function to register custom types is no longer necessary. '+
                     'Switch your class definition to use Ext.define with "{0}" as the alias config.';
        
        var checkClassRef = function(pkg, cls, member) {
            if (!Ext.isString(cls)) {
                breaking({pkg:pkg, member:member, msg:'You must either convert the passed class reference to a string -- e.g. ' + 
                    pkg + '.' + member + '("myclass", "Ext.ux.MyClass") -- or change your class definition to use Ext.define. '+
                    'See the section in the Migration Guide on registering xtypes for more info.'});
            }
        };
        
        Ext.ComponentManager.registerType = function(xtype, cls){
            deprecate({pkg:'ComponentManager', member:'registerType', msg:Ext.String.format(regMsg, 'widget.'+xtype)});
            checkClassRef('ComponentManager', cls, 'registerType');
            Ext.ClassManager.setAlias(cls, 'widget.'+xtype);
        };
        Ext.reg = function(xtype, cls){
            deprecate({pkg:'Ext', member:'reg', msg:Ext.String.format(regMsg, 'widget.'+xtype)});
            checkClassRef('Ext', cls, 'reg');
            Ext.ClassManager.setAlias(cls, 'widget.'+xtype);
        };
        Ext.ComponentManager.registerPlugin = function(ptype, cls){
            deprecate({pkg:'ComponentManager', member:'registerPlugin', msg:Ext.String.format(regMsg, 'plugin.'+ptype)});
            checkClassRef('ComponentManager', cls, 'registerPlugin');
            Ext.ClassManager.setAlias(cls, 'plugin.'+ptype);
        };
        Ext.preg = function(ptype, cls){
            deprecate({pkg:'Ext', member:'preg', msg:Ext.String.format(regMsg, 'plugin.'+ptype)});
            checkClassRef('Ext', cls, 'preg');
            Ext.ClassManager.setAlias(cls, 'plugin.'+ptype);
        };
    }
    
    /*-------------------------------------------------------------
     * Container
     *-------------------------------------------------------------*/
    if (Ext.container.AbstractContainer) {
        Ext.apply(Ext.container.AbstractContainer.prototype, {
            get: function(comp) {
                deprecate({pkg:'Ext.Container', member:'get', alt:'getComponent'});
                return this.getComponent(comp);
            },
            findById: function(id) {
                deprecate({pkg:'Ext.Container', member:'findById', alt:'getComponent'});
                return this.getComponent(id);
            }
        });
    }
    if (Ext.container.Container) {
        Ext.apply(Ext.container.Container.prototype, {
            initComponent: Ext.Function.createInterceptor(Ext.container.Container.prototype.initComponent, function() {
                if (this.layout === 'form') {
                    deprecate({pkg:'FormPanel', member:'form', type:'layout', 
                        msg:'Form layout no longer exists, use a different container layout and allow each field\'s '+
                            'Field layout to apply labels. Falling back to anchor layout.'});
                    
                    this.layout = 'anchor';
                }
            })
        });
    }

    /*-------------------------------------------------------------
     * Toolbar
     *-------------------------------------------------------------*/
    if (Ext.toolbar.Toolbar) {
        Ext.apply(Ext.toolbar.Toolbar.prototype, {
            addField : function(field){
                deprecate({pkg:'Toolbar', member:'addField', alt:'add'});
                return this.add(field);
            }
        });
    }
    
    /*-------------------------------------------------------------
     * PagingToolbar
     *-------------------------------------------------------------*/
    if (Ext.toolbar.Paging) {
        Ext.apply(Ext.toolbar.Paging.prototype, {
            constructor: Ext.Function.createInterceptor(Ext.toolbar.Paging.prototype.constructor, function(config) {
                if (config.paramNames) {
                    var msg = 'Instead of params specific to this toolbar you should set any needed options on the associated store/proxy. '+
                        'See the header docs for Ext.data.Store for details. The defaults for PagingToolbar {start: \'start\', limit: \'limit\'} '+
                        'would map to the store\'s proxy as {startParam: \'start\', limitParam: \'limit\'}.';
                    
                    if (config.store && config.store.proxy) {
                        config.store.proxy.startParam = config.paramNames[start];
                        config.store.proxy.limitParam = config.paramNames[limit];
                        deprecate({pkg:'PagingToolbar', member:'paramNames', msg:msg});
                    }
                    else {
                        breaking({pkg:'PagingToolbar', member:'paramNames', msg:msg + ' No proxy is available in the current PagingToolbar '+
                            'configuration so this cannot be aliased automatically.'});
                    }
                    delete config.paramNames;
                }
                if (config.pageSize) {
                    config.store.pageSize = config.pageSize;
                    deprecate({pkg:'PagingToolbar', member:'pageSize', alt:'store.pageSize'});
                }
            }),
            changePage : function(page){
                deprecate({pkg:'PagingToolbar', member:'changePage', alt:'store.loadPage'});
                this.store.loadPage(page);
            }
        });
    }
    
    /*-------------------------------------------------------------
     * Views
     *-------------------------------------------------------------*/
    if (Ext.view.AbstractView) {
        Ext.apply(Ext.view.AbstractView.prototype, {
            initComponent : function(){
                var isDef = Ext.isDefined;
                if (!isDef(this.tpl) || !isDef(this.store) || !isDef(this.itemSelector)) {
                    throw "DataView requires tpl, store and itemSelector configurations to be defined.";
                }
                Ext.view.AbstractView.superclass.initComponent.call(this);
                if(Ext.isString(this.tpl) || Ext.isArray(this.tpl)){
                    this.tpl = new Ext.XTemplate(this.tpl);
                }
                
                if (isDef(this.overClass)){
                    deprecate({pkg:'DataView', member:'overClass', alt:'overItemCls', type:'config'});
                    this.overItemCls = this.overClass;
                    delete this.overClass;
                }
                if (isDef(this.overCls)){
                    deprecate({pkg:'DataView', member:'overCls', alt:'overItemCls', type:'config'});
                    this.overItemCls = this.overCls;
                    delete this.overCls;
                }
                if (isDef(this.selectedClass)){
                    deprecate({pkg:'DataView', member:'selectedClass', alt:'selectedItemCls', type:'config'});
                    this.selectedItemCls = this.selectedClass;
                    delete this.selectedClass;
                }
                if (isDef(this.selectedCls)){
                    deprecate({pkg:'DataView', member:'selectedCls', alt:'selectedItemCls', type:'config'});
                    this.selectedItemCls = this.selectedCls;
                    delete this.selectedCls;
                }
                
                this.addEvents(
                    'beforerefresh',
                    'refresh'
                );
                this.addCmpEvents();
                this.store = Ext.data.StoreManager.lookup(this.store);
                this.all = new Ext.CompositeElementLite();
                this.getSelectionModel().bindComponent(this);
            }
        });
    }
    
    /*-------------------------------------------------------------
     * Panel
     *-------------------------------------------------------------*/
    if (Ext.panel.Panel) {
        Ext.apply(Ext.panel.AbstractPanel.prototype, {
            initComponent: Ext.Function.createInterceptor(Ext.panel.AbstractPanel.prototype.initComponent, function() {
                if (this.bodyCssClass) {
                    var me = this,
                        msg = '',
                        bodyCssClass = me.bodyCssClass;
                        
                    if (Ext.isFunction(bodyCssClass)) {
                        me.bodyCls = bodyCssClass();
                        msg = 'Note that passing a function reference as the config value is no longer supported.'
                    }
                    else {
                        me.bodyCls = bodyCssClass;
                    }
                    delete me.bodyCssClass;
                    deprecate({pkg:'Ext.panel.Panel', member:'bodyCssClass', type:'config', alt:'bodyCls', msg:msg});
                }
            })
        });
        
        Ext.apply(Ext.panel.Panel.prototype, {
            getTopToolbar: function(){
                notify('Panel now supports an arbitrary number of toolbars, so getTopToolbar() will return the top toolbar at index 0 if multiple are found');
                var items = this.getToolbars('top');
                return items.length > 0 ? items[0] : null;
            },
            getBottomToolbar: function(){
                notify('Panel now supports an arbitrary number of toolbars, so getBottomToolbar() will return the bottom toolbar at index 0 if multiple are found');
                var items = this.getToolbars('bottom');
                return items.length > 0 ? items[0] : null;
            }
        });
    }

    /*-------------------------------------------------------------
     * Layouts
     *-------------------------------------------------------------*/
    if (Ext.layout.container.Accordion) {
        Ext.apply(Ext.layout.container.Accordion.prototype, {
            constructor: Ext.Function.createSequence(Ext.layout.container.Accordion.prototype.constructor, function() {
                notify('AccordionLayout now defaults to animating expand/collapse. To revert to the 3.x default behavior set animate:false on the layout.')
            })
        });
    }
    
    /*-------------------------------------------------------------
     * TablePanel
     *-------------------------------------------------------------*/
    if (Ext.panel.Table) {
        Ext.apply(Ext.panel.Table.prototype, {
            initComponent: Ext.Function.createInterceptor(Ext.panel.Table.prototype.initComponent, function() {
                if (Ext.isDefined(this.preventHeaders)) {
                    deprecate({pkg:'Ext.grid.Panel', member:'preventHeaders', type:'config', alt:'hideHeaders'});
                    this.hideHeaders = this.preventHeaders;
                    delete this.preventHeaders;
                }
            })
        });
    }
    
    /*-------------------------------------------------------------
     * Grid components
     *-------------------------------------------------------------*/
    if (Ext.grid.Panel) {
        Ext.apply(Ext.grid.Panel.prototype, {
            constructor: Ext.Function.createInterceptor(Ext.grid.Panel.prototype.constructor, function(config) {
                if (config.trackMouseOver !== undefined) {
                    deprecate({pkg:'Ext.GridPanel', member:'trackMouseOver', alt:'trackOver', type:'config',
                        msg:'Specify this as an attribute of the "viewConfig" config (e.g. viewConfig: {trackOver: false}).'});
                    
                    config.viewConfig = config.viewConfig || {};
                    config.viewConfig.trackOver = config.viewConfig.trackOver || config.trackMouseOver;
                    delete config.trackMouseOver; 
                }
                if (config.stripeRows !== undefined) {
                    deprecate({pkg:'Ext.GridPanel', member:'stripeRows', type:'config',
                        msg:'The stripeRows option should now be passed as an attribute of the "viewConfig" config (e.g. viewConfig: {stripeRows: true}).'});
                    
                    config.viewConfig = config.viewConfig || {};
                    config.viewConfig.stripeRows = config.viewConfig.stripeRows || config.stripeRows;
                    delete config.stripeRows; 
                }
                if (config.cm || config.colModel) {
                    deprecate({pkg:'Ext.GridPanel', member:'colModel/cm', type:'config',
                        msg:'Grids no longer use a ColumnModel class. Just specify the columns array config instead.'});
                    
                    // the ColumnModel mock constructor below just returns the columns array
                    config.columns = config.cm || config.colModel;
                    delete config.cm;
                    delete config.colModel;
                }
                var cols = config.columns || this.columns;
                if (cols && Ext.isArray(cols)) {
                    Ext.each(cols, function(col) {
                        if (col.id && !col.dataIndex) {
                            notify('Grid column "' + col.id + '" is defined with an id, but no dataIndex. In Ext 4 the id is used to reference the '+
                                'columns as components, and dataIndex is used to map back to the data id. Please add dataIndex to all columns.');
                            col.dataIndex = col.id;
                        }
                    });
                }
                if (config.store && config.store instanceof Ext.data.GroupingStore) {
                    notify({pkg:'Ext.GridPanel', msg:'Attempting to convert a GroupingStore store config into a Grouping feature. See the '+
                        'GroupingStore constructor warning for additional details.'});
                        
                    config.features = config.features || [];
                    config.features.push(Ext.create('Ext.grid.feature.Grouping'));
                }
            }),
            
            initComponent: Ext.Function.createInterceptor(Ext.grid.Panel.prototype.initComponent, function() {
                if (this.autoExpandColumn !== undefined) {
                    deprecate({pkg:'Ext.grid.Panel', member:'autoExpandColumn', alt:'flex (header config)', type:'config',
                        msg:'You can set "flex: 1" in a specific header config for behavior equivalent to autoExpandColumn.'});
                        
                    var id;
                    Ext.Array.each(this.headers, function(header){
                        id = header.id || header.dataIndex;
                        if(id === this.autoExpandColumn){
                            header.flex = 1;
                            return false;
                        }
                    }, this);
                }
            })
        });
        
        Ext.apply(Ext.grid.GridPanel.prototype, {
            getColumnModel: function(){
                if (!this.colModel && !this.cm) {
                    this.cm = this.colModel = new Ext.grid.ColumnModel({
                        columns: this.columns
                    });
                }
                return this.cm;
            }
        });
        
        Ext.grid.EditorGridPanel = function(config) {
            deprecate({pkg:'Ext.grid.EditorGridPanel', msg:'EditorGridPanel no longer exists as a separate class. Instead just '+
                'create a standard GridPanel and include the CellEditing plugin, e.g. "plugins: Ext.create("Ext.grid.plugin.CellEditing", {...})'});
            
            return Ext.createWidget('grid', Ext.apply(config || {}, {
                plugins: Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1
                })
            }));
        }
    }
    
    if (Ext.grid.View) {
        Ext.apply(Ext.grid.View.prototype, {
            constructor: Ext.Function.createInterceptor(Ext.grid.View.prototype.constructor, function(config) {
                if(Ext.isFunction(config.getRowClass)){
                    var getRowClass = config.getRowClass;
                    this.__getRowClass = Ext.bind(getRowClass, this);
                    delete config.getRowClass;
                    
                    this.getRowClass = function(rec, rowIndex, rowParams, store){
                        var result = this.__getRowClass(rec, rowIndex, rowParams, store);
                        if (rowParams.body) {
                            delete rowParams.body;
                            breaking({pkg:'Ext.grid.View', member:'getRowClass.rowParams.body', single:true,
                                msg:'To implement a custom row body you must add the RowBody feature (ftype:"rowbody") '+
                                    'to the grid\'s viewConfig and override the "getAdditionalData" template method '+
                                    '(or use the Ext.grid.RowBodyPlugin helper class). Unfortunately this cannot be '+
                                    'inferred at design time so it must be fixed manually.'});
                        }
                        if (rowParams.bodyStyle) {
                            delete rowParams.bodyStyle;
                            deprecate({pkg:'Ext.grid.View', member:'getRowClass.rowParams.bodyStyle', single:true,
                                msg:'To implement a custom row styles you must add the RowBody feature (ftype:"rowbody") '+
                                    'to the grid\'s viewConfig and override the "getAdditionalData" template method '+
                                    '(or use the Ext.grid.RowBodyPlugin helper class). Note that in 3.x this property '+
                                    'was a CSS style spec, whereas now you specify "rowBodyCls" as a CSS classname instead. Ignoring for now.'});
                        }
                        if (rowParams.tstyle) {
                            delete rowParams.tstyle;
                            deprecate({pkg:'Ext.grid.View', member:'getRowClass.rowParams.tstyle', single:true,
                                msg:'Grid row bodies no longer use a wrapping TABLE element, so the "tstyle" property '+
                                    'no longer directly applies. If you have CSS styles that still need to be applied, you '+
                                    'should add the RowBody feature (ftype:"rowbody") to the grid\'s viewConfig and override '+
                                    'the "getAdditionalData" template method (or use the Ext.grid.RowBodyPlugin helper class). '+
                                    'Note that in 3.x this property was a CSS style spec, whereas now you would use the "rowBodyCls" '+
                                    'CSS classname instead (and adjust for the fact that there is no TABLE if needed). Ignoring for now.'});
                        }
                        return result;
                    };
                }
            })
        });
        
        Ext.grid.GroupingView = function(config) {
            breaking({pkg:'Ext.grid.GroupingView', msg:'GroupingView no longer exists as a separate class, and grid views should '+
                'not need to be instantiated directly. Instead just create a standard GridPanel and include the Grouping feature, '+
                'e.g. "features: Ext.create("Ext.grid.feature.Grouping", {...}). Unfortunately there is no way to alias a call to this '+
                'constructor properly, so you\'ll need to adjust your GridPanel constructor as noted to resolve this.'});
        }
    }
    
    if (Ext.grid.header.Container) {
        Ext.apply(Ext.grid.header.Container.prototype, {
            constructor: Ext.Function.createSequence(Ext.grid.header.Container.prototype.constructor, function() {
                this.__prepareData = this.prepareData;
                this.prepareData = function(data, rowIdx, record, view) {
                    var obj = this.__prepareData(data, rowIdx, record, view);
                    if (obj.cssWarning) {
                        delete obj.cssWarning;
                        deprecate({pkg:'Ext.grid.Panel', single:true, msg:'Your grid column renderer is including the legacy "css" attribute '+
                            'in the returned metaData object. This has been renamed to "tdCls" so you should change the attribute name in your renderer.'});
                    }
                    return obj;
                }
            })
        });
    }
    
    if (Ext.grid.Header) {
        Ext.apply(Ext.grid.Header.prototype, {
            initComponent: Ext.Function.createInterceptor(Ext.grid.Header.prototype.initComponent, function() {
                if (Ext.isDefined(this.header)) {
                    deprecate({pkg:'Ext.grid.Panel', member:'header', alt:'text', type:'config', single: true,
                        msg:'In 3.x the grid had a "columns" array containing "header" configs for the title of each column. '+
                            'In 4.0 the grid has a "headers" array and you should specify the "text" config for each header.'});
                            
                    this.text = this.header;
                    delete this.header;
                }
            })
        });
    }
    
    Ext.grid.ColumnModel = function(config) {
        return Ext.applyIf(config.columns ? config.columns : config, {
            on: Ext.emptyFn,
            addListener: Ext.emptyFn,
            getColumnId: Ext.emptyFn,
            getColumnAt: Ext.emptyFn,
            setConfig: Ext.emptyFn,
            getColumnById: Ext.emptyFn,
            getIndexById: Ext.emptyFn,
            moveColumn: Ext.emptyFn,
            getColumnCount: Ext.emptyFn,
            getColumnsBy: Ext.emptyFn,
            isSortable: Ext.emptyFn,
            isMenuDisabled: Ext.emptyFn,
            getRenderer: Ext.emptyFn,
            getRendererScope: Ext.emptyFn,
            setRenderer: Ext.emptyFn,
            getColumnWidth: Ext.emptyFn,
            setColumnWidth: Ext.emptyFn,
            getTotalWidth: Ext.emptyFn,
            getColumnHeader: Ext.emptyFn,
            setColumnHeader: Ext.emptyFn,
            getColumnTooltip: Ext.emptyFn,
            setColumnTooltip: Ext.emptyFn,
            getDataIndex: Ext.emptyFn,
            setDataIndex: Ext.emptyFn,
            findColumnIndex: Ext.emptyFn,
            isCellEditable: Ext.emptyFn,
            getCellEditor: Ext.emptyFn,
            setEditable: Ext.emptyFn,
            isHidden: Ext.emptyFn,
            isFixed: Ext.emptyFn,
            isResizable: Ext.emptyFn,
            setHidden: Ext.emptyFn,
            setEditor: Ext.emptyFn,
            destroy: Ext.emptyFn,
            setState: Ext.emptyFn
        });
    };
    
    if (Ext.grid.Column) {
        Ext.Compat.bindProperty({owner:Ext.grid.Column, name:'types', defaultValue:{},
            getterMsg: function(){
                deprecate({pkg:'Ext.grid.Column', member:'types', type:'property', alt:'alias (config)',
                    msg:'The new approach to creating a custom column type is to specify the alias config '+
                    'within your column\'s class definition (e.g., alias: ["widget.mycolumn"]). You could also '+
                    'call the setAlias method after the class is defined.'});
            }
        });
    }
    
    // temp aliases -- these will be added into Ext 4
    Ext.apply(Ext.grid.Panel.prototype, {
        getStore: function() {
            return this.store;
        }
    });
    
    if (Ext.selection.Model) {
        Ext.apply(Ext.selection.Model.prototype, {
            selectRow: function(index){
                deprecate({pkg:'Ext.grid.RowSelectionModel', member:'selectRow', alt:'Ext.selection.RowModel.selectRange', 
                    msg:'Note that selectRange requires both start and end rows as its first two arguments (defaulting both to '+index+').'});
                
                return this.selectRange(index, index);
            },
            getSelections: function(){
                deprecate({pkg:'Ext.grid.RowSelectionModel', member:'getSelections', alt:'Ext.selection.RowModel.getSelection'});
                return this.getSelection();
            }
        });
    }
    
    /*-------------------------------------------------------------
     * Tree (removed classes)
     *-------------------------------------------------------------*/
    Ext.tree.TreeNode = function(config){
        deprecate({pkg:'Ext.tree.TreeNode', msg:'This class is no longer needed. The Tree now uses standard Records that get decorated '+
            'by the NodeInterface class in Ext 4.'});
        Ext.apply(this, config);
    };
    Ext.tree.AsyncTreeNode = function(config){
        deprecate({pkg:'Ext.tree.AsyncTreeNode', msg:'This class is no longer needed. Specify a TreeStore with an AjaxProxy instead.'});
        Ext.apply(this, config);
    };
    Ext.tree.AsyncTreeNode.prototype = {
        expand: function(){
            if (this.store) {
                this.store.load({
                    url: this.url || this.dataUrl
                });
            }
        }
    };
    
    Ext.tree.TreeSorter = function(tree, config){
        deprecate({pkg:'Ext.tree.TreeSorter', msg:'This class is no longer needed. Specify a TreeStore with standard "sorter" config options instead.'});
        Ext.apply(this, config);
    };
    
    Ext.tree.TreeLoader = function(config){
        deprecate({pkg:'Ext.tree.TreeLoader', msg:'This class is no longer needed. Specify a TreeStore with standard store options to load the tree.'});
        Ext.apply(this, config);
    };
    
    /*-------------------------------------------------------------
     * TreePanel
     *-------------------------------------------------------------*/
    if (Ext.tree.Panel) {
        Ext.apply(Ext.tree.Panel.prototype, {
            constructor: Ext.Function.createInterceptor(Ext.tree.Panel.prototype.constructor, function(config) {
                if (config.hlDrop) {
                    delete config.hlDrop;
                    deprecate({pkg:'Ext.tree.TreePanel', member:'hlDrop', type:'config', 
                        msg:'Highlighting tree nodes on drop is no longer supported. You can simply remove this config.'});
                }
                if (config.hlColor) {
                    delete config.hlDrop;
                    deprecate({pkg:'Ext.tree.TreePanel', member:'hlColor', type:'config',
                        msg:'Highlighting tree nodes on drop is no longer supported. You can simply remove this config.'});
                }
                
                var ddConfig = config.ddConfig || {};
                if (Ext.isDefined(config.enableDrag)) {
                    deprecate({pkg:'Ext.tree.TreePanel', member:'enableDrag', type:'config', alt:'ddConfig.enableDrag'});
                    ddConfig.enableDrag = config.enableDrag;
                    delete config.enableDrag;
                }
                if (Ext.isDefined(config.enableDrop)) {
                    deprecate({pkg:'Ext.tree.TreePanel', member:'enableDrop', type:'config', alt:'ddConfig.enableDrop'});
                    ddConfig.enableDrop = config.enableDrop;
                    delete config.enableDrop;
                }
                if (Ext.isDefined(config.enableDD)) {
                    var msg = config.enableDD ? 'Note that ddConfig defaults to enabling both drag and drop by default in Ext 4. Since you are '+
                        'currently passing "enableDD: true", in this case the config can simply be ommitted entirely.' : '';
                    
                    ddConfig = {
                        enableDrag: config.enableDD,
                        enableDrop: config.enableDD
                    };
                    delete config.enableDD;
                    deprecate({pkg:'Ext.tree.TreePanel', member:'enableDD', type:'config', alt:'ddConfig', msg:msg});
                }
                config.ddConfig = ddConfig;
                
                var url = config.dataUrl || this.dataUrl;
                if (url) {
                    deprecate({pkg:'Ext.tree.TreePanel', member:'dataUrl', type:'config', alt:'TreeStore',
                        msg:'The TreePanel no longer supports loading data directly. Creating an implicit TreeStore using the url: '+url});
                    
                    this.loader = { dataUrl: url };
                    delete config.dataUrl;
                    delete this.dataUrl;
                }
                else if (config.loader) {
                    this.loader = config.loader;
                    delete config.loader;
                    deprecate({pkg:'Ext.tree.TreePanel', member:'loader', type:'config', alt:'TreeStore',
                        msg:'The TreeLoader class and TreePanel.loader config have been removed. Trees now use the TreeStore '+
                            'which provides all standard Ext.data.Store loading capabilities.'});
                }
                
                if (config.root && (config.root instanceof Ext.tree.AsyncTreeNode || config.root.nodeType == 'async')) {
                    config.loader = this.loader;
                }
                this.applyCompatOptions();
            }),
            
            initComponent: Ext.Function.createSequence(Ext.tree.Panel.prototype.initComponent, function() {
                this.on('itemclick', function(view, model, el, idx, e){
                    if (this.events['click']) {
                        model.attributes = model.attributes || model.data;
                        this.fireEvent('click', model, e);
                        deprecate({pkg:'Ext.tree.TreePanel', member:'click', type:'event', alt:'itemclick', 
                            msg:'Note that the argument order has changed, and that the data argument was a node in 3.x and is now '+
                                'the selected model. Instead of node.attributes you can access the data via model.data.'})
                    }
                });
            }),
            
            applyCompatOptions: function(){
                var loader = this.loader;
                if (loader && (loader.url || loader.dataUrl || loader.proxy)) {
                    var urlProp = loader.url ? 'url' : 'dataUrl',
                        proxy = loader.proxy || {
                            type: 'ajax',
                            url: loader[urlProp]
                        },
                        storeConfig = {
                            proxy: proxy
                        }
                    
                    if (this.root) {
                        storeConfig.root = this.root;
                        delete this.root;
                    }
                    this.store = new Ext.data.TreeStore(storeConfig);
                    this.loader.store = this.store;
                    
                    notify({pkg:'Ext.tree.Panel', msg:'Using the TreeLoader.' + urlProp + 
                        ' config to generate a default TreeStore + Proxy with the url: '+loader[urlProp]});
                }
            },
            
            // Aliased in TreePanel
//            setRootNode: function(root){
//                deprecate({pkg:'Ext.tree.Panel', member:'setRootNode', alt:'TreeStore.setRootNode', 
//                    msg:'Alternately you could add a "root" option to your TreeStore config.'});
//                
//                if (this.store) {
//                    this.store.setRootNode(root);
//                }
//                else {
//                    this.root = root;
//                    this.applyCompatOptions();
//                }
//            },
            
            // Aliased in TreePanel
//            getRootNode : function(){
//                deprecate({pkg:'Ext.tree.Panel', member:'getRootNode', alt:'TreeStore.getRootNode'});
//                return this.store.getRootNode.apply(this.store, arguments);
//            },
            
            getNodeById : function(){
                deprecate({pkg:'Ext.tree.Panel', member:'getNodeById', alt:'TreeStore.getNodeById',
                    msg:'If you have a TreePanel reference you can call treePanel.getStore().getNodeById("id").'});
                
                return this.store.getNodeById.apply(this.store, arguments);
            },
            
            getChecked : function(){
                deprecate({pkg:'Ext.tree.Panel', member:'getChecked', alt:'Ext.tree.View.getChecked',
                    msg:'Note that in 3.x this method returned objects of type TreeNode. In 4.0 it returns standard Records, '+
                        'so the code that processes the checked items will have to be adjusted accordingly. For compatibility '+
                        'the record\'s data objects are being returned, as each record\'s data is now decorated with the node '+
                        'interface so they should match the 3.x API. However your 4.0 code should expect full Record objects '+
                        'instead and will access the node attributes via Record.get(\'attrName\') or Record.data.attrName.'});
                
                var recs = this.getView().getChecked(),
                    nodes = [];
                
                Ext.each(recs, function(rec){
                    nodes.push(rec.data);
                });
                
                return nodes;
            }
        });
    }
    
    if (Ext.data.TreeStore) {
        Ext.override(Ext.data.TreeStore, {
            fillNode: function(node, records) {
                var me = this,
                    ln = records ? records.length : 0,
                    i = 0, sortCollection;
        
//                if (ln && me.sortOnLoad && !me.remoteSort && me.sorters && me.sorters.items) {
//                    sortCollection = Ext.create('Ext.util.MixedCollection');
//                    sortCollection.addAll(records);
//                    sortCollection.sort(me.sorters.items);
//                    records = sortCollection.items;
//                }
                
                node.set('loaded', true);
                for (; i < ln; i++) {
                    node.appendChild(records[i], undefined, true);
                }
                
                return records;
            }
        });
    }
    
    /*-------------------------------------------------------------
     * SelectionModel
     *-------------------------------------------------------------*/
    if (Ext.selection.RowModel) {
        Ext.apply(Ext.selection.RowModel.prototype, {
            constructor: Ext.Function.createSequence(Ext.selection.RowModel.prototype.constructor, function() {
                this.on('select', function(sm, rec, idx){
                    if (this.events['rowselect']) {
                        this.fireEvent('rowselect', sm, idx, rec);
                        deprecate({pkg:'Ext.grid.RowSelectionModel', member:'rowselect', type:'event', alt:'select', 
                            msg:'Note that the argument order has changed (the index and record/model args have been switched).'})
                    }
                });
                this.on('deselect', function(sm, rec, idx){
                    if (this.events['rowdeselect']) {
                        this.fireEvent('rowdeselect', sm, idx, rec);
                        deprecate({pkg:'Ext.grid.RowSelectionModel', member:'rowdeselect', type:'event', alt:'deselect', 
                            msg:'Note that the argument order has changed (the index and record/model args have been switched).'})
                    }
                });
            })
        });
    }
    
    /*-------------------------------------------------------------
     * Forms
     *-------------------------------------------------------------*/
    if (Ext.form.Basic) {
        Ext.apply(Ext.form.Basic.prototype, {
            add: function() {
                deprecate({pkg:'Ext.form.Basic', member:'add'});
                return this;
            },
            
            remove: function(field) {
                deprecate({pkg:'Ext.form.Basic', member:'remove'});
                return this;
            },
            
            cleanDestroyed: function() {
                deprecate({pkg:'Ext.form.Basic', member:'cleanDestroyed'});
            },
            
            render: function() {
                deprecate({pkg:'Ext.form.Basic', member:'render'});
                return this;
            },
            
            getFieldValues: function(dirtyOnly) {
                deprecate({pkg:'Ext.form.Basic', member:'getFieldValues', alt:'getValues'});
                return this.getValues(false, dirtyOnly);
            },
    
            callFieldMethod: function(fnName, args) {
                deprecate({pkg:'Ext.form.Basic', member:'callFieldMethod'});
    
                args = args || [];
                this.getFields().each(function(f) {
                    if (Ext.isFunction(f[fnName])) {
                        f[fnName].apply(f, args);
                    }
                });
                return this;
            }
        });
    }

    if (Ext.form.Panel) {
        Ext.apply(Ext.form.Panel.prototype, {
            monitorValid: false,
            monitorPoll: 200,
            
            initComponent: Ext.Function.createInterceptor(Ext.form.Panel.prototype.initComponent, function() {
                var me = this,
                    fieldDefaultsProps = {
                        hideLabels: 'hideLabel',
                        labelAlign: 'labelAlign',
                        labelPad: 'labelPad',
                        labelSeparator: 'labelSeparator',
                        labelWidth: 'labelWidth'
                    },
                    fieldDefaults = me.fieldDefaults || (me.fieldDefaults = {});
    
                Ext.iterate(fieldDefaultsProps, function(from, to) {
                    if (from in me) {
                        deprecate({pkg:'Ext.form.Panel', member:from, type:'config', 
                            msg:'Use the fieldDefaults config object with a "' + to + '" property instead.'});
                            
                        fieldDefaults[to] = me[from];
                    }
                });
    
                if (me.hasOwnProperty('monitorValid')) {
                    deprecate({pkg:'Ext.form.Panel', member:'monitorValid', alt:'pollForChanges'});
                }
                if (me.hasOwnProperty('monitorPoll')) {
                    deprecate({pkg:'Ext.form.Panel', member:'monitorPoll', alt:'pollInterval'});
                }
            }),
            
            startMonitoring: function() {
                deprecate({pkg:'Ext.form.Panel', member:'startMonitoring', alt:'startPolling'});
                this.startPolling(this.monitorPoll);
            },
            
            stopMonitoring: function() {
                deprecate({pkg:'Ext.form.Panel', member:'stopMonitoring', alt:'stopPolling'});
                this.stopPolling();
            }
        });
    }

    if (Ext.form.field.Base) {
        Ext.apply(Ext.form.field.Base.prototype, {
            initComponent: Ext.Function.createInterceptor(Ext.form.field.Base.prototype.initComponent, function() {
                // Many legacy examples modify the default msgTarget on the Ext.form.Field class's prototype; this doesn't
                // work anymore since Field is a mixin. Copy to Ext.form.field.Base and inform about change and the new
                // recommended FormPanel.fieldDefaults. Only do this once rather than for every field.
                var msgTarget = Ext.form.Field.prototype.msgTarget;
                if (msgTarget && msgTarget !== 'qtip') {
                    deprecate({pkg:'Ext.form.Field', member:'msgTarget', type:'config', single: true,
                        msg:'Found an overridden value for Ext.form.Field.prototype.msgTarget -- Ext.form.Field is ' +
                            'now Ext.form.field.Base; either override msgTarget on Ext.form.field.Base\'s prototype ' +
                            'or use the new recommended Ext.form.Panel#fieldDefaults object instead.'});
                    
                    Ext.form.field.Base.prototype.msgTarget = Ext.form.Field.prototype.msgTarget;
                }
            })
        });
    }

    if (Ext.form.field.Checkbox) {
        Ext.apply(Ext.form.field.Checkbox.prototype, {
            initComponent: Ext.Function.createInterceptor(Ext.form.field.Checkbox.prototype.initComponent, function() {
                this.addEvents(
                    /**
                     * @event check
                     * Fires when the checkbox is checked or unchecked.
                     * @deprecated Use the 'change' event instead.
                     * @param {Ext.form.field.Checkbox} this This checkbox
                     * @param {Boolean} checked The new checked value
                     */
                    'check'
                );
                // TODO is there a clean way to throw a deprecation warning when the user listens for the check event?
            }),
            
            onChange: Ext.Function.createInterceptor(Ext.form.field.Checkbox.prototype.onChange, function(newVal, oldVal) {
                this.fireEvent('check', this, this.checked);
            })
        });
    }

    if (Ext.form.CheckboxGroup) {
        var cbgSetValue = Ext.form.CheckboxGroup.prototype.setValue;
    
        Ext.apply(Ext.form.CheckboxGroup.prototype, {
    
            initComponent: Ext.Function.createInterceptor(Ext.form.CheckboxGroup.prototype.initComponent, function() {
                var me = this,
                    items = me.items;
    
                // Handle the old structure where the 'items' could be a set of column configs
                if (items && items[0] && 'columnWidth' in items[0] && me.layout !== 'column') {
                    deprecate({pkg:'Ext.form.CheckboxGroup', type:'config',
                        msg:'CheckboxGroup and RadioGroup no longer accept implicit column containers in the "items" ' +
                            'config. If you wish to use a custom column arrangement, set layout:"column" and create ' +
                            'a standard items structure with container xtypes.'});
                    me.layout = 'column';
                    Ext.Array.forEach(items, function(column) {
                        column.xtype = 'container';
                        column.defaultType = me.defaultType;
                    });
                }
            }),
            
            setValue: function(id, value) {
                var me = this,
                    f;
                if (arguments.length === 1) {
                    value = id;
                    if (Ext.isObject(value)) {
                        cbgSetValue.call(me, value);
                    }
                    if (Ext.isString(value)) {
                        deprecate({pkg:'Ext.form.CheckboxGroup', member:'setValue', 
                            msg:'The setValue method no longer accepts a String argument. Use the new Object form instead.'});
                            
                        me.setValueForItem(value);
                    }
                    else if (Ext.isArray(value)) {
                        deprecate({pkg:'Ext.form.CheckboxGroup', member:'setValue', 
                            msg:'The setValue method no longer accepts an Array argument. Use the new Object form instead.'});
                            
                        me.batchChanges(function() {
                            Ext.each(value, function(val, idx){
                                if (Ext.isObject(val) && val.setValue) { // array of checkbox components to be checked
                                    val.setValue(true);
                                }
                                else if (Ext.isString(val)) {
                                    f = me.getBox(val);
                                    if (f) {
                                        f.setValue(true);
                                    }
                                }
                                else { // an array of boolean values
                                    var item = me.getBoxes()[idx];
                                    if (item) {
                                        item.setValue(val);
                                    }
                                }
                            });
                        });
                    }
                }
                else {
                    deprecate({pkg:'Ext.form.CheckboxGroup', member:'setValue', 
                        msg:'The setValue method no longer accepts a two-argument form. Use the new single Object form instead.'});
                        
                    f = me.getBox(id);
                    if (f) {
                        f.setValue(value);
                    }
                }
    
                return me;
            },
    
            // private
            setValueForItem : function(val){
                deprecate({pkg:'Ext.form.CheckboxGroup', member:'setValueForItem'});
                var me = this;
                val = String(val).split(',');
                me.batchChanges(function() {
                    me.eachBox(function(item) {
                        if (val.indexOf(item.inputValue) > -1) {
                            item.setValue(true);
                        }
                    });
                });
            },
    
            // private
            getBox : function(id){
                deprecate({pkg:'Ext.form.CheckboxGroup', member:'getBox'});
                var box = null;
                this.eachBox(function(f) {
                    if (id == f || f.dataIndex == id || f.id == id || f.getName() == id) {
                        box = f;
                        return false;
                    }
                });
                return box;
            }
        });
    }


    /*-------------------------------------------------------------
     * CompositeField
     *-------------------------------------------------------------*/
    if (Ext.form.FieldContainer) {
        Ext.define('Ext.form.CompositeField', {
            extend: 'Ext.form.FieldContainer',
            alias: 'widget.compositefield',
            uses: ['Ext.layout.container.HBox'],
    
            isComposite: true,
            combineErrors: true,
    
            layout: {
                type: 'hbox',
                defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
            },
            baseDefaults: {
                hideLabel: true
            },
    
            initComponent: function() {
                deprecate({member:'Ext.form.CompositeField', alt:'Ext.form.FieldContainer',
                    msg:'What used to be CompositeField has been replaced by the more flexible FieldContainer. '+
                        'We will reintroduce a true Composite field in a future release.'});
    
                this.defaults = Ext.apply({}, this.defaults, this.baseDefaults);
    
                this.callParent(arguments);
            }
        });
    }
    
    
    /*-------------------------------------------------------------
     * ComboBox
     *-------------------------------------------------------------*/
    if (Ext.form.field.ComboBox) {
        Ext.apply(Ext.form.field.ComboBox.prototype, {
            initComponent: Ext.Function.createInterceptor(Ext.form.field.ComboBox.prototype.initComponent, function() {
                var me = this,
                    isDef = Ext.isDefined,
                
                // shortcut for configs that just changed names:
                remap = function(cfg, alt){
                    if(isDef(me[cfg])){
                        deprecate({pkg:'Ext.form.field.ComboBox', member:cfg, type:'config', alt:alt});
                        me[alt] = me[cfg];
                        delete me[cfg];
                    }
                };
                remap('listAlign', 'pickerAlign');
                remap('mode', 'queryMode');
                remap('triggerClass', 'triggerCls');
    
                // shortcut for configs that were moved into the listConfig object:
                var listConfig = me.listConfig || (me.listConfig = {}),
                remapToListConfig = function(cfg, alt) {
                    if(isDef(me[cfg])){
                        deprecate({pkg:'Ext.form.field.ComboBox', member:cfg, type:'config', alt:'listConfig.' + alt});
                        listConfig[alt] = me[cfg];
                        delete me[cfg];
                    }
                };
                remapToListConfig('itemSelector', 'itemSelector');
                remapToListConfig('listClass', 'cls');
                remapToListConfig('listWidth', 'width');
                remapToListConfig('loadingText', 'loadingText');
                remapToListConfig('minHeight', 'minHeight');
                remapToListConfig('minListWidth', 'minWidth');
                remapToListConfig('maxHeight', 'maxHeight');
                remapToListConfig('resizable', 'resizable');
                remapToListConfig('selectedClass', 'selectedItemCls');
                remapToListConfig('shadow', 'shadow');
    
                // shortcut for configs that were completely removed with no replacement:
                var remove = function(cfg){
                    if(isDef(me[cfg])){
                        notify({pkg:'Ext.form.field.ComboBox', member:cfg,
                            msg:'This config is no longer needed and has no replacement -- just remove it from your code.'});
                        delete me[cfg];
                    }
                };
                remove('autoCreate');
                remove('clearFilterOnReset');
                remove('handleHeight');
                remove('hiddenId');
                remove('hiddenName');
                remove('lazyInit');
                remove('lazyRender');
                remove('title');
                
                // non-standard mappings:
                if(isDef(me.tpl)){
                    deprecate({pkg:'Ext.form.field.ComboBox', member:'tpl', type:'config', alt:'getInnerTpl (method)',
                        msg:'There is no config for providing the combo\'s item template now. Instead, you should override '+
                            'the "getInnerTpl" method to provide whatever logic is required and return the template string.'});
                    
                    // make sure we are returning a template string and not an XTemplate instance:
                    var tpl = me.tpl.html ? me.tpl.html : me.tpl;
                    
                    me.getInnerTpl = function(){
                        return tpl;
                    };
                    delete me.tpl;
                }
            })
        });
    }
    
    /*-------------------------------------------------------------
     * Slider
     *-------------------------------------------------------------*/
    if (Ext.slider.Multi) {
        Ext.apply(Ext.slider.Multi.prototype, {
            initComponent: Ext.Function.createInterceptor(Ext.slider.Multi.prototype.initComponent, function() {
                if (this.plugins) {
                    Ext.each(this.plugins, function(p){
                        if (p.getText) {
                            deprecate({pkg:'Ext.Slider', msg:'In 3.x the Ext.slider.Tip plugin was required to provide custom slider tip text. '+
                                'In 4.0 you should instead supply the tipText config directly.'});
                                
                            this.tipText = p.getText;
                            Ext.Array.remove(this.plugins, p);
                            return;
                        }
                    }, this); 
                }
            })
        });
    }

    /*-------------------------------------------------------------
     * Store
     *-------------------------------------------------------------*/
    if (Ext.data.Store) {
        Ext.apply(Ext.data.AbstractStore.prototype, {
            constructor: Ext.Function.createInterceptor(Ext.data.AbstractStore.prototype.constructor, function(config) {
                if (this.$className == 'Ext.data.NodeStore') {
                    return;
                }
                if (config.url) {
                    deprecate({pkg:'Ext.data.Store', member:'url', type:'config', alt:'proxy.url',
                        msg:'The store\'s "url" config should now be passed as a config to a valid remote-style proxy.'});
                            
                    if (!config.proxy) {
                        deprecate({pkg:'Ext.data.Store', msg:'A store url was specified with no proxy config. Implcitily creating an AjaxProxy with that url. '+
                            'Please see the header docs for Ext.data.Store for details on properly setting up your data components.'});
                        
                        config.proxy = {
                            type: 'ajax',
                            url: config.url
                        };
                        delete config.url;
                        
                        if (config.reader) {
                            config.proxy.reader = config.reader;
                            delete config.reader;
                            deprecate({pkg:'Ext.data.Store', member:'reader', type:'config', msg:'As part of creating an implicit AjaxProxy for compatibility, '+
                                'the store\'s existing reader config has also been moved to the proxy. Note that the reader config should no longer be passed '+
                                'directly as a store config, but should be specified on the proxy instead.'});
                        }
                    }
                }
                else if (!this.model && !config.model){
                    // there is no model set, so we need to try the various possible configurations supported by 3.x
                    // and hopefully find something we can convert into an implicit model
                    var fields;
                    if (config.fields) {
                        // shorthand store classes like ArrayStore and XmlStore support fields directly on the store config
                        fields = config.fields;
                        delete config.fields;
                        // this is required to be done, but skip the warning. In some cases TreeStore internally adds this. The bigger picture
                        // issue of configuring the store correctly will already be covered by other warnings.
//                        deprecate({pkg:'Ext.data.Store', msg:'Passing a "fields" config directly on the store\'s config is no longer supported. '+
//                            'Instead you should configure a model and pass it as the store\'s "model" config. ' +
//                            'Please see the header docs for Ext.data.Store for details on properly setting up your data components.'});
                    }
                    else if (config.reader) {
                        if (config.reader.model) {
                            // the compat warning for this case is displayed below in the Ext.data.Reader override where
                            // reader.model is set. This code is just here to make it work properly.
                            config.model = config.reader.model;
                            delete this.fields;
                            this.implicitModel = true;
                            return true;
                        }
                        else if (config.reader.fields) {
                            // standard stores typically get fields from the reader config
                            fields = config.reader.fields;
                            delete config.reader.fields;
                            deprecate({pkg:'Ext.data.Store', msg:'Passing a "fields" config via the store\'s reader config is no longer supported. '+
                                'Instead you should configure a model and pass it as the store\'s "model" config. ' +
                                'Please see the header docs for Ext.data.Store for details on properly setting up your data components.'});
                        }
                        else {
                            breaking({pkg:'Ext.data.Store', msg:'No valid model or field configuration could be found '+
                                'so this store could not be constructed. Please see the header docs for Ext.data.Store for '+
                                'details on properly setting up your data components.'});
                            
                            return false;
                        }
                        if (config.proxy) {
                            config.proxy.reader = config.reader;
                            delete config.reader;
                            deprecate({pkg:'Ext.data.Store', member:'reader', type:'config', msg:'The reader config should now be specified on the '+
                                'configured proxy rather than directly on the store.'});
                        }
                    }
                    else {
                        // we should never get here, but just in case
                        breaking({pkg:'Ext.data.Store', msg: 'A store was specified with no model, url, or fields configured. '+
                            'Please see the header docs for Ext.data.Store for details on properly setting up your data components.'});
                        
                        return false;
                    }
    
                    var pn = config.paramNames;                
                    if (config.proxy && pn) {
                        Ext.apply(config.proxy, {
                            startParam: pn.start || 'start',
                            limitParam: pn.limit || 'limit',
                            sortParam : pn.sort || 'sort',
                            directionParam  : pn.dir || 'dir'
                        });
                        deprecate({pkg:'Ext.data.Store', member:'paramNames', msg:'This is now split out into individual configs at the proxy '+
                            'level (e.g., paramNames.start == proxy.startParam). Set each config directly on the proxy as needed.'})
                    }
                    
                    var id = 'Ext.data.Store.ImplicitModel-' + (config.storeId || config.id || Ext.id());
                    notify({pkg:'Ext.data.Store', msg:'Registering implicit model ' + id + '. Please update your code to create a model explicitly.'});
                    
                    config.model = Ext.define(id, {
                        extend: 'Ext.data.Model',
                        fields: fields,
                        proxy: config.proxy
                    });
                    this.implicitModel = true;
                }
            })
        });
        
        Ext.apply(Ext.data.Store.prototype, {
            constructor: Ext.Function.createInterceptor(Ext.data.Store.prototype.constructor, function(config) {
                if (config.data && Ext.isObject(config.data)) {
                    deprecate({pkg:'Ext.data.Store', member:'data<Object>', type:'config', alt:'data<Array>',
                        msg:'Passing inline data to store\'s constructor as an object is no longer supported. Pass a '+
                            'plain array of record data or use one of the standard proxy configurations for loading data.'});
                    
                    if(config.root){
                        this.inlineData = config.data[config.root];
                        delete config.data;
                    }
                    else {
                        breaking({pkg:'Ext.data.Store', 
                            msg:'Passing inline data as an object to the Store constructor without specifying a root property is not supported.'});
                    }
                }
                if (config.sortInfo) {
                    deprecate({pkg:'Ext.data.Store', member:'sortInfo', type:'config', alt:'sorters'});
                    config.sorters = [{
                        property: config.sortInfo.field,
                        direction: config.sortInfo.direction
                    }];
                }
            }),
            
            setDefaultSort : function(field, dir) {
                deprecate({pkg:'Ext.data.Store', member:'setDefaultSort', alt:'sorters (config)',
                    msg:'Either add the default sort via the "sorters" config or by adding it to the "sorters" property after the store is created. '+
                        'See the Ext.data.Store header docs for details on configuring sorters.'});
                
                this.sorters = new Ext.util.MixedCollection();
                this.sorters.add(new Ext.util.Sorter({
                    property: field,
                    direction: dir ? dir.toUpperCase() : 'ASC'
                }));
            }
        });
        
        Ext.Compat.bindProperty({owner:Ext.data.Store, name:'recordType',
            getter: function(){
                return this.model;
            },
            getterMsg: function(){
                deprecate({pkg:'Ext.data.Store', member:'recordType', type:'property', alt:'model'});
            }
        });
    }
    
    if (Ext.data.JsonStore) {
        // TODO: Move this override into the lib?
        Ext.apply(Ext.data.JsonStore.prototype, {
            constructor: function(config) {
                config = config || {};
                config.proxy = config.proxy || {};
                
                Ext.applyIf(config.proxy, {
                    type  : 'ajax',
                    writer: 'json',
                    reader: new Ext.data.JsonReader(config)
                });
                Ext.data.JsonStore.superclass.constructor.call(this, config);
            }
        });
    }
    
    Ext.data.GroupingStore = function(config) {
        deprecate({pkg:'Ext.data.GroupingStore', msg:'GroupingStore no longer exists as a separate class. Instead just '+
            'create a standard GridPanel and include the Grouping feature, e.g. "features: Ext.create("Ext.grid.feature.Grouping", {...})'});
        
        return Ext.create('Ext.data.Store', config);
    }
    
    /*-------------------------------------------------------------
     * Record
     *-------------------------------------------------------------*/
    if (Ext.data.Record) {
        Ext.data.Record.create = function(o){
            deprecate({pkg:'Ext.data.Record', member:'create', msg:'There is no longer any need to statically define records. '+
                'You can simply define a new Model configured with the necessary fields via Ext.define, extending Ext.data.Model.'});
                
            var f = Ext.extend(Ext.data.Record, {});
            var p = f.prototype;
            p.fields = new Ext.util.MixedCollection(false, function(field){
                return field.name;
            });
            for(var i = 0, len = o.length; i < len; i++){
                p.fields.add(new Ext.data.Field(o[i]));
            }
            f.getField = function(name){
                return p.fields.get(name);
            };
            return f;
        };
    }
    
    /*-------------------------------------------------------------
     * Readers
     *-------------------------------------------------------------*/
    if (Ext.data.JsonReader) {
        Ext.data.JsonReader.override({
            //TODO: seems to be a bug in the class system that this is required for the Reader override 
            constructor: function(){
                this.callParent(arguments);
            }
        });
    }
    
    if (Ext.data.Reader) {
        Ext.apply(Ext.data.Reader.prototype, {
            constructor: function(config, recordType) {
                Ext.apply(this, config || {});
        
                if (config.fields) {
                    // this will get converted to an implicit model in the store constructor
                    deprecate({pkg:'Ext.data.Reader', member:'fields', type:'config',
                        msg:'The fields config is no longer supported. Please refer to the '+
                            'Ext.data.Store header docs for the proper way to set up your data components.'});
                }
                if (recordType) {
                    // this will get converted to an implicit model in the store constructor
                    config.fields = recordType;
                    deprecate({pkg:'Ext.data.Reader', member:'recordType', type:'arg',
                        msg:'The recordType argument to the Reader constructor is no longer supported. Please refer to the '+
                            'Ext.data.Store header docs for the proper way to set up your data components.'});
                }
                
                if (config.model) {
                    this.model = Ext.ModelManager.getModel(config.model);
                }
                else if (config.fields) {
                    this.model = Ext.define('Ext.data.Store.ImplicitModel-' + Ext.id(), {
                        extend: 'Ext.data.Model',
                        fields: config.fields
                    });
                }
                // This is not always true, e.g. with inline array data:
//                else {
//                    breaking({pkg:'Ext.data.Reader', 
//                        msg:'No valid model or field configuration could be found so this reader could not be constructed.'});
//                }
                
                if (this.model) {
                    this.buildExtractors();
                }
            }
        });
    }
    
    if (Ext.data.XmlReader) {
        Ext.apply(Ext.data.XmlReader.prototype, {
            // FYI, this entire constructor is now deprecated because all behavior is now in the superclass constructor
            constructor: function(config, recordType) {
                config = config || {};
                if (config.idPath) {
                    config.idProperty = config.idPath;
                    deprecate({pkg:'Ext.data.XmlReader', member:'idPath', type:'config', alt:'idProperty'});
                }
                if (config.id) {
                    config.idProperty = config.id;
                    deprecate({pkg:'Ext.data.XmlReader', member:'id', type:'config', alt:'idProperty'});
                }
                if (config.success) {
                    config.successProperty = config.success;
                    deprecate({pkg:'Ext.data.XmlReader', member:'success', type:'config', alt:'successProperty'});
                }
                // make sure we pass arguments in case the deprecated recordType arg is included
                Ext.data.XmlReader.superclass.constructor.apply(this, arguments);
            }
        });
    }
    
    /*-------------------------------------------------------------
     * Proxies
     *-------------------------------------------------------------*/
    if (Ext.data.ServerProxy) {
        Ext.apply(Ext.data.ServerProxy.prototype, {
            getParams: Ext.Function.createInterceptor(Ext.data.ServerProxy.prototype.getParams, function(params, operation) {
                if (this.sortParam && operation.sorters && operation.sorters.length > 0) {
                    if (!this.simpleSortMode) {
                        this.simpleSortMode = true;
                        Ext.Compat.warn('ServerProxy now supports multiple sort, so if any sort options are specified '+
                            'the sort params get JSON-encoded by default. Unless you have specifically coded for this on '+
                            'the server it will not work and you should set "simpleSortMode = true" on the proxy. Since '+
                            'this was not supported in Ext 3 and you are passing a sort param, simple sorting is assumed '+
                            'and has been set automatically, but you should reexamine this code as you migrate to Ext 4. '+
                            'For now just set "simpleSortMode: true" on your proxy to dismiss this warning.');
                    }
                }
            })
        });
    }
    
    if (Ext.data.MemoryProxy) {
        Ext.apply(Ext.data.MemoryProxy.prototype, {
            read: Ext.Function.createInterceptor(Ext.data.MemoryProxy.prototype.read, function(op, cb, scope) {
                if (this.doRequest) {
                    deprecate({pkg:'Ext.data.MemoryProxy', member:'doRequest', alt: 'read',
                        msg:'ClientProxy subclasses no longer implement doRequest.'});
                        
                    var params = {
                        start: op.start, 
                        limit: op.limit
                    };
                    if (op.sorters && op.sorters.length > 0) {
                        var idx = op.sorters.length-1; // take the last sort if multiple
                        params[this.sortParam || 'sort'] = op.sorters[idx].property;
                        params[this.directionParam || 'dir'] = op.sorters[idx].direction;
                    }
                    if (op.filters && op.filters.length > 0) {
                        // not sure if we can compat this
                        //params[this.filterParam || 'filter'] = ??;
                    }
                    this.doRequest(op.action, op.getRecords(), params, this.getReader(), function(result, options){
                        Ext.apply(op, {
                            resultSet: result
                        });
                        op.setCompleted();
                        op.setSuccessful();
                        Ext.callback(cb, scope || this, [op]);
                    }, scope);
                    
                    return false; // skip original read logic
                }
            })
        });
    }
    
    /*-------------------------------------------------------------
     * Model
     *-------------------------------------------------------------*/
    if (Ext.data.Model) {
        Ext.apply(Ext.data.Model.prototype, {
            constructor: Ext.Function.createInterceptor(Ext.data.Model.prototype.constructor, function(data, id) {
                var newData = {};
                if (Ext.isArray(data)){
                    // Support for loading an array, needed for calling loadData on an ArrayStore
                    var fields = this.fields.items,
                        length = fields.length,
                        field, name, 
                        i = 0, 
                        newData = {};
                        
                    for (; i < length; i++) {
                        field = fields[i];
                        name  = field.name;
                        newData[name] = data[i];
                    }
                    data = newData;
                }
            }),
            
            initComponent: Ext.Function.createInterceptor(Ext.data.Model.prototype.initComponent, function() {
                // Needed to bootstrap 3.x stores that use id. Once converted to a model this will
                // not be needed, so there's no need for a separate warning, just a temp shim.
                this.id = this.internalId;
            })
        });
    }
    
    /*-------------------------------------------------------------
     * Other Ext.data.* stuff
     *-------------------------------------------------------------*/
    if (Ext.data.Operation) {
        Ext.apply(Ext.data.Operation.prototype, {
            markStarted: function() {
                deprecate({pkg:'Ext.data.Operation', member:'markStarted', alt:'setStarted'});
                return this.setStarted();
            },
            markCompleted: function() {
                deprecate({pkg:'Ext.data.Operation', member:'markCompleted', alt:'setCompleted'});
                return this.setCompleted();
            },
            markSuccessful: function() {
                deprecate({pkg:'Ext.data.Operation', member:'markSuccessful', alt:'setSuccessful'});
                return this.setSuccessful();
            },
            markException: function() {
                deprecate({pkg:'Ext.data.Operation', member:'markException', alt:'setException'});
                return this.setException();
            }
        });
    }
    
    /*-------------------------------------------------------------
     * Tooltip
     *-------------------------------------------------------------*/
    if (Ext.tip.ToolTip) {
        Ext.apply(Ext.tip.ToolTip.prototype, {
            initTarget: function(target) {
                deprecate({pkg:'Ext.ToolTip', member:'initTarget', alt:'setTarget'});
                return this.setTarget(target);
            }
        });
    }
    
})();

//
// TODO: Remove this once the plugin is integrated into the lib
//
Ext.define('Ext.ux.PreviewPlugin', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.preview',
    requires: ['Ext.grid.feature.RowBody', 'Ext.grid.feature.RowWrap'],
    
    // private, css class to use to hide the body
    hideBodyCls: 'x-grid-row-body-hidden',
    
    /**
     * @cfg {String} bodyField
     * Field to display in the preview. Must me a field within the Model definition
     * that the store is using.
     */
    bodyField: '',
    
    /**
     * @cfg {Boolean} previewExpanded
     */
    previewExpanded: true,
    
    constructor: function(config) {
        this.callParent(arguments);
        var bodyField   = this.bodyField,
            hideBodyCls = this.hideBodyCls,
            section     = this.getCmp();
        
        section.previewExpanded = this.previewExpanded;
        section.features = [{
            ftype: 'rowbody',
            getAdditionalData: function(data, idx, record, orig, view) {
                var o = Ext.grid.feature.RowBody.prototype.getAdditionalData.apply(this, arguments);
                Ext.apply(o, {
                    rowBody: data[bodyField],
                    rowBodyCls: section.previewExpanded ? '' : hideBodyCls
                });
                return o;
            }
        },{
            ftype: 'rowwrap'
        }];
    },
    
    /**
     * Toggle between the preview being expanded/hidden
     * @param {Boolean} expanded Pass true to expand the record and false to not show the preview.
     */
    toggleExpanded: function(expanded) {
        var view = this.getCmp();
        this.previewExpanded = view.previewExpanded = expanded;
        view.refresh();
    }
});
