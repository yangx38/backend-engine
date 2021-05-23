const Router = require('koa-router');
const formRouter = new Router({prefix:'/api/form'});
// *************************** Models ***************************
// FormModel
const { createOneForm, updateApproversOnForm, getFormsFromApproverNetId, approveAnBudget } = require('../controller/form');

// *************************** Routes ***************************
// FormModel
formRouter.post('/createOneForm', createOneForm);
formRouter.post('/updateApproversOnForm', updateApproversOnForm);
formRouter.get('/getFormsFromApproverNetId/:netId', getFormsFromApproverNetId);
formRouter.post('/approveAnBudget/:_id/:idx/:netId', approveAnBudget);



// Test Data: 


module.exports = formRouter;