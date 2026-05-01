//application programming interface
//Rest - Representational State Transfer
// GET - POST -PUT/PATCH - DELETE

// package.json Npm init -y

//JSON - JavaScript Object Notation

import express from "express"

const app = express();
const PORT = 3000
const arrResponse = [{name: "Gledyson", company: "Hashtag"},{name: "Liana", company: "Hashtag Teste"}]

app.get('/', (req, res) => {
 res.json(arrResponse);  
})

app.listen(3000, () =>{console.log(`O servidor esta rodando na porta ${PORT}`)});

