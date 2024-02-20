const ToDo = require('../models/ToDo');

exports.deleteToDo = async(req, res) => {
    try{
        // fetching the id from the request
        const {id} = req.params;

        // delete ToDo using the id
        const deletedToDo = await ToDo.findByIdAndDelete({_id: id});

        res.status(200).json({
            success: true,
            data: deletedToDo,
            message: "ToDo deleted successfully",
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