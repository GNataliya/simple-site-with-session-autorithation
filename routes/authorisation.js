const express = require('express');
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const router = express.Router();

const authCtrl = require('../controllers/authorisation.js');

/* GET home page. */
router.get('/', (req, res) => {
    res.render('login');
});

router.post('/login', upload.none(), async (req, res) => {
    
    const { login, pwd } = req.body;
    const session = req.session;
    const result = await authCtrl.login(login, pwd);
    //console.log('rout', result)

    if([ 'unknown user', 'invalid password' ].includes(result.status)){
        res.json({ status: 'fail authorisation'});
        return;
    }

    const { profile } = result.payload;
    session.uid = profile.id;

    res.json({ status: 'ok', payload: profile });
    // res.json({
    //     status: 'ok', payload: { comments }
    // });
});

// for checking user id on every page and get user id
router.get('/profile', async (req, res) => {
    
    const uid = req.session.uid;    // get user id in session
    
    //console.log('uid', uid)
    // if there isn't user id in session
    if(!uid){                           
        res.json({ status: 'unauthorisate'});
        return;
    }

    const result = await authCtrl.getProfile(uid); // get profile from db by id session    
    
    res.json({ status: 'ok', payload: result })
    
});

// router.post('/logout', (req, res) => {
//     //res.render('logout');
// });

// create user doc in db
router.post('/signup', upload.none(), async (req, res) => {
   
    const { name, login, pwd } = req.body;
    const session = req.session;

    const isEmail = await authCtrl.checkEmail(login);
    //console.log('checkEmail', isEmail);

    if (isEmail.status === 'email already declarated'){
        res.json({ status: 'dublicate_email' })
        return;
    };

    const createNewUser = await authCtrl.createUser( name, login, pwd );

    session.uid = createNewUser.id;

    res.json({ status: 'ok', user: createNewUser });
});


module.exports = router;
