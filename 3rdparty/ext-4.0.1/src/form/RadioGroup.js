/**
 * @class Ext.form.RadioGroup
 * @extends Ext.form.CheckboxGroup
 * <p>A {@link Ext.form.FieldContainer field container} which has a specialized layout for arranging
 * {@link Ext.form.field.Radio} controls into columns, and provides convenience {@link Ext.form.field.Field} methods
 * for {@link #getValue getting}, {@link #setValue setting}, and {@link #validate validating} the group
 * of radio buttons as a whole.</p>
 * <p><b>Validation:</b> Individual radio buttons themselves have no default validation behavior, but
 * sometimes you want to require a user to select one of a group of radios. RadioGroup
 * allows this by setting the config <tt>{@link #allowBlank}:false</tt>; when the user does not check at
 * one of the radio buttons, the entire group will be highlighted as invalid and the
 * {@link #blankText error message} will be displayed according to the {@link #msgTarget} config.</p>
 * <p><b>Layout:</b> The default layout for RadioGroup makes it easy to arrange the radio buttons into
 * columns; see the {@link #columns} and {@link #vertical} config documentation for details. You may also
 * use a completely different layout by setting the {@link #layout} to one of the other supported layout
 * types; for instance you may wish to use a custom arrangement of hbox and vbox containers. In that case
 * the Radio components at any depth will still be managed by the RadioGroup's validation.</p>
 * <p>Example usage:</p>
 * <pre><code>
var myRadioGroup = new Ext.form.RadioGroup({
    id: 'myGroup',
    xtype: 'radiogroup',
    fieldLabel: 'Single Column',
    // Arrange radio buttons into three columns, distributed vertically
    columns: 3,
    vertical: true,
    items: [
        {boxLabel: 'Item 1', name: 'rb', inputValue: '1'},
        {boxLabel: 'Item 2', name: 'rb', inputValue: '2', checked: true},
        {boxLabel: 'Item 3', name: 'rb', inputValue: '3'}
        {boxLabel: 'Item 4', name: 'rb', inputValue: '4'}
        {boxLabel: 'Item 5', name: 'rb', inputValue: '5'}
        {boxLabel: 'Item 6', name: 'rb', inputValue: '6'}
    ]
});
 * </code></pre>
 * @constructor
 * Creates a new RadioGroup
 * @param {Object} config Configuration options
 * @xtype radiogroup
 */
Ext.define('Ext.form.RadioGroup', {
    extend: 'Ext.form.CheckboxGroup',
    alias: 'widget.radiogroup',

    /**
     * @cfg {Array} items An Array of {@link Ext.form.field.Radio Radio}s or Radio config objects
     * to arrange in the group.
     */
    /**
     * @cfg {Boolean} allowBlank True to allow every item in the group to be blank (defaults to true).
     * If allowBlank = false and no items are selected at validation time, {@link @blankText} will
     * be used as the error text.
     */
    allowBlank : true,
    /**
     * @cfg {String} blankText Error text to display if the {@link #allowBlank} validation fails
     * (defaults to 'You must select one item in this group')
     */
    blankText : 'You must select one item in this group',
    
    // private
    defaultType : 'radiofield',
    
    // private
    groupCls : Ext.baseCSSPrefix + 'form-radio-group',

    getBoxes: function() {
        return this.query('[isRadio]');
    }

});
