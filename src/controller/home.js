class HomeCtl {
    index(ctx) {
        ctx.body = 'backend engine';
    }
}

module.exports = new HomeCtl();