import { generateNanoId } from "../utils/helper.js";
import ShortUrl from "../models/shortUrl.model.js";
import { saveShortUrl } from "../dao/shortUrl.js";

export const createShortUrlWithoutUser = async (url) => {
    const shortUrl = await generateNanoId(7);
    await saveShortUrl(shortUrl, url);
    return newUrl.shortUrl;
}

export const createShortUrlWithUser = async (url, userId) => {
    const shortUrl = await generateNanoId(7);
    await saveShortUrl(url, shortUrl, userId);
    return newUrl.shortUrl;
}