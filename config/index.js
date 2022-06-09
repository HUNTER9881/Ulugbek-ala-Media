module.exports = {
    port: 2000,
    database_url: "mongodb://localhost:27017/media",
    database_options: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
    token_time: 1000 * 60 * 60 * 24,
    token_key: "secret_key",
    merchant_id: 1474, // oson
    token: "QZqIMDOm1ax66g5OIdg19ztSnMRZ2jDI8TgKmUWdUk9Qp3uX", // oson
}