// src/services/clientService.js
const { db } = require('../config/firebaseConfig');

// Obtener todos los clientes
const getAllClients = async () => {
  try {
    const clientsSnapshot = await db.collection('clients').get();
    return clientsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error('Error obteniendo clientes: ' + error.message);
  }
};

// Crear un cliente
const createClient = async (client) => {
  try {
    const docRef = await db.collection('clients').add(client);
    return { id: docRef.id, ...client };
  } catch (error) {
    throw new Error('Error creando cliente: ' + error.message);
  }
};

// Actualizar un cliente
const updateClient = async (id, client) => {
  try {
    await db.collection('clients').doc(id).update(client);
    return { id, ...client };
  } catch (error) {
    throw new Error('Error actualizando cliente: ' + error.message);
  }
};

// Eliminar un cliente
const deleteClient = async (id) => {
  try {
    await db.collection('clients').doc(id).delete();
    return { message: 'Cliente eliminado exitosamente' };
  } catch (error) {
    throw new Error('Error eliminando cliente: ' + error.message);
  }
};

module.exports = {
  getAllClients,
  createClient,
  updateClient,
  deleteClient
};
