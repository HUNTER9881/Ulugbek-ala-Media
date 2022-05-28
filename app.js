const express = require("express");
const app = express();
const {
    port
} = require('./config/index')
const database = require('./database/index');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')


// Middleware
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors({
    origin: "*"
}))
database.connection()




// Rest api
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
app.use('/api/user', require('./router/userRouter'))
app.use('/api/year', require('./router/yearRouter'))
app.use('/api/kino', require('./router/kinoRouter'))
app.use('/api/season', require('./router/seasonRouter'))
app.use('/api/serial', require('./router/serialRouter'))
app.use('/api/multik', require('./router/multfilmRouter'))
app.use('/api/multserial', require('./router/multserialRouter'))
app.use('/api/rating', require('./router/ratingRouter'))
app.use('/api/contact', require('./router/contactRouter'))


app.listen(port, () => {
    console.log("Server is on")
})