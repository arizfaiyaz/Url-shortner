import express from 'express';
import { createShortUrl } from '../controller/shortUrl.controller.js';

const router = express.Router();

// Router to create short Url
router.post('/', createShortUrl);

export default router;