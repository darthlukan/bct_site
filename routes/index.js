/**
 * Get the homepage
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  res.sendfile('public/html/index.html');
};

exports.mobile = function (req, res) {
    res.sendfile('mobile/index.html');
};