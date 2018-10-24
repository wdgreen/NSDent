const express = require('express');
const app = express();
const port = 3000;

// const user = require('./models/user');
const cabinet = require('./controllers/cabinet');

app.use(express.static(__dirname));
// app.use('/user', user);
app.use('/cabinet', cabinet);

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
