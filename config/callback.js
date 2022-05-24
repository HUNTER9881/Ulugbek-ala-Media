module.exports = {
    SUCCESS: function (item) {
        return ({
            message: "Successfully",
            data: item,
        })
    },
    ERROR: function (item) {
        return ({
            message: "Error",
            data: item,
        })
    },

   
}