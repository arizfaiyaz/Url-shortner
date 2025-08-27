import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongodb.config.js";
import  ShortUrl  from './src/models/shortUrl.model.js';

dotenv.config("./.env");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST - Create Short URL
app.post('/api/create', (req, res) => {
    const { url } = req.body;
    const shortUrl = nanoid(7);
    const newUrl = new ShortUrl({
        fullUrl: url,
        shortUrl: shortUrl,
    })
    newUrl.save();
    console.log(url);
    res.send(nanoid(7));
});

// Get - redirection?
app.get('/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params;
    const url = await ShortUrl.findOne({shortUrl: shortUrl})
    if(url) {
        res.redirect(url.fullUrl);
    } else {
        res.status(404).send("URl not found");
    }
});


app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000");
});

// GET - Redirection
