
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Pomoc' });
};

exports.dashboard = function(req, res){
  res.render('dashboard', { title: 'Dashboard' });
};

exports.mobile = function(req, res){
  res.render('mobile', { title: 'Mobile' });
};