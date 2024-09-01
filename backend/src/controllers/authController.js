const { auth } = require('../config/firebaseConfig');

// Controlador para iniciar sesión
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    res.json({ user: userCredential.user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Controlador para registrar un nuevo usuario
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    res.json({ user: userCredential.user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para cerrar sesión
exports.logout = async (req, res) => {
  try {
    await auth.signOut();
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
