const Router = require('koa-router');
const loginRouter = new Router({prefix:'/api/login'});
// SystemAdminModel
const { checkWhetherUserIsSystemAdministrator } = require('../controller/login');
// PeopleModel
const { checkWhetherUserIsFiscalStaff_OR_Submitter } = require('../controller/login');

// SystemAdminModel
loginRouter.get('/checkWhetherUserIsSystemAdministrator/:netId', checkWhetherUserIsSystemAdministrator);
// PeopleModel
loginRouter.get('/checkWhetherUserIsFiscalStaffOrSubmitter/:netId', checkWhetherUserIsFiscalStaff_OR_Submitter);

module.exports = loginRouter;