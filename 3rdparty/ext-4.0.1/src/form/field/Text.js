/**
 * @class Ext.form.field.Text
 * @extends Ext.form.field.Base
 
A basic text field.  Can be used as a direct replacement for traditional text inputs,
or as the base class for more sophisticated input controls (like {@link Ext.form.field.TextArea}
and {@link Ext.form.field.ComboBox}). Has support for empty-field placeholder values (see {@link #emptyText}).

#Validation#

The Text field has a useful set of validations built in:

- {@link #allowBlank} for making the field required
- {@link #minLength} for requiring a minimum value length
- {@link #maxLength} for setting a maximum value length (with {@link #enforceMaxLength} to add it
  as the `maxlength` attribute on the input element)
- {@link regex} to specify a custom regular expression for validation

In addition, custom validations may be added:
 
- {@link #vtype} specifies a virtual type implementation from {@link Ext.form.field.VTypes} which can contain
  custom validation logic
- {@link #validator} allows a custom arbitrary function to be called during validation

The details around how and when each of these validation options get used are described in the
documentation for {@link #getErrors}.

By default, the field value is checked for validity immediately while the user is typing in the
field. This can be controlled with the {@link #validateOnChange}, {@link #checkChangeEvents}, and
{@link #checkChangeBugger} configurations. Also see the details on Form Validation in the
{@link Ext.form.Panel} class documentation.

#Masking and Character Stripping#

Text fields can be configured with custom regular expressions to be applied to entered values before
validation: see {@link #maskRe} and {@link #stripCharsRe} for details.
{@img Ext.form.Text/Ext.form.Text.png Ext.form.Text component}
#Example usage:#

    Ext.create('Ext.form.Panel', {
        title: 'Contact Info',
        width: 300,
        bodyPadding: 10,
        renderTo: Ext.getBody(),        
        items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            allowBlank: false  // requires a non-empty value
        }, {
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email Address',
            vtype: 'email'  // requires value to be a valid email address format
        }]
    }); 

 * @constructor Creates a new TextField
 * @param {Object} config Configuration options
 *
 * @xtype textfield
 * @markdown
 * @docauthor Jason Johnston <jason@sencha.com>
 */
Ext.define('Ext.form.field.Text', {
    extend:'Ext.form.field.Base',
    alias: 'widget.textfield',
    requires: ['Ext.form.field.VTypes', 'Ext.layout.component.field.Text'],
    alternateClassName: ['Ext.form.TextField', 'Ext.form.Text'],

    /**
     * @cfg {String} vtypeText A custom error message to display in place of the default message provided
     * for the <b><code>{@link #vtype}</code></b> currently set for this field (defaults to <tt>undefined</tt>).
     * <b>Note</b>: only applies if <b><code>{@link #vtype}</code></b> is set, else ignored.
     */
    
    /**
     * @cfg {RegExp} stripCharsRe A JavaScript RegExp object used to strip unwanted content from the value
     * before validation (defaults to <tt>undefined</tt>).
     */

    /**
     * @cfg {Number} size An initial value for the 'size' attribute on the text input element. This is only
     * used if the field has no configured {@link #width} and is not given a width by its container's layout.
     * Defaults to <tt>20</tt>.
     */
    size: 20,

    /**
     * @cfg {Boolean} grow <tt>true</tt> if this field should automatically grow and shrink to its content
     * (defaults to <tt>false</tt>)
     */

    /**
     * @cfg {Number} growMin The minimum width to allow when <code><b>{@link #grow}</b> = true</code> (defaults
     * to <tt>30</tt>)
     */
    growMin : 30,
    
    /**
     * @cfg {Number} growMax The maximum width to allow when <code><b>{@link #grow}</b> = true</code> (defaults
     * to <tt>800</tt>)
     */
    growMax : 800,

    /**
     * @cfg {String} growAppend
     * A string that will be appended to the field's current value for the purposes of calculating the target
     * field size. Only used when the {@link #grow} config is <tt>true</tt>. Defaults to a single capital "W"
     * (the widest character in common fonts) to leave enough space for the next typed character and avoid the
     * field value shifting before the width is adjusted.
     */
    growAppend: 'W',
    
    /**
     * @cfg {String} vtype A validation type name as defined in {@link Ext.form.field.VTypes} (defaults to <tt>undefined</tt>)
     */

    /**
     * @cfg {RegExp} maskRe An input mask regular expression that will be used to filter keystrokes that do
     * not match (defaults to <tt>undefined</tt>)
     */

    /**
     * @cfg {Boolean} disableKeyFilter Specify <tt>true</tt> to disable input keystroke filtering (defaults
     * to <tt>false</tt>)
     */

    /**
     * @cfg {Boolean} allowBlank Specify <tt>false</tt> to validate that the value's length is > 0 (defaults to
     * <tt>true</tt>)
     */
    allowBlank : true,
    
    /**
     * @cfg {Number} minLength Minimum input field length required (defaults to <tt>0</tt>)
     */
    minLength : 0,
    
    /**
     * @cfg {Number} maxLength Maximum input field length allowed by validation (defaults to Number.MAX_VALUE).
     * This behavior is intended to provide instant feedback to the user by improving usability to allow pasting
     * and editing or overtyping and back tracking. To restrict the maximum number of characters that can be
     * entered into the field use the <tt><b>{@link Ext.form.field.Text#enforceMaxLength enforceMaxLength}</b></tt> option.
     */
    maxLength : Number.MAX_VALUE,
    
    /**
     * @cfg {Boolean} enforceMaxLength True to set the maxLength property on the underlying input field. Defaults to <tt>false</tt>
     */

    /**
     * @cfg {String} minLengthText Error text to display if the <b><tt>{@link #minLength minimum length}</tt></b>
     * validation fails (defaults to <tt>'The minimum length for this field is {minLength}'</tt>)
     */
    minLengthText : 'The minimum length for this field is {0}',
    
    /**
     * @cfg {String} maxLengthText Error text to display if the <b><tt>{@link #maxLength maximum length}</tt></b>
     * validation fails (defaults to <tt>'The maximum length for this field is {maxLength}'</tt>)
     */
    maxLengthText : 'The maximum length for this field is {0}',
    
    /**
     * @cfg {Boolean} selectOnFocus <tt>true</tt> to automatically select any existing field text when the field
     * receives input focus (defaults to <tt>false</tt>)
     */
    
    /**
     * @cfg {String} blankText The error text to display if the <b><tt>{@link #allowBlank}</tt></b> validation
     * fails (defaults to <tt>'This field is required'</tt>)
     */
    blankText : 'This field is required',
    
    /**
     * @cfg {Function} validator
     * <p>A custom validation function to be called during field validation ({@link #getErrors})
     * (defaults to <tt>undefined</tt>). If specified, this function will be called first, allowing the
     * developer to override the default validation process.</p>
     * <br><p>This function will be passed the following Parameters:</p>
     * <div class="mdetail-params"><ul>
     * <li><code>value</code>: <i>Mixed</i>
     * <div class="sub-desc">The current field value</div></li>
     * </ul></div>
     * <br><p>This function is to Return:</p>
     * <div class="mdetail-params"><ul>
     * <li><code>true</code>: <i>Boolean</i>
     * <div class="sub-desc"><code>true</code> if the value is valid</div></li>
     * <li><code>msg</code>: <i>String</i>
     * <div class="sub-desc">An error message if the value is invalid</div></li>
     * </ul></div>
     */

    /**
     * @cfg {RegExp} regex A JavaScript RegExp object to be tested against the field value during validation
     * (defaults to <tt>undefined</tt>). If the test fails, the field will be marked invalid using
     * <b><tt>{@link #regexText}</tt></b>.
     */

    /**
     * @cfg {String} regexText The error text to display if <b><tt>{@link #regex}</tt></b> is used and the
     * test fails during validation (defaults to <tt>''</tt>)
     */
    regexText : '',
    
    /**
     * @cfg {String} emptyText
     * <p>The default text to place into an empty field (defaults to <tt>undefined</tt>).</p>
     * <p>Note that normally this value will be submitted to the server if this field is enabled; to prevent this
     * you can set the {@link Ext.form.action.Action#submitEmptyText submitEmptyText} option of
     * {@link Ext.form.Basic#submit} to <tt>false</tt>.</p>
     * <p>Also note that if you use <tt>{@link #inputType inputType}:'file'</tt>, {@link #emptyText} is not
     * supported and should be avoided.</p>
     */

    /**
     * @cfg {String} emptyCls The CSS class to apply to an empty field to style the <b><tt>{@link #emptyText}</tt></b>
     * (defaults to <tt>'x-form-empty-field'</tt>).  This class is automatically added and removed as needed
     * depending on the current field value.
     */
    emptyCls : Ext.baseCSSPrefix + 'form-empty-field',

    ariaRole: 'textbox',

    /**
     * @cfg {Boolean} enableKeyEvents <tt>true</tt> to enable the proxying of key events for the HTML input field (defaults to <tt>false</tt>)
     */

    componentLayout: 'textfield',

    initComponent : function(){
        this.callParent();
        this.addEvents(
            /**
             * @event autosize
             * Fires when the <tt><b>{@link #autoSize}</b></tt> function is triggered and the field is
             * resized according to the {@link #grow}/{@link #growMin}/{@link #growMax} configs as a result.
             * This event provides a hook for the developer to apply additional logic at runtime to resize the
             * field if needed.
             * @param {Ext.form.field.Text} this This text field
             * @param {Number} width The new field width
             */
            'autosize',

            /**
             * @event keydown
             * Keydown input field event. This event only fires if <tt><b>{@link #enableKeyEvents}</b></tt>
             * is set to true.
             * @param {Ext.form.field.Text} this This text field
             * @param {Ext.EventObject} e
             */
            'keydown',
            /**
             * @event keyup
             * Keyup input field event. This event only fires if <tt><b>{@link #enableKeyEvents}</b></tt>
             * is set to true.
             * @param {Ext.form.field.Text} this This text field
             * @param {Ext.EventObject} e
             */
            'keyup',
            /**
             * @event keypress
             * Keypress input field event. This event only fires if <tt><b>{@link #enableKeyEvents}</b></tt>
             * is set to true.
             * @param {Ext.form.field.Text} this This text field
             * @param {Ext.EventObject} e
             */
            'keypress'
        );
    },

    // private
    initEvents : function(){
        var me = this,
            el = me.inputEl;
        
        me.callParent();
        if(me.selectOnFocus || me.emptyText){
            me.mon(el, 'mousedown', me.onMouseDown, me);
        }
        if(me.maskRe || (me.vtype && me.disableKeyFilter !== true && (me.maskRe = Ext.form.field.VTypes[me.vtype+'Mask']))){
            me.mon(el, 'keypress', me.filterKeys, me);
        }

        if (me.enableKeyEvents) {
            me.mon(el, {
                scope: me,
                keyup: me.onKeyUp,
                keydown: me.onKeyDown,
                keypress: me.onKeyPress
            });
        }
    },

    /**
     * @private override - treat undefined and null values as equal to an empty string value
     */
    isEqual: function(value1, value2) {
        return String(Ext.value(value1, '')) === String(Ext.value(value2, ''));
    },

    /**
     * @private
     * If grow=true, invoke the autoSize method when the field's value is changed.
     */
    onChange: function() {
        this.callParent();
        this.autoSize();
    },
    
    afterRender: function(){
        var me = this;
        if (me.enforceMaxLength) {
            me.inputEl.dom.maxLength = me.maxLength;
        }
        me.applyEmptyText();
        me.autoSize();
        me.callParent();
    },

    onMouseDown: function(e){
        var me = this;
        if(!me.hasFocus){
            me.mon(me.inputEl, 'mouseup', Ext.emptyFn, me, { single: true, preventDefault: true });
        }
    },

    /**
     * Performs any necessary manipulation of a raw String value to prepare it for {@link #stringToValue conversion}
     * and/or {@link #validate validation}. For text fields this applies the configured {@link #stripCharsRe} to the
     * raw value.
     * @param {String} value The unprocessed string value
     * @return {String} The processed string value
     */
    processRawValue: function(value) {
        var me = this,
            stripRe = me.stripCharsRe,
            newValue;
            
        if (stripRe) {
            newValue = value.replace(stripRe, '');
            if (newValue !== value) {
                me.setRawValue(newValue);
                value = newValue;
            }
        }
        return value;
    },

    //private
    onDisable: function(){
        this.callParent();
        if (Ext.isIE) {
            this.inputEl.dom.unselectable = 'on';
        }
    },

    //private
    onEnable: function(){
        this.callParent();
        if (Ext.isIE) {
            this.inputEl.dom.unselectable = '';
        }
    },

    onKeyDown: function(e) {
        this.fireEvent('keydown', this, e);
    },

    onKeyUp: function(e) {
        this.fireEvent('keyup', this, e);
    },

    onKeyPress: function(e) {
        this.fireEvent('keypress', this, e);
    },

    /**
     * Resets the current field value to the originally-loaded value and clears any validation messages.
     * Also adds <tt><b>{@link #emptyText}</b></tt> and <tt><b>{@link #emptyCls}</b></tt> if the
     * original value was blank.
     */
    reset : function(){
        this.callParent();
        this.applyEmptyText();
    },

    applyEmptyText : function(){
        var me = this,
            emptyText = me.emptyText,
            isEmpty;

        if (me.rendered && emptyText) {
            isEmpty = me.getRawValue().length < 1 && !me.hasFocus;
            
            if (Ext.supports.Placeholder) {
                me.inputEl.dom.placeholder = emptyText;
            } else if (isEmpty) {
                me.setRawValue(emptyText);
            }
            
            //all browsers need this because of a styling issue with chrome + placeholders.
            //the text isnt vertically aligned when empty (and using the placeholder)
            if (isEmpty) {
                me.inputEl.addCls(me.emptyCls);
            }

            me.autoSize();
        }
    },

    // private
    preFocus : function(){
        var me = this,
            inputEl = me.inputEl,
            emptyText = me.emptyText,
            isEmpty;

        if (emptyText && !Ext.supports.Placeholder && inputEl.dom.value === emptyText) {
            me.setRawValue('');
            isEmpty = true;
            inputEl.removeCls(me.emptyCls);
        } else if (Ext.supports.Placeholder) {
            me.inputEl.removeCls(me.emptyCls);
        }
        if (me.selectOnFocus || isEmpty) {
            inputEl.dom.select();
        }
    },

    onFocus: function() {
        var me = this;
        me.callParent(arguments);
        if (me.emptyText) {
            me.autoSize();
        }
    },

    // private
    postBlur : function(){
        this.applyEmptyText();
    },

    // private
    filterKeys : function(e){
        if(e.ctrlKey){
            return;
        }
        var key = e.getKey(),
            charCode = String.fromCharCode(e.getCharCode());
            
        if(Ext.isGecko && (e.isNavKeyPress() || key === e.BACKSPACE || (key === e.DELETE && e.button === -1))){
            return;
        }
        
        if(!Ext.isGecko && e.isSpecialKey() && !charCode){
            return;
        }
        if(!this.maskRe.test(charCode)){
            e.stopEvent();
        }
    },

    /**
     * Returns the raw String value of the field, without performing any normalization, conversion, or validation.
     * Gets the current value of the input element if the field has been rendered, ignoring the value if it is the
     * {@link #emptyText}. To get a normalized and converted value see {@link #getValue}.
     * @return {String} value The raw String value of the field
     */
    getRawValue: function() {
        var me = this,
            v = me.callParent();
        if (v === me.emptyText) {
            v = '';
        }
        return v;
    },

    /**
     * Sets a data value into the field and runs the change detection and validation. Also applies any configured
     * {@link #emptyText} for text fields. To set the value directly without these inspections see {@link #setRawValue}.
     * @param {Mixed} value The value to set
     * @return {Ext.form.field.Text} this
     */
    setValue: function(value) {
        var me = this,
            inputEl = me.inputEl;
        
        if (inputEl && me.emptyText && !Ext.isEmpty(value)) {
            inputEl.removeCls(me.emptyCls);
        }
        
        me.callParent(arguments);

        me.applyEmptyText();
        return me;
    },

    /**
Validates a value according to the field's validation rules and returns an array of errors
for any failing validations. Validation rules are processed in the following order:

1. **Field specific validator**
    
    A validator offers a way to customize and reuse a validation specification.
    If a field is configured with a `{@link #validator}`
    function, it will be passed the current field value.  The `{@link #validator}`
    function is expected to return either:
    
    - Boolean `true`  if the value is valid (validation continues).
    - a String to represent the invalid message if invalid (validation halts).

2. **Basic Validation**

    If the `{@link #validator}` has not halted validation,
    basic validation proceeds as follows:
    
    - `{@link #allowBlank}` : (Invalid message = `{@link #emptyText}`)
    
        Depending on the configuration of <code>{@link #allowBlank}</code>, a
        blank field will cause validation to halt at this step and return
        Boolean true or false accordingly.
    
    - `{@link #minLength}` : (Invalid message = `{@link #minLengthText}`)

        If the passed value does not satisfy the `{@link #minLength}`
        specified, validation halts.

    -  `{@link #maxLength}` : (Invalid message = `{@link #maxLengthText}`)

        If the passed value does not satisfy the `{@link #maxLength}`
        specified, validation halts.

3. **Preconfigured Validation Types (VTypes)**

    If none of the prior validation steps halts validation, a field
    configured with a `{@link #vtype}` will utilize the
    corresponding {@link Ext.form.field.VTypes VTypes} validation function.
    If invalid, either the field's `{@link #vtypeText}` or
    the VTypes vtype Text property will be used for the invalid message.
    Keystrokes on the field will be filtered according to the VTypes
    vtype Mask property.

4. **Field specific regex test**

    If none of the prior validation steps halts validation, a field's
    configured <code>{@link #regex}</code> test will be processed.
    The invalid message for this test is configured with `{@link #regexText}`

     * @param {Mixed} value The value to validate. The processed raw value will be used if nothing is passed
     * @return {Array} Array of any validation errors
     * @markdown
     */
    getErrors: function(value) {
        var me = this,
            errors = me.callParent(arguments),
            validator = me.validator,
            emptyText = me.emptyText,
            allowBlank = me.allowBlank,
            vtype = me.vtype,
            vtypes = Ext.form.field.VTypes,
            regex = me.regex,
            format = Ext.String.format,
            msg;

        value = value || me.processRawValue(me.getRawValue());

        if (Ext.isFunction(validator)) {
            msg = validator.call(me, value);
            if (msg !== true) {
                errors.push(msg);
            }
        }

        if (value.length < 1 || value === emptyText) {
            if (!allowBlank) {
                errors.push(me.blankText);
            }
            //if value is blank, there cannot be any additional errors
            return errors;
        }

        if (value.length < me.minLength) {
            errors.push(format(me.minLengthText, me.minLength));
        }

        if (value.length > me.maxLength) {
            errors.push(format(me.maxLengthText, me.maxLength));
        }

        if (vtype) {
            if(!vtypes[vtype](value, me)){
                errors.push(me.vtypeText || vtypes[vtype +'Text']);
            }
        }

        if (regex && !regex.test(value)) {
            errors.push(me.regexText || me.invalidText);
        }

        return errors;
    },

    /**
     * Selects text in this field
     * @param {Number} start (optional) The index where the selection should start (defaults to 0)
     * @param {Number} end (optional) The index where the selection should end (defaults to the text length)
     */
    selectText : function(start, end){
        var me = this,
            v = me.getRawValue(),
            doFocus = true,
            el = me.inputEl.dom,
            undef,
            range;
            
        if (v.length > 0) {
            start = start === undef ? 0 : start;
            end = end === undef ? v.length : end;
            if (el.setSelectionRange) {
                el.setSelectionRange(start, end);
            }
            else if(el.createTextRange) {
                range = el.createTextRange();
                range.moveStart('character', start);
                range.moveEnd('character', end - v.length);
                range.select();
            }
            doFocus = Ext.isGecko || Ext.isOpera;
        }
        if (doFocus) {
            me.focus();
        }
    },

    /**
     * Automatically grows the field to accomodate the width of the text up to the maximum field width allowed.
     * This only takes effect if <tt>{@link #grow} = true</tt>, and fires the {@link #autosize} event if the
     * width changes.
     */
    autoSize: function() {
        var me = this,
            width;
        if (me.grow && me.rendered) {
            me.doComponentLayout();
            width = me.inputEl.getWidth();
            if (width !== me.lastInputWidth) {
                me.fireEvent('autosize', width);
                me.lastInputWidth = width;
            }
        }
    },

    initAria: function() {
        this.callParent();
        this.getActionEl().dom.setAttribute('aria-required', this.allowBlank === false);
    },

    /**
     * @protected override
     * To get the natural width of the inputEl, we do a simple calculation based on the
     * 'size' config. We use hard-coded numbers to approximate what browsers do natively,
     * to avoid having to read any styles which would hurt performance.
     */
    getBodyNaturalWidth: function() {
        return Math.round(this.size * 6.5) + 20;
    }

});
