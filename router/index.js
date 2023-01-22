const router = require('express').Router()
const userRouter = require('./user')
const mainRouter = require('./main')
const aboutRouter = require('./about')
const blogRouter = require('./blog')
const servicesRouter = require('./services')
const contactRouter = require('./contact')
router.use(userRouter)
router.use(mainRouter)
router.use(aboutRouter)
router.use(servicesRouter)
router.use(blogRouter)
router.use(contactRouter)

module.exports = router
