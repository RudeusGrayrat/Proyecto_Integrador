const {User} = require("../src/DB_connection");

 const postUser = async (req, res) => {
     try {
        const { email, password } = req.body
        
        if (!email || !password) {
            res.status(400).json({ message: "Faltan Datos" })
        }
        const usuario = await User.findOrCreate({
            where: {email: email, password: password}
        })

        res.status(200).json(usuario)

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
module.exports = postUser