const mongoose = require("mongoose");

const ProjectTaskSchema = mongoose.Schema({
    taskName: { type: String, require: true },
    project: { type: String, require: true },
    assignee: { type: String, require: true },
    dueDate: { type: String, require: true },
    priority:{ type: String, require: true },
    status:{ type: String, require: true },
    projectDescription:{ type: String, require: true },
    
});



const ProjectTask = mongoose.model("ProjectTask", ProjectTaskSchema);

module.exports = ProjectTask;
