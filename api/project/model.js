// build your `Project` model here
// build your `` model here
const db = require('../../data/dbConfig')

async function insert(project) {
    const ids = await db('projects').insert(project)
     return findById(ids[0])
}

async function findById(project_id) {
    let projectObj = await db('projects')
    .where({ project_id })
    .first();

    projectObj.project_completed === 0 ? projectObj.project_completed = false : projectObj.project_completed = true

    return projectObj
}

module.exports = {findById, insert}