const express = require('express'); 
const cors = require('cors') //modulo de segurança
const routes = require('./routes');
const app = express();

app.use(cors())
app.use(express.json()); //Todas as requisições serão em json
app.use(routes)


app.listen(3333); //Porta localhost