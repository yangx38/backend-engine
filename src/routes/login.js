const Router = require('koa-router');
const loginRouter = new Router({prefix:'/api/login'});
const { createOneSystemAdministrator, checkWhetherUserIsSystemAdministrator } = require('../controller/login');

loginRouter.post('/createOneSystemAdministrator', createOneSystemAdministrator)
loginRouter.get('/checkWhetherUserIsSystemAdministrator/:netId', checkWhetherUserIsSystemAdministrator)


module.exports = loginRouter;