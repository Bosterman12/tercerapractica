import {addLogger} from "../utils/logger.js"



export const testLogin = (req, res, next) => {
   
   try{
        if(!req.user){
           // return res.status(401).send({status: "error", error: "usuario invalido"})
           res.redirect('../api/errorLogin')
        }
        req.session.user = {
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            gender: req.user.gender,
            email: req.user.email,
            role: req.user.role,
            cart: req.user.cart,
          }
            /*req.session.user = {
                email : req.user.email,
                first_name: req.user.first_name
            }*/

            //res.status(200).send({status: "sucess", payload: req.user})
            console.log(req.session.user)
           
           res.redirect('../api/product')
            
                
            

           
   }catch(error) {
       res.status(500).send({status: "error", error: error.message})
    
        
        
   }
   
   
   
    /*const {email, password} = req.body
    try{
        if(email == "a@a.com" && password == "9012"){
            req.session.login= true,
            res.status(200).json({message: "Usuario logueado"})

        }else{
            res.status(401).json({message: "Usuario no logueado"})
            
        }

    }catch(error) {
        res.status(500).json({message: error.message})

    }*/
}

export const destroySession = (req, res, next) => {
    if(req.session.login){
        req.session.destroy(() =>{
            //res.status(200).json({message: "Session destruida"})
            res.redirect('login')
        })
    }
}

export const getSession = (req, res, next) => {
    if(req.session.login){
  
            res.status(200).json({message: "Session activa"})
        
    }else{
        res.status(401).json({message: "Session no activa"})
    }
}