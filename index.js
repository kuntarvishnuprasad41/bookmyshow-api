const express = require('express');
const routes = express.Router();
require('dotenv').config();

const app = express();

app.use(routes);



app.get('/',(req,res)=>{
    res.send('Hello World!');
});

const port = process.env.PORT || 8000 

app.listen(port, ()=>{
    console.log('Server is running on port ' + port );
})