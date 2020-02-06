const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const empresas = require('./interfaz/empresa');

app.get("/api/procesar", (req, res) => {
    const empresa= new empresas();
    res.json(empresa.send());
    });

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})