const { db } = require('../config/firebaseConfig');

// Controlador para obtener citas
exports.getAppointments = async (req, res) => {
  try {
    const appointmentsSnapshot = await db.collection('appointments').get();
    const appointments = appointmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para crear una cita
exports.createAppointment = async (req, res) => {
  try {
    const appointment = req.body;
    const docRef = await db.collection('appointments').add(appointment);
    res.status(201).json({ id: docRef.id, ...appointment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para actualizar una cita
exports.updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = req.body;
    await db.collection('appointments').doc(id).update(appointment);
    res.json({ id, ...appointment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para eliminar una cita
exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('appointments').doc(id).delete();
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
