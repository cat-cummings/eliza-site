const connection = require('./connection')

//db requests

//Get all swim blogs
function getBlogposts(db = connection) {
    return db('blogposts').select()
}

module.exports = {
    getBlogposts
}