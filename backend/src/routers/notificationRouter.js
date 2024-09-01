const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Rutas para gestionar notificaciones
router.post('/notifications', notificationController.sendNotification);

module.exports = router;
