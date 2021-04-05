const {Welcome} = require("../models")

const getWelcomeMessage = async () => {
    //   return User.findOne({ email });
        return "Hi!, app here"
};

const setWelcomeMessage = async () => {
    const msj = new Welcome({name:"Hola!"})
    //   return User.findOne({ email });
    return msj.save()
    .then(()=>{
        return "done!"
    })
    .catch(()=>{
        return "error :("
    })
};
    
    
    
module.exports = {
    getWelcomeMessage,
    setWelcomeMessage
};
    