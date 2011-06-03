/**
 * @author Jacky Nguyen <jacky@sencha.com>
 * @docauthor Jacky Nguyen <jacky@sencha.com>
 * @class Ext.Class
 * 
 * Handles class creation throughout the whole framework. Note that most of the time {@link Ext#define Ext.define} should
 * be used instead, since it's a higher level wrapper that aliases to {@link Ext.ClassManager#create}
 * to enable namespacing and dynamic dependency resolution.
 * 
 * # Basic syntax: #
 * 
 *     Ext.define(className, properties);
 * 
 * in which `properties` is an object represent a collection of properties that apply to the class. See
 * {@link Ext.ClassManager#create} for more detailed instructions.
 * 
 *     Ext.define('Person', {
 *          name: 'Unknown',
 * 
 *          constructor: function(name) {
 *              if (name) {
 *                  this.name = name;
 *              }
 * 
 *              return this;
 *          },
 * 
 *          eat: function(foodType) {
 *              alert("I'm eating: " + foodType);
 * 
 *              return this;
 *          }
 *     });
 * 
 *     var aaron = new Person("Aaron");
 *     aaron.eat("Sandwich"); // alert("I'm eating: Sandwich");
 * 
 * Ext.Class has a powerful set of extensible {@link Ext.Class#registerPreprocessor pre-processors} which takes care of
 * everything related to class creation, including but not limited to inheritance, mixins, configuration, statics, etc.
 * 
 * # Inheritance: #
 * 
 *     Ext.define('Developer', {
 *          extend: 'Person',
 * 
 *          constructor: function(name, isGeek) {
 *              this.isGeek = isGeek;
 * 
 *              // Apply a method from the parent class' prototype
 *              this.callParent([name]);
 * 
 *              return this;
 * 
 *          },
 * 
 *          code: function(language) {
 *              alert("I'm coding in: " + language);
 * 
 *              this.eat("Bugs");
 * 
 *              return this;
 *          }
 *     });
 * 
 *     var jacky = new Developer("Jacky", true);
 *     jacky.code("JavaScript"); // alert("I'm coding in: JavaScript");
 *                               // alert("I'm eating: Bugs");
 * 
 * See {@link Ext.Base#callParent} for more details on calling superclass' methods
 * 
 * # Mixins: #
 * 
 *     Ext.define('CanPlayGuitar', {
 *          playGuitar: function() {
 *             alert("F#...G...D...A");
 *          }
 *     });
 * 
 *     Ext.define('CanComposeSongs', {
 *          composeSongs: function() { ... }
 *     });
 * 
 *     Ext.define('CanSing', {
 *          sing: function() {
 *              alert("I'm on the highway to hell...")
 *          }
 *     });
 * 
 *     Ext.define('Musician', {
 *          extend: 'Person',
 * 
 *          mixins: {
 *              canPlayGuitar: 'CanPlayGuitar',
 *              canComposeSongs: 'CanComposeSongs',
 *              canSing: 'CanSing'
 *          }
 *     })
 * 
 *     Ext.define('CoolPerson', {
 *          extend: 'Person',
 * 
 *          mixins: {
 *              canPlayGuitar: 'CanPlayGuitar',
 *              canSing: 'CanSing'
 *          },
 * 
 *          sing: function() {
 *              alert("Ahem....");
 * 
 *              this.mixins.canSing.sing.call(this);
 * 
 *              alert("[Playing guitar at the same time...]");
 * 
 *              this.playGuitar();
 *          }
 *     });
 * 
 *     var me = new CoolPerson("Jacky");
 * 
 *     me.sing(); // alert("Ahem...");
 *                // alert("I'm on the highway to hell...");
 *                // alert("[Playing guitar at the same time...]");
 *                // alert("F#...G...D...A");
 * 
 * # Config: #
 * 
 *     Ext.define('SmartPhone', {
 *          config: {
 *              hasTouchScreen: false,
 *              operatingSystem: 'Other',
 *              price: 500
 *          },
 * 
 *          isExpensive: false,
 * 
 *          constructor: function(config) {
 *              this.initConfig(config);
 * 
 *              return this;
 *          },
 * 
 *          applyPrice: function(price) {
 *              this.isExpensive = (price > 500);
 * 
 *              return price;
 *          },
 * 
 *          applyOperatingSystem: function(operatingSystem) {
 *              if (!(/^(iOS|Android|BlackBerry)$/i).test(operatingSystem)) {
 *                  return 'Other';
 *              }
 * 
 *              return operatingSystem;
 *          }
 *     });
 * 
 *     var iPhone = new SmartPhone({
 *          hasTouchScreen: true,
 *          operatingSystem: 'iOS'
 *     });
 * 
 *     iPhone.getPrice(); // 500;
 *     iPhone.getOperatingSystem(); // 'iOS'
 *     iPhone.getHasTouchScreen(); // true;
 *     iPhone.hasTouchScreen(); // true
 * 
 *     iPhone.isExpensive; // false;
 *     iPhone.setPrice(600);
 *     iPhone.getPrice(); // 600
 *     iPhone.isExpensive; // true;
 * 
 *     iPhone.setOperatingSystem('AlienOS');
 *     iPhone.getOperatingSystem(); // 'Other'
 * 
 * # Statics: #
 * 
 *     Ext.define('Computer', {
 *          statics: {
 *              factory: function(brand) {
 *                 // 'this' in static methods refer to the class itself
 *                  return new this(brand);
 *              }
 *          },
 * 
 *          constructor: function() { ... }
 *     });
 * 
 *     var dellComputer = Computer.factory('Dell');
 * 
 * Also see {@link Ext.Base#statics} and {@link Ext.Base#self} for more details on accessing
 * static properties within class methods
 *
 */
(function() {

    var Class,
        Base = Ext.Base,
        baseStaticProperties = [],
        baseStaticProperty;

    for (baseStaticProperty in Base) {
        if (Base.hasOwnProperty(baseStaticProperty)) {
            baseStaticProperties.push(baseStaticProperty);
        }
    }

    /**
     * @constructor
     * @param {Object} classData An object represent the properties of this class
     * @param {Function} createdFn Optional, the callback function to be executed when this class is fully created.
     * Note that the creation process can be asynchronous depending on the pre-processors used.
     * @return {Ext.Base} The newly created class
     */
    Ext.Class = Class = function(newClass, classData, onClassCreated) {
        if (typeof newClass !== 'function') {
            onClassCreated = classData;
            classData = newClass;
            newClass = function() {
                return this.constructor.apply(this, arguments);
            };
        }

        if (!classData) {
            classData = {};
        }

        var preprocessorStack = classData.preprocessors || Class.getDefaultPreprocessors(),
            registeredPreprocessors = Class.getPreprocessors(),
            index = 0,
            preprocessors = [],
            preprocessor, preprocessors, staticPropertyName, process, i, j, ln;

        for (i = 0, ln = baseStaticProperties.length; i < ln; i++) {
            staticPropertyName = baseStaticProperties[i];
            newClass[staticPropertyName] = Base[staticPropertyName];
        }

        delete classData.preprocessors;

        for (j = 0, ln = preprocessorStack.length; j < ln; j++) {
            preprocessor = preprocessorStack[j];

            if (typeof preprocessor === 'string') {
                preprocessor = registeredPreprocessors[preprocessor];

                if (!preprocessor.always) {
                    if (classData.hasOwnProperty(preprocessor.name)) {
                        preprocessors.push(preprocessor.fn);
                    }
                }
                else {
                    preprocessors.push(preprocessor.fn);
                }
            }
            else {
                preprocessors.push(preprocessor);
            }
        }

        classData.onClassCreated = onClassCreated;

        classData.onBeforeClassCreated = function(cls, data) {
            onClassCreated = data.onClassCreated;

            delete data.onBeforeClassCreated;
            delete data.onClassCreated;

            cls.implement(data);

            if (onClassCreated) {
                onClassCreated.call(cls, cls);
            }
        };

        process = function(cls, data) {
            preprocessor = preprocessors[index++];

            if (!preprocessor) {
                data.onBeforeClassCreated.apply(this, arguments);
                return;
            }

            if (preprocessor.call(this, cls, data, process) !== false) {
                process.apply(this, arguments);
            }
        };

        process.call(Class, newClass, classData);

        return newClass;
    };

    Ext.apply(Class, {

        /** @private */
        preprocessors: {},

        /**
         * Register a new pre-processor to be used during the class creation process
         *
         * @member Ext.Class registerPreprocessor
         * @param {String} name The pre-processor's name
         * @param {Function} fn The callback function to be executed. Typical format:

    function(cls, data, fn) {
        // Your code here

        // Execute this when the processing is finished.
        // Asynchronous processing is perfectly ok
        if (fn) {
            fn.call(this, cls, data);
        }
    });

         * Passed arguments for this function are:
         *
         * - `{Function} cls`: The created class
         * - `{Object} data`: The set of properties passed in {@link Ext.Class} constructor
         * - `{Function} fn`: The callback function that <b>must</b> to be executed when this pre-processor finishes,
         * regardless of whether the processing is synchronous or aynchronous
         *
         * @return {Ext.Class} this
         * @markdown
         */
        registerPreprocessor: function(name, fn, always) {
            this.preprocessors[name] = {
                name: name,
                always: always ||  false,
                fn: fn
            };

            return this;
        },

        /**
         * Retrieve a pre-processor callback function by its name, which has been registered before
         *
         * @param {String} name
         * @return {Function} preprocessor
         */
        getPreprocessor: function(name) {
            return this.preprocessors[name];
        },

        getPreprocessors: function() {
            return this.preprocessors;
        },

        /**
         * Retrieve the array stack of default pre-processors
         *
         * @return {Function} defaultPreprocessors
         */
        getDefaultPreprocessors: function() {
            return this.defaultPreprocessors || [];
        },

        /**
         * Set the default array stack of default pre-processors
         *
         * @param {Array} preprocessors
         * @return {Ext.Class} this
         */
        setDefaultPreprocessors: function(preprocessors) {
            this.defaultPreprocessors = Ext.Array.from(preprocessors);

            return this;
        },

        /**
         * Insert this pre-processor at a specific position in the stack, optionally relative to
         * any existing pre-processor. For example:

    Ext.Class.registerPreprocessor('debug', function(cls, data, fn) {
        // Your code here

        if (fn) {
            fn.call(this, cls, data);
        }
    }).insertDefaultPreprocessor('debug', 'last');

         * @param {String} name The pre-processor name. Note that it needs to be registered with
         * {@link Ext#registerPreprocessor registerPreprocessor} before this
         * @param {String} offset The insertion position. Four possible values are:
         * 'first', 'last', or: 'before', 'after' (relative to the name provided in the third argument)
         * @param {String} relativeName
         * @return {Ext.Class} this
         * @markdown
         */
        setDefaultPreprocessorPosition: function(name, offset, relativeName) {
            var defaultPreprocessors = this.defaultPreprocessors,
                index;

            if (typeof offset === 'string') {
                if (offset === 'first') {
                    defaultPreprocessors.unshift(name);

                    return this;
                }
                else if (offset === 'last') {
                    defaultPreprocessors.push(name);

                    return this;
                }

                offset = (offset === 'after') ? 1 : -1;
            }

            index = Ext.Array.indexOf(defaultPreprocessors, relativeName);

            if (index !== -1) {
                defaultPreprocessors.splice(Math.max(0, index + offset), 0, name);
            }

            return this;
        }
    });

    Class.registerPreprocessor('extend', function(cls, data) {
        var extend = data.extend,
            base = Ext.Base,
            basePrototype = base.prototype,
            prototype = function() {},
            parent, i, k, ln, staticName, parentStatics,
            parentPrototype, clsPrototype;

        if (extend && extend !== Object) {
            parent = extend;
        }
        else {
            parent = base;
        }

        parentPrototype = parent.prototype;

        prototype.prototype = parentPrototype;
        clsPrototype = cls.prototype = new prototype();

        if (!('$class' in parent)) {
            for (i in basePrototype) {
                if (!parentPrototype[i]) {
                    parentPrototype[i] = basePrototype[i];
                }
            }
        }

        clsPrototype.self = cls;

        cls.superclass = clsPrototype.superclass = parentPrototype;

        delete data.extend;

        // Statics inheritance
        parentStatics = parentPrototype.$inheritableStatics;

        if (parentStatics) {
            for (k = 0, ln = parentStatics.length; k < ln; k++) {
                staticName = parentStatics[k];

                if (!cls.hasOwnProperty(staticName)) {
                    cls[staticName] = parent[staticName];
                }
            }
        }

        // Merge the parent class' config object without referencing it
        if (parentPrototype.config) {
            clsPrototype.config = Ext.Object.merge({}, parentPrototype.config);
        }
        else {
            clsPrototype.config = {};
        }

        if (clsPrototype.$onExtended) {
            clsPrototype.$onExtended.call(cls, cls, data);
        }

        if (data.onClassExtended) {
            clsPrototype.$onExtended = data.onClassExtended;
            delete data.onClassExtended;
        }

    }, true);

    Class.registerPreprocessor('statics', function(cls, data) {
        var statics = data.statics,
            name;

        for (name in statics) {
            if (statics.hasOwnProperty(name)) {
                cls[name] = statics[name];
            }
        }

        delete data.statics;
    });

    Class.registerPreprocessor('inheritableStatics', function(cls, data) {
        var statics = data.inheritableStatics,
            inheritableStatics,
            prototype = cls.prototype,
            name;

        inheritableStatics = prototype.$inheritableStatics;

        if (!inheritableStatics) {
            inheritableStatics = prototype.$inheritableStatics = [];
        }

        for (name in statics) {
            if (statics.hasOwnProperty(name)) {
                cls[name] = statics[name];
                inheritableStatics.push(name);
            }
        }

        delete data.inheritableStatics;
    });

    Class.registerPreprocessor('mixins', function(cls, data) {
        cls.mixin(data.mixins);

        delete data.mixins;
    });

    Class.registerPreprocessor('config', function(cls, data) {
        var prototype = cls.prototype;

        Ext.Object.each(data.config, function(name) {
            var cName = name.charAt(0).toUpperCase() + name.substr(1),
                pName = name,
                apply = 'apply' + cName,
                setter = 'set' + cName,
                getter = 'get' + cName;

            if (!(apply in prototype) && !data.hasOwnProperty(apply)) {
                data[apply] = function(val) {
                    return val;
                };
            }

            if (!(setter in prototype) && !data.hasOwnProperty(setter)) {
                data[setter] = function(val) {
                    var ret = this[apply].call(this, val, this[pName]);

                    if (ret !== undefined) {
                        this[pName] = ret;
                    }

                    return this;
                };
            }

            if (!(getter in prototype) && !data.hasOwnProperty(getter)) {
                data[getter] = function() {
                    return this[pName];
                };
            }
        });

        Ext.Object.merge(prototype.config, data.config);
        delete data.config;
    });

    Class.setDefaultPreprocessors(['extend', 'statics', 'inheritableStatics', 'mixins', 'config']);

    // Backwards compatible
    Ext.extend = function(subclass, superclass, members) {
        if (arguments.length === 2 && Ext.isObject(superclass)) {
            members = superclass;
            superclass = subclass;
            subclass = null;
        }

        var cls;

        if (!superclass) {
            Ext.Error.raise("Attempting to extend from a class which has not been loaded on the page.");
        }

        members.extend = superclass;
        members.preprocessors = ['extend', 'mixins', 'config', 'statics'];

        if (subclass) {
            cls = new Class(subclass, members);
        }
        else {
            cls = new Class(members);
        }

        cls.prototype.override = function(o) {
            for (var m in o) {
                if (o.hasOwnProperty(m)) {
                    this[m] = o[m];
                }
            }
        };

        return cls;
    };

})();
