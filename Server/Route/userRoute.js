

// const express = require('express');
// const router = express.Router();

// const User = require('../Models/usermodel')

// router.post('/register', async (req, res) => {
//     const newuser = new User(req.body)

//     try {
//         const user = await newuser.save()
//         res.send('user registered successfully')
//     } catch (error) {
//         console.error(error); // Log the error for debugging purposes
//         return res.status(400).json({ message: 'An error occurred during registration. Please try again later.' })
//     }
// })

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body

//     try {
//         const user = await User.find({  email, password })
//         if(user.length > 0)
//         {
//             const currentUser = {
//                 name : user[0].name , 
//                 email : user[0].email, 
//                 isAdmin : user[0].isAdmin, 
//                 _id : user[0]._id
//             }
//             res.send(currentUser);
//         }
//          else {
//             return res.status(400).json({ message: 'Login failed. User not found.' })
//         }
//     } catch (error) {

//         return res.status(400).json({ message: 'An error occurred during login. Please try again later.' })
//     }
// })

// module.exports = router


const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../Models/usermodel');

// Secret key for JWT token
const secretKey = 'jbjucfjythcjhbvjvjhgvjvjx';

router.post('/register', async (req, res) => {
  const newuser = new User(req.body);

  try {
    const user = await newuser.save();
    res.send('user registered successfully');
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return res
      .status(400)
      .json({ message: 'An error occurred during registration. Please try again later.' });
  }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
       
        return res.status(401).json({ message: 'Incorrect email or password.' });
      }
  
    
      const isPasswordValid = bcrypt.compareSync(password, user.password);
  
      if (!isPasswordValid) {
        
        return res.status(401).json({ message: 'Incorrect email or password.' });
      }
  
     
      const currentUser = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
  
      const token = jwt.sign(currentUser, secretKey, { expiresIn: '1h' });
      return res.json({ user: currentUser, token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'An error occurred during login. Please try again later.' });
    }
  });
  
module.exports = router;
