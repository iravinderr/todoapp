const ToDo = require('../models/ToDo');

exports.createToDo = async(req, res) => {
    try{
        // extracting data from the request body
        const {title, description} = req.body;

        // creating entry in the database
        const response = await ToDo.create({title, description});

        // send a json response with the success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry created successfully"
        })
    }
    catch(error){
        console.error(error)
        console.log(error);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:error.message
        })
    }
}