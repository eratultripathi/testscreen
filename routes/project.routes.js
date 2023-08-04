const { Router } = require("express")

const EmployeeProjectTaskModel = require("../models/employeeproject")
const projectRouter = Router();

projectRouter.get("/:userId/projects", async (req, res) => {
    const userId = req.params.userId
    const tasks = await EmployeeProjectTaskModel.find({ userId })
    res.send(tasks)
})

projectRouter.post("/:userId/projects", async (req, res) => {
    const userId = req.params.userId
    const  project = req.body

    // console.log(project)

    let payload = {
        ...project,
        userId
    }
    const task = await new EmployeeProjectTaskModel (payload)
    task.save((err, success) => {
        if (err) {
            return res.status(500).send({ message: "something went wrong" })
        }
        return res.status(201).send(success)
    })

    

})

projectRouter.delete("/:userId/projects/:id", async (req, res) => {
    console.log('param', req.params)
    await EmployeeProjectTaskModel .deleteOne({ _id: req.params.id });
    res.send(`Successfully delete project with id ${req.params.id}`)
})

projectRouter.patch("/:userId/projects/:id", async (req, res) => {
    // res.send(req.body);
    try {
        await EmployeeProjectTaskModel .findOneAndUpdate({ _id: req.params.id }, req.body)
            .lean()
            .exec();
        const task = await EmployeeProjectTaskModel .findOne({ _id: req.params.id });
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = projectRouter;

