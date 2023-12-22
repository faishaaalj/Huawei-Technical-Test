import Users from "../models/UserModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email', 'phone_number']
        });
        res.json(users);
    } catch (error) {
        console.log(error)
    }
}

export const Register = async(req, res)=> {
    
    const {name, email, phoneNumber, password, confirmPassword } = req.body;
    if (password !== confirmPassword) return res.status(400).json({message: "Password not matched!"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        const countUser  = await Users.count({
            where: {
                email: req.body.email
            }
        })
        if (countUser >= 1 ) return res.status(400).json({message: "Email already used!"});
        await Users.create({
            name: name,
            email: email,
            phone_number: phoneNumber,
            password: hashPassword,
        });
        res.json({message: "Register Success", status: "success"})
    } catch (error) {
        console.log(error);
    }
}

export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({message: "Wrong Password"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const phoneNumber = user[0].phone_number;
        const accessToken = jwt.sign({userId, name, email, phoneNumber }, process.env.ACCESS_TOKEN_SECRET);
        res.json({accessToken, status: "success", user: {userId, name, email, phoneNumber}})
    } catch (error) {
        res.status(404).json({message:"Email not found!"})
    }
}