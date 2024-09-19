const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ArtistModel = require('./models/Artists'); // Ensure this file exists
const SongModel = require('./models/Songs'); // Ensure this file exists
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'ghjhfkhfgjggmh[;;kgghhkffsgr76trud6ujy,/i;u[vytvbrdu';

const app = express();
app.use(cors());
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));

var nodemailer = require('nodemailer');

app.get('/', (req, res) => {
    res.send('Welcome to the Mkononi API');
});

mongoose.connect('mongodb+srv://lugoseeugene2:mYSvwaP1fRcXgBli@mkononicluster.g1w30.mongodb.net/?retryWrites=true&w=majority&appName=MkononiCluster')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Define routes
app.get('/getArtists', (req, res) => {
    ArtistModel.find()
        .then(artists => res.json(artists))
        .catch(err => res.status(500).json({ error: err }));
});

app.get('/getSongs', (req, res) => {
    SongModel.find()
        .then(songs => res.json(songs))
        .catch(err => res.status(500).json({ error: err }));
});

require('./models/User');
const User = mongoose.model('users');

app.post('/register', async (req, res) => {
    const { mobile,email, pass } = req.body;
    const encryptedPassword = await bcrypt.hash(pass, 10);
    try {
        const oldUser = await User.findOne({ mobile });

        if (oldUser) {
            return res.json({ error: 'User already Exists' });
        }
        await User.create({
            mobile,
            email,
            pass: encryptedPassword,
        });
        res.send({ status: 'ok' });
    } catch (error) {
        res.send({ status: 'error' });
    }
});

app.post('/login-user', async (req, res) => {
    const { mobile, pass } = req.body;
    const user = await User.findOne({ mobile });
    if (!user) {
        return res.json({ error: 'User not found' });
    }
    if (await bcrypt.compare(pass, user.pass)) {
        const token = jwt.sign({ mobile: user.mobile }, JWT_SECRET);
        return res.json({ status: 'ok', data: token });
    }
    res.json({ status: 'error', error: 'Invalid Password' });
});

const Business = require('./models/Business');

app.post('/description', async (req, res) => {
    console.log(req.body); 
    const { owner, business, mobile, description } = req.body;
    try {
        /*const existingBusiness = await Business.findOne({ mobile });

        if (existingBusiness) {
            return res.json({ error: 'Business already Exists' });
        }*/
        await Business.create({
            owner,
            mobile,
            business,
            description
        });
        res.send({ status: 'ok' });
    } catch (error) {
        console.error(error); 
        res.send({ status: 'error' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
        const oldUser = await User.findOne({ email });
        if (!oldUser) {
            return res.json({ status: "User does not exist!" });
        }
        const secret = JWT_SECRET + oldUser.pass;
        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
            expiresIn: "5m",
        });

        // Use backticks for template literals
        const link = `http://localhost:3001/reset-password/${oldUser._id}/${token}`;

        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'godblessodhiambo@gmail.com',
            pass: 'vcjlqwrzjbgflsjl'
        }
        });

        var mailOptions = {
        from: 'youremail@gmail.com',
        to: email,
        subject: 'Password Reset',
        text: link,
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });

        console.log(link);
        res.json({ status: "ok", link });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
});


app.get("/reset-password/:id/:token", async(req, res)=>{
    const {id, token} = req.params;
    console.log(req.params);
    const oldUser = await User.findById(id);
        if(!oldUser){
            return res.json({status:"User does not exist!"});
        }
        const secret = JWT_SECRET + oldUser.pass;
        try{
            const verify = jwt.verify(token,secret)
            res.render("index", {email:verify.email, status:"Not verified"});
        }catch(error){
            res.send("not verified")
        }
    
});

app.post("/reset-password/:id/:token", async(req, res)=>{
    const {id, token} = req.params;
    const {password, confirmPassword} = req.body; 
    //console.log(req.params);
    const oldUser = await User.findById(id);
        if(!oldUser){
            return res.json({status:"User does not exist!"});
        }else{
            if(password != confirmPassword){
                return res.send("Passwords are not similar");
            }
        }
        const secret = JWT_SECRET + oldUser.pass;
        try{
            const verify = jwt.verify(token,secret);
            const encryptedPassword = await bcrypt.hash(password, 10);
            await User.updateOne({
                _id:id,
            },
            {
                $set:{
                    pass:encryptedPassword,
                },
            });
            //res.json({status:"Password Updated"});
            res.render("index", {email:verify.email, status:"verified"});
        }catch(error){
            console.log(error);
            res.json({status:"Something went wrong"});
        }
});

