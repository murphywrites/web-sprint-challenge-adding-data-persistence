// build your `/api/tasks` router here
// build your `/api/Tasks` router here
const router = require('express').Router()
const Task = require('./model')

const checkTaskDescription = (req, res, next) => {
    req.body.task_description ? next() : res.status(400).json({message:"task description required"})
}

router.get('/', (req, res, next) => {
    Task.getAll().then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(next)
})

router.get('/:task_id', (req, res, next) => {
    Task.findById(req.params.task_id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(next)
})

router.post('/', checkTaskDescription ,(req, res, next) => {
    Task.insert(req.body)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(next)
})



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        customMessage: "Something went wrong in the Tasks router",
        stack: err.stack
    })
})

module.exports = router