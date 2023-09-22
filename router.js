const express = require('express');
const router = express.Router();
const {cardController} = require('./controllers/cardController')

router.get('/', (req, res) => res.send('Hello api'));
router.get('/getCards', cardController.getCards);
router.post('/addCard', cardController.addCard);
router.post('/deleteCard', cardController.deleteCard);

module.exports = router;