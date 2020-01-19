const axios = require('axios');
const Dev = require('../models/Devs');
const parseStringsArray = require('../utils/parseStringsArray')

module.exports ={

    async  index(request, response) {
        const devs = await Dev.find();

        return response.json(devs)
    },

    

    async store(request, response)  {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({github_username});

        if(!dev){
        
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
        const {name = login, avatar_url, bio } = apiResponse.data;
        
        const techsArrays = parseStringsArray(techs) ;
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }
        
        const dev = await Dev.create({
            name,
            github_username,
            bio,
            avatar_url,
            techs: techsArrays,
            location,
        })
        
        console.log( name , avatar_url, bio, github_username );
    }
        return response.json({dev});
        }
};