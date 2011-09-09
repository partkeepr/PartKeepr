Ext.define('PartKeepr.StatisticsChartPanel', {
	extend: 'Ext.chart.Chart',
    shadow: true,
    title: i18n("Statistics Chart"),
    legend: {
        position: 'right'
    },
    background: {
    	fill: '#fff'
    },
    axes: [{
        type: 'Numeric',
        minimum: 0,
        position: 'left',
        fields: ['parts', 'categories'],
        title: i18n("Count"),
        minorTickSteps: 1,
        grid: {
            odd: {
                opacity: 1,
                fill: '#ddd',
                stroke: '#bbb',
                'stroke-width': 0.5
            }
        }
    }, {
        type: 'Time',
        dateFormat: 'Y-m-d',
        position: 'bottom',
        fields: ['start'],
        title: i18n("Date")
    }],
    series: [{
        type: 'line',
        highlight: {
            size: 7,
            radius: 7
        },
        axis: 'left',
        xField: 'start',
        yField: 'parts',
        title: i18n("Parts"),
        markerConfig: {
            type: 'cross',
            size: 4,
            radius: 4,
            'stroke-width': 0
        }
    }, {
        type: 'line',
        highlight: {
            size: 7,
            radius: 7
        },
        axis: 'left',
        title: i18n("Categories"),
        smooth: true,
        xField: 'start',
        yField: 'categories',
        markerConfig: {
            type: 'circle',
            size: 4,
            radius: 4,
            'stroke-width': 0
        }
    }],
    initComponent: function () {
    	this.store = Ext.create("Ext.data.Store", {
    		model: 'PartKeepr.StatisticSample',
    		proxy: {
    	        type: 'ajax',
    	        reader: {
    	            type: 'json',
    	            root: 'response.data'
    	        },
    	        url : 'service.php',
    	        extraParams: {
    	        	"service": "Statistic",
    	        	"call": "getSampledStatistics",
   	        		"startDateTime": "2011-01-01 00:00:00",
       	        	"endDateTime": "2011-12-01 00:00:00"	
    	        },
    	        headers: {
    	        	session :PartKeepr.getApplication().getSession()
    	        }
    	    },
    	    autoLoad: true
    	});
    	
    	this.callParent();
    }
});