const mongoose = require("mongoose");

const employeeprojectSchema = mongoose.Schema({
    title: { type: String, require: false },
    starttime: { type: String, require: true },
    endtime: { type: String, require: true },
    timediff: { type: String, require: true },
    userId: { type: String, require: true },
});

const EmployeeProjectTaskModel = mongoose.model("employeeprojectTask", employeeprojectSchema );

module.exports = EmployeeProjectTaskModel;
