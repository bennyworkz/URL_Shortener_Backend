const URL = require('../models/urlmodel');
const moment = require('moment');


const createShortUrl = async (originalUrl, customAlias, expirationTime) => {
  const { nanoid } = await import('nanoid'); 
  const shortCode = customAlias || nanoid(8);

  const existing = await URL.findOne({ shortCode });
  if (existing) {
    throw new Error('Custom alias already exists');
  }

  const expiresAt = moment().add(expirationTime, 'seconds').toDate();

  const url = new URL({ originalUrl, shortCode, expiresAt });
  await url.save();

  return url;
};

const getOriginalUrl = async (shortCode) => {
  const url = await URL.findOne({ shortCode });
  if (!url || url.expiresAt < new Date()) {
    throw new Error('URL not found or expired');
  }

  url.clickCount += 1;
  await url.save();

  return url.originalUrl;
};

module.exports = { createShortUrl, getOriginalUrl };
