const bc = require('bcrypt')

module.exports= {
    compare: ( password, passHash )=>{
        const result = bc.compare(password, passHash)
        return result
    },

    passHash: async( password )=>{
        const sault =await bc.genSalt(process.env.BCRIPT_SAULT)
        const encrip = await bc.hash(password, sault)
        return encrip
    }
}