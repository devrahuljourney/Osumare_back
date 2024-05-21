let tasks = [];

exports.getTasks = async (req, res) => {
    try {
        if (tasks.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Task list is empty"
            });
        }

        return res.status(200).json({
            success: true,
            tasks: tasks
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get tasks",
            error: error.message
        });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        return res.status(200).json({
            success: true,
            task: task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get task",
            error: error.message
        });
    }
};

exports.createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required."
            });
        }

        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            title,
            description
        };
        tasks.push(newTask);

        return res.status(201).json({
            success: true,
            task: newTask
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to create task",
            error: error.message
        });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required"
            });
        }

        task.title = title;
        task.description = description;

        return res.status(200).json({
            success: true,
            task: task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update task",
            error: error.message
        });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
        if (taskIndex === -1) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        tasks.splice(taskIndex, 1);

        return res.status(200).json({
            success:true,
            message:"Task Deleted Successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete task",
            error: error.message
        });
    }
};
