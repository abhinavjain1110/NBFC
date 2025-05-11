const Contact = require('../models/contact');

exports.submitContact = async (req, res) => {
  const { name, email, phone, subject,message } = req.body;
  if (!name || !email ||!phone ||!subject|| !message ) return res.status(400).json({ error: 'All fields required' });

  try {
    const contact = new Contact({ name, email,phone,subject, message });
    await contact.save();
    res.status(200).json({ success: true, message: 'Message received!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};