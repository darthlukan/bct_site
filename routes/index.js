/**
 * Get the homepage
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  res.render('index', { title: 'Express' });
};