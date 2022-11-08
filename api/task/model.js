// build your `Task` model here
const db = require('../../data/dbConfig')

async function insert(task) {
    const ids = await db('tasks').insert(task)
     return findById(ids[0])
}

async function findById(task_id) {
    let taskObj = await db('tasks')
    .leftJoin('projects as p','tasks.project_id','p.project_id')
    .where({ task_id })
    .first();

    taskObj.task_completed === 0 ? taskObj.task_completed = false : taskObj.task_completed = true

    return taskObj
}

async function getAll() {
    let taskArray = await db('tasks').leftJoin('projects as p','tasks.project_id','p.project_id')

    taskArray.forEach(taskObj => {
        taskObj.task_completed === 0 ? taskObj.task_completed = false : taskObj.task_completed = true
    })

    return taskArray
}

module.exports = {findById, insert, getAll}