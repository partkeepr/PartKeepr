/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.form.field.ComboBox
 * @extends Ext.form.field.Picker
 *
 * A combobox control with support for autocomplete, remote loading, and many other features.
 *
 * A ComboBox is like a combination of a traditional HTML text `<input>` field and a `<select>`
 * field; the user is able to type freely into the field, and/or pick values from a dropdown selection
 * list. The user can input any value by default, even if it does not appear in the selection list;
 * to prevent free-form values and restrict them to items in the list, set {@link #forceSelection} to `true`.
 *
 * The selection list's options are populated from any {@link Ext.data.Store}, including remote
 * stores. The data items in the store are mapped to each option's displayed text and backing value via
 * the {@link #valueField} and {@link #displayField} configurations, respectively.
 *
 * If your store is not remote, i.e. it depends only on local data and is loaded up front, you should be
 * sure to set the {@link #queryMode} to `'local'`, as this will improve responsiveness for the user.
 *
 * {@img Ext.form.ComboBox/Ext.form.ComboBox.png Ext.form.ComboBox component}
 *
 * ## Example usage:
 *
 *     // The data store containing the list of states
 *     var states = Ext.create('Ext.data.Store', {
 *         fields: ['abbr', 'name'],
 *         data : [
 *             {"abbr":"AL", "name":"Alabama"},
 *             {"abbr":"AK", "name":"Alaska"},
 *             {"abbr":"AZ", "name":"Arizona"}
 *             //...
 *         ]
 *     });
 *
 *     // Create the combo box, attached to the states data store
 *     Ext.create('Ext.form.ComboBox', {
 *         fieldLabel: 'Choose State',
 *         store: states,
 *         queryMode: 'local',
 *         displayField: 'name',
 *         valueField: 'abbr',
 *         renderTo: Ext.getBody()
 *     });
 *
 * ## Events
 *
 * To do something when something in ComboBox is selected, configure the select event:
 *
 *     var cb = Ext.create('Ext.form.ComboBox', {
 *         // all of your config options
 *         listeners:{
 *              scope: yourScope,
 *              'select': yourFunction
 *         }
 *     });
 *
 *     // Alternatively, you can assign events after the object is created:
 *     var cb = new Ext.form.field.ComboBox(yourOptions);
 *     cb.on('select', yourFunction, yourScope);
 *
 * ## Multiple Selection
 *
 * ComboBox also allows selection of multiple items from the list; to enable multi-selection set the
 * {@link #multiSelect} config to `true`.
 *
 * @docauthor Jason Johnston <jason@sencha.com>
 */
Ext.define('Ext.form.field.ComboBox', {
    extend:'Ext.form.field.Picker',
    requires: ['Ext.util.DelayedTask', 'Ext.EventObject', 'Ext.view.BoundList', 'Ext.view.BoundListKeyNav', 'Ext.data.StoreManager'],
    alternateClassName: 'Ext.form.ComboBox',
    alias: ['widget.combobox', 'widget.combo'],

    /**
     * @cfg {String} triggerCls
     * An additional CSS class used to style the trigger button. The trigger will always get the
     * {@link #triggerBaseCls} by default and <code>triggerCls</code> will be <b>appended</b> if specified.
     * Defaults to 'x-form-arrow-trigger' for ComboBox.
     */
    triggerCls: Ext.baseCSSPrefix + 'form-arrow-trigger',

    /**
     * @cfg {Ext.data.Store/Array} store The data source to which this combo is bound (defaults to <code>undefined</code>).
     * Acceptable values for this property are:
     * <div class="mdetail-params"><ul>
     * <li><b>any {@link Ext.data.Store Store} subclass</b></li>
     * <li><b>an Array</b> : Arrays will be converted to a {@link Ext.data.Store} internally,
     * automatically generating {@link Ext.data.Field#name field names} to work with all data components.
     * <div class="mdetail-params"><ul>
     * <li><b>1-dimensional array</b> : (e.g., <code>['Foo','Bar']</code>)<div class="sub-desc">
     * A 1-dimensional array will automatically be expanded (each array item will be used for both the combo
     * {@link #valueField} and {@link #displayField})</div></li>
     * <li><b>2-dimensional array</b> : (e.g., <code>[['f','Foo'],['b','Bar']]</code>)<div class="sub-desc">
     * For a multi-dimensional array, the value in index 0 of each item will be assumed to be the combo
     * {@link #valueField}, while the value at index 1 is assumed to be the combo {@link #displayField}.
     * </div></li></ul></div></li></ul></div>
     * <p>See also <code>{@link #queryMode}</code>.</p>
     */

    /**
     * @cfg {Boolean} multiSelect
     * If set to <code>true</code>, allows the combo field to hold more than one value at a time, and allows selecting
     * multiple items from the dropdown list. The combo's text field will show all selected values separated by
     * the {@link #delimiter}. (Defaults to <code>false</code>.)
     */
    multiSelect: false,

    /**
     * @cfg {String} delimiter
     * The character(s) used to separate the {@link #displayField display values} of multiple selected items
     * when <code>{@link #multiSelect} = true</code>. Defaults to <code>', '</code>.
     */
    delimiter: ', ',

    /**
     * @cfg {String} displayField The underlying {@link Ext.data.Field#name data field name} to bind to this
     * ComboBox (defaults to 'text').
     * <p>See also <code>{@link #valueField}</code>.</p>
     */
    displayField: 'text',

    /**
     * @cfg {String} valueField
     * @required
     * The underlying {@link Ext.data.Field#name data value name} to bind to this ComboBox (defaults to match
     * the value of the {@link #displayField} config).
     * <p><b>Note</b>: use of a <code>valueField</code> requires the user to make a selection in order for a value to be
     * mapped. See also <code>{@link #displayField}</code>.</p>
     */

    /**
     * @cfg {String} triggerAction The action to execute when the trigger is clicked.
     * <div class="mdetail-params"><ul>
     * <li><b><code>'all'</code></b> : <b>Default</b>
     * <p class="sub-desc">{@link #doQuery run the query} specified by the <code>{@link #allQuery}</code> config option</p></li>
     * <li><b><code>'query'</code></b> :
     * <p class="sub-desc">{@link #doQuery run the query} using the {@link Ext.form.field.Base#getRawValue raw value}.</p></li>
     * </ul></div>
     * <p>See also <code>{@link #queryParam}</code>.</p>
     */
    triggerAction: 'all',

    /**
     * @cfg {String} allQuery The text query to send to the server to return all records for the list
     * with no filtering (defaults to '')
     */
    allQuery: '',

    /**
     * @cfg {String} queryParam Name of the parameter used by the Store to pass the typed string when the ComboBox is configured with
     * <code>{@link #queryMode}: 'remote'</code> (defaults to <code>'query'</code>). If explicitly set to a falsy value it will
     * not be sent.
     */
    queryParam: 'query',

    /**
     * @cfg {String} queryMode
     * The mode in which the ComboBox uses the configured Store. Acceptable values are:
     * <div class="mdetail-params"><ul>
     * <li><b><code>'remote'</code></b> : <b>Default</b>
     * <p>In <code>queryMode: 'remote'</code>, the ComboBox loads its Store dynamically based upon user interaction.</p>
     * <p>This is typically used for "autocomplete" type inputs, and after the user finishes typing, the Store is {@link Ext.data.Store#load load}ed.</p>
     * <p>A parameter containing the typed string is sent in the load request. The default parameter name for the input string is <code>query</code>, but this
     * can be configured using the {@link #queryParam} config.</p>
     * <p>In <code>queryMode: 'remote'</code>, the Store may be configured with <code>{@link Ext.data.Store#remoteFilter remoteFilter}: true</code>,
     * and further filters may be <i>programatically</i> added to the Store which are then passed with every load request which allows the server
     * to further refine the returned dataset.</p>
     * <p>Typically, in an autocomplete situation, {@link #hideTrigger} is configured <code>true</code> because it has no meaning for autocomplete.</p></li>
     * <li><b><code>'local'</code></b> :
     * <p class="sub-desc">ComboBox loads local data</p>
     * <pre><code>
var combo = new Ext.form.field.ComboBox({
    renderTo: document.body,
    queryMode: 'local',
    store: new Ext.data.ArrayStore({
        id: 0,
        fields: [
            'myId',  // numeric value is the key
            'displayText'
        ],
        data: [[1, 'item1'], [2, 'item2']]  // data is local
    }),
    valueField: 'myId',
    displayField: 'displayText',
    triggerAction: 'all'
});
     * </code></pre></li>
     * </ul></div>
     */
    queryMode: 'remote',

    queryCaching: true,

    /**
     * @cfg {Number} pageSize If greater than <code>0</code>, a {@link Ext.toolbar.Paging} is displayed in the
     * footer of the dropdown list and the {@link #doQuery filter queries} will execute with page start and
     * {@link Ext.toolbar.Paging#pageSize limit} parameters. Only applies when <code>{@link #queryMode} = 'remote'</code>
     * (defaults to <code>0</code>).
     */
    pageSize: 0,

    /**
     * @cfg {Number} queryDelay The length of time in milliseconds to delay between the start of typing and
     * sending the query to filter the dropdown list (defaults to <code>500</code> if <code>{@link #queryMode} = 'remote'</code>
     * or <code>10</code> if <code>{@link #queryMode} = 'local'</code>)
     */

    /**
     * @cfg {Number} minChars The minimum number of characters the user must type before autocomplete and
     * {@link #typeAhead} activate (defaults to <code>4</code> if <code>{@link #queryMode} = 'remote'</code> or <code>0</code> if
     * <code>{@link #queryMode} = 'local'</code>, does not apply if <code>{@link Ext.form.field.Trigger#editable editable} = false</code>).
     */

    /**
     * @cfg {Boolean} autoSelect <code>true</code> to automatically highlight the first result gathered by the data store
     * in the dropdown list when it is opened. (Defaults to <code>true</code>). A false value would cause nothing in the
     * list to be highlighted automatically, so the user would have to manually highlight an item before pressing
     * the enter or {@link #selectOnTab tab} key to select it (unless the value of ({@link #typeAhead}) were true),
     * or use the mouse to select a value.
     */
    autoSelect: true,

    /**
     * @cfg {Boolean} typeAhead <code>true</code> to populate and autoselect the remainder of the text being
     * typed after a configurable delay ({@link #typeAheadDelay}) if it matches a known value (defaults
     * to <code>false</code>)
     */
    typeAhead: false,

    /**
     * @cfg {Number} typeAheadDelay The length of time in milliseconds to wait until the typeahead text is displayed
     * if <code>{@link #typeAhead} = true</code> (defaults to <code>250</code>)
     */
    typeAheadDelay: 250,

    /**
     * @cfg {Boolean} selectOnTab
     * Whether the Tab key should select the currently highlighted item. Defaults to <code>true</code>.
     */
    selectOnTab: true,

    /**
     * @cfg {Boolean} forceSelection <code>true</code> to restrict the selected value to one of the values in the list,
     * <code>false</code> to allow the user to set arbitrary text into the field (defaults to <code>false</code>)
     */
    forceSelection: false,

    /**
     * @cfg {String} valueNotFoundText When using a name/value combo, if the value passed to setValue is not found in
     * the store, valueNotFoundText will be displayed as the field text if defined (defaults to undefined). If this
     * default text is used, it means there is no value set and no validation will occur on this field.
     */

    /**
     * The value of the match string used to filter the store. Delete this property to force a requery.
     * Example use:
     * <pre><code>
var combo = new Ext.form.field.ComboBox({
    ...
    queryMode: 'remote',
    listeners: {
        // delete the previous query in the beforequery event or set
        // combo.lastQuery = null (this will reload the store the next time it expands)
        beforequery: function(qe){
            delete qe.combo.lastQuery;
        }
    }
});
     * </code></pre>
     * To make sure the filter in the store is not cleared the first time the ComboBox trigger is used
     * configure the combo with <code>lastQuery=''</code>. Example use:
     * <pre><code>
var combo = new Ext.form.field.ComboBox({
    ...
    queryMode: 'local',
    triggerAction: 'all',
    lastQuery: ''
});
     * </code></pre>
     * @property lastQuery
     * @type String
     */

    /**
     * @cfg {Object} defaultListConfig
     * Set of options that will be used as defaults for the user-configured {@link #listConfig} object.
     */
    defaultListConfig: {
        emptyText: '',
        loadingText: 'Loading...',
        loadingHeight: 70,
        minWidth: 70,
        maxHeight: 300,
        shadow: 'sides'
    },

    /**
     * @cfg {Mixed} transform
     * The id, DOM node or {@link Ext.core.Element} of an existing HTML <code>&lt;select&gt;</code> element to
     * convert into a ComboBox. The target select's options will be used to build the options in the ComboBox
     * dropdown; a configured {@link #store} will take precedence over this.
     */

    /**
     * @cfg {Object} listConfig
     * <p>An optional set of configuration properties that will be passed to the {@link Ext.view.BoundList}'s
     * constructor. Any configuration that is valid for BoundList can be included. Some of the more useful
     * ones are:</p>
     * <ul>
     *     <li>{@link Ext.view.BoundList#cls} - defaults to empty</li>
     *     <li>{@link Ext.view.BoundList#emptyText} - defaults to empty string</li>
     *     <li>{@link Ext.view.BoundList#getInnerTpl} - defaults to the template defined in BoundList</li>
     *     <li>{@link Ext.view.BoundList#itemSelector} - defaults to the value defined in BoundList</li>
     *     <li>{@link Ext.view.BoundList#loadingText} - defaults to <code>'Loading...'</code></li>
     *     <li>{@link Ext.view.BoundList#minWidth} - defaults to <code>70</code></li>
     *     <li>{@link Ext.view.BoundList#maxWidth} - defaults to <code>undefined</code></li>
     *     <li>{@link Ext.view.BoundList#maxHeight} - defaults to <code>300</code></li>
     *     <li>{@link Ext.view.BoundList#resizable} - defaults to <code>false</code></li>
     *     <li>{@link Ext.view.BoundList#shadow} - defaults to <code>'sides'</code></li>
     *     <li>{@link Ext.view.BoundList#width} - defaults to <code>undefined</code> (automatically set to the width
     *         of the ComboBox field if {@link #matchFieldWidth} is true)</li>
     * </ul>
     */

    //private
    ignoreSelection: 0,

    initComponent: function() {
        var me = this,
            isDefined = Ext.isDefined,
            store = me.store,
            transform = me.transform,
            transformSelect, isLocalMode;

        //<debug>
        if (!store && !transform) {
            Ext.Error.raise('Either a valid store, or a HTML select to transform, must be configured on the combo.');
        }
        if (me.typeAhead && me.multiSelect) {
            Ext.Error.raise('typeAhead and multiSelect are mutually exclusive options -- please remove one of them.');
        }
        if (me.typeAhead && !me.editable) {
            Ext.Error.raise('If typeAhead is enabled the combo must be editable: true -- please change one of those settings.');
        }
        if (me.selectOnFocus && !me.editable) {
            Ext.Error.raise('If selectOnFocus is enabled the combo must be editable: true -- please change one of those settings.');
        }
        //</debug>

        this.addEvents(
            // TODO need beforeselect?

            /**
             * @event beforequery
             * Fires before all queries are processed. Return false to cancel the query or set the queryEvent's
             * cancel property to true.
             * @param {Object} queryEvent An object that has these properties:<ul>
             * <li><code>combo</code> : Ext.form.field.ComboBox <div class="sub-desc">This combo box</div></li>
             * <li><code>query</code> : String <div class="sub-desc">The query string</div></li>
             * <li><code>forceAll</code> : Boolean <div class="sub-desc">True to force "all" query</div></li>
             * <li><code>cancel</code> : Boolean <div class="sub-desc">Set to true to cancel the query</div></li>
             * </ul>
             */
            'beforequery',

            /*
             * @event select
             * Fires when at least one list item is selected.
             * @param {Ext.form.field.ComboBox} combo This combo box
             * @param {Array} records The selected records
             */
            'select'
        );

        // Build store from 'transform' HTML select element's options
        if (!store && transform) {
            transformSelect = Ext.getDom(transform);
            if (transformSelect) {
                store = Ext.Array.map(Ext.Array.from(transformSelect.options), function(option) {
                    return [option.value, option.text];
                });
                if (!me.name) {
                    me.name = transformSelect.name;
                }
                if (!('value' in me)) {
                    me.value = transformSelect.value;
                }
            }
        }

        me.bindStore(store, true);
        store = me.store;
        if (store.autoCreated) {
            me.queryMode = 'local';
            me.valueField = me.displayField = 'field1';
            if (!store.expanded) {
                me.displayField = 'field2';
            }
        }


        if (!isDefined(me.valueField)) {
            me.valueField = me.displayField;
        }

        isLocalMode = me.queryMode === 'local';
        if (!isDefined(me.queryDelay)) {
            me.queryDelay = isLocalMode ? 10 : 500;
        }
        if (!isDefined(me.minChars)) {
            me.minChars = isLocalMode ? 0 : 4;
        }

        if (!me.displayTpl) {
            me.displayTpl = Ext.create('Ext.XTemplate',
                '<tpl for=".">' +
                    '{[typeof values === "string" ? values : values.' + me.displayField + ']}' +
                    '<tpl if="xindex < xcount">' + me.delimiter + '</tpl>' +
                '</tpl>'
            );
        } else if (Ext.isString(me.displayTpl)) {
            me.displayTpl = Ext.create('Ext.XTemplate', me.displayTpl);
        }

        me.callParent();

        me.doQueryTask = Ext.create('Ext.util.DelayedTask', me.doRawQuery, me);

        // store has already been loaded, setValue
        if (me.store.getCount() > 0) {
            me.setValue(me.value);
        }

        // render in place of 'transform' select
        if (transformSelect) {
            me.render(transformSelect.parentNode, transformSelect);
            Ext.removeNode(transformSelect);
            delete me.renderTo;
        }
    },

    beforeBlur: function() {
        var me = this;
        me.doQueryTask.cancel();
        if (me.forceSelection) {
            me.assertValue();
        } else {
            me.collapse();
        }
    },

    // private
    assertValue: function() {
        var me = this,
            value = me.getRawValue(),
            rec;

        if (me.multiSelect) {
            // For multiselect, check that the current displayed value matches the current
            // selection, if it does not then revert to the most recent selection.
            if (value !== me.getDisplayValue()) {
                me.setValue(me.lastSelection);
            }
        } else {
            // For single-select, match the displayed value to a record and select it,
            // if it does not match a record then revert to the most recent selection.
            rec = me.findRecordByDisplay(value);
            if (rec) {
                me.select(rec);
            } else {
                me.setValue(me.lastSelection);
            }
        }
        me.collapse();
    },

    onTypeAhead: function() {
        var me = this,
            displayField = me.displayField,
            record = me.store.findRecord(displayField, me.getRawValue()),
            boundList = me.getPicker(),
            newValue, len, selStart;

        if (record) {
            newValue = record.get(displayField);
            len = newValue.length;
            selStart = me.getRawValue().length;

            boundList.highlightItem(boundList.getNode(record));

            if (selStart !== 0 && selStart !== len) {
                me.setRawValue(newValue);
                me.selectText(selStart, newValue.length);
            }
        }
    },

    // invoked when a different store is bound to this combo
    // than the original
    resetToDefault: function() {

    },

    bindStore: function(store, initial) {
        var me = this,
            oldStore = me.store;

        // this code directly accesses this.picker, bc invoking getPicker
        // would create it when we may be preping to destroy it
        if (oldStore && !initial) {
            if (oldStore !== store && oldStore.autoDestroy) {
                oldStore.destroy();
            } else {
                oldStore.un({
                    scope: me,
                    load: me.onLoad,
                    exception: me.collapse
                });
            }
            if (!store) {
                me.store = null;
                if (me.picker) {
                    me.picker.bindStore(null);
                }
            }
        }
        if (store) {
            if (!initial) {
                me.resetToDefault();
            }

            me.store = Ext.data.StoreManager.lookup(store);
            me.store.on({
                scope: me,
                load: me.onLoad,
                exception: me.collapse
            });

            if (me.picker) {
                me.picker.bindStore(store);
            }
        }
    },

    onLoad: function() {
        var me = this,
            value = me.value;

        me.syncSelection();
        if (me.picker && !me.picker.getSelectionModel().hasSelection()) {
            me.doAutoSelect();
        }
    },

    /**
     * @private
     * Execute the query with the raw contents within the textfield.
     */
    doRawQuery: function() {
        this.doQuery(this.getRawValue());
    },

    /**
     * Executes a query to filter the dropdown list. Fires the {@link #beforequery} event prior to performing the
     * query allowing the query action to be canceled if needed.
     * @param {String} queryString The SQL query to execute
     * @param {Boolean} forceAll <code>true</code> to force the query to execute even if there are currently fewer
     * characters in the field than the minimum specified by the <code>{@link #minChars}</code> config option.  It
     * also clears any filter previously saved in the current store (defaults to <code>false</code>)
     * @return {Boolean} true if the query was permitted to run, false if it was cancelled by a {@link #beforequery} handler.
     */
    doQuery: function(queryString, forceAll) {
        queryString = queryString || '';

        // store in object and pass by reference in 'beforequery'
        // so that client code can modify values.
        var me = this,
            qe = {
                query: queryString,
                forceAll: forceAll,
                combo: me,
                cancel: false
            },
            store = me.store,
            isLocalMode = me.queryMode === 'local';

        if (me.fireEvent('beforequery', qe) === false || qe.cancel) {
            return false;
        }

        // get back out possibly modified values
        queryString = qe.query;
        forceAll = qe.forceAll;

        // query permitted to run
        if (forceAll || (queryString.length >= me.minChars)) {
            // expand before starting query so LoadMask can position itself correctly
            me.expand();

            // make sure they aren't querying the same thing
            if (!me.queryCaching || me.lastQuery !== queryString) {
                me.lastQuery = queryString;

                if (isLocalMode) {
                    // forceAll means no filtering - show whole dataset.
                    if (forceAll) {
                        store.clearFilter();
                    } else {
                        // Clear filter, but supress event so that the BoundList is not immediately updated.
                        store.clearFilter(true);
                        store.filter(me.displayField, queryString);
                    }
                } else {
                    // In queryMode: 'remote', we assume Store filters are added by the developer as remote filters,
                    // and these are automatically passed as params with every load call, so we do *not* call clearFilter.
                    store.load({
                        params: me.getParams(queryString)
                    });
                }
            }

            // Clear current selection if it does not match the current value in the field
            if (me.getRawValue() !== me.getDisplayValue()) {
                me.ignoreSelection++;
                me.picker.getSelectionModel().deselectAll();
                me.ignoreSelection--;
            }

            if (isLocalMode) {
                me.doAutoSelect();
            }
            if (me.typeAhead) {
                me.doTypeAhead();
            }
        }
        return true;
    },

    // private
    getParams: function(queryString) {
        var p = {},
            pageSize = this.pageSize,
            param = this.queryParam;

        if (param) {
            p[param] = queryString;
        }

        if (pageSize) {
            p.start = 0;
            p.limit = pageSize;
        }
        return p;
    },

    /**
     * @private
     * If the autoSelect config is true, and the picker is open, highlights the first item.
     */
    doAutoSelect: function() {
        var me = this,
            picker = me.picker,
            lastSelected, itemNode;
        if (picker && me.autoSelect && me.store.getCount() > 0) {
            // Highlight the last selected item and scroll it into view
            lastSelected = picker.getSelectionModel().lastSelected;
            itemNode = picker.getNode(lastSelected || 0);
            if (itemNode) {
                picker.highlightItem(itemNode);
                picker.listEl.scrollChildIntoView(itemNode, false);
            }
        }
    },

    doTypeAhead: function() {
        if (!this.typeAheadTask) {
            this.typeAheadTask = Ext.create('Ext.util.DelayedTask', this.onTypeAhead, this);
        }
        if (this.lastKey != Ext.EventObject.BACKSPACE && this.lastKey != Ext.EventObject.DELETE) {
            this.typeAheadTask.delay(this.typeAheadDelay);
        }
    },

    onTriggerClick: function() {
        var me = this;
        if (!me.readOnly && !me.disabled) {
            if (me.isExpanded) {
                me.collapse();
            } else {
                me.onFocus({});
                if (me.triggerAction === 'all') {
                    me.doQuery(me.allQuery, true);
                } else {
                    me.doQuery(me.getRawValue());
                }
            }
            me.inputEl.focus();
        }
    },


    // store the last key and doQuery if relevant
    onKeyUp: function(e, t) {
        var me = this,
            key = e.getKey();

        if (!me.readOnly && !me.disabled && me.editable) {
            me.lastKey = key;
            // we put this in a task so that we can cancel it if a user is
            // in and out before the queryDelay elapses

            // perform query w/ any normal key or backspace or delete
            if (!e.isSpecialKey() || key == e.BACKSPACE || key == e.DELETE) {
                me.doQueryTask.delay(me.queryDelay);
            }
        }

        if (me.enableKeyEvents) {
            me.callParent(arguments);
        }
    },

    initEvents: function() {
        var me = this;
        me.callParent();

        /*
         * Setup keyboard handling. If enableKeyEvents is true, we already have
         * a listener on the inputEl for keyup, so don't create a second.
         */
        if (!me.enableKeyEvents) {
            me.mon(me.inputEl, 'keyup', me.onKeyUp, me);
        }
    },

    createPicker: function() {
        var me = this,
            picker,
            menuCls = Ext.baseCSSPrefix + 'menu',
            opts = Ext.apply({
                selModel: {
                    mode: me.multiSelect ? 'SIMPLE' : 'SINGLE'
                },
                floating: true,
                hidden: true,
                ownerCt: me.ownerCt,
                cls: me.el.up('.' + menuCls) ? menuCls : '',
                store: me.store,
                displayField: me.displayField,
                focusOnToFront: false,
                pageSize: me.pageSize,
                tpl: me.tpl
            }, me.listConfig, me.defaultListConfig);

        picker = me.picker = Ext.create('Ext.view.BoundList', opts);

        me.mon(picker, {
            itemclick: me.onItemClick,
            refresh: me.onListRefresh,
            scope: me
        });

        me.mon(picker.getSelectionModel(), 'selectionchange', me.onListSelectionChange, me);

        return picker;
    },

    onListRefresh: function() {
        this.alignPicker();
        this.syncSelection();
    },

    onItemClick: function(picker, record){
        /*
         * If we're doing single selection, the selection change events won't fire when
         * clicking on the selected element. Detect it here.
         */
        var me = this,
            lastSelection = me.lastSelection,
            valueField = me.valueField,
            selected;

        if (!me.multiSelect && lastSelection) {
            selected = lastSelection[0];
            if (selected && (record.get(valueField) === selected.get(valueField))) {
                me.collapse();
            }
        }
    },

    onListSelectionChange: function(list, selectedRecords) {
        var me = this,
            isMulti = me.multiSelect,
            hasRecords = selectedRecords.length > 0;
        // Only react to selection if it is not called from setValue, and if our list is
        // expanded (ignores changes to the selection model triggered elsewhere)
        if (!me.ignoreSelection && me.isExpanded) {
            if (!isMulti) {
                Ext.defer(me.collapse, 1, me);
            }
            /*
             * Only set the value here if we're in multi selection mode or we have
             * a selection. Otherwise setValue will be called with an empty value
             * which will cause the change event to fire twice.
             */
            if (isMulti || hasRecords) {
                me.setValue(selectedRecords, false);
            }
            if (hasRecords) {
                me.fireEvent('select', me, selectedRecords);
            }
            me.inputEl.focus();
        }
    },

    /**
     * @private
     * Enables the key nav for the BoundList when it is expanded.
     */
    onExpand: function() {
        var me = this,
            keyNav = me.listKeyNav,
            selectOnTab = me.selectOnTab,
            picker = me.getPicker();

        // Handle BoundList navigation from the input field. Insert a tab listener specially to enable selectOnTab.
        if (keyNav) {
            keyNav.enable();
        } else {
            keyNav = me.listKeyNav = Ext.create('Ext.view.BoundListKeyNav', this.inputEl, {
                boundList: picker,
                forceKeyDown: true,
                tab: function(e) {
                    if (selectOnTab) {
                        this.selectHighlighted(e);
                        me.triggerBlur();
                    }
                    // Tab key event is allowed to propagate to field
                    return true;
                }
            });
        }

        // While list is expanded, stop tab monitoring from Ext.form.field.Trigger so it doesn't short-circuit selectOnTab
        if (selectOnTab) {
            me.ignoreMonitorTab = true;
        }

        Ext.defer(keyNav.enable, 1, keyNav); //wait a bit so it doesn't react to the down arrow opening the picker
        me.inputEl.focus();
    },

    /**
     * @private
     * Disables the key nav for the BoundList when it is collapsed.
     */
    onCollapse: function() {
        var me = this,
            keyNav = me.listKeyNav;
        if (keyNav) {
            keyNav.disable();
            me.ignoreMonitorTab = false;
        }
    },

    /**
     * Selects an item by a {@link Ext.data.Model Model}, or by a key value.
     * @param r
     */
    select: function(r) {
        this.setValue(r, true);
    },

    /**
     * Find the record by searching for a specific field/value combination
     * Returns an Ext.data.Record or false
     * @private
     */
    findRecord: function(field, value) {
        var ds = this.store,
            idx = ds.findExact(field, value);
        return idx !== -1 ? ds.getAt(idx) : false;
    },
    findRecordByValue: function(value) {
        return this.findRecord(this.valueField, value);
    },
    findRecordByDisplay: function(value) {
        return this.findRecord(this.displayField, value);
    },

    /**
     * Sets the specified value(s) into the field. For each value, if a record is found in the {@link #store} that
     * matches based on the {@link #valueField}, then that record's {@link #displayField} will be displayed in the
     * field.  If no match is found, and the {@link #valueNotFoundText} config option is defined, then that will be
     * displayed as the default field text. Otherwise a blank value will be shown, although the value will still be set.
     * @param {String|Array} value The value(s) to be set. Can be either a single String or {@link Ext.data.Model},
     * or an Array of Strings or Models.
     * @return {Ext.form.field.Field} this
     */
    setValue: function(value, doSelect) {
        var me = this,
            valueNotFoundText = me.valueNotFoundText,
            inputEl = me.inputEl,
            i, len, record,
            models = [],
            displayTplData = [],
            processedValue = [];

        if (me.store.loading) {
            // Called while the Store is loading. Ensure it is processed by the onLoad method.
            me.value = value;
            return me;
        }

        // This method processes multi-values, so ensure value is an array.
        value = Ext.Array.from(value);

        // Loop through values
        for (i = 0, len = value.length; i < len; i++) {
            record = value[i];
            if (!record || !record.isModel) {
                record = me.findRecordByValue(record);
            }
            // record found, select it.
            if (record) {
                models.push(record);
                displayTplData.push(record.data);
                processedValue.push(record.get(me.valueField));
            }
            // record was not found, this could happen because
            // store is not loaded or they set a value not in the store
            else {
                // if valueNotFoundText is defined, display it, otherwise display nothing for this value
                if (Ext.isDefined(valueNotFoundText)) {
                    displayTplData.push(valueNotFoundText);
                }
                processedValue.push(value[i]);
            }
        }

        // Set the value of this field. If we are multiselecting, then that is an array.
        me.value = me.multiSelect ? processedValue : processedValue[0];
        if (!Ext.isDefined(me.value)) {
            me.value = null;
        }
        me.displayTplData = displayTplData; //store for getDisplayValue method
        me.lastSelection = me.valueModels = models;

        if (inputEl && me.emptyText && !Ext.isEmpty(value)) {
            inputEl.removeCls(me.emptyCls);
        }

        // Calculate raw value from the collection of Model data
        me.setRawValue(me.getDisplayValue());
        me.checkChange();

        if (doSelect !== false) {
            me.syncSelection();
        }
        me.applyEmptyText();

        return me;
    },

    /**
     * @private Generate the string value to be displayed in the text field for the currently stored value
     */
    getDisplayValue: function() {
        return this.displayTpl.apply(this.displayTplData);
    },

    getValue: function() {
        // If the user has not changed the raw field value since a value was selected from the list,
        // then return the structured value from the selection. If the raw field value is different
        // than what would be displayed due to selection, return that raw value.
        var me = this,
            picker = me.picker,
            rawValue = me.getRawValue(), //current value of text field
            value = me.value; //stored value from last selection or setValue() call

        if (me.getDisplayValue() !== rawValue) {
            value = rawValue;
            me.value = me.displayTplData = me.valueModels = null;
            if (picker) {
                me.ignoreSelection++;
                picker.getSelectionModel().deselectAll();
                me.ignoreSelection--;
            }
        }

        return value;
    },

    getSubmitValue: function() {
        return this.getValue();
    },

    isEqual: function(v1, v2) {
        var fromArray = Ext.Array.from,
            i, len;

        v1 = fromArray(v1);
        v2 = fromArray(v2);
        len = v1.length;

        if (len !== v2.length) {
            return false;
        }

        for(i = 0; i < len; i++) {
            if (v2[i] !== v1[i]) {
                return false;
            }
        }

        return true;
    },

    /**
     * Clears any value currently set in the ComboBox.
     */
    clearValue: function() {
        this.setValue([]);
    },

    /**
     * @private Synchronizes the selection in the picker to match the current value of the combobox.
     */
    syncSelection: function() {
        var me = this,
            ExtArray = Ext.Array,
            picker = me.picker,
            selection, selModel;
        if (picker) {
            // From the value, find the Models that are in the store's current data
            selection = [];
            ExtArray.forEach(me.valueModels || [], function(value) {
                if (value && value.isModel && me.store.indexOf(value) >= 0) {
                    selection.push(value);
                }
            });

            // Update the selection to match
            me.ignoreSelection++;
            selModel = picker.getSelectionModel();
            selModel.deselectAll();
            if (selection.length) {
                selModel.select(selection);
            }
            me.ignoreSelection--;
        }
    }
});

