Ext.define("PartKeepr.Components.ProjectReport.Renderers.RemarksRenderer", {
    extend: "PartKeepr.Components.Grid.Renderers.AbstractRenderer",

    alias: 'columnRenderer.projectReportRemarks',

    renderer: function (value, metaData, record, rowIndex, colIndex, store, view, renderObj) {
        return renderObj.getProjectParts(record);
    },
    getProjectParts: function (rec) {
        
        var report = rec.getReport(),
            i, j, k, project, projectPart, projectPartQuantities = [];

        for (i = 0; i < report.reportProjects().getCount(); i++)
        {
            project = report.reportProjects().getAt(i).getProject();
            
            for (j = 0; j < project.parts().getCount(); j++)
            {
                projectPart = project.parts().getAt(j);
                        
                
                if (projectPart.getPart().getId() === rec.getPart().getId())
                {
                    if (projectPart.get("remarks") !== "" && projectPart.get("remarks") !== null)
                    {
                        projectPartQuantities.push(project.get("name") + ": " + projectPart.get("remarks"));
                    }
                }
                else 
                {
                    
                    if (rec.getPart().data.comment.includes(projectPart.getPart().data.name))
                    {
                        if (projectPart.get("remarks") !== "" && projectPart.get("remarks") !== null)
                        {   
                            projectPartQuantities.push(project.get("name") + ": " + projectPart.get("remarks"));
                        }
                    }
                    
                }
                
            }
        }
        
        return projectPartQuantities.join("&#013;&#010;")
    },

    statics: {
        rendererName: i18n("Project Report Remark Renderer"),
        rendererDescription: i18n("Renders the remarks field"),

        restrictToEntity: ["PartKeepr.ProjectBundle.Entity.ProjectReport"]
    }
});
