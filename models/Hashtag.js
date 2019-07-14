const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HashtagSchema = Schema({
  hashtag: String
})

const Hashtag = mongoose.model('Hashtag', HashtagSchema)

module.exports = Hashtag
