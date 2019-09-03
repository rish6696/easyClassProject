import models from '../models'

 async function SignUpHandler(req,res,next){
    console.log(req.body)
    const User= models.userModel();
    const user=new User(req.body)
    user.save().then(x=>res.send(x)).catch(x=>{
        console.log("this is inside catch")
        res.send(x)
    })
   
}

export default {
    SignUpHandler
}