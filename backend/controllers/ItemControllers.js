const Item = require('../models/Item');

class ItemsController {
  async getAllItems(_, res) {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (e) {
      console.error(`Message: ${e.message}`);
    }
  }

  async getItemById(req, res) {}

  async createItem(req, res) {}

  async deleteItem(req, res) {}
}

module.exports = new ItemsController();
