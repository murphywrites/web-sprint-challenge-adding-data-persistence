// build your `/api/tasks` router here
// build your `/api/Tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/:task_id', (req, res, next) => {
    res.status(200).json({message:"howdy Task"}).catch(next)
    // Task.findById(req.params.task_id)
    // .then(Task => {
    //     res.status(200).json(task)
    // })
    // .catch(next)
})



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        customMessage: "Something went wrong in the Tasks router",
        stack: err.stack
    })
})

module.exports = router