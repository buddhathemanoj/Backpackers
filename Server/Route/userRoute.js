

const express = require('express');
const router = express.Router();

const User = require('../Models/usermodel')

router.post('/register', async (req, res) => {
    const newuser = new User(req.body)

    try {
        const user = await newuser.save()
        res.send('user registered successfully')
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(400).json({ message: 'An error occurred during registration. Please try again later.' })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.find({  email, password })
        if(user.length > 0)
        {
            const currentUser = {
                name : user[0].name , 
                email : user[0].email, 
                isAdmin : user[0].isAdmin, 
                _id : user[0]._id
            }
            res.send(currentUser);
        }
         else {
            return res.status(400).json({ message: 'Login failed. User not found.' })
        }
    } catch (error) {

        return res.status(400).json({ message: 'An error occurred during login. Please try again later.' })
    }
})

module.exports = router


