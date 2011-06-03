/**
 * @class Ext.form.field.Hidden
 * @extends Ext.form.field.Base
 * <p>A basic hidden field for storing hidden values in forms that need to be passed in the form submit.</p>
 * <p>This creates an actual input element with type="submit" in the DOM. While its label is
 * {@link #hideLabel not rendered} by default, it is still a real component and may be sized according to
 * its owner container's layout.</p>
 * <p>Because of this, in most cases it is more convenient and less problematic to simply
 * {@link Ext.form.action.Action#params pass hidden parameters} directly when
 * {@link Ext.form.Basic#submit submitting the form}.</p>
 * <p>Example:</p>
 * <pre><code>new Ext.form.Panel({
    title: 'My Form',
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Text Field',
        name: 'text_field',
        value: 'value from text field'
    }, {
        xtype: 'hiddenfield',
        name: 'hidden_field_1',
        value: 'value from hidden field'
    }],

    buttons: [{
        text: 'Submit',
        handler: function() {
            this.up('form').getForm().submit({
                params: {
                    hidden_field_2: 'value from submit call'
                }
            });
        }
    }]
});</code></pre>
 * <p>Submitting the above form will result in three values sent to the server:
 * <code>text_field=value+from+text+field&hidden_field_1=value+from+hidden+field&<br>hidden_field_2=value+from+submit+call</code></p>
 *
 * @constructor
 * Create a new Hidden field.
 * @param {Object} config Configuration options
 * 
 * @xtype hiddenfield
 */
Ext.define('Ext.form.field.Hidden', {
    extend:'Ext.form.field.Base',
    alias: ['widget.hiddenfield', 'widget.hidden'],
    alternateClassName: 'Ext.form.Hidden',

    // private
    inputType : 'hidden',
    hideLabel: true,
    
    initComponent: function(){
        this.formItemCls += '-hidden';
        this.callParent();    
    },

    // These are all private overrides
    initEvents: Ext.emptyFn,
    setSize : Ext.emptyFn,
    setWidth : Ext.emptyFn,
    setHeight : Ext.emptyFn,
    setPosition : Ext.emptyFn,
    setPagePosition : Ext.emptyFn,
    markInvalid : Ext.emptyFn,
    clearInvalid : Ext.emptyFn
});
