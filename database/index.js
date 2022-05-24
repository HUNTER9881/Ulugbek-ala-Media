const { connect } = require('mongoose');
const {
    database_options,
    database_url
} = require('../config/index')

exports.connection = () => {
    connect(database_url, database_options)
        .then(() => {
            console.log("Database is on")
        })
        .catch((e) => {
            console.log("Database is off")
        })
}