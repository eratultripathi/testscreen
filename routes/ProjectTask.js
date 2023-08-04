const { Router } = require("express")
const ProjectTask= require("../models/ProjectTask")
const projecttaskRouter = Router();

projecttaskRouter.get("/projecttask/get", async (req, res) => {
    try {
      const projecttask = await ProjectTask.find();
      res.status(200).json(projecttask);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  
)



module.exports = projecttaskRouter;

