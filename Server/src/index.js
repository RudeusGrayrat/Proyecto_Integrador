// const http = require('http');
// const fs = require("fs");
// const getCharById = require("./controllers/getCharById")

// const PORT = 3001

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req
//     if (url.includes(`/rickandmorty/character`)) {
//         const id = url.split('/').pop()
//         getCharById(res, id)
//     }else{
//         res.writeHead(404, {'Content-Type':'text/plain'})
//         res.end("No encontrado")
//     }
    
// })
// .listen(PORT, "localhost")

const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});