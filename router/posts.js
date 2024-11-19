const express = require('express')
const router = express.Router();
const posts = require('../data/posts.js'); //importiamo i post
//Index
router.get('/', (req, res)=>{
    console.log("lista dei post");
    res.json(posts)
})
//Show
router.get('/:id', (req, res)=>{
    console.log("ritorno del post rischiesto");
    const id = parseInt(req.params.id)
    const post = posts[id]
    res.json(post)
})
//store
router.post('/', (req, res)=>{
    res.send("creazione elemento")
})
//Update
router.put('/:id', (req, res)=>{
    res.send("modifica tutto elemento")
})
//Modify
router.patch('/:id', (req, res)=>{
    res.send("modifica parte dell elemento")
})
//Delete
router.delete('/:id', (req, res)=>{
    res.send("eliminiazione dell elemento")
})

module.exports= router;