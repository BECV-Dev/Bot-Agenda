// src/routers/clientRouter.js
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Definir rutas y asignar controladores
router.get('/', clientController.getAllClients);
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
