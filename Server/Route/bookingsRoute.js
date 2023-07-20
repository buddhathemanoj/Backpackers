const express = require('express');
const router = express.Router();
const Booking = require('../Models/booking');
router.post("/bookroom", async (req, res) => {
    // const {
    //     room,
    //     userid,
    //     fromdate,
    //     todate,
    //     totalamount,
    //     totaldays,
    // } = req.body;

    var body = req.body;

    // Corrected variable name in the validation check
    // if (!room || !userid || !fromdate || !todate || !totalamount || !totaldays) {
    //     return res.status(400).json({ error: 'Missing required fields' });
    // }

    try {
        const newbooking = new Booking({
            roomid: body.roomid,
            userid : body.user.data.currentUser._id,
            fromdate: body.fromdate,
            todate: body.todate,
            totalamount:body.totalamount,
            totaldays:body.totaldays,
        });

        const booking = await newbooking.save();
        res.status(200).json({ message: 'Room booked successfully', booking });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'An error occurred while booking the room' });
    }
});
module.exports = router;
