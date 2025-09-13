import ShortUrl from "../models/shortUrl.model.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    try {
    const newUrl = new ShortUrl({
        fullUrl: longUrl,
        shortUrl: shortUrl,
    })
    if(userId){
        newUrl.user = userId;
    }
    await newUrl.save();
    console.log(url);
} catch (error) {
    if(error.code == 11000){
        throw new ConflictError("Short URL already exists");
    }
    throw new Error(error)
}
};

export const getShortUrl = async (shortUrl) => {
    return await urlSchema.findOneAndUpdate({short_url:shortUrl}, {$inc:{clicks:1}});
} 