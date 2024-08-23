import User from '../models/Users.js'
import md5 from 'md5'

const postuser = async (req, res) => {
    const { name, email, password, address, mobile, age, gender } = req.body
    const emailvalidation = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if (!emailvalidation) {
        return res.status(400).json({ message: "Invalid Email ID" })
    }
    // const mobilevalidation = mobile.match(/^[6-9]\d{9}$/)
    // if (!mobilevalidation) {
    //     return res.status(400).json({ message: "Invalid Mobile Number" })
    // }
    const passwordvalidation = password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/)
    if (!passwordvalidation) {
        return res.status(400).json({ message: "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:" })
    }
    if (!name || !address || !age || !gender){
        return res.status(400).json({ message: "All fields are required" })
    }


        const user = new User({ name, email, password:md5(password), address, mobile, age, gender })
    try {
        const result = await user.save()
        res.status(201).json({
            message: "User created successfully",
            data: result,
            success: true
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
            data: null
        })
    }

}
const loginuser = async (req, res) => {
    const { mobile, password } = req.body
    const encryptpassword =md5(password)
    const user = await User.findOne({
        mobile: mobile,
        password: encryptpassword
    })
    if (user) {
        res.status(200).json({
            message: "Login successfully",
            data: user,
            success: true
        })
    }
    else {
        res.status(401).json({
            message: "Invalid credentials",
            success: false,
            data: null
        })
    }
}
export {
    postuser, loginuser

}