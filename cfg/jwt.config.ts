require('dotenv').config();

export const JWT_CONFIG = {
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '24h' },
}