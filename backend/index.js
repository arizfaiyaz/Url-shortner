import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/create', (req, res) => {
    const url = req.body;
    console.url(url);
    res.send(nanoid(7));
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// GET - Redirection
// POST - Create Short URL