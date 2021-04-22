class RootCtl {
    index(ctx) {
        ctx.body = 'backend engine';
    }
}

module.exports = new RootCtl();