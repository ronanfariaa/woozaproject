const Dev = require('../models/Devs')

module.exports = {
    async index(request,response){

        console.log(request.query);

        return response.json({dev: [] })

        
    }
}