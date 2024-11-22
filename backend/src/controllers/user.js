import Users from "../models/users.js";
import bcrypt from "bcrypt";

const secret = process.env.JWT_KEY

export const addUser = async(req, res) =>{
    const { username, email, password } = req.body
        
        const findUser = await Users.find({ email: email })
        if(findUser.length == 1){
            res.status(409).json({
                message:"User already exists"
            })
        } else {

                const hashedPassword = await bcrypt.hash(password, 10)

                
            
                const user = new Users({
                        username,
                        password:hashedPassword,
                        email
                 })
                
                const  token = await jwt.sign({user:email, userId:user_id}, secret, {
                    expiresIn: "1h"
                })
                await user.save()
                res.status(201).json({
                    Message:"Registration Successful",
                    user,
                    token
                })
        }

    
}

// const getUser = () = {

// }

