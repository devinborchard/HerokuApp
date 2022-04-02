const express = require('express');
const cors = require('cors');

const app = express();
const path = require("path");

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.use(express.static(path.resolve(__dirname, '../client/build')));
if (process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "integration") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

console.log(PORT);
const server = app.listen(PORT);