const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('OK!')
});

app.get('/teste', (req, res) =>{
    res.send('Robalo tentaiva de homicidio')
})

app.listen(3000, 
    ()=>{console.log('Servidor em execução...')}
);