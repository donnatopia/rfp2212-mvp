const models = require('../models/stats.js');

module.exports = {
  getStats: (req, res) => {
    models.getStats(req.params.user)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      })
  },

  postStat: (req, res) => {
    models.postStat(req.body)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(409);
      })
  },

  deleteStat: (req, res) => {
    models.deleteStat(req.body)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(409);
      })
  }
};