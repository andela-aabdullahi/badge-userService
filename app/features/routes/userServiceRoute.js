var controllerData = require('../controllers/userServiceController');
module.exports = function(app) {
  app.route('/users/signup').post(controllerData.UserSignUp).get(controllerData.getAlluser).delete(controllerData.removeUser);
  app.route('/users/login').post(controllerData.Userlogin);
  app.route('/users/username').post(controllerData.getUserByName);
  app.route('/users/signout').post(controllerData.Usersignout);
  app.route('/users/edit').put(controllerData.updateOneUser).get(controllerData.getUserByName);
  app.route('/users/delete').delete(controllerData.UserDelete);
   app.route('/users/verify').post(controllerData.userVerify);

  // app.route('users/delete').delete(controllerData.UserDelete);
};  