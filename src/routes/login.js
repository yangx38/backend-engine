const Router = require('koa-router');
const loginRouter = new Router({prefix:'/api/login'});
// SystemAdminModel
const { checkWhetherUserIsSystemAdministrator } = require('../controller/login');
// SubmitterModel
const { checkWhetherUserIsSubmitter, checkWhetherUserIsFiscalStaff } = require('../controller/login');

// SystemAdminModel
loginRouter.get('/checkWhetherUserIsSystemAdministrator/:netId', checkWhetherUserIsSystemAdministrator);
// SubmitterModel
loginRouter.get('/checkWhetherUserIsSubmitter/:netId', checkWhetherUserIsSubmitter);
// FiscalStaffModel
loginRouter.get('/checkWhetherUserIsFiscalStaff/:netId', checkWhetherUserIsFiscalStaff);

module.exports = loginRouter;