
const { homeService } = require('../services');


const getAllMessages = (async (req, res) => {
  const result = await homeService.getAllMessages()
  res.send(result);
});

const addMessage = (async (req, res) => {
    const message = req.query.message
    const result = await homeService.addMessage(message)
    console.log(result)
    res.send(result);
  });

module.exports = {
  getAllMessages,
  addMessage
};
