const axios = require("axios")

const getCharById = (res, id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response=>{
        const  {//destructuring de lo que recibo
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        } = response.data
        //creo un objeto
        const respuesta = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(respuesta))
    })
    .catch((reason)=>{
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(reason.message))
    })
}
module.exports = getCharById;