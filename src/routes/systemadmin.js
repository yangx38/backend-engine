const Router = require('koa-router');
const systemAdminRouter = new Router({prefix:'/api/systemadmin'});
// *************************** Models ***************************
// UnitSubunitModel
const { getAllUnitSubunit } = require('../controller/systemadmin');
// SubmitterModel
const { getAllSubmitter } = require('../controller/systemadmin');
// FiscalStaffModel
const { getAllFiscalStaff } = require('../controller/systemadmin');
// BudgetModel
const { getAllBudgets } = require('../controller/systemadmin');

// *************************** Routes ***************************
// UnitSubunitModel
systemAdminRouter.get('/getAllUnitSubunit', getAllUnitSubunit);
// SubmitterModel
systemAdminRouter.get('/getAllSubmitter', getAllSubmitter);
// FiscalStaffModel
systemAdminRouter.get('/getAllFiscalStaff', getAllFiscalStaff);
// BudgetModel
systemAdminRouter.get('/getAllBudgets', getAllBudgets);







// Test Data: 
const { createOneSubmitter, createOneFiscalStaff } = require('../controller/systemadmin');
systemAdminRouter.post('/createOneSubmitter', createOneSubmitter);
systemAdminRouter.post('/createOneFiscalStaff', createOneFiscalStaff);

module.exports = systemAdminRouter;