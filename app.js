const express = require('express'); //importiamo express
const app =  express(); //andiamo a creare un server
const port = 3000; //attribuiamo una porta
const posts = require('./posts'); //importiamo i post

app.use(express.static('public'));//rendiamo il contenuto della cartella public publico

app.listen(port, ()=>{ //mettiamo il server in ascolto alla porta numero 3000
    console.log(`in ascolto sulla porta ${port}`)
})

//Index
app.get('/posts', (req, res)=>{
    console.log("lista dei post");
    res.json(posts)
})
//Show
app.get('/posts/:id', (req, res)=>{
    console.log("ritorno del post rischiesto");
    const id = parseInt(req.params.id)
    const post = posts[id]
    res.json(post)
})
//store
app.post('/posts', (req, res)=>{
    res.send("creazione elemento")
})
//Update
app.put('/posts/:id', (req, res)=>{
    res.send("modifica tutto elemento")
})
//Modify
app.patch('/posts/:id', (req, res)=>{
    res.send("modifica parte dell elemento")
})
//Delete
app.delete('/posts/:id', (req, res)=>{
    res.send("eliminiazione dell elemento")
})