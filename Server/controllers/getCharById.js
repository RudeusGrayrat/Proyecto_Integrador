const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    const { id } = req.params
    const { data } = await axios(URL + id)
    try {
        if (data) {
            const { id, status, name, species, origin, image, gender } = data;
            const character = { id, status, name, species, origin, image, gender }
            res.status(200).json(character)
        } else {
            res.status(404).json({ message: "Not fount" })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

module.exports = getCharById;