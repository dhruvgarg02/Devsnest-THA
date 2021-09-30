const redis = require('redis')
const connectRedis = require('connect-redis')
const expressSession = require('express-session')

const redisStore = connectRedis(expressSession)
const redisClient = redis.createClient({
  host: "localhost",
  port: "6379"
})

module.exports = {
  redisClient,
  redisStore,
  expressSession
}
