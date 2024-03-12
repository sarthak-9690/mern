const express = require('express')
const User = require('../models/User')
const Visitor = require('../models/Visitor')
const data = require('../models/data')
const bcrypt = require('bcryptjs')
const router = express.Router()
const { body} = require('express-validator');

// Signup router
router.post('/signup', [
      body('name').isLength({ min: 3 }),
      body('email').isEmail(),
      body('password').isLength({ min: 5 })
], async (req, res) => {
      let success = false;
      try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                  return res.status(400).send('Enter a unique email')
            }
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            user = await User.create({
                  name: req.body.name,
                  password: hashPassword,
                  email: req.body.email
            });
            success = true;
            res.json({success,user})
      }
      catch (error) {
            console.error(error.message)
            res.status(500).send('Some error occured')
      }
})

// Login router
router.post('/login', [
      body('email').isEmail(),
      body('password').exists()
], async (req, res) => {
      let success = false;
      
      const { email, password } = req.body
      try {
            const user = await User.findOne({ email })
            if (!user) {
                   return res.status(400).send('Enter correct credientials')
            }
            const passcompare = await bcrypt.compare(password, user.password)  
            if (!passcompare) {
                  return res.status(400).send('Enter correct credientials')
            }
            success = true;
            res.json({ success })
      } catch (error) {
            console.error(error.message)
            res.status(500).send('Some error occured')
      }
})

// Contact router
router.post('/contact', [
      body('firstname').isLength({ min: 3 }),
      body('lastname').isLength({ min: 3 }),
      body('phone').isLength({ min: 10 }),
      body('email').isEmail(),
      body('state').isAlpha(),
      body('district').isAlpha(),
      body('zipcode').isNumeric(),
      body('message').isLength({ min: 5 })
], async (req, res) => {
      let success = false;
      try {
            
            let visitor = await Visitor.create({
                  firstname: req.body.firstname,
                  lastname: req.body.lastname,
                  phone: req.body.phone,
                  email: req.body.email,
                  state: req.body.state,
                  district: req.body.district,
                  zipcode: req.body.zipcode,
                  message: req.body.message,
            });
            success = true;
            res.json({success,visitor})
      }
      catch (error) {
            console.error(error.message)
            res.status(500).send('Some error occured')
      }
})

// School router
router.get('/school', async (req, res) => {
      let success = false;
      try {
            const schools = await data.find();

                
            success = true;
            res.json(schools);
      } catch (error) {
            console.error(error.message)
            res.status(500).send('Some error occured')
      }
})


module.exports = router


