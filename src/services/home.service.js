const {Message} = require("../models")

const getAllMessages = async () => {
        const msjs = await Message.find({})
        console.log(msjs)
    //   return User.findOne({ email });
        return msjs
};

const addMessage = async (message) => {
    const msj = await new Message({name:message})
    return msj.save()
    .then(()=>{
        return "done!"
    })
    .catch(()=>{
        return "error :("
    })
};
    
    
    
module.exports = {
    getAllMessages,
    addMessage
};
    