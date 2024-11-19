const express = require('express'); //importiamo express
const app =  express(); //andiamo a creare un server
const port = 3000; //attribuiamo una porta
const posts = require('./posts'); //importiamo i post

app.use(express.static('public'));//rendiamo il contenuto della cartella public publico


app.listen(port, ()=>{ //mettiamo il server in ascolto alla porta numero 3000
    console.log(`in ascolto sulla porta ${port}`)
})
