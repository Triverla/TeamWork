const db = require("./index");

module.exports = () => {
  const createGenresTable = async () => {
    try {
      await db.query(`CREATE TABLE IF NOT EXISTS users (
            userId serial PRIMARY KEY,
            firstName VARCHAR (50) NOT NULL,
            lastName VARCHAR (50) NOT NULL,
            email VARCHAR (50) UNIQUE NOT NULL,
            password VARCHAR (1024) NOT NULL,
            gender VARCHAR (50) NOT NULL,
            role VARCHAR (50) NOT NULL,
            department VARCHAR (50) NOT NULL,
            address VARCHAR (50) NOT NULL,
            isAdmin BOOLEAN )`);
    } catch (error) {
      console.log(error);
    }
  };
  createGenresTable();
};