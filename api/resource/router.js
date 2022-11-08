// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getAll().then(resources => {
        res.status(200).json(resources)
    })
    .catch(next)
})

router.get('/:resource_id', (req, res, next) => {
    // res.status(200).json({message:"howdy resource"}).catch(next)
    Resource.findById(req.params.resource_id)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.insert(req.body)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        customMessage: "Something went wrong in the Resources router",
        stack: err.stack
    })
})

module.exports = router