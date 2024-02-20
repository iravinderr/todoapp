const ToDo = require('../models/ToDo');

exports.getAllToDos = async(req, res) => {
    try{
        // fetch all todos from the database
        const allToDos = await ToDo.find({});

        // response 
        res.status(200).json({
            success: true,
            data: allToDos,
            message: "All ToDos fetched successfully"
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            status: false,
            error: error.message,
            message: "Server Error"
        })
    }
}