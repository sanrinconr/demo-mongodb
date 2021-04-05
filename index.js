const mongoose = require("mongoose")
const app = require('./src/app');

let server;
mongoose.connect("mongodb://127.0.0.1:27017/colegio", {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=>{
  console.log("conectado!")
  server = app.listen(process.env.PORT || 3001, () => {
      console.log(`Listening to port ${3001}`);
  });
})
