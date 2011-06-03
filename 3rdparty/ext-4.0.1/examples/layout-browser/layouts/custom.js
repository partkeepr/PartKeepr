function getCustomLayouts() {
    return {
        /*
         * CenterLayout demo panel
         */
        centerLayout: {
            id: 'center-panel',
            layout: 'ux.center',
            items: {
                title: 'Centered Panel: 75% of container width and fit height',
                layout: 'ux.center',
                autoScroll: true,
                widthRatio: 0.75,
                bodyStyle: 'padding:20px 0;',
                items: [{
                    title: 'Inner Centered Panel',
                    html: 'Fixed 300px wide and auto height. The container panel will also autoscroll if narrower than 300px.',
                    width: 300,
                    frame: true,
                    autoHeight: true,
                    bodyStyle: 'padding:10px 20px;'
                }]
            }
        }
    };

}