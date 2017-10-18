Ext.define("PartKeepr.Components.ProjectReport.Renderers.QuantityRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.projectReportQuantity',

    renderer: function (value, metaData, record, rowIndex, colIndex, store, view, renderObj)
    {
        var quantityField = renderObj.getRendererConfigItem(renderObj, "quantityField", false);

        if (record.get("metaPart"))
        {
            total = 0;
            for (i = 0; i < record.subParts().getCount(); i++)
            {
                if (record.subParts().getAt(i).get("use"))
                {
                    total += record.subParts().getAt(i).get("stockToUse");
                }
            }

            return total + " / " + value;
        } else
        {
            title = renderObj.getProjectParts(record);
            return '<span class="web-icon fugue-icon information-small-white" title="' + title + '"></span> '+ record.get(quantityField) + " " + record.getPart().getPartUnit().get("shortName");
        }
    },
    getProjectParts: function (rec) {
        var report = rec.getReport(),
            i,j, project, projectPart, projectPartQuantities = [];

        for (i=0;i<report.reportProjects().getCount();i++) {
            project = report.reportProjects().getAt(i).getProject();

            for (j=0;j<project.parts().getCount();j++) {
                projectPart = project.parts().getAt(j);

                if (projectPart.getPart().getId() === rec.getPart().getId() ) {
                    projectPartQuantities.push(project.get("name")+ ": "+projectPart.get("totalQuantity"));
                }
            }
        }

        return projectPartQuantities.join("&#013;&#010;")
    },

    statics: {
        rendererName: i18n("Project Report Quantity Renderer"),
        rendererDescription: i18n("Renders the amount of required metadata quantities"),
        rendererConfigs: {
            parameterName: {
                type: 'quantityField',
                title: i18n("Field name which denotes the quantity")
            }
        },

        restrictToEntity: ["PartKeepr.ProjectBundle.Entity.ProjectReport"]
    }
});
