const express = require('express');
const ArticleController = require('../controllers/articleController');

const router = express.Router();
//const auth = require('../middlewares/auth');


router.post('/v1/articles',  ArticleController.createSingleArticle);
router.get('/v1/articles', ArticleController.getAllArticles);
router.get('/v1/articles/:articleId', ArticleController.getSingleArticle);
router.patch('/v1/articles/:articleId', ArticleController.updateSingleArticle);
router.delete('/v1/articles/:articleId', ArticleController.deleteSingleArticle);

module.exports = router;
