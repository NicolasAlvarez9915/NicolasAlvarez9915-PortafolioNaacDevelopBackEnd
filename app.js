const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});
app.get('/api/routedefault',(req, res)=>{
    res.status(200).send({statusCode:200, response:"Back-End Working correctly",error:{mensaje: "Not Error"}});
});


app.listen(3001,() => {
    console.log('listening on port ' + 3001);
});