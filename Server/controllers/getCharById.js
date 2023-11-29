const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const { id } = req.params
    axios(URL + id)
        .then(({data})=>{
            if (data) {
                const { id, status, name, species, origin, image, gender } = data;
                const character = { id, status, name, species, origin, image, gender }
                res.status(200).json(character)
            }else{
                res.status(404).json({ message: "Not fount"})
            }
        }).catch((error) =>{
            res.status(500).send({ message: error.message})
        })
};

module.exports = getCharById;