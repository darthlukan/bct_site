/**
 * Get the homepage
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  res.sendfile('public/html/index.html');
};