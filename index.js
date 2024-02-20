const express = require('express');
const dbConnect = require('./config/database');
const ToDoRoutes = require('./routes/ToDos');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 3000;



// middleware to parse the json body
app.use(express.json());

// mounting the ToDos API routes
app.use("/api/v1", ToDoRoutes);


app.listen(PORT, () => {
    console.log(`Server is live at port no. ${PORT}. Checkout : http://localhost:${PORT}`);
});

dbConnect();



app.get('/', (req, res) => {
    res.send("Server is running ...");
});