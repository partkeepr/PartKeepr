/**
 * @class Ext.form.action.StandardSubmit
 * @extends Ext.form.action.Submit
 * <p>A class which handles submission of data from {@link Ext.form.Basic Form}s using a standard
 * <tt>&lt;form&gt;</tt> element submit. It does not handle the response from the submit.</p>
 * <p>If validation of the form fields fails, the Form's {@link Ext.form.Basic#afterAction} method
 * will be called. Otherwise, afterAction will not be called.</p>
 * <p>Instances of this class are only created by a {@link Ext.form.Basic Form} when
 * {@link Ext.form.Basic#submit submit}ting, when the form's {@link Ext.form.Basic#standardSubmit}
 * config option is <tt>true</tt>.</p>
 */
Ext.define('Ext.form.action.StandardSubmit', {
    extend:'Ext.form.action.Submit',
    alias: 'formaction.standardsubmit',

    /**
     * @cfg {String} target
     * Optional <tt>target</tt> attribute to be used for the form when submitting. If not specified,
     * the target will be the current window/frame.
     */

    /**
     * @private
     * Perform the form submit. Creates and submits a temporary form element containing an input element for each
     * field value returned by {@link Ext.form.Basic#getValues}, plus any configured {@link #params params} or
     * {@link Ext.form.Basic#baseParams baseParams}.
     */
    doSubmit: function() {
        var form = this.buildForm();
        form.submit();
        Ext.removeNode(form);
    }

});
