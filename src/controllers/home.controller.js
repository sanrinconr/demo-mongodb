const getWelcome = (async (req, res) => {
  res.send(` <html>
  <p> Welcome!, this api have the next routes\n </p>
  <p> /message/getMessages : With this you can fetch all messages in database mongo </p>\n
  <p> /message/addMessage?message=yourtitle : With this you can add a new message </p>
  <html/>`);
});


module.exports = {
  getWelcome,
};
