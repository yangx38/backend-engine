const Router = require('koa-router');
const loginRouter = new Router({prefix:'/api/login'});
// SystemAdminModel
const { checkWhetherUserIsSystemAdministrator } = require('../controller/login');
// BudgetModel
const { checkWhetherUserIsApprover } = require('../controller/login');
// FiscalStaffModel
const { checkWhetherUserIsFiscalStaff } = require('../controller/login');
// SubmitterModel
const { checkWhetherUserIsSubmitter } = require('../controller/login');

// SystemAdminModel
loginRouter.get('/checkWhetherUserIsSystemAdministrator/:netId', checkWhetherUserIsSystemAdministrator);
// BudgetModel
loginRouter.get('/checkWhetherUserIsApprover/:netId', checkWhetherUserIsApprover);
// FiscalStaffModel
loginRouter.get('/checkWhetherUserIsFiscalStaff/:netId', checkWhetherUserIsFiscalStaff);
// SubmitterModel
loginRouter.get('/checkWhetherUserIsSubmitter/:netId', checkWhetherUserIsSubmitter);

module.exports = loginRouter;