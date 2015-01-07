import RedditApi from './reddit-api'
import ExtractGifs from './extract-gifs'
import DisplayGifs from './display-gifs'

RedditApi.load()
  .then(ExtractGifs)
  .then(DisplayGifs)

export default {}
