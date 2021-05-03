const UnitSubunitModel = require('../models/systemadmin/unitsubunitmodel');

class SystemAdminCtl {
    async getAllUnitSubunit(ctx) { 
        ctx.body = await UnitSubunitModel.find({}, '-_id');
    }
    // async createOneUnitSubunit(ctx) { 
    //     const systemAdmin = await new UnitSubunitModel(ctx.request.body).save();
    //     ctx.body = systemAdmin
    // }
    // async getAllSubunits(ctx) { 
    //     const unit = await UnitSubunitModel.find({ name: `${ctx.params.unitname}`}, '-_id children');
    //     if (!unit) { ctx.throw(404); }
    //     ctx.body = unit;
    // }
    // async updateUnitWithSubunits(ctx) { 
    //     const unit = await UnitSubunitModel.find({ name: `${ctx.params.unitname}`});
    //     if (!unit) { ctx.throw(404); }
    //     const res = await UnitSubunitModel.findByIdAndUpdate(unit[0]._id, ctx.request.body);
    //     ctx.body = res;
    // }
}

module.exports = new SystemAdminCtl();