import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongodb.config.js";
import  ShortUrl  from './src/models/shortUrl.model.js';
import shortUrl from "./src/routes/shortUrl.route.js";
dotenv.config("./.env");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST - Create Short URL
app.use('/api/create', shortUrl);

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

