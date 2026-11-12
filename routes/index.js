var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});


router.post('/contact', function(req, res, next) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  if (!name || !email || !message ||
      !name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).send('Please complete all fields.');
  }

  console.log('Contact form submitted:', {
    name: name,
    email: email,
    message: message
  });

  res.render('contact-success', {
    title: 'Message Received',
    name: name
  });
});

module.exports = router;
