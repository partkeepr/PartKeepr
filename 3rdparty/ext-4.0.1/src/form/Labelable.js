/**
 * @class Ext.form.Labelable

A mixin which allows a component to be configured and decorated with a label and/or error message as is
common for form fields. This is used by e.g. {@link Ext.form.field.Base} and {@link Ext.form.FieldContainer}
to let them be managed by the Field layout.

**NOTE**: This mixin is mainly for internal library use and most users should not need to use it directly. It
is more likely you will want to use one of the component classes that import this mixin, such as
{@link Ext.form.field.Base} or {@link Ext.form.FieldContainer}.

Use of this mixin does not make a component a field in the logical sense, meaning it does not provide any
logic or state related to values or validation; that is handled by the related {@link Ext.form.field.Field}
mixin. These two mixins may be used separately (for example {@link Ext.form.FieldContainer} is Labelable but not a
Field), or in combination (for example {@link Ext.form.field.Base} implements both and has logic for connecting the
two.)

Component classes which use this mixin should use the Field layout
or a derivation thereof to properly size and position the label and message according to the component config.
They must also call the {@link #initLabelable} method during component initialization to ensure the mixin gets
set up correctly.

 * @markdown
 * @docauthor Jason Johnston <jason@sencha.com>
 */
Ext.define("Ext.form.Labelable", {
    requires: ['Ext.XTemplate'],

    /**
     * @cfg {Array/String/Ext.XTemplate} labelableRenderTpl
     * The rendering template for the field decorations. Component classes using this mixin should include
     * logic to use this as their {@link Ext.AbstractComponent#renderTpl renderTpl}, and implement the
     * {@link #getSubTplMarkup} method to generate the field body content.
     */
    labelableRenderTpl: [
        '<tpl if="!hideLabel && !(!fieldLabel && hideEmptyLabel)">',
            '<label<tpl if="inputId"> for="{inputId}"</tpl> class="{labelCls}"<tpl if="labelStyle"> style="{labelStyle}"</tpl>>',
                '<tpl if="fieldLabel">{fieldLabel}{labelSeparator}</tpl>',
            '</label>',
        '</tpl>',
        '<div class="{baseBodyCls} {fieldBodyCls}"<tpl if="inputId"> id="{baseBodyCls}-{inputId}"</tpl> role="presentation">{subTplMarkup}</div>',
        '<div class="{errorMsgCls}" style="display:none"></div>',
        '<div class="{clearCls}" role="presentation"><!-- --></div>',
        {
            compiled: true,
            disableFormats: true
        }
    ],

    /**
     * @cfg {Ext.XTemplate} activeErrorsTpl
     * The template used to format the Array of error messages passed to {@link #setActiveErrors}
     * into a single HTML string. By default this renders each message as an item in an unordered list.
     */
    activeErrorsTpl: [
        '<tpl if="errors && errors.length">',
            '<ul><tpl for="errors"><li<tpl if="xindex == xcount"> class="last"</tpl>>{.}</li></tpl></ul>',
        '</tpl>'
    ],

    /**
     * @property isFieldLabelable
     * @type Boolean
     * Flag denoting that this object is labelable as a field. Always true.
     */
    isFieldLabelable: true,

    /**
     * @cfg {String} formItemCls
     * A CSS class to be applied to the outermost element to denote that it is participating in the form
     * field layout. Defaults to 'x-form-item'.
     */
    formItemCls: Ext.baseCSSPrefix + 'form-item',

    /**
     * @cfg {String} labelCls
     * The CSS class to be applied to the label element. Defaults to 'x-form-item-label'.
     */
    labelCls: Ext.baseCSSPrefix + 'form-item-label',

    /**
     * @cfg {String} errorMsgCls
     * The CSS class to be applied to the error message element. Defaults to 'x-form-error-msg'.
     */
    errorMsgCls: Ext.baseCSSPrefix + 'form-error-msg',

    /**
     * @cfg {String} baseBodyCls
     * The CSS class to be applied to the body content element. Defaults to 'x-form-item-body'.
     */
    baseBodyCls: Ext.baseCSSPrefix + 'form-item-body',

    /**
     * @cfg {String} fieldBodyCls
     * An extra CSS class to be applied to the body content element in addition to {@link #fieldBodyCls}.
     * Defaults to empty.
     */
    fieldBodyCls: '',

    /**
     * @cfg {String} clearCls
     * The CSS class to be applied to the special clearing div rendered directly after the field
     * contents wrapper to provide field clearing (defaults to <tt>'x-clear'</tt>).
     */
    clearCls: Ext.baseCSSPrefix + 'clear',

    /**
     * @cfg {String} invalidCls
     * The CSS class to use when marking the component invalid (defaults to 'x-form-invalid')
     */
    invalidCls : Ext.baseCSSPrefix + 'form-invalid',

    /**
     * @cfg {String} fieldLabel
     * The label for the field. It gets appended with the {@link #labelSeparator}, and its position
     * and sizing is determined by the {@link #labelAlign}, {@link #labelWidth}, and {@link #labelPad}
     * configs. Defaults to undefined.
     */
    fieldLabel: undefined,

    /**
     * @cfg {String} labelAlign
     * <p>Controls the position and alignment of the {@link #fieldLabel}. Valid values are:</p>
     * <ul>
     * <li><tt>"left"</tt> (the default) - The label is positioned to the left of the field, with its text
     * aligned to the left. Its width is determined by the {@link #labelWidth} config.</li>
     * <li><tt>"top"</tt> - The label is positioned above the field.</li>
     * <li><tt>"right"</tt> - The label is positioned to the left of the field, with its text aligned
     * to the right. Its width is determined by the {@link #labelWidth} config.</li>
     * </ul>
     */
    labelAlign : 'left',

    /**
     * @cfg {Number} labelWidth
     * The width of the {@link #fieldLabel} in pixels. Only applicable if the {@link #labelAlign} is set
     * to "left" or "right". Defaults to <tt>100</tt>.
     */
    labelWidth: 100,

    /**
     * @cfg {Number} labelPad
     * The amount of space in pixels between the {@link #fieldLabel} and the input field. Defaults to <tt>5</tt>.
     */
    labelPad : 5,

    /**
     * @cfg {String} labelSeparator
     * Character(s) to be inserted at the end of the {@link #fieldLabel label text}.
     */
    labelSeparator : ':',

    /**
     * @cfg {String} labelStyle
     * <p>A CSS style specification string to apply directly to this field's label. Defaults to undefined.</p>
     */

    /**
     * @cfg {Boolean} hideLabel
     * <p>Set to <tt>true</tt> to completely hide the label element ({@link #fieldLabel} and {@link #labelSeparator}).
     * Defaults to <tt>false</tt>.</p>
     * <p>Also see {@link #hideEmptyLabel}, which controls whether space will be reserved for an empty fieldLabel.</p>
     */
    hideLabel: false,

    /**
     * @cfg {Boolean} hideEmptyLabel
     * <p>When set to <tt>true</tt>, the label element ({@link #fieldLabel} and {@link #labelSeparator}) will be
     * automatically hidden if the {@link #fieldLabel} is empty. Setting this to <tt>false</tt> will cause the empty
     * label element to be rendered and space to be reserved for it; this is useful if you want a field without a label
     * to line up with other labeled fields in the same form. Defaults to <tt>true</tt>.</p>
     * <p>If you wish to unconditionall hide the label even if a non-empty fieldLabel is configured, then set
     * the {@link #hideLabel} config to <tt>true</tt>.</p>
     */
    hideEmptyLabel: true,

    /**
     * @cfg {Boolean} preventMark
     * <tt>true</tt> to disable displaying any {@link #setActiveError error message} set on this object.
     * Defaults to <tt>false</tt>.
     */
    preventMark: false,

    /**
     * @cfg {Boolean} autoFitErrors
     * Whether to adjust the component's body area to make room for 'side' or 'under'
     * {@link #msgTarget error messages}. Defaults to <tt>true</tt>.
     */
    autoFitErrors: true,

    /**
     * @cfg {String} msgTarget <p>The location where the error message text should display.
     * Must be one of the following values:</p>
     * <div class="mdetail-params"><ul>
     * <li><code>qtip</code> Display a quick tip containing the message when the user hovers over the field. This is the default.
     * <div class="subdesc"><b>{@link Ext.tip.QuickTipManager#init Ext.tip.QuickTipManager.init} must have been called for this setting to work.</b></div></li>
     * <li><code>title</code> Display the message in a default browser title attribute popup.</li>
     * <li><code>under</code> Add a block div beneath the field containing the error message.</li>
     * <li><code>side</code> Add an error icon to the right of the field, displaying the message in a popup on hover.</li>
     * <li><code>none</code> Don't display any error message. This might be useful if you are implementing custom error display.</li>
     * <li><code>[element id]</code> Add the error message directly to the innerHTML of the specified element.</li>
     * </ul></div>
     */
    msgTarget: 'qtip',

    /**
     * @cfg {String} activeError
     * If specified, then the component will be displayed with this value as its active error when
     * first rendered. Defaults to undefined. Use {@link #setActiveError} or {@link #unsetActiveError} to
     * change it after component creation.
     */


    /**
     * Performs initialization of this mixin. Component classes using this mixin should call this method
     * during their own initialization.
     */
    initLabelable: function() {
        this.addCls(this.formItemCls);

        this.addEvents(
            /**
             * @event errorchange
             * Fires when the active error message is changed via {@link #setActiveError}.
             * @param {Ext.form.Labelable} this
             * @param {String} error The active error message
             */
            'errorchange'
        );
    },

    /**
     * Returns the label for the field. Defaults to simply returning the {@link #fieldLabel} config. Can be
     * overridden to provide
     * @return {String} The configured field label, or empty string if not defined
     */
    getFieldLabel: function() {
        return this.fieldLabel || '';
    },

    /**
     * @protected
     * Generates the arguments for the field decorations {@link #labelableRenderTpl rendering template}.
     * @return {Object} The template arguments
     */
    getLabelableRenderData: function() {
        var me = this,
            labelAlign = me.labelAlign,
            labelPad = me.labelPad,
            labelStyle;

        // Calculate label styles up front rather than in the Field layout for speed; this
        // is safe because label alignment/width/pad are not expected to change.
        if (labelAlign === 'top') {
            labelStyle = 'margin-bottom:' + labelPad + 'px;';
        } else {
            labelStyle = 'margin-right:' + labelPad + 'px;';
            // Add the width for border-box browsers; will be set by the Field layout for content-box
            if (Ext.isBorderBox) {
                labelStyle += 'width:' + me.labelWidth + 'px;';
            }
        }

        return Ext.copyTo(
            {
                inputId: me.getInputId(),
                fieldLabel: me.getFieldLabel(),
                labelStyle: labelStyle + (me.labelStyle || ''),
                subTplMarkup: me.getSubTplMarkup()
            },
            me,
            'hideLabel,hideEmptyLabel,labelCls,fieldBodyCls,baseBodyCls,errorMsgCls,clearCls,labelSeparator',
            true
        );
    },

    /**
     * @protected
     * Returns the additional {@link Ext.AbstractComponent#renderSelectors} for selecting the field
     * decoration elements from the rendered {@link #labelableRenderTpl}. Component classes using this mixin should
     * be sure and merge this method's result into the component's {@link Ext.AbstractComponent#renderSelectors}
     * before rendering.
     */
    getLabelableSelectors: function() {
        return {
            /**
             * @property labelEl
             * @type Ext.core.Element
             * The label Element for this component. Only available after the component has been rendered.
             */
            labelEl: 'label.' + this.labelCls,

            /**
             * @property bodyEl
             * @type Ext.core.Element
             * The div Element wrapping the component's contents. Only available after the component has been rendered.
             */
            bodyEl: '.' + this.baseBodyCls,

            /**
             * @property errorEl
             * @type Ext.core.Element
             * The div Element that will contain the component's error message(s). Note that depending on the
             * configured {@link #msgTarget}, this element may be hidden in favor of some other form of
             * presentation, but will always be present in the DOM for use by assistive technologies.
             */
            errorEl: '.' + this.errorMsgCls
        };
    },

    /**
     * @protected
     * Gets the markup to be inserted into the outer template's bodyEl. Defaults to empty string, should
     * be implemented by classes including this mixin as needed.
     * @return {String} The markup to be inserted
     */
    getSubTplMarkup: function() {
        return '';
    },

    /**
     * Get the input id, if any, for this component. This is used as the "for" attribute on the label element.
     * Implementing subclasses may also use this as e.g. the id for their own <tt>input</tt> element.
     * @return {String} The input id
     */
    getInputId: function() {
        return '';
    },

    /**
     * Gets the active error message for this component, if any. This does not trigger
     * validation on its own, it merely returns any message that the component may already hold.
     * @return {String} The active error message on the component; if there is no error, an empty string is returned.
     */
    getActiveError : function() {
        return this.activeError || '';
    },

    /**
     * Tells whether the field currently has an active error message. This does not trigger
     * validation on its own, it merely looks for any message that the component may already hold.
     * @return {Boolean}
     */
    hasActiveError: function() {
        return !!this.getActiveError();
    },

    /**
     * Sets the active error message to the given string. This replaces the entire error message
     * contents with the given string. Also see {@link #setActiveErrors} which accepts an Array of
     * messages and formats them according to the {@link #activeErrorsTpl}.
     * @param {String} msg The error message
     */
    setActiveError: function(msg) {
        this.activeError = msg;
        this.activeErrors = [msg];
        this.renderActiveError();
    },

    /**
     * Gets an Array of any active error messages currently applied to the field. This does not trigger
     * validation on its own, it merely returns any messages that the component may already hold.
     * @return {Array} The active error messages on the component; if there are no errors, an empty Array is returned.
     */
    getActiveErrors: function() {
        return this.activeErrors || [];
    },

    /**
     * Set the active error message to an Array of error messages. The messages are formatted into
     * a single message string using the {@link #activeErrorsTpl}. Also see {@link #setActiveError}
     * which allows setting the entire error contents with a single string.
     * @param {Array} errors The error messages
     */
    setActiveErrors: function(errors) {
        this.activeErrors = errors;
        this.activeError = this.getTpl('activeErrorsTpl').apply({errors: errors});
        this.renderActiveError();
    },

    /**
     * Clears the active error.
     */
    unsetActiveError: function() {
        delete this.activeError;
        delete this.activeErrors;
        this.renderActiveError();
    },

    /**
     * @private
     * Updates the rendered DOM to match the current activeError. This only updates the content and
     * attributes, you'll have to call doComponentLayout to actually update the display.
     */
    renderActiveError: function() {
        var me = this,
            activeError = me.getActiveError(),
            hasError = !!activeError;

        if (activeError !== me.lastActiveError) {
            me.fireEvent('errorchange', me, activeError);
            me.lastActiveError = activeError;
        }

        if (me.rendered && !me.isDestroyed && !me.preventMark) {
            // Add/remove invalid class
            me.el[hasError ? 'addCls' : 'removeCls'](me.invalidCls);

            // Update the aria-invalid attribute
            me.getActionEl().dom.setAttribute('aria-invalid', hasError);

            // Update the errorEl with the error message text
            me.errorEl.dom.innerHTML = activeError;
        }
    },

    /**
     * Applies a set of default configuration values to this Labelable instance. For each of the
     * properties in the given object, check if this component hasOwnProperty that config; if not
     * then it's inheriting a default value from its prototype and we should apply the default value.
     * @param {Object} defaults The defaults to apply to the object.
     */
    setFieldDefaults: function(defaults) {
        var me = this;
        Ext.iterate(defaults, function(key, val) {
            if (!me.hasOwnProperty(key)) {
                me[key] = val;
            }
        });
    },

    /**
     * @protected Calculate and return the natural width of the bodyEl. Override to provide custom logic.
     * Note for implementors: if at all possible this method should be overridden with a custom implementation
     * that can avoid anything that would cause the browser to reflow, e.g. querying offsetWidth.
     */
    getBodyNaturalWidth: function() {
        return this.bodyEl.getWidth();
    }

});
