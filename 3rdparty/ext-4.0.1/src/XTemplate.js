/**
 * @class Ext.XTemplate
 * @extends Ext.Template
 * <p>A template class that supports advanced functionality like:<div class="mdetail-params"><ul>
 * <li>Autofilling arrays using templates and sub-templates</li>
 * <li>Conditional processing with basic comparison operators</li>
 * <li>Basic math function support</li>
 * <li>Execute arbitrary inline code with special built-in template variables</li>
 * <li>Custom member functions</li>
 * <li>Many special tags and built-in operators that aren't defined as part of
 * the API, but are supported in the templates that can be created</li>
 * </ul></div></p>
 * <p>XTemplate provides the templating mechanism built into:<div class="mdetail-params"><ul>
 * <li>{@link Ext.view.View}</li>
 * </ul></div></p>
 *
 * The {@link Ext.Template} describes
 * the acceptable parameters to pass to the constructor. The following
 * examples demonstrate all of the supported features.</p>
 *
 * <div class="mdetail-params"><ul>
 *
 * <li><b><u>Sample Data</u></b>
 * <div class="sub-desc">
 * <p>This is the data object used for reference in each code example:</p>
 * <pre><code>
var data = {
name: 'Tommy Maintz',
title: 'Lead Developer',
company: 'Sencha Inc.',
email: 'tommy@sencha.com',
address: '5 Cups Drive',
city: 'Palo Alto',
state: 'CA',
zip: '44102',
drinks: ['Coffee', 'Soda', 'Water'],
kids: [{
        name: 'Joshua',
        age:3
    },{
        name: 'Matthew',
        age:2
    },{
        name: 'Solomon',
        age:0
}]
};
 </code></pre>
 * </div>
 * </li>
 *
 *
 * <li><b><u>Auto filling of arrays</u></b>
 * <div class="sub-desc">
 * <p>The <b><tt>tpl</tt></b> tag and the <b><tt>for</tt></b> operator are used
 * to process the provided data object:
 * <ul>
 * <li>If the value specified in <tt>for</tt> is an array, it will auto-fill,
 * repeating the template block inside the <tt>tpl</tt> tag for each item in the
 * array.</li>
 * <li>If <tt>for="."</tt> is specified, the data object provided is examined.</li>
 * <li>While processing an array, the special variable <tt>{#}</tt>
 * will provide the current array index + 1 (starts at 1, not 0).</li>
 * </ul>
 * </p>
 * <pre><code>
&lt;tpl <b>for</b>=".">...&lt;/tpl>       // loop through array at root node
&lt;tpl <b>for</b>="foo">...&lt;/tpl>     // loop through array at foo node
&lt;tpl <b>for</b>="foo.bar">...&lt;/tpl> // loop through array at foo.bar node
 </code></pre>
 * Using the sample data above:
 * <pre><code>
var tpl = new Ext.XTemplate(
    '&lt;p>Kids: ',
    '&lt;tpl <b>for</b>=".">',       // process the data.kids node
        '&lt;p>{#}. {name}&lt;/p>',  // use current array index to autonumber
    '&lt;/tpl>&lt;/p>'
);
tpl.overwrite(panel.body, data.kids); // pass the kids property of the data object
 </code></pre>
 * <p>An example illustrating how the <b><tt>for</tt></b> property can be leveraged
 * to access specified members of the provided data object to populate the template:</p>
 * <pre><code>
var tpl = new Ext.XTemplate(
    '&lt;p>Name: {name}&lt;/p>',
    '&lt;p>Title: {title}&lt;/p>',
    '&lt;p>Company: {company}&lt;/p>',
    '&lt;p>Kids: ',
    '&lt;tpl <b>for="kids"</b>>',     // interrogate the kids property within the data
        '&lt;p>{name}&lt;/p>',
    '&lt;/tpl>&lt;/p>'
);
tpl.overwrite(panel.body, data);  // pass the root node of the data object
 </code></pre>
 * <p>Flat arrays that contain values (and not objects) can be auto-rendered
 * using the special <b><tt>{.}</tt></b> variable inside a loop.  This variable
 * will represent the value of the array at the current index:</p>
 * <pre><code>
var tpl = new Ext.XTemplate(
    '&lt;p>{name}\&#39;s favorite beverages:&lt;/p>',
    '&lt;tpl for="drinks">',
        '&lt;div> - {.}&lt;/div>',
    '&lt;/tpl>'
);
tpl.overwrite(panel.body, data);
 </code></pre>
 * <p>When processing a sub-template, for example while looping through a child array,
 * you can access the parent object's members via the <b><tt>parent</tt></b> object:</p>
 * <pre><code>
var tpl = new Ext.XTemplate(
    '&lt;p>Name: {name}&lt;/p>',
    '&lt;p>Kids: ',
    '&lt;tpl for="kids">',
        '&lt;tpl if="age &amp;gt; 1">',
            '&lt;p>{name}&lt;/p>',
            '&lt;p>Dad: {<b>parent</b>.name}&lt;/p>',
        '&lt;/tpl>',
    '&lt;/tpl>&lt;/p>'
);
tpl.overwrite(panel.body, data);
 </code></pre>
 * </div>
 * </li>
 *
 *
 * <li><b><u>Conditional processing with basic comparison operators</u></b>
 * <div class="sub-desc">
 * <p>The <b><tt>tpl</tt></b> tag and the <b><tt>if</tt></b> operator are used
 * to provide conditional checks for deciding whether or not to render specific
 * parts of the template. Notes:<div class="sub-desc"><ul>
 * <li>Double quotes must be encoded if used within the conditional</li>
 * <li>There is no <tt>else</tt> operator &mdash; if needed, two opposite
 * <tt>if</tt> statements should be used.</li>
 * </ul></div>
 * <pre><code>
&lt;tpl if="age &gt; 1 &amp;&amp; age &lt; 10">Child&lt;/tpl>
&lt;tpl if="age >= 10 && age < 18">Teenager&lt;/tpl>
&lt;tpl <b>if</b>="this.isGirl(name)">...&lt;/tpl>
&lt;tpl <b>if</b>="id==\'download\'">...&lt;/tpl>
&lt;tpl <b>if</b>="needsIcon">&lt;img src="{icon}" class="{iconCls}"/>&lt;/tpl>
// no good:
&lt;tpl if="name == "Tommy"">Hello&lt;/tpl>
// encode &#34; if it is part of the condition, e.g.
&lt;tpl if="name == &#38;quot;Tommy&#38;quot;">Hello&lt;/tpl>
 * </code></pre>
 * Using the sample data above:
 * <pre><code>
var tpl = new Ext.XTemplate(
    '&lt;p>Name: {name}&lt;/p>',
    '&lt;p>Kids: ',
    '&lt;tpl for="kids">',
        '&lt;tpl if="age &amp;gt; 1">',
            '&lt;p>{name}&lt;/p>',
        '&lt;/tpl>',
    '&lt;/tpl>&lt;/p>'
);
tpl.overwrite(panel.body, data);
 </code></pre>
 * </div>
 * </li>
 *
 *
 * <li><b><u>Basic math support</u></b>
 * <div class="sub-desc">
 * <p>The following basic math operators may be applied directly on numeric
 * data values:</p><pre>
 * + - * /
 * </pre>
 * For example:
 * <pre><code>
var tpl = new Ext.XTemplate(
    '&lt;p>Name: {name}&lt;/p>',
    '&lt;p>Kids: ',
    '&lt;tpl for="kids">',
        '&lt;tpl if="age &amp;gt; 1">',  // <-- Note that the &gt; is encoded
            '&lt;p>{#}: {name}&lt;/p>',  // <-- Auto-number each item
            '&lt;p>In 5 Years: {age+5}&lt;/p>',  // <-- Basic math
            '&lt;p>Dad: {parent.name}&lt;/p>',
        '&lt;/tpl>',
    '&lt;/tpl>&lt;/p>'
);
tpl.overwrite(panel.body, data);
 </code></pre>
 * </div>
 * </li>
 *
 *
 * <li><b><u>Execute arbitrary inline code with special built-in template variables</u></b>
 * <div class="sub-desc">
 * <p>Anything between <code>{[ ... ]}</code> is considered code to be executed
 * in the scope of the template. There are some special variables available in that code:
 * <ul>
 * <li><b><tt>values</tt></b>: The values in the current scope. If you are using
 * scope changing sub-templates, you can change what <tt>values</tt> is.</li>
 * <li><b><tt>parent</tt></b>: The scope (values) of the ancestor template.</li>
 * <li><b><tt>xindex</tt></b>: If you are in a looping template, the index of the
 * loop you are in (1-based).</li>
 * <li><b><tt>xcount</tt></b>: If you are in a looping template, the total length
 * of the array you are looping.</li>
 * </ul>
 * This example demonstrates basic row striping using an inline code block and the
 * <tt>xindex</tt> variable:</p>
 * <pre><code>
var tpl = new Ext.XTemplate(
    '&lt;p>Name: {name}&lt;/p>',
    '&lt;p>Company: {[values.company.toUpperCase() + ", " + values.title]}&lt;/p>',
    '&lt;p>Kids: ',
    '&lt;tpl for="kids">',
        '&lt;div class="{[xindex % 2 === 0 ? "even" : "odd"]}">',
        '{name}',
        '&lt;/div>',
    '&lt;/tpl>&lt;/p>'
 );
tpl.overwrite(panel.body, data);
 </code></pre>
 * </div>
 * </li>
 *
 * <li><b><u>Template member functions</u></b>
 * <div class="sub-desc">
 * <p>One or more member functions can be specified in a configuration
 * object passed into the XTemplate constructor for more complex processing:</p>
 * <pre><code>
var tpl = new Ext.XTemplate(
    '&lt;p>Name: {name}&lt;/p>',
    '&lt;p>Kids: ',
    '&lt;tpl for="kids">',
        '&lt;tpl if="this.isGirl(name)">',
            '&lt;p>Girl: {name} - {age}&lt;/p>',
        '&lt;/tpl>',
         // use opposite if statement to simulate 'else' processing:
        '&lt;tpl if="this.isGirl(name) == false">',
            '&lt;p>Boy: {name} - {age}&lt;/p>',
        '&lt;/tpl>',
        '&lt;tpl if="this.isBaby(age)">',
            '&lt;p>{name} is a baby!&lt;/p>',
        '&lt;/tpl>',
    '&lt;/tpl>&lt;/p>',
    {
        // XTemplate configuration:
        compiled: true,
        // member functions:
        isGirl: function(name){
           return name == 'Sara Grace';
        },
        isBaby: function(age){
           return age < 1;
        }
    }
);
tpl.overwrite(panel.body, data);
 </code></pre>
 * </div>
 * </li>
 *
 * </ul></div>
 *
 * @param {Mixed} config
 */

Ext.define('Ext.XTemplate', {

    /* Begin Definitions */

    extend: 'Ext.Template',

    statics: {
        /**
         * Creates a template from the passed element's value (<i>display:none</i> textarea, preferred) or innerHTML.
         * @param {String/HTMLElement} el A DOM element or its id
         * @return {Ext.Template} The created template
         * @static
         */
        from: function(el, config) {
            el = Ext.getDom(el);
            return new this(el.value || el.innerHTML, config || {});
        }
    },

    /* End Definitions */

    argsRe: /<tpl\b[^>]*>((?:(?=([^<]+))\2|<(?!tpl\b[^>]*>))*?)<\/tpl>/,
    nameRe: /^<tpl\b[^>]*?for="(.*?)"/,
    ifRe: /^<tpl\b[^>]*?if="(.*?)"/,
    execRe: /^<tpl\b[^>]*?exec="(.*?)"/,
    constructor: function() {
        this.callParent(arguments);

        var me = this,
            html = me.html,
            argsRe = me.argsRe,
            nameRe = me.nameRe,
            ifRe = me.ifRe,
            execRe = me.execRe,
            id = 0,
            tpls = [],
            VALUES = 'values',
            PARENT = 'parent',
            XINDEX = 'xindex',
            XCOUNT = 'xcount',
            RETURN = 'return ',
            WITHVALUES = 'with(values){ ',
            m, matchName, matchIf, matchExec, exp, fn, exec, name, i;

        html = ['<tpl>', html, '</tpl>'].join('');

        while ((m = html.match(argsRe))) {
            exp = null;
            fn = null;
            exec = null;
            matchName = m[0].match(nameRe);
            matchIf = m[0].match(ifRe);
            matchExec = m[0].match(execRe);

            exp = matchIf ? matchIf[1] : null;
            if (exp) {
                fn = Ext.functionFactory(VALUES, PARENT, XINDEX, XCOUNT, WITHVALUES + 'try{' + RETURN + Ext.String.htmlDecode(exp) + ';}catch(e){return;}}');
            }

            exp = matchExec ? matchExec[1] : null;
            if (exp) {
                exec = Ext.functionFactory(VALUES, PARENT, XINDEX, XCOUNT, WITHVALUES + Ext.String.htmlDecode(exp) + ';}');
            }

            name = matchName ? matchName[1] : null;
            if (name) {
                if (name === '.') {
                    name = VALUES;
                } else if (name === '..') {
                    name = PARENT;
                }
                name = Ext.functionFactory(VALUES, PARENT, 'try{' + WITHVALUES + RETURN + name + ';}}catch(e){return;}');
            }

            tpls.push({
                id: id,
                target: name,
                exec: exec,
                test: fn,
                body: m[1] || ''
            });

            html = html.replace(m[0], '{xtpl' + id + '}');
            id = id + 1;
        }

        for (i = tpls.length - 1; i >= 0; --i) {
            me.compileTpl(tpls[i]);
        }
        me.master = tpls[tpls.length - 1];
        me.tpls = tpls;
    },

    // @private
    applySubTemplate: function(id, values, parent, xindex, xcount) {
        var me = this, t = me.tpls[id];
        return t.compiled.call(me, values, parent, xindex, xcount);
    },
    /**
     * @cfg {RegExp} codeRe The regular expression used to match code variables (default: matches <tt>{[expression]}</tt>).
     */
    codeRe: /\{\[((?:\\\]|.|\n)*?)\]\}/g,

    re: /\{([\w-\.\#]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?(\s?[\+\-\*\/]\s?[\d\.\+\-\*\/\(\)]+)?\}/g,

    // @private
    compileTpl: function(tpl) {
        var fm = Ext.util.Format,
            me = this,
            useFormat = me.disableFormats !== true,
            body, bodyReturn, evaluatedFn;

        function fn(m, name, format, args, math) {
            var v;
            // name is what is inside the {}
            // Name begins with xtpl, use a Sub Template
            if (name.substr(0, 4) == 'xtpl') {
                return "',this.applySubTemplate(" + name.substr(4) + ", values, parent, xindex, xcount),'";
            }
            // name = "." - Just use the values object.
            if (name == '.') {
                // filter to not include arrays/objects/nulls
                v = 'Ext.Array.indexOf(["string", "number", "boolean"], typeof values) > -1 || Ext.isDate(values) ? values : ""';
            }

            // name = "#" - Use the xindex
            else if (name == '#') {
                v = 'xindex';
            }
            else if (name.substr(0, 7) == "parent.") {
                v = name;
            }
            // name has a . in it - Use object literal notation, starting from values
            else if (name.indexOf('.') != -1) {
                v = "values." + name;
            }

            // name is a property of values
            else {
                v = "values['" + name + "']";
            }
            if (math) {
                v = '(' + v + math + ')';
            }
            if (format && useFormat) {
                args = args ? ',' + args : "";
                if (format.substr(0, 5) != "this.") {
                    format = "fm." + format + '(';
                }
                else {
                    format = 'this.' + format.substr(5) + '(';
                }
            }
            else {
                args = '';
                format = "(" + v + " === undefined ? '' : ";
            }
            return "'," + format + v + args + "),'";
        }

        function codeFn(m, code) {
            // Single quotes get escaped when the template is compiled, however we want to undo this when running code.
            return "',(" + code.replace(me.compileARe, "'") + "),'";
        }

        bodyReturn = tpl.body.replace(me.compileBRe, '\\n').replace(me.compileCRe, "\\'").replace(me.re, fn).replace(me.codeRe, codeFn);
        body = "evaluatedFn = function(values, parent, xindex, xcount){return ['" + bodyReturn + "'].join('');};";
        eval(body);

        tpl.compiled = function(values, parent, xindex, xcount) {
            var vs,
                length,
                buffer,
                i;

            if (tpl.test && !tpl.test.call(me, values, parent, xindex, xcount)) {
                return '';
            }

            vs = tpl.target ? tpl.target.call(me, values, parent) : values;
            if (!vs) {
               return '';
            }

            parent = tpl.target ? values : parent;
            if (tpl.target && Ext.isArray(vs)) {
                buffer = [];
                length = vs.length;
                if (tpl.exec) {
                    for (i = 0; i < length; i++) {
                        buffer[buffer.length] = evaluatedFn.call(me, vs[i], parent, i + 1, length);
                        tpl.exec.call(me, vs[i], parent, i + 1, length);
                    }
                } else {
                    for (i = 0; i < length; i++) {
                        buffer[buffer.length] = evaluatedFn.call(me, vs[i], parent, i + 1, length);
                    }
                }
                return buffer.join('');
            }

            if (tpl.exec) {
                tpl.exec.call(me, vs, parent, xindex, xcount);
            }
            return evaluatedFn.call(me, vs, parent, xindex, xcount);
        };

        return this;
    },

    /**
     * Returns an HTML fragment of this template with the specified values applied.
     * @param {Object} values The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})
     * @return {String} The HTML fragment
     */
    applyTemplate: function(values) {
        return this.master.compiled.call(this, values, {}, 1, 1);
    },

    /**
     * Compile the template to a function for optimized performance.  Recommended if the template will be used frequently.
     * @return {Function} The compiled function
     */
    compile: function() {
        return this;
    }
}, function() {
    /**
     * Alias for {@link #applyTemplate}
     * Returns an HTML fragment of this template with the specified values applied.
     * @param {Object/Array} values The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})
     * @return {String} The HTML fragment
     * @member Ext.XTemplate
     * @method apply
     */
    this.createAlias('apply', 'applyTemplate');
});
