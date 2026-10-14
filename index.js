const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor funcionando ✅' });
});

app.use('/api/productos', require('./routes/productosRoutes'));

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;
