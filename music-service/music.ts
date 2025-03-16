import express from 'express';
import { listenRabbitMQ } from "../rabbitmq.ts";
import cookieParser from "cookie-parser";

let app = express();

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// listenRabbitMQ();
app.get('/musics/:id', (req, res, next) => {
    res.status(200).send(`Test >>>> ${req.params.id}`)
})

app.post('/musics', (req, res, next) => {
    res.status(200).send(`Test >>>> ${req.body.username} ${req.body.password}`)
})
app.get('/musics', (req, res, next) => {
    res.status(200).send(['Jesus', 'I love to praise your name', 'My Story', 'Days of Elijah'])
})

app.listen(8000, () => {
    console.log('Server running on 8000')
})