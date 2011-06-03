/**
 * @author Jacky Nguyen <jacky@sencha.com>
 * @docauthor Jacky Nguyen <jacky@sencha.com>
 * @class Ext.ClassManager

Ext.ClassManager manages all classes and handles mapping from string class name to
actual class objects throughout the whole framework. It is not generally accessed directly, rather through
these convenient shorthands:

- {@link Ext#define Ext.define}
- {@link Ext#create Ext.create}
- {@link Ext#widget Ext.widget}
- {@link Ext#getClass Ext.getClass}
- {@link Ext#getClassName Ext.getClassName}

 * @singleton
 * @markdown
 */
(function(Class, alias) {

    var slice = Array.prototype.slice;

    var Manager = Ext.ClassManager = {

        /**
         * @property classes
         * @type Object
         * All classes which were defined through the ClassManager. Keys are the
         * name of the classes and the values are references to the classes.
         * @private
         */
        classes: {},

        /**
         * @private
         */
        existCache: {},

        /**
         * @private
         */
        namespaceRewrites: [{
            from: 'Ext.',
            to: Ext
        }],

        /**
         * @private
         */
        maps: {
            alternateToName: {},
            aliasToName: {},
            nameToAliases: {}
        },

        /** @private */
        enableNamespaceParseCache: true,

        /** @private */
        namespaceParseCache: {},

        /** @private */
        instantiators: [],

        //<debug>
        /** @private */
        instantiationCounts: {},
        //</debug>

        /**
         * Checks if a class has already been created.
         *
         * @param {String} className
         * @return {Boolean} exist
         */
        isCreated: function(className) {
            var i, ln, part, root, parts;

            //<debug error>
            if (typeof className !== 'string' || className.length < 1) {
                Ext.Error.raise({
                    sourceClass: "Ext.ClassManager",
                    sourceMethod: "exist",
                    msg: "Invalid classname, must be a string and must not be empty"
                });
            }
            //</debug>

            if (this.classes.hasOwnProperty(className) || this.existCache.hasOwnProperty(className)) {
                return true;
            }

            root = Ext.global;
            parts = this.parseNamespace(className);

            for (i = 0, ln = parts.length; i < ln; i++) {
                part = parts[i];

                if (typeof part !== 'string') {
                    root = part;
                } else {
                    if (!root || !root[part]) {
                        return false;
                    }

                    root = root[part];
                }
            }

            Ext.Loader.historyPush(className);

            this.existCache[className] = true;

            return true;
        },

        /**
         * Supports namespace rewriting
         * @private
         */
        parseNamespace: function(namespace) {
            //<debug error>
            if (typeof namespace !== 'string') {
                Ext.Error.raise({
                    sourceClass: "Ext.ClassManager",
                    sourceMethod: "parseNamespace",
                    msg: "Invalid namespace, must be a string"
                });
            }
            //</debug>

            var cache = this.namespaceParseCache;

            if (this.enableNamespaceParseCache) {
                if (cache.hasOwnProperty(namespace)) {
                    return cache[namespace];
                }
            }

            var parts = [],
                rewrites = this.namespaceRewrites,
                rewrite, from, to, i, ln, root = Ext.global;

            for (i = 0, ln = rewrites.length; i < ln; i++) {
                rewrite = rewrites[i];
                from = rewrite.from;
                to = rewrite.to;

                if (namespace === from || namespace.substring(0, from.length) === from) {
                    namespace = namespace.substring(from.length);

                    if (typeof to !== 'string') {
                        root = to;
                    } else {
                        parts = parts.concat(to.split('.'));
                    }

                    break;
                }
            }

            parts.push(root);

            parts = parts.concat(namespace.split('.'));

            if (this.enableNamespaceParseCache) {
                cache[namespace] = parts;
            }

            return parts;
        },

        /**
         * Creates a namespace and assign the `value` to the created object

    Ext.ClassManager.setNamespace('MyCompany.pkg.Example', someObject);

    alert(MyCompany.pkg.Example === someObject); // alerts true

         * @param {String} name
         * @param {Mixed} value
         * @markdown
         */
        setNamespace: function(name, value) {
            var root = Ext.global,
                parts = this.parseNamespace(name),
                leaf = parts.pop(),
                i, ln, part;

            for (i = 0, ln = parts.length; i < ln; i++) {
                part = parts[i];

                if (typeof part !== 'string') {
                    root = part;
                } else {
                    if (!root[part]) {
                        root[part] = {};
                    }

                    root = root[part];
                }
            }

            root[leaf] = value;

            return root[leaf];
        },

        /**
         * The new Ext.ns, supports namespace rewriting
         * @private
         */
        createNamespaces: function() {
            var root = Ext.global,
                parts, part, i, j, ln, subLn;

            for (i = 0, ln = arguments.length; i < ln; i++) {
                parts = this.parseNamespace(arguments[i]);

                for (j = 0, subLn = parts.length; j < subLn; j++) {
                    part = parts[j];

                    if (typeof part !== 'string') {
                        root = part;
                    } else {
                        if (!root[part]) {
                            root[part] = {};
                        }

                        root = root[part];
                    }
                }
            }

            return root;
        },

        /**
         * Sets a name reference to a class.
         *
         * @param {String} name
         * @param {Object} value
         * @return {Ext.ClassManager} this
         */
        set: function(name, value) {
            var targetName = this.getName(value);

            this.classes[name] = this.setNamespace(name, value);

            if (targetName && targetName !== name) {
                this.maps.alternateToName[name] = targetName;
            }

            return this;
        },

        /**
         * Retrieve a class by its name.
         *
         * @param {String} name
         * @return {Class} class
         */
        get: function(name) {
            if (this.classes.hasOwnProperty(name)) {
                return this.classes[name];
            }

            var root = Ext.global,
                parts = this.parseNamespace(name),
                part, i, ln;

            for (i = 0, ln = parts.length; i < ln; i++) {
                part = parts[i];

                if (typeof part !== 'string') {
                    root = part;
                } else {
                    if (!root || !root[part]) {
                        return null;
                    }

                    root = root[part];
                }
            }

            return root;
        },

        /**
         * Register the alias for a class.
         *
         * @param {Class/String} cls a reference to a class or a className
         * @param {String} alias Alias to use when referring to this class
         */
        setAlias: function(cls, alias) {
            var aliasToNameMap = this.maps.aliasToName,
                nameToAliasesMap = this.maps.nameToAliases,
                className;

            if (typeof cls === 'string') {
                className = cls;
            } else {
                className = this.getName(cls);
            }

            if (alias && aliasToNameMap[alias] !== className) {
                //<debug info>
                if (aliasToNameMap.hasOwnProperty(alias) && Ext.isDefined(Ext.global.console)) {
                    Ext.global.console.log("[Ext.ClassManager] Overriding existing alias: '" + alias + "' " +
                        "of: '" + aliasToNameMap[alias] + "' with: '" + className + "'. Be sure it's intentional.");
                }
                //</debug>

                aliasToNameMap[alias] = className;
            }

            if (!nameToAliasesMap[className]) {
                nameToAliasesMap[className] = [];
            }

            if (alias) {
                Ext.Array.include(nameToAliasesMap[className], alias);
            }

            return this;
        },

        /**
         * Get a reference to the class by its alias.
         *
         * @param {String} alias
         * @return {Class} class
         */
        getByAlias: function(alias) {
            return this.get(this.getNameByAlias(alias));
        },

        /**
         * Get the name of a class by its alias.
         *
         * @param {String} alias
         * @return {String} className
         */
        getNameByAlias: function(alias) {
            return this.maps.aliasToName[alias] || '';
        },

        /**
         * Get the name of a class by its alternate name.
         *
         * @param {String} alternate
         * @return {String} className
         */
        getNameByAlternate: function(alternate) {
            return this.maps.alternateToName[alternate] || '';
        },

        /**
         * Get the aliases of a class by the class name
         *
         * @param {String} name
         * @return {Array} aliases
         */
        getAliasesByName: function(name) {
            return this.maps.nameToAliases[name] || [];
        },

        /**
         * Get the name of the class by its reference or its instance;
         * usually invoked by the shorthand {@link Ext#getClassName Ext.getClassName}

    Ext.ClassManager.getName(Ext.Action); // returns "Ext.Action"

         * @param {Class/Object} object
         * @return {String} className
         * @markdown
         */
        getName: function(object) {
            return object && object.$className || '';
        },

        /**
         * Get the class of the provided object; returns null if it's not an instance
         * of any class created with Ext.define. This is usually invoked by the shorthand {@link Ext#getClass Ext.getClass}
         *
    var component = new Ext.Component();

    Ext.ClassManager.getClass(component); // returns Ext.Component
             *
         * @param {Object} object
         * @return {Class} class
         * @markdown
         */
        getClass: function(object) {
            return object && object.self || null;
        },

        /**
         * Defines a class. This is usually invoked via the alias {@link Ext#define Ext.define}

    Ext.ClassManager.create('My.awesome.Class', {
        someProperty: 'something',
        someMethod: function() { ... }
        ...

    }, function() {
        alert('Created!');
        alert(this === My.awesome.Class); // alerts true

        var myInstance = new this();
    });

         * @param {String} className The class name to create in string dot-namespaced format, for example:
         * 'My.very.awesome.Class', 'FeedViewer.plugin.CoolPager'
         * It is highly recommended to follow this simple convention:

- The root and the class name are 'CamelCased'
- Everything else is lower-cased

         * @param {Object} data The key - value pairs of properties to apply to this class. Property names can be of any valid
         * strings, except those in the reserved listed below:

- `mixins`
- `statics`
- `config`
- `alias`
- `self`
- `singleton`
- `alternateClassName`
         *
         * @param {Function} createdFn Optional callback to execute after the class is created, the execution scope of which
         * (`this`) will be the newly created class itself.
         * @return {Ext.Base}
         * @markdown
         */
        create: function(className, data, createdFn) {
            var manager = this;

            //<debug error>
            if (typeof className !== 'string') {
                Ext.Error.raise({
                    sourceClass: "Ext",
                    sourceMethod: "define",
                    msg: "Invalid class name '" + className + "' specified, must be a non-empty string"
                });
            }
            //</debug>

            data.$className = className;

            return new Class(data, function() {
                var postprocessorStack = data.postprocessors || manager.defaultPostprocessors,
                    registeredPostprocessors = manager.postprocessors,
                    index = 0,
                    postprocessors = [],
                    postprocessor, postprocessors, process, i, ln;

                delete data.postprocessors;

                for (i = 0, ln = postprocessorStack.length; i < ln; i++) {
                    postprocessor = postprocessorStack[i];

                    if (typeof postprocessor === 'string') {
                        postprocessor = registeredPostprocessors[postprocessor];

                        if (!postprocessor.always) {
                            if (data[postprocessor.name] !== undefined) {
                                postprocessors.push(postprocessor.fn);
                            }
                        }
                        else {
                            postprocessors.push(postprocessor.fn);
                        }
                    }
                    else {
                        postprocessors.push(postprocessor);
                    }
                }

                process = function(clsName, cls, clsData) {
                    postprocessor = postprocessors[index++];

                    if (!postprocessor) {
                        manager.set(className, cls);

                        Ext.Loader.historyPush(className);

                        if (createdFn) {
                            createdFn.call(cls, cls);
                        }

                        return;
                    }

                    if (postprocessor.call(this, clsName, cls, clsData, process) !== false) {
                        process.apply(this, arguments);
                    }
                };

                process.call(manager, className, this, data);
            });
        },

        /**
         * Instantiate a class by its alias; usually invoked by the convenient shorthand {@link Ext#createByAlias Ext.createByAlias}
         * If {@link Ext.Loader} is {@link Ext.Loader#setConfig enabled} and the class has not been defined yet, it will
         * attempt to load the class via synchronous loading.

    var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });

         * @param {String} alias
         * @param {Mixed} args,... Additional arguments after the alias will be passed to the
         * class constructor.
         * @return {Object} instance
         * @markdown
         */
        instantiateByAlias: function() {
            var alias = arguments[0],
                args = slice.call(arguments),
                className = this.getNameByAlias(alias);

            if (!className) {
                className = this.maps.aliasToName[alias];

                //<debug error>
                if (!className) {
                    Ext.Error.raise({
                        sourceClass: "Ext",
                        sourceMethod: "createByAlias",
                        msg: "Cannot create an instance of unrecognized alias: " + alias
                    });
                }
                //</debug>

                //<debug warn>
                if (Ext.global.console) {
                    Ext.global.console.warn("[Ext.Loader] Synchronously loading '" + className + "'; consider adding " +
                         "Ext.require('" + alias + "') above Ext.onReady");
                }
                //</debug>

                Ext.syncRequire(className);
            }

            args[0] = className;

            return this.instantiate.apply(this, args);
        },

        /**
         * Instantiate a class by either full name, alias or alternate name; usually invoked by the convenient
         * shorthand {@link Ext#create Ext.create}
         *
         * If {@link Ext.Loader} is {@link Ext.Loader#setConfig enabled} and the class has not been defined yet, it will
         * attempt to load the class via synchronous loading.
         *
         * For example, all these three lines return the same result:

    // alias
    var window = Ext.ClassManager.instantiate('widget.window', { width: 600, height: 800, ... });

    // alternate name
    var window = Ext.ClassManager.instantiate('Ext.Window', { width: 600, height: 800, ... });

    // full class name
    var window = Ext.ClassManager.instantiate('Ext.window.Window', { width: 600, height: 800, ... });

         * @param {String} name
         * @param {Mixed} args,... Additional arguments after the name will be passed to the class' constructor.
         * @return {Object} instance
         * @markdown
         */
        instantiate: function() {
            var name = arguments[0],
                args = slice.call(arguments, 1),
                alias = name,
                possibleName, cls;

            if (typeof name !== 'function') {
                //<debug error>
                if ((typeof name !== 'string' || name.length < 1)) {
                    Ext.Error.raise({
                        sourceClass: "Ext",
                        sourceMethod: "create",
                        msg: "Invalid class name or alias '" + name + "' specified, must be a non-empty string"
                    });
                }
                //</debug>

                cls = this.get(name);
            }
            else {
                cls = name;
            }

            // No record of this class name, it's possibly an alias, so look it up
            if (!cls) {
                possibleName = this.getNameByAlias(name);

                if (possibleName) {
                    name = possibleName;

                    cls = this.get(name);
                }
            }

            // Still no record of this class name, it's possibly an alternate name, so look it up
            if (!cls) {
                possibleName = this.getNameByAlternate(name);

                if (possibleName) {
                    name = possibleName;

                    cls = this.get(name);
                }
            }

            // Still not existing at this point, try to load it via synchronous mode as the last resort
            if (!cls) {
                //<debug warn>
                if (Ext.global.console) {
                    Ext.global.console.warn("[Ext.Loader] Synchronously loading '" + name + "'; consider adding " +
                         "Ext.require('" + ((possibleName) ? alias : name) + "') above Ext.onReady");
                }
                //</debug>

                Ext.syncRequire(name);

                cls = this.get(name);
            }

            //<debug error>
            if (!cls) {
                Ext.Error.raise({
                    sourceClass: "Ext",
                    sourceMethod: "create",
                    msg: "Cannot create an instance of unrecognized class name / alias: " + alias
                });
            }

            if (typeof cls !== 'function') {
                Ext.Error.raise({
                    sourceClass: "Ext",
                    sourceMethod: "create",
                    msg: "'" + name + "' is a singleton and cannot be instantiated"
                });
            }
            //</debug>

            //<debug>
            if (!this.instantiationCounts[name]) {
                this.instantiationCounts[name] = 0;
            }

            this.instantiationCounts[name]++;
            //</debug>

            return this.getInstantiator(args.length)(cls, args);
        },

        /**
         * @private
         * @param name
         * @param args
         */
        dynInstantiate: function(name, args) {
            args = Ext.Array.from(args, true);
            args.unshift(name);

            return this.instantiate.apply(this, args);
        },

        /**
         * @private
         * @param length
         */
        getInstantiator: function(length) {
            if (!this.instantiators[length]) {
                var i = length,
                    args = [];

                for (i = 0; i < length; i++) {
                    args.push('a['+i+']');
                }

                this.instantiators[length] = new Function('c', 'a', 'return new c('+args.join(',')+')');
            }

            return this.instantiators[length];
        },

        /**
         * @private
         */
        postprocessors: {},

        /**
         * @private
         */
        defaultPostprocessors: [],

        /**
         * Register a post-processor function.
         *
         * @param {String} name
         * @param {Function} postprocessor
         */
        registerPostprocessor: function(name, fn, always) {
            this.postprocessors[name] = {
                name: name,
                always: always ||  false,
                fn: fn
            };

            return this;
        },

        /**
         * Set the default post processors array stack which are applied to every class.
         *
         * @param {String/Array} The name of a registered post processor or an array of registered names.
         * @return {Ext.ClassManager} this
         */
        setDefaultPostprocessors: function(postprocessors) {
            this.defaultPostprocessors = Ext.Array.from(postprocessors);

            return this;
        },

        /**
         * Insert this post-processor at a specific position in the stack, optionally relative to
         * any existing post-processor
         *
         * @param {String} name The post-processor name. Note that it needs to be registered with
         * {@link Ext.ClassManager#registerPostprocessor} before this
         * @param {String} offset The insertion position. Four possible values are:
         * 'first', 'last', or: 'before', 'after' (relative to the name provided in the third argument)
         * @param {String} relativeName
         * @return {Ext.ClassManager} this
         */
        setDefaultPostprocessorPosition: function(name, offset, relativeName) {
            var defaultPostprocessors = this.defaultPostprocessors,
                index;

            if (typeof offset === 'string') {
                if (offset === 'first') {
                    defaultPostprocessors.unshift(name);

                    return this;
                }
                else if (offset === 'last') {
                    defaultPostprocessors.push(name);

                    return this;
                }

                offset = (offset === 'after') ? 1 : -1;
            }

            index = Ext.Array.indexOf(defaultPostprocessors, relativeName);

            if (index !== -1) {
                defaultPostprocessors.splice(Math.max(0, index + offset), 0, name);
            }

            return this;
        },

        /**
         * Converts a string expression to an array of matching class names. An expression can either refers to class aliases
         * or class names. Expressions support wildcards:

     // returns ['Ext.window.Window']
    var window = Ext.ClassManager.getNamesByExpression('widget.window');

    // returns ['widget.panel', 'widget.window', ...]
    var allWidgets = Ext.ClassManager.getNamesByExpression('widget.*');

    // returns ['Ext.data.Store', 'Ext.data.ArrayProxy', ...]
    var allData = Ext.ClassManager.getNamesByExpression('Ext.data.*');

         * @param {String} expression
         * @return {Array} classNames
         * @markdown
         */
        getNamesByExpression: function(expression) {
            var nameToAliasesMap = this.maps.nameToAliases,
                names = [],
                name, alias, aliases, possibleName, regex, i, ln;

            //<debug error>
            if (typeof expression !== 'string' || expression.length < 1) {
                Ext.Error.raise({
                    sourceClass: "Ext.ClassManager",
                    sourceMethod: "getNamesByExpression",
                    msg: "Expression " + expression + " is invalid, must be a non-empty string"
                });
            }
            //</debug>

            if (expression.indexOf('*') !== -1) {
                expression = expression.replace(/\*/g, '(.*?)');
                regex = new RegExp('^' + expression + '$');

                for (name in nameToAliasesMap) {
                    if (nameToAliasesMap.hasOwnProperty(name)) {
                        aliases = nameToAliasesMap[name];

                        if (name.search(regex) !== -1) {
                            names.push(name);
                        }
                        else {
                            for (i = 0, ln = aliases.length; i < ln; i++) {
                                alias = aliases[i];

                                if (alias.search(regex) !== -1) {
                                    names.push(name);
                                    break;
                                }
                            }
                        }
                    }
                }

            } else {
                possibleName = this.getNameByAlias(expression);

                if (possibleName) {
                    names.push(possibleName);
                } else {
                    possibleName = this.getNameByAlternate(expression);

                    if (possibleName) {
                        names.push(possibleName);
                    } else {
                        names.push(expression);
                    }
                }
            }

            return names;
        }
    };

    Manager.registerPostprocessor('alias', function(name, cls, data) {
        var aliases = data.alias,
            widgetPrefix = 'widget.',
            i, ln, alias;

        if (!(aliases instanceof Array)) {
            aliases = [aliases];
        }

        for (i = 0, ln = aliases.length; i < ln; i++) {
            alias = aliases[i];

            //<debug error>
            if (typeof alias !== 'string') {
                Ext.Error.raise({
                    sourceClass: "Ext",
                    sourceMethod: "define",
                    msg: "Invalid alias of: '" + alias + "' for class: '" + name + "'; must be a valid string"
                });
            }
            //</debug>

            this.setAlias(cls, alias);
        }

        // This is ugly, will change to make use of parseNamespace for alias later on
        for (i = 0, ln = aliases.length; i < ln; i++) {
            alias = aliases[i];

            if (alias.substring(0, widgetPrefix.length) === widgetPrefix) {
                // Only the first alias with 'widget.' prefix will be used for xtype
                cls.xtype = cls.$xtype = alias.substring(widgetPrefix.length);
                break;
            }
        }
    });

    Manager.registerPostprocessor('singleton', function(name, cls, data, fn) {
        fn.call(this, name, new cls(), data);
        return false;
    });

    Manager.registerPostprocessor('alternateClassName', function(name, cls, data) {
        var alternates = data.alternateClassName,
            i, ln, alternate;

        if (!(alternates instanceof Array)) {
            alternates = [alternates];
        }

        for (i = 0, ln = alternates.length; i < ln; i++) {
            alternate = alternates[i];

            //<debug error>
            if (typeof alternate !== 'string') {
                Ext.Error.raise({
                    sourceClass: "Ext",
                    sourceMethod: "define",
                    msg: "Invalid alternate of: '" + alternate + "' for class: '" + name + "'; must be a valid string"
                });
            }
            //</debug>

            this.set(alternate, cls);
        }
    });

    Manager.setDefaultPostprocessors(['alias', 'singleton', 'alternateClassName']);

    Ext.apply(Ext, {
        /**
         * Convenient shorthand, see {@link Ext.ClassManager#instantiate}
         * @member Ext
         * @method create
         */
        create: alias(Manager, 'instantiate'),

        /**
         * @private
         * API to be stablized
         *
         * @param {Mixed} item
         * @param {String} namespace
         */
        factory: function(item, namespace) {
            if (item instanceof Array) {
                var i, ln;

                for (i = 0, ln = item.length; i < ln; i++) {
                    item[i] = Ext.factory(item[i], namespace);
                }

                return item;
            }

            var isString = (typeof item === 'string');

            if (isString || (item instanceof Object && item.constructor === Object)) {
                var name, config = {};

                if (isString) {
                    name = item;
                }
                else {
                    name = item.className;
                    config = item;
                    delete config.className;
                }

                if (namespace !== undefined && name.indexOf(namespace) === -1) {
                    name = namespace + '.' + Ext.String.capitalize(name);
                }

                return Ext.create(name, config);
            }

            if (typeof item === 'function') {
                return Ext.create(item);
            }

            return item;
        },

        /**
         * Convenient shorthand to create a widget by its xtype, also see {@link Ext.ClassManager#instantiateByAlias}

    var button = Ext.widget('button'); // Equivalent to Ext.create('widget.button')
    var panel = Ext.widget('panel'); // Equivalent to Ext.create('widget.panel')

         * @member Ext
         * @method widget
         * @markdown
         */
        widget: function(name) {
            var args = slice.call(arguments);
            args[0] = 'widget.' + name;

            return Manager.instantiateByAlias.apply(Manager, args);
        },

        /**
         * Convenient shorthand, see {@link Ext.ClassManager#instantiateByAlias}
         * @member Ext
         * @method createByAlias
         */
        createByAlias: alias(Manager, 'instantiateByAlias'),

        /**
         * Convenient shorthand for {@link Ext.ClassManager#create}, see detailed {@link Ext.Class explanation}
         * @member Ext
         * @method define
         */
        define: alias(Manager, 'create'),

        /**
         * Convenient shorthand, see {@link Ext.ClassManager#getName}
         * @member Ext
         * @method getClassName
         */
        getClassName: alias(Manager, 'getName'),

        /**
         *
         * @param {Mixed} object
         */
        getDisplayName: function(object) {
            if (object.displayName) {
                return object.displayName;
            }

            if (object.$name && object.$class) {
                return Ext.getClassName(object.$class) + '#' + object.$name;
            }

            if (object.$className) {
                return object.$className;
            }

            return 'Anonymous';
        },

        /**
         * Convenient shorthand, see {@link Ext.ClassManager#getClass}
         * @member Ext
         * @method getClassName
         */
        getClass: alias(Manager, 'getClass'),

        /**
         * Creates namespaces to be used for scoping variables and classes so that they are not global.
         * Specifying the last node of a namespace implicitly creates all other nodes. Usage:

    Ext.namespace('Company', 'Company.data');

     // equivalent and preferable to the above syntax
    Ext.namespace('Company.data');

    Company.Widget = function() { ... };

    Company.data.CustomStore = function(config) { ... };

         * @param {String} namespace1
         * @param {String} namespace2
         * @param {String} etc
         * @return {Object} The namespace object. (If multiple arguments are passed, this will be the last namespace created)
         * @function
         * @member Ext
         * @method namespace
         * @markdown
         */
        namespace: alias(Manager, 'createNamespaces')
    });

    Ext.createWidget = Ext.widget;

    /**
     * Convenient alias for {@link Ext#namespace Ext.namespace}
     * @member Ext
     * @method ns
     */
    Ext.ns = Ext.namespace;

    Class.registerPreprocessor('className', function(cls, data) {
        if (data.$className) {
            cls.$className = data.$className;
            //<debug>
            cls.displayName = cls.$className;
            //</debug>
        }
    }, true);

    Class.setDefaultPreprocessorPosition('className', 'first');

})(Ext.Class, Ext.Function.alias);
