const Router = require('koa-router');
const router = new Router({prefix:'/api/systemadmin'});
const { find, findById, create, update, delete: del} = require('../controller/systemadmin');

router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.put('/:id', update)
router.delete('/:id', del)

module.exports = router;