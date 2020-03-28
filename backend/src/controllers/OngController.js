const connection = require('../database/connection');
const crypto = require('crypto'); // Biblioteca que vem junto com node para criptografia

module.exports = {
    async index(request,response){
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },
    
    async create(request,response){
        const {name,email,whatsapp,city,uf} = request.body
        // console.log(data)
        const id = crypto.randomBytes(4).toString('HEX') // função para retornar um número aleatório de 4 digitos

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id })
    }
}