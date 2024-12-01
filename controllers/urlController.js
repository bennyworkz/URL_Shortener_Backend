const { createShortUrl, getOriginalUrl } = require('../services/urlServices');

const shortenUrl = async (req, res) => {
  try {
    const { url, customAlias, expirationTime } = req.body;
    const shortUrl = await createShortUrl(url, customAlias, expirationTime || 3600);
    res.status(201).json({ shortUrl });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const redirectToOriginal = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const originalUrl = await getOriginalUrl(shortCode);
    res.redirect(originalUrl);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { shortenUrl, redirectToOriginal };
