
const { homeService } = require('../services');


const getWelcomeMessage = (async (req, res) => {
  const result = await homeService.getWelcomeMessage()
  res.send(result);
});

const setWelcomeMessage = (async (req, res) => {
    const result = await homeService.setWelcomeMessage()
    console.log(result)
    res.send(result);
  });

module.exports = {
    getWelcomeMessage,
    setWelcomeMessage
};
