export default {
    jwtSecret: process.env.JWT_KEY,
    DB: {
      URI: process.env.MONGODB_URI || 'mongodb://localhost/backend'
    }
  };