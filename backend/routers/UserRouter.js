const express = require('express');
const router = express.Router();
const Model = require("../models/userModel");
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');
require('dotenv').config();
//end point or route
router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err)
            if (err.code === 11000) {
                res.status(500).json({ message: 'Email already registered' })
            }
            else {
                res.status(500).json({ message: 'an error occured' })
            }


        });
});

router.get('/getall', (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err)
            res.status(500).json(err);

        });
});


//:-denote url parameter 19 sep

// res.send('Response from user getall');
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);
    Model.findOne({ email: req.params.email })
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err)
            res.statusCode(500).json(err)

        });
})
//getbycity
router.get('/getbycity/:city', (req, res) => {
    console.log(req.params.city)
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);

        });
})

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    //then((result)=>{

})


router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });

})


router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})


router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { _id, email, name } = result;

                //genertae token
                jwt.sign(
                    { _id, email, name },
                    process.env.JWT_SECRET, //payload
                    { expiresIn: '1d' },
                    (err, token) => {
                        if (err) {
                            console.log(err)
                            res.status(500).json(err)
                        } else {
                            res.status(200).json({ token })
                        }

                    }
                )
            } else {
                res.status(401).json({ message: 'Invalid crediatels' })
            }

        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)

        });
})

module.exports = router;