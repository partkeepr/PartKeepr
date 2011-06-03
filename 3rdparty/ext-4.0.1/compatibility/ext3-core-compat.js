
/*========================================================================
 * 
 * This section contains stuff that should be in Ext4, or stuff that
 * is up for discussion. It should be removed prior to Ext 4 final.
 *
 *========================================================================*/

// Beefed up getDockedItems to make it easier to find specific items like top toolbars only
Ext.apply(Ext.panel.AbstractPanel.prototype, {
    /**
     * Retrieve an array of all currently docked components, optionally matching a
     * specific docked side and/or component type.
     * @param {Array} options
     * @return {Array} An array of matching components
     */
    // ex: {dock: 'top', alias: 'widget.toolbar'}
    getDockedItems : function(options) {
        var me = this,
            items = [];
        
        if (me.dockedItems && me.dockedItems.items.length) {
            items = me.dockedItems.items.slice();
        }
        
        if (options && items.length > 0) {
            var i = 0,
                ln = items.length,
                matches = [],
                item;
            
            for (; i < ln; i++) {
                item = items[i];
                if (options.dock && options.dock !== item.dock){
                    continue;
                }
                if (options.alias && options.alias !== item.alias){
                    continue;
                }
                matches.push(item);
            }
            return matches;
        }
        return items;
    }
});


/*========================================================================
 * 
 * This section contains the Ext.Compat object definition.
 * Also shared by ext3-compat.js.
 *
 *========================================================================*/

Ext.Compat = function(){
    // private
    var notificationCache = [],
    
    // private
    getMsg = function(o, tag){
        var version = o.version ? o.version : '4.0',
            pkg = o.pkg ? '[' + o.pkg + ']': '',
            member = o.member ? ' ' + o.member : '',
            type = o.type ? ' (' + o.type + ')' : '',
            use = o.type === 'event' ? ' Handle ' : ' Use ',
            alt = o.alt ? use + o.alt + ' instead.' : '',
            msg = o.msg ? ' ' + o.msg : '';
            
        return '[' + tag + '][' + version + ']' + pkg + member + type + ':' + alt + msg;
    },
    
    // private    
    showMsg = function(msg, method, single){
        var isNew = Ext.Array.indexOf(notificationCache, msg) == -1;
        if (isNew || !single) {
            Ext.Compat[method](msg);
            if (single) {
                notificationCache.push(msg);
            }
        }
    },
    
    // private
    consoleOut = function(type, msg){
        if (Ext.Compat.silent === true) {
            return;
        }
        if (!Ext.isDefined(Ext.global.console)){
            if (type === 'error' && Ext.Array.indexOf(notificationCache, '__consoleMsg') == -1) {
                notificationCache.push('__consoleMsg');
                alert('You have Ext compatibility errors that must be resolved. Please enable your browser\'s console '+
                    '(or switch to a console-capable browser) to see complete error details.');
            }
            return;
        }
        var con = Ext.global.console;
        
        if(Ext.Array.indexOf(notificationCache, '__initMsg') == -1){
            notificationCache.push('__initMsg');
            con.info('#### Ext 3 compatibility mode active. See the Migration Guide included with the Ext 4 download for details.');
            if(!Ext.Compat.showErrors){
                var errMsg = '#### Set "Ext.Compat.showErrors = true;" in your code to include a stack trace with each warning.';
                con.info(con.firebug ? errMsg : errMsg + ' (Firebug required)');
            }
            con.log(' ');
        }
        con[Ext.Compat.showErrors ? 'error' : type](msg);
    };
    
    return {
        /**
         * False to display console messages (default), true to skip displaying console messages. Useful
         * when running an app in compatibility mode for end users prior to completing full migration to Ext 4.
         */
        silent: false,
        /**
         * True to ignore informational messages and show only warnings, false to show all messages (default)
         */
        ignoreInfo: false,
        /**
         * True to display messages via console.error instead of console.warn/info (defaults to false). When 
         * viewing the console in Firebug in particular this can be a useful option to enable as Firebug will
         * capture the stack trace and include it in the displayed error object, which can make finding the 
         * source of warnings much easier in most cases. In other browsers enabling this option will simply 
         * display the message as an error cosmetically but won't provide any additional benefit. 
         */
        showErrors: false,
        
        /**
         * Wrapper for the browser console.warn() method that checks for the existence of console
         * and also honors the Ext.Compat.silent flag. Should be used for any breaking change
         * or deprecation warnings.
         * @param {String} msg The console message to log
         */
        warn: function(msg) {
            consoleOut('warn', msg);
        },
        
        /**
         * Wrapper for the browser console.info() method that checks for the existence of console
         * and also honors the Ext.Compat.silent flag. Should be used for informational
         * messages or non-breaking changes that modify existing behavior.
         * @param {String} msg The console message to log
         */
        info: function(msg){
            if(this.ignoreInfo !== true){
                consoleOut('info', msg);
            }
        },
        
        /**
         * This method should generally be eschewed in favor of Ext.compat.deprecate. However it might be necessary
         * to log a console error in certain cases, e.g. when backwards-compatibility is only conditionally possible.
         * @param {String} msg The console message to log
         */
        error: function(msg){
            consoleOut('error', msg);
        },
        
        /**
         * Display a standard deprecation message. The method takes a single object argument that contains
         * properties as described below. All properties are optional, although typically the pkg and member would be 
         * specified along with a descriptive message.
         * @param {String} pkg (optional) The package ("Core") or component ("Ext.grid.Grid") being referenced (defaults to '')
         * @param {String} member (optional) The member being deprecated (defaults to '')
         * @param {String} alt (optional) An alternate member that is replacing the deprecated member (defaults to '')
         * @param {String} type (optional) The member type (method, config, property, xtype, etc.) Defaults to 'method', 
         * which does not get displayed -- any other specified type will be displayed in the output.
         * @param {String} msg (optional) An additional message to provide more explanation about the change (defaults to '')
         * @param {String} tag (optional) The first bracketed item in the output that describes the message type (defaults to 'DEPRECATED')
         * @param {Boolean} single (optional) True to limit each unique message to being displayed only one time (defaults to false,
         * meaning the same message can be displayed multiple times). Usually it's good to set single:true for logging issues 
         * that can happen repetitively with the same root cause (e.g., the same issue within each row of a grid).
         */
        deprecate: function(o) {
            var msg = getMsg(o, o.tag || 'DEPRECATED');
            showMsg(msg, 'warn', o.single);
        },
        
        /**
         * Display a console error with the special tag "BREAKING" to signify a breaking change that cannot be
         * resolved in the compatibility layer. These issues generally must be resolved immediately before the
         * compatibility layer be successfully applied. The method takes a single object argument that contains
         * properties as described below. All properties are optional, although typically the pkg and member would be 
         * specified along with a descriptive message.
         * @param {String} msg (optional) A message to provide more explanation about the breaking change (defaults to '')
         * @param {String} pkg (optional) The package ("Core") or component ("Ext.grid.Grid") being referenced (defaults to '')
         * @param {String} member (optional) The member being referenced in relation to the change (defaults to '')
         * @param {String} type (optional) The member type (method, config, property, xtype, etc.) Defaults to 'method', 
         * which does not get displayed -- any other specified type will be displayed in the output.
         * @param {String} tag (optional) The first bracketed item in the output that describes the message type (defaults to 'BREAKING')
         * @param {Boolean} single (optional) True to limit each unique message to being displayed only one time (defaults to false,
         * meaning the same message can be displayed multiple times). Usually it's good to set single:true for logging issues 
         * that can happen repetitively with the same root cause (e.g., the same issue within each row of a grid).
         */
        breaking: function(o){
            o.msg = (o.msg || '') + ' This is a breaking change that cannot be resolved in the compatibility layer!';
            var msg = getMsg(o, o.tag || 'BREAKING');
            showMsg(msg, 'error', o.single);
        },
        
        /**
         * Display a freeform notification that a compatibility change exists. This would be used, for example,
         * if an existing method has changed its default behavior, or has a different argument signature. 
         * The method takes either a string message or an object argument that contains properties as described below.
         * If a member is being deprecated you might consider using <tt>deprecate</tt> instead.
         * @param {String} msg A message explaining the change
         * @param {String} pkg (optional) The package ("Core") or component ("Ext.grid.Grid") being referenced (defaults to '')
         * @param {String} member (optional) The member being referenced in relation to the change (defaults to '')
         * @param {String} type (optional) The member type (method, config, property, xtype, etc.) Defaults to 'method', 
         * which does not get displayed -- any other specified type will be displayed in the output.
         * @param {String} tag (optional) The first bracketed item in the output that describes the message type (defaults to 'INFO')
         * @param {Boolean} single (optional) True to limit each unique message to being displayed only one time (defaults to false,
         * meaning the same message can be displayed multiple times). Usually it's good to set single:true for logging issues 
         * that can happen repetitively with the same root cause (e.g., the same issue within each row of a grid).
         */
        notify: function(o) {
            if(Ext.isString(o)){
                o = {msg:o};
            }
            if(o.msg){
                var msg = getMsg(o, o.tag || 'INFO'),
                    single = Ext.isDefined(o.single) ? o.single : !this.showErrors;
                
                showMsg(msg, 'info', single);
            }
        },
        
        /*
         * Currently experimental
         */
        bindProperty: function(options) {
            var localValue,
                o = options;
            
            if (o.owner.__defineGetter__) {
                o.owner.__defineGetter__(o.name, function(){
                    if (o.getterMsg) {
                        o.getterMsg();
                    }
                    return localValue ? localValue : (o.getter ? o.getter() : o.defaultValue);
                });
                o.owner.__defineSetter__(o.name, function(val){
                    if (o.setterMsg) {
                        o.setterMsg();
                    }
                    if (o.setter) {
                        o.setter(val);
                    }
                    else {
                        o.owner[o.name] = val;
                    }
                    localValue = val;
                });
            }
            else {
                o.owner[o.name] = o.defaultValue;
            }
        }
    };
}();


/*========================================================================
 * 
 * This section contains compatibility overrides for Ext Core
 *
 *========================================================================*/

(function(){
    var compat = Ext.Compat,
        deprecate = Ext.bind(compat.deprecate, compat),
        notify = Ext.bind(compat.notify, compat),
        breaking = Ext.bind(compat.breaking, compat),
        bindProperty = Ext.bind(compat.bindProperty, compat);
    
    /*-------------------------------------------------------------
     * Ext
     *-------------------------------------------------------------*/
    Ext.apply(Ext, {
        createDelegate: function() {
            deprecate({pkg:'Ext', member:'createDelegate', alt:'Ext.bind'});
            return Ext.Function.bind.apply(Ext.Function, arguments);
        },
        createCallback: function() {
            deprecate({pkg:'Ext', member:'createCallback', alt:'Ext.pass'});
            return Ext.Function.pass.apply(Ext.Function, arguments);
        },
        createInterceptor: function() {
            deprecate({pkg:'Ext', member:'createInterceptor', alt:'Ext.Function.createInterceptor'});
            return Ext.Function.createInterceptor.apply(Ext.Function, arguments);
        },
        createSequence: function() {
            deprecate({pkg:'Ext', member:'createSequence', alt:'Ext.Function.createSequence'});
            return Ext.Function.createSequence.apply(Ext.Function, arguments);
        },
        // This is still aliased in Ext.Array
//        toArray: function() {
//            deprecate({pkg:'Ext', member:'toArray', alt:'Ext.Array.toArray'});
//            return Ext.Array.toArray.apply(Ext.Array, arguments);
//        },
        pluck: function(arr, prop) {
            deprecate({pkg:'Ext', member:'pluck', alt:'Ext.Array.pluck'});
            return Ext.Array.pluck.apply(Ext.Array, arguments);
        }
        
        // TODO: Verify if this is really deprecated or not: 
//        iterate: function() {
//            Ext.each.apply(this, arguments);
//            deprecate({pkg:'Ext', member:'iterate', alt:'each', 
//                msg:'Ext.each is now a wrapper for both Ext.Array.forEach and Ext.Object.each.'});
//        }
    });
    
    /*-------------------------------------------------------------
     * Ext properties
     *-------------------------------------------------------------*/
    var versionObj = Ext.getVersion('extjs');
            
    bindProperty({owner:Ext, name:'version', defaultValue:versionObj.version,
        getterMsg: function(){
            deprecate({pkg:'Ext', member:'version', type:'property', alt:'getVersion (method)',
                msg:'Ext.getVersion() takes one argument which is the package name to look up. This will be defaulted '+
                    'to "extjs" but could also be "core" or "touch". Note also that getVersion returns an object. For the '+
                    'simple string representation use the Ext.getVersion("extjs").version property.'});
        }
    });
    
    // For no logical reason this one causes Firebug to go into an infinite loop. It makes no sense...
//    bindProperty({owner:Ext, name:'versionDetail', defaultValue: {
//            major: versionObj.major,
//            minor: versionObj.minor,
//            patch: versionObj.patch
//        },
//        getterMsg: function(){
//            deprecate({pkg:'Ext', member:'versionDetail', type:'property', alt:'getVersion (method)',
//                msg:'Ext.getVersion() takes one argument which is the package name to look up. This will be defaulted '+
//                    'to "extjs" but could also be "core" or "touch". Note also that getVersion returns an object. For the '+
//                    'version detail representation use Ext.getVersion("extjs") and inspect the properties major, minor and patch.'});
//        }
//    });
    
    /*-------------------------------------------------------------
     * Ext.lib.Dom
     *-------------------------------------------------------------*/
    // Helper function for aliasing Ext.lib.Dom
    var aliasDom = function(name, args){
        deprecate({pkg:'Ext.lib.Dom', member:name, alt:'Ext.core.Element.'+name});
        return Ext.core.Element[name].apply(Ext.core.Element, args);
    };
    Ext.lib = {};
    Ext.lib.Dom = {
        isAncestor : function(p, c) {
            return aliasDom('isAncestor', arguments);
        },
        getViewWidth : function(full) {
            return aliasDom('getViewWidth', arguments);
        },
        getViewHeight : function(full) {
            return aliasDom('getViewHeight', arguments);
        },
        getDocumentHeight: function() {
            return aliasDom('getDocumentHeight', arguments);
        },
        getDocumentWidth: function() {
            return aliasDom('getDocumentWidth', arguments);
        },
        getViewportHeight: function(){
            return aliasDom('getViewportHeight', arguments);
        },
        getViewportWidth : function() {
            return aliasDom('getViewportWidth', arguments);
        },
        getY : function(el) {
            return aliasDom('getY', arguments);
        },
        getX : function(el) {
            return aliasDom('getX', arguments);
        },
        getXY : function(el) {
            return aliasDom('getXY', arguments);
        },
        setXY : function(el, xy) {
            aliasDom('setXY', arguments);
        },
        setX : function(el, x) {
            aliasDom('setX', arguments);
        },
        setY : function(el, y) {
            aliasDom('setY', arguments);
        }
    };
    
    /*-------------------------------------------------------------
     * Ext.lib.Event
     *-------------------------------------------------------------*/
    // Helper function for aliasing Ext.lib.Event
    var aliasEvent = function(e, name, args){
        deprecate({pkg:'Ext.lib.Event', member:name, alt:'<event>.'+name});
        return e[name].apply(e, args);
    };
    Ext.lib.Event = {
        getTarget : function(e) {
            return aliasEvent(e, 'getTarget', arguments);
        },
        getRelatedTarget : function(ev) {
            return aliasEvent(e, 'getRelatedTarget', arguments);
        },
        getPageX : function(e) {
            return aliasEvent(e, 'getPageX', arguments);
        },
        getPageY : function(e) {
            return aliasEvent(e, 'getPageY', arguments);
        },
        getXY : function(e) {                             
            return aliasEvent(e, 'getXY', arguments);
        },
        stopEvent : function(e) {                            
            return aliasEvent(e, 'stopEvent', arguments);
        },
        stopPropagation : function(e) {
            return aliasEvent(e, 'stopPropagation', arguments);
        },
        preventDefault : function(e) {
            return aliasEvent(e, 'preventDefault', arguments);
        },
        getCharCode : function(e) {
            return aliasEvent(e, 'getCharCode', arguments);
        },
        getEvent : function(e) {
            deprecate({pkg:'Ext.lib.Event', member:'getEvent', alt:'<event>', msg:'Just use the event instance directly.'});
            return e;
        }
    };
    
    /*-------------------------------------------------------------
     * Ext.lib.Point
     *-------------------------------------------------------------*/
    Ext.lib.Point = function(x, y) {
        deprecate({pkg:'Ext.lib.Point', alt:'Ext.util.Point'});
        return new Ext.util.Point(x, y);
    };
    
    /*-------------------------------------------------------------
     * Ext.lib.Ajax
     *-------------------------------------------------------------*/
    Ext.lib.Ajax = {
        request : function() {
            deprecate({pkg:'Ext.lib.Ajax', member:'request', alt:'Ext.Ajax.request',
                msg:'This method is not backwards-compatible and must be updated manually.'});
        },
        serializeForm : function(form) {
            deprecate({pkg:'Ext.lib.Ajax', member:'serializeForm', alt:'Ext.core.Element.serializeForm'});
            return Ext.core.Element.serializeForm(form);
        },
        abort : function() {
            deprecate({pkg:'Ext.lib.Ajax', member:'abort', alt:'Ext.Ajax.abort',
                msg:'This method is not backwards-compatible and must be updated manually.'});
        },
        isCallInProgress : function() {
            deprecate({pkg:'Ext.lib.Ajax', member:'isCallInProgress', alt:'Ext.Ajax.isLoading',
                msg:'This method is not backwards-compatible and must be updated manually.'});
        }
    };
    
    /*-------------------------------------------------------------
     * Function prototype overrides
     *-------------------------------------------------------------*/
    Ext.apply(Function.prototype, {
        createInterceptor : function(){
            deprecate({pkg:'Function', member:'<fn>.createInterceptor', alt:'Ext.Function.createInterceptor',
                msg:'Note that this is now a static method, so the function will be the first argument to the new version.'});
            return Ext.Function.createInterceptor.apply(Ext.Function, [this].concat(Array.prototype.slice.call(arguments)));
        },
        
        createSequence : function(){
            deprecate({pkg:'Function', member:'<fn>.createSequence', alt:'Ext.Function.createSequence',
                msg:'Note that this is now a static method, so the function will be the first argument to the new version.'});
            return Ext.Function.createInterceptor.apply(Ext.Function, [this].concat(Array.prototype.slice.call(arguments)));
        },
    
        createCallback : function(){
            deprecate({pkg:'Function', member:'<fn>.createCallback', alt:'Ext.pass',
                msg:'Note that this is now a static method, so the function will be the first argument to the new version.'});
            return Ext.pass.apply(Ext.Function, [this].concat(Array.prototype.slice.call(arguments)));
        },
    
        createDelegate : function(obj, args, appendArgs){
            deprecate({pkg:'Function', member:'<fn>.createDelegate', alt:'Ext.bind',
                msg:'Note that this is now a static method, so the function will be the first argument to the new version.'});
            return Ext.bind.apply(Ext.Function, [this].concat(Array.prototype.slice.call(arguments)));
        },
        
        defer : function(){
            deprecate({pkg:'Function', member:'<fn>.defer', alt:'Ext.defer',
                msg:'Note that this is now a static method, so the function will be the first argument to the new version.'});
            return Ext.defer.apply(Ext.Function, [this].concat(Array.prototype.slice.call(arguments)));
        }
    });
    
    /*-------------------------------------------------------------
     * String overrides
     *-------------------------------------------------------------*/
    // String static methods:
    Ext.applyIf(String, {
        format : function(){
            deprecate({pkg:'String', member:'format', alt:'Ext.String.format'});
            return Ext.String.format.apply(Ext.String, arguments);
        },
        escape : function(string) {
            deprecate({pkg:'String', member:'escape', alt:'Ext.String.escape'});
            return Ext.String.escape.apply(Ext.String, arguments);
        },
        leftPad : function (val, size, ch) {
            deprecate({pkg:'String', member:'leftPad', alt:'Ext.String.leftPad'});
            return Ext.String.leftPad.apply(Ext.String, arguments);
        }
    });
    // String instance methods:
    Ext.applyIf(String.prototype, {
        toggle : function(value, other){
            deprecate({pkg:'String', member:'<string>.toggle', alt:'Ext.String.toggle',
                msg:'Note that this is now a static method, so the string instance will be the first argument to the new version.'});
            return Ext.String.toggle.call(Ext.String, this, value, other);
        },
        trim : function(){
            deprecate({pkg:'String', member:'<string>.trim', alt:'Ext.String.trim',
                msg:'Note that this is now a static method, so the string instance will be the first argument to the new version.'});
            return Ext.String.trim.call(Ext.String, this);
        }
    });
    
    /*-------------------------------------------------------------
     * Array overrides
     *-------------------------------------------------------------*/
    Ext.applyIf(Array.prototype, {
        indexOf : function(o){
            deprecate({pkg:'Array', member:'<array>.indexOf', alt:'Ext.Array.indexOf',
                msg:'Note that this is now a static method, so the array instance will be the first argument to the new version. '+
                    'Also the new version adds an optional "from index" as the last argument.'});
            return Ext.Array.indexOf.call(Ext.Array, this, o);
        },
        remove : function(o){
            deprecate({pkg:'Array', member:'<array>.remove', alt:'Ext.Array.remove',
                msg:'Note that this is now a static method, so the array instance will be the first argument to the new version.'});
            return Ext.Array.remove.call(Ext.Array, this, o);
        }
    });
    
    /*-------------------------------------------------------------
     * Number overrides
     *-------------------------------------------------------------*/
    Ext.applyIf(Number.prototype, {
        constrain : function(min, max){
            deprecate({pkg:'Number', member:'<number>.constrain', alt:'Ext.Number.constrain',
                msg:'Note that this is now a static method, so the number instance will be the first argument to the new version.'});
            return Ext.Number.constrain.call(Ext.Number, this, min, max);
        }
    });
    
    /*-------------------------------------------------------------
     * Date overrides.
     * NOTE: The methods from the Date class under Ext.util
     * in 3.x are aliased separately in ext3-compat.js. 
     *-------------------------------------------------------------*/
    Ext.applyIf(Date.prototype, {
        /**
         Returns the number of milliseconds between this date and date
         @param {Date} date (optional) Defaults to now
         @return {Number} The diff in milliseconds
         @member Date getElapsed
         @deprecated
         */
        getElapsed : function(date) {
            deprecate({pkg:'Core', member:'<date>.getElapsed', alt:'Ext.Date.getElapsed'});
            return Ext.Date.getElapsed.call(Ext.Date, this, date);
        }
    });
    
    /*-------------------------------------------------------------
     * Element
     *-------------------------------------------------------------*/
    Ext.apply(Ext.core.Element.prototype, {
        getMargins : function(){
            deprecate({pkg:'Ext.Element', member:'getMargins', alt:'getMargin'});
            return this.getMargin.apply(this, arguments);
        },
        radioClass : function(){
            deprecate({pkg:'Ext.Element', member:'radioClass', alt:'radioCls'});
            return this.radioCls.apply(this, arguments);
        },
        toggleClass : function(){
            deprecate({pkg:'Ext.Element', member:'toggleClass', alt:'toggleCls'});
            return this.toggleCls.apply(this, arguments);
        },
        
// Can't do this since Ext internally uses these calls. Reverting them will break Ext 4 code, so have to doc as breaking changes.
//        child : function(selector, returnDom){
//            notify('Ext.Element.child now returns a single direct child in 4.0 (switched with Ext.Element.down). '+
//                'Reverting to the 3.x behavior that matches at any depth -- please verify this call when migrating to Ext 4.');
//                
//            var n = Ext.DomQuery.selectNode(selector, this.dom);
//            return returnDom ? n : Ext.get(n);
//        },
//        down : function(selector, returnDom){
//            notify('Ext.Element.down now returns a single child at any depth in 4.0 (switched with Ext.Element.child). '+
//                'Reverting to the 3.x behavior that matches a direct child only -- please verify this call when migrating to Ext 4.');
//                
//            var n = Ext.DomQuery.selectNode(" > " + selector, this.dom);
//            return returnDom ? n : Ext.get(n);
//        },
        animate: function(args, duration, onComplete, easing) {
            if (arguments.length > 1 || Ext.isEmpty(args)) {
                deprecate({pkg:'Ext.Element', member:'animate', msg:'Ext.Element.animate should be called with a single configuration object. '+
                    'See the header API docs for Ext.util.Animate for details on the supported config attribute syntax.'});
            }
            var me = this;
            if (!me.id) {
                me = Ext.get(me.dom);
            }
            if (Ext.fx.Manager.hasFxBlock(me.id)) {
                return me;
            }
            args = args || {};
            if (duration) {
                args.duration = duration;
            }
            if (onComplete) {
                args.callback = onComplete;
            }
            if (easing) {
                args.easing = easing;
            }
            Ext.fx.Manager.queueFx(Ext.create('Ext.fx.Anim', me.anim(args)));
            return this;
        },
        anim: Ext.Function.createInterceptor(Ext.core.Element.prototype.anim, function(config) {
            if (Ext.isObject(config)) {
                if (config.delay && config.delay < 10) {
                    config.delay *= 1000;
                    notify({pkg:'Ext.Element', member:'animate', msg:'Detected an extremely small animation delay, assuming the '+
                        'deprecated unit seconds were used.  Please change to milliseconds.'});
                }
                if (config.duration && config.duration < 10) {
                    config.duration *= 1000;
                    notify({pkg:'Ext.Element', member:'animate', msg:'Detected an extremely small animation duration, assuming the '+
                        'deprecated unit seconds were used.  Please change to milliseconds.'});
                }
                if (config.endOpacity) {
                    config.opacity = config.endOpacity;
                    delete config.endOpacity;
                    deprecate({pkg:'Ext.Element', member:'animate', msg:'The endOpacity attribute of the animate config object is '+
                        'no longer supported. Please use opacity instead.'});
                }
            }
        })
    });
    
//    Ext.extend = function(subclass, superclass, members) {
//        deprecate({pkg:'Ext', member:'extend', alt:'Ext.define', 
//            msg:'Declare your class with Ext.define() and use the "extend" config to specify the superclass.'});
//    
//        if (arguments.length === 2 && Ext.isObject(superclass)) {
//            members = superclass;
//            superclass = subclass;
//            subclass = null;
//        }
//
//        var cls;
//
//        if (!superclass) {
//            compat.error("Attempting to extend from a class which has not been loaded on the page.");
//        }
//        members = members || {};
//        members.extend = superclass;
//        members.preprocessors = ['extend', 'mixins', 'config', 'statics'];
//        
//        if (subclass) {
//            if (!subclass.hasOwnProperty('constructor')) {
//                subclass.constructor = Ext.apply({}, subclass);
//            }
//            cls = new Ext.Class(subclass, members);
//        }
//        else {
//            cls = new Ext.Class(members);
//        }
//
//        cls.prototype.override = function(o) {
//            for (var m in o) {
//                if (o.hasOwnProperty(m)) {
//                    this[m] = o[m];
//                }
//            }
//        };
//
//        return cls;
//    };
})();
