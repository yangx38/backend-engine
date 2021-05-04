const path = require('path');
class RootCtl {
    index(ctx) {
        ctx.body = 'backend engine';
    }
    upload(ctx) {
        console.log(ctx.request.files)

        const file = ctx.request.files.file;
        const basename = path.basename(file.path);
        ctx.body = { url: `${ctx.origin}/uploads/${basename}` };
    }
}

module.exports = new RootCtl();