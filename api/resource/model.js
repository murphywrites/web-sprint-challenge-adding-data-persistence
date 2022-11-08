// build your `Resource` model here
const db = require('../../data/dbConfig')

async function insert(resource) {
    const ids = await db('resources').insert(resource)
     return findById(ids[0])
}

async function findById(resource_id) {
    return db('resources')
    .where({ resource_id })
    .first();
}

async function getAll() {
    let resourceArray = await db('resources')

    return resourceArray
}

module.exports = {findById, insert, getAll}