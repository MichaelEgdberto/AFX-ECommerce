const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Tienda Online funcionando');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`Servidor corriendo en puerto ${PORT}`));