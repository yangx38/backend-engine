const Router = require('koa-router');
const loginRouter = new Router({prefix:'/api/login'});
// SystemAdminModel
const { checkWhetherUserIsSystemAdministrator } = require('../controller/login');

// SystemAdminModel
loginRouter.get('/checkWhetherUserIsSystemAdministrator/:netId', checkWhetherUserIsSystemAdministrator);


module.exports = loginRouter;