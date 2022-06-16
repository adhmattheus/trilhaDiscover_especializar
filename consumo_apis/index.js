const express = require('express')
const app = express()

app.listen('3000')

// // get
// app.route('/').get((req, res) => res.send(author))

// // //middleware /post
// app.use(express.json())
// // post
// app.route('/').post((req, res) => res.send(req.body))

// //put - editar informações
// app.use(express.json())

// let author = "Mattheus"

// app.route('/').put((req, res) => {
//     author = req.body.author
//     res.send(author)
// })

// //delete

// app.route('/:identificador').delete((req, res) => {
//     res.send(req.params.identificador)
// })

// body params 
// app.use(express.json())
// app.route('/').post((req, res) => {
//     const { nome, cidade } = req.body
//     res.send(`meu nome é ${nome} e minha cidade é ${cidade}`);
// })

app.route('/:').get((req, res) => res.send("oi"))
app.route('/:variavel').get((req, res) => res.send(req.params.variavel))

