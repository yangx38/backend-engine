const Router = require('koa-router');
const formRouter = new Router({prefix:'/api/form'});
// *************************** Models ***************************
// FormModel
const { createOneForm, updateApproversOnForm } = require('../controller/form');

// *************************** Routes ***************************
// FormModel
formRouter.post('/createOneForm', createOneForm);
formRouter.post('/updateApproversOnForm', updateApproversOnForm);




// Test Data: 


module.exports = formRouter;