const express = require('express')
require('../db/mongoose')
const Task = require('../models/task')
const router = express.Router()

router.get('/tasks', (req,res) => {
    Task.find({}).then((task) => {
        res.send(task)
    }).catch((error) => {
        res.status(404).send(error)
    })
})

router.get('/tasks/:id', (req,res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if(!task) {
            return res.status(404).send()
        }
        res.status(201).send(task)
    }).catch((error) => {
        res.send(error)
    })
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const _id = req.params.id
    try {
        // const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        const task = await Task.findById(_id)
        updates.forEach(update => {
            task[update] = req.body[update]
        })
        await task.save()
        if(!task) {
            return res.status(400).send()
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(400).send()
    }
})

router.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

module.exports = router