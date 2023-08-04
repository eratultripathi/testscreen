const { Router } = require("express")
const ProjectCredential = require("../models/projectCredential")
const projectcredentialRouter = Router();

projectcredentialRouter.get("/credential/get", async (req, res) => {
    try {
      const projectcredential = await ProjectCredential.find();
      res.status(200).json(projectcredential);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

)



module.exports = projectcredentialRouter;

