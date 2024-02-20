const ToDo = require('../models/ToDo');

exports.getSingleToDo = async(req, res) => {
    try{
        // fetching data by ID
        const id = req.params.id;
        const singleToDo = await ToDo.findById({_id: id});

        if(!singleToDo){
            res.status(404).json({
                success: false,
                message: "No ToDo found for the given id",
            })
        }

        res.status(200).json({
            success: true,
            data: singleToDo,
            message: "ToDo fetched successfully",
        });
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