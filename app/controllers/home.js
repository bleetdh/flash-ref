var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article')

module.exports = function (app) {
  app.use(function (req, res, next) {
    app.locals.flash = req.flash('msg')
    app.locals.user = req.user
    next()
  })
  app.use('/', router)
}

// setting app.locals for all routes

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err)

    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    })
  })
})

router.get('/form', (req, res) => {
  res.render('form')
})

router.post('/users', (req, res) => {
  if (req.body.name !== 'prima') {
    req.flash('msg', 'err err err') // set the flash
    return res.redirect('/')
  } else {
    res.send('hi prima')
  }
})
