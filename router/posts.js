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
    let obj = {
        title: "cavolo cappuccio",
        slug: "cavolo-cappuccio",
        content: `il cavolo cappuccio è una verdura di origine lombarda e precisamente della Brianza, la zona compresa tra la provincia a nord di Milano e il lago di Lecco-Como!`,
        image: "cavolo-cappuccio.jpeg",
        tags: ["verdure", "verdure al cioccolato", "verdureee", "Ricette vegetariane", "Ricette al forno"],
    }
    posts.push(obj)
    res.send("creato elemento")
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