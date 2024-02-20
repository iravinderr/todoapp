const express = require('express');
const router = express.Router();

// importing controllers
const {createToDo} = require('../controllers/createToDo');
const {getAllToDos} = require('../controllers/getAllToDos');
const {getSingleToDo} = require('../controllers/getSingleToDo');
const {updateToDo} = require('../controllers/updateToDo');
const {deleteToDo} = require('../controllers/deleteToDo');



// defining API routes/requests
router.post('/createToDo', createToDo);
router.get('/getAllToDos', getAllToDos);
router.get('/getSingleToDo/:id', getSingleToDo);  
router.put('/updateToDo/:id', updateToDo);
router.delete('/deleteToDo/:id', deleteToDo);


module.exports = router;