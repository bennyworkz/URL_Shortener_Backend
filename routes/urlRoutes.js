const express = require('express');
const { shortenUrl, redirectToOriginal } = require('../controllers/urlController');

const router = express.Router();


router.post('/shorten', shortenUrl);


router.get('/:shortCode', redirectToOriginal);

module.exports = router;
