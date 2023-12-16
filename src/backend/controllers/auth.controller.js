import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET
const generateToken = (userId) => {
  return jwt.sign({ userId }, secretKey, { expiresIn: null })
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey)
};

export { generateToken, verifyToken }