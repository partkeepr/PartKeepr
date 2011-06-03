/*
 * This is a derivative of the similarly named class in the YUI Library.
 * The original license:
 * Copyright (c) 2006, Yahoo! Inc. All rights reserved.
 * Code licensed under the BSD License:
 * http://developer.yahoo.net/yui/license.txt
 */


/**
 * @class Ext.dd.DragDropManager
 * DragDropManager is a singleton that tracks the element interaction for
 * all DragDrop items in the window.  Generally, you will not call
 * this class directly, but it does have helper methods that could
 * be useful in your DragDrop implementations.
 * @singleton
 */
Ext.define('Ext.dd.DragDropManager', {
    singleton: true,

    requires: ['Ext.util.Region'],

    uses: ['Ext.tip.QuickTipManager'],

    // shorter ClassName, to save bytes and use internally
    alternateClassName: ['Ext.dd.DragDropMgr', 'Ext.dd.DDM'],
    
    /**
     * Two dimensional Array of registered DragDrop objects.  The first
     * dimension is the DragDrop item group, the second the DragDrop
     * object.
     * @property ids
     * @type String[]
     * @private
     * @static
     */
    ids: {},

    /**
     * Array of element ids defined as drag handles.  Used to determine
     * if the element that generated the mousedown event is actually the
     * handle and not the html element itself.
     * @property handleIds
     * @type String[]
     * @private
     * @static
     */
    handleIds: {},

    /**
     * the DragDrop object that is currently being dragged
     * @property dragCurrent
     * @type DragDrop
     * @private
     * @static
     **/
    dragCurrent: null,

    /**
     * the DragDrop object(s) that are being hovered over
     * @property dragOvers
     * @type Array
     * @private
     * @static
     */
    dragOvers: {},

    /**
     * the X distance between the cursor and the object being dragged
     * @property deltaX
     * @type int
     * @private
     * @static
     */
    deltaX: 0,

    /**
     * the Y distance between the cursor and the object being dragged
     * @property deltaY
     * @type int
     * @private
     * @static
     */
    deltaY: 0,

    /**
     * Flag to determine if we should prevent the default behavior of the
     * events we define. By default this is true, but this can be set to
     * false if you need the default behavior (not recommended)
     * @property preventDefault
     * @type boolean
     * @static
     */
    preventDefault: true,

    /**
     * Flag to determine if we should stop the propagation of the events
     * we generate. This is true by default but you may want to set it to
     * false if the html element contains other features that require the
     * mouse click.
     * @property stopPropagation
     * @type boolean
     * @static
     */
    stopPropagation: true,

    /**
     * Internal flag that is set to true when drag and drop has been
     * intialized
     * @property initialized
     * @private
     * @static
     */
    initialized: false,

    /**
     * All drag and drop can be disabled.
     * @property locked
     * @private
     * @static
     */
    locked: false,

    /**
     * Called the first time an element is registered.
     * @method init
     * @private
     * @static
     */
    init: function() {
        this.initialized = true;
    },

    /**
     * In point mode, drag and drop interaction is defined by the
     * location of the cursor during the drag/drop
     * @property POINT
     * @type int
     * @static
     */
    POINT: 0,

    /**
     * In intersect mode, drag and drop interaction is defined by the
     * overlap of two or more drag and drop objects.
     * @property INTERSECT
     * @type int
     * @static
     */
    INTERSECT: 1,

    /**
     * The current drag and drop mode.  Default: POINT
     * @property mode
     * @type int
     * @static
     */
    mode: 0,

    /**
     * Runs method on all drag and drop objects
     * @method _execOnAll
     * @private
     * @static
     */
    _execOnAll: function(sMethod, args) {
        for (var i in this.ids) {
            for (var j in this.ids[i]) {
                var oDD = this.ids[i][j];
                if (! this.isTypeOfDD(oDD)) {
                    continue;
                }
                oDD[sMethod].apply(oDD, args);
            }
        }
    },

    /**
     * Drag and drop initialization.  Sets up the global event handlers
     * @method _onLoad
     * @private
     * @static
     */
    _onLoad: function() {

        this.init();

        var Event = Ext.EventManager;
        Event.on(document, "mouseup",   this.handleMouseUp, this, true);
        Event.on(document, "mousemove", this.handleMouseMove, this, true);
        Event.on(window,   "unload",    this._onUnload, this, true);
        Event.on(window,   "resize",    this._onResize, this, true);
        // Event.on(window,   "mouseout",    this._test);

    },

    /**
     * Reset constraints on all drag and drop objs
     * @method _onResize
     * @private
     * @static
     */
    _onResize: function(e) {
        this._execOnAll("resetConstraints", []);
    },

    /**
     * Lock all drag and drop functionality
     * @method lock
     * @static
     */
    lock: function() { this.locked = true; },

    /**
     * Unlock all drag and drop functionality
     * @method unlock
     * @static
     */
    unlock: function() { this.locked = false; },

    /**
     * Is drag and drop locked?
     * @method isLocked
     * @return {boolean} True if drag and drop is locked, false otherwise.
     * @static
     */
    isLocked: function() { return this.locked; },

    /**
     * Location cache that is set for all drag drop objects when a drag is
     * initiated, cleared when the drag is finished.
     * @property locationCache
     * @private
     * @static
     */
    locationCache: {},

    /**
     * Set useCache to false if you want to force object the lookup of each
     * drag and drop linked element constantly during a drag.
     * @property useCache
     * @type boolean
     * @static
     */
    useCache: true,

    /**
     * The number of pixels that the mouse needs to move after the
     * mousedown before the drag is initiated.  Default=3;
     * @property clickPixelThresh
     * @type int
     * @static
     */
    clickPixelThresh: 3,

    /**
     * The number of milliseconds after the mousedown event to initiate the
     * drag if we don't get a mouseup event. Default=350
     * @property clickTimeThresh
     * @type int
     * @static
     */
    clickTimeThresh: 350,

    /**
     * Flag that indicates that either the drag pixel threshold or the
     * mousdown time threshold has been met
     * @property dragThreshMet
     * @type boolean
     * @private
     * @static
     */
    dragThreshMet: false,

    /**
     * Timeout used for the click time threshold
     * @property clickTimeout
     * @type Object
     * @private
     * @static
     */
    clickTimeout: null,

    /**
     * The X position of the mousedown event stored for later use when a
     * drag threshold is met.
     * @property startX
     * @type int
     * @private
     * @static
     */
    startX: 0,

    /**
     * The Y position of the mousedown event stored for later use when a
     * drag threshold is met.
     * @property startY
     * @type int
     * @private
     * @static
     */
    startY: 0,

    /**
     * Each DragDrop instance must be registered with the DragDropManager.
     * This is executed in DragDrop.init()
     * @method regDragDrop
     * @param {DragDrop} oDD the DragDrop object to register
     * @param {String} sGroup the name of the group this element belongs to
     * @static
     */
    regDragDrop: function(oDD, sGroup) {
        if (!this.initialized) { this.init(); }

        if (!this.ids[sGroup]) {
            this.ids[sGroup] = {};
        }
        this.ids[sGroup][oDD.id] = oDD;
    },

    /**
     * Removes the supplied dd instance from the supplied group. Executed
     * by DragDrop.removeFromGroup, so don't call this function directly.
     * @method removeDDFromGroup
     * @private
     * @static
     */
    removeDDFromGroup: function(oDD, sGroup) {
        if (!this.ids[sGroup]) {
            this.ids[sGroup] = {};
        }

        var obj = this.ids[sGroup];
        if (obj && obj[oDD.id]) {
            delete obj[oDD.id];
        }
    },

    /**
     * Unregisters a drag and drop item.  This is executed in
     * DragDrop.unreg, use that method instead of calling this directly.
     * @method _remove
     * @private
     * @static
     */
    _remove: function(oDD) {
        for (var g in oDD.groups) {
            if (g && this.ids[g] && this.ids[g][oDD.id]) {
                delete this.ids[g][oDD.id];
            }
        }
        delete this.handleIds[oDD.id];
    },

    /**
     * Each DragDrop handle element must be registered.  This is done
     * automatically when executing DragDrop.setHandleElId()
     * @method regHandle
     * @param {String} sDDId the DragDrop id this element is a handle for
     * @param {String} sHandleId the id of the element that is the drag
     * handle
     * @static
     */
    regHandle: function(sDDId, sHandleId) {
        if (!this.handleIds[sDDId]) {
            this.handleIds[sDDId] = {};
        }
        this.handleIds[sDDId][sHandleId] = sHandleId;
    },

    /**
     * Utility function to determine if a given element has been
     * registered as a drag drop item.
     * @method isDragDrop
     * @param {String} id the element id to check
     * @return {boolean} true if this element is a DragDrop item,
     * false otherwise
     * @static
     */
    isDragDrop: function(id) {
        return ( this.getDDById(id) ) ? true : false;
    },

    /**
     * Returns the drag and drop instances that are in all groups the
     * passed in instance belongs to.
     * @method getRelated
     * @param {DragDrop} p_oDD the obj to get related data for
     * @param {boolean} bTargetsOnly if true, only return targetable objs
     * @return {DragDrop[]} the related instances
     * @static
     */
    getRelated: function(p_oDD, bTargetsOnly) {
        var oDDs = [];
        for (var i in p_oDD.groups) {
            for (var j in this.ids[i]) {
                var dd = this.ids[i][j];
                if (! this.isTypeOfDD(dd)) {
                    continue;
                }
                if (!bTargetsOnly || dd.isTarget) {
                    oDDs[oDDs.length] = dd;
                }
            }
        }

        return oDDs;
    },

    /**
     * Returns true if the specified dd target is a legal target for
     * the specifice drag obj
     * @method isLegalTarget
     * @param {DragDrop} oDD the drag obj
     * @param {DragDrop} oTargetDD the target
     * @return {boolean} true if the target is a legal target for the
     * dd obj
     * @static
     */
    isLegalTarget: function (oDD, oTargetDD) {
        var targets = this.getRelated(oDD, true);
        for (var i=0, len=targets.length;i<len;++i) {
            if (targets[i].id == oTargetDD.id) {
                return true;
            }
        }

        return false;
    },

    /**
     * My goal is to be able to transparently determine if an object is
     * typeof DragDrop, and the exact subclass of DragDrop.  typeof
     * returns "object", oDD.constructor.toString() always returns
     * "DragDrop" and not the name of the subclass.  So for now it just
     * evaluates a well-known variable in DragDrop.
     * @method isTypeOfDD
     * @param {Object} the object to evaluate
     * @return {boolean} true if typeof oDD = DragDrop
     * @static
     */
    isTypeOfDD: function (oDD) {
        return (oDD && oDD.__ygDragDrop);
    },

    /**
     * Utility function to determine if a given element has been
     * registered as a drag drop handle for the given Drag Drop object.
     * @method isHandle
     * @param {String} id the element id to check
     * @return {boolean} true if this element is a DragDrop handle, false
     * otherwise
     * @static
     */
    isHandle: function(sDDId, sHandleId) {
        return ( this.handleIds[sDDId] &&
                        this.handleIds[sDDId][sHandleId] );
    },

    /**
     * Returns the DragDrop instance for a given id
     * @method getDDById
     * @param {String} id the id of the DragDrop object
     * @return {DragDrop} the drag drop object, null if it is not found
     * @static
     */
    getDDById: function(id) {
        for (var i in this.ids) {
            if (this.ids[i][id]) {
                return this.ids[i][id];
            }
        }
        return null;
    },

    /**
     * Fired after a registered DragDrop object gets the mousedown event.
     * Sets up the events required to track the object being dragged
     * @method handleMouseDown
     * @param {Event} e the event
     * @param oDD the DragDrop object being dragged
     * @private
     * @static
     */
    handleMouseDown: function(e, oDD) {
        if(Ext.tip.QuickTipManager){
            Ext.tip.QuickTipManager.ddDisable();
        }
        if(this.dragCurrent){
            // the original browser mouseup wasn't handled (e.g. outside FF browser window)
            // so clean up first to avoid breaking the next drag
            this.handleMouseUp(e);
        }
        
        this.currentTarget = e.getTarget();
        this.dragCurrent = oDD;

        var el = oDD.getEl();

        // track start position
        this.startX = e.getPageX();
        this.startY = e.getPageY();

        this.deltaX = this.startX - el.offsetLeft;
        this.deltaY = this.startY - el.offsetTop;

        this.dragThreshMet = false;

        this.clickTimeout = setTimeout(
                function() {
                    var DDM = Ext.dd.DragDropManager;
                    DDM.startDrag(DDM.startX, DDM.startY);
                },
                this.clickTimeThresh );
    },

    /**
     * Fired when either the drag pixel threshol or the mousedown hold
     * time threshold has been met.
     * @method startDrag
     * @param x {int} the X position of the original mousedown
     * @param y {int} the Y position of the original mousedown
     * @static
     */
    startDrag: function(x, y) {
        clearTimeout(this.clickTimeout);
        if (this.dragCurrent) {
            this.dragCurrent.b4StartDrag(x, y);
            this.dragCurrent.startDrag(x, y);
        }
        this.dragThreshMet = true;
    },

    /**
     * Internal function to handle the mouseup event.  Will be invoked
     * from the context of the document.
     * @method handleMouseUp
     * @param {Event} e the event
     * @private
     * @static
     */
    handleMouseUp: function(e) {

        if(Ext.tip.QuickTipManager){
            Ext.tip.QuickTipManager.ddEnable();
        }
        if (! this.dragCurrent) {
            return;
        }

        clearTimeout(this.clickTimeout);

        if (this.dragThreshMet) {
            this.fireEvents(e, true);
        } else {
        }

        this.stopDrag(e);

        this.stopEvent(e);
    },

    /**
     * Utility to stop event propagation and event default, if these
     * features are turned on.
     * @method stopEvent
     * @param {Event} e the event as returned by this.getEvent()
     * @static
     */
    stopEvent: function(e){
        if(this.stopPropagation) {
            e.stopPropagation();
        }

        if (this.preventDefault) {
            e.preventDefault();
        }
    },

    /**
     * Internal function to clean up event handlers after the drag
     * operation is complete
     * @method stopDrag
     * @param {Event} e the event
     * @private
     * @static
     */
    stopDrag: function(e) {
        // Fire the drag end event for the item that was dragged
        if (this.dragCurrent) {
            if (this.dragThreshMet) {
                this.dragCurrent.b4EndDrag(e);
                this.dragCurrent.endDrag(e);
            }

            this.dragCurrent.onMouseUp(e);
        }

        this.dragCurrent = null;
        this.dragOvers = {};
    },

    /**
     * Internal function to handle the mousemove event.  Will be invoked
     * from the context of the html element.
     *
     * @TODO figure out what we can do about mouse events lost when the
     * user drags objects beyond the window boundary.  Currently we can
     * detect this in internet explorer by verifying that the mouse is
     * down during the mousemove event.  Firefox doesn't give us the
     * button state on the mousemove event.
     * @method handleMouseMove
     * @param {Event} e the event
     * @private
     * @static
     */
    handleMouseMove: function(e) {
        if (! this.dragCurrent) {
            return true;
        }
        // var button = e.which || e.button;

        // check for IE mouseup outside of page boundary
        if (Ext.isIE && (e.button !== 0 && e.button !== 1 && e.button !== 2)) {
            this.stopEvent(e);
            return this.handleMouseUp(e);
        }

        if (!this.dragThreshMet) {
            var diffX = Math.abs(this.startX - e.getPageX());
            var diffY = Math.abs(this.startY - e.getPageY());
            if (diffX > this.clickPixelThresh ||
                        diffY > this.clickPixelThresh) {
                this.startDrag(this.startX, this.startY);
            }
        }

        if (this.dragThreshMet) {
            this.dragCurrent.b4Drag(e);
            this.dragCurrent.onDrag(e);
            if(!this.dragCurrent.moveOnly){
                this.fireEvents(e, false);
            }
        }

        this.stopEvent(e);

        return true;
    },

    /**
     * Iterates over all of the DragDrop elements to find ones we are
     * hovering over or dropping on
     * @method fireEvents
     * @param {Event} e the event
     * @param {boolean} isDrop is this a drop op or a mouseover op?
     * @private
     * @static
     */
    fireEvents: function(e, isDrop) {
        var dc = this.dragCurrent;

        // If the user did the mouse up outside of the window, we could
        // get here even though we have ended the drag.
        if (!dc || dc.isLocked()) {
            return;
        }

        var pt = e.getPoint();

        // cache the previous dragOver array
        var oldOvers = [];

        var outEvts   = [];
        var overEvts  = [];
        var dropEvts  = [];
        var enterEvts = [];

        // Check to see if the object(s) we were hovering over is no longer
        // being hovered over so we can fire the onDragOut event
        for (var i in this.dragOvers) {

            var ddo = this.dragOvers[i];

            if (! this.isTypeOfDD(ddo)) {
                continue;
            }

            if (! this.isOverTarget(pt, ddo, this.mode)) {
                outEvts.push( ddo );
            }

            oldOvers[i] = true;
            delete this.dragOvers[i];
        }

        for (var sGroup in dc.groups) {

            if ("string" != typeof sGroup) {
                continue;
            }

            for (i in this.ids[sGroup]) {
                var oDD = this.ids[sGroup][i];
                if (! this.isTypeOfDD(oDD)) {
                    continue;
                }

                if (oDD.isTarget && !oDD.isLocked() && ((oDD != dc) || (dc.ignoreSelf === false))) {
                    if (this.isOverTarget(pt, oDD, this.mode)) {
                        // look for drop interactions
                        if (isDrop) {
                            dropEvts.push( oDD );
                        // look for drag enter and drag over interactions
                        } else {

                            // initial drag over: dragEnter fires
                            if (!oldOvers[oDD.id]) {
                                enterEvts.push( oDD );
                            // subsequent drag overs: dragOver fires
                            } else {
                                overEvts.push( oDD );
                            }

                            this.dragOvers[oDD.id] = oDD;
                        }
                    }
                }
            }
        }

        if (this.mode) {
            if (outEvts.length) {
                dc.b4DragOut(e, outEvts);
                dc.onDragOut(e, outEvts);
            }

            if (enterEvts.length) {
                dc.onDragEnter(e, enterEvts);
            }

            if (overEvts.length) {
                dc.b4DragOver(e, overEvts);
                dc.onDragOver(e, overEvts);
            }

            if (dropEvts.length) {
                dc.b4DragDrop(e, dropEvts);
                dc.onDragDrop(e, dropEvts);
            }

        } else {
            // fire dragout events
            var len = 0;
            for (i=0, len=outEvts.length; i<len; ++i) {
                dc.b4DragOut(e, outEvts[i].id);
                dc.onDragOut(e, outEvts[i].id);
            }

            // fire enter events
            for (i=0,len=enterEvts.length; i<len; ++i) {
                // dc.b4DragEnter(e, oDD.id);
                dc.onDragEnter(e, enterEvts[i].id);
            }

            // fire over events
            for (i=0,len=overEvts.length; i<len; ++i) {
                dc.b4DragOver(e, overEvts[i].id);
                dc.onDragOver(e, overEvts[i].id);
            }

            // fire drop events
            for (i=0, len=dropEvts.length; i<len; ++i) {
                dc.b4DragDrop(e, dropEvts[i].id);
                dc.onDragDrop(e, dropEvts[i].id);
            }

        }

        // notify about a drop that did not find a target
        if (isDrop && !dropEvts.length) {
            dc.onInvalidDrop(e);
        }

    },

    /**
     * Helper function for getting the best match from the list of drag
     * and drop objects returned by the drag and drop events when we are
     * in INTERSECT mode.  It returns either the first object that the
     * cursor is over, or the object that has the greatest overlap with
     * the dragged element.
     * @method getBestMatch
     * @param  {DragDrop[]} dds The array of drag and drop objects
     * targeted
     * @return {DragDrop}       The best single match
     * @static
     */
    getBestMatch: function(dds) {
        var winner = null;
        // Return null if the input is not what we expect
        //if (!dds || !dds.length || dds.length == 0) {
           // winner = null;
        // If there is only one item, it wins
        //} else if (dds.length == 1) {

        var len = dds.length;

        if (len == 1) {
            winner = dds[0];
        } else {
            // Loop through the targeted items
            for (var i=0; i<len; ++i) {
                var dd = dds[i];
                // If the cursor is over the object, it wins.  If the
                // cursor is over multiple matches, the first one we come
                // to wins.
                if (dd.cursorIsOver) {
                    winner = dd;
                    break;
                // Otherwise the object with the most overlap wins
                } else {
                    if (!winner ||
                        winner.overlap.getArea() < dd.overlap.getArea()) {
                        winner = dd;
                    }
                }
            }
        }

        return winner;
    },

    /**
     * Refreshes the cache of the top-left and bottom-right points of the
     * drag and drop objects in the specified group(s).  This is in the
     * format that is stored in the drag and drop instance, so typical
     * usage is:
     * <code>
     * Ext.dd.DragDropManager.refreshCache(ddinstance.groups);
     * </code>
     * Alternatively:
     * <code>
     * Ext.dd.DragDropManager.refreshCache({group1:true, group2:true});
     * </code>
     * @TODO this really should be an indexed array.  Alternatively this
     * method could accept both.
     * @method refreshCache
     * @param {Object} groups an associative array of groups to refresh
     * @static
     */
    refreshCache: function(groups) {
        for (var sGroup in groups) {
            if ("string" != typeof sGroup) {
                continue;
            }
            for (var i in this.ids[sGroup]) {
                var oDD = this.ids[sGroup][i];

                if (this.isTypeOfDD(oDD)) {
                // if (this.isTypeOfDD(oDD) && oDD.isTarget) {
                    var loc = this.getLocation(oDD);
                    if (loc) {
                        this.locationCache[oDD.id] = loc;
                    } else {
                        delete this.locationCache[oDD.id];
                        // this will unregister the drag and drop object if
                        // the element is not in a usable state
                        // oDD.unreg();
                    }
                }
            }
        }
    },

    /**
     * This checks to make sure an element exists and is in the DOM.  The
     * main purpose is to handle cases where innerHTML is used to remove
     * drag and drop objects from the DOM.  IE provides an 'unspecified
     * error' when trying to access the offsetParent of such an element
     * @method verifyEl
     * @param {HTMLElement} el the element to check
     * @return {boolean} true if the element looks usable
     * @static
     */
    verifyEl: function(el) {
        if (el) {
            var parent;
            if(Ext.isIE){
                try{
                    parent = el.offsetParent;
                }catch(e){}
            }else{
                parent = el.offsetParent;
            }
            if (parent) {
                return true;
            }
        }

        return false;
    },

    /**
     * Returns a Region object containing the drag and drop element's position
     * and size, including the padding configured for it
     * @method getLocation
     * @param {DragDrop} oDD the drag and drop object to get the
     *                       location for
     * @return {Ext.util.Region} a Region object representing the total area
     *                             the element occupies, including any padding
     *                             the instance is configured for.
     * @static
     */
    getLocation: function(oDD) {
        if (! this.isTypeOfDD(oDD)) {
            return null;
        }

        //delegate getLocation method to the
        //drag and drop target.
        if (oDD.getRegion) {
            return oDD.getRegion();
        }

        var el = oDD.getEl(), pos, x1, x2, y1, y2, t, r, b, l;

        try {
            pos= Ext.core.Element.getXY(el);
        } catch (e) { }

        if (!pos) {
            return null;
        }

        x1 = pos[0];
        x2 = x1 + el.offsetWidth;
        y1 = pos[1];
        y2 = y1 + el.offsetHeight;

        t = y1 - oDD.padding[0];
        r = x2 + oDD.padding[1];
        b = y2 + oDD.padding[2];
        l = x1 - oDD.padding[3];

        return Ext.create('Ext.util.Region', t, r, b, l);
    },

    /**
     * Checks the cursor location to see if it over the target
     * @method isOverTarget
     * @param {Ext.util.Point} pt The point to evaluate
     * @param {DragDrop} oTarget the DragDrop object we are inspecting
     * @return {boolean} true if the mouse is over the target
     * @private
     * @static
     */
    isOverTarget: function(pt, oTarget, intersect) {
        // use cache if available
        var loc = this.locationCache[oTarget.id];
        if (!loc || !this.useCache) {
            loc = this.getLocation(oTarget);
            this.locationCache[oTarget.id] = loc;

        }

        if (!loc) {
            return false;
        }

        oTarget.cursorIsOver = loc.contains( pt );

        // DragDrop is using this as a sanity check for the initial mousedown
        // in this case we are done.  In POINT mode, if the drag obj has no
        // contraints, we are also done. Otherwise we need to evaluate the
        // location of the target as related to the actual location of the
        // dragged element.
        var dc = this.dragCurrent;
        if (!dc || !dc.getTargetCoord ||
                (!intersect && !dc.constrainX && !dc.constrainY)) {
            return oTarget.cursorIsOver;
        }

        oTarget.overlap = null;

        // Get the current location of the drag element, this is the
        // location of the mouse event less the delta that represents
        // where the original mousedown happened on the element.  We
        // need to consider constraints and ticks as well.
        var pos = dc.getTargetCoord(pt.x, pt.y);

        var el = dc.getDragEl();
        var curRegion = Ext.create('Ext.util.Region', pos.y,
                                               pos.x + el.offsetWidth,
                                               pos.y + el.offsetHeight,
                                               pos.x );

        var overlap = curRegion.intersect(loc);

        if (overlap) {
            oTarget.overlap = overlap;
            return (intersect) ? true : oTarget.cursorIsOver;
        } else {
            return false;
        }
    },

    /**
     * unload event handler
     * @method _onUnload
     * @private
     * @static
     */
    _onUnload: function(e, me) {
        Ext.dd.DragDropManager.unregAll();
    },

    /**
     * Cleans up the drag and drop events and objects.
     * @method unregAll
     * @private
     * @static
     */
    unregAll: function() {

        if (this.dragCurrent) {
            this.stopDrag();
            this.dragCurrent = null;
        }

        this._execOnAll("unreg", []);

        for (var i in this.elementCache) {
            delete this.elementCache[i];
        }

        this.elementCache = {};
        this.ids = {};
    },

    /**
     * A cache of DOM elements
     * @property elementCache
     * @private
     * @static
     */
    elementCache: {},

    /**
     * Get the wrapper for the DOM element specified
     * @method getElWrapper
     * @param {String} id the id of the element to get
     * @return {Ext.dd.DDM.ElementWrapper} the wrapped element
     * @private
     * @deprecated This wrapper isn't that useful
     * @static
     */
    getElWrapper: function(id) {
        var oWrapper = this.elementCache[id];
        if (!oWrapper || !oWrapper.el) {
            oWrapper = this.elementCache[id] =
                new this.ElementWrapper(Ext.getDom(id));
        }
        return oWrapper;
    },

    /**
     * Returns the actual DOM element
     * @method getElement
     * @param {String} id the id of the elment to get
     * @return {Object} The element
     * @deprecated use Ext.lib.Ext.getDom instead
     * @static
     */
    getElement: function(id) {
        return Ext.getDom(id);
    },

    /**
     * Returns the style property for the DOM element (i.e.,
     * document.getElById(id).style)
     * @method getCss
     * @param {String} id the id of the elment to get
     * @return {Object} The style property of the element
     * @static
     */
    getCss: function(id) {
        var el = Ext.getDom(id);
        return (el) ? el.style : null;
    },

    /**
     * Inner class for cached elements
     * @class Ext.dd.DragDropManager.ElementWrapper
     * @for DragDropManager
     * @private
     * @deprecated
     */
    ElementWrapper: function(el) {
            /**
             * The element
             * @property el
             */
            this.el = el || null;
            /**
             * The element id
             * @property id
             */
            this.id = this.el && el.id;
            /**
             * A reference to the style property
             * @property css
             */
            this.css = this.el && el.style;
        },

    /**
     * Returns the X position of an html element
     * @method getPosX
     * @param el the element for which to get the position
     * @return {int} the X coordinate
     * @for DragDropManager
     * @static
     */
    getPosX: function(el) {
        return Ext.core.Element.getX(el);
    },

    /**
     * Returns the Y position of an html element
     * @method getPosY
     * @param el the element for which to get the position
     * @return {int} the Y coordinate
     * @static
     */
    getPosY: function(el) {
        return Ext.core.Element.getY(el);
    },

    /**
     * Swap two nodes.  In IE, we use the native method, for others we
     * emulate the IE behavior
     * @method swapNode
     * @param n1 the first node to swap
     * @param n2 the other node to swap
     * @static
     */
    swapNode: function(n1, n2) {
        if (n1.swapNode) {
            n1.swapNode(n2);
        } else {
            var p = n2.parentNode;
            var s = n2.nextSibling;

            if (s == n1) {
                p.insertBefore(n1, n2);
            } else if (n2 == n1.nextSibling) {
                p.insertBefore(n2, n1);
            } else {
                n1.parentNode.replaceChild(n2, n1);
                p.insertBefore(n1, s);
            }
        }
    },

    /**
     * Returns the current scroll position
     * @method getScroll
     * @private
     * @static
     */
    getScroll: function () {
        var doc   = window.document,
            docEl = doc.documentElement,
            body  = doc.body,
            top   = 0,
            left  = 0;
            
        if (Ext.isGecko4) {
            top  = window.scrollYOffset;
            left = window.scrollXOffset;
        } else {
            if (docEl && (docEl.scrollTop || docEl.scrollLeft)) {
                top  = docEl.scrollTop;
                left = docEl.scrollLeft;
            } else if (body) {
                top  = body.scrollTop;
                left = body.scrollLeft;
            } 
        }
        return {
            top: top,
            left: left
        };
    },

    /**
     * Returns the specified element style property
     * @method getStyle
     * @param {HTMLElement} el          the element
     * @param {string}      styleProp   the style property
     * @return {string} The value of the style property
     * @static
     */
    getStyle: function(el, styleProp) {
        return Ext.fly(el).getStyle(styleProp);
    },

    /**
     * Gets the scrollTop
     * @method getScrollTop
     * @return {int} the document's scrollTop
     * @static
     */
    getScrollTop: function () {
        return this.getScroll().top;
    },

    /**
     * Gets the scrollLeft
     * @method getScrollLeft
     * @return {int} the document's scrollTop
     * @static
     */
    getScrollLeft: function () {
        return this.getScroll().left;
    },

    /**
     * Sets the x/y position of an element to the location of the
     * target element.
     * @method moveToEl
     * @param {HTMLElement} moveEl      The element to move
     * @param {HTMLElement} targetEl    The position reference element
     * @static
     */
    moveToEl: function (moveEl, targetEl) {
        var aCoord = Ext.core.Element.getXY(targetEl);
        Ext.core.Element.setXY(moveEl, aCoord);
    },

    /**
     * Numeric array sort function
     * @method numericSort
     * @static
     */
    numericSort: function(a, b) {
        return (a - b);
    },

    /**
     * Internal counter
     * @property _timeoutCount
     * @private
     * @static
     */
    _timeoutCount: 0,

    /**
     * Trying to make the load order less important.  Without this we get
     * an error if this file is loaded before the Event Utility.
     * @method _addListeners
     * @private
     * @static
     */
    _addListeners: function() {
        if ( document ) {
            this._onLoad();
        } else {
            if (this._timeoutCount > 2000) {
            } else {
                setTimeout(this._addListeners, 10);
                if (document && document.body) {
                    this._timeoutCount += 1;
                }
            }
        }
    },

    /**
     * Recursively searches the immediate parent and all child nodes for
     * the handle element in order to determine wheter or not it was
     * clicked.
     * @method handleWasClicked
     * @param node the html element to inspect
     * @static
     */
    handleWasClicked: function(node, id) {
        if (this.isHandle(id, node.id)) {
            return true;
        } else {
            // check to see if this is a text node child of the one we want
            var p = node.parentNode;

            while (p) {
                if (this.isHandle(id, p.id)) {
                    return true;
                } else {
                    p = p.parentNode;
                }
            }
        }

        return false;
    }
}, function() {
    this._addListeners();
});
