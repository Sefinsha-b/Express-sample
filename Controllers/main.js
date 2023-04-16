//main controlers
module.exports.home=function(req,res){
    res.render('index', { title: 'EXPRESS ' });
}
module.exports.ABC=function(req,res){
    res.render('ABC');
}
module.exports.Contact=function(req,res){
    res.render('Contact');
}
module.exports.Login=function(req,res){
    res.render('Login');
}