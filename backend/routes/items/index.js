const { Router } = require('express');
const ItemsController = require('../../controllers/ItemControllers');
const itemsRouter = Router();

itemsRouter.get('/', ItemsController.getAllItems);

// itemsRouter.post('/', ItemsController)

module.exports = itemsRouter;
