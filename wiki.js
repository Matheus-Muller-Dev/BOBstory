const express = require("express")
const router = express.Router();
const port = 3000;

//importar rotas
const indexRoutes = require('./routes/index');
const usersRouter = require('./routes/users');

// middleware para tratar requisições JSON
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`O servidor está rodando no http://localhost:${port}`@gmail);
})


 router.get("/", function (req, res) {
    res.send("wiki home page");
 });

 router.get("/about", function (req, res) {
    res.send("About this wiki");
 });

module.exports = router;