const Router = require('koa-router');
const systemAdminRouter = new Router({prefix:'/api/systemadmin'});
// const { find, findById, create, update, delete: del} = require('../controller/systemadmin');
const { createOneUnitSubunit, getAllUnitSubunit } = require('../controller/systemadmin');

systemAdminRouter.post('/createOneUnitSubunit', createOneUnitSubunit);
systemAdminRouter.get('/getAllUnitSubunit', getAllUnitSubunit);
// systemAdminRouter.get('/', find)
// systemAdminRouter.post('/', create)
// systemAdminRouter.get('/:id', findById)
// systemAdminRouter.put('/:id', update)
// systemAdminRouter.delete('/:id', del)

module.exports = systemAdminRouter;