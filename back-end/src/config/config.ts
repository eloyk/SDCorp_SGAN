export default {
    jwtSecret: process.env.JWT_KEY,
    DB: {
      URI: process.env.MONGO_URI
    }
  };
