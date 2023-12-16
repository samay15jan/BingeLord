import User from '../models/user.model.js'
import { hashData, verifyHashedData } from '../utils/hashdata.js'

const createNewUser = async (data) => {
    try {
        const { username, email, password } = data
        const existingUser = await User.findOne({ email })

        if(existingUser){
            console.log("User with this email already exists!")
            return null
        }

        //Hash password 
        const hashedPassword = await hashData(password)
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })

        const createdUser = await newUser.save()
        return createdUser
    } catch (error) {
        console.log('Error occured during creating user')
    }
}

const findUserByEmail = async (data) => {
    try {
        const { email, password } = data
        const fetchedUser = User.findOne({ email });
        
        if (!fetchedUser) {
            console.log('Invalid credentials')
        }

        const hashedPassword = fetchedUser.password
        const passwrdMatch = await verifyHashedData(password, hashedPassword)

        if(passwrdMatch){
            console.log('Invalid password entered')
        }
    } catch (error) {
        
    }
  };

export {createNewUser, findUserByEmail}