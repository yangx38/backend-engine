const Router = require('koa-router');
const formRouter = new Router({prefix:'/api/form'});
// *************************** Models ***************************
// FormModel
const { createOneForm, updateApproversOnForm, 
    // approver
    getFormsFromApproverNetId, approveAnBudget, declineAnBudget,
    // submitter
    getFormsFromSubmitterNetId, } = require('../controller/form');

// *************************** Routes ***************************
// FormModel
formRouter.post('/createOneForm', createOneForm);
formRouter.post('/updateApproversOnForm', updateApproversOnForm);

formRouter.get('/getFormsFromApproverNetId/:netId', getFormsFromApproverNetId);
formRouter.post('/approveAnBudget/:_id/:idx/:netId', approveAnBudget);
formRouter.post('/declineAnBudget/:_id/:idx/:netId', declineAnBudget);

formRouter.get('/getFormsFromSubmitterNetId/:netId', getFormsFromSubmitterNetId);


// Test Data: 


module.exports = formRouter;