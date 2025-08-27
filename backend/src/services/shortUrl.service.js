import { generateNanoId } from "../utils/helper.js";
import ShortUrl from "../models/shortUrl.model.js";

export const createShortUrlService = (url) => {
    const shortUrl = generateNanoId(7);
    const newUrl = new ShortUrl({
        fullUrl: url,
        shortUrl: shortUrl,
    })
    newUrl.save();
    console.log(url);
    return newUrl.shortUrl;
}