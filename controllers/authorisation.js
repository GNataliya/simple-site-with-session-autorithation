const userModel = require('../models/user');

// create user profile in db
const createUser = async (name, login, pwd) => {    // name
const doc = await userModel.create({
        name,                                  // get names from schema cells
        auth: {
            login,
            pwd
        }
    })
    return doc;
}

// check tere is user email in db
const checkEmail = async (login) => {
    const doc = await userModel.findOne({ 'auth.login': login });
    
    // if there isn't such login return unknown user
    if(doc){
        return { status: 'email already declarated'};
    };

    return {status: 'ok'};
}

// check user in db by pwd and login 
const login = async (login, pwd) => {
    const doc = await userModel.findOne({ 'auth.login': login });
    //console.log('doc', doc)
    
    // if there isn't such login return unknown user
    if(!doc){
        return { status: 'unknown user'};
    };

    // if there is login => check password
    const check = doc.checkPwd(pwd); 
    if(!check){
        return { status: 'invalid password'};
    };

    // get user id and user name 
    const profile = {
        id: doc.id,
        name: doc.name
    };

    return {status: 'ok', payload: { profile }};
};

//get user profile in db by ID
const getProfile = async (id) => {
    const doc = await userModel.findOne({_id: id});
    console.log('docByIs', doc)
    
    
    return { status: 'ok', payload: { profile: doc }};
};



module.exports = {
    createUser,
    checkEmail,
    login,
    getProfile
}