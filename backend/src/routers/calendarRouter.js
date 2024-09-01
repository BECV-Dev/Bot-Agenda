const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');

// Rutas para gestionar citas
router.get('/appointments', calendarController.getAppointments);
router.post('/appointments', calendarController.createAppointment);
router.put('/appointments/:id', calendarController.updateAppointment);
router.delete('/appointments/:id', calendarController.deleteAppointment);

module.exports = router;
