const express = require('express');
const router = express.Router();
const passport = require('passport');

const auth_Controller = require('../controllers/authController');
const work_Controller = require('../controllers/workController');

//Auth routes

router.post('/login', auth_Controller.login);

router.post('/register', auth_Controller.register);

//Handled client-side
router.post('/logout');

//Work
router.get('/works', work_Controller.allWorks);

router.put(
  '/works/:workid/update',
  passport.authenticate('jwt', { session: false }),
  work_Controller.updateWork
);

router.delete(
  '/works/:workid',
  passport.authenticate('jwt', { session: false }),
  work_Controller.deleteWork
);

router.post(
  '/works',
  passport.authenticate('jwt', { session: false }),
  work_Controller.createWork
);

module.exports = router;
