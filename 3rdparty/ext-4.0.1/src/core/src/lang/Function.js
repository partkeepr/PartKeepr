/**
 * @class Ext.Function
 *
 * A collection of useful static methods to deal with function callbacks
 * @singleton
 */

Ext.Function = {

    /**
     * A very commonly used method throughout the framework. It acts as a wrapper around another method
     * which originally accepts 2 arguments for <code>name</code> and <code>value</code>.
     * The wrapped function then allows "flexible" value setting of either:
     *
     * <ul>
     *      <li><code>name</code> and <code>value</code> as 2 arguments</li>
     *      <li>one single object argument with multiple key - value pairs</li>
     * </ul>
     *
     * For example:
     * <pre><code>
var setValue = Ext.Function.flexSetter(function(name, value) {
    this[name] = value;
});

// Afterwards
// Setting a single name - value
setValue('name1', 'value1');

// Settings multiple name - value pairs
setValue({
    name1: 'value1',
    name2: 'value2',
    name3: 'value3'
});
     * </code></pre>
     * @param {Function} setter
     * @returns {Function} flexSetter
     */
    flexSetter: function(fn) {
        return function(a, b) {
            var k, i;

            if (a === null) {
                return this;
            }

            if (typeof a !== 'string') {
                for (k in a) {
                    if (a.hasOwnProperty(k)) {
                        fn.call(this, k, a[k]);
                    }
                }

                if (Ext.enumerables) {
                    for (i = Ext.enumerables.length; i--;) {
                        k = Ext.enumerables[i];
                        if (a.hasOwnProperty(k)) {
                            fn.call(this, k, a[k]);
                        }
                    }
                }
            } else {
                fn.call(this, a, b);
            }

            return this;
        };
    },

   /**
     * Create a new function from the provided <code>fn</code>, change <code>this</code> to the provided scope, optionally
     * overrides arguments for the call. (Defaults to the arguments passed by the caller)
     *
     * @param {Function} fn The function to delegate.
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the function is executed.
     * <b>If omitted, defaults to the browser window.</b>
     * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
     * if a number the args are inserted at the specified position
     * @return {Function} The new function
     */
    bind: function(fn, scope, args, appendArgs) {
        var method = fn,
            applyArgs;

        return function() {
            var callArgs = args || arguments;

            if (appendArgs === true) {
                callArgs = Array.prototype.slice.call(arguments, 0);
                callArgs = callArgs.concat(args);
            }
            else if (Ext.isNumber(appendArgs)) {
                callArgs = Array.prototype.slice.call(arguments, 0); // copy arguments first
                applyArgs = [appendArgs, 0].concat(args); // create method call params
                Array.prototype.splice.apply(callArgs, applyArgs); // splice them in
            }

            return method.apply(scope || window, callArgs);
        };
    },

    /**
     * Create a new function from the provided <code>fn</code>, the arguments of which are pre-set to `args`.
     * New arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.
     * This is especially useful when creating callbacks.
     * For example:
     *
    var originalFunction = function(){
        alert(Ext.Array.from(arguments).join(' '));
    };

    var callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);

    callback(); // alerts 'Hello World'
    callback('by Me'); // alerts 'Hello World by Me'

     * @param {Function} fn The original function
     * @param {Array} args The arguments to pass to new callback
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the function is executed.
     * @return {Function} The new callback function
     */
    pass: function(fn, args, scope) {
        if (args) {
            args = Ext.Array.from(args);
        }

        return function() {
            return fn.apply(scope, args.concat(Ext.Array.toArray(arguments)));
        };
    },

    /**
     * Create an alias to the provided method property with name <code>methodName</code> of <code>object</code>.
     * Note that the execution scope will still be bound to the provided <code>object</code> itself.
     *
     * @param {Object/Function} object
     * @param {String} methodName
     * @return {Function} aliasFn
     */
    alias: function(object, methodName) {
        return function() {
            return object[methodName].apply(object, arguments);
        };
    },

    /**
     * Creates an interceptor function. The passed function is called before the original one. If it returns false,
     * the original one is not called. The resulting function returns the results of the original function.
     * The passed function is called with the parameters of the original function. Example usage:
     * <pre><code>
var sayHi = function(name){
    alert('Hi, ' + name);
}

sayHi('Fred'); // alerts "Hi, Fred"

// create a new function that validates input without
// directly modifying the original function:
var sayHiToFriend = Ext.Function.createInterceptor(sayHi, function(name){
    return name == 'Brian';
});

sayHiToFriend('Fred');  // no alert
sayHiToFriend('Brian'); // alerts "Hi, Brian"
     </code></pre>
     * @param {Function} origFn The original function.
     * @param {Function} newFn The function to call before the original
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the passed function is executed.
     * <b>If omitted, defaults to the scope in which the original function is called or the browser window.</b>
     * @param {Mixed} returnValue (optional) The value to return if the passed function return false (defaults to null).
     * @return {Function} The new function
     */
    createInterceptor: function(origFn, newFn, scope, returnValue) {
        var method = origFn;
        if (!Ext.isFunction(newFn)) {
            return origFn;
        }
        else {
            return function() {
                var me = this,
                    args = arguments;
                newFn.target = me;
                newFn.method = origFn;
                return (newFn.apply(scope || me || window, args) !== false) ? origFn.apply(me || window, args) : returnValue || null;
            };
        }
    },

    /**
    * Creates a delegate (callback) which, when called, executes after a specific delay.
    * @param {Function} fn The function which will be called on a delay when the returned function is called.
    * Optionally, a replacement (or additional) argument list may be specified.
    * @param {Number} delay The number of milliseconds to defer execution by whenever called.
    * @param {Object} scope (optional) The scope (<code>this</code> reference) used by the function at execution time.
    * @param {Array} args (optional) Override arguments for the call. (Defaults to the arguments passed by the caller)
    * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
    * if a number the args are inserted at the specified position.
    * @return {Function} A function which, when called, executes the original function after the specified delay.
    */
    createDelayed: function(fn, delay, scope, args, appendArgs) {
        if (scope || args) {
            fn = Ext.Function.bind(fn, scope, args, appendArgs);
        }
        return function() {
            var me = this;
            setTimeout(function() {
                fn.apply(me, arguments);
            }, delay);
        };
    },

    /**
     * Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:
     * <pre><code>
var sayHi = function(name){
    alert('Hi, ' + name);
}

// executes immediately:
sayHi('Fred');

// executes after 2 seconds:
Ext.Function.defer(sayHi, 2000, this, ['Fred']);

// this syntax is sometimes useful for deferring
// execution of an anonymous function:
Ext.Function.defer(function(){
    alert('Anonymous');
}, 100);
     </code></pre>
     * @param {Function} fn The function to defer.
     * @param {Number} millis The number of milliseconds for the setTimeout call (if less than or equal to 0 the function is executed immediately)
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the function is executed.
     * <b>If omitted, defaults to the browser window.</b>
     * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
     * if a number the args are inserted at the specified position
     * @return {Number} The timeout id that can be used with clearTimeout
     */
    defer: function(fn, millis, obj, args, appendArgs) {
        fn = Ext.Function.bind(fn, obj, args, appendArgs);
        if (millis > 0) {
            return setTimeout(fn, millis);
        }
        fn();
        return 0;
    },

    /**
     * Create a combined function call sequence of the original function + the passed function.
     * The resulting function returns the results of the original function.
     * The passed function is called with the parameters of the original function. Example usage:
     *
     * <pre><code>
var sayHi = function(name){
    alert('Hi, ' + name);
}

sayHi('Fred'); // alerts "Hi, Fred"

var sayGoodbye = Ext.Function.createSequence(sayHi, function(name){
    alert('Bye, ' + name);
});

sayGoodbye('Fred'); // both alerts show
     * </code></pre>
     *
     * @param {Function} origFn The original function.
     * @param {Function} newFn The function to sequence
     * @param {Object} scope (optional) The scope (this reference) in which the passed function is executed.
     * If omitted, defaults to the scope in which the original function is called or the browser window.
     * @return {Function} The new function
     */
    createSequence: function(origFn, newFn, scope) {
        if (!Ext.isFunction(newFn)) {
            return origFn;
        }
        else {
            return function() {
                var retval = origFn.apply(this || window, arguments);
                newFn.apply(scope || this || window, arguments);
                return retval;
            };
        }
    },

    /**
     * <p>Creates a delegate function, optionally with a bound scope which, when called, buffers
     * the execution of the passed function for the configured number of milliseconds.
     * If called again within that period, the impending invocation will be canceled, and the
     * timeout period will begin again.</p>
     *
     * @param {Function} fn The function to invoke on a buffered timer.
     * @param {Number} buffer The number of milliseconds by which to buffer the invocation of the
     * function.
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which
     * the passed function is executed. If omitted, defaults to the scope specified by the caller.
     * @param {Array} args (optional) Override arguments for the call. Defaults to the arguments
     * passed by the caller.
     * @return {Function} A function which invokes the passed function after buffering for the specified time.
     */
    createBuffered: function(fn, buffer, scope, args) {
        return function(){
            var timerId;
            return function() {
                var me = this;
                if (timerId) {
                    clearInterval(timerId);
                    timerId = null;
                }
                timerId = setTimeout(function(){
                    fn.apply(scope || me, args || arguments);
                }, buffer);
            };
        }();
    },

    /**
     * <p>Creates a throttled version of the passed function which, when called repeatedly and
     * rapidly, invokes the passed function only after a certain interval has elapsed since the
     * previous invocation.</p>
     *
     * <p>This is useful for wrapping functions which may be called repeatedly, such as
     * a handler of a mouse move event when the processing is expensive.</p>
     *
     * @param fn {Function} The function to execute at a regular time interval.
     * @param interval {Number} The interval <b>in milliseconds</b> on which the passed function is executed.
     * @param scope (optional) The scope (<code><b>this</b></code> reference) in which
     * the passed function is executed. If omitted, defaults to the scope specified by the caller.
     * @returns {Function} A function which invokes the passed function at the specified interval.
     */
    createThrottled: function(fn, interval, scope) {
        var lastCallTime, elapsed, lastArgs, timer, execute = function() {
            fn.apply(scope || this, lastArgs);
            lastCallTime = new Date().getTime();
        };

        return function() {
            elapsed = new Date().getTime() - lastCallTime;
            lastArgs = arguments;

            clearTimeout(timer);
            if (!lastCallTime || (elapsed >= interval)) {
                execute();
            } else {
                timer = setTimeout(execute, interval - elapsed);
            }
        };
    }
};

/**
 * Shorthand for {@link Ext.Function#defer}
 * @member Ext
 * @method defer
 */
Ext.defer = Ext.Function.alias(Ext.Function, 'defer');

/**
 * Shorthand for {@link Ext.Function#pass}
 * @member Ext
 * @method pass
 */
Ext.pass = Ext.Function.alias(Ext.Function, 'pass');

/**
 * Shorthand for {@link Ext.Function#bind}
 * @member Ext
 * @method bind
 */
Ext.bind = Ext.Function.alias(Ext.Function, 'bind');
