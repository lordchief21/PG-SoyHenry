const axios = require('axios');
require('dotenv').config();
const { Users } = require('../db.js');



module.exports = {


//Buscar usuario por email
getUserByEmail : async (req, res) => {
    const { email } = req.params;
    try{
        const user = await Users.findOne({
            where: {
                email: email
            }
        });
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({ error: "User didnt found" + error})
    }
},

// Buscar usuario por nombre
getUserByName : async (req, res) => {
    const { name } = req.params;
    try{
        const user = await Users.findOne({
            where: {
                username: name
            }
        });
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({ error: "User didnt found" + error})
    }
},
getUserById : async (req, res) => {
    const { id } = req.query;
    try{
        const user = await Users.findOne({
            where: {
                name: id
            }
        });
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({ error: "User didnt found" + error})
    }
},

//Traer todos los usuarios
getUsers : async (req, res) => {

    const { name,id,email } = req.query;
    console.log(Object.keys(req.query))
    if(Object.keys(req.query).length===0){
        try{
            const users = await Users.findAll()
            return res.send(users)
        }catch(error){
            return res.status(404).send(error)
    
        }
    }
    if(name){
        try{
            const user = await Users.findOne({
                where: {
                    username: name
                }
            });
            return res.status(200).json(user)
        }catch(error){
            return res.status(400).json({ error: "User didnt found" + error})
        }
    }
    if(id){
        try{
            const user = await Users.findOne({
                where: {
                    id: id
                }
            });
            return res.status(200).json(user)
        }catch(error){
            return res.status(400).json({ error: "User didnt found" + error})
        }
    }
    if(email){
        try{
            const user = await Users.findOne({
                where: {
                    email: email
                }
            });
            return res.status(200).json(user)
        }catch(error){
            return res.status(400).json({ error: "User didnt found" + error})
        }
    }

    
},


//Ver bien que datos son los que vamos a modificar, segun los datos que nos proporcione Auth0
updateUsers : async (req, res) =>{
    const { email ,firstname , lastname, address } = req.body;
    try{
        const users = await Users.update({
            email: email,
            firstname: firstname,
            lastname: lastname,
            address:address
        });
        res.status(200).json({msg: "User Updated", users})
    }catch(error){
        res.status(404).json({ error: "Update failed", error})

    }
},
postUser : async (req, res) =>{
 const {email ,firstname , lastname, address, postalCode, username, password} = req.body;

 try {
    const user = await Users.create({
        email,
        firstname,
        lastname,
        address,
        postalCode,
        username,
        password
    })


    res.send({msg: "User Created", user})

 } catch (error) {
    console.log(error)
    res.status(404).send({ error: "Can not post user", error})
 }

}



};