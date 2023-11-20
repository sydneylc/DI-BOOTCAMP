const express = require('express');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;


const secretKey = 'your-secret-key';


const users = [];


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});


app.post('/register', (req, res) => {

  const { username, email, password } = req.body;


  const emailConfirmToken = jwt.sign({ email }, secretKey, { expiresIn: '1d' });


  users.push({ username, email, password, emailConfirmToken });


  const confirmationLink = `http://localhost:${port}/confirm?token=${emailConfirmToken}`;
  const mailOptions = {
    from: ‘sydneylc@gmail.com',
    to: email,
    subject: 'Confirm Your Email',
    text: `Click the link to confirm your email: ${confirmationLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending confirmation email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Registration successful. Confirmation email sent.');
    }
  });
});


app.get('/confirm', (req, res) => {
  const { token } = req.query;


  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error(err);
      res.status(401).send('Invalid token');
    } else {
      const userEmail = decoded.email;
      const user = users.find((u) => u.email === userEmail);

      if (user) {

        user.confirmed = true;
        res.status(200).send('Email confirmed successfully');
      } else {
        res.status(404).send('User not found');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
