const Router = require('koa-router');
const systemAdminRouter = new Router({prefix:'/api/systemadmin'});
// const { find, findById, create, update, delete: del} = require('../controller/systemadmin');
const { getAllUnitSubunit, createOneUnitSubunit, getAllSubunits, updateUnitWithSubunits } = require('../controller/systemadmin');

systemAdminRouter.get('/getAllUnitSubunit', getAllUnitSubunit);
systemAdminRouter.post('/createOneUnitSubunit', createOneUnitSubunit);
systemAdminRouter.get('/getAllSubunits/:unitname', getAllSubunits);
systemAdminRouter.post('/updateUnitWithSubunits/:unitname', updateUnitWithSubunits);
// systemAdminRouter.get('/', find)
// systemAdminRouter.post('/', create)
// systemAdminRouter.get('/:id', findById)
// systemAdminRouter.put('/:id', update)
// systemAdminRouter.delete('/:id', del)

module.exports = systemAdminRouter;