const express = require('express');
const app = express();
const porta = 3003;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/login', (req, res) =>{
    res.render('login');
});

app.get('/cadastrarOne', (req, res) =>{
    res.render('cadastrarOne');
});

app.listen(porta, (err)=>{
    if(err){
        console.log(`Erro inesperado: Problema 01.`);
    } else{
        console.log('Servidor no ar. Rodando na URL: http://localhost:3003');
    }
});

/* O desenvolvimento do código do back-end está 
sendo feito em node, o banco de dados em sequelize,
 e isso dificulta o compartilhamento de arquivos,
 já totalizam mais de 3.000 arquivos, porém, está em andamento,
 uma parte mais prática de mostrar parte do resultado são as rotas. */

