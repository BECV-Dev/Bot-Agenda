// src/index.js
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


// Importar y usar routers
const authRouter = require('./routers/authRouter');
const calendarRouter = require('./routers/calendarRouter');
const clientRouter = require('./routers/clientRouter');
const notificationRouter = require('./routers/notificationRouter');

app.use('/api/auth', authRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/clients', clientRouter);
app.use('/api/notifications', notificationRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
