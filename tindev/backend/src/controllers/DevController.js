const axios = require('axios');

module.exports = {
    store(req, res) {
        const { username } = req.body;

        const response = await axios.get(`https://api.github.com/users/${username}`);

        console.log(response.data);

        return res.json({ok: true})
    }
};