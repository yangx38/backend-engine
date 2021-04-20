const SystemAdminModel = require('../models/login/systemadminmodel');

class LoginCtl {
    // TEST DATA: 
    async createOneSystemAdministrator(ctx) { 
        const systemAdmin = await new SystemAdminModel(ctx.request.body).save();
        ctx.body = systemAdmin
    }
    async checkWhetherUserIsSystemAdministrator(ctx) { 
        const res = await SystemAdminModel.find({ netId: `${ctx.params.netId}`});
        if (res.length > 0) ctx.body = 1;
        else ctx.body = 0;
    }
}

module.exports = new LoginCtl();