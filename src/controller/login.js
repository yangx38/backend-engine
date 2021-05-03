const SystemAdminModel = require('../models/login/systemadminmodel');

class LoginCtl {
    // SystemAdminModel
    async checkWhetherUserIsSystemAdministrator(ctx) { 
        const res = await SystemAdminModel.find({ netId: `${ctx.params.netId}`});
        if (res.length > 0) ctx.body = 1;
        else ctx.body = 0;
    }


        // async createOneSFiscalStaffModel(ctx) { 
        // const systemAdmin = await new FiscalStaffModel(ctx.request.body).save();
        // ctx.body = systemAdmin
}

module.exports = new LoginCtl();