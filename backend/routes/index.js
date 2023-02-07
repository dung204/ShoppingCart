const itemsRouter = require('./items');

function router(app) {
  app.use('/items', itemsRouter);
}

module.exports = router;
