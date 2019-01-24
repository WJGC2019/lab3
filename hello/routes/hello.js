
/*
 * GET home page.
 */

exports.view = function(req, res){

	var nameToShow = req.params.userName;
	if(req.params.userName.length == 0){
		nameToShow = "World!"
	}
	console.log("name is " + nameToShow)
  res.render('index', {
  	'name': nameToShow,
  });
};
