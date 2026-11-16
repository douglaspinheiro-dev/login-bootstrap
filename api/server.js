import express from "express";
const app = express();
const port = 3000;

// Middleware to formatar o body para JSON
app.use(express.json());
// Para formatar os dados do formulário (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Bem vindo');
})

app.post('/login', (req,res) => {
    console.log(req.body)
    res.send('ok')
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
} )

