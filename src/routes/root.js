const Router = require('koa-router');
const router = new Router();
const { index } = require('../controller/root');

router.get('/', index)

module.exports = router;