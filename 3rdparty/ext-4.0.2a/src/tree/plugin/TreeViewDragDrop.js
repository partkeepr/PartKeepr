/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.tree.ViewDDPlugin
 * @extends Ext.AbstractPlugin
 * <p>This plugin provides drag and/or drop functionality for a TreeView.</p>
 * <p>It creates a specialized instance of {@link Ext.dd.DragZone DragZone} which knows how to drag out of a {@link Ext.tree.View TreeView}
 * and loads the data object which is passed to a cooperating {@link Ext.dd.DragZone DragZone}'s methods with the following properties:<ul>
 * <li>copy : Boolean
 *  <div class="sub-desc">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured
 *  with <code>allowCopy: true</code> <u>and</u> the control key was pressed when the drag operation was begun.</div></li>
 * <li>view : TreeView
 *  <div class="sub-desc">The source TreeView from which the drag originated.</div></li>
 * <li>ddel : HtmlElement
 *  <div class="sub-desc">The drag proxy element which moves with the mouse</div></li>
 * <li>item : HtmlElement
 *  <div class="sub-desc">The TreeView node upon which the mousedown event was registered.</div></li>
 * <li>records : Array
 *  <div class="sub-desc">An Array of {@link Ext.data.Model Model}s representing the selected data being dragged from the source TreeView.</div></li>
 * </ul></p>
 * <p>It also creates a specialized instance of {@link Ext.dd.DropZone} which cooperates with other DropZones which are members of the same
 * ddGroup which processes such data objects.</p>
 * <p>Adding this plugin to a view means that two new events may be fired from the client TreeView, <code>{@link #event-beforedrop beforedrop}</code> and
 * <code>{@link #event-drop drop}</code></p>
 */
Ext.define('Ext.tree.plugin.TreeViewDragDrop', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.treeviewdragdrop',

    uses: [
        'Ext.tree.ViewDragZone',
        'Ext.tree.ViewDropZone'
    ],

    /**
     * @event beforedrop
     * <p><b>This event is fired through the TreeView. Add listeners to the TreeView object</b></p>
     * <p>Fired when a drop gesture has been triggered by a mouseup event in a valid drop position in the TreeView.
     * @param {HtmlElement} node The TreeView node <b>if any</b> over which the mouse was positioned.</p>
     * <p>Returning <code>false</code> to this event signals that the drop gesture was invalid, and if the drag proxy
     * will animate back to the point from which the drag began.</p>
     * <p>Returning <code>0</code> To this event signals that the data transfer operation should not take place, but
     * that the gesture was valid, and that the repair operation should not take place.</p>
     * <p>Any other return value continues with the data transfer operation.</p>
     * @param {Object} data The data object gathered at mousedown time by the cooperating {@link Ext.dd.DragZone DragZone}'s
     * {@link Ext.dd.DragZone#getDragData getDragData} method it contains the following properties:<ul>
     * <li>copy : Boolean
     *  <div class="sub-desc">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured
     *  with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>
     * <li>view : TreeView
     *  <div class="sub-desc">The source TreeView from which the drag originated.</div></li>
     * <li>ddel : HtmlElement
     *  <div class="sub-desc">The drag proxy element which moves with the mouse</div></li>
     * <li>item : HtmlElement
     *  <div class="sub-desc">The TreeView node upon which the mousedown event was registered.</div></li>
     * <li>records : Array
     *  <div class="sub-desc">An Array of {@link Ext.data.Model Model}s representing the selected data being dragged from the source TreeView.</div></li>
     * </ul>
     * @param {Ext.data.Model} overModel The Model over which the drop gesture took place.
     * @param {String} dropPosition <code>"before"</code>, <code>"after"</code> or <code>"append"</code> depending on whether the mouse is above or below the midline of the node,
     * or the node is a branch node which accepts new child nodes.
     * @param {Function} dropFunction <p>A function to call to complete the data transfer operation and either move or copy Model instances from the source
     * View's Store to the destination View's Store.</p>
     * <p>This is useful when you want to perform some kind of asynchronous processing before confirming
     * the drop, such as an {@link Ext.window.MessageBox#confirm confirm} call, or an Ajax request.</p>
     * <p>Return <code>0</code> from this event handler, and call the <code>dropFunction</code> at any time to perform the data transfer.</p>
     */

    /**
     * @event drop
     * <b>This event is fired through the TreeView. Add listeners to the TreeView object</b>
     * Fired when a drop operation has been completed and the data has been moved or copied.
     * @param {HtmlElement} node The TreeView node <b>if any</b> over which the mouse was positioned.
     * @param {Object} data The data object gathered at mousedown time by the cooperating {@link Ext.dd.DragZone DragZone}'s
     * {@link Ext.dd.DragZone#getDragData getDragData} method it contains the following properties:<ul>
     * <li>copy : Boolean
     *  <div class="sub-desc">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured
     *  with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>
     * <li>view : TreeView
     *  <div class="sub-desc">The source TreeView from which the drag originated.</div></li>
     * <li>ddel : HtmlElement
     *  <div class="sub-desc">The drag proxy element which moves with the mouse</div></li>
     * <li>item : HtmlElement
     *  <div class="sub-desc">The TreeView node upon which the mousedown event was registered.</div></li>
     * <li>records : Array
     *  <div class="sub-desc">An Array of {@link Ext.data.Model Model}s representing the selected data being dragged from the source TreeView.</div></li>
     * </ul>
     * @param {Ext.data.Model} overModel The Model over which the drop gesture took place.
     * @param {String} dropPosition <code>"before"</code>, <code>"after"</code> or <code>"append"</code> depending on whether the mouse is above or below the midline of the node,
     * or the node is a branch node which accepts new child nodes.
     */

    dragText : '{0} selected node{1}',

    /**
     * @cfg {Boolean} allowParentInsert
     * Allow inserting a dragged node between an expanded parent node and its first child that will become a
     * sibling of the parent when dropped (defaults to false)
     */
    allowParentInserts: false,

    /**
     * @cfg {String} allowContainerDrop
     * True if drops on the tree container (outside of a specific tree node) are allowed (defaults to false)
     */
    allowContainerDrops: false,

    /**
     * @cfg {String} appendOnly
     * True if the tree should only allow append drops (use for trees which are sorted, defaults to false)
     */
    appendOnly: false,

    /**
     * @cfg {String} ddGroup
     * A named drag drop group to which this object belongs.  If a group is specified, then both the DragZones and DropZone
     * used by this plugin will only interact with other drag drop objects in the same group (defaults to 'TreeDD').
     */
    ddGroup : "TreeDD",

    /**
     * @cfg {String} dragGroup
     * <p>The ddGroup to which the DragZone will belong.</p>
     * <p>This defines which other DropZones the DragZone will interact with. Drag/DropZones only interact with other Drag/DropZones
     * which are members of the same ddGroup.</p>
     */

    /**
     * @cfg {String} dropGroup
     * <p>The ddGroup to which the DropZone will belong.</p>
     * <p>This defines which other DragZones the DropZone will interact with. Drag/DropZones only interact with other Drag/DropZones
     * which are members of the same ddGroup.</p>
     */

    /**
     * @cfg {String} expandDelay
     * The delay in milliseconds to wait before expanding a target tree node while dragging a droppable node
     * over the target (defaults to 1000)
     */
    expandDelay : 1000,

    /**
     * @cfg {Boolean} enableDrop
     * <p>Defaults to <code>true</code></p>
     * <p>Set to <code>false</code> to disallow the View from accepting drop gestures</p>
     */
    enableDrop: true,

    /**
     * @cfg {Boolean} enableDrag
     * <p>Defaults to <code>true</code></p>
     * <p>Set to <code>false</code> to disallow dragging items from the View </p>
     */
    enableDrag: true,
    
    /**
     * @cfg {String} nodeHighlightColor The color to use when visually highlighting the dragged
     * or dropped node (defaults to 'c3daf9' - light blue). The color must be a 6 digit hex value, without
     * a preceding '#'. See also {@link #nodeHighlightOnDrop} and {@link #nodeHighlightOnRepair}.
     */
    nodeHighlightColor: 'c3daf9',
    
    /**
     * @cfg {Boolean} nodeHighlightOnDrop Whether or not to highlight any nodes after they are
     * successfully dropped on their target. Defaults to the value of `Ext.enableFx`.
     * See also {@link #nodeHighlightColor} and {@link #nodeHighlightOnRepair}.
     * @markdown
     */
    nodeHighlightOnDrop: Ext.enableFx,
    
    /**
     * @cfg {Boolean} nodeHighlightOnRepair Whether or not to highlight any nodes after they are
     * repaired from an unsuccessful drag/drop. Defaults to the value of `Ext.enableFx`.
     * See also {@link #nodeHighlightColor} and {@link #nodeHighlightOnDrop}.
     * @markdown
     */
    nodeHighlightOnRepair: Ext.enableFx,

    init : function(view) {
        view.on('render', this.onViewRender, this, {single: true});
    },

    /**
     * @private
     * AbstractComponent calls destroy on all its plugins at destroy time.
     */
    destroy: function() {
        Ext.destroy(this.dragZone, this.dropZone);
    },

    onViewRender : function(view) {
        var me = this;

        if (me.enableDrag) {
            me.dragZone = Ext.create('Ext.tree.ViewDragZone', {
                view: view,
                ddGroup: me.dragGroup || me.ddGroup,
                dragText: me.dragText,
                repairHighlightColor: me.nodeHighlightColor,
                repairHighlight: me.nodeHighlightOnRepair
            });
        }

        if (me.enableDrop) {
            me.dropZone = Ext.create('Ext.tree.ViewDropZone', {
                view: view,
                ddGroup: me.dropGroup || me.ddGroup,
                allowContainerDrops: me.allowContainerDrops,
                appendOnly: me.appendOnly,
                allowParentInserts: me.allowParentInserts,
                expandDelay: me.expandDelay,
                dropHighlightColor: me.nodeHighlightColor,
                dropHighlight: me.nodeHighlightOnDrop
            });
        }
    }
});
