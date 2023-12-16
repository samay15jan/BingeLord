import bcrypt from 'bcrypt'

const hashData = async(data) => {
    try {
        const saltRounds = 10
        const hashedData = await bcrypt.hash(data, saltRounds);
        return hashedData
    } catch (error) {
        console.log("Error occurred during encryption:", Error)
        throw error
    }
}

const verifyHashedData = async (unhashed, hashed) => {
    try {
        const match = await bcrypt.compare(unhashed, hashed)
        return match
    } catch (error) {
        console.log(error)
    }
}
export {hashData, verifyHashedData}