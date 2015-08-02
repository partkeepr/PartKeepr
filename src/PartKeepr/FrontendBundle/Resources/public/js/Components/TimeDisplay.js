Ext.define('PartKeepr.TimeDisplay', {
    extend: 'Ext.Toolbar.TextItem',

    /**
     * Holds the time update task
     * @var object
     */
    updateTimeTask: null,

    /**
     * Holds the layout task
     * @var object
     */
    updateLayoutTask: null,

    /**
     * Stores the currently assigned date format
     * @var string
     */
    dateFormat: null,

    /**
     * Inits the component. Sets up two timers for updating the time and updating the widget's layout.
     *
     * @param none
     * @return nothing
     */
    initComponent: function ()
    {
        this.callParent();

        this.dateFormat = Ext.getDateFormat();

        this.updateTimeTask = {
            run: this.updateTime,
            interval: 280, // Update every 280ms. This is NOT 1 second due to overhead, causing skipping seconds
            scope: this
        };
    },
    /**
     * Start both updating tasks just before rendering starts.
     * @param none
     * @return nothing
     */
    beforeRender: function ()
    {
        this.callParent();
        Ext.TaskManager.start(this.updateTimeTask);
    },
    /**
     * Updates the time. Avoids setText because it's slow.
     *
     * @param none
     * @return nothing
     */
    updateTime: function ()
    {
        var dt = new Date();

        var format = Ext.getDateFormat();
        var string = Ext.Date.format(dt, format);

        this.el.update(string);
    },
    /**
     * When the widget is removed, destroy both tasks.
     *
     * @param none
     * @return nothing
     */
    onDestroy: function ()
    {
        Ext.TaskManager.stop(this.updateTimeTask);
    }
});

