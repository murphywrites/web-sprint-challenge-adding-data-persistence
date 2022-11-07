// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/:resource_id', (req, res, next) => {
    res.status(200).json({message:"howdy resource"}).catch(next)
    // Resource.findById(req.params.Resource_id)
    // .then(Resource => {
    //     res.status(200).json(Resource)
    // })
    // .catch(next)
})



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        customMessage: "Something went wrong in the Resources router",
        stack: err.stack
    })
})

module.exports = router