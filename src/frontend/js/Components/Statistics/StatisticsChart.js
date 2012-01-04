Ext.define('PartKeepr.StatisticsChart', {
	extend: 'Ext.chart.Chart',
	animate: true,
    shadow: true,
    
    style: 'border: 1px solid #AAA;background-color: white;box-shadow: 5px 5px 0px #aaa',
    legend: {
        position: 'right'
    },
    theme: 'Base',
    series: [{
        type: 'line',
        highlight: {
            size: 7,
            radius: 7
        },
        axis: 'left',
        xField: 'start',
        yField: 'parts',
        tips: {
            trackMouse: true,
            width: 170,
            height: 28,
            renderer: function(storeItem, item) {
            	this.setTitle(Ext.Date.format(storeItem.get('start'), "Y-m-d") + ": " + storeItem.get("parts") +" " + i18n("Parts"));
            }
          },
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
        tips: {
            trackMouse: true,
            width: 170,
            height: 28,
            renderer: function(storeItem, item) {
            	this.setTitle(Ext.Date.format(storeItem.get('start'), "Y-m-d") + ": " + storeItem.get("categories") +" " + i18n("Categories"));
            }
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
    	
    	/**
    	 * Defines the first axis, which indicates the count.
    	 */
    	this.axis1 = {
    	        type: 'Numeric',
    	        minimum: 0,
    	        position: 'left',
    	        fields: ['parts', 'categories'],
    	        title: i18n("Count"),
    	        minorTickSteps: 1,
    	        grid: {
    	            odd: {
    	                opacity: 1,
    	                fill: '#eee',
    	                stroke: '#bbb',
    	                'stroke-width': 0.5
    	            },
    	            even: {
    	            	opacity: 1,
    	                stroke: '#bbb',
    	                'stroke-width': 0.5
    	            }
    	        }
    	    };
    	
    	/**
    	 * Defines the second axis, which indicates the time.
    	 */
    	this.axis2 = {
    	        type: 'Time',
    	        dateFormat: 'Y-m-d',
    	        position: 'bottom',
    	        aggregateOp: "avg",
    	        fields: ['start'],
    	        title: i18n("Date"),
    	        grid: true
    	    };
    	
    	this.axes = [ this.axis1, this.axis2 ];
    	
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
       	        	"endDateTime": "2011-12-01 23:59:59"	
    	        },
    	        headers: {
    	        	session :PartKeepr.getApplication().getSession()
    	        }
    	    },
    	    autoLoad: false
    	});
    	
    	this.callParent();
    },
    /**
     * Sets the start date for the chart. Does not trigger a reload of the dataset.
     * @param date A valid date object
     */
    setStart: function (date) {
    	if (!(date instanceof Date)) { return; }
    	this.store.getProxy().extraParams.startDateTime = Ext.Date.format(date, "Y-m-d H:i:s");
    },
    /**
     * Sets the end date for the chart. Does not trigger a reload of the dataset.
     * @param date A valid date object
     */
    setEnd: function (date) {
    	if (!(date instanceof Date)) { return; }
    	
    	// Always set the end date to the end of the day
    	date.setHours(23);
    	date.setMinutes(59);
    	date.setSeconds(59);
    	
    	this.store.getProxy().extraParams.endDateTime = Ext.Date.format(date, "Y-m-d H:i:s");
    }
});