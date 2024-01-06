const jw = require('jwtoken')

module.exports = {
    tokenGenerate : async ( id ) => {
        return await jw.sign({
            id
        }, process.env.JWT_SECRET , { expiresIn: process.env.JWT_EXPIRATION });
    },

    tokenValidate : async ( token ) => {
        return jw.verify(token, process.env.JWT_SECRET );        
    },
}




