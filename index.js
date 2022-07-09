const express = require('express');
require("dotenv").config()

const app = express();

app.use(express.json());

app.post('/api', (req,res) => {
  res.send(200)
  console.log('PAYLOAD RECEIVED: ', req.body)
})


const port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log("server started on ",process.env.ENVIRONMENT, port)
});

