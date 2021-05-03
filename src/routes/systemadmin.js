const Router = require('koa-router');
const systemAdminRouter = new Router({prefix:'/api/systemadmin'});
// UnitSubunitModel
const { getAllUnitSubunit, getAllSubunits, getPeopleOfSubunit } = require('../controller/systemadmin');
// PeopleModel
const { getAllPeople, getPeopleOfUnit } = require('../controller/systemadmin');
// BudgetModel
const { getAllBudgets } = require('../controller/systemadmin');
// const { getAllUnitSubunit, createOneUnitSubunit, getAllSubunits, updateUnitWithSubunits } = require('../controller/systemadmin');

// UnitSubunitModel
systemAdminRouter.get('/getAllUnitSubunit', getAllUnitSubunit);
systemAdminRouter.get('/getAllSubunits', getAllSubunits);

// PeopleModel
systemAdminRouter.get('/getAllPeople', getAllPeople);
systemAdminRouter.get('/getPeopleOfUnit/:unit', getPeopleOfUnit);
systemAdminRouter.get('/getPeopleOfSubunit/:subunit', getPeopleOfSubunit);

// BudgetModel
systemAdminRouter.get('/getAllBudgets', getAllBudgets);


// systemAdminRouter.post('/createOneUnitSubunit', createOneUnitSubunit);
// systemAdminRouter.get('/getAllSubunits/:unitname', getAllSubunits);
// systemAdminRouter.post('/updateUnitWithSubunits/:unitname', updateUnitWithSubunits);

module.exports = systemAdminRouter;