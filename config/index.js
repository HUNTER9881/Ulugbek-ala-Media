module.exports = {
    port: 3000,
    database_url: "mongodb://localhost:27017/media",
    database_options: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
    token_time: 1000 * 60 * 60 * 2,
    token_key: "fe57ee544f7c4692d7bfe57ee544f7c4692d7be26eac8568b01211e2bc9e26eac8568b01211e2bc9",
}