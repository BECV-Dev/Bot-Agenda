// src/controllers/clientController.js
const clientService = require('../services/clientService');

// Obtener todos los clientes
exports.getAllClients = async (req, res) => {
  try {
    const clients = await clientService.getAllClients();
    res.send(clients);
  } catch (error) {
    res.status(500).send({ error: 'Error obteniendo clientes', details: error.message });
  }
};

// Crear un cliente
exports.createClient = async (req, res) => {
  try {
    const client = req.body;
    const createdClient = await clientService.createClient(client);
    res.status(201).send(createdClient);
  } catch (error) {
    res.status(400).send({ error: 'Error creando cliente', details: error.message });
  }
};

// Actualizar un cliente
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = req.body;
    const updatedClient = await clientService.updateClient(id, client);
    res.send(updatedClient);
  } catch (error) {
    res.status(400).send({ error: 'Error actualizando cliente', details: error.message });
  }
};

// Eliminar un cliente
exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await clientService.deleteClient(id);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Error eliminando cliente', details: error.message });
  }
};
