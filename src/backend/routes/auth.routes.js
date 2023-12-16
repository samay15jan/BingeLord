import express from 'express'
import { createNewUser, findUserByEmail } from "../controllers/user.controller.js"

const router = express.Router()

router.post("/signup", async (req, res) => {
    try {
        let { username, email, password } = req.body
        username = username.trim()
        email = email.trim()
        password = password.trim()

        // Validation
        if(!username || !email || !password) {
            console.log("Empty Input Fields!")
        } else if (!/^[a-zA-Z ]*$/.test(username)) {
            console.log("Invalid name entered!")
        } else if (!/^[\W-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            console.log("Invalid email entered!")
        } else if (password.length < 8) {
            console.log("Password too short!")
        } else {
            const newUser = await createNewUser({
                username,
                email,
                password,
            })
            res.status(200).json(newUser)
        }
    } 
    catch (error) {
        console.error("Error occurred during signup:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


router.post("/", async (req, res) => {
    try {
        let { email, password } = req.body
        email = email.trim()
        password = password.trim()

        if(!(email && password)) {
            console.log('Credientials are empty')
        }
    } catch (error) {
        
    }
})

export default router