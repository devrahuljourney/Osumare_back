const express = require('express');
const router = express.Router();
const taskController = require('../controller/Task');

router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/createtask', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
