const Router = require('koa-router');
const router = new Router({prefix:'/systemadmin'});
const { find, findById, create, update, delete: del} = require('../controllers/systemadmin');

router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.put('/:id', update)
router.delete('/:id', del)

module.exports = router;