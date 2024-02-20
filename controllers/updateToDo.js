const ToDo = require('../models/ToDo');

exports.updateToDo = async(req, res) => {
    try{
        // fetching the new data from the request body
        const {id} = req.params;
        const {title, description} = req.body;

        // finding the data in the database for the requested id
        const updatedToDo = await ToDo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()},
        );

        res.status(200).json({
            success: true,
            data: updatedToDo,
            message: "ToDo updated successfully",
        })
    }
    catch(error) {
        console.error(error);
        res.status(500).json({
            status: false,
            error: error.message,
            message: "Server Error"
        }) 
    }
}