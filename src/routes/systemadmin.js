const Router = require('koa-router');
const systemAdminRouter = new Router({prefix:'/api/systemadmin'});
const { getAllUnitSubunit } = require('../controller/systemadmin');
// const { getAllUnitSubunit, createOneUnitSubunit, getAllSubunits, updateUnitWithSubunits } = require('../controller/systemadmin');

systemAdminRouter.get('/getAllUnitSubunit', getAllUnitSubunit);
// systemAdminRouter.post('/createOneUnitSubunit', createOneUnitSubunit);
// systemAdminRouter.get('/getAllSubunits/:unitname', getAllSubunits);
// systemAdminRouter.post('/updateUnitWithSubunits/:unitname', updateUnitWithSubunits);

module.exports = systemAdminRouter;