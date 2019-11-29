const express = require('express');
const ArticleController = require('../controllers/articleController');

const router = express.Router();
const auth = require('../middlewares/auth');


router.post('/v1/articles', auth, ArticleController.createSingleArticle);
router.get('/v1/articles', auth, ArticleController.getAllArticles);
router.get('/v1/articles/:articleId', auth, ArticleController.getSingleArticle);
router.patch('/v1/articles/:articleId', auth, ArticleController.updateSingleArticle);
router.delete('/v1/articles/:articleId', auth, ArticleController.deleteSingleArticle);

module.exports = router;
