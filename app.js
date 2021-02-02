const express = require('express')  // express 호출
const app = express();
const port = process.env.PORT || 3000;

//http://127.0.0.1:3000/welcome?name=haerim
app.get('/', (req,res) => res.send('Hello, NodeJS!'));
app.get('/welcome', (req,res)=> {
    var user_name = req.param('name');
    res.send('Hi, there. Welcome to the Nodejs service. ['+ user_name +']');
});
app.get('/check', (req,res)=> res.send('Example app listening on port 3000'));

//3000번 포트로 nodejs 구동시킴
app.listen(port, ()=> console.log('Example app listening on port 3000'))
