const express = require('express');
const taskRoutes = require("./route/taskRoute")
const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/api', taskRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });