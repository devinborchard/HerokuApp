const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});


const path = require("path");
app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 5000;

console.log(PORT);
const server = app.listen(PORT);