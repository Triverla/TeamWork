const db = require('./index');

module.exports = () => {
  const createArticlesTable = async () => {
    try {
      await db.query(`CREATE TABLE IF NOT EXISTS articles (
                                articleId serial PRIMARY KEY, 
                                title VARCHAR (50) NOT NULL,
                                article VARCHAR (2500) NOT NULL,
                                created timestamp with time zone NOT NULL,
                                categoryId INTEGER NOT NULL,
                                author VARCHAR (50) NOT NULL
                                )`);
    } catch (error) {
      console.log(error);
    }
  };

  createArticlesTable();
};
