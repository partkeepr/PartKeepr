/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require([
    'Ext.grid.*',
    'Ext.data.*'
]);

Ext.onReady(function(){
    Ext.define('Task', {
        extend: 'Ext.data.Model',
        idProperty: 'taskId',
        fields: [
            {name: 'projectId', type: 'int'},
            {name: 'project', type: 'string'},
            {name: 'taskId', type: 'int'},
            {name: 'description', type: 'string'},
            {name: 'estimate', type: 'float'},
            {name: 'rate', type: 'float'},
            {name: 'cost', type: 'float'},
            {name: 'due', type: 'date', dateFormat:'m/d/Y'}
        ]    
    });
    
    var store = Ext.create('Ext.data.Store', {
        model: 'Task',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'remote-group-summary-grid.json',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        sorters: {property: 'due', direction: 'ASC'},
        groupField: 'project'
    });
    
    var grid = Ext.create('Ext.grid.Panel', {
        width: 800,
        height: 450,
        title: 'Sponsored Projects',
        renderTo: Ext.getBody(),
        store: store,
        viewConfig: {
            stripeRows: false
        },
        dockedItems: [{
            dock: 'top',
            xtype: 'toolbar',
            items: [{
                text: 'Show Summary',
                pressed: true,
                enableToggle: true,
                toggleHandler: function(btn, pressed){
                    var view = grid.getView();
                    view.getFeature('group').toggleSummaryRow(pressed);
                    view.refresh();
                }
            }]
        }],
        features: [{
            id: 'group',
            ftype: 'groupingsummary',
            groupHeaderTpl: '{name}',
            hideGroupedHeader: true,
            remoteRoot: 'summaryData'
        }],
        columns: [{
            text: 'Task',
            flex: 1,
            sortable: true,
            tdCls: 'task',
            dataIndex: 'description',
            hideable: false,
            summaryRenderer: function(value, summaryData, dataIndex) {
                return ((value === 0 || value > 1) ? '(' + value + ' Tasks)' : '(1 Task)');
            }
        }, {
            header: 'Project',
            width: 20,
            sortable: true,
            dataIndex: 'project'
        }, {
            header: 'Due Date',
            width: 80,
            sortable: true,
            dataIndex: 'due',
            renderer: Ext.util.Format.dateRenderer('m/d/Y')
        }, {
            header: 'Estimate',
            width: 75,
            sortable: true,
            dataIndex: 'estimate',
            renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                return value + ' hours';
            },
            summaryRenderer: function(value, summaryData, dataIndex) {
                return value + ' hours';
            }
        }, {
            header: 'Rate',
            width: 75,
            sortable: true,
            renderer: Ext.util.Format.usMoney,
            summaryRenderer: Ext.util.Format.usMoney,
            dataIndex: 'rate',
            summaryType: 'average'
        }, {
            id: 'cost',
            header: 'Cost',
            width: 75,
            sortable: false,
            groupable: false,
            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
                return Ext.util.Format.usMoney(record.get('estimate') * record.get('rate'));
            },
            dataIndex: 'cost',
            summaryRenderer: Ext.util.Format.usMoney
        }]
    });
});

