module.exports = {
    port: 3000,
    database_url: "mongodb://localhost:27017/media",
    database_options: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
    token_time: 1000 * 60 * 60 * 24,
    token_key: "secret_key",
}