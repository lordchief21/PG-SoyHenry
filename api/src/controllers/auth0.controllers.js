const { Router } = require('express');
const { requiresAuth } = require('express-openid-connect');
const {Users} = require('../db')


module.exports = {
    authenthincateUser: async (req, res, next ) => {
        console.log('Flag App Auth0', req.oidc.isAuthenticated());
        console.log('Flag app Auth0 USR', req.oidc.user);
    
        const user = req.oidc.user
    
        //    const admin = user.email === userAdminJSON.email ? true: false ---> Para generar administradores NOTA: Necesitamos un JSON con los email permitidos 
        if(user) { 
            Users.findOrCreate({
                where:{
                    firstname: user.given_name,
                    lastname: user.family_name,
                    username: user.nickname,
                    email: user.email,
                    profileImage: user.picture,    
                    isAdmin: false
                },
            }).then(user => {
                const aux = user[0]
                res.send(aux).redirect("/")
            });
        
        } else {
            res.redirect("/");
        }
    },
    
    infoProfile: (req, res) => {
    
        let arrUserInfo =  []
        
        const isAuthenticated=  req.oidc.isAuthenticated();
        const user =  req.oidc.user;
    
        user.isAuthenticated = isAuthenticated
    
        arrUserInfo.push(user)
    
        console.log(arrUserInfo)
        res.send(arrUserInfo)
    }
        

}