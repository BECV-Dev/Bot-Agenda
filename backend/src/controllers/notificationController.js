const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'a1.osouniverse',
    pass: '!?7tJf3Y?pVC*AuMuN%g'
  }
});

exports.sendNotification = async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    await transporter.sendMail({
      from: 'romicze@gmail.com',
      to,
      subject,
      text
    });
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
