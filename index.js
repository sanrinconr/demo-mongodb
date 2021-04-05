const mongoose = require("mongoose")
const app = require('./src/app');

let server;
mongoose.connect("mongodb://127.0.0.1:27017/messagesApp", {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=>{
  console.log("Connected to mongodb!")
  server = app.listen(process.env.PORT || 3001, () => {
      console.log(`Listening to port ${3001}`);
      console.log("http://localhost:3001")
  });
})
