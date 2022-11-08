// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getAll().then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

router.get('/:project_id', (req, res, next) => {
    // res.status(200).json({message:"howdy project"}).catch(next)
    Project.findById(req.params.project_id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Project.insert(req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        customMessage: "Something went wrong in the projects router",
        stack: err.stack
    })
})

module.exports = router