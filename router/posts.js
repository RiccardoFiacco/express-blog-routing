const express = require('express')
const router = express.Router();
const postController = require("../controller/postController.js")
//Index
router.get('/', postController.index)
//Show
router.get('/:id', postController.show)
//store
router.post('/',postController.store)
//Update
router.put('/:id',postController.update)
//Modify
router.patch('/:id',postController.modify)
//Destroy
router.delete('/:id', postController.destroy)

module.exports= router;