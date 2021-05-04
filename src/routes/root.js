const Router = require('koa-router');
const router = new Router();
const { index, upload } = require('../controller/root');

router.get('/', index);
router.post('/upload', upload);

module.exports = router;