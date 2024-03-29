const express = require('express');
const app = express();
const port = process.env.PORT || 4200;

app.use('/', express.static('dist/text-converter'));

app.listen(port, () => {
  console.log("App is started and listening to the port: ", port)
});
