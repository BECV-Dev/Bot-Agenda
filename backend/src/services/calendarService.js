const db = require('../config/firebaseConfig');

exports.getAppointments = async () => {
  try {
    const snapshot = await db.collection('citas').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.addAppointment = async (appointment) => {
  try {
    const docRef = await db.collection('citas').add(appointment);
    return { id: docRef.id, ...appointment };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateAppointment = async (id, updatedData) => {
  try {
    await db.collection('citas').doc(id).update(updatedData);
    return { id, ...updatedData };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.removeAppointment = async (id) => {
  try {
    await db.collection('citas').doc(id).delete();
    return { message: 'Appointment deleted successfully' };
  } catch (error) {
    throw new Error(error.message);
  }
};
