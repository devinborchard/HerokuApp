const express = require('express');
require("dotenv").config()

const app = express();

app.get('/api', (req,res) => {
  console.log('PAYLOAD RECEIVED: ', req)
})


const port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log("server started on ",process.env.ENVIRONMENT, port)
});

