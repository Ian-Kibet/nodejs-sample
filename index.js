const express = require('express');

const app = express();

const port = process.env.PORT || 3434;

app.get('/', function (req, res) {
    res.send('Hello World')
  })
   
  app.listen(port, () => {
      console.log(`Server running on port ${port}`)
  })