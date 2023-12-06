const {Favorite} = require("../src/DB_connection")

const postFav = async (req, res) => {
    try {
        const { id, name, status, species, gender , origin, image} = req.body
        if (!id || !name || !status  || ! species || !gender || !origin || !image) {
            res.status(401).json({message: "Faltan datos"})
        }
         await Favorite.findOrCreate({
            where: { id, name, status, species, gender, origin, image }
        })

        const favorites = await Favorite.findAll();
        res.status(200).json(favorites)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = postFav