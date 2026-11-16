import express from "express";
const app = express();
const port = 3000;

// Middleware to formatar o body para JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem vindo');
})

app.post('/login', (req,res) => {
    console.log(req)
    res.send('ok')
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
} )

