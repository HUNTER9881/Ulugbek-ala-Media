const express = require("express");
const app = express();
const database = require('./database/index');
const path = require('path');
const cors = require('cors')
const expressLayouts = require("express-ejs-layouts");
const { port} = require('./config/index')

// Middleware
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(expressLayouts);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

database.connection()


// Rest api

app.use('/', require('./router/pages'))



app.use('/api/user', require('./router/userRouter'))
app.use('/api/actor', require('./router/actorRouter'))
app.use('/api/category', require('./router/categoryRouter'))
app.use('/api/comment', require('./router/commentRouter'))
app.use('/api/country', require('./router/countryRouter'))
app.use('/api/director', require('./router/directorRouter'))
app.use('/api/genre', require('./router/genreRouter'))
app.use('/api/quality', require('./router/qualityRouter'))
app.use('/api/reply', require('./router/replyRouter'))
app.use('/api/review', require('./router/reviewRouter'))
app.use('/api/tag', require('./router/tagRouter'))
app.use('/api/tarif', require('./router/tarifRouter'))
app.use('/api/year', require('./router/yearRouter'))
app.use('/api/kino', require('./router/kinoRouter'))
app.use('/api/season', require('./router/seasonRouter'))
app.use('/api/serial', require('./router/serialRouter'))
app.use('/api/multik', require('./router/multfilmRouter'))
app.use('/api/multserial', require('./router/multserialRouter'))
app.use('/api/rating', require('./router/ratingRouter'))
app.use('/api/contact', require('./router/contactRouter'))
app.use('/api/payment', require('./router/payment/journalRouter'))
app.use('/api/class', require('./router/classRouter'))




app.listen(port, () => {
    console.log("Server is on")
})