const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/social_media_db', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { username, email, password, Hobbies, FirstName, LastName } = req.body;

  const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String
    Hobbies: String
    FirstName: String
    LastName: String
  });

  const newUser = new User({
    username,
    email,
    password,
    First Name,
    Last Name,
  });

  newUser.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error saving user to the database' });
    } else {
      res.json({ message: 'User registered successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
