export const createShortUrl = async (req, res) => {
    const { url } = req.body;

    const shortUrl = generateNanoId(7);
    const newUrl = new ShortUrl({
        fullUrl: url,
        shortUrl: shortUrl,
    })
    newUrl.save();
    console.log(url);
    res.send(nanoid(7));
}